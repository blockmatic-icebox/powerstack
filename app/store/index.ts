import createVanillaStore from 'zustand/vanilla'
import type { SetState, GetState } from 'zustand'
import create from 'zustand'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { isBrowser } from '~/library'
import type { UserInterfaceState } from './ui-state'
import { createUserInterfaceSlice } from './ui-state'
import type { AppSessionState } from './session-state'
import { createAppSessionSlice } from './session-state'

// typescript slicing: https://bit.ly/3qgvLbn
export type AppState = AppSessionState & UserInterfaceState
export type StoreSlice<T> = (
  set: SetState<AppState>,
  get: GetState<AppState>,
) => T

//github.com/pmndrs/zustand#using-zustand-without-react
export const store = createVanillaStore<AppState>(
  // compose all slices into AppState
  (set, get) => ({
    ...createAppSessionSlice(set, get),
    ...createUserInterfaceSlice(set, get),
  }),
)

// standard zustand store https://github.com/pmndrs/zustand
const useStoreBase = create(store)

// devtools https://github.com/beerose/simple-zustand-devtools
if (isBrowser) mountStoreDevtool('AppStore', useStoreBase as any)

// typescrpt selector hooks: https://bit.ly/3fbBHfo
export const useStore = createSelectorHooks(useStoreBase)
