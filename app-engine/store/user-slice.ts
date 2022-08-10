import type { StoreSlice } from '../index'
import type { AppUser } from '../types/app-engine'

export type UserState = {
  user: AppUser | null
}

export type UserActions = {
  setUser: (user: AppUser | null) => void
  fetchUserBalances: () => Promise<void>
}

export type User = UserState & UserActions

const defaultUserState: UserState = {
  user: null,
}

export const createUserSlice: StoreSlice<User> = (set, get) => ({
  ...defaultUserState,

  setUser: (user: AppUser | null) => {
    console.log('🤵🏻‍♂️ updating app user', JSON.stringify(user))
    set({ user })
  },

  fetchUserBalances: async () => {},
})
