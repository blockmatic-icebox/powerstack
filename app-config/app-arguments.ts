import { AppArguments } from '../app-engine/types/app-config'

export const app_args: AppArguments = {
  app_name: process.env.NEXT_PUBLIC_APP_NAME || '',
  session_cookie_name: process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME || 'app-session',
  supported_networks: process.env.NEXT_PUBLIC_SUPPORTED_NETWORKS?.split(',') || [],
  contracts: {},
  services: {
    auth_api: process.env.NEXT_PUBLIC_AUTH_API || '',
    graphql_api: process.env.NEXT_PUBLIC_GRAPHQL_API || '',
    cloudinary_cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
    cloudinary_api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
    cloudinary_api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET || '',
    web3auth_client_id: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || '',
    web3auth_chain_id: process.env.NEXT_PUBLIC_WEB3AUTH_CHAIN_ID || '',
    web3auth_infra_api_key: process.env.NEXT_PUBLIC_WEB3AUTH_INFRA_API_KEY || '',
    datocms_api_token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN || '',
    datocms_preview_secret: process.env.NEXT_PUBLIC_DATOCMS_PREVIEW_SECRET || '',
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
