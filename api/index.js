var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name3 in all)
    __defProp(target, name3, { get: all[name3], enumerable: true });
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

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react2 = require("@remix-run/react");
var import_server = require("react-dom/server");

// app/styles/stitches.config.ts
var import_react = require("@stitches/react");

// app/styles/light-theme.json
var name = "light";
var typeStyles = { "display-1": { fontFamily: "Gilroy-ExtraBold", fontSize: "48px", lineHeight: "62px", letterSpacing: "0.1em" }, "display-2": { fontFamily: "Gilroy-ExtraBold", fontSize: "40px", lineHeight: "52px", letterSpacing: "0.1em" }, "h-1": { fontFamily: "Gilroy-Bold", fontSize: "33px", lineHeight: "44px", letterSpacing: "0.1em" }, "h-2": { fontFamily: "Gilroy-Bold", fontSize: "28px", lineHeight: "38px", letterSpacing: "0.1em" }, "h-3": { fontFamily: "Gilroy-Bold", fontSize: "23px", lineHeight: "32px", letterSpacing: "0.1em" }, "h-4": { fontFamily: "Gilroy-Bold", fontSize: "19px", lineHeight: "27px", letterSpacing: "0.1em" }, "h-5": { fontFamily: "Gilroy-Bold", fontSize: "16px", lineHeight: "23px", letterSpacing: "0.1em" }, body: { fontFamily: "Gilroy-Bold", fontSize: "16px", lineHeight: "23px", letterSpacing: "0.1em" }, small: { fontFamily: "Gilroy-SemiBold", fontSize: "13px", lineHeight: "20px", letterSpacing: "0.1em" }, "x-small": { fontFamily: "Gilroy-SemiBold", fontSize: "11px", lineHeight: "17px", letterSpacing: "0.1em" } };
var radii = { "radius-18": "18px", "radius-32": "32px", "radius-40": "40px", "radius-24": "24px", "radius-14": "14px" };
var shadows = { "drop-shadow-1": "0px 4px 8px 0px #00000014, 2px 2px 2px 0px #0000000a", "drop-shadow-2": "0px 8px 16px 0px #00000014, 4px 4px 4px 0px #0000000a", "drop-shadow-3": "0px 12px 20px 0px #00000014, 6px 6px 6px 0px #0000000a", "drop-shadow-4": "0px 16px 24px 0px #00000014, 8px 8px 8px 0px #0000000a", "drop-shadow-5": "0px 24px 28px 0px #00000014, 12px 12px 12px 0px #0000000a" };
var transitions = { instant: "0ms", "x-fast": "107ms", fast: "160ms", normal: "240ms", slow: "360ms", "x-slow": "540ms" };
var colors = { login: "linear-gradient(0deg, #ffffffe6 8.333%,#f9f9fb 33.333%)", primary: "#044bff", "shadow-layer-1": "#00000014", "shadow-layer-2": "#0000000a", background: "#ffffff", neutral: "#eaeef0", "neutral-400": "#eef2f3", "neutral-300": "#f2f5f7", "neutral-600": "#b3c1c8", "neutral-700": "#7d94a0", "neutral-200": "#f6f8fa", "neutral-800": "#51646d", text: "#000505", "primary-400": "#2e69ff", "primary-300": "#5887ff", "primary-200": "#82a5ff", "primary-600": "#043fd4", "primary-700": "#0633a7", "primary-800": "#06277b" };
var fonts = { bold: "Gilroy-Bold", "extra-bold": "Gilroy-ExtraBold", "semi-bold": "Gilroy-SemiBold" };
var easeCurves = { "in-out-quint": { x1: 0.86, y1: 0, x2: 0.07, y2: 1 }, "out-quint": { x1: 0.23, y1: 1, x2: 0.32, y2: 1 }, "in-sine": { x1: 0.47, y1: 0, x2: 0.745, y2: 0.715 } };
var space = { none: "0px", "xxx-small": "6px", "xx-small": "9px", "x-small": "14px", small: "21px", regular: "32px", large: "48px", "x-large": "72px", "xx-large": "108px", "xxx-large": "162px" };
var light_theme_default = { name, typeStyles, radii, shadows, transitions, colors, fonts, easeCurves, space };

// app/styles/dark-theme.json
var name2 = "dark";
var typeStyles2 = { "display-1": { fontFamily: "Gilroy-ExtraBold", fontSize: "48px", lineHeight: "62px", letterSpacing: "0.1em" }, "display-2": { fontFamily: "Gilroy-ExtraBold", fontSize: "40px", lineHeight: "52px", letterSpacing: "0.1em" }, "h-1": { fontFamily: "Gilroy-Bold", fontSize: "33px", lineHeight: "44px", letterSpacing: "0.1em" }, "h-2": { fontFamily: "Gilroy-Bold", fontSize: "28px", lineHeight: "38px", letterSpacing: "0.1em" }, "h-3": { fontFamily: "Gilroy-Bold", fontSize: "23px", lineHeight: "32px", letterSpacing: "0.1em" }, "h-4": { fontFamily: "Gilroy-Bold", fontSize: "19px", lineHeight: "27px", letterSpacing: "0.1em" }, "h-5": { fontFamily: "Gilroy-Bold", fontSize: "16px", lineHeight: "23px", letterSpacing: "0.1em" }, body: { fontFamily: "Gilroy-Bold", fontSize: "16px", lineHeight: "23px", letterSpacing: "0.1em" }, small: { fontFamily: "Gilroy-SemiBold", fontSize: "13px", lineHeight: "20px", letterSpacing: "0.1em" }, "x-small": { fontFamily: "Gilroy-SemiBold", fontSize: "11px", lineHeight: "17px", letterSpacing: "0.1em" } };
var radii2 = { "radius-18": "18px", "radius-32": "32px", "radius-40": "40px", "radius-24": "24px", "radius-14": "14px" };
var shadows2 = { "drop-shadow-1": "0px 4px 8px 0px #0000003d, 2px 2px 2px 0px #0000001f", "drop-shadow-2": "0px 8px 16px 0px #0000003d, 4px 4px 4px 0px #00000021", "drop-shadow-3": "0px 12px 20px 0px #0000003d, 6px 6px 6px 0px #0000001f", "drop-shadow-4": "0px 16px 24px 0px #0000003d, 8px 8px 8px 0px #0000001f", "drop-shadow-5": "0px 24px 28px 0px #0000003d, 12px 12px 12px 0px #0000001f" };
var transitions2 = { instant: "0ms", "x-fast": "107ms", fast: "160ms", normal: "240ms", slow: "360ms", "x-slow": "540ms" };
var colors2 = { login: "#141416", primary: "#00023e", "shadow-layer-1": "#00000014", "shadow-layer-2": "#0000000a", background: "#002f2f", neutral: "#eaeef0", "neutral-400": "#eef2f3", "neutral-300": "#f2f5f7", "neutral-600": "#b3c1c8", "neutral-700": "#7d94a0", "neutral-200": "#f6f8fa", "neutral-800": "#51646d", text: "#fefefe", "primary-400": "#00036b", "primary-300": "#000598", "primary-200": "#0006c4", "primary-600": "#010231", "primary-700": "#010224", "primary-800": "#010218" };
var fonts2 = { bold: "Gilroy-Bold", "extra-bold": "Gilroy-ExtraBold", "semi-bold": "Gilroy-SemiBold" };
var easeCurves2 = { "in-out-quint": { x1: 0.86, y1: 0, x2: 0.07, y2: 1 }, "out-quint": { x1: 0.23, y1: 1, x2: 0.32, y2: 1 }, "in-sine": { x1: 0.47, y1: 0, x2: 0.745, y2: 0.715 } };
var space2 = { none: "0px", "xxx-small": "6px", "xx-small": "9px", "x-small": "14px", small: "21px", regular: "32px", large: "48px", "x-large": "72px", "xx-large": "108px", "xxx-large": "162px" };
var dark_theme_default = { name: name2, typeStyles: typeStyles2, radii: radii2, shadows: shadows2, transitions: transitions2, colors: colors2, fonts: fonts2, easeCurves: easeCurves2, space: space2 };

