import { cn } from '~/styles'

export function Event(props: { title: string; time: string; eventBg: string; mb: string }) {
  const { title, time, eventBg, mb } = props
  return (
    <div
      className={cn(
        'flex w-full flex-col dark:!bg-navy-700 rounded-xl py-3 px-4 3xl:p-4',
        eventBg ? eventBg : '',
        mb ? mb : '',
      )}
    >
      <h5 className="text-base font-bold text-navy-700 dark:text-white">{title} </h5>
      <p className="text-sm font-medium text-gray-600"> {time} </p>
    </div>
  )
}
