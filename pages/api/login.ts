import type { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { serverEnv } from '~/config/server'
import jwtDecode from 'jwt-decode'
import type { CreateSessionParams, LoginMethod, LoginResponse } from '~/services/auth'
import { clientEnv } from '~/config/client'
import { fetchJson } from '~/lib/fetch'
import { logger } from '~/lib/logger'

const getLoginPath = (auth_method: LoginMethod) => {
  switch (auth_method) {
    case 'web3_solana':
      return '/provider/solana'
    case 'web2_userpassword':
      return '/provider/userpassword'
    case 'web2_twitter':
      return '/provider/jwt'
    default:
      return ''
  }
}

export async function getUserFromToken(jwt: string): Promise<{}> {
  const decoded = jwtDecode(jwt) as any

  return {
    auth_jwt: jwt,
    session_id: decoded?.user.session_id,
    username: decoded?.user.username || 'none',
    account_id: decoded?.user.account_id,
    addresses: decoded?.user.addresses,
  }
}

async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    const loginPayload = (await req.body) as CreateSessionParams
    const loginAuthApiUrl = clientEnv.services.auth + getLoginPath(loginPayload.auth_method)
    const { error, token } = await fetchJson<LoginResponse>(loginAuthApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginPayload),
    })
    if (error || !token) {
      return res
        .status(401)
        .send({ token, error: error || new Error('Cannot login. Unauthorized access.') })
    }
    const user = await getUserFromToken(token)
    req.session.user = user
    await req.session.save()
    res.send({ data: user, error })
  } catch (error) {
    logger.log('❌ could not login', error)
    res.status(500).send({ data: {}, error })
  }
}

export default withIronSessionApiRoute(login, serverEnv.sessionOptions)
