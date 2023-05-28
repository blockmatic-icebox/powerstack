import { Chain, goerli, mainnet, polygonZkEvm, polygonZkEvmTestnet } from 'wagmi/chains'

const isTestnet = process.env.NEXT_PUBLIC_TESTNET === 'true'

export const clientEnv = {
  debug: process.env.NODE_ENV !== 'production',
  services: {
    // endpoints
    auth: process.env.NEXT_PUBLIC_SERVICE_AUTH || '',
    graphql: process.env.NEXT_PUBLIC_GRAPHQL_API || '',
  },
  analytics: {
    google: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '',
    sentry: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
  },
  cloudinary: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
    apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
    apiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
  },
  datocms: {
    endpoint: process.env.NEXT_PUBLIC_CMS_GRAPHQL_API || '',
    key: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
  },
  isTestnet,
  networks: [goerli], // commented until we deploy on ethereum (isTestnet ? [goerli] : [mainnet]) as Chain[],
  features: {
    someFeature: Boolean(process.env.NEXT_PUBLIC_FEATURE_WEBGL) || false,
  },
}
