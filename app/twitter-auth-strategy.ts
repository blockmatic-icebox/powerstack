import { SessionStorage } from '@remix-run/server-runtime'
import {
  AuthenticateOptions,
  Strategy,
  StrategyVerifyCallback,
} from 'remix-auth'

export interface TwitterOptions {}

export interface TwitterVerifyParams {
  token: string
}

export class TwitterStrategy<User> extends Strategy<User, TwitterVerifyParams> {
  name = 'twitter'

  constructor(
    options: TwitterOptions,
    verify: StrategyVerifyCallback<User, TwitterVerifyParams>,
  ) {
    super(verify)
  }

  async authenticate(
    request: Request,
    sessionStorage: SessionStorage,
    options: AuthenticateOptions,
  ): Promise<User> {
    let user
    try {
      const url = new URL(request.url)
      const token = url.searchParams.get('token') || ''
      user = await this.verify({ token })
    } catch (error) {
      const message = (error as Error).message
      return await this.failure(message, request, sessionStorage, options)
    }
    return this.success(user, request, sessionStorage, options)
  }
}
