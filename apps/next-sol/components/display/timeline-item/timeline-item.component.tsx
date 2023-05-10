import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { IoMdTime } from 'react-icons/io'

import { cn } from '~/styles'

export function TimelineItem(props: {
  current: boolean
  day: string
  weekday: string
  hours: string
  title: string
  mb: string
}) {
  const { current, day, weekday, hours, title, mb } = props

  return (
    <div
      className={cn(
        'flex w-full items-end justify-between gap-4 rounded-xl p-1.5',
        mb ? mb : '',
        current ? 'bg-primary-900 dark:!bg-primary-400 ' : 'bg-white dark:!bg-navy-700',
      )}
    >
      {/* left side */}
      <div className="flex items-center gap-3">
        <div
          className={cn(
            'flex h-20 w-20 flex-col items-center justify-center rounded-xl',
            current ? 'bg-[#32278D]' : 'bg-lightPrimary dark:!bg-navy-900',
          )}
        >
          <p
            className={cn(
              'text-sm font-bold',
              current ? 'text-white' : 'text-gray-600 dark:text-white',
            )}
          >
            {' '}
            {weekday}{' '}
          </p>
          <h5
            className={cn(
              'text-[34px] font-bold',
              current ? 'text-white' : 'text-navy-700 dark:text-white',
            )}
          >
            {day}{' '}
          </h5>
        </div>
        <div className="flex flex-col">
          <h5
            className={cn(
              'text-base font-bold leading-6',
              current ? 'text-white' : 'text-navy-700 dark:text-white',
            )}
          >
            {' '}
            {title}{' '}
          </h5>
          <div
            className={cn('mt-1 flex items-center gap-2', current ? 'text-white' : 'text-gray-600')}
          >
            <p className="">
              {' '}
              <IoMdTime />{' '}
            </p>
            <p className="text-sm font-bold"> {hours} </p>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex h-full w-fit items-end justify-end pr-3 pb-2">
        <p
          className={cn(
            'text-xl font-bold',
            current ? 'text-white' : 'text-navy-700 dark:text-white',
          )}
        >
          {' '}
          <BsArrowRight />{' '}
        </p>
      </div>
    </div>
  )
}
