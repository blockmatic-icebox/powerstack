import NextAuth from 'next-auth'
import { NextAuthOptions } from 'next-auth'

import { refreshAuthToken } from '~/lib/auth'

import { niftoryAuthProvider } from './niftory-auth.provider'

export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [niftoryAuthProvider],
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    // See also: https://next-auth.js.org/tutorials/refresh-token-rotation
    jwt: async ({ token, user, account }) => {
      // user and account are only passed in at inital sign in.
      if (account && user) {
        return {
          ...token,
          authToken: account?.id_token,
          authTokenExpiresAt: account?.expires_at ? account?.expires_at * 1000 : 0,
          refreshToken: account?.refresh_token,
        }
      }

      // this isn't initial sign-in, so let's see if the token is still valid
      if (Date.now() < new Date(token.authTokenExpiresAt as number).getDate()) {
        // token is still valid, no need to refresh it
        return token
      }

      // if we get here, the token is expired, so we need to refresh it
      try {
        const refreshed = await refreshAuthToken(token.refreshToken as string)
        return {
          ...token,
          authToken: refreshed?.id_token,
          authTokenExpiresAt: refreshed?.expires_at ? refreshed?.expires_at * 1000 : 0,
          refreshToken: refreshed?.refresh_token || token?.refresh_token,
        }
      } catch (e) {
        console.error(e)
        return { ...token, error: e }
      }
    },
    session: async ({ session, token }) => {
      session.user = {
        ...session.user,
        userId: token.sub || '',
        clientId: token.aud?.toString() || '',
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
