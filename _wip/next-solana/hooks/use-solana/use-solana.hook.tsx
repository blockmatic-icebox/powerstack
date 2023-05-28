import { useAsyncFn, useEffectOnce } from 'react-use'

import { useAuth } from '~/hooks/use-auth'
import {
  getSolBalance,
  getUsdcBalance,
  transferPhantomTransaction,
  transferUsdcPhantomTransaction,
} from '~/services/solana'

export function useSolana() {
  const { session } = useAuth()
  const userAddress = session?.user.wallet
  const gwtSolanaAddress = '4gtmgsfxKfh9PFQGpGMpgRBbGEJJ1TLHYWYfW4yWi7Yt'

  const [userSolBalance, getUserSolBalance] = useAsyncFn(async () => {
    if (!userAddress) return
    try {
      const balance = await getSolBalance(userAddress)
      return balance
    } catch (err) {
      console.error(err)
    }
  })

  const [userUsdcBalance, getUserUsdcBalance] = useAsyncFn(async () => {
    if (!userAddress) return
    try {
      const balance = await getUsdcBalance(userAddress)
      return balance
    } catch (err) {
      console.error(err)
    }
  })

  const transferSol = async (amount: number) => {
    if (!userAddress) return
    try {
      const transactionHash = await transferPhantomTransaction({
        fromPubkey: userAddress,
        toPubkey: gwtSolanaAddress,
        amount,
      })
      console.log('SOL TRANSACTION ID(HASH)', transactionHash)
      return transactionHash
    } catch (err) {
      console.error(err)
    }
  }

  const transferUsdc = async (amount: number) => {
    if (!userAddress) return
    try {
      const transactionHash = await transferUsdcPhantomTransaction({
        fromPubkey: userAddress,
        toPubkey: gwtSolanaAddress,
        amount,
      })
      console.log('USDC TRANSACTION ID(HASH)', transactionHash)
      return transactionHash
    } catch (err) {
      console.error(err)
    }
  }

  useEffectOnce(() => {
    if (!userAddress) return
    getUserSolBalance()
    getUserUsdcBalance()
  })

  return {
    userSolBalance: userSolBalance.value || 0,
    getUserSolBalance,
    userUsdcBalance: userUsdcBalance.value || 0,
    getUserUsdcBalance,
    transferSol,
    transferUsdc,
  }
}
