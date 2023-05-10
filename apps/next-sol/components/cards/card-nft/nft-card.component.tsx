import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'

import { Card } from '~/components/cards/card'
import { cn } from '~/styles'

export function NftCard(props: {
  title: string
  author: string
  price: string
  image: StaticImageData
  bidders: StaticImageData[]
  extra?: string
}) {
  const [heart, setHeart] = useState(true)
  return (
    <Card
      extra={cn(
        'flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white',
        props.extra ? props.extra : '',
      )}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <Image
            className="flex items-center justify-center rounded-full"
            src={props.image.src}
            fill
            alt=""
          />
          <button
            onClick={() => setHeart(!heart)}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-primary-500 hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50 dark:text-navy-900">
              {heart ? <IoHeartOutline /> : <IoHeart className="text-primary-500" />}
            </div>
          </button>
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white"> {props.title} </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">By {props.author} </p>
          </div>

          <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
            <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 dark:!border-navy-800 dark:bg-gray-800 dark:text-white">
              +5
            </span>
            {props.bidders.map((avt, key) => (
              <span
                key={key}
                className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white dark:!border-navy-800"
              >
                <Image className="rounded-full object-cover" src={avt.src} fill alt="" />
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <div className="flex">
            <p className="mb-2 text-sm font-bold text-primary-500 dark:text-white">
              Current Bid: {props.price} <span>ETH</span>
            </p>
          </div>
          <Link
            href={'#'}
            className="rounded-[20px] bg-primary-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-primary-800 active:bg-primary-700 dark:bg-primary-400 dark:hover:bg-primary-300 dark:active:opacity-90"
          >
            Place Bid
          </Link>
        </div>
      </div>
    </Card>
  )
}
