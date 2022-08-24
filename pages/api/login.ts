import { NextApiRequest, NextApiResponse } from 'next'
import { auth_service } from '~/app-server/jwt-auth'
import { CreateSessionProps } from '~/app-engine/store/session-slice'
import { withSessionRoute } from '~/app-server/session-hoc'
import { app_logger } from '~/app-engine/library/logger'
import { getSessionAppUser } from '~/app-server/session-user'

const login_route = async (req: NextApiRequest, res: NextApiResponse) => {
  const login_payload = (await req.body) as CreateSessionProps

  try {
    const { token, error } = await auth_service.login(login_payload)

    // If we get error or no token, then it is an Unauthorized Access
    if (error || !token)
      return res
        .status(401)
        .send({ token, error: error || new Error('Cannot login. Unauthorized access.') })

    const user = await getSessionAppUser(token)

    req.session.user = user
    await req.session.save()
    res.send({ data: user, error })
  } catch (error) {
    app_logger.log('❌ could not login', error)
    res.status(500).send({ data: {}, error })
  }
}

export default withSessionRoute(login_route)
