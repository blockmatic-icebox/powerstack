import { fetchJson } from '../library/fetch'

const login = async () => {
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
