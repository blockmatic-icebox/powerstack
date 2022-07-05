import { ActionFunction } from '@remix-run/node'
import axios from 'axios'
import { appconfig } from '~/app-config'
import { auth } from '~/auth.server'

export const action: ActionFunction = async ({ request }) => {
  const url = new URL(request.url)
  const user = await auth.isAuthenticated(request)
  if (user) {
    try {
      const { data } = await axios.get(
        `${appconfig.services.auth}/provider/twitter/revoke`,
      )
      console.log('logout', data)
    } catch (error) {
      console.log('error', error)
    }
  }
  return auth.logout(request, {
    redirectTo: url.searchParams.get('redirect_to') || '/',
  })
}
