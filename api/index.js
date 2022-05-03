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
var radii = { "radius-4": "4px", "radius-6": "6px", "radius-12": "12px", "radius-20": "20px" };
var shadows = { "drop-shadow-1": "0px 4px 8px 0px #00000014, 2px 2px 2px 0px #0000000a", "drop-shadow-2": "0px 8px 16px 0px #00000014, 4px 4px 4px 0px #0000000a", "drop-shadow-3": "0px 12px 20px 0px #00000014, 6px 6px 6px 0px #0000000a", "drop-shadow-4": "0px 16px 24px 0px #00000014, 8px 8px 8px 0px #0000000a", "drop-shadow-5": "0px 24px 28px 0px #00000014, 12px 12px 12px 0px #0000000a" };
var colors = { primary: "#044bff", "shadow-layer-1": "#00000014", "shadow-layer-2": "#0000000a", background: "#ffffff", neutral: "#eaeef0", "neutral-400": "#eef2f3", "neutral-300": "#f2f5f7", "neutral-600": "#b3c1c8", "neutral-700": "#7d94a0", "neutral-200": "#f6f8fa", "neutral-800": "#51646d", text: "#000505", "primary-400": "#1d5dff", "primary-300": "#366fff", "primary-200": "#4f81ff", "primary-600": "#033ccc", "primary-700": "#052e96", "primary-800": "#052062" };
var fonts = { bold: "Gilroy-Bold", "extra-bold": "Gilroy-ExtraBold", "semi-bold": "Gilroy-SemiBold" };
var durations = { instant: "0", "x-fast": "107", fast: "160", normal: "240", slow: "360", "x-slow": "540" };
var easeCurves = { "in-out-quint": { x1: 0.86, y1: 0, x2: 0.07, y2: 1 }, "out-quint": { x1: 0.23, y1: 1, x2: 0.32, y2: 1 }, "in-sine": { x1: 0.47, y1: 0, x2: 0.745, y2: 0.715 } };
var space = { none: "0px", "xxx-small": "6px", "xx-small": "9px", "x-small": "14px", small: "21px", regular: "32px", large: "48px", "x-large": "72px", "xx-large": "108px", "xxx-large": "162px" };
var light_theme_default = { name, typeStyles, radii, shadows, colors, fonts, durations, easeCurves, space };

// app/styles/dark-theme.json
var name2 = "dark";
var typeStyles2 = { "display-1": { fontFamily: "Gilroy-ExtraBold", fontSize: "48px", lineHeight: "62px", letterSpacing: "0.1em" }, "display-2": { fontFamily: "Gilroy-ExtraBold", fontSize: "40px", lineHeight: "52px", letterSpacing: "0.1em" }, "h-1": { fontFamily: "Gilroy-Bold", fontSize: "33px", lineHeight: "44px", letterSpacing: "0.1em" }, "h-2": { fontFamily: "Gilroy-Bold", fontSize: "28px", lineHeight: "38px", letterSpacing: "0.1em" }, "h-3": { fontFamily: "Gilroy-Bold", fontSize: "23px", lineHeight: "32px", letterSpacing: "0.1em" }, "h-4": { fontFamily: "Gilroy-Bold", fontSize: "19px", lineHeight: "27px", letterSpacing: "0.1em" }, "h-5": { fontFamily: "Gilroy-Bold", fontSize: "16px", lineHeight: "23px", letterSpacing: "0.1em" }, body: { fontFamily: "Gilroy-Bold", fontSize: "16px", lineHeight: "23px", letterSpacing: "0.1em" }, small: { fontFamily: "Gilroy-SemiBold", fontSize: "13px", lineHeight: "20px", letterSpacing: "0.1em" }, "x-small": { fontFamily: "Gilroy-SemiBold", fontSize: "11px", lineHeight: "17px", letterSpacing: "0.1em" } };
var radii2 = { "radius-4": "4px", "radius-6": "6px", "radius-12": "12px", "radius-20": "20px" };
var shadows2 = { "drop-shadow-1": "0px 4px 8px 0px #0000003d, 2px 2px 2px 0px #0000001f", "drop-shadow-2": "0px 8px 16px 0px #0000003d, 4px 4px 4px 0px #00000021", "drop-shadow-3": "0px 12px 20px 0px #0000003d, 6px 6px 6px 0px #0000001f", "drop-shadow-4": "0px 16px 24px 0px #0000003d, 8px 8px 8px 0px #0000001f", "drop-shadow-5": "0px 24px 28px 0px #0000003d, 12px 12px 12px 0px #0000001f" };
var colors2 = { primary: "#00023e", "shadow-layer-1": "#00000014", "shadow-layer-2": "#0000000a", background: "#002f2f", neutral: "#eaeef0", "neutral-400": "#eef2f3", "neutral-300": "#f2f5f7", "neutral-600": "#b3c1c8", "neutral-700": "#7d94a0", "neutral-200": "#f6f8fa", "neutral-800": "#51646d", text: "#fefefe", "primary-400": "#00036b", "primary-300": "#000598", "primary-200": "#0006c4", "primary-600": "#010231", "primary-700": "#010224", "primary-800": "#010218" };
var fonts2 = { bold: "Gilroy-Bold", "extra-bold": "Gilroy-ExtraBold", "semi-bold": "Gilroy-SemiBold" };
var durations2 = { instant: "0", "x-fast": "107", fast: "160", normal: "240", slow: "360", "x-slow": "540" };
var easeCurves2 = { "in-out-quint": { x1: 0.86, y1: 0, x2: 0.07, y2: 1 }, "out-quint": { x1: 0.23, y1: 1, x2: 0.32, y2: 1 }, "in-sine": { x1: 0.47, y1: 0, x2: 0.745, y2: 0.715 } };
var space2 = { none: "0px", "xxx-small": "6px", "xx-small": "9px", "x-small": "14px", small: "21px", regular: "32px", large: "48px", "x-large": "72px", "xx-large": "108px", "xxx-large": "162px" };
var dark_theme_default = { name: name2, typeStyles: typeStyles2, radii: radii2, shadows: shadows2, colors: colors2, fonts: fonts2, durations: durations2, easeCurves: easeCurves2, space: space2 };

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
    colors: __spreadProps(__spreadValues({}, light_theme_default.colors), {
      "header-bg": "hsla(0,0%,100%,.8)"
    }),
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
    boxSizing: "border-box"
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