// app/styles/stitches.config.ts
console.log("Light Theme for Stitches\n", light_theme_default);
console.log("Dark Theme for Stitches\n", dark_theme_default);
var getFontSizes = () => {
  let fontSizes = {};
  for (const property in light_theme_default.typeStyles) {
    const tempFontSize = light_theme_default.typeStyles[property]["fontSize"];
    fontSizes[property] = tempFontSize;
  }
  return fontSizes;
};
var { styled, globalCss, getCssText, config } = (0, import_react.createStitches)({
  theme: {
    colors: __spreadValues({}, light_theme_default.colors),
    sizes: {
      container: "78.5rem",
      iconSmall: "1.375rem",
      iconMedium: "2.75rem"
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700
    },
    space: light_theme_default.space,
    fonts: light_theme_default.fonts,
    fontSizes: getFontSizes()
  },
  media: {
    tabletUp: "(min-width: 768px)",
    desktopUp: "(min-width: 1024px)",
    largeDesktopUp: "(min-width: 1680px)"
  },
  utils: {
    p: (value) => ({
      padding: value
    }),
    pt: (value) => ({
      paddingTop: value
    }),
    pr: (value) => ({
      paddingRight: value
    }),
    pb: (value) => ({
      paddingBottom: value
    }),
    pl: (value) => ({
      paddingLeft: value
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    m: (value) => ({
      margin: value
    }),
    mt: (value) => ({
      marginTop: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    bg: (value) => ({
      backgroundColor: value
    }),
    size: (value) => ({
      width: value,
      height: value
    })
  }
});
var globalStyles = globalCss({
  "@font-face": [
    {
      fontDisplay: "swap",
      fontFamily: "Gilroy-Bold",
      src: "url(/fonts/Gilroy-Bold.ttf)"
    },
    {
      fontDisplay: "swap",
      fontFamily: '"Gilroy-ExtraBold"',
      src: "url(/fonts/Gilroy-ExtraBold.ttf)"
    },
    {
      fontDisplay: "swap",
      fontFamily: "Gilroy-SemiBold",
      src: "url(/fonts/Gilroy-SemiBold.ttf)"
    }
  ],
  body: {
    fontFamily: "$semi-bold",
    margin: 0
  },
  "*, *::before, *::after": {
    boxSizing: "border-box",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    scrollBehavior: "smooth",
    letterSpacing: "0.02em"
  },
  "::-webkit-scrollbar": {
    width: "13px",
    height: "13px",
    right: 0
  },
  "::-webkit-scrollbar-track, ::-webkit-scrollbar-corner": {
    background: "$neutral-200"
  },
  "::-webkit-scrollbar-thumb": {
    background: "$neutral-600",
    borderRadius: "18px",
    border: "3px solid $neutral-200"
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: "$neutral-700"
  }
});

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

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  loader: () => loader,
  meta: () => meta
});
var import_node2 = require("@remix-run/node");
var import_react4 = require("@remix-run/react");
var import_react5 = require("react");

// app/app-config.ts
var env = __toESM(require("env-var"));
var appconfig = {
  network: {
    chain: env.get("CHAIN").required().asString(),
    chain_id: env.get("CHAIN_ID").required().asString()
  },
  contracts: {},
  services: {
    graphql_api: env.get("GRAPHQL_API").required().asString()
  },
  analytics: {
    google: env.get("GOOGLE_ANALYTICS").asString() || "",
    sentry: env.get("SENTRY_DSN").asString() || ""
  },
  cloudinary: {
    cloudName: env.get("CLOUDINARY_CLOUD_NAME").required().asString(),
    apiKey: env.get("CLOUDINARY_API_KEY").required().asString(),
    apiSecret: env.get("CLOUDINARY_API_SECRET").required().asString()
  },
  features: {}
};

// app/auth.server.ts
var import_node = require("@remix-run/node");
var import_ethers = require("ethers");
var import_remix_auth = require("remix-auth");
var import_remix_auth_form = require("remix-auth-form");
var import_tweetnacl = __toESM(require("tweetnacl"));
var session_storage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret"],
    secure: false
  }
});
var auth = new import_remix_auth.Authenticator(session_storage);
var enc = new TextEncoder().encode;
var getFormData = (form) => {
  var _a, _b, _c;
  const address = (_a = form.get("address")) == null ? void 0 : _a.toString();
  const signature = (_b = form.get("signature")) == null ? void 0 : _b.toString();
  const message2 = (_c = form.get("message")) == null ? void 0 : _c.toString();
  if (!address || !signature || !message2)
    throw new import_remix_auth.AuthorizationError(`Invalid login request`);
  return {
    address,
    signature,
    message: message2
  };
};
auth.use(new import_remix_auth_form.FormStrategy(async ({ form }) => {
  const { address, signature, message: message2 } = getFormData(form);
  const addr = await import_ethers.ethers.utils.verifyMessage(message2, signature);
  if (addr !== address)
    throw new import_remix_auth.AuthorizationError(`Invalid signature`);
  const user = {
    address: address.toString(),
    network: "rinkeby"
  };
  return user;
}), "metamask");
auth.use(new import_remix_auth_form.FormStrategy(async ({ form }) => {
  const { address, signature, message: message2 } = getFormData(form);
  const resp2 = import_tweetnacl.default.sign.detached.verify(enc(message2), enc(signature), enc(address));
  console.log("auth response", resp2);
  const user = {
    address: address.toString(),
    network: "solana"
  };
  return user;
}), "phantom");

// app/store/index.ts
var import_vanilla = __toESM(require("zustand/vanilla"));
var import_zustand = __toESM(require("zustand"));
var import_auto_zustand_selectors_hook = require("auto-zustand-selectors-hook");
var import_simple_zustand_devtools = require("simple-zustand-devtools");

// app/library/utils.ts
var import_lodash = __toESM(require("lodash"));
var isBrowser = typeof window !== "undefined";
var userAgent = isBrowser ? import_lodash.default.get(window, "navigator.userAgent") : "";
var ethereum = isBrowser && import_lodash.default.get(window, "ethereum");
var isAndroid = /(Android)/i.test(userAgent);
var isIphone = /(iPhone|iPod)/i.test(userAgent);
var isIpad = /(iPad)/i.test(userAgent);
var isPhantom = isBrowser && import_lodash.default.has(window, "solana.isPhantom");
var solana = isBrowser && import_lodash.default.get(window, "solana");

// app/library/prisma.ts
var import_client = require("@prisma/client");
var prisma;
if (false) {
} else {
  if (!global.prisma) {
    global.prisma = new import_client.PrismaClient();
  }
  prisma = global.prisma;
}

// app/store/ui-state.ts
var defaultUserInterfaceState = {
  show_wallet: false,
  show_sidebar: false
};
var createUserInterfaceSlice = (set) => __spreadProps(__spreadValues({}, defaultUserInterfaceState), {
  setShowWallet: (value) => set({ show_wallet: value }),
  setShowSidebar: (value) => set({ show_sidebar: value })
});

// app/store/session-state/default-session-state.ts
var dummy_appconfig = {
  network: {
    chain: "",
    chain_id: ""
  },
  contracts: {},
  services: {
    graphql_api: ""
  },
  analytics: {
    google: "",
    sentry: ""
  },
  cloudinary: {
    cloud_name: "",
    api_key: "",
    api_secret: ""
  },
  features: {}
};
var defaultAppSessionState = {
  appconfig: dummy_appconfig,
  user: null,
  session_error: null
};

