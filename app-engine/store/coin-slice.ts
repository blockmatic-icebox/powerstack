import type { StoreSlice } from '../index'
import { app_logger } from '../library/logger'
import { coingeck_client } from '../services/coingecko'
import { coingecko_key_list } from '../static/coin-list'
import { Coin } from '../types/app-engine'

export type CoinState = {
  coins: Coin[]
}

export type CoinActions = {
  fetchPrices: () => Promise<void>
}

export type CoinSlice = CoinState & CoinActions

const defaultCoinState: CoinState = {
  coins: [],
}

export const createCoinSlice: StoreSlice<CoinSlice> = (set) => ({
  ...defaultCoinState,

  fetchPrices: async () => {
    // const response = await coingeck_client.coinList({})
    const response = await coingeck_client.simplePrice({
      ids: String(coingecko_key_list),
      vs_currencies: 'usd',
    })
    app_logger.log(' got coingecko prices', response)
  },
})
