
import CredentialsProvider from "next-auth/providers/credentials"

export const evmAuthProvider = CredentialsProvider({
  name: "antelope",
  id: "antelope",
  credentials: {},
  async authorize(credentials: any) {
    //   Crendtials sent
 

    return { id: credentials.address || '' }
  },
})
