import { SidebarLink } from './sidebar-link.component'

const sidebarLinks = [
  {
    text: 'Account',
    href: '/',
  },
  {
    text: 'Profile',
    href: '/profile'
  },
  {
    text: 'Wallet',
    href: '/wallet'
  },
  {
    text: 'Marketplace',
    href: '/marketplace',
  },
]

export function Sidebar() {
  return (
    <div className="flex flex-col flex-grow mt-5">
      <nav className="flex-1 px-2 pb-4 space-y-1">
        <ol>
          {sidebarLinks.map((props, idx) => <SidebarLink {...props} key={idx} />)}
        </ol>
      </nav>
    </div>
  )
}
