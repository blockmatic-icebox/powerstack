import { StoreSlice } from '.'

export type AccountSlice = {
  account: string
  resetAccount: () => void
}

const defaultAccountSlideState = {
  account: '',
}


export const createAccountSlice: StoreSlice<AccountSlice> = (set, get) => ({
  ...defaultAccountSlideState,

  // sets an account in state along with its devices and preferences
  setAccount: async (account: string) => {
    console.log('AccountSlice::setAccount', { account })
   
    // update state
    set(() => ({ account }))
  },

  // resets account data to default empty state
  resetAccount: () => {
    set(() => defaultAccountSlideState)
  },
})
