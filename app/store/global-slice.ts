import type { StoreSlice } from '.'
import type { AppConfig } from '~/app-config'
import { defaultAppStateState } from './global-defaults'
import type { User } from '~/types'

export type GlobalSliceState = {
  show_wallet: boolean
  show_sidebar: boolean
  appconfig: AppConfig
  user: User | null
}

export type GlobalSliceActions = {
  setShowWallet: (flag: boolean) => void
  setShowSidebar: (flag: boolean) => void
  setUser: (user: User) => void
  setSessionData: (session_data: SessionData) => void
}

export type GlobalSlice = GlobalSliceState & GlobalSliceActions

type SessionData = { user: User; appconfig: AppConfig }

export const createGlobalSlice: StoreSlice<GlobalSlice> = (set) => ({
  ...defaultAppStateState,

  setShowWallet: (flag) => set({ show_wallet: flag }),

  setShowSidebar: (flag) => set({ show_sidebar: flag }),

  setUser: (user: User) => set({ user }),

  setSessionData: (session_data: SessionData) => set(session_data),
})
