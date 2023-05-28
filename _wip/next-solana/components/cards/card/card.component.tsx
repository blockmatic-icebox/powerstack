import { CardProps } from './card.type'

export function Card(props: CardProps) {
  const { variant, extra, children, ...rest } = props
  return (
    <div
      className={`!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-md dark:!bg-navy-800 dark:text-white dark:!shadow-none ${extra}`}
      {...rest}
    >
      {children}
    </div>
  )
}
