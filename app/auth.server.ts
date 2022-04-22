import { createCookieSessionStorage } from '@remix-run/node'
import { ethers } from 'ethers'
import { Authenticator, AuthorizationError } from 'remix-auth'
import { FormStrategy } from 'remix-auth-form'
import { Address } from './types'

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

export type RareMintUser = {
  address: Address
} | null

export const auth = new Authenticator<RareMintUser>(session_storage)

export type WalletType = 'metamask' | 'wallet_connect'

auth.use(
  new FormStrategy(async ({ form }) => {
    const address = form.get('address')
    const signature = form.get('signature')
    const message = form.get('message')

    // all these values are required
    console.log('metamask strategy', { address, signature, message })
    if (!address || !signature || !message)
      throw new AuthorizationError(`Invalid metamask login request`)

    const signerAddr = await ethers.utils.verifyMessage(message.toString(), signature.toString())
    if (signerAddr !== address) throw new AuthorizationError(`Invalid signature`)

    const user: RareMintUser = {
      address: address.toString(),
    }

    return user
  }),
  // each strategy has a name and can be changed to use another one
  'metamask',
)
