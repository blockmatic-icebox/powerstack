import { StoreSlice } from '../index'
import AnchorLink, { ChainId, PermissionLevel } from 'anchor-link'
import _ from 'lodash'
import { app_args } from '~/app-config/app-arguments'
import { antelope_api, newAnchorLink } from '../library/antelope'
import { app_logger } from '../library/logger'
import { AppUser } from '../types/app-engine'
import Decimal from 'decimal.js'
import { appNetworkToChainConfig } from './web3auth-slice'

export enum AntelopeAuthType {
  ANCHOR = 'web3_anchor',
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
    set({ web3auth_chain_config: appNetworkToChainConfig('eosio') })

    try {
      get().logoutWithAnchor()
      const anchorLink = get().anchorLink || newAnchorLink

      if (!get().anchorLink) set({ anchorLink })
      // Use the anchor-link login method with the chain id to establish a session
      const identity = await anchorLink.login(app_args.app_name)
      const pub_key = identity.session.publicKey.toString()
      const account = identity.signer.actor.toString()
      const user_balance = antelope_api.get_currency_balance('eosio.token', account)

      await get().createSession({
        // digested transaction from the trnx generated after identifying
        message: identity.transaction.signingDigest(identity.session.chainId).toString(),
        // public_key is user_address, or username can be user_address for eosio.
        address: pub_key,
        // signature made from the trnx generated after identifying
        signed_message: identity.signatures.map((sign) => sign.toString())[0],
        auth_method: 'web3_anchor',
        network: 'eos',
      })

      const user = get().user
      get().setUser({
        ...(user as AppUser),
        user_addresses: [
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
    const anchorLink = get().anchorLink || newAnchorLink

    if (!get().anchorLink) set({ anchorLink })
    // remove current app name session
    await anchorLink.removeSession(
      app_args.app_name,
      get().eosio_trnx_signer as PermissionLevel,
      ChainId.from(app_args.services.antilope.eos_chain_id),
    )
  },
  logoutAntelope: async () => {},

  // this function is called from session-state.ts when a new session is created
  initAntelope: async () => {
    app_logger.log('🚊 initializing antelope slice ...')
    // TODO: maybe reconnect Anchor here ? - Gabo
    const anchorLink = get().anchorLink || newAnchorLink

    if (!get().anchorLink) set({ anchorLink })

    await anchorLink.restoreSession(
      app_args.app_name,
      get().eosio_trnx_signer,
      ChainId.from(app_args.services.antilope.eos_chain_id),
    )
    app_logger.log('🚊 antelope slice initialized')
  },
})