// app/store/session-state/index.ts
var createAppSessionSlice = (set) => __spreadProps(__spreadValues({}, defaultAppSessionState), {
  setUser: (user) => set({ user }),
  setSessionData: (session_data) => set(session_data)
});

// app/store/index.ts
var store = (0, import_vanilla.default)((set, get2) => __spreadValues(__spreadValues({}, createAppSessionSlice(set, get2)), createUserInterfaceSlice(set, get2)));
var useStoreBase = (0, import_zustand.default)(store);
if (isBrowser)
  (0, import_simple_zustand_devtools.mountStoreDevtool)("AppStore", useStoreBase);
var useStore = (0, import_auto_zustand_selectors_hook.createSelectorHooks)(useStoreBase);

// app/styles/client.context.ts
var import_react3 = require("react");
var ClientStyleContext = (0, import_react3.createContext)({
  reset: () => {
  },
  sheet: ""
});
var client_context_default = ClientStyleContext;

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\root.tsx
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
  globalStyles();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_react4.Meta, null), /* @__PURE__ */ React.createElement(import_react4.Links, null), /* @__PURE__ */ React.createElement("style", {
    id: "stitches",
    dangerouslySetInnerHTML: { __html: clientStyleData.sheet },
    suppressHydrationWarning: true
  })), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)));
};
var loader = async ({ request }) => {
  const user = await auth.isAuthenticated(request);
  const session = await session_storage.getSession(request.headers.get("cookie"));
  const session_error = session.get(auth.sessionErrorKey) || null;
  const session_data = {
    user,
    appconfig,
    session_error
  };
  return (0, import_node2.json)(session_data);
};
function App() {
  const session_data = (0, import_react4.useLoaderData)();
  (0, import_react5.useEffect)(() => {
    useStore.getState().setSessionData(session_data);
  }, [session_data]);
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

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\routes\actions\login\$strategy.tsx
var strategy_exports = {};
__export(strategy_exports, {
  action: () => action
});
var action = async ({ request, params }) => {
  const url = new URL(request.url);
  const redirect_to = url.searchParams.get("redirect_to");
  return auth.authenticate(params.strategy, request, {
    successRedirect: redirect_to,
    failureRedirect: redirect_to
  });
};

// route:/home/andler/Development/git_local/remix/powerstack-remix/app/routes/$account.tsx
var account_exports = {};
__export(account_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");
var import_react6 = require("@remix-run/react");
var loader2 = async ({ params }) => {
  const account = await prisma.accounts.findFirst({
    where: {
      account: params.account
    }
  });
  return (0, import_node3.json)({ account });
};
function Index() {
  const { account } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(account, null, 2));
}

// route:/home/andler/Development/git_local/remix/powerstack-remix/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index2
});

// app/components/Flex.tsx
var Flex = styled("div", {
  boxSizing: "border-box",
  display: "flex",
  variants: {
    direction: {
      row: {
        flexDirection: "row"
      },
      column: {
        flexDirection: "column"
      },
      rowReverse: {
        flexDirection: "row-reverse"
      },
      columnReverse: {
        flexDirection: "column-reverse"
      }
    },
    align: {
      start: {
        alignItems: "flex-start"
      },
      center: {
        alignItems: "center"
      },
      end: {
        alignItems: "flex-end"
      },
      stretch: {
        alignItems: "stretch"
      },
      baseline: {
        alignItems: "baseline"
      }
    },
    justify: {
      start: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      end: {
        justifyContent: "flex-end"
      },
      between: {
        justifyContent: "space-between"
      }
    },
    wrap: {
      noWrap: {
        flexWrap: "nowrap"
      },
      wrap: {
        flexWrap: "wrap"
      },
      wrapReverse: {
        flexWrap: "wrap-reverse"
      }
    }
  },
  defaultVariants: {
    direction: "row",
    align: "stretch",
    justify: "start",
    wrap: "noWrap"
  }
});

// app/components/Container.tsx
var Container2 = styled("div", {
  px: "$regular",
  maxWidth: "$container",
  margin: "0 auto",
  width: "100%"
});

// app/components/Header.tsx
var import_react7 = require("@remix-run/react");

// app/components/icons/AnchorIcon.tsx
var AnchorIcon = () => /* @__PURE__ */ React.createElement("svg", {
  width: "32",
  height: "32",
  fill: "none"
}, /* @__PURE__ */ React.createElement("path", {
  d: "M0 0H32V32H0V0Z",
  fill: "url(#A)"
}), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", {
  id: "A",
  patternContentUnits: "objectBoundingBox",
  width: "1",
  height: "1"
}, /* @__PURE__ */ React.createElement("use", {
  xlinkHref: "#B",
  transform: "matrix(.002222 0 0 .002222 -.068889 -.068889)"
})), /* @__PURE__ */ React.createElement("image", {
  id: "B",
  width: "400",
  height: "400",
  xlinkHref: "data:image/png;base64,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"
})));
var AnchorIcon_default = AnchorIcon;

// app/components/icons/BitbucketIcon.tsx
var BitbucketIcon = () => /* @__PURE__ */ React.createElement("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React.createElement("path", {
  d: "M1.50503 2.50009C1.36011 2.49818 1.21654 2.52805 1.08441 2.5876C0.952284 2.64715 0.834808 2.73492 0.740247 2.84475C0.645686 2.95458 0.576339 3.08379 0.537084 3.2233C0.497828 3.36281 0.489617 3.50923 0.51303 3.65225L4.72774 29.2402C4.83624 29.886 5.39294 30.3613 6.04782 30.3678H26.2689C26.507 30.3704 26.7381 30.2876 26.9205 30.1346C27.103 29.9816 27.2246 29.7683 27.2634 29.5334L31.4872 3.66129C31.5104 3.51837 31.502 3.37209 31.4627 3.23274C31.4233 3.09339 31.3539 2.96435 31.2594 2.85467C31.1649 2.74499 31.0475 2.65734 30.9154 2.59787C30.7834 2.5384 30.64 2.50855 30.4952 2.51042L1.50503 2.50009ZM19.2551 20.9929H12.7994L11.053 11.8685H20.8193L19.2551 20.9929Z",
  fill: "black"
}));
var BitbucketIcon_default = BitbucketIcon;

// app/components/icons/GhLoginIcon.tsx
var GhLoginIcon = () => /* @__PURE__ */ React.createElement("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React.createElement("path", {
  d: "M16 1C7.43625 1 0.5 7.94013 0.5 16.5C0.5 23.3497 4.94075 29.1583 11.0981 31.2056C11.8731 31.3516 12.1573 30.8724 12.1573 30.4603C12.1573 30.0922 12.1444 29.117 12.1379 27.8253C7.82633 28.7605 6.917 25.7458 6.917 25.7458C6.21175 23.9568 5.19262 23.4789 5.19262 23.4789C3.78858 22.5179 5.30112 22.5373 5.30112 22.5373C6.85758 22.6458 7.67521 24.1338 7.67521 24.1338C9.05729 26.504 11.3035 25.8194 12.1896 25.4228C12.3291 24.4205 12.7282 23.7372 13.1713 23.3497C9.72896 22.9622 6.111 21.6292 6.111 15.6901C6.111 13.998 6.71162 12.616 7.70621 11.531C7.53183 11.1396 7.00871 9.56375 7.84183 7.42863C7.84183 7.42863 9.13996 7.01271 12.1043 9.01738C13.3443 8.6725 14.6618 8.502 15.9793 8.49425C17.2968 8.502 18.6143 8.6725 19.8543 9.01738C22.7993 7.01271 24.0975 7.42863 24.0975 7.42863C24.9306 9.56375 24.4075 11.1396 24.2525 11.531C25.2406 12.616 25.8412 13.998 25.8412 15.6901C25.8412 21.6447 22.2181 22.9558 18.7693 23.3368C19.3118 23.8018 19.8156 24.7525 19.8156 26.2043C19.8156 28.2787 19.7962 29.945 19.7962 30.4487C19.7962 30.8556 20.0675 31.34 20.8618 31.185C27.0631 29.1519 31.5 23.3394 31.5 16.5C31.5 7.94013 24.5599 1 16 1",
  fill: "black"
}));
var GhLoginIcon_default = GhLoginIcon;

