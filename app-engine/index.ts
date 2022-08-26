import createVanillaStore, { StoreApi } from 'zustand/vanilla'
import create from 'zustand'
import { createSessionSlice, SessionState, SessionActions } from './store/session-slice'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { ViewActions, ViewState, createViewSlice } from './store/view-slice'
import { UserActions, UserState, createUserSlice } from './store/user-slice'
import { createWeb3AuthSlice, Web3AuthActions, Web3AuthState } from './store/web3auth-slice'
import { createAntelopeSlice, AntelopeActions, AntelopeState } from './store/antelope-slice'
import { createEngineSlice, EngineState, EngineActions } from './store/engine-slice'
import { createSolanaSlice, SolanaActions, SolanaState } from './store/solana-slice'
import { createEtherSlice, EtherActions, EtherState } from './store/ether-slice'
import { exec_env } from './library/exec-env'
import { CoinActions, CoinState, createCoinSlice } from './store/coin-slice'
import { app_logger, safeStringify } from './library/logger'

// typescript slicing: https://bit.ly/3qgvLbn
export type AppState = UserState &
  ViewState &
  Web3AuthState &
  SessionState &
  EtherState &
  AntelopeState &
  SolanaState &
  EngineState &
  CoinState
export type AppActions = UserActions &
  ViewActions &
  Web3AuthActions &
  SessionActions &
  EtherActions &
  AntelopeActions &
  SolanaActions &
  EngineActions &
  CoinActions
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
    ...createAntelopeSlice(set, get),
    ...createViewSlice(set, get),
    ...createEngineSlice(set, get),
    ...createEtherSlice(set, get),
    ...createCoinSlice(set, get),
  }),
)

// standard zustand store https://github.com/pmndrs/zustand
const useBoundAppEngine = create(app_engine)

// devtools https://github.com/beerose/simple-zustand-devtools
if (exec_env.is_browser) mountStoreDevtool('AppEngine', useBoundAppEngine as any)

// typescrpt selector hooks: https://bit.ly/3fbBHfo
export const useAppEngine = createSelectorHooks(useBoundAppEngine)
