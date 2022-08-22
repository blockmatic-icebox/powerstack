import { styled } from '~/app-view/styles/stitches.config'
import { GhLoginIcon, GlobeIcon } from '~/app-view/components/icons/index'
import { Button } from '../base/Button'
import Link from 'next/link'
import { useAppEngine } from '~/app-engine/index'

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
  display: 'flex',
  backdropFilter: 'saturate(180%) blur(10px)',
  borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
  justifyContent: 'space-between',
  position: 'sticky',
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

export const Header = () => {
  const { setShowLoginModal } = useAppEngine()
  return (
    <NavBar role="navigation" aria-labelledby="main-nav-title">
      <button>menu icon here</button>
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
