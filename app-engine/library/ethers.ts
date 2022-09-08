import Decimal from 'decimal.js'
import { ethers } from 'ethers'
import _ from 'lodash'
import { Address } from '../types/app-engine'
import { app_logger } from './logger'

// TODO: improve type
export const isEth = (network: string) =>
  network === 'mainnet' ||
  network === 'rinkeby' ||
  network === 'homestead' ||
  network === 'ethereum'

export const getEthNativeTokenBalance = async (
  user_address: Address,
  provider: ethers.providers.StaticJsonRpcProvider,
) => {
  if (!provider) return new Decimal(0)
  const native_token_balance = new Decimal(
    ethers.utils.formatEther(await provider.getBalance(user_address)),
  )
  app_logger.log('💫 get eth native token balance', { user_address, native_token_balance })
  return native_token_balance
}
