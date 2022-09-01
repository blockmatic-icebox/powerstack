import { AppUser } from '~/app-engine/types/app-engine'
import jwt_decode from 'jwt-decode'

export const getSessionAppUser = async (jwt: string): Promise<AppUser> => {
  const decoded = jwt_decode(jwt) as any
  const user: AppUser = {
    auth_jwt: jwt,
    session_id: decoded?.user.session_id,
    username: decoded?.user.username || 'none',
    account_id: decoded?.user.account_id,
    addresses: decoded?.user.addresses,
  }
  return user
}
