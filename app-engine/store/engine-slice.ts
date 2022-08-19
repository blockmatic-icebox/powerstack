import { StoreSlice } from '..'
import { app_logger } from '../library/logger'

export interface EngineState {
  app_engine_initialized: boolean
  app_engine_init_time: Date | null
}

export interface EngineActions {
  initializeAppEngine: () => void
}

export type EngineSlice = EngineState & EngineActions

export const createEngineSlice: StoreSlice<EngineSlice> = (set, get) => ({
  app_engine_initialized: false,
  app_engine_init_time: null,
  initializeAppEngine: () => {
    const { app_engine_initialized, web3authInit } = get()

    if (!app_engine_initialized) {
      app_logger.log('🗂 initializing app_engine state ...')
      web3authInit()
      set({
        app_engine_initialized: true,
        app_engine_init_time: new Date(),
      })
      get().initEthers()
      get().initSolana()
      app_logger.log('🗂 initialized app_engine state')
    }
  },
})
