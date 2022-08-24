import { styled } from '~/app-view/styles/stitches.config'
import { useAppEngine } from '~/app-engine/index'
import { Link } from '../base/Link'
import { WalletBox } from '../modules/WalletBox'

const SidebarContainer = styled('aside', {
  display: 'none',
  minHeight: 'auto',
  p: '$small $regular',
  position: 'relative',
  opacity: 0,
  width: 0,
  maxWidth: '100%',
  transition: 'width 400ms, opacity 400ms',
  '@small': {
    display: 'block'
  },
  variants: {
    show: {
      true: {
        width: 300,
        opacity: 1,
      }
    }
  }
})

export const Sidebar = () => {
  const { show_sidebar, user } = useAppEngine()

  return (
    <SidebarContainer show={show_sidebar}>
      {user?.user_addresses.map((user_address, idx) => <WalletBox key={idx} address={user_address.address} />)}
      <nav>
        <ul>
          <li><Link disabled={user ? true : false} href="/profile">Profile</Link></li>
          <li><Link disabled={user ? true : false} href="/wallet">Wallet</Link></li>
          <li><Link disabled={user ? true : false} href="/marketplace">Marketplace</Link></li>
        </ul>
      </nav>
    </SidebarContainer>
  )
}
