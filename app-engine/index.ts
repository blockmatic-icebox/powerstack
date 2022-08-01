import createVanillaStore, { StoreApi } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'
import create from 'zustand'
import { createAuthSlice, AuthState } from './store/auth-slice'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { isBrowser } from './library'
import { LayoutActions, LayoutState, createLayoutSlice } from './store/layout-slice'
import { UserActions, UserState, createUserSlice } from './store/user-slice'
import { createConfigSlice, ConfigState } from './store/config-slice'
import { createWeb3AuthSlice, Web3AuthActions, Web3AuthState } from './store/web3auth-slice'

// typescript slicing: https://bit.ly/3qgvLbn
export type AppState = ConfigState & UserState & LayoutState & Web3AuthState & AuthState
export type AppActions = UserActions & LayoutActions & Web3AuthActions
export type AppEngine = AppState & AppActions

// these types is used within the slices
export type StoreSetState = StoreApi<AppEngine>['setState']
export type StoreGetState = StoreApi<AppEngine>['getState']
export type StoreSlice<T> = (set: StoreSetState, get: StoreGetState) => T

//github.com/pmndrs/zustand#using-zustand-without-react
export const app_engine = createVanillaStore<AppEngine>(
  // compose all slices into AppState
  (set, get) => ({
    ...createConfigSlice(set, get),
    ...createWeb3AuthSlice(set, get),
    ...createAuthSlice(set, get),
    ...createUserSlice(set, get),
    ...createLayoutSlice(set, get),
  }),
)

// NOTE: we are only using zustand on the client side for sharing state between components and ease optimistic ui updates.
//       we are not doing any hydration of the store from the server as in here. https://bit.ly/3uSGsm .
//       hydration its not necessary at the moment.

// Intialize App Engine State, you must import '~/app-engine'
if (isBrowser && !app_engine.getState().app_engine_initialized) {
  app_engine.setState({
    app_engine_initialized: true,
    app_engine_init_time: new Date(),
  })
  console.log('🗂 initialized zustand state')
  // initialize web3auth on first page load
  // useAppEngine.getState().web3authInit()
}

// standard zustand store https://github.com/pmndrs/zustand
const useAppEngineBare = create(app_engine)

// devtools https://github.com/beerose/simple-zustand-devtools
if (isBrowser) mountStoreDevtool('AppEngine', useAppEngineBare as any)

// typescrpt selector hooks: https://bit.ly/3fbBHfo
export const useAppEngine = createSelectorHooks(useAppEngineBare)
