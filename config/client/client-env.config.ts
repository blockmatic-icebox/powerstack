import { logger } from '~/lib/logger'

export const clientEnv = {
  debug: process.env.NODE_ENV !== 'production',
  services: {
    auth: process.env.NEXT_PUBLIC_SERVICE_AUTH || '',
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
  web3auth: {
    clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || '',
    verifier: process.env.NEXT_PUBLIC_WEB3AUTH_APP_VERIFIER || '',
  },
  features: {
    someFeature: Boolean(process.env.NEXT_PUBLIC_FEATURE_WEBGL) || false,
  },
}
