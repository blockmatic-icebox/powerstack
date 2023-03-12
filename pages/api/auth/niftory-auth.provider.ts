import { Provider } from 'next-auth/providers'

import { chainConfig } from '~/config/chain'
import { serverEnv } from '~/config/server'

export const niftoryAuthProvider: Provider = {
  id: 'niftory',
  name: 'Niftory',
  type: 'oauth',
  wellKnown: `${chainConfig.flowTestnet.niftoryAuth}/.well-known/openid-configuration`,
  // We request offline_access and consent prompt because we need to get a refresh token
  authorization: {
    params: { scope: 'openid email profile offline_access', prompt: 'consent' },
  },
  clientId: serverEnv.flow.niftoryClientId,
  clientSecret: serverEnv.flow.niftorySecret,
  checks: ['pkce', 'state'],
  idToken: true,
  profile(profile) {
    return {
      id: profile.sub,
      name: profile.name,
      email: profile.email,
      image: profile.picture,
    }
  },
  httpOptions: {
    timeout: 10000,
  },
}
