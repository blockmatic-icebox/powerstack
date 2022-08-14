import type { StoreSlice } from '../index'
import { fetchJson } from '../library/fetch'
import { AuthResponse } from '../services/jwt-auth-service'
import { AuthMethod } from '../types/app-engine'

export interface SessionState {}

export interface CreateSessionProps {
  address: string
  signed_message: string
  network: string
  message: string
  auth_method: AuthMethod
}

export interface SessionActions {
  createSession: (input: CreateSessionProps) => Promise<AuthResponse>
  destroySession: () => Promise<void>
}

export type SessionSlice = SessionState & SessionActions

const defaultSessionState = {}

export const createSessionSlice: StoreSlice<SessionSlice> = (set, get) => ({
  ...defaultSessionState,
  createSession: async ({
    network,
    address,
    message,
    signed_message,
    auth_method,
  }: CreateSessionProps) => {
    console.log('🍪 create cookie session', JSON.stringify({ address, signed_message }))
    const login_payload = {
      network,
      address,
      message,
      signed_message,
      auth_method,
    }
    try {
      // TODO: move to utils please and create fetch api file and fix type
      const auth_response = (await fetchJson('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login_payload),
      })) as AuthResponse
      console.log('🍪 cookie session created!')
      return auth_response
    } catch (error) {
      console.error('An unexpected error happened:', error)
      return { error: error as unknown, token: null }
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
