import { cn } from '~/styles'

export function MiniStatistics(props: {
  name: string
  value: string
  icon: JSX.Element
  iconBg: string
}) {
  const { name, value, icon, iconBg } = props
  return (
    <div className="flex w-full items-center gap-3 rounded-[20px] bg-white bg-clip-border px-[18px] py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none">
      <div
        className={cn(
          'flex w-14 items-center justify-center rounded-full text-[33px] text-primary-500 dark:!bg-navy-700 dark:text-white',
          iconBg ? iconBg : '',
        )}
      >
        {icon}
      </div>
      <div className="">
        <p className="mb-1 text-sm font-medium text-gray-600 ">{name}</p>
        <h3 className="text-xl font-bold leading-6 text-navy-700 dark:text-white">{value}</h3>
      </div>
    </div>
  )
}
