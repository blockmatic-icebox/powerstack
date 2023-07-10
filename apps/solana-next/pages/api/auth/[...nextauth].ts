import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import { solanaAuthProvider } from 'nextauth-solana'

import { AuthUser } from '~/types/auth/auth.d'

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = [solanaAuthProvider]

  return await NextAuth(req, res, {
    providers,
    session: {
      strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      // after a user is logged in, we can keep the address in session
      async session({ session, token }) {
        console.log('session', { session, token })
        // TODO: generate valid hasura jwt
        const hasuraJwt = 'null'
        const dbUser: AuthUser = {
          account: token.sub || '',
          hasuraJwt,
        }
        session.user = dbUser
        return session
      },
    },
  })
}
