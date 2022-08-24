import { AppGraphQL, createApolloClient, getGraphQLSdk } from '../graphql'
import type { StoreSlice } from '../index'
import { getEthNativeTokenBalance, isEth } from '../library/ethers'
import { app_logger } from '../library/logger'
import { getSolNativeTokenBalance, isSol } from '../library/solana'
import type { AppUser } from '../types/app-engine'

export type UserState = {
  user: AppUser | null
}

export type UserActions = {
  setUser: (user: AppUser | null) => void
  fetchUserBalances: () => Promise<void>
  createUsername: (username: string) => Promise<void>
}

export type User = UserState & UserActions

const defaultUserState: UserState = {
  user: null,
}

export const createUserSlice: StoreSlice<User> = (set, get) => ({
  ...defaultUserState,

  setUser: (user: AppUser | null) => {
    app_logger.log('🤵🏻‍♂️ updating app user', JSON.stringify(user))
    set({ user })
  },
  fetchUserBalances: async () => {
    const user = get().user
    if (user) {
      const user_addresses = await Promise.all(
        user?.user_addresses?.map(async (user_address) => {
          if (isEth(user_address.network)) {
            const ethereum_static_provider = get().ethereum_static_provider
            if (!ethereum_static_provider) return user_address
            const balance = await getEthNativeTokenBalance(
              user_address.address,
              ethereum_static_provider,
            )
            const unit_balance = balance.toString()
            return { ...user_address, balance, unit_balance }
          }
          if (isSol(user_address.network)) {
            const solana_static_provider = get().solana_static_provider
            if (!solana_static_provider) return user_address
            const balance = await getSolNativeTokenBalance(
              user_address.address,
              solana_static_provider,
            )
            const unit_balance = balance.toString()
            return { ...user_address, balance, unit_balance }
          }
          return user_address
        }) || [],
      )
      user.user_addresses = user_addresses
      get().setUser(user)
    }
  },

  createUsername: async (username: string) => {
    const { user } = get()
    if (!user) return
    const result = await getGraphQLSdk(user.jwt).CreateUsername({ username })
    app_logger.log('create account result', result)
  },
})
