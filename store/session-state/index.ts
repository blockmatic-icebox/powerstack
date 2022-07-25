import type { StoreSlice } from '..'
import type { AppConfig } from 'environment/app-config'
import { defaultAppSessionState } from './default-session-state'
import type { AppSessionData, AppUser } from 'types'
import type { ApolloClient } from '@apollo/client'

export type AppSessionState = {
  appconfig: AppConfig
  user: AppUser | null
  session_error: string | null
}

export type AppSessionActions = {
  setUser: (user: AppUser) => void
  setSessionData: (session_data: AppSessionData) => void
}

export type AppSession = AppSessionState & AppSessionActions

// apollo stuff
let apollo_client: ApolloClient<any> | null = null

export const createAppSessionSlice: StoreSlice<AppSession> = (set, get) => ({
  ...defaultAppSessionState,

  setUser: (user: AppUser) => set({ user }),

  setSessionData: (session_data: AppSessionData) => set(session_data),
})
