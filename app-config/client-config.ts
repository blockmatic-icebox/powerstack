import { AppConfig } from '../app-engine/types/app-config'

export const client_args: AppConfig = {
  app_name: process.env.NEXT_APP_NAME || '',
  contracts: {},
  supported_networks: {
    ethereum: {
      chain: process.env.NEXT_PUBLIC_ETHEREUM_CHAIN_NAME || '',
      chain_id: process.env.NEXT_PUBLIC_ETHEREUM_CHAIN_ID || '',
      network_id: parseInt(process.env.NEXT_PUBLIC_ETHEREUM_NETWORK_ID || '4'), // TODO: check value
    },
  },
  services: {
    eosio: {
      eos_chain_id: process.env.NEXT_EOS_CHAIN_ID || '',
      chain_rpc: process.env.NEXT_PUBLIC_EOS_API_HOST || '',
    },
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
