import pick from 'lodash/pick'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'

import { solanaAuthProvider } from '~/server'
import { getAccountbyWallet } from '~/services/account'
import { AuthUser } from '~/types/auth/auth'

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = [solanaAuthProvider]

  // const isDefaultSigninPage = req.method === 'GET' && req.query.nextauth?.includes('signin')
  // if (isDefaultSigninPage) providers.pop()

  return await NextAuth(req, res, {
    providers,
    session: {
      strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        const res = await getAccountbyWallet(user.id)
        if (!res.account) return '/unauthorized'
        // // console.log({ user, account, profile, email, credentials })
        return true
      },
      // after a user is logged in, we can keep the address in session
      async session({ session, token }) {
        // TODO: check how to avoid double query signIn y session
        // console.log('🧑🏻‍💻', session, token)
        const { account } = await getAccountbyWallet(token.sub!)
        if (!account) throw new Error("Can't find account")
        const dbUser: AuthUser = {
          email: account.email || '',
          image: account.image || '',
          fullname: account.name || '',
          username: account.username || '',
          wallet: account.wallet || '',
          id: account.id.toString(),
          name: account.name.substring(0, account.name.indexOf(' ')),
          bio: account.bio.substring(0, 50),
        }
        session.user = dbUser
        return session
      },
    },
  })
}

// export const authOptions: NextAuthOptions = {
//   // https://next-auth.js.org/configuration/providers/oauth
//   providers: [solanaAuthProvider],
//   callbacks: {
//     // See also: https://next-auth.js.org/tutorials/refresh-token-rotation
//     jwt: async ({ token, user }) => {
//       // // console.log({ token, user, account })
//       // user and account are only passed in at inital sign in.

//       // const { address, signedMessage, message } = req.body
//       // const isValidSignature = nacl.sign.detached.verify(
//       //   new TextEncoder().encode(message),
//       //   bs58.decode(signedMessage),
//       //   bs58.decode(address),
//       // )
//       // if (!isValidSignature)
//       //   return res.status(401).send({ token: null, error: 'Invalid signedMessage' }) // TODO: fix me normalize error

//       // const account = await getAccountDataByWalletAddress(address)
//       //   if (account && user) {
//       //     return {
//       //       ...token,
//       //       user,
//       //       authTokenExpiresAt: account?.expires_at ? account?.expires_at * 1000 : 0,
//       //       refreshToken: account?.refresh_token,
//       //     }
//       //   }

//       return token
//     },
//     session: async ({ session, token, user }) => {
//       session.user = {
//         ...session.user,
//         ...(token as any).user,
//         jwt: token.authToken?.toString() || '',
//         error: token.error?.toString() || '',
//       }

//       return session
//     },
//   },
// }

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
// export default NextAuth(authOptions)

// export const authOptions: NextAuthOptions = {
//   // https://next-auth.js.org/configuration/providers/oauth
//   providers: [solanaAuthProvider],
//   callbacks: {
//     // See also: https://next-auth.js.org/tutorials/refresh-token-rotation
//     jwt: async ({ token, user, account }) => {
//       // // console.log({ token, user, account })
//       // user and account are only passed in at inital sign in.
//       if (account && user) {
//         return {
//           ...token,
//           user,
//           authTokenExpiresAt: account?.expires_at ? account?.expires_at * 1000 : 0,
//           refreshToken: account?.refresh_token,
//         }
//       }

//       return token
//     },
//     session: async ({ session, token, user }) => {
//       session.user = {
//         ...session.user,
//         ...(token as any).user,
//         jwt: token.authToken?.toString() || '',
//         error: token.error?.toString() || '',
//       }

//       return session
//     },
//   },
// }

// // For more information on each option (and a full list of options) go to
// // https://next-auth.js.org/configuration/options
// export default NextAuth(authOptions)
