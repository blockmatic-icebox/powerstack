import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useEffectOnce } from 'react-use'

import { faker } from '@faker-js/faker'

import { useAuth } from '~/hooks/use-auth'
import { useBalance } from '~/hooks/use-balance'
import { convertSeconds } from '~/lib/format'
import { deductBalance } from '~/services/balance'
import { insertBid } from '~/services/bids'
import { cn } from '~/styles'

import { Card } from '../card'
import { AuctionCardProps } from './auction-card.type'

export function AuctionCard({ id, title, image, initialTimer }: AuctionCardProps) {
  const { session, signIn } = useAuth()
  const [timer, setTimer] = useState(initialTimer)
  const [currentWinner, setCurrentWinner] = useState('')
  const [isSoldOut, setIsSoldOut] = useState(false)
  const { userBidBalance } = useBalance()

  const insertBidFn = async (amount: number) => {
    if (!session?.user.wallet) return
    try {
      await insertBid({
        accountId: session?.user.id,
        auctionId: id,
        transaction: 'EMPTY',
        amount: amount.toString(),
      })
      await deductBalance({
        wallet: session?.user.wallet,
        amount,
      })
    } catch (err) {
      console.error(err)
    }
  }

  const resetTimer = () => {
    setTimer(initialTimer)
  }

  const newWinner = async () => {
    resetTimer()
    setCurrentWinner(session?.user.username || faker.internet.userName())
    await insertBidFn(0.1 * 100)
  }

  useEffectOnce(() => {
    setCurrentWinner(faker.internet.userName())
  })

  useEffect(() => {
    if (timer === 0) {
      setIsSoldOut(true)
      return
    }

    const interval = setTimeout(() => {
      setTimer(timer - 1)
    }, 1000)

    return () => clearTimeout(interval)
  }, [timer])

  return (
    <Card extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px]`}>
      <div className="w-full h-full">
        <div className="relative w-full">
          <Image
            src={image}
            className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
            alt={title}
            width={668}
            height={468}
          />
        </div>

        <div className="flex items-center justify-between px-1 mb-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">{title}</p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-between gap-5 pl-1">
          <div className="flex">
            <p className="flex items-center justify-center m-0 text-sm font-bold text-brand-500 dark:text-white gap-x-2">
              <span className="text-lg">{convertSeconds(timer)}</span> |{' '}
              <span className="font-medium">{currentWinner}</span>
            </p>
          </div>
          <button
            onClick={!session ? signIn : newWinner}
            className={cn(
              `rounded-[20px] bg-primary-400 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90 flex justify-center items-center`,
              isSoldOut || (userBidBalance === 0 && session)
                ? 'dark:bg-gray-600 bg-gray-600 pointer-events-none cursor-default select-none'
                : '',
            )}
          >
            {isSoldOut ? 'Vendido' : 'Ofertar'}
          </button>
        </div>
      </div>
    </Card>
  )
}
