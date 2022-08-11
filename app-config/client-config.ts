import { AppConfig } from '../app-engine/types/app-config'

export const client_args: AppConfig = {
  contracts: {},
  services: {
    auth_api: process.env.AUTH_API || '',
    graphql_api: process.env.GRAPHQL_API || '',
    cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY || '',
    cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET || '',
    web3auth_client_id: process.env.WEB3AUTH_CLIENT_ID || '',
  },
  analytics: {
    google: process.env.GOOGLE_ANALYTICS || '',
    sentry: process.env.SENTRY_DSN || '',
  },
  features: {},
  messages: {
    session_message: 'Login to PowerStack dApp',
  },
}
