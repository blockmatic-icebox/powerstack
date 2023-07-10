'use client'

import { noop } from 'lodash'

import { useAuth } from '~/hooks/use-auth'
import { buttonVariants } from '~/components/ui/button'

export function ConnectWallet() {
  const { signIn, session } = useAuth()
  return (
    <button className={buttonVariants({ variant: 'outline', size: 'lg' })} onClick={session ? noop : signIn}>
      {session ? session.user.account : 'Connect Wallet'}
    </button>
  )
}