// app/components/icons/GitlabIcon.tsx
var GitlabIcon = () => /* @__PURE__ */ React.createElement("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React.createElement("path", {
  d: "M6.46009 1.20535C5.88009 1.20535 5.36676 1.57869 5.18676 2.12802C3.51876 7.26535 1.66143 12.9707 0.0934278 17.78C-0.031729 18.1649 -0.0317952 18.5795 0.0932388 18.9645C0.218273 19.3494 0.461984 19.6848 0.789428 19.9227L15.5508 30.6494C15.8174 30.8427 16.1801 30.8414 16.4441 30.644L31.2081 19.924C31.5365 19.686 31.7809 19.3499 31.906 18.9641C32.0311 18.5783 32.0304 18.1628 31.9041 17.7774C30.1908 12.5214 28.3268 6.76935 26.8148 2.11602C26.725 1.84912 26.5534 1.61732 26.3243 1.45358C26.0952 1.28985 25.8203 1.20252 25.5388 1.20402C25.2572 1.20181 24.9823 1.28999 24.7545 1.45559C24.5268 1.62118 24.3582 1.85547 24.2734 2.12402L21.0668 12.0014H10.9374L7.7241 2.12402C7.63984 1.857 7.47262 1.62382 7.24674 1.45836C7.02086 1.29291 6.74809 1.20381 6.46809 1.20402H6.46009V1.20535ZM6.4521 3.09869L9.34943 12.0027H3.56676L6.4521 3.09869ZM25.5534 3.09869L28.4441 12.0027H22.6561L25.5534 3.09869ZM11.4294 13.512H20.5788C19.0561 18.2054 17.5281 22.8987 16.0001 27.5907L11.4294 13.5134V13.512ZM4.07743 13.5187H9.83876L13.9534 26.1854L4.07743 13.5187ZM22.1668 13.5187H27.9334C24.6441 17.7454 21.3334 21.956 18.0521 26.188C19.4228 21.9654 20.7974 17.7427 22.1668 13.5187ZM2.80009 14.3494L12.1028 26.2787L1.68009 18.7027C1.61033 18.6524 1.5583 18.5813 1.53147 18.4996C1.50464 18.418 1.50439 18.3299 1.53076 18.248L2.80009 14.3494ZM29.1974 14.3494L30.4668 18.2454C30.4934 18.3269 30.4936 18.4148 30.4672 18.4965C30.4409 18.5782 30.3894 18.6494 30.3201 18.7V18.7027L19.8934 26.276L19.9281 26.2294L29.1974 14.3494Z",
  fill: "black"
}));
var GitlabIcon_default = GitlabIcon;

// app/components/icons/MetamaskIcon.tsx
var MetamaskIcon = () => /* @__PURE__ */ React.createElement("svg", {
  width: "34",
  height: "34",
  viewBox: "0 0 34 34",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React.createElement("path", {
  d: "M29.2511 3.78845L18.6328 11.6748L20.5964 7.02197L29.2511 3.78845Z",
  fill: "#E2761B",
  stroke: "#E2761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M4.73828 3.78845L15.2712 11.7495L13.4037 7.02197L4.73828 3.78845Z",
  fill: "#E4761B",
  stroke: "#E4761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M25.4305 22.0691L22.6025 26.4018L28.6534 28.0666L30.3929 22.1651L25.4305 22.0691Z",
  fill: "#E4761B",
  stroke: "#E4761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M3.61768 22.1651L5.34649 28.0666L11.3973 26.4018L8.56934 22.0691L3.61768 22.1651Z",
  fill: "#E4761B",
  stroke: "#E4761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M11.0558 14.7483L9.36963 17.2988L15.3778 17.5656L15.1644 11.1093L11.0558 14.7483Z",
  fill: "#E4761B",
  stroke: "#E4761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M22.9335 14.7483L18.7715 11.0345L18.6328 17.5656L24.6303 17.2988L22.9335 14.7483Z",
  fill: "#E4761B",
  stroke: "#E4761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M11.3972 26.4017L15.0042 24.6409L11.8881 22.2078L11.3972 26.4017Z",
  fill: "#E4761B",
  stroke: "#E4761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M18.9849 24.6409L22.6026 26.4017L22.101 22.2078L18.9849 24.6409Z",
  fill: "#E4761B",
  stroke: "#E4761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M22.6028 26.4017L18.9851 24.6409L19.2732 26.9993L19.2412 27.9918L22.6028 26.4017Z",
  fill: "#D7C1B3",
  stroke: "#D7C1B3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M11.3975 26.4017L14.759 27.9918L14.7377 26.9993L15.0045 24.6409L11.3975 26.4017Z",
  fill: "#D7C1B3",
  stroke: "#D7C1B3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M11.3973 26.4018L11.9096 22.0691L8.56934 22.1651L11.3973 26.4018Z",
  fill: "#CD6116",
  stroke: "#CD6116",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M22.0903 22.0691L22.6026 26.4018L25.4306 22.1651L22.0903 22.0691Z",
  fill: "#CD6116",
  stroke: "#CD6116",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M24.6303 17.2988L18.6328 17.5656L19.1877 20.6497L20.0735 18.7929L22.2078 19.764L24.6303 17.2988Z",
  fill: "#CD6116",
  stroke: "#CD6116",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M11.8028 19.764L13.9371 18.7929L14.8122 20.6497L15.3778 17.5656L9.36963 17.2988L11.8028 19.764Z",
  fill: "#CD6116",
  stroke: "#CD6116",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M14.8124 20.6497L11.803 19.764L13.9266 18.7928L14.8124 20.6497Z",
  fill: "#233447",
  stroke: "#233447",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M19.177 20.6497L20.0628 18.7928L22.1971 19.764L19.177 20.6497Z",
  fill: "#233447",
  stroke: "#233447",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M9.36963 17.2988L11.8881 22.2078L11.8028 19.764L9.36963 17.2988Z",
  fill: "#E4751F",
  stroke: "#E4751F",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M22.2075 19.764L22.1008 22.2078L24.63 17.2988L22.2075 19.764Z",
  fill: "#E4751F",
  stroke: "#E4751F",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M15.3779 17.5657L14.8123 20.6498L15.5166 24.2888L15.6767 19.4972L15.3779 17.5657Z",
  fill: "#E4751F",
  stroke: "#E4751F",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M18.6326 17.5657L18.3445 19.4866L18.4725 24.2888L19.1875 20.6498L18.6326 17.5657Z",
  fill: "#E4751F",
  stroke: "#E4751F",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M19.1877 20.6497L18.4727 24.2887L18.9849 24.6409L22.101 22.2077L22.2077 19.7639L19.1877 20.6497Z",
  fill: "#F6851B",
  stroke: "#F6851B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M11.803 19.7639L11.8884 22.2077L15.0045 24.6409L15.5167 24.2887L14.8124 20.6497L11.803 19.7639Z",
  fill: "#F6851B",
  stroke: "#F6851B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M19.2412 27.9918L19.2732 26.9993L19.0064 26.7646H14.9831L14.7377 26.9993L14.759 27.9918L11.3975 26.4017L12.5713 27.3622L14.9511 29.0163H19.0384L21.4288 27.3622L22.6027 26.4017L19.2412 27.9918Z",
  fill: "#C0AD9E",
  stroke: "#C0AD9E",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M18.9849 24.641L18.4726 24.2888H15.5166L15.0043 24.641L14.7375 26.9994L14.983 26.7647H19.0062L19.273 26.9994L18.9849 24.641Z",
  fill: "#161616",
  stroke: "#161616",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M29.6992 12.1871L30.6063 7.83302L29.251 3.78845L18.9849 11.408L22.9334 14.7483L28.5147 16.381L29.7526 14.9404L29.219 14.5562L30.0728 13.7772L29.4111 13.2649L30.2648 12.6139L29.6992 12.1871Z",
  fill: "#763D16",
  stroke: "#763D16",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M3.39355 7.83302L4.30065 12.1871L3.72438 12.6139L4.57811 13.2649L3.92714 13.7772L4.78087 14.5562L4.24729 14.9404L5.47453 16.381L11.0558 14.7483L15.0044 11.408L4.73819 3.78845L3.39355 7.83302Z",
  fill: "#763D16",
  stroke: "#763D16",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M28.5148 16.3811L22.9335 14.7483L24.6303 17.2988L22.1011 22.2078L25.4306 22.1651H30.393L28.5148 16.3811Z",
  fill: "#F6851B",
  stroke: "#F6851B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M11.0558 14.7483L5.47455 16.3811L3.61768 22.1651H8.56934L11.8882 22.2078L9.36972 17.2988L11.0558 14.7483Z",
  fill: "#F6851B",
  stroke: "#F6851B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M18.6327 17.5656L18.9849 11.408L20.607 7.02197H13.4036L15.0043 11.408L15.3778 17.5656L15.5059 19.5078L15.5166 24.2888H18.4726L18.494 19.5078L18.6327 17.5656Z",
  fill: "#F6851B",
  stroke: "#F6851B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
var MetamaskIcon_default = MetamaskIcon;

// app/components/icons/PhantonIcon.tsx
var PhantonIcon = () => /* @__PURE__ */ React.createElement("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none"
}, /* @__PURE__ */ React.createElement("rect", {
  width: "32",
  height: "32",
  fill: "url(#pattern999)"
}), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", {
  id: "pattern999",
  patternContentUnits: "objectBoundingBox",
  width: "1",
  height: "1"
}, /* @__PURE__ */ React.createElement("use", {
  xlinkHref: "#image0_222_115",
  transform: "scale(0.000666667)"
})), /* @__PURE__ */ React.createElement("image", {
  id: "image0_222_115",
  width: "1500",
  height: "1500",
  xlinkHref: "data:image/png;base64,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"
})));
var PhantonIcon_default = PhantonIcon;

