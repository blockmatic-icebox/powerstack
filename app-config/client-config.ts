import { AppConfig } from '../app-engine/types/app-config'

export const client_args: AppConfig = {
  contracts: {},
  services: {
    auth_api: process.env.NEXT_PUBLIC_AUTH_API || '',
    graphql_api: process.env.NEXT_PUBLIC_GRAPHQL_API || '',
    cloudinary_cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
    cloudinary_api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
    cloudinary_api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET || '',
    web3auth_client_id: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || '',
  },
  analytics: {
    google: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '',
    sentry: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
  },
  features: {},
  messages: {
    session_message: 'Login to PowerStack dApp',
  },
}
