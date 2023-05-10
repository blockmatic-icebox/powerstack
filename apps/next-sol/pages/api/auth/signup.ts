import { NextApiRequest, NextApiResponse } from 'next'

import { sendWelcomeEmail } from '~/services/mail'
import { signUp } from '~/services/signup'
import { AuthUser } from '~/types/auth/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // // console.log('req.body', req.body)
  // TODO: validations

  // save data in db
  const { result } = await signUp(JSON.parse(req.body))
  // send email
  const user: AuthUser = {
    id: result.insertAccountOne?.id.toString() || '',
    image: result.insertAccountOne?.image || '',
    name:
      result.insertAccountOne?.name.substring(0, result.insertAccountOne.name.indexOf(' ')) || '',
    fullname: result.insertAccountOne?.name || '',
    wallet: result.insertAccountOne?.wallet || '',
    username: result.insertAccountOne?.username || '',
    email: result.insertAccountOne?.email || '',
  }

  // // console.log('📧 sending email to this user', user)
  await sendWelcomeEmail(user)
  // mark email as sent
  // // console.log('📧 email sent')
  return res.status(200).json({ user })
}
