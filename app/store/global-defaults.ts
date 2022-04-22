import type { AppConfig } from '~/app-config'
import type { GlobalSliceState } from './global-slice'

// dummy for solve typescript undefined appconfig, we know it'll always be defined but we need to make ts happy
export const dummy_appconfig: AppConfig = {
  network: {
    chain: '',
    chainId: '',
  },
  contracts: {},
  services: {
    graphql_api: '',
  },
  analytics: {
    google: '',
    sentry: '',
  },
  cloudinary: {
    cloudName: '',
    apiKey: '',
    apiSecret: '',
  },
  features: {},
}

export const defaultAppStateState: GlobalSliceState = {
  show_wallet: false,
  show_sidebar: true,
  appconfig: dummy_appconfig, // this gets replaced on root.tsx loader.
  user: null,
}