// app/components/icons/BlockmaticIcon.tsx
var BlockmaticIcon = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({
  width: "426",
  height: "84",
  viewBox: "0 0 426 84",
  fill: "none"
}, props), /* @__PURE__ */ React.createElement("path", {
  d: "M0 37C0 18.9127 14.6627 4 32.75 4V4C50.8373 4 65.5 18.9127 65.5 37V37C65.5 55.0873 50.8373 70 32.75 70V70C14.6627 70 0 55.0873 0 37V37Z",
  fill: "url(#pattern0)"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M0 37C0 18.9127 14.6627 4 32.75 4V4C50.8373 4 65.5 18.9127 65.5 37V37C65.5 55.0873 50.8373 70 32.75 70V70C14.6627 70 0 55.0873 0 37V37Z",
  fill: "url(#pattern1)"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M116.8 26.048C121.379 26.048 125.277 27.7933 128.496 31.284C131.76 34.7293 133.392 38.968 133.392 44C133.392 49.032 131.76 53.2933 128.496 56.784C125.277 60.2293 121.379 61.952 116.8 61.952C112.04 61.952 108.368 60.2973 105.784 56.988V61H97.012V13.4H105.784V31.012C108.368 27.7027 112.04 26.048 116.8 26.048ZM108.436 50.936C110.204 52.704 112.448 53.588 115.168 53.588C117.888 53.588 120.132 52.704 121.9 50.936C123.713 49.1227 124.62 46.8107 124.62 44C124.62 41.1893 123.713 38.9 121.9 37.132C120.132 35.3187 117.888 34.412 115.168 34.412C112.448 34.412 110.204 35.3187 108.436 37.132C106.668 38.9 105.784 41.1893 105.784 44C105.784 46.8107 106.668 49.1227 108.436 50.936ZM137.538 61V11.36H146.31V61H137.538ZM181.267 56.784C177.777 60.2293 173.515 61.952 168.483 61.952C163.451 61.952 159.19 60.2293 155.699 56.784C152.254 53.2933 150.531 49.032 150.531 44C150.531 38.968 152.254 34.7293 155.699 31.284C159.19 27.7933 163.451 26.048 168.483 26.048C173.515 26.048 177.777 27.7933 181.267 31.284C184.758 34.7293 186.503 38.968 186.503 44C186.503 49.032 184.758 53.2933 181.267 56.784ZM161.887 50.732C163.655 52.5 165.854 53.384 168.483 53.384C171.113 53.384 173.311 52.5 175.079 50.732C176.847 48.964 177.731 46.72 177.731 44C177.731 41.28 176.847 39.036 175.079 37.268C173.311 35.5 171.113 34.616 168.483 34.616C165.854 34.616 163.655 35.5 161.887 37.268C160.165 39.036 159.303 41.28 159.303 44C159.303 46.72 160.165 48.964 161.887 50.732ZM206.818 61.952C201.696 61.952 197.412 60.2293 193.966 56.784C190.566 53.3387 188.866 49.0773 188.866 44C188.866 38.9227 190.566 34.6613 193.966 31.216C197.412 27.7707 201.696 26.048 206.818 26.048C210.128 26.048 213.142 26.8413 215.862 28.428C218.582 30.0147 220.645 32.1453 222.05 34.82L214.502 39.24C213.822 37.8347 212.78 36.724 211.374 35.908C210.014 35.092 208.473 34.684 206.75 34.684C204.121 34.684 201.945 35.568 200.222 37.336C198.5 39.0587 197.638 41.28 197.638 44C197.638 46.6747 198.5 48.896 200.222 50.664C201.945 52.3867 204.121 53.248 206.75 53.248C208.518 53.248 210.082 52.8627 211.442 52.092C212.848 51.276 213.89 50.1653 214.57 48.76L222.186 53.112C220.69 55.7867 218.582 57.94 215.862 59.572C213.142 61.1587 210.128 61.952 206.818 61.952ZM256.134 61H245.934L233.558 45.564V61H224.786V13.4H233.558V41.96L245.254 27H255.726L242.058 43.796L256.134 61ZM296.076 26.048C299.975 26.048 303.08 27.3173 305.392 29.856C307.749 32.3947 308.928 35.7947 308.928 40.056V61H300.156V40.668C300.156 38.628 299.657 37.0413 298.66 35.908C297.663 34.7747 296.257 34.208 294.444 34.208C292.449 34.208 290.885 34.8653 289.752 36.18C288.664 37.4947 288.12 39.3987 288.12 41.892V61H279.348V40.668C279.348 38.628 278.849 37.0413 277.852 35.908C276.855 34.7747 275.449 34.208 273.636 34.208C271.687 34.208 270.123 34.8653 268.944 36.18C267.811 37.4947 267.244 39.3987 267.244 41.892V61H258.472V27H267.244V30.604C269.284 27.5667 272.435 26.048 276.696 26.048C280.867 26.048 283.949 27.68 285.944 30.944C288.211 27.68 291.588 26.048 296.076 26.048ZM340.178 27H348.95V61H340.178V56.988C337.549 60.2973 333.854 61.952 329.094 61.952C324.561 61.952 320.662 60.2293 317.398 56.784C314.18 53.2933 312.57 49.032 312.57 44C312.57 38.968 314.18 34.7293 317.398 31.284C320.662 27.7933 324.561 26.048 329.094 26.048C333.854 26.048 337.549 27.7027 340.178 31.012V27ZM323.994 50.936C325.762 52.704 328.006 53.588 330.726 53.588C333.446 53.588 335.69 52.704 337.458 50.936C339.272 49.1227 340.178 46.8107 340.178 44C340.178 41.1893 339.272 38.9 337.458 37.132C335.69 35.3187 333.446 34.412 330.726 34.412C328.006 34.412 325.762 35.3187 323.994 37.132C322.226 38.9 321.342 41.1893 321.342 44C321.342 46.8107 322.226 49.1227 323.994 50.936ZM374.313 35.432H366.629V49.576C366.629 50.7547 366.923 51.616 367.513 52.16C368.102 52.704 368.963 53.0213 370.097 53.112C371.23 53.1573 372.635 53.1347 374.313 53.044V61C368.283 61.68 364.022 61.1133 361.529 59.3C359.081 57.4867 357.857 54.2453 357.857 49.576V35.432H351.941V27H357.857V20.132L366.629 17.48V27H374.313V35.432ZM382.81 22.92C381.359 22.92 380.09 22.3987 379.002 21.356C377.959 20.268 377.438 18.9987 377.438 17.548C377.438 16.0973 377.959 14.828 379.002 13.74C380.09 12.652 381.359 12.108 382.81 12.108C384.306 12.108 385.575 12.652 386.618 13.74C387.706 14.828 388.25 16.0973 388.25 17.548C388.25 18.9987 387.706 20.268 386.618 21.356C385.575 22.3987 384.306 22.92 382.81 22.92ZM378.458 61V27H387.23V61H378.458ZM409.402 61.952C404.28 61.952 399.996 60.2293 396.55 56.784C393.15 53.3387 391.45 49.0773 391.45 44C391.45 38.9227 393.15 34.6613 396.55 31.216C399.996 27.7707 404.28 26.048 409.402 26.048C412.712 26.048 415.726 26.8413 418.446 28.428C421.166 30.0147 423.229 32.1453 424.634 34.82L417.086 39.24C416.406 37.8347 415.364 36.724 413.958 35.908C412.598 35.092 411.057 34.684 409.334 34.684C406.705 34.684 404.529 35.568 402.806 37.336C401.084 39.0587 400.222 41.28 400.222 44C400.222 46.6747 401.084 48.896 402.806 50.664C404.529 52.3867 406.705 53.248 409.334 53.248C411.102 53.248 412.666 52.8627 414.026 52.092C415.432 51.276 416.474 50.1653 417.154 48.76L424.77 53.112C423.274 55.7867 421.166 57.94 418.446 59.572C415.726 61.1587 412.712 61.952 409.402 61.952Z",
  fill: "black"
}), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", {
  id: "pattern0",
  patternContentUnits: "objectBoundingBox",
  width: "1",
  height: "1"
}, /* @__PURE__ */ React.createElement("use", {
  xlinkHref: "#image0_225_511",
  transform: "translate(-0.694656 -0.742424) scale(0.0152672 0.0151515)"
})), /* @__PURE__ */ React.createElement("pattern", {
  id: "pattern1",
  patternContentUnits: "objectBoundingBox",
  width: "1",
  height: "1"
}, /* @__PURE__ */ React.createElement("use", {
  xlinkHref: "#image0_225_511",
  transform: "translate(-0.694656 -0.742424) scale(0.0152672 0.0151515)"
})), /* @__PURE__ */ React.createElement("image", {
  id: "image0_225_511",
  width: "505",
  height: "160",
  xlinkHref: "data:image/png;base64,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"
})));
var BlockmaticIcon_default = BlockmaticIcon;

