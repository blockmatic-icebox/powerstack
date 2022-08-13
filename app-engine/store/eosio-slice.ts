import { app_engine, StoreSlice } from '../index'
import AnchorLink, { PublicKey } from 'anchor-link'
// import * as jwt from 'jsonwebtoken'
import _ from 'lodash'
import { client_args } from '~/app-config/client-config'
import { newAnchorLink } from '../library'

export enum EOSIOAuthType {
  ANCHOR,
}

export interface EosioState {
  anchorLink?: AnchorLink
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
  logout: () => void
  setSessionToken: (token: string) => void
}

export type EosioSlice = EosioState & EosioActions

const defaultEosioState: EosioState = {
  eosio_current_provider: null,
  authed: false,
  authType: undefined,
  cred_id: undefined,
  pub_key: undefined,
  token: '',
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

      // Use the anchor-link login method with the chain id to establish a session
      const identity = await anchorLink.login(client_args.app_name)
      // const account = auth ? await anchorLink.client.v1.chain.get_account(auth.actor.toString()) : undefined
      const pub_key = PublicKey.from(identity.session.publicKey)

      const payload = {
        sign_data: {
          digest: identity.transaction.signingDigest(identity.session.chainId).toString(),
          pub_key,
          signature: identity.signatures.map((sign) => sign.toString())[0],
        },
        account: identity.signer.actor.toString(),
      }

      console.log(payload)

      const result = await bitcashAuthService.getTokenAnchorEOS(payload)

      const { token, error } = result

      if (error) throw new Error(error)

      set({ authed: true, authType: AuthType.ANCHOR, pub_key, token })
      get().setSessionToken(token)

      await get().setAccount(identity.signer.actor.toString())
    } catch (error) {
      get().logout()
      throw error
    }
  },
  // clear account state and reset auth on logout
  logout: async () => {
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

// ============= WIP  =============
interface RequestTokenAnchorEOSParams {
  identity: any
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
