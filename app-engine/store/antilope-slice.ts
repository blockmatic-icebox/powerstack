import { app_engine, StoreSlice } from '../index'
import AnchorLink, { PublicKey } from 'anchor-link'
// import * as jwt from 'jsonwebtoken'
import _ from 'lodash'
import { app_args } from '~/app-config/app-arguments'
import { SignedTransactionType } from '@greymass/eosio'
import { newAnchorLink } from '../library/antilope'
import { app_logger } from '../library/logger'

export enum AntilopeAuthType {
  ANCHOR,
}

export interface AntilopeState {
  anchorLink?: AnchorLink
  account: string
  authed: boolean
  token: string
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
  token: '',
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

      app_logger.log(payload)

      const result = await getTokenAnchorEOS(payload)

      app_logger.log({ anchor: result })

      const { token, error } = result

      if (error) throw new Error(error)

      set({ authed: true, authType: AntilopeAuthType.ANCHOR, pub_key, token })
      get().setSessionToken(token)
    } catch (error) {
      get().logoutAntilope()
      throw error
    }
  },
  logoutAntilope: async () => {},

  setAntilopeSessionToken: (token: string) => {
    if (!token) return localStorage.removeItem('bitcash_session')
    // const decoded_token = jwt.decode(token.replace('Bearer ', ''))

    // const anchorLink = get().anchorLink || newAnchorLink

    // if (!get().anchorLink) set({ anchorLink })

    // set({ authed: true, authType: decoded_token?.authType, token })
    // return localStorage.setItem('bitcash_session', token)
  },

  // this function is called from session-state.ts when a new session is created
  initAntilope: () => {
    app_logger.log('⚙️ initializing antilope slice ...')

    app_logger.log('⚙️ antilope slice initialized')
  },
})
interface RequestTokenAnchorEOSParams {
  sign_data: {
    pub_key: PublicKey
    signature?: string
    digest?: string
    signed_trasaction_weauth?: SignedTransactionType
  }
  account: string
}

const getTokenAnchorEOS = async (data: RequestTokenAnchorEOSParams) => {
  const response = await fetch(`${app_args.services.auth_api}/provider/anchor`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return await response.json()
}

export const powerstackAuthService = {
  getTokenAnchorEOS,
}
