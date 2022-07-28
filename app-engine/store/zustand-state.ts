import type { StoreSlice } from '.'

export type ZustandStore = {
  zustand_initialized: boolean
  zustand_init_time: Date | null
}

export const createZustandSlice: StoreSlice<ZustandStore> = (set, get) => ({
  zustand_initialized: false,
  zustand_init_time: null,
})
