import { ComponentType, ReactNode } from 'react'

export interface SidebarLayoutProps {
  Sidebar: ComponentType<{
    open: boolean
    onClose: React.Dispatch<React.SetStateAction<boolean>>
    variant?: 'auth'
  }>
  main: ReactNode
  header?: ReactNode
}
