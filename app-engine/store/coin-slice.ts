import type { StoreSlice } from '../index'
import { app_logger } from '../library/logger'
import { coingecko_client } from '../services/coingecko'
import { coin_list } from '../static/coin-list'
import { Coin } from '../types/app-engine'

export type CoinState = {
  coins: Coin[]
}

export type CoinActions = {
  fetchPrices: () => Promise<void>
}

export type CoinSlice = CoinState & CoinActions

const defaultCoinState: CoinState = {
  coins: coin_list,
}

export const createCoinSlice: StoreSlice<CoinSlice> = (set, get) => ({
  ...defaultCoinState,

  fetchPrices: async () => {
    const coingecko_prices = await coingecko_client.simplePrice({
      ids: String(coin_list.map((coin) => coin.coingecko_key)),
      vs_currencies: 'usd',
    })

    const coingecko_price_change_stats = await coingecko_client.coinMarket({
      ids: String(coin_list.map((coin) => coin.coingecko_key)),
      vs_currency: 'usd',
      price_change_percentage: '1h',
    })
    const coins_with_usd_price = get().coins.map(
      (coin) =>
        ({
          ...coin,
          usd_price:
            coingecko_prices[coin.coingecko_key]?.usd.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            }) || '$0',

        price_change_1h:
        coingecko_price_change_stats[coin.coingecko_key]?.usd.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            }) || '$0',
        } as Coin),
    )
    // app_logger.log('coins_with_usd_price', coins_with_usd_price)
    set({ coins: coins_with_usd_price })
  },
})