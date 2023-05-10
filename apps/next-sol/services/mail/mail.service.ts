import { serverEnv } from '~/config/server'
import type { AuthUser } from '~/types/auth/auth.d.ts'

const SibApiV3Sdk = require('sib-api-v3-sdk')

const defaultClient = SibApiV3Sdk.ApiClient.instance

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = serverEnv.sendInBlueApiKey

export const sendEmail = (sendSmtpEmail: any) => {
  const sendInBlueApi = new SibApiV3Sdk.TransactionalEmailsApi()
  sendInBlueApi.sendTransacEmail(sendSmtpEmail).then(
    function (data: any) {
      // console.log('📧 email sent', data)
      return true
    },
    function (error: any) {
      console.error('📧 email error', error)
      return false
    },
  )
}

export const sendWelcomeEmail = (user: AuthUser) => {
  // console.log('sendWelcomeEmail', user)
  sendEmail({
    to: [
      {
        email: user.email,
      },
    ],
    templateId: 1,
    params: {
      name: user.name,
      subject: `Bienvenido a GWT ${user.name}!`,
      url: `${serverEnv.nextAuthUrl}/wallet?code=${user.id}`,
    },
  })
}
