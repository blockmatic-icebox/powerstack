import type { StoreSlice } from '../index'
import type { AppUser } from '../types/app-engine'

export type UserState = {
  user: AppUser | null
}

export type UserActions = {
  setUser: (user: AppUser) => void
}

export type User = UserState & UserActions

const defaultUserSliceState: UserState = {
  user: null,
}

export const createUserSlice: StoreSlice<User> = (set, get) => ({
  ...defaultUserSliceState,

  setUser: (user: AppUser) => set({ user }),
})
