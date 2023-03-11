import { BaseClient, Issuer, TokenSet, custom } from 'openid-client'

import { chainConfig } from '~/config/chain'
import { serverEnv } from '~/config/server'

let client: BaseClient
let token: TokenSet

custom.setHttpOptionsDefaults({ timeout: 30000 })

async function getOAuthClient() {
  if (!client) {
    const issuer = await Issuer.discover(chainConfig.flowTestnet.niftoryAuth)
    client = new issuer.Client({
      client_id: serverEnv.flow.niftoryClientId,
      client_secret: serverEnv.flow.niftorySecret,
    })
  }

  return client
}

/**
 * Gets a client credentials token.
 * @returns The client credentials token that represents the client itself.
 */
export async function getClientCredentialsToken() {
  const client = await getOAuthClient()

  if (!token || token.expired()) {
    token = await client.grant({ grant_type: 'client_credentials' })
  }

  return token.access_token
}

/**
 * Refreshes an auth token.
 * @param refreshToken The refresh token to use to refresh the auth token
 * @returns A refreshed token set
 */
export async function refreshAuthToken(refreshToken: string) {
  const client = await getOAuthClient()

  return await client.refresh(refreshToken)
}
