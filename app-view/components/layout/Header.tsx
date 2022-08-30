import { styled } from '~/app-view/styles/stitches.config'
import { BlockmaticIcon, BellIcon } from '~/app-view/components/icons/index'
import { Button } from '../base/Button'
import { Link } from '../base/Link'
import { useAppEngine } from '~/app-engine/index'
import { ProfilePopover } from '../modules/ProfilePopover'
import { app_args } from '~/app-config/app-arguments'

const NavBar = styled('nav', {
  display: 'flex',
  backdropFilter: 'saturate(180%) blur(10px)',
  justifyContent: 'space-between',
  position: 'sticky',
  top: 0,
  width: '100%',
  zIndex: 100,
})

const VisuallyHidden = styled('h2', {
  position: 'absolute',
  clip: 'rect(1px, 1px, 1px, 1px)',
  overflow: 'hidden',
  height: '1px',
  width: '1px',
  wordWrap: 'normal',
})

const RightMenu = styled('div', {
  display: 'flex',
})

const MenuButton = styled('button', {
  bg: 'transparent',
  border: 'none',
  cursor: 'pointer',
  p: 0,
  width: 22,
  transition: 'all 400ms',
  span: {
    background: '#000',
    borderRadius: 4,
    display: 'block',
    height: 3,
    mb: 3,
    transition: 'all .4s cubic-bezier(.05,.88,.36,.99)',
    width: 22,
  },
  '& span:last-child': {
    mb: 0,
    width: 9,
  },
  '&:hover span': {
    boxShadow: '0px 0.5px 1px rgba(0, 0, 0, 0.4)',
  },
  '&[data-state=active]': {
    transform: 'rotateY(180deg)',
    '& span': {
      '&:first-child': {
        marginTop: 5,
        transform: 'rotate(-45deg)',
      },
      '&:nth-child(2)': {
        marginTop: -6,
        transform: 'rotate(45deg)',
      },
      '&:last-child': {
        opacity: 0,
        width: 0,
      },
    },
  },
})

const Logo = styled(BlockmaticIcon, {
  height: '21px',
  width: 'max-content',
  '@small': {
    height: '36px',
  },
})

const LogoContainer = styled('div', {
  flex: '1 1 300px',
  maxWidth: 300,
  px: '$regular',
})

const NavContent = styled('div', {
  alignItems: 'center',
  borderBottom: '1px solid #eeeeee',
  borderLeft: '1px solid #eeeeee',
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  pl: '$regular',
  pr: '$x-large',
  py: '$regular',
  '@small': {
    py: '$regular',
  },
})

const LogoLink = styled(Link, {
  borderBottom: '1px solid #eeeeee',
  height: '100%',
  my: 0,
  py: '$regular',
})

const BellButton = styled('button', {
  bg: 'transparent',
  border: 'none',
  cursor: 'pointer',
  p: 0,
})

export const Header = () => {
  const { setShowLoginModal, show_sidebar, setShowSidebar, setloginModalMessage } = useAppEngine()

  return (
    <NavBar role="navigation" aria-labelledby="main-nav-title">
      <LogoContainer>
        <LogoLink href="/">
          <Logo />
        </LogoLink>
      </LogoContainer>
      <NavContent>
        <MenuButton
          aria-label={show_sidebar ? 'Open Menu' : 'Close Menu'}
          type="button"
          data-state={show_sidebar && 'active'}
          onClick={() => setShowSidebar(!show_sidebar)}
        />
        <RightMenu>
          <VisuallyHidden>Main navigation</VisuallyHidden>
          <BellButton type="button" aria-label="Notifications">
            <BellIcon />
          </BellButton>
          {/* <select style={{ margin: '0 10px' }} name="networks" id="networks">
            {app_args.supported_networks.map((network: string) => (
              <option key={network} value="{network}">
                {network}
              </option>
            ))}
          </select> */}
          <Button
            onClick={() => {
              setloginModalMessage('Login')
              setShowLoginModal(true)
            }}
          >
            Login
          </Button>
          <ProfilePopover />
        </RightMenu>
      </NavContent>
    </NavBar>
  )
}
