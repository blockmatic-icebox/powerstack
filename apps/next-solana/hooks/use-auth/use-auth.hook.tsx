import bs58 from 'bs58'
import { signIn as nextAuthSignIn, signOut, useSession } from 'next-auth/react'

import { clientEnv } from '~/config/client'
import { fetchJson } from '~/lib/fetch'
import { getPhatomProvider } from '~/lib/wallet'

export function useAuth() {
  const { data: session } = useSession()

  const signIn = async () => {
    const provider = getPhatomProvider()
    const resp = await provider.request({ method: 'connect' })
    const encodedMessage = new TextEncoder().encode(clientEnv.loginMessage)

    const { signature } = await provider.signMessage(encodedMessage, 'utf8')
    const signedMessage = bs58.encode(signature)

    const address = resp.publicKey.toString()
    const { csrfToken }: { csrfToken: string } = await fetchJson('/api/auth/csrf')

    return nextAuthSignIn('solana', {
      redirect: false,
      signedMessage,
      message: clientEnv.loginMessage,
      address,
      csrfToken,
      json: true,
    })
  }

  return {
    session,
    signIn,
    signOut: () => signOut({ redirect: false }),
  }
}
