import type { ActionFunction } from '@remix-run/node'
import { auth } from '~/auth.server'

export const action: ActionFunction = async ({ request, params }) => {
  const url = new URL(request.url)
  const redirect_to = url.searchParams.get('redirect_to')

  return auth.authenticate(params.strategy!, request, {
    successRedirect: redirect_to!,
    failureRedirect: redirect_to!,
  })
}
