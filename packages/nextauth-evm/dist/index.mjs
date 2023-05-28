// src/index.tsx
import CredentialsProvider from "next-auth/providers/credentials";
var evmAuthProvider = CredentialsProvider({
  name: "antelope",
  id: "antelope",
  credentials: {},
  async authorize(credentials) {
    return { id: credentials.address || "" };
  }
});
export {
  evmAuthProvider
};
