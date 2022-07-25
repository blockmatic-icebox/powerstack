import type { AppConfig } from 'environment/app-config'
import type { AppSessionState } from '.'

// dummy for solve typescript undefined appconfig, we know it'll always be defined but we need to make ts happy
export const dummy_appconfig: AppConfig = {
  contracts: {},
  services: {
    graphql_api: '',
  },
  analytics: {
    google: '',
    sentry: '',
  },
  cloudinary: {
    cloud_name: '',
    api_key: '',
    api_secret: '',
  },
  features: {},
}

export const defaultAppSessionState: AppSessionState = {
  appconfig: dummy_appconfig, // this gets replaced on root.tsx loader.
  user: null,
  session_error: null,
}
