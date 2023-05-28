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
  antelopeAuthProvider: () => antelopeAuthProvider
});
module.exports = __toCommonJS(src_exports);
var import_eosio_core = require("eosio-core");
var import_credentials = __toESM(require("next-auth/providers/credentials"));
var antelopeAuthProvider = (0, import_credentials.default)({
  name: "antelope",
  id: "antelope",
  credentials: {},
  async authorize(credentials) {
    const signature = import_eosio_core.Signature.from(credentials.signature);
    const account = credentials.account;
    const pubKey = import_eosio_core.PublicKey.from(credentials.pubKey);
    const trxDigest = import_eosio_core.Checksum256.from(credentials.trxDigest);
    const isValidSignature = await signature.verifyDigest(trxDigest, pubKey);
    if (!isValidSignature)
      return null;
    return { id: account };
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  antelopeAuthProvider
});
