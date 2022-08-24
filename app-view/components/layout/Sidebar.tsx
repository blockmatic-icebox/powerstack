import { styled } from '~/app-view/styles/stitches.config'
import { useAppEngine } from '~/app-engine/index'
import { Link } from '../base/Link'
import { WalletBox } from '../modules/WalletBox'

const SidebarContainer = styled('aside', {
  display: 'none',
  mb: '$large',
  maxWidth: '100%',
  minHeight: 'auto',
  opacity: 0,
  position: 'relative',
  transition: 'width 400ms, opacity 400ms',
  width: 0,
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

const SidebarContent = styled('div', { p: '$small $regular' })

const WalletBoxContainer = styled('div', {
  background: '#fbfbfb',
  borderRadius: '$radius-18',
  p: '$small',
  minWidth: '100%',

})

const WalletBoxHeader = styled('header', {
  borderBottom: '1px solid $neutral-100',
  pb: '$small',
  mb: '$small',
})

const WalletBoxTitle = styled('h4', {
  fontSize: 18,
  my: 0,
})

const WalletFooter = styled('footer', {
  pb: '$x-small',
  pt: '$xx-small',
  textAlign: 'center',
  '& button': {
    bg: 'transparent',
    border: 'none',
    color: '$044-bff',
    cursor: 'pointer',
    fontSize: 12,
    fontWeight: 500,
    p: 0,
  }
})

export const Sidebar = () => {
  const { show_sidebar, user } = useAppEngine()

  return (
    <SidebarContainer show={show_sidebar}>
      <SidebarContent>
        <WalletBoxContainer>
          <WalletBoxHeader>
            <WalletBoxTitle>Account</WalletBoxTitle>
          </WalletBoxHeader>
          {user?.user_addresses.map((user_address, idx) => <WalletBox key={idx} address={user_address.address} />)}
          <WalletFooter>
            <button type="button">+ Connect new wallet</button>
          </WalletFooter>
        </WalletBoxContainer>
        <nav>
          <ul>
            <li><Link disabled={user ? true : false} href="/profile">Profile</Link></li>
            <li><Link disabled={user ? true : false} href="/wallet">Wallet</Link></li>
            <li><Link disabled={user ? true : false} href="/marketplace">Marketplace</Link></li>
          </ul>
        </nav>
      </SidebarContent>
    </SidebarContainer>
  )
}