// app/components/icons/LightModeIcon.tsx
var LightModeIcon = () => /* @__PURE__ */ React.createElement("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React.createElement("circle", {
  id: "hover-fill",
  cx: "12",
  cy: "12",
  r: "5",
  fill: "none"
}), /* @__PURE__ */ React.createElement("path", {
  id: "Vector",
  d: "M12 16.5C10.8065 16.5 9.66193 16.0259 8.81802 15.182C7.97411 14.3381 7.5 13.1935 7.5 12C7.5 10.8065 7.97411 9.66193 8.81802 8.81802C9.66193 7.97411 10.8065 7.5 12 7.5C13.1935 7.5 14.3381 7.97411 15.182 8.81802C16.0259 9.66193 16.5 10.8065 16.5 12C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5ZM12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18ZM12 0C12.1989 0 12.3897 0.0790176 12.5303 0.21967C12.671 0.360322 12.75 0.551088 12.75 0.75V3.75C12.75 3.94891 12.671 4.13968 12.5303 4.28033C12.3897 4.42098 12.1989 4.5 12 4.5C11.8011 4.5 11.6103 4.42098 11.4697 4.28033C11.329 4.13968 11.25 3.94891 11.25 3.75V0.75C11.25 0.551088 11.329 0.360322 11.4697 0.21967C11.6103 0.0790176 11.8011 0 12 0ZM12 19.5C12.1989 19.5 12.3897 19.579 12.5303 19.7197C12.671 19.8603 12.75 20.0511 12.75 20.25V23.25C12.75 23.4489 12.671 23.6397 12.5303 23.7803C12.3897 23.921 12.1989 24 12 24C11.8011 24 11.6103 23.921 11.4697 23.7803C11.329 23.6397 11.25 23.4489 11.25 23.25V20.25C11.25 20.0511 11.329 19.8603 11.4697 19.7197C11.6103 19.579 11.8011 19.5 12 19.5ZM24 12C24 12.1989 23.921 12.3897 23.7803 12.5303C23.6397 12.671 23.4489 12.75 23.25 12.75H20.25C20.0511 12.75 19.8603 12.671 19.7197 12.5303C19.579 12.3897 19.5 12.1989 19.5 12C19.5 11.8011 19.579 11.6103 19.7197 11.4697C19.8603 11.329 20.0511 11.25 20.25 11.25H23.25C23.4489 11.25 23.6397 11.329 23.7803 11.4697C23.921 11.6103 24 11.8011 24 12ZM4.5 12C4.5 12.1989 4.42098 12.3897 4.28033 12.5303C4.13968 12.671 3.94891 12.75 3.75 12.75H0.75C0.551088 12.75 0.360322 12.671 0.21967 12.5303C0.0790176 12.3897 0 12.1989 0 12C0 11.8011 0.0790176 11.6103 0.21967 11.4697C0.360322 11.329 0.551088 11.25 0.75 11.25H3.75C3.94891 11.25 4.13968 11.329 4.28033 11.4697C4.42098 11.6103 4.5 11.8011 4.5 12ZM20.4855 3.5145C20.6261 3.65515 20.7051 3.84588 20.7051 4.04475C20.7051 4.24362 20.6261 4.43435 20.4855 4.575L18.3645 6.6975C18.2948 6.76713 18.212 6.82235 18.1209 6.86C18.0299 6.89765 17.9323 6.91699 17.8337 6.91692C17.6347 6.91678 17.4439 6.83758 17.3032 6.69675C17.2336 6.62702 17.1784 6.54425 17.1408 6.45318C17.1031 6.36211 17.0838 6.26452 17.0838 6.16597C17.084 5.96695 17.1632 5.77613 17.304 5.6355L19.425 3.5145C19.5656 3.3739 19.7564 3.29491 19.9552 3.29491C20.1541 3.29491 20.3449 3.3739 20.4855 3.5145ZM6.696 17.304C6.8366 17.4446 6.91559 17.6354 6.91559 17.8342C6.91559 18.0331 6.8366 18.2239 6.696 18.3645L4.575 20.4855C4.43355 20.6221 4.2441 20.6977 4.04745 20.696C3.8508 20.6943 3.66269 20.6154 3.52364 20.4764C3.38458 20.3373 3.3057 20.1492 3.30399 19.9526C3.30229 19.7559 3.37788 19.5665 3.5145 19.425L5.6355 17.304C5.77615 17.1634 5.96688 17.0844 6.16575 17.0844C6.36462 17.0844 6.55535 17.1634 6.696 17.304ZM20.4855 20.4855C20.3449 20.6261 20.1541 20.7051 19.9552 20.7051C19.7564 20.7051 19.5656 20.6261 19.425 20.4855L17.304 18.3645C17.1674 18.223 17.0918 18.0336 17.0935 17.8369C17.0952 17.6403 17.1741 17.4522 17.3131 17.3131C17.4522 17.1741 17.6403 17.0952 17.8369 17.0935C18.0336 17.0918 18.223 17.1674 18.3645 17.304L20.4855 19.425C20.6261 19.5656 20.7051 19.7564 20.7051 19.9552C20.7051 20.1541 20.6261 20.3449 20.4855 20.4855ZM6.696 6.6975C6.55535 6.8381 6.36462 6.91709 6.16575 6.91709C5.96688 6.91709 5.77615 6.8381 5.6355 6.6975L3.5145 4.575C3.44287 4.50581 3.38573 4.42306 3.34642 4.33155C3.30712 4.24005 3.28643 4.14164 3.28556 4.04205C3.2847 3.94247 3.30367 3.84371 3.34138 3.75153C3.37909 3.65936 3.43478 3.57562 3.5052 3.5052C3.57562 3.43478 3.65936 3.37909 3.75153 3.34138C3.84371 3.30367 3.94247 3.2847 4.04205 3.28556C4.14164 3.28643 4.24005 3.30712 4.33155 3.34642C4.42306 3.38573 4.50581 3.44287 4.575 3.5145L6.696 5.6355C6.76584 5.70517 6.82126 5.78793 6.85907 5.87905C6.89688 5.97017 6.91634 6.06785 6.91634 6.1665C6.91634 6.26515 6.89688 6.36283 6.85907 6.45395C6.82126 6.54507 6.76584 6.62783 6.696 6.6975Z",
  fill: "black"
}));
var LightModeIcon_default = LightModeIcon;

