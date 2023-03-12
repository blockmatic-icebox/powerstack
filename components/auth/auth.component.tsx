import { signIn, signOut, useSession } from 'next-auth/react'

import { Button } from '~/components/button'

export function Auth() {
  const { data: session } = useSession()

  return (
    <div className="flex justify-end h-10 gap-4 pt-2 lg:pr-7">
      <h1>Auth Component</h1>
      <Button
        onClick={() => (session ? signOut() : signIn('niftory'))}
        label={session ? 'Sign Out' : 'Sign In'}
        variant={session ? 'secondary' : 'primary'}
        className="p-2"
      />
    </div>
  )
}
