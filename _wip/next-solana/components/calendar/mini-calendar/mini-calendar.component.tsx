import { useState } from 'react'
import Calendar from 'react-calendar'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import { cn } from '~/styles'

import { MiniCalendarProps } from './mini-calendar.type'

export function MiniCalendar(props: MiniCalendarProps) {
  const [value, onChange] = useState(new Date())

  return (
    <div>
      <div
        className={cn(
          'flex h-full max-w-full flex-col rounded-[20px] bg-white px-3 py-4 dark:border dark:!border-white/10 dark:!bg-navy-800',
          props.width ? `w-[${props.width}]` : 'w-full md:w-[320px]',
        )}
      >
        <Calendar
          // onChange={onChange}
          value={value}
          prevLabel={<MdChevronLeft className="w-6 h-6 ml-1" />}
          nextLabel={<MdChevronRight className="w-6 h-6 ml-1" />}
          view={'month'}
        />
      </div>
    </div>
  )
}
