/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const is_vercel = Boolean(process.env.VERCEL)
const is_dev = Boolean(process.env.NODE_ENV === 'development')

module.exports = {
  serverBuildTarget: is_vercel ? 'vercel' : 'node-cjs',
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: is_vercel ? './vercel-server.js' : undefined,
  ignoredRouteFiles: ['.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "api/index.js",
  // publicPath: "/build/",
}
