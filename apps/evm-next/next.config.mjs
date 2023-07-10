/** @type {import('next').NextConfig} */
// import * as path from "path"
// import { fileURLToPath } from "url"

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // this includes files from the monorepo base two directories up
    // outputFileTracingRoot: path.join(__dirname, "../../"),
  },
}

export default nextConfig
