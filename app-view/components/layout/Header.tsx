import { styled } from '~/app-view/styles/stitches.config'
import { GhLoginIcon, GlobeIcon } from '~/app-view/components/icons/index'
import { Button } from '../base/Button'
import { useAppEngine } from '~/app-engine/index'
import { useState } from 'react'

const linkStyles = {
  color: '$text',
  ml: '$small',
  textDecoration: 'none',
  transition: 'color 0.4s',
  '&:hover': {
    color: '$primary-400',
  },
}

const NavBar = styled('nav', {
  alignItems: 'center',
  display: 'flex',
  backdropFilter: 'saturate(180%) blur(10px)',
  borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
  justifyContent: 'space-between',
  position: 'sticky',
  pl: '$regular',
  pr: '$x-large',
  py: '$regular',
  top: 0,
  width: '100%',
  zIndex: 100,
  '@small': {
    py: '$regular',
  },
})

const AnchorItem = styled('a', {
  ...linkStyles,
  ml: '$large',
  size: '$iconSmall',
  '& svg': {
    size: '$iconSmall',
  },
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
  maxWidth: '200px',
  width: '100%',
})

const LanguageButton = styled('button', {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  size: '$iconSmall',
  p: 0,
  svg: {
    size: '$iconSmall',
    path: {
      transition: 'stroke 0.4s',
    },
  },
  '&:hover': {
    path: {
      stroke: '$primary',
    },
  },
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

export const Header = () => {
  const { setShowLoginModal } = useAppEngine()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <NavBar role="navigation" aria-labelledby="main-nav-title">
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
        <LanguageButton type="button" aria-label="Language Switcher Icon">
          <GlobeIcon />
        </LanguageButton>
        <AnchorItem
          aria-label="Go to PowerStack repos"
          href="https://github.com/blockmatic?q=powerstack"
        >
          <GhLoginIcon />
        </AnchorItem>
        <LoginButton variant="primary" onClick={() => setShowLoginModal(true)}>
          Login
        </LoginButton>
      </RightMenu>
    </NavBar>
  )
}
