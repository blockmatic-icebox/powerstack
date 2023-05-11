import { cn } from '~/styles'

export function Spinner({ className = '' }: { className?: string }) {
  return (
    <div
      className={cn(
        'animate-spin inline-block w-8 h-8 border-[3px] border-primary-500 !border-t-transparent rounded-full',
        className,
      )}
      role="status"
    />
  )
}
