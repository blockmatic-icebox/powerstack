import NextAuth, { DefaultSession } from 'next-auth'

export interface AuthUser {
  id: string
  image: string
  name: string
  fullname: string
  wallet: string
  username: string
  email: string
  hasura?: string
  bio?: string
}

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: AuthUser & DefaultSession['user']
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  // interface User {
  //   id: string
  //   address: string
  // }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends AuthUser {
    authTokenExpiresAt: string
  }
}
