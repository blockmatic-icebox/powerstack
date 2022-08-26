import type { StoreSlice } from '../index'
import { app_logger } from '../library/logger'
import { coingeck_client } from '../services/coingecko'
import { coingecko_key_list } from '../static/coin-list'
import { Coin } from '../types/app-engine'

export type CoinState = {
  coins: Coin[]
  coingecko_prices: any // TODO: remove this, its just for quick demo. create good structures - GAbo
}

export type CoinActions = {
  fetchPrices: () => Promise<void>
}

export type CoinSlice = CoinState & CoinActions

const defaultCoinState: CoinState = {
  coins: [],
  coingecko_prices: {},
}

export const createCoinSlice: StoreSlice<CoinSlice> = (set) => ({
  ...defaultCoinState,

  fetchPrices: async () => {
    // const response = await coingeck_client.coinList({})
    const coingecko_prices = await coingeck_client.simplePrice({
      ids: String(coingecko_key_list),
      vs_currencies: 'usd',
    })
    app_logger.log(' got coingecko prices', coingecko_prices)
    set({ coingecko_prices })
  },
})
