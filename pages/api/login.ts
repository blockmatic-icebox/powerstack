import { ethers } from 'ethers'
import { NextApiRequest, NextApiResponse } from 'next'
import { auth_service } from '~/app-engine/services/jwt-auth-service'
import { AppUser } from '~/app-engine/types/app-engine'
import { withAppSessionApiRoute } from '~/app-server/session'

const login_route = async (req: NextApiRequest, res: NextApiResponse) => {
  // const { address, message, signature } = await req.body
  const { address, message, signature } = await req.body
  console.log('/api/login', { address, signature })

  const signer_address = await ethers.utils.verifyMessage(message, signature)
  if (signer_address !== address) throw new Error(`Invalid signature`)

  try {
    // const jwt_token = await auth_service.login()
    const user: AppUser = { user_addresses: [], user_balances: [] }
    req.session.user = user
    await req.session.save()
    res.send({ user: req.session.user })
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export default withAppSessionApiRoute(login_route)
