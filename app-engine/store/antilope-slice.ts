import { StoreSlice } from '../index'
import AnchorLink, { PublicKey } from 'anchor-link'
import _ from 'lodash'
import { app_args } from '~/app-config/app-arguments'
import { newAnchorLink } from '../library/antilope'
import { app_logger } from '../library/logger'

export enum AntilopeAuthType {
  ANCHOR,
}

export interface AntilopeState {
  anchorLink?: AnchorLink
  account: string
  authed: boolean
  authType?: AntilopeAuthType
  cred_id?: string
  pub_key?: PublicKey
}

export type AntilopeActions = {
  initAntilope: () => void
  loginWithAnchor: () => Promise<void>
  logoutAntilope: () => void
  setSessionToken: (token: string) => void
}

export type AntilopeSlice = AntilopeState & AntilopeActions

const defaultAntilopeState: AntilopeState = {
  authed: false,
  authType: undefined,
  cred_id: undefined,
  pub_key: undefined,
  account: '',
}

export const createAntilopeSlice: StoreSlice<AntilopeSlice> = (set, get) => ({
  ...defaultAntilopeState,
  setSessionToken: () => {},
  loginWithAnchor: async () => {
    app_logger.log('loginWithAnchor')
    try {
      // get().logout() // TODO: fix me @RUBENABIX
      const anchorLink = get().anchorLink || newAnchorLink

      if (!get().anchorLink) set({ anchorLink })

      app_logger.log('init wallet login')
      // Use the anchor-link login method with the chain id to establish a session
      const identity = await anchorLink.login(app_args.app_name)
      app_logger.log('identity', identity)
      const pub_key = PublicKey.from(identity.session.publicKey)
      const account = identity.signer.actor.toString()

      const payload = {
        sign_data: {
          digest: identity.transaction.signingDigest(identity.session.chainId).toString(),
          pub_key,
          signature: identity.signatures.map((sign) => sign.toString())[0],
        },
        account,
      }

      // const result = await getTokenAnchorEOS(payload)
      //TODO: call get.createSession()
    } catch (error) {
      get().logoutAntilope()
      throw error
    }
  },
  logoutAntilope: async () => {},

  // this function is called from session-state.ts when a new session is created
  initAntilope: () => {
    app_logger.log('⚙️ initializing antilope slice ...')
    // TODO: maybe reconnect Anchor here ? - Gabo
    app_logger.log('⚙️ antilope slice initialized')
  },
})
