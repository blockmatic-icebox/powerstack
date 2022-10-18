import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'
import Decimal from 'decimal.js'
import _ from 'lodash'
import { app_logger } from './logger'

// TODO: improve type
export const isSol = (network: string) => network === 'solana'

export const getSolNativeTokenBalance = async (user_address: string, provider: Connection) => {
  app_logger.log('💫 get sol native token balance')
  if (!provider) return new Decimal(0)
  const native_token_balance = new Decimal(await provider.getBalance(new PublicKey(user_address)))
  app_logger.log({ user_address }, `${native_token_balance} / ${LAMPORTS_PER_SOL} SOL`)
  return native_token_balance
}

export const getPhantomProvider = () => {
  if ('phantom' in window) {
    const provider = window.phantom?.solana

    if (provider?.isPhantom) {
      return provider
    }
  }
  alert('Please install phantom')
  window.open('https://phantom.app/', '_blank')
}
