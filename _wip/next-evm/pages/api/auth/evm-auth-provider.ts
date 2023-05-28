import bs58 from 'bs58'
import { ethers } from 'ethers'
import CredentialsProvider from 'next-auth/providers/credentials'

export const evmAuthProvider = CredentialsProvider({
  name: 'evm',
  id: 'evm',
  async authorize(credentials: any) {
    return {
      id: '',
      address: '',
      username: '',
      hasura: '',
      ...credentials,
    }
  },
  credentials: {},
})
