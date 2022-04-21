var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react2 = require("@remix-run/react");
var import_server = require("react-dom/server");

// app/styles/stitches.config.ts
var import_react = require("@stitches/react");
var stitches = (0, import_react.createStitches)({
  theme: {
    colors: {
      red: "#ff6d6d",
      steel: "#363645",
      black: "#000",
      white: "#fff",
      grey: "#666"
    }
  },
  media: {
    tabletUp: "(min-width: 768px)",
    desktopUp: "(min-width: 1024px)",
    largeDesktopUp: "(min-width: 1680px)"
  }
});
var { styled, globalCss, getCssText } = stitches;

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react2.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  markup = markup.replace(/<style id="stitches">.*<\/style>/g, `<style id="stitches">${getCssText()}</style>`);
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/gaboesquivel/Code/powerstack-remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");
var import_react5 = require("react");

// app/styles/client.context.ts
var import_react3 = require("react");
var ClientStyleContext = (0, import_react3.createContext)({
  reset: () => {
  },
  sheet: ""
});
var client_context_default = ClientStyleContext;

// route:/Users/gaboesquivel/Code/powerstack-remix/app/root.tsx
var Container = styled("div", {
  backgroundColor: "#ff0000",
  padding: "1em"
});
var meta = () => ({
  charset: "utf-8",
  title: "Remix with Stitches",
  viewport: "width=device-width,initial-scale=1"
});
var Document = ({ children, title }) => {
  const clientStyleData = (0, import_react5.useContext)(client_context_default);
  (0, import_react5.useEffect)(() => {
    clientStyleData.reset();
  }, [clientStyleData]);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_react4.Meta, null), /* @__PURE__ */ React.createElement(import_react4.Links, null), /* @__PURE__ */ React.createElement("style", {
    id: "stitches",
    dangerouslySetInnerHTML: { __html: clientStyleData.sheet },
    suppressHydrationWarning: true
  })), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)));
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_react4.Outlet, null));
}
function CatchBoundary() {
  const caught = (0, import_react4.useCatch)();
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("p", null, "[CatchBoundary]: ", caught.status, " ", caught.statusText)));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("p", null, "[ErrorBoundary]: There was an error: ", error.message)));
}

// route:/Users/gaboesquivel/Code/powerstack-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react6 = require("@remix-run/react");
var Container2 = styled("div", {
  fontFamily: "system-ui, sans-serif",
  lineHeight: 1.4,
  backgroundColor: "#999"
});
function Index() {
  return /* @__PURE__ */ React.createElement(Container2, null, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix with Stitches Example"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: "/jokes"
  }, "Jokes")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: "/jokes-error"
  }, "Jokes: Error"))));
}

// route:/Users/gaboesquivel/Code/powerstack-remix/app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => Jokes
});
var import_react7 = require("@remix-run/react");
var Container3 = styled("div", {
  backgroundColor: "#d6d6d6"
});
function Jokes() {
  return /* @__PURE__ */ React.createElement(Container3, null, /* @__PURE__ */ React.createElement("h1", null, "Jokes"), /* @__PURE__ */ React.createElement("p", null, "This route works fine."), /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/"
  }, "Back to home"));
}

// route:/Users/gaboesquivel/Code/powerstack-remix/app/routes/jokes/jokes-error.tsx
var jokes_error_exports = {};
__export(jokes_error_exports, {
  default: () => JokesError
});
function JokesError() {
  throw new Error("This route is no joking with us.");
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "527d1dad", "entry": { "module": "/build/entry.client-MEM27SMS.js", "imports": ["/build/_shared/chunk-NU5XNPIL.js", "/build/_shared/chunk-7AYUTETY.js", "/build/_shared/chunk-QWIEB5VN.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-F347UVQP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-GAMTZGXF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/jokes": { "id": "routes/jokes", "parentId": "root", "path": "jokes", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/jokes-YQ426MFH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/jokes/jokes-error": { "id": "routes/jokes/jokes-error", "parentId": "routes/jokes", "path": "jokes-error", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/jokes/jokes-error-UZOTPT4A.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-527D1DAD.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/jokes/jokes-error": {
    id: "routes/jokes/jokes-error",
    parentId: "routes/jokes",
    path: "jokes-error",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_error_exports
  }
};

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
