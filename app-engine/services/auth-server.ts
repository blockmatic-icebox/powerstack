import { AuthResponse } from '~/app-server/jwt-auth'
import { fetchJson } from '../library/fetch'
import { app_logger } from '../library/logger'
import { CreateSessionParams } from '../store/session-slice'

export const auth_server = {
  login: async (login_payload: CreateSessionParams) => {
    app_logger.log('🍪 create cookie session', JSON.stringify(login_payload))
    const { data, error } = await fetchJson<AuthResponse>('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login_payload),
    })
    app_logger.log('🍪 cookie session created!')

    if (error || !data) throw error || 'Unauthorized access.'

    return data
  },
  logout: async () => {
    app_logger.log('🍪 destroy cookie session')
    await fetchJson('/api/logout', {
      method: 'POST',
    })
    app_logger.log('🍪 cookie session destroyed!')
  },
}
