import { NextApiRequest, NextApiResponse } from 'next'
import { auth_service } from '~/app-server/jwt-auth'
import { CreateSessionProps } from '~/app-engine/store/session-slice'
import { AppUser } from '~/app-engine/types/app-engine'
import { withSessionRoute } from '~/app-server/session-hoc'
import { app_logger } from '~/app-engine/library/logger'

const login_route = async (req: NextApiRequest, res: NextApiResponse) => {
  const login_payload = (await req.body) as CreateSessionProps

  try {
    const { token, error } = await auth_service.login(login_payload)

    // If we get error or no token, then it is an Unauthorized Access
    if (error || !token)
      return res
        .status(401)
        .send({ token, error: error || new Error('Cannot login. Unauthorized access.') })

    const user: AppUser = {
      user_addresses: [
        {
          network: login_payload.network,
          address: 'HRXVUmyowUDPku6M8UsoY62NzZUknvJkUCgAq8s6Rdqs', //TODO: make it dynamic. its breaking hydration
          ticker: login_payload.network,
          balance: '0',
          unit_balance: '0',
        },
      ],
      jwt: `Bearer ${token}`,
      auth_method: login_payload.auth_method,
    }

    req.session.user = user
    await req.session.save()
    res.send({ data: user, error })
  } catch (error) {
    app_logger.log('❌ could not login', error)
    res.status(500).send({ data: {}, error })
  }
}

export default withSessionRoute(login_route)
