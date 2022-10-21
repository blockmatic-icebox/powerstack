import { StoreSlice } from '../index'
import AnchorLink, { ChainId, Name, PermissionLevel } from 'anchor-link'
import _ from 'lodash'
import { app_args } from '~/engine/config/app.config'
import { antelope_api, createNewAnchorLink } from '../library/antelope'
import { app_logger } from '../library/logger'
import { AppUser } from '../types/app-engine'
import Decimal from 'decimal.js'
import { appNetworkToChainConfig } from './web3auth-slice'
import { app_networks } from '../static/app-networks'

export enum AntelopeAuthType {
  ANCHOR = 'web3_antelope',
  ANTILOPE = 'web3_antilope',
}

export interface AntelopeState {
  anchorLink?: AnchorLink
  eosio_trnx_signer?: PermissionLevel
}

export type AntelopeActions = {
  initAntelope: () => void
  loginWithAnchor: () => Promise<void>
  logoutWithAnchor: () => Promise<void>
  logoutAntelope: () => void
}

export type AntelopeSlice = AntelopeState & AntelopeActions

const defaultAntelopeState: AntelopeState = {
  anchorLink: undefined,
  eosio_trnx_signer: undefined,
}

export const createAntelopeSlice: StoreSlice<AntelopeSlice> = (set, get) => ({
  ...defaultAntelopeState,
  loginWithAnchor: async () => {
    app_logger.log('🚊 login with anchor')
    set({ web3auth_chain_config: appNetworkToChainConfig('eos') })

    try {
      get().logoutWithAnchor()
      const anchorLink = get().anchorLink || createNewAnchorLink()

      if (!get().anchorLink) set({ anchorLink })
      // Use the anchor-link login method with the chain id to establish a session
      const identity = await anchorLink.login(app_args.app_name)
      const pub_key = identity.session.publicKey.toString()
      const account = identity.signer.actor.toString()
      const user_balance = antelope_api.get_currency_balance('eosio.token', account)

      await get().createSession({
        // digested transaction from the trnx generated after identifying
        message: identity.transaction.signingDigest(identity.session.chainId).toString(),
        // account is user_address for eosio.
        address: account,
        eos_pub_key: pub_key,
        // signature made from the trnx generated after identifying
        signed_message: identity.signatures.map((sign) => sign.toString())[0],
        auth_method: 'web3_antelope',
        network: 'eos',
      })

      const user = get().user
      get().setUser({
        ...(user as AppUser),
        addresses: [
          {
            // TODO: get().web3auth_chain_config
            network: 'eos',
            address: pub_key,
            // TODO: get().web3auth_chain_config
            ticker: 'EOS',
            balance: new Decimal(user_balance.toString()),
            unit_balance: user_balance.toString(),
          },
        ],
      })
    } catch (error) {
      get().logoutAntelope()
      throw error
    }
  },
  logoutWithAnchor: async () => {
    const anchorLink = get().anchorLink || createNewAnchorLink()

    if (!get().anchorLink) set({ anchorLink })
    // remove current app name session
    try {
      const default_permissions = PermissionLevel.from({
        actor: Name.from(get().user?.username as string),
        permission: 'active',
      })
      await anchorLink.removeSession(
        app_args.app_name,
        (get().eosio_trnx_signer as PermissionLevel) || default_permissions,
        ChainId.from(app_networks.eos.chain_id),
      )
    } catch (error) {
      console.error('[ERROR] Anchor Link - Remove Session:', error)
    }
  },
  logoutAntelope: async () => {},

  initAntelope: async () => {
    app_logger.log('🚊 initializing antelope slice ...')
    const anchorLink = createNewAnchorLink()

    set({ anchorLink: createNewAnchorLink() })

    await anchorLink.restoreSession(
      app_args.app_name,
      get().eosio_trnx_signer,
      ChainId.from(app_networks.eos.chain_id),
    )
    app_logger.log('🚊 antelope slice initialized')
  },
})
