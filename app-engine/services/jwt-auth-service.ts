import { client_args } from '~/app-config/client-config'
import { fetchJson } from '../library/fetch'
import { CreateSessionProps } from '../store/session-slice'

// const login_auth_api_url = 'https://powerstack-auth-atgjsg75cq-uc.a.run.app'

export type AuthResponse = {
  token: string | null
  error: unknown // TODO: fix type
}

// TODO: fix type
// WIP: fix login_auth_api_url
const login = async (login_payload: CreateSessionProps): Promise<AuthResponse> => {
  try {
    const login_auth_api_url = 'http://localhost:4001/provider/evm'
    const response = await fetchJson(login_auth_api_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login_payload),
    })
    return response as AuthResponse
  } catch (error) {
    console.log('error', error)
    throw new Error((error as Error).message)
  }
}

export const auth_service = {
  login,
}
