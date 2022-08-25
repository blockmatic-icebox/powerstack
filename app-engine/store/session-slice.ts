import type { StoreSlice } from '../index'
import { AuthErrorResponse } from '../../app-server/session-auth'
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

      console.log('🙎🏻‍♂️ login server response', data)
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
      // restore this but user user.connected_wallet instead. - Gabo
      // if (user.auth_method === 'web3_auth') get().web3authLogout()
      get().setUser(null)
      console.error('🙎🏻‍♂️ user succesfully logged out')
    } catch (error) {
      console.error('🙎🏻‍♂️ an unexpected error happened:', error)
    }
  },
})
