import type { AppConfig } from '~/app-config'
import type { SessionState } from '.'

// dummy for solve typescript undefined appconfig, we know it'll always be defined but we need to make ts happy
export const dummy_appconfig: AppConfig = {
  network: {
    chain: '',
    chain_id: '',
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
    cloud_name: '',
    api_key: '',
    api_secret: '',
  },
  features: {},
}

export const defaultAppSessionState: SessionState = {
  appconfig: dummy_appconfig, // this gets replaced on root.tsx loader.
  user: null,
  session_error: null,
}
