import { app_logger } from '../library/logger'
import { CoinGeckoClient } from 'coingecko-api-v3'

const coingeck_client = new CoinGeckoClient({
  timeout: 10000,
  autoRetry: true,
})

const coins = [
  'bitcoin',
  'ethereum',
  'grin',
  'mina-protocol',
  'solana',
  'polkadot',
  'binancecoin',
  'avalanche-2',
  'binance-usd',
  'basic-attention-token',
  'immutable-x',
  'flow',
  'eos',
  'aave',
  'snx',
]

export const coingecko = {
  simplePrice: async () => {
    const response = await coingeck_client.simplePrice({ ids: String(coins), vs_currencies: 'usd' })
    app_logger.log('got coingecko prices', response)
    return response
  },
}
