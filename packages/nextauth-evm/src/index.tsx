import CredentialsProvider from 'next-auth/providers/credentials'

export const evmAuthProvider = CredentialsProvider({
  name: 'evm',
  id: 'evm',
  credentials: {},
  async authorize(credentials: any) {
    //   Crendtials sent

    return { id: credentials.address || '' }
  },
})
