import Decimal from 'decimal.js'
import { ethers } from 'ethers'
import { Address } from '../types/app-engine'

export const getEthNativeTokenBalance = async (
  user_address: Address,
  provider: ethers.providers.StaticJsonRpcProvider,
) => {
  console.log('💫 get eth native token balance', { user_address, provider })
  const native_token_balance = new Decimal(
    ethers.utils.formatEther(await provider.getBalance(user_address)),
  )
  return native_token_balance
}

export {}
