// placeholder for feature flags
export interface AppFeatureFlags {}

// smart contract addresses
export interface AppContracts {}

// apis and other Appservices
export interface AppServices {
  graphql_api: string
  auth_api: string
  cloudinary_cloud_name: string
  cloudinary_api_key: string
  cloudinary_api_secret: string
  web3auth_client_id: string
  eosio: {
    eos_chain_id: string
    chain_rpc: string
  }
}

export interface AppAnalytics {
  google: string
  sentry: string
}

export interface AppMessages {
  session_message: string
}

// ethereum network config
type Network = {
  chain: string
  chain_id: string
  network_id: number // same as infura network_id
}

// global application configuration based on env
export interface AppConfig {
  app_name: string
  supported_networks: {
    ethereum: Network
  }
  contracts: AppContracts
  services: AppServices
  features: AppFeatureFlags
  analytics: AppAnalytics
  messages: AppMessages
}
