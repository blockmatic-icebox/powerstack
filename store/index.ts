import createVanillaStore, { StoreApi } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'
import create from 'zustand'
import { createAuthSlice, AuthSlice } from './auth-slice'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { isBrowser } from 'library'
import { LayoutActions, LayoutState, createLayoutSlice } from './layout-slice'
import { UserActions, UserState, createUserSlice } from './user-slice'
import { createZustandSlice, ZustandStore } from './zustand-state'

// typescript slicing: https://bit.ly/3qgvLbn
export type AppState = ZustandStore & UserState & LayoutState
export type AppStateActions = UserActions & LayoutActions
export type AppStore = AppState & AppStateActions & AuthSlice

// these types is used within the slices
export type StoreSetState = StoreApi<AppStore>['setState']
export type StoreGetState = StoreApi<AppStore>['getState']
export type StoreSlice<T> = (set: StoreSetState, get: StoreGetState) => T

//github.com/pmndrs/zustand#using-zustand-without-react
export const zustand_store = createVanillaStore<AppStore>(
  // compose all slices into AppState
  (set, get) => ({
    ...createZustandSlice(set, get),
    ...createAuthSlice(set, get),
    ...createUserSlice(set, get),
    ...createLayoutSlice(set, get),
  }),
)

// standard zustand store https://github.com/pmndrs/zustand
const useStoreBase = create(zustand_store)

// devtools https://github.com/beerose/simple-zustand-devtools
if (isBrowser) mountStoreDevtool('AppStore', useStoreBase as any)

// typescrpt selector hooks: https://bit.ly/3fbBHfo
export const useStore = createSelectorHooks(useStoreBase)