// route:/Users/gaboesquivel/Code/powerstack-remix/app/routes/$account.tsx
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

// route:/Users/gaboesquivel/Code/powerstack-remix/app/routes/about.tsx
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
    backdropFilter: "saturate(180%) blur(5px)",
    boxShadow: "inset 0 -1px 0 0 rgba(0,0,0,.1)",
    bg: "$header-bg",
    position: "absolute",
    py: "$x-small",
    top: 0,
    width: "100%"
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
  return /* @__PURE__ */ React.createElement(NavBar, null, /* @__PURE__ */ React.createElement(Container2, null, /* @__PURE__ */ React.createElement(Flex, {
    justify: "between",
    align: "center"
  }, /* @__PURE__ */ React.createElement(Logo, {
    src: "/logo-text-icon.png",
    alt: "Blockmatic Logo"
  }), /* @__PURE__ */ React.createElement(Flex, {
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

// route:/Users/gaboesquivel/Code/powerstack-remix/app/routes/about.tsx
function Index2() {
  const { user } = useStore();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("h1", null, "Something"), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(user, null, 2)));
}

// route:/Users/gaboesquivel/Code/powerstack-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index3
});
var import_react10 = require("@remix-run/react");

// app/components/WalletLogin.tsx
var import_react8 = require("@stitches/react");
var import_ethers2 = require("ethers");
var import_react9 = require("@remix-run/react");
var StyledWallet = (0, import_react8.styled)("div", {
  border: "1px dotted gray",
  minHeight: 100
});
var message = "Login to PowerStack Remix";
var useLoginSubmit = () => {
  const location = (0, import_react9.useLocation)();
  const fetcher = (0, import_react9.useFetcher)();
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
  return /* @__PURE__ */ React.createElement(StyledWallet, null, /* @__PURE__ */ React.createElement("h3", null, "Rinkeby"), /* @__PURE__ */ React.createElement("button", {
    onClick: loginWithMetamask
  }, "Login with Metamask"), /* @__PURE__ */ React.createElement("p", null, "Address:", " ", (user == null ? void 0 : user.address) && (user == null ? void 0 : user.network) === "rinkeby" ? user.address : "wallet not connected"), /* @__PURE__ */ React.createElement("h3", null, "Solana"), /* @__PURE__ */ React.createElement("button", {
    onClick: loginWithPhantom
  }, "Login with Phantom"), /* @__PURE__ */ React.createElement("p", null, "Address:", " ", (user == null ? void 0 : user.address) && (user == null ? void 0 : user.network) === "solana" ? user.address : "wallet not connected"));
};

// route:/Users/gaboesquivel/Code/powerstack-remix/app/routes/index.tsx
function Index3() {
  const { user, appconfig: appconfig2 } = useStore();
  console.log(JSON.stringify(appconfig2));
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("h1", null, "Welcome ", user ? "Back" : null, " to PoweStack Remix"), /* @__PURE__ */ React.createElement(WalletLogin, null), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react10.Link, {
    to: "/about"
  }, "About"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "2d790f81", "entry": { "module": "/build/entry.client-NELYJJVT.js", "imports": ["/build/_shared/chunk-4ACWVKRS.js", "/build/_shared/chunk-OG5HDHT3.js", "/build/_shared/chunk-HSYOKXM2.js", "/build/_shared/chunk-6SKE6JXS.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-W5JTOZYM.js", "imports": ["/build/_shared/chunk-LBZBGASG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/$account": { "id": "routes/$account", "parentId": "root", "path": ":account", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$account-JGY64W5Z.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-UGLEDKRV.js", "imports": ["/build/_shared/chunk-63VZOVCT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/actions/login/$strategy": { "id": "routes/actions/login/$strategy", "parentId": "root", "path": "actions/login/:strategy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/actions/login/$strategy-Z6YG3TY5.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-RU6YW7SP.js", "imports": ["/build/_shared/chunk-63VZOVCT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-2D790F81.js" };

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
