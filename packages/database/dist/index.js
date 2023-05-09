"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  prisma: () => prisma
});
module.exports = __toCommonJS(src_exports);

// src/client.ts
var client_exports = {};
__export(client_exports, {
  prisma: () => prisma
});
var import_client = require("@prisma/client");
__reExport(client_exports, require("@prisma/client"));
var prisma = global.prisma || new import_client.PrismaClient();
if (process.env.NODE_ENV !== "production")
  global.prisma = prisma;

// src/index.ts
__reExport(src_exports, client_exports, module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  prisma
});
//# sourceMappingURL=index.js.map