export const serverEnv = {
  sessionOptions: {
    password: process.env.IRON_SESSION_PASSWORD || '74e1926a5f332cb1c4ad028dbc4fe13f2c49efef',
    cookieName: process.env.IRON_SESSION_PASSWORD || 'cookie-session',
    secure: process.env.NODE_ENV === 'production',
  },
  flow: {
    niftorySecret: process.env.NIFTORY_CLIENT_SECRET || '',
    niftoryClientId: process.env.NIFTORY_CLIENT_ID || '',
  },
}
