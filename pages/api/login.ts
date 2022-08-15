import { ethers } from 'ethers'
import { NextApiRequest, NextApiResponse } from 'next'
import nacl from 'tweetnacl'
import { auth_service } from '~/app-engine/services/jwt-auth-service'
import { CreateSessionProps } from '~/app-engine/store/session-slice'
import { Address, AppUser } from '~/app-engine/types/app-engine'
import { withSessionRoute } from '~/app-server/session'

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
  const login_payload = (await req.body) as CreateSessionProps
  try {
    const { token, error } = await auth_service.login(login_payload)
    if (error || !token) return res.status(500).json({ message: (error as Error).message })
    console.log({ token, error })
    // TODO: WIP: continue flow @RUBENABIX
    const user: AppUser = {
      user_addresses: [],
      user_balances: [],
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
