import Decimal from 'decimal.js'
import { ethers } from 'ethers'
import { Address } from '../types/app-engine'

// TODO: improve type
export const isEth = (network: string) => network === 'mainnet' || network === 'rinkeby'

export const getEthNativeTokenBalance = async (
  user_address: Address,
  provider: ethers.providers.StaticJsonRpcProvider,
) => {
  const native_token_balance = new Decimal(
    ethers.utils.formatEther(await provider.getBalance(user_address)),
  )
  console.log('💫 get eth native token balance', { user_address, native_token_balance })
  return native_token_balance
}
