// this is where you would add other providers

'use client'

import { SessionProvider } from 'next-auth/react'

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>
}

type Props = {
  children?: React.ReactNode
}
