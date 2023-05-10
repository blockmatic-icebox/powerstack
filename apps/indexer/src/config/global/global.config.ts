import * as env from 'env-var'

export interface Config {
  hostname: string
  port: number
}

export const config: Config = {
  hostname: env.get('HOSTNAME').asString() || '0.0.0.0',
  port: env.get('PORT').asIntPositive() || 3000,
}
