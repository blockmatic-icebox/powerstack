import Link from 'next/link'
import { useState } from 'react'
import { BsBell } from 'react-icons/bs'
import { FiMessageSquare } from 'react-icons/fi'
import { GiCoins } from 'react-icons/gi'

import { SearchBar } from '~/components/searchBar'
import { useAuth } from '~/hooks/use-auth'
import { Auth } from '~/layouts/components/auth'
import { ProfileMenu } from '~/layouts/components/profile-dropdown'
import { SidebarComponent } from '~/layouts/components/sidebar'

import { AppBarItems } from '../app-bar-items'

export function AppBar() {
  const [showSidebar, setShowSidebar] = useState(false)
  const { session } = useAuth()

  return (
    <nav className="sticky top-0 z-10 flex justify-center w-full p-4 mb-5 bg-white border-b border-gray-300 max-h-20">
      <div className="container flex items-center justify-between">
        <span className="flex w-[600px] text-neutral-500 ">
          <Logo />
          <div className="items-center hidden gap-5 lg:flex">
            <Link href={'/'}>Mercado</Link>
            <Link href={'/blog'}>Noticias</Link>
            <Link href={'/event'}>Eventos</Link>
            {session ? <SearchBar /> : null}
          </div>
        </span>

        {showSidebar && <Sidebar onClose={() => setShowSidebar(false)} />}

        <div className="flex items-center justify-between gap-2">
          {session ? <AppBarItems /> : <Auth />}
          <ProfileMenu />
        </div>
      </div>
    </nav>
  )
}

function Logo() {
  return (
    <Link href="/">
      <button className="flex h-12 w-full flex-col items-center justify-center border-dashed border-primary-200 dark:!border-primary-500 lg:pb-0">
        <GiCoins className="text-[50px] sm:text-[80px] text-primary-900 dark:text-white" />
      </button>
    </Link>
  )
}

function Sidebar({ onClose }: SidebarProps): JSX.Element {
  const [showSidebar2, setShowSidebar2] = useState(false)
  function handleClose(): void {
    setShowSidebar2(false)
  }
  return (
    <div className="fixed left-0 block bg-white top-20 sm:hidden">
      <SidebarComponent open={true} onClose={handleClose} />
    </div>
  )
}

interface SidebarProps {
  onClose: () => void
}
