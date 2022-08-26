import { app_args } from '~/app-config/app-arguments'
import { app_logger } from '~/app-engine/library/logger'
import { FetchError, fetchJson } from '../app-engine/library/fetch'
import { CreateSessionParams } from '../app-engine/store/session-slice'
import { AppLoginMethod, AppUser } from '../app-engine/types/app-engine'

export type AuthErrorResponse = FetchError | Error
export type AuthResponse = {
  data: AppUser | null
  error: AuthErrorResponse
}
export type LoginResponse = {
  token: string
  error: AuthErrorResponse
}

const getLoginPath = (auth_method: AppLoginMethod) => {
  switch (auth_method) {
    case 'web3_antelope':
      return '/provider/antelope'
    case 'web3_solana':
      return '/provider/solana'
    case 'web3_metamask':
    case 'web3_auth':
    default:
      return '/provider/evm'
  }
}

const login = async (login_payload: CreateSessionParams): Promise<LoginResponse> => {
  try {
    const login_auth_api_url = app_args.services.auth_api + getLoginPath(login_payload.auth_method)
    const login_response = await fetchJson<LoginResponse>(login_auth_api_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login_payload),
    })
    console.log('login_response', login_response)
    const { token, error } = login_response
    console.log({ token, error })

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
