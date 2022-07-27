import * as env from 'env-var'

// PUBLIC CONFIGURATION
// Be careful to not put secrets here

// placeholder for feature flags
type FeatureFlags = {}

// smart contract addresses
type Contracts = {}

// apis and other services
type Services = {
  graphql_api: string
  graphql_api_key: string
  auth: string
  chainRpc: string
}

type Analytics = {
  google: string
  sentry: string
}

type Cloudinary = {
  cloud_name: string
  api_key: string
  api_secret: string
}


type Config = {
  eosChainId: string
  eosChainName: string
}

// global application configuration based on env
export type AppConfig = {
  contracts: Contracts
  services: Services
  features: FeatureFlags
  analytics: Analytics
  cloudinary?: Cloudinary
  config: Config
}

export const appconfig: AppConfig = {
  contracts: {},
  services: {
    auth: env.get('AUTH_API').required().asString(),
    chainRpc: env.get('REACT_APP_EOSIO_API_HOST').required().asString(),
    graphql_api: env.get('GRAPHQL_API').required().asString(),
    graphql_api_key: env.get('GRAPHQL_API_KEY').required().asString(),
  },
  analytics: {
    google: env.get('GOOGLE_ANALYTICS').asString() || '',
    sentry: env.get('SENTRY_DSN').asString() || '',
  },
  config: {
    eosChainId: env.get('REACT_APP_CHAIN_ID').asString() || '',
    eosChainName: env.get('REACT_APP_CHAIN_NAME').asString() || '',
  },
  cloudinary: {
    cloud_name: env.get('CLOUDINARY_CLOUD_NAME').asString() || '',
    api_key: env.get('CLOUDINARY_API_KEY').asString() || '',
    api_secret: env.get('CLOUDINARY_API_SECRET').asString() || '',
  },
  features: {},
}
