import { cn } from '~/styles'

export function OrderStep(props: {
  icon: JSX.Element
  icon2: JSX.Element
  title: string
  subtitle: string
  bg: string
  border: string
  variant: string
}) {
  const { icon, icon2, title, subtitle, bg, border, variant } = props

  return (
    <div className="flex w-full items-center justify-between pt-10">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            'flex h-16 w-16 items-center justify-center rounded-full text-3xl text-primary-500 dark:text-white',
            variant === 'last'
              ? ' '
              : 'from-[#ffffff0f] to-white/0 shadow-xl shadow-gray-200 dark:bg-gradient-to-b dark:shadow-darkinset dark:shadow-white/20',
            bg ? bg : '',
          )}
        >
          {icon}
        </div>
        <div>
          <h4 className="text-base font-medium leading-6 text-navy-700 dark:text-white">
            {' '}
            {title}{' '}
          </h4>
          <p className="text-base text-gray-600"> {subtitle} </p>
        </div>
      </div>
      <div
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full !font-bold text-green-500',
          border ? border : '',
        )}
      >
        {icon2}
      </div>
    </div>
  )
}
