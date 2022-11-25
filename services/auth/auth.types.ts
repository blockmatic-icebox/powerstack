export type LoginMethod = 'web2_twitter' | 'web3_solana' | 'web2_userpassword'

export type AuthResponse = {
  data: {} | null
  error?: Error
}
export type LoginResponse = {
  token: string
  error?: Error
}

export interface CreateSessionParams {
  address?: string
  signed_message?: string
  network?: string
  message?: string
  auth_method: LoginMethod
  username?: string
  password?: string
  eos_pub_key?: string
  token?: string
}

declare module 'iron-session' {
  interface IronSessionData {
    user?: {}
  }
}
