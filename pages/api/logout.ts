import type { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { serverEnv } from '~/config/server'

async function logout(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy()
  res.json({ success: true })
}

export default withIronSessionApiRoute(logout, serverEnv.sessionOptions)
