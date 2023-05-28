"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  solanaAuthProvider: () => solanaAuthProvider
});
module.exports = __toCommonJS(src_exports);
var import_bs58 = __toESM(require("bs58"));
var import_credentials = __toESM(require("next-auth/providers/credentials"));
var import_tweetnacl = __toESM(require("tweetnacl"));
var solanaAuthProvider = (0, import_credentials.default)({
  name: "solana",
  id: "solana",
  credentials: {},
  async authorize(credentials) {
    const signedMessage = credentials.signedMessage;
    const message = credentials.message;
    const address = credentials.address;
    const isValidSignature = import_tweetnacl.default.sign.detached.verify(
      new TextEncoder().encode(message),
      import_bs58.default.decode(signedMessage),
      import_bs58.default.decode(address)
    );
    if (!isValidSignature)
      return null;
    return { id: address };
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  solanaAuthProvider
});
