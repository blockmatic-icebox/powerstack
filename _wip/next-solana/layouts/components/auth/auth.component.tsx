import { Button } from '~/components/button'
import { useGlobalContext } from '~/context/global'
import { cn } from '~/styles'

export function Auth() {
  const { setGlobalState } = useGlobalContext()

  return (
    <div className={cn('flex items-center justify-end h-10 gap-4')}>
      <Button variant="primary" onClick={() => setGlobalState({ showSignUp: true })}>
        Únete a la red
      </Button>
    </div>
  )
}
