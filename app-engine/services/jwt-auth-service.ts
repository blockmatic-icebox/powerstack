import { client_args } from '~/app-config/client-config'
import { fetchJson } from '../library/fetch'

const login = async () => {
  console.log('client_args', client_args)
  try {
    const response = await fetchJson('https://powerstack-auth-atgjsg75cq-uc.a.run.app')
    console.log(response)
    return response
  } catch (error) {
    console.log('error', error)
  }
}

export const auth_service = {
  login,
}
