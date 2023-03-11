import jwtDecode from 'jwt-decode'

import { fetchJson } from '~/lib/fetch'
import { logger } from '~/lib/logger'

import { AuthResponse, CreateSessionParams } from './auth.types'

export async function login(login_payload: CreateSessionParams) {
  logger.log('🍪 create cookie session', JSON.stringify(login_payload))
  const { data, error } = await fetchJson<AuthResponse>('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(login_payload),
  })
  logger.log('🍪 cookie session created!')

  if (error || !data) throw error || 'Unauthorized access.'

  return data
}

export async function logout() {
  logger.log('🍪 destroy cookie session')
  await fetchJson('/api/logout', {
    method: 'POST',
  })
  logger.log('🍪 cookie session destroyed!')
}
