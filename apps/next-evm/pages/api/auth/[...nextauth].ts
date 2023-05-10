import NextAuth from 'next-auth'
import { NextAuthOptions } from 'next-auth'

import { evmAuthProvider } from './evm-auth-provider'

export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [evmAuthProvider],
  callbacks: {
    // See also: https://next-auth.js.org/tutorials/refresh-token-rotation
    jwt: async ({ token, user, account }) => {
      // console.log({ token, user, account })
      // user and account are only passed in at inital sign in.
      if (account && user) {
        return {
          ...token,
          user,
          authTokenExpiresAt: account?.expires_at ? account?.expires_at * 1000 : 0,
          refreshToken: account?.refresh_token,
        }
      }

      return token
    },
    session: async ({ session, token, user }) => {
      session.user = {
        ...session.user,
        ...(token as any).user,
        jwt: token.authToken?.toString() || '',
        error: token.error?.toString() || '',
      }

      return session
    },
  },
}

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth(authOptions)
