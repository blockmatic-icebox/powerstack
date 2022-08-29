import { getGraphQLSdk } from '../graphql'
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
    app_logger.log('🤵🏻‍♂️ gettting account balances')
  },

  createUsername: async (username: string) => {
    const { user } = get()
    if (!user) return
    const result = await getGraphQLSdk(user.auth_jwt).CreateUsername({ username })
    app_logger.log('create account result', result)
  },
})
