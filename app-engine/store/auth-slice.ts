import type { StoreSlice } from '../index'

export interface AuthState {}

export interface AuthActions {}

export type AuthSlice = AuthState & AuthActions

const defaultAuthState = {}

export const createAuthSlice: StoreSlice<AuthSlice> = (set, get) => ({
  ...defaultAuthState,
  login: () => {
    console.log('🔑 login ')
  },
})
