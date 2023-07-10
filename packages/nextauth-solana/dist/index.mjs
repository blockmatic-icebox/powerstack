// src/index.tsx
import bs58 from "bs58";
import CredentialsProvider from "next-auth/providers/credentials";
import nacl from "tweetnacl";
var solanaAuthProvider = CredentialsProvider({
  name: "solana",
  id: "solana",
  credentials: {},
  async authorize(credentials) {
    const signedMessage = credentials.signedMessage;
    const message = credentials.message;
    const address = credentials.address;
    const isValidSignature = nacl.sign.detached.verify(new TextEncoder().encode(message), bs58.decode(signedMessage), bs58.decode(address));
    if (!isValidSignature)
      return null;
    return { id: address };
  }
});
export {
  solanaAuthProvider
};
