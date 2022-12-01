import { SidebarLink } from './sidebar-link.component'
import { Blockmatic, BlockmaticIcon } from '~/icons'


const sidebarLinks = [
  {
    text: 'Account',
    href: '/',
  },
  {
    text: 'Profile',
    href: '/profile',
  },
  {
    text: 'Wallet',
    href: '/wallet',
  },
  {
    text: 'Marketplace',
    href: '/marketplace',
  },
]

export function Sidebar() {
  return (
    <div>
      <div className="flex mx-3 my-8">
        <div className="mr-2">
          <BlockmaticIcon />
        </div>
        <Blockmatic />
      </div>
      <nav>
        <ol>
          {sidebarLinks.map((props, idx) => (
            <SidebarLink {...props} key={idx} />
          ))}
        </ol>
      </nav>
    </div>
  )
}
