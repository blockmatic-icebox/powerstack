import type { StoreSlice } from '.'

export type UserInterfaceState = {
  show_wallet: boolean
  show_sidebar: boolean
}

export type UserInterfaceActions = {
  setShowWallet: (value: boolean) => void
  setShowSidebar: (value: boolean) => void
}

export type UserInterface = UserInterfaceState & UserInterfaceActions

const defaultUserInterfaceState = {
  show_wallet: false,
  show_sidebar: false,
}

export const createUserInterfaceSlice: StoreSlice<UserInterface> = (set) => ({
  ...defaultUserInterfaceState,

  setShowWallet: (value) => set({ show_wallet: value }),

  setShowSidebar: (value) => set({ show_sidebar: value }),
})
