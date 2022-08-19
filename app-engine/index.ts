import createVanillaStore, { StoreApi } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'
import create from 'zustand'
import { createSessionSlice, SessionState, SessionActions } from './store/session-slice'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { ViewActions, ViewState, createViewSlice } from './store/view-slice'
import { UserActions, UserState, createUserSlice } from './store/user-slice'
import { createWeb3AuthSlice, Web3AuthActions, Web3AuthState } from './store/web3auth-slice'
import { createAntilopeSlice, AntilopeActions, AntilopeState } from './store/antilope-slice'
import { createEngineSlice, EngineState, EngineActions } from './store/engine-slice'
import { createSolanaSlice, SolanaActions, SolanaState } from './store/solana-slice'
import { createEtherSlice, EtherActions, EtherState } from './store/ether-slice'
import { createGraphQLSlice, GraphQLActions, GraphQLState } from './store/graphql-slice'
import { exec_env } from './library/exec-env'

// typescript slicing: https://bit.ly/3qgvLbn
export type AppState = UserState &
  ViewState &
  Web3AuthState &
  SessionState &
  EtherState &
  AntilopeState &
  SolanaState &
  EngineState &
  GraphQLState
export type AppActions = UserActions &
  ViewActions &
  Web3AuthActions &
  SessionActions &
  EtherActions &
  AntilopeActions &
  SolanaActions &
  EngineActions &
  GraphQLActions
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
    ...createAntilopeSlice(set, get),
    ...createViewSlice(set, get),
    ...createEngineSlice(set, get),
    ...createEtherSlice(set, get),
    ...createGraphQLSlice(set, get),
  }),
)

// standard zustand store https://github.com/pmndrs/zustand
const useAppEngineBare = create(app_engine)

// devtools https://github.com/beerose/simple-zustand-devtools
if (exec_env.is_browser) mountStoreDevtool('AppEngine', useAppEngineBare as any)

// typescrpt selector hooks: https://bit.ly/3fbBHfo
export const useAppEngine = createSelectorHooks(useAppEngineBare)
