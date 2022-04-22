import type { StoreSlice } from '.'
import type { AppConfig } from '~/app-config'
import type { RareMintUser } from '~/auth.server'
import { defaultAppStateState } from './global-defaults'

export type GlobalSliceState = {
  show_wallet: boolean
  show_sidebar: boolean
  appconfig: AppConfig
  user: RareMintUser | null
}

export type GlobalSliceActions = {
  setShowWallet: (flag: boolean) => void
  setShowSidebar: (flag: boolean) => void
  setUser: (user: RareMintUser) => void
  setSessionData: (session_data: SessionData) => void
}

export type GlobalSlice = GlobalSliceState & GlobalSliceActions

type SessionData = { user: RareMintUser; appconfig: AppConfig }

export const createGlobalSlice: StoreSlice<GlobalSlice> = (set) => ({
  ...defaultAppStateState,

  setShowWallet: (flag) => set({ show_wallet: flag }),

  setShowSidebar: (flag) => set({ show_sidebar: flag }),

  setUser: (user: RareMintUser) => set({ user }),

  setSessionData: (session_data: SessionData) => set(session_data),
})
