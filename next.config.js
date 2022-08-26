/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGES_DOMAIN ? [process.env.NEXT_PUBLIC_IMAGES_DOMAIN] : [],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
