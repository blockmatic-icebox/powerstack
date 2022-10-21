import { CoinGeckoClient } from 'coingecko-api-v3'

export const coingecko_client = new CoinGeckoClient({
  timeout: 10000,
  autoRetry: true,
})
