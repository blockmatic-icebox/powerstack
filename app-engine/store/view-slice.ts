import type { StoreSlice } from '../index'

export type AppMessageType = 'alert' | 'warn' | 'info'
export type ViewState = {
  show_wallet: boolean
  show_sidebar: boolean
  app_message: string
  app_message_type: AppMessageType
  show_login_modal: boolean
}

export type ViewActions = {
  setShowWallet: (value: boolean) => void
  setShowSidebar: (value: boolean) => void
  setShowLoginModal: (value: boolean) => void
}

export type ViewSlice = ViewState & ViewActions

const defaultUserInterfaceState = {
  show_wallet: false,
  show_sidebar: false,
  app_message: '',
  app_message_type: 'info' as AppMessageType,
  show_login_modal: false,
}

export const createViewSlice: StoreSlice<ViewSlice> = (set) => ({
  ...defaultUserInterfaceState,

  setShowWallet: (value) => set({ show_wallet: value }),

  setShowSidebar: (value) => set({ show_sidebar: value }),

  setAppMessage: (app_message: string, app_message_type: AppMessageType = 'info') =>
    set({ app_message, app_message_type }),

  setShowLoginModal: (value) => set({ show_login_modal: value }),
})
