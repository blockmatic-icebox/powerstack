import { client_args } from '~/app-config/client-config'
import { fetchJson } from '../library/fetch'
import { CreateSessionProps } from '../store/session-slice'
import { AuthMethod } from '../types/app-engine'

// const login_auth_api_url = 'https://powerstack-auth-atgjsg75cq-uc.a.run.app'

export type AuthResponse = {
  token: string | null
  error: unknown // TODO: fix type
}

const getLoginPath = (auth_method: AuthMethod) => {
  switch (auth_method) {
    case 'web3_solana': {
      return '/provider/phantom'
    }
    case 'web3_metamask':
    case 'web3_auth':
    default:
      return '/provider/evm'
  }
}

const login = async (login_payload: CreateSessionProps): Promise<AuthResponse> => {
  try {
    const login_auth_api_url =
      client_args.services.auth_api + getLoginPath(login_payload.auth_method)
    const login_response = await fetchJson(login_auth_api_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login_payload),
    })
    return login_response as AuthResponse
  } catch (error) {
    console.log('error', error)
    throw new Error((error as Error).message)
  }
}

export const auth_service = {
  login,
}
