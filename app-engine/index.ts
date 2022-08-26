import createVanillaStore, { StoreApi } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'
import { createSessionSlice, SessionState, SessionActions } from './store/session-slice'
import { ViewActions, ViewState, createViewSlice } from './store/view-slice'
import { UserActions, UserState, createUserSlice } from './store/user-slice'
import { createWeb3AuthSlice, Web3AuthActions, Web3AuthState } from './store/web3auth-slice'
import { createAntelopeSlice, AntelopeActions, AntelopeState } from './store/antelope-slice'
import { createEngineSlice, EngineState, EngineActions } from './store/engine-slice'
import { createSolanaSlice, SolanaActions, SolanaState } from './store/solana-slice'
import { createEtherSlice, EtherActions, EtherState } from './store/ether-slice'
import { app_args } from '../app-config/app-arguments'
import { create } from 'lodash'

// typescript slicing: https://bit.ly/3qgvLbn
export type AppState = UserState &
  ViewState &
  Web3AuthState &
  SessionState &
  EtherState &
  AntelopeState &
  SolanaState &
  EngineState
export type AppActions = UserActions &
  ViewActions &
  Web3AuthActions &
  SessionActions &
  EtherActions &
  AntelopeActions &
  SolanaActions &
  EngineActions
export type AppEngine = AppState & AppActions

// these types is used within the slices
export type StoreSetState = StoreApi<AppEngine>['setState']
export type StoreGetState = StoreApi<AppEngine>['getState']
export type StoreSlice<T> = (set: StoreSetState, get: StoreGetState) => T

//github.com/pmndrs/zustand#using-zustand-without-react
export type AppEngineStoreApi = StoreApi<AppEngine>

export const createAppEngine = (preloaded_state = {}): AppEngineStoreApi => {
  return createVanillaStore<AppEngine>(
    // @ts-ignore
    persist(
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
      }),
      {
        // Local Storage prefix
        name: app_args.app_name,
        partialize: (state) => ({
          user: state.user,
          eosio_trnx_signer: state.eosio_trnx_signer,
        }),
      },
    ),
  )
}
