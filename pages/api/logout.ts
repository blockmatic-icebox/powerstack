import { NextApiRequest, NextApiResponse } from 'next'
import { withAppSessionApiRoute } from '~/app-server/session'

const logout_route = (req: NextApiRequest, res: NextApiResponse<{ success: boolean }>) => {
  req.session.destroy()
  res.json({ success: true })
}

export default withAppSessionApiRoute(logout_route)
