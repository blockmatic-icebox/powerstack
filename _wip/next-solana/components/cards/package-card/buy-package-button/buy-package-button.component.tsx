import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useAuth } from '~/hooks/use-auth'
import { useBalance } from '~/hooks/use-balance'
import { useSolana } from '~/hooks/use-solana'
import { increaseBalance } from '~/services/balance'
import { insertAccountPackage } from '~/services/packages'
import { connectPhantomWallet } from '~/services/solana'
import { getPhantomProvider } from '~/services/solana'
import { cn } from '~/styles'

import { BuyPackageButtonProps } from './buy-package-button.type'

export function BuyPackageButton({ packageId, packagePrice }: BuyPackageButtonProps) {
  const [loading, setLoading] = useState(false)
  const [isTherePhantomWallet, setIsTherePhantomWallet] = useState(false)
  const { transferUsdc } = useSolana()
  const { userBidBalance } = useBalance()
  const { session } = useAuth()
  const { data } = useSession()

  const accountId = data?.user.id
  const isButtonDisabled =
    !isTherePhantomWallet || !accountId || loading || packagePrice >= 500000 ? true : false

  const buyPackageFn = async () => {
    if (!accountId) return
    setLoading(true)
    try {
      await connectPhantomWallet()
      const totalPayment = Number(
        Number(packagePrice / 100000 + (packagePrice / 100000) * 0.13).toFixed(
          packagePrice === 900 ? 2 : 3,
        ),
      )
      const transactionHash = await transferUsdc(totalPayment)
      console.log(
        'userBidBalance + packagePrice',
        userBidBalance,
        packagePrice,
        userBidBalance + packagePrice,
      )
      if (transactionHash) {
        const res = await Promise.all([
          insertAccountPackage({
            packageId,
            accountId,
            transaction: transactionHash,
          }),
          await increaseBalance({
            wallet: session!.user.wallet,
            amount: packagePrice,
          }),
        ])

        if (res) toast('¡Paquete comprado!')
      }
      setLoading(false)
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    const provider = getPhantomProvider()
    setIsTherePhantomWallet(provider?.isPhantom)
  }, [setIsTherePhantomWallet, isTherePhantomWallet])

  return (
    <button
      onClick={buyPackageFn}
      disabled={isButtonDisabled}
      className={cn(
        'text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900',
        isButtonDisabled && 'bg-gray-400 cursor-default hover:bg-gray-400 select-none',
      )}
    >
      {isTherePhantomWallet
        ? `${loading ? 'En proceso...' : 'Comprar'}`
        : 'You need a Phantom wallet'}
    </button>
  )
}
