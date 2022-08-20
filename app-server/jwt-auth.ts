import { app_args } from '~/app-config/app-arguments'
import { app_logger } from '~/app-engine/library/logger'
import { FetchError, fetchJson } from '../app-engine/library/fetch'
import { CreateSessionProps } from '../app-engine/store/session-slice'
import { AuthMethod } from '../app-engine/types/app-engine'

export type AuthErrorResponse = FetchError | Error
export type AuthResponse = {
  token: string
  error: AuthErrorResponse
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
    const login_auth_api_url = app_args.services.auth_api + getLoginPath(login_payload.auth_method)
    const { token, error } = await fetchJson<AuthResponse>(login_auth_api_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login_payload),
    })

    if (error || !token) throw error

    return { token, error }
  } catch (error) {
    app_logger.log('error', error)

    return { token: '', error: new FetchError(error as FetchError) }
  }
}

export const auth_service = {
  login,
}
