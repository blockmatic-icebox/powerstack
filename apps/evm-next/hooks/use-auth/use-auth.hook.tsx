'use client'

import { signIn as nextAuthSignIn, signOut as nextAuthSignOut, useSession } from 'next-auth/react'
import { useEffectOnce } from 'react-use'

import { chainConfig } from '~/config/chain'
import { clientEnv } from '~/config/client'

export function useAuth() {
  const { data: session, status } = useSession()

  const signInWithRainbowKit = async () => {
    // return nextAuthSignIn("evm", {
    //   redirect: false,
    //   signature: signature.toString(),
    //   trxDigest: trxDigest.toString(),
    //   account,
    //   pubKey,
    //   json: true,
    // })
  }

  const signOutWithRainbowKit = async () => {
    console.log('signing out')
    if (!session) return

    nextAuthSignOut()
  }

  // restore anchor session on loa
  const restoreSession = async () => {}

  // restore sessoin on mount
  useEffectOnce(() => {
    restoreSession()
  })

  return {
    session,
    signIn: signInWithRainbowKit,
    signOut: signOutWithRainbowKit,
  }
}
