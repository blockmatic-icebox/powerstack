import createVanillaStore, { StoreApi } from 'zustand/vanilla'
import create, { useStore } from 'zustand'
import { createSessionSlice, SessionState, SessionActions } from './session-slice'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { ViewActions, ViewState, createViewSlice } from './view-slice'
import { UserActions, UserState, createUserSlice } from './user-slice'
import { createWeb3AuthSlice, Web3AuthActions, Web3AuthState } from './web3auth-slice'
import { createAntelopeSlice, AntelopeActions, AntelopeState } from './antelope-slice'
import { createEngineSlice, EngineState, EngineActions } from './engine-slice'
import { createSolanaSlice, SolanaActions, SolanaState } from './solana-slice'
import { createEtherSlice, EtherActions, EtherState } from './ether-slice'
import { CoinActions, CoinState, createCoinSlice } from './coin-slice'
import { createContext, useContext } from 'react'
import { app_logger } from '../_legacy/library/logger.lib'
import _ from 'lodash'
import { exec_env } from '../_legacy/library/exec-env.lib'

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

// global app_engine instance
export type AppEngineApi = StoreApi<AppEngine>

// singleton in the browser. on the server you always get a new store.
export const createVanillaEngine = () => {
  if (exec_env.is_browser && window.app_engine) return window.app_engine
  app_logger.log(`📡 creating app_engine ...`)
  const app_engine = createVanillaStore<AppEngine>((set, get) => ({
    ...createWeb3AuthSlice(set, get),
    ...createSessionSlice(set, get),
    ...createUserSlice(set, get),
    ...createSolanaSlice(set, get),
    ...createAntelopeSlice(set, get),
    ...createViewSlice(set, get),
    ...createEngineSlice(set, get),
    ...createEtherSlice(set, get),
    ...createCoinSlice(set, get),
  })) as AppEngineApi
  if (exec_env.is_browser) window.app_engine = app_engine
  return app_engine
}

// Expose the app-engine functionality to react apps
export const useCreateAppEngine = () => create(createVanillaEngine())
const AppEngineContext = createContext<AppEngineApi>(create(createVanillaEngine()))
export const useAppEngine = () => useStore(useContext(AppEngineContext))
export const AppEngineProvider: React.FC<{
  children: React.ReactNode
  app_engine_server_state?: AppState
}> = ({ children, app_engine_server_state }) => {
  const app_engine = createVanillaEngine()
  // hydrate the app_engine with server side props
  if (app_engine_server_state)
    app_engine.setState(_.omit(app_engine_server_state, 'app_engine_initialized'))
  // initialize web3 providers on the browser
  if (exec_env.is_browser) {
    const { app_engine_initialized, initializeAppEngine } = app_engine.getState()
    if (!app_engine_initialized) initializeAppEngine()
  }
  return <AppEngineContext.Provider value={app_engine}>{children}</AppEngineContext.Provider>
}

// TODO: restore devtools
// devtools https://github.com/beerose/simple-zustand-devtools
//  if (exec_env.is_browser) mountStoreDevtool('AppEngine', useBoundAppEngine as any)
