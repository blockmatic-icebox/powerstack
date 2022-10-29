import {SidebarLink} from '~/ui/layouts/sidebar/sidebar-link.component';

const sidebarLinks = [  
  {
    text: 'Account',
    href: '/'
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
    href: '/marketplace'
  }
]

export function Sidebar(){
 return (
     <div className="flex flex-col flex-grow mt-5"> 
      <nav className="flex-1 px-2 pb-4 space-y-1">
        <ul>
        {sidebarLinks.map((props) => <SidebarLink {...props}/>)}
        </ul>
        </nav>
      </div>
  )
}