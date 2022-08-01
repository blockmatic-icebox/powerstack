import type { StoreSlice } from '../index'
import { fetchJson } from '../library/fetch'

export interface AuthState {}

export interface AuthActions {
  login: () => Promise<void>
}

export type AuthSlice = AuthState & AuthActions

const defaultAuthState = {}

export const createAuthSlice: StoreSlice<AuthSlice> = (set, get) => ({
  ...defaultAuthState,
  login: async () => {
    console.log('🔑 login ')

    const body = {
      address: '0x123',
    }

    try {
      await fetchJson('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.error('An unexpected error happened:', error)
    }
  },
})
