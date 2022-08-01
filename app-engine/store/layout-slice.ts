import type { StoreSlice } from '../index'

export type LayoutState = {
  show_wallet: boolean
  show_sidebar: boolean
}

export type LayoutActions = {
  setShowWallet: (value: boolean) => void
  setShowSidebar: (value: boolean) => void
}

export type LayoutSlice = LayoutState & LayoutActions

const defaultUserInterfaceState = {
  show_wallet: false,
  show_sidebar: false,
}

export const createLayoutSlice: StoreSlice<LayoutSlice> = (set) => ({
  ...defaultUserInterfaceState,

  setShowWallet: (value) => set({ show_wallet: value }),

  setShowSidebar: (value) => set({ show_sidebar: value }),
})
