
import CredentialsProvider from "next-auth/providers/credentials"

export const solanaAuthProvider = CredentialsProvider({
  name: "solana",
  id: "solana",
  credentials: {},
  async authorize(credentials: any) {
    //   Crendtials sent
 

    return { id: credentials.address || '' }
  },
})
