import { useState } from 'react'
import { styled } from '~/app-view/styles/stitches.config'
import { BlockmaticIcon, BellIcon } from '~/app-view/components/icons/index'
import { Button } from '../base/Button'
import { Link } from '../base/Link'
import { useAppEngine } from '~/app-engine/index'
import { ProfilePopover } from '../modules/ProfilePopover'

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

const LoginButton = styled(Button, {
  ml: '$large',
  maxWidth: '100%',
  width: 190,
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
    boxShadow: '0px 0.5px 1px rgba(0, 0, 0, 0.4)'
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
      }
    }
  }
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
  p:0,
})

export const Header = () => {
  const { setShowLoginModal, user } = useAppEngine()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <NavBar role="navigation" aria-labelledby="main-nav-title">
      <LogoContainer>
        <LogoLink href="/">
          <Logo />
        </LogoLink>
      </LogoContainer>
      <NavContent>
        <MenuButton
          aria-label={isMenuOpen ? "Open Menu" : "Close Menu"}
          type="button"
          data-state={isMenuOpen && "active"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span />
          <span />
          <span />
        </MenuButton>
        <RightMenu>
          <VisuallyHidden>Main navigation</VisuallyHidden>
          <BellButton type="button" aria-label="Notifications">
            <BellIcon />
          </BellButton>
          {!user ?
            (
              <LoginButton variant="primary" onClick={() => setShowLoginModal(true)}>
                Login
              </LoginButton>
            ) : (
              <ProfilePopover />
            )
          }
        </RightMenu>
      </NavContent>
    </NavBar>
  )
}
