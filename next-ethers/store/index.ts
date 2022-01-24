import create, { SetState, GetState, StoreApi } from 'zustand'
import { persist } from 'zustand/middleware'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'
import { mountStoreDevtool } from 'simple-zustand-devtools'

import { createAccountSlice, AccountSlice } from './account-slice'
import { createAuthSlice, AuthSlice } from './other-slice'

// typescript slicing: https://bit.ly/3qgvLbn
export type AppState = AccountSlice & AuthSlice
export type StoreSlice<T> = (set: SetState<AppState>, get: GetState<AppState>) => T

// standard zustand store https://github.com/pmndrs/zustand
const useStoreBase = create<AppState>(
  // persist middleware:  https://bit.ly/33nrQkj
  persist(
    // compose all slices into AppState
    (set, get) => ({
      ...createAccountSlice(set, get),
      ...createAuthSlice(set, get),
    }),
    {
      // localstorage prefix
      name: 'dapp',
      // whitelist state to be stored in localstarage
      partialize: (state) => ({}),
    },
  ),
)

// devtools https://github.com/beerose/simple-zustand-devtools
mountStoreDevtool('100xStore', useStoreBase as any)

// typescrpt selector hooks: https://bit.ly/3fbBHfo
export const useStore = createSelectorHooks(useStoreBase)