// app/components/Header.tsx
function Header() {
  const linkStyles = {
    color: "$text",
    ml: "$small",
    textDecoration: "none",
    transition: "color 0.4s",
    "&:hover": {
      color: "$primary-400"
    }
  };
  const NavBar = styled(Flex, {
    backdropFilter: "saturate(180%) blur(10px)",
    position: "sticky",
    py: "$x-small",
    top: 0,
    width: "100%",
    zIndex: 1e3
  });
  const LinkItem = styled(import_react7.Link, linkStyles);
  const AnchorItem = styled("a", __spreadProps(__spreadValues({}, linkStyles), {
    "& svg": {
      size: "$iconSmall"
    }
  }));
  const VisuallyHidden = styled("h2", {
    position: "absolute",
    clip: "rect(1px, 1px, 1px, 1px)",
    overflow: "hidden",
    height: "1px",
    width: "1px",
    wordWrap: "normal"
  });
  const Logo = styled("img", {
    maxHeight: "$iconMedium",
    objectFit: "contain"
  });
  return /* @__PURE__ */ React.createElement(NavBar, null, /* @__PURE__ */ React.createElement(Container2, {
    css: { px: "$xx-small", "@tabletUp": { px: "$small" } }
  }, /* @__PURE__ */ React.createElement(Flex, {
    justify: "between",
    align: "center"
  }, /* @__PURE__ */ React.createElement(Flex, {
    css: { "svg": { height: "32px", width: "max-content" } }
  }, /* @__PURE__ */ React.createElement(BlockmaticIcon_default, null)), /* @__PURE__ */ React.createElement(Flex, {
    justify: "end",
    as: "nav",
    role: "navigation",
    "aria-labelledby": "main-nav-title",
    align: "center"
  }, /* @__PURE__ */ React.createElement(VisuallyHidden, null, "Main navigation"), /* @__PURE__ */ React.createElement(LinkItem, {
    to: "#"
  }, "Login"), /* @__PURE__ */ React.createElement(AnchorItem, {
    "aria-label": "Go to Powerstack Template",
    href: "https://github.com/blockmatic/powerstack-remix"
  }, /* @__PURE__ */ React.createElement(GhLoginIcon_default, null))))));
}

// route:/home/andler/Development/git_local/remix/powerstack-remix/app/routes/about.tsx
function Index2() {
  const { user } = useStore();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("h1", null, "Something"), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(user, null, 2)));
}

// route:/home/andler/Development/git_local/remix/powerstack-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index3
});

// app/components/WalletLogin.tsx
var import_ethers2 = require("ethers");
var import_react8 = require("@remix-run/react");

// app/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  userSelect: "none",
  boxShadow: "0px 4px 8px 0px #00000014, 2px 2px 2px 0px #0000000a",
  "&::before": {
    boxSizing: "border-box"
  },
  "&::after": {
    boxSizing: "border-box"
  },
  fontSize: "$body",
  fontFamily: "$semi-bold",
  fontVariantNumeric: "tabular-nums",
  border: "1px solid none",
  textAlign: "center",
  lineHeight: "1.2",
  transition: "all 240ms ease-in-out",
  "svg": {
    transition: "all 240ms ease-in-out",
    width: "24px",
    height: "24px",
    marginRight: "$xxx-small",
    fill: "$text"
  },
  "&:disabled": {
    color: "$neutral-700",
    backgroundColor: "$neutral-300",
    cursor: "not-allowed"
  },
  "&:hover:not(:disabled)": {
    boxShadow: "0px 8px 16px 0px #00000014, 4px 4px 4px 0px #0000000a"
  },
  variants: {
    size: {
      "small": {
        borderRadius: "4px",
        height: "40px",
        p: "$xx-small"
      },
      "medium": {
        borderRadius: "4px",
        height: "50px",
        p: "$x-small",
        fontSize: "$body"
      },
      "large": {
        borderRadius: "4px",
        height: "50px",
        p: "$x-small",
        fontSize: "$body"
      }
    },
    variant: {
      default: {
        backgroundColor: "$neutral",
        "&:hover:not(:disabled)": {
          backgroundColor: "$neutral-700"
        }
      },
      metamask: {
        backgroundColor: "$primary-600",
        color: "#FFF",
        "&:hover:not(:disabled)": {
          backgroundColor: "$primary-700"
        }
      },
      anchor: {
        backgroundColor: "$primary-700",
        color: "#FFF",
        "&:hover:not(:disabled)": {
          backgroundColor: "$primary-800"
        }
      },
      phantom: {
        backgroundColor: "$primary",
        color: "#FFF",
        "&:hover:not(:disabled)": {
          backgroundColor: "$primary-600"
        }
      },
      oAuth: {
        backgroundColor: "$neutral-700",
        color: "#FFF",
        "path": { fill: "#FFF" },
        "&:hover:not(:disabled)": {
          backgroundColor: "$neutral-800"
        }
      },
      transparent: {
        width: "max-content",
        height: "max-content",
        backgroundColor: "none",
        boxShadow: "none",
        "svg": { m: 0 }
      }
    }
  },
  defaultVariants: {
    size: "medium",
    variant: "default"
  }
});

// app/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$semi-bold",
  fontSize: "$body",
  lineHeight: "1.2",
  variants: {
    variant: {
      h1: {
        rt: "center",
        fontFamily: "$extra-bold",
        fontSize: "$h-1"
      },
      h2: {
        rt: "center",
        fontFamily: "$extra-bold",
        fontSize: "$h-2"
      },
      h3: {
        rt: "center",
        fontFamily: "$extra-bold",
        fontSize: "$h-3"
      },
      h4: {
        rt: "center",
        fontFamily: "$extra-bold",
        fontSize: "$h-4"
      }
    }
  }
});

