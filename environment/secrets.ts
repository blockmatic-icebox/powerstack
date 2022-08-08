import * as env from 'env-var'

export interface AppSecrets {
  iron_session_password: string
}

export const appsecrets: AppSecrets = {
  iron_session_password:
    env.get('IRON_SESSION_PASSWORD').asString() || '74e1926a5f332cb1c4ad028dbc4fe13f2c49efef',
}
