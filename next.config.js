/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
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
  i18n: {
    // Initial supported locales for American Region. Locales MUST match with DatoCMS.SiteLocale
    locales: ['en_US', 'es', 'fr_CA', 'pt_BR'],
    // As always, en_US is our default lang
    defaultLocale: 'en_US',
  },
}

module.exports = nextConfig
