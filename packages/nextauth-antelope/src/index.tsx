import { Checksum256, PublicKey, Signature } from 'eosio-core'
import CredentialsProvider from 'next-auth/providers/credentials'

export const antelopeAuthProvider = CredentialsProvider({
  name: 'antelope',
  id: 'antelope',
  credentials: {},
  async authorize(credentials: any) {
    //   Crendtials sent
    const signature = Signature.from(credentials.signature as string)
    const account = credentials.account as string
    const pubKey = PublicKey.from(credentials.pubKey as string)
    const trxDigest = Checksum256.from(credentials.trxDigest as string)

    const isValidSignature = await signature.verifyDigest(trxDigest, pubKey)

    if (!isValidSignature) return null

    return { id: account }
  },
})
