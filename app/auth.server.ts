import { createCookieSessionStorage } from '@remix-run/node'
import { ethers } from 'ethers'
import { Authenticator, AuthorizationError } from 'remix-auth'
import { FormStrategy } from 'remix-auth-form'
import type { AppUser } from './types'
import nacl from 'tweetnacl'
import axios from 'axios'
import { TwitterStrategy } from './twitter-auth-strategy'
import { appconfig } from './app-config'

export const session_storage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secrets: ['s3cret'], // This should be an env variable
    secure: process.env.NODE_ENV === 'production',
  },
})

export const auth = new Authenticator<AppUser>(session_storage)

const enc = new TextEncoder().encode

const verifyToken = async (token: string) => {
  try {
    const {
      data: { decoded_token },
    } = await axios.post(`${appconfig.services.auth}/token/verify`, {
      token,
    })
    return decoded_token
  } catch (error) {
    console.log('error', (error as Error).message)
    return null
  }
}

export type WalletType = 'metamask' | 'wallet_connect'

const getFormData = (form: FormData) => {
  const address = form.get('address')?.toString()
  const signature = form.get('signature')?.toString()
  const message = form.get('message')?.toString()

  if (!address || !signature || !message)
    throw new AuthorizationError(`Invalid login request`)

  return {
    address,
    signature,
    message,
  }
}

auth.use(
  new TwitterStrategy({}, async (params) => {
    if (!params.token) throw new AuthorizationError(`Not token provided`)
    const decoded_token = await verifyToken(params.token)
    if (!decoded_token) throw new AuthorizationError(`Invalid token provided`)
    const user: AppUser = {
      address: '',
      network: '',
      provider: 'twitter',
      id: decoded_token.user.id,
      name: decoded_token.user.name,
      username: decoded_token.user.username,
      token: params.token,
    }
    return user
  }),
  'twitter',
)

auth.use(
  new FormStrategy(async ({ form }) => {
    const { address, signature, message } = getFormData(form)
    const addr = await ethers.utils.verifyMessage(message, signature)
    if (addr !== address) throw new AuthorizationError(`Invalid signature`)

    const user: AppUser = {
      address: address.toString(),
      network: 'rinkeby', // TODO: change to dynamically set by the user
      provider: 'metamask',
      id: '',
      name: '',
      username: '',
      token: '',
    }

    return user
  }),
  // each strategy has a name and can be changed to use another one
  'metamask',
)

auth.use(
  new FormStrategy(async ({ form }) => {
    const { address, signature, message } = getFormData(form)

    const resp = nacl.sign.detached.verify(
      enc(message),
      enc(signature),
      enc(address),
    )
    console.log('auth response', resp)
    // throw new AuthorizationError(`Invalid signature`)

    const user: AppUser = {
      address: address.toString(),
      network: 'solana', // TODO: change to dynamically set by the user
      provider: 'phantom',
      id: '',
      name: '',
      username: '',
      token: '',
    }

    return user
  }),
  // each strategy has a name and can be changed to use another one
  'phantom',
)
