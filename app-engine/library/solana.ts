import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'
import Decimal from 'decimal.js'

export const getSolNativeTokenBalance = async (user_address: string, provider: Connection) => {
  console.log('💫 get sol native token balance', { user_address, provider })
  const native_token_balance = new Decimal(await provider.getBalance(new PublicKey(user_address)))
  console.log(`${native_token_balance} / ${LAMPORTS_PER_SOL} SOL`)
  return native_token_balance
}
