import * as env from 'env-var'
import { AppConfig } from '~/app-engine/types/app-config'

export interface AppSecrets {
  iron_session_password: '74e1926a5f332cb1c4ad028dbc4fe13f2c49efef'
}

export const appconfig: AppConfig = {
  contracts: {
    
  },
  services: {
    auth_api: env.get('NEXT_PUBLIC_AUTH_API').asString() || '',
    graphql_api: env.get('NEXT_PUBLIC_GRAPHQL_API').asString() || '',
    graphql_api_key: env.get('NEXT_PUBLIC_GRAPHQL_API_KEY').asString() || '',
    cloudinary_cloud_name: env.get('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME').asString() || '',
    cloudinary_api_key: env.get('NEXT_PUBLIC_CLOUDINARY_API_KEY').asString() || '',
    cloudinary_api_secret: env.get('NEXT_PUBLIC_CLOUDINARY_API_SECRET').asString() || '',
  },
  analytics: {
    google: env.get('NEXT_PUBLIC_GOOGLE_ANALYTICS').asString() || '',
    sentry: env.get('NEXT_PUBLIC_SENTRY_DSN').asString() || '',
  },
  features: {},
}
