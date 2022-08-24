import { AppUser } from '~/app-engine/types/app-engine'

export const getSessionAppUser = async (jwt: string): Promise<AppUser> => {
  // TODO: get this data from the jwt token coming from the auth server
  const user: AppUser = {
    user_addresses: [
      {
        network: 'solana',
        address: 'HRXVUmyowUDPku6M8UsoY62NzZUknvJkUCgAq8s6Rdqs',
        ticker: 'solana',
        balance: '0',
        unit_balance: '0',
      },
    ],
    jwt,
    auth_method: 'web3_solana',
  }
  return user
}
