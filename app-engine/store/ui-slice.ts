import type { StoreSlice } from '../index'

export type AppMessageType = 'alert' | 'warn' | 'info'
export type UIState = {
  show_wallet: boolean
  show_sidebar: boolean
  app_message: string
  app_message_type: AppMessageType
}

export type UIActions = {
  setShowWallet: (value: boolean) => void
  setShowSidebar: (value: boolean) => void
}

export type UISlice = UIState & UIActions

const defaultUserInterfaceState = {
  show_wallet: false,
  show_sidebar: false,
  app_message: '',
  app_message_type: 'info' as AppMessageType,
}

export const createUISlice: StoreSlice<UISlice> = (set) => ({
  ...defaultUserInterfaceState,

  setShowWallet: (value) => set({ show_wallet: value }),

  setShowSidebar: (value) => set({ show_sidebar: value }),

  setAppMessage: (app_message: string, app_message_type: AppMessageType = 'info') =>
    set({ app_message, app_message_type }),
})
