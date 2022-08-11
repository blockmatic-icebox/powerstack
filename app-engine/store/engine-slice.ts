import { StoreSlice } from '..'

export type EngineState = {
  app_engine_initialized: boolean
  app_engine_init_time: Date | null
}

export const createEngineSlice: StoreSlice<EngineState> = (set, get) => ({
  app_engine_initialized: false,
  app_engine_init_time: null,
})
