import type { StoreSlice } from '../index'
import { fetchJson } from '../library/fetch'
import { AppUserAddress } from '../types/app-engine'

export interface SessionState {}

export interface SessionActions {
  createSession: (address: AppUserAddress, signed_message: string) => Promise<{}>
  destroySession: () => Promise<void>
}

export type SessionSlice = SessionState & SessionActions

const defaultSessionState = {}

export const createSessionSlice: StoreSlice<SessionSlice> = (set, get) => ({
  ...defaultSessionState,
  createSession: async (address: AppUserAddress, signed_message: string) => {
    console.log('🍪 create cookie session', JSON.stringify({ address, signed_message }))

    try {
      await fetchJson('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, signed_message }),
      })

      console.log('🍪 cookie session created!')
      // TODO: read jwt from the cookie and return it
      const jwt = {}
      return jwt
    } catch (error) {
      console.error('An unexpected error happened:', error)
      return {}
    }
  },

  destroySession: async () => {
    console.log('🍪 destroy cookie session')
    try {
      await fetchJson('/api/logout', {
        method: 'POST',
      })
      console.log('🍪 cookie session destroyed!')
      get().setUser(null)
    } catch (error) {
      console.error('An unexpected error happened:', error)
    }
  },
})
