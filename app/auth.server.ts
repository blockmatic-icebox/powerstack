import { createCookieSessionStorage } from '@remix-run/node'
import { ethers } from 'ethers'
import { Authenticator, AuthorizationError } from 'remix-auth'
import { FormStrategy } from 'remix-auth-form'
import { appconfig } from './app-config'
import type { Address, Network, User } from './types'
import nacl from 'tweetnacl'

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

export const auth = new Authenticator<User>(session_storage)

const enc = new TextEncoder().encode

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
  new FormStrategy(async ({ form }) => {
    const { address, signature, message } = getFormData(form)
    const addr = await ethers.utils.verifyMessage(message, signature)
    if (addr !== address) throw new AuthorizationError(`Invalid signature`)

    const user: User = {
      address: address.toString(),
      network: 'rinkeby', // TODO: change to dynamically set by the user
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

    const user: User = {
      address: address.toString(),
      network: 'solana', // TODO: change to dynamically set by the user
    }

    return user
  }),
  // each strategy has a name and can be changed to use another one
  'phantom',
)
