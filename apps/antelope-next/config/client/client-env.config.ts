export const clientEnv = {
  appName: 'appName',
  jwtKey: 'gwt',
  debug: process.env.NODE_ENV !== 'production',
  loginMessage: 'Login to dBoard',
  services: {
    auth: process.env.NEXT_PUBLIC_SERVICE_AUTH || '',
    graphql: process.env.NEXT_PUBLIC_GRAPHQL_API || '',
  },
  analytics: {
    google: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '',
    sentry: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
  },
  cloudinary: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
    apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
    apiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
    apiPublicUrl: process.env.NEXT_PUBLIC_UPLOAD_URL || '',
  },
  datocms: {
    endpoint: process.env.NEXT_PUBLIC_CMS_GRAPHQL_API || '',
    key: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
  },
  features: {
    someFeature: Boolean(process.env.NEXT_PUBLIC_FEATURE_WEBGL) || false,
  },
}
