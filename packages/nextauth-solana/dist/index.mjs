// src/index.tsx
import CredentialsProvider from "next-auth/providers/credentials";
var solanaAuthProvider = CredentialsProvider({
  name: "solana",
  id: "solana",
  credentials: {},
  async authorize(credentials) {
    return { id: credentials.address || "" };
  }
});
export {
  solanaAuthProvider
};
