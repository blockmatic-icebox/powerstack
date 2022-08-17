import { app_engine, StoreSlice } from '../index'
import AnchorLink, { PublicKey } from 'anchor-link'
// import * as jwt from 'jsonwebtoken'
import _ from 'lodash'
import { client_args } from '~/app-config/client-config'
import { SignedTransactionType } from '@greymass/eosio'
import { newAnchorLink } from '../library/eosio'

export enum EOSIOAuthType {
  ANCHOR,
}

export interface EosioState {
  anchorLink?: AnchorLink
  account: string
  authed: boolean
  token: string
  authType?: EOSIOAuthType
  cred_id?: string
  pub_key?: PublicKey
  eosio_current_provider: null
}

export type EosioActions = {
  initEosio: () => void
  loginWithAnchor: () => Promise<void>
  logoutEosio: () => void
  setSessionToken: (token: string) => void
  setAccount: (account: string) => void
}

export type EosioSlice = EosioState & EosioActions

const defaultEosioState: EosioState = {
  eosio_current_provider: null,
  authed: false,
  authType: undefined,
  cred_id: undefined,
  pub_key: undefined,
  token: '',
  account: '',
}

export const createEosioSlice: StoreSlice<EosioSlice> = (set, get) => ({
  ...defaultEosioState,
  setSessionToken: () => {},
  loginWithAnchor: async () => {
    console.log('loginWithAnchor')
    try {
      // get().logout() // TODO: fix me @RUBENABIX
      const anchorLink = get().anchorLink || newAnchorLink

      if (!get().anchorLink) set({ anchorLink })

      console.log('init wallet login')
      // Use the anchor-link login method with the chain id to establish a session
      const identity = await anchorLink.login(client_args.app_name)
      console.log('identity', identity)
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

      console.log(payload)

      const result = await getTokenAnchorEOS(payload)

      console.log({ anchor: result })

      const { token, error } = result

      if (error) throw new Error(error)

      set({ authed: true, authType: EOSIOAuthType.ANCHOR, pub_key, token })
      get().setSessionToken(token)

      await get().setAccount(account)
    } catch (error) {
      get().logoutEosio()
      throw error
    }
  },
  // TODO: is it requered?
  setAccount: () => {},
  // clear account state and reset auth on logout
  logoutEosio: async () => {
    // await get().anchorLink?.removeSession('100xapp')
    // get().setSessionToken('')
    // set(eosioAuthDefaultState)
  },

  setEOSIOSessionToken: (token: string) => {
    if (!token) return localStorage.removeItem('bitcash_session')
    // const decoded_token = jwt.decode(token.replace('Bearer ', ''))

    // const anchorLink = get().anchorLink || newAnchorLink

    // if (!get().anchorLink) set({ anchorLink })

    // set({ authed: true, authType: decoded_token?.authType, token })
    // return localStorage.setItem('bitcash_session', token)
  },

  // this function is called from session-state.ts when a new session is created
  initEosio: () => {
    console.log('⚙️ initializing eosio slice ...')
    // TODO:
    console.log('⚙️ eosio slice initialized')
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
  const response = await fetch(`${client_args.services.auth_api}/provider/anchor`, {
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
