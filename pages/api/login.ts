import { ethers } from 'ethers'
import { NextApiRequest, NextApiResponse } from 'next'
import nacl from 'tweetnacl'
import { auth_service } from '~/app-engine/services/jwt-auth-service'
import { Address, AppUser } from '~/app-engine/types/app-engine'
import { withAppSessionApiRoute } from '~/app-server/session'

// interface SignatureValidatorParams {
//   address: Address
//   message: string
//   signed_message: any
// }

// const verifySolanaMessageSignature = async ({address, message, signed_message}:SignatureValidatorParams) =>{
//   nacl.sign.detached.verify(message, signed_message, address)
//  return true
// }
// const verifyEthereumMessageSignature = async ({
//   address,
//   message,
//   signed_message,
// }: SignatureValidatorParams) => {
//     const signer_address = await ethers.utils.verifyMessage(message, signed_message)
//   return signer_address !== address
// }

const login_route = async (req: NextApiRequest, res: NextApiResponse) => {
  // const { address, message, signature } = await req.body
  const { network, address, message, signed_message } = await req.body
  console.log('/api/login', { network, address, message, signed_message })

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
