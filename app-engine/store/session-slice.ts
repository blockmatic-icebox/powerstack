import type { StoreSlice } from '../index'
import { fetchJson } from '../library/fetch'
import { AuthErrorResponse, AuthResponse } from '../../app-server/jwt-auth'
import { AppLoginMethod } from '../types/app-engine'
import { app_logger } from '../library/logger'
import { auth_server } from '../services/auth-server'

export interface SessionState {
  create_session_error: string
}

export interface CreateSessionParams {
  address: string
  signed_message: string
  network: string
  message: string
  auth_method: AppLoginMethod
}

export interface SessionActions {
  createSession: (input: CreateSessionParams) => Promise<void>
  destroySession: () => Promise<void>
}

export type SessionSlice = SessionState & SessionActions

const defaultSessionState = {
  create_session_error: '',
}

export const createSessionSlice: StoreSlice<SessionSlice> = (set, get) => ({
  ...defaultSessionState,
  createSession: async (create_session_params: CreateSessionParams) => {
    app_logger.log('🙎🏻‍♂️ create cookie session')
    try {
      const data = await auth_server.login(create_session_params)
      get().setUser(data)

      set({ create_session_error: '' })
    } catch (error) {
      console.error('🙎🏻‍♂️ an unexpected error happened while trying create session:', error)

      set({ create_session_error: (error as AuthErrorResponse).message })
    }
  },

  destroySession: async () => {
    try {
      console.error('🙎🏻‍♂️ logging user out')
      const user = get().user
      await auth_server.logout()
      if (!user) return
      if (user.auth_method === 'web3_auth') get().web3authLogout()
      get().setUser(null)
      console.error('🙎🏻‍♂️ user succesfully logged out')
    } catch (error) {
      console.error('🙎🏻‍♂️ an unexpected error happened:', error)
    }
  },
})
