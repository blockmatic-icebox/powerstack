import { StoreSlice } from '..'

export type ZustandState = {
  zustand_initialized: boolean
  zustand_init_time: Date | null
}

export const createZustandSlice: StoreSlice<ZustandState> = (set, get) => ({
  zustand_initialized: false,
  zustand_init_time: null,
})
