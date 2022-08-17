import { NextApiRequest, NextApiResponse } from 'next'
import { auth_service } from '~/app-server/jwt-auth'
import { CreateSessionProps } from '~/app-engine/store/session-slice'
import { AppUser } from '~/app-engine/types/app-engine'
import { withSessionRoute } from '~/app-server/session'

const login_route = async (req: NextApiRequest, res: NextApiResponse) => {
  const login_payload = (await req.body) as CreateSessionProps
  try {
    console.log('login_route', login_payload)
    const { token, error } = await auth_service.login(login_payload)
    if (error || !token) return res.status(500).json({ message: (error as Error).message })
    const user: AppUser = {
      user_addresses: [],
      jwt: token,
      auth_method: login_payload.auth_method,
    }
    req.session.user = user
    await req.session.save()
    res.send({ token, error })
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export default withSessionRoute(login_route)
