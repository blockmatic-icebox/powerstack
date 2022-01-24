import { StoreSlice } from '.'

export type AuthSlice = {
  other: string
}

const authSliceDefaultState = {
 other: 'value'
}

export const createAuthSlice: StoreSlice<AuthSlice> = (set, get) => ({
  ...authSliceDefaultState,
})
