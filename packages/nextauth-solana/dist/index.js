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
  solanaAuthProvider: () => solanaAuthProvider
});
var import_bs58 = __toModule(require("bs58"));
var import_credentials = __toModule(require("next-auth/providers/credentials"));
var import_tweetnacl = __toModule(require("tweetnacl"));
var solanaAuthProvider = (0, import_credentials.default)({
  name: "solana",
  id: "solana",
  credentials: {},
  async authorize(credentials) {
    const signedMessage = credentials.signedMessage;
    const message = credentials.message;
    const address = credentials.address;
    const isValidSignature = import_tweetnacl.default.sign.detached.verify(new TextEncoder().encode(message), import_bs58.default.decode(signedMessage), import_bs58.default.decode(address));
    if (!isValidSignature)
      return null;
    return { id: address };
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  solanaAuthProvider
});
