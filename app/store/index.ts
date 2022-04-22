import createVanillaStore from 'zustand/vanilla'
import create, { SetState, GetState } from 'zustand'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { isBrowser } from '~/library'
import { createGlobalSlice, GlobalSlice } from './global-slice'

// typescript slicing: https://bit.ly/3qgvLbn
export type AppState = GlobalSlice
export type StoreSlice<T> = (set: SetState<AppState>, get: GetState<AppState>) => T

//github.com/pmndrs/zustand#using-zustand-without-react
export const store = createVanillaStore<AppState>(
  // compose all slices into AppState
  (set, get) => ({
    ...createGlobalSlice(set, get),
  }),
)

// standard zustand store https://github.com/pmndrs/zustand
const useStoreBase = create(store)

// devtools https://github.com/beerose/simple-zustand-devtools
if (isBrowser) mountStoreDevtool('RareMintStore', useStoreBase as any)

// typescrpt selector hooks: https://bit.ly/3fbBHfo
export const useStore = createSelectorHooks(useStoreBase)