// app/components/Card.tsx
var Card = styled(Flex, {
  maxWidth: "574px",
  mx: "auto",
  borderRadius: "40px",
  px: "$small",
  py: "$large",
  transition: "all 160ms ease-in-out",
  position: "relative",
  background: "#fff8",
  backdropFilter: "saturate(180%) blur(10px)",
  "> button, > hr": {
    width: "100%",
    mb: "$small"
  },
  "> hr": {
    height: 1,
    backgroundColor: "$neutral",
    border: "none",
    mt: "$xx-small",
    mb: "$regular"
  },
  "&:hover": {
    boxShadow: "0px 12px 20px 0px #00000014, 6px 6px 6px 0px #0000000a",
    "&::before": {
      minHeight: "calc(100% - 4px)",
      minWidth: "100%"
    }
  },
  "@tabletUp": {
    px: "$x-large"
  },
  variants: {
    variant: {
      glass: {
        backgroundImage: "url('/assets/images/glass-bg')",
        "&::before": {
          transition: "all 160ms ease-in-out",
          backgroundColor: "#0000000a",
          content: "",
          minHeight: "calc(100% - 8px)",
          minWidth: "calc(100% - 2px)",
          position: "absolute",
          bottom: 0,
          right: 0,
          boxShadow: "0px 8px 16px 0px #00000014, 4px 4px 4px 0px #0000000a",
          filter: "blur(10px)"
        }
      }
    }
  }
});

// app/components/WalletLogin.tsx
var message = "Login to PowerStack Remix";
var useLoginSubmit = () => {
  const location = (0, import_react8.useLocation)();
  const fetcher = (0, import_react8.useFetcher)();
  const submit = ({ strategy, signed_message }) => {
    fetcher.submit(signed_message, {
      method: "post",
      action: `/actions/login/${strategy}?redirect_to=${location.pathname || "/"}`
    });
  };
  return submit;
};
var WalletLogin = () => {
  const { user } = useStore();
  const submit = useLoginSubmit();
  const loginWithMetamask = async () => {
    if (!ethereum)
      return alert("Metamask not found");
    const provider = new import_ethers2.ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    submit({
      strategy: "metamask",
      signed_message: {
        signature: await signer.signMessage(message),
        address: await signer.getAddress(),
        message
      }
    });
  };
  const loginWithPhantom = async () => {
    if (!isPhantom)
      return alert("Phantom not found");
    try {
      const resp2 = await solana.connect({ onlyIfTrusted: true });
      console.log(resp2.publicKey.toString(), solana.isConnected);
    } catch (err) {
      alert(err.message);
    }
    submit({
      strategy: "phantom",
      signed_message: {
        signature: await solana.signMessage(new TextEncoder().encode(message), "utf8"),
        address: resp.publicKey.toString(),
        message
      }
    });
  };
  return /* @__PURE__ */ React.createElement(Card, {
    direction: "column"
  }, /* @__PURE__ */ React.createElement(Text, {
    as: "h1",
    css: { mb: "$regular" },
    variant: "h1"
  }, "Welcome ", user ? "Back" : null, " to PowerStack Remix"), /* @__PURE__ */ React.createElement(Button, {
    css: { mb: "$small" },
    onClick: loginWithPhantom,
    variant: "phantom"
  }, /* @__PURE__ */ React.createElement(PhantonIcon_default, null), "Login with Phantom"), /* @__PURE__ */ React.createElement(Button, {
    css: { mb: "$small" },
    onClick: loginWithMetamask,
    variant: "metamask"
  }, /* @__PURE__ */ React.createElement(MetamaskIcon_default, null), "Login with Metamask"), /* @__PURE__ */ React.createElement(Button, {
    css: { mb: "$small" },
    onClick: () => console.log("I'm dummy, gimme power!"),
    variant: "anchor"
  }, /* @__PURE__ */ React.createElement(AnchorIcon_default, null), "Login with Anchor"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Flex, {
    justify: "between"
  }, /* @__PURE__ */ React.createElement(Button, {
    css: { "svg": { mr: 0 } },
    onClick: () => console.log("I'm dummy, gimme power!"),
    variant: "oAuth",
    "aria-label": "Login with Github"
  }, /* @__PURE__ */ React.createElement(GhLoginIcon_default, null)), /* @__PURE__ */ React.createElement(Button, {
    css: { "svg": { mr: 0 } },
    onClick: () => console.log("I'm dummy, gimme power!"),
    variant: "oAuth",
    "aria-label": "Login with Gitlab"
  }, /* @__PURE__ */ React.createElement(GitlabIcon_default, null)), /* @__PURE__ */ React.createElement(Button, {
    css: { "svg": { mr: 0 } },
    onClick: () => console.log("I'm dummy, gimme power!"),
    variant: "oAuth",
    "aria-label": "Login with BitBucket"
  }, /* @__PURE__ */ React.createElement(BitbucketIcon_default, null))));
};

// app/components/Footer.tsx
var ExternalLink = styled("a", {
  color: "$primary-300",
  "&:hover": {
    color: "$primary-400"
  }
});
var ThemeTogglerWrapper = styled("div", {
  "button": {
    borderRadius: "50%"
  },
  '&:hover circle[id="hover-fill"]': {
    fill: "$text"
  }
});
var Footer = () => /* @__PURE__ */ React.createElement(Flex, {
  css: { py: "$regular", px: "$x-small", color: "$neutral-600" },
  justify: "between"
}, /* @__PURE__ */ React.createElement(Text, null, "powered by ", /* @__PURE__ */ React.createElement(ExternalLink, {
  href: "https://github.com/blockmatic"
}, "Blockmatic")), /* @__PURE__ */ React.createElement(ThemeTogglerWrapper, null, /* @__PURE__ */ React.createElement(Button, {
  variant: "transparent"
}, /* @__PURE__ */ React.createElement(LightModeIcon_default, null))));

// route:/home/andler/Development/git_local/remix/powerstack-remix/app/routes/index.tsx
var MainContent = styled(Flex, {
  minHeight: "75vh",
  position: "relative"
});
var LoginBackground = styled("div", {
  background: "$login",
  width: "100%",
  height: "100%"
});
function Index3() {
  return /* @__PURE__ */ React.createElement(LoginBackground, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(MainContent, {
    align: "center",
    justify: "center"
  }, /* @__PURE__ */ React.createElement(Container2, null, /* @__PURE__ */ React.createElement(WalletLogin, null))), /* @__PURE__ */ React.createElement(Footer, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "24c9e82d", "entry": { "module": "/build/entry.client-SQ3WVRK3.js", "imports": ["/build/_shared/chunk-4ACWVKRS.js", "/build/_shared/chunk-K2NYLN3E.js", "/build/_shared/chunk-HSYOKXM2.js", "/build/_shared/chunk-6SKE6JXS.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ATPO3SBC.js", "imports": ["/build/_shared/chunk-NZTGUHDC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/$account": { "id": "routes/$account", "parentId": "root", "path": ":account", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$account-7HUZDDZ2.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-PXPWFFAU.js", "imports": ["/build/_shared/chunk-7TLTZDD4.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/actions/login/$strategy": { "id": "routes/actions/login/$strategy", "parentId": "root", "path": "actions/login/:strategy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/actions/login/$strategy-A4JWLL7V.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-SP2WO2SF.js", "imports": ["/build/_shared/chunk-7TLTZDD4.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-24C9E82D.js" };

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
  "routes/actions/login/$strategy": {
    id: "routes/actions/login/$strategy",
    parentId: "root",
    path: "actions/login/:strategy",
    index: void 0,
    caseSensitive: void 0,
    module: strategy_exports
  },
  "routes/$account": {
    id: "routes/$account",
    parentId: "root",
    path: ":account",
    index: void 0,
    caseSensitive: void 0,
    module: account_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
