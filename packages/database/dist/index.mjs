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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  prisma: () => prisma
});

// src/client.ts
var client_exports = {};
__export(client_exports, {
  prisma: () => prisma
});
__reExport(client_exports, client_star);
import { PrismaClient } from "@prisma/client";
import * as client_star from "@prisma/client";
var prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production")
  global.prisma = prisma;

// src/index.ts
__reExport(src_exports, client_exports);
export {
  prisma
};
//# sourceMappingURL=index.mjs.map