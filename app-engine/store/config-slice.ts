import type { StoreSlice } from '../index'
import { AppConfig } from '../types/app-config'

export type ConfigState = {
  app_engine_initialized: boolean
  app_engine_init_time: Date | null
  app_engine_config: AppConfig
}

export const createConfigSlice: StoreSlice<ConfigState> = (set, get) => ({
  app_engine_initialized: false,
  app_engine_init_time: null,
  // we use dummy values to make typescript happy
  // we know these values will always be set on by the initialization method
  app_engine_config: {
    contracts: {},
    services: {
      auth_api: '',
      graphql_api: '',
      graphql_api_key: '',
      cloudinary_cloud_name: '',
      cloudinary_api_key: '',
      cloudinary_api_secret: '',
      web3auth_client_id: '',
    },
    analytics: {
      google: '',
      sentry: '',
    },
    features: {},
  },
})
