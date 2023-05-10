import NextAuth, { DefaultSession } from 'next-auth'

export interface AuthUser {
  address: string
  username: string
  hasura: string
}
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string
      jwt: string
      error: string
    } & AuthUser &
      DefaultSession['user']
  }

  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    user: AuthUser
    authTokenExpiresAt: string
  }
}
