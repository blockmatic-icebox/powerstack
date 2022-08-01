import { app_engine, StoreSlice } from '../index'
import AnchorLink, { PublicKey } from 'anchor-link'
import * as jwt from 'jsonwebtoken'
import _ from 'lodash'
import { newAnchorLink } from '../library/utils'

export type EosioState = {
  eosio_current_provider: null
}

export type EosioActions = {
  initEosio: () => void
  loginWithAnchor: () => Promise<void>
}

export type EosioSlice = EosioState & EosioActions

const defaultEosioState: EosioState = {
  eosio_current_provider: null,
}

export const createEosioSlice: StoreSlice<EosioSlice> = (set, get) => ({
  ...defaultEosioState,

  loginWithAnchor: async () => {
    console.log('loginWithAnchor')
    // try {
    //   // get().logout()
    //   const anchorLink = get().anchorLink || newAnchorLink

    //   if (!get().anchorLink) set({ anchorLink })

    //   // Use the anchor-link login method with the chain id to establish a session
    //   const identity = await anchorLink.login('100xapp')
    //   // const account = auth ? await anchorLink.client.v1.chain.get_account(auth.actor.toString()) : undefined
    //   const pub_key = PublicKey.from(identity.session.publicKey)

    //   const payload = {
    //     identity,
    //   }

    //   const result = await powerstackAuthService.getTokenAnchorEOS(payload)

    //   const { token } = result

    //   set({ authed: true, authType: EOSIOAuthType.ANCHOR, pub_key, token })
    //   get().setSessionToken(token)
    // } catch (error) {
    //   get().logout()
    //   throw error
    // }
  },
  // clear account state and reset auth on logout
  logout: async () => {
    // await get().anchorLink?.removeSession('100xapp')
    // get().setSessionToken('')
    // set(eosioAuthDefaultState)
  },

  setEOSIOSessionToken: (token) => {
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
  const response = await fetch(
    `${app_engine.getState().app_engine_config.services.auth_api}/provider/anchor`,
    {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  )

  return await response.json()
}

export const powerstackAuthService = {
  getTokenAnchorEOS,
}

export enum EOSIOAuthType {
  ANCHOR,
}

export type EOSIOAuthState = {
  anchorLink?: AnchorLink
  authed: boolean
  token: string
  authType?: EOSIOAuthType
  cred_id?: string
  pub_key?: PublicKey
  loginWithAnchor: () => Promise<void>
  logout: () => void
  setSessionToken: (token: string) => void
}

const eosioAuthDefaultState = {
  authed: false,
  authType: undefined,
  cred_id: undefined,
  pub_key: undefined,
  token: '',
}

//==================================================
