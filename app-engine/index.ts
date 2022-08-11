import createVanillaStore, { StoreApi } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'
import create from 'zustand'
import { createSessionSlice, SessionState, SessionActions } from './store/session-slice'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { isBrowser } from './library'
import { UIActions, UIState, createUISlice } from './store/ui-slice'
import { UserActions, UserState, createUserSlice } from './store/user-slice'
import { createWeb3AuthSlice, Web3AuthActions, Web3AuthState } from './store/web3auth-slice'
import { createEosioSlice, EosioActions, EosioState } from './store/eosio-slice'
import { createEngineSlice, EngineState } from './store/engine-slice'
import { createSolanaSlice, SolanaActions, SolanaState } from './store/solana-slice'
import { createEtherSlice, EtherActions, EtherState } from './store/ether-slice'

// typescript slicing: https://bit.ly/3qgvLbn
export type AppState = UserState &
  UIState &
  Web3AuthState &
  SessionState &
  EtherState &
  EosioState &
  SolanaState &
  EngineState
export type AppActions = UserActions &
  UIActions &
  Web3AuthActions &
  SessionActions &
  EtherActions &
  EosioActions &
  SolanaActions
export type AppEngine = AppState & AppActions

// these types is used within the slices
export type StoreSetState = StoreApi<AppEngine>['setState']
export type StoreGetState = StoreApi<AppEngine>['getState']
export type StoreSlice<T> = (set: StoreSetState, get: StoreGetState) => T

//github.com/pmndrs/zustand#using-zustand-without-react
export const app_engine = createVanillaStore<AppEngine>(
  // compose all slices into AppState
  (set, get) => ({
    ...createWeb3AuthSlice(set, get),
    ...createSessionSlice(set, get),
    ...createUserSlice(set, get),
    ...createSolanaSlice(set, get),
    ...createEosioSlice(set, get),
    ...createUISlice(set, get),
    ...createEngineSlice(set, get),
    ...createEtherSlice(set, get),
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
