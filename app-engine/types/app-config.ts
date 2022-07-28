
// placeholder for feature flags
export interface AppFeatureFlags {}

// smart contract addresses
export interface AppContracts {}

// apis and other Appservices
export interface AppServices {
  graphql_api: string
  graphql_api_key: string
  auth_api: string
  cloudinary_cloud_name: string
  cloudinary_api_key: string
  cloudinary_api_secret: string

}

export interface AppAnalytics {
  google: string
  sentry: string
}


// global application configuration based on env
export interface AppConfig {
  contracts: AppContracts
  services: AppServices
  features: AppFeatureFlags
  analytics: AppAnalytics
}
