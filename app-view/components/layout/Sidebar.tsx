import { styled } from '~/app-view/styles/stitches.config'
import { useAppEngine } from '~/app-engine/index'
import { Link } from '../base/Link'
import { WalletBox } from '../modules/WalletBox'
import { AppsIcon, CartIcon, WalletIcon } from '../icons'
import { useRouter } from 'next/router'

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
    display: 'block',
  },
  variants: {
    show: {
      true: {
        width: 300,
        opacity: 1,
      },
    },
  },
})

const SidebarContent = styled('div', { p: '$small $regular' })

const WalletBoxContainer = styled('div', {
  background: '#fbfbfb',
  borderRadius: '$radius-18',
  p: '$small',
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
  },
})

const SidebarNav = styled('nav', {
  pt: '$regular',
  '& ul': {
    listStyle: 'none',
    pl: 0,
  },
})

const SidebarLink = styled(Link, {
  borderRadius: '$radius-24',
  fontSize: 14,
  py: '$x-small',
  px: '$large',
  transition: 'color 400ms, background-color 400ms',
  '&:hover, &:focus': {
    bg: 'rgba(4, 75, 255, 0.05)',
    color: '$044-bff',
  },
  '& svg': {
    mr: '$small',
  },
  '& svg path': {
    transition: 'fill 400ms',
  },
  '&[disabled]': {
    bg: '$neutral-200',
    color: '#000',
    cursor: 'not-allowed',
  },
  variants: {
    active: {
      true: {
        bg: 'rgba(4, 75, 255, 0.05)',
        color: '$044-bff',
        fontWeight: 600,
        '& svg path': {
          fill: '$044-bff',
        },
      },
    },
  },
})

export const Sidebar = () => {
  const { show_sidebar, user, setShowLoginModal, setloginModalMessage } = useAppEngine()
  const router = useRouter()
  const current_path = router.asPath.split('?')[0]

  return (
    <SidebarContainer show={true}>
      <SidebarContent>
        <WalletBoxContainer>
          <WalletBoxHeader>
            <WalletBoxTitle>Account</WalletBoxTitle>
          </WalletBoxHeader>
          {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
          {user?.addresses?.map((user_address, idx) => (
            <WalletBox key={idx} address={user_address.address} />
          ))}
          <WalletFooter>
            <button
              type="button"
              onClick={() => {
                setloginModalMessage('Add new wallet')
                setShowLoginModal(true)
              }}
            >
              + Connect new wallet
            </button>
          </WalletFooter>
        </WalletBoxContainer>
        <SidebarNav>
          <ul>
            <li>
              <SidebarLink
                active={current_path === '/profile'}
                // disabled={user ? false : true}
                href="/profile"
              >
                <AppsIcon /> Profile
              </SidebarLink>
            </li>
            <li>
              <SidebarLink
                active={current_path === '/wallet'}
                // disabled={user ? false : true}
                href="/wallet"
              >
                <WalletIcon />
                Wallet
              </SidebarLink>
            </li>
            <li>
              <SidebarLink
                active={current_path === '/mint'}
                // disabled={user ? false : true}
                href="/mint"
              >
                <WalletIcon />
                Mint
              </SidebarLink>
            </li>
            <li>
              <SidebarLink
                active={current_path === '/marketplace'}
                // disabled={user ? false : true}
                href="/marketplace"
              >
                <CartIcon />
                Marketplace
              </SidebarLink>
            </li>
          </ul>
        </SidebarNav>
      </SidebarContent>
    </SidebarContainer>
  )
}
