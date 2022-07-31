import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '~/session'
import { NextApiRequest, NextApiResponse } from 'next'
import { AppUser } from '~/app-engine/types/app-engine'

export default withIronSessionApiRoute(loginRoute, sessionOptions)

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  // const { address, message, signature } = await req.body

  try {
    // TODO: call auth server and put JWT on the cookie session.

    // save user object
    const user = { address: '0x123', jwt_token: '' } as AppUser
    req.session.user = user
    await req.session.save()
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}
