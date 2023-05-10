import { MdOutlineTimer } from 'react-icons/md'

import { cn } from '~/styles'

import { EventCardProps } from './event-card.type'

export const EventCard = (props: EventCardProps) => {
  const { bgBox, icon, title, desc, day, date, topics, time, extra, isExpanded } = props
  return (
    <div
      className={cn(
        'flex h-fit w-full flex-col rounded-[20px] bg-white bg-clip-border p-4 !pb-10 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none',
        isExpanded ? 'flex-col min-h-full' : 'lg:flex-row',
        extra ? extra : '',
      )}
    >
      <div
        className={cn(
          'mr-8 flex min-h-[200px] min-w-full items-center justify-center rounded-xl text-[100px] text-white lg:h-[250px] lg:min-w-[250px]',
          bgBox ? bgBox : '',
          isExpanded ? 'lg:!min-w-full' : '',
        )}
      >
        {icon}
      </div>

      <div className={cn('w-full justify-between pt-6', isExpanded ? '!min-h-full' : '')}>
        <div className={cn('', isExpanded ? '!min-h-full' : '')}>
          <div className="flex flex-col">
            <div>
              <h2 className="font-bold leading-7 text-navy-700 dark:text-white md:text-[18px]">
                {title}
              </h2>
              <p className="mt-3 text-base text-gray-600">{desc} </p>
            </div>
            <div className="flex justify-end gap-1 font-medium w-max">
              <p className="mt-2 text-gray-600 w-max"> {day} •</p>
              <p className="mt-2 text-base w-max text-navy-700 dark:text-white"> {date} </p>
            </div>
          </div>

          {/* marketing button */}
          <div className="flex flex-col flex-wrap items-center gap-2 mt-4 md:flex-row">
            <div className="flex w-full space-x-3 overflow-x-scroll no-scrollbar">
              {topics.map((topic: string, i: number) => {
                return (
                  <div
                    key={`${topic}-i`}
                    className="flex items-center justify-center px-2 text-xs font-bold tracking-wide uppercase rounded-lg h-7 bg-lightPrimary text-primary-500 dark:bg-white/5 dark:text-white whitespace-nowrap"
                  >
                    {topic}
                  </div>
                )
              })}
            </div>
            {time ? (
              <div className="flex items-center gap-1 text-sm font-medium text-navy-700 dark:text-white 2xl:ml-auto">
                <p>
                  <MdOutlineTimer />
                </p>
                <p> {time} </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
