import { Flex } from './Flex';
import { Container } from './Container';
import { styled } from '~/styles/stitches.config'
import { Link } from '@remix-run/react'
import { GhLoginIcon } from './icons';

export function Header() {
  const linkStyles = {
    color: '$text',
    ml: '$small',
    textDecoration: 'none',
    transition: 'color 0.4s',
    '&:hover': {
      color: '$primary-400'
    }
  }

  const NavBar = styled(Flex, {
    backdropFilter: 'saturate(180%) blur(5px)',
    boxShadow: 'inset 0 -1px 0 0 rgba(0,0,0,.1)',
    bg: '$header-bg',
    position: 'absolute',
    py: '$x-small',
    top: 0,
    width: '100%',
  })

  const LinkItem = styled(Link, linkStyles)

  const AnchorItem = styled('a', {
    ...linkStyles,
    '& svg': {
      size: '$iconSmall'
    }
  })

  const VisuallyHidden = styled('h2', {
    position: 'absolute',
    clip: 'rect(1px, 1px, 1px, 1px)',
    overflow: 'hidden',
    height: '1px',
    width: '1px',
    wordWrap: 'normal',
  })

  const Logo = styled('img', {
    maxHeight: '$iconMedium',
    objectFit: 'contain'
  })

  return (
    <NavBar>
      <Container>
        <Flex justify="between" align="center">
            {/* ToDo: Logo needs to be improved */}
            <Logo src="/logo-text-icon.png" alt="Blockmatic Logo" />
            <Flex
              justify="end"
              as="nav"
              role="navigation"
              aria-labelledby="main-nav-title"
              align="center"
            >
              <VisuallyHidden>Main navigation</VisuallyHidden>
              <LinkItem to="#">Login</LinkItem>
              <AnchorItem
                aria-label="Go to Powerstack Template"
                href="https://github.com/blockmatic/powerstack-remix"
              >
                <GhLoginIcon />
              </AnchorItem>
            </Flex>
        </Flex>
      </Container>
    </NavBar>
  );
}
