import { cn } from '~/styles'

export function SessionBadge(props: {
  detail: string
  name: string
  status: string
  bgTextColor: string
  py: string
  border: string
}) {
  const { detail, name, status, bgTextColor, py, border } = props

  return (
    <div
      className={cn(
        'flex items-center justify-between dark:!border-white/10',
        py ? py : '',
        border ? border : '',
      )}
    >
      <p className="text-base font-bold text-navy-700 dark:text-white">{name}</p>
      <div className="flex items-center gap-3">
        <p className="mr-4 text-base font-medium text-gray-600">{detail}</p>

        <div
          className={`mt-1 flex h-8 w-20 items-center justify-center rounded-[10px] text-sm font-bold uppercase ${bgTextColor} `}
        >
          {status}
        </div>
      </div>
    </div>
  )
}
