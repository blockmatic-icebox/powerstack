import bs58 from 'bs58'
import CredentialsProvider from 'next-auth/providers/credentials'
import nacl from 'tweetnacl'

export const solanaAuthProvider = CredentialsProvider({
  name: 'solana',
  id: 'solana',
  credentials: {},
  async authorize(credentials: any) {
    //   Crendtials sent
    const signedMessage = credentials.signedMessage as string
    const message = credentials.message as string
    const address = credentials.address as string

    const isValidSignature = nacl.sign.detached.verify(
      new TextEncoder().encode(message),
      bs58.decode(signedMessage),
      bs58.decode(address)
    )

    // // console.log({ isValidSignature })
    if (!isValidSignature) return null

    return { id: address }
  },
})
