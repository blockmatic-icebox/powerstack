import type { ReactNode } from 'react'

export default function Wallet({ children }: { children: ReactNode }) {
  return (
   <div>
        <p>{children}</p>
   </div>
  )
}
