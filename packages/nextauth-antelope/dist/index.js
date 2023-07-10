var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/index.tsx
__export(exports, {
  antelopeAuthProvider: () => antelopeAuthProvider
});
var import_eosio_core = __toModule(require("eosio-core"));
var import_credentials = __toModule(require("next-auth/providers/credentials"));
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
