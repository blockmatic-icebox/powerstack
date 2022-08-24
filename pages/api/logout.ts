import { NextApiRequest, NextApiResponse } from 'next'
import { withSessionRoute } from '~/app-server/session-hoc'

const logout_route = (req: NextApiRequest, res: NextApiResponse<{ success: boolean }>) => {
  req.session.destroy()
  res.json({ success: true })
}

export default withSessionRoute(logout_route)
