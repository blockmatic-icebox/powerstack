import { signIn, signOut, useSession } from 'next-auth/react'

import { Button } from '~/components/button'

export function Auth() {
  const { data: session } = useSession()

  const popupCenter = (url: string, title: string) => {
    const dualScreenLeft = window.screenLeft ?? window.screenX
    const dualScreenTop = window.screenTop ?? window.screenY

    const width = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width

    const height = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height

    const systemZoom = width / window.screen.availWidth

    const left = (width - 500) / 2 / systemZoom + dualScreenLeft
    const top = (height - 550) / 2 / systemZoom + dualScreenTop

    const newWindow = window.open(
      url,
      title,
      `width=${500 / systemZoom},height=${550 / systemZoom},top=${top},left=${left}`,
    )

    newWindow?.focus()
  }

  return (
    <div className="flex justify-end h-10 gap-4 pt-2 lg:pr-7">
      <h1>Auth Component</h1>

      <Button
        onClick={() => (session ? signOut() : signIn('niftory'))}
        label={session ? 'Sign Out' : 'Sign In'}
        variant={session ? 'secondary' : 'primary'}
        className="p-2"
      />
      <Button onClick={() => popupCenter('/auth/niftory', 'Sign In')} label="Sign In with Popup" />
    </div>
  )
}
