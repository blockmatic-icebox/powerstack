// src/index.tsx
import { Checksum256, PublicKey, Signature } from "eosio-core";
import CredentialsProvider from "next-auth/providers/credentials";
var antelopeAuthProvider = CredentialsProvider({
  name: "antelope",
  id: "antelope",
  credentials: {},
  async authorize(credentials) {
    const signature = Signature.from(credentials.signature);
    const account = credentials.account;
    const pubKey = PublicKey.from(credentials.pubKey);
    const trxDigest = Checksum256.from(credentials.trxDigest);
    const isValidSignature = await signature.verifyDigest(trxDigest, pubKey);
    if (!isValidSignature)
      return null;
    return { id: account };
  }
});
export {
  antelopeAuthProvider
};
