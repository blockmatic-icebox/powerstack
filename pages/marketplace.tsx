import type { ReactNode } from 'react'

export default function Marketplace({ children }: { children: ReactNode }) {
  return (
   <div>
        <p>{children}</p>
   </div>
  )
}
