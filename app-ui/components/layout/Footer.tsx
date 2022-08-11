import { styled } from '../../styles/stitches.config'
import { LightModeIcon } from '~/app-ui/components/icons/index'
import { Button } from '~/app-ui/components/base/index'
import { Container } from './Container'

// NOTE: Should be a Link component
const FooterWrapper = styled('footer', {
  textAlign: 'center',
  pb: '$regular',
  pt: '$regular',
  mt: 'auto',
  '@small': {
    pb: '$x-large',
  },
})

const ExternalLink = styled('a', {
  color: '$primary-300',
  '&:hover': {
    color: '$primary-400',
  },
})

const ThemeTogglerWrapper = styled('div', {
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  button: {
    borderRadius: '50%',
  },
  '&:hover circle[id="hover-fill"]': {
    fill: '$text',
  },
})

export const Footer = () => (
  <FooterWrapper>
    <Container css={{ position: 'relative', px: '$xx-large' }}>
      <p>
        <ExternalLink href="https://github.com/blockmatic">Blockmatic</ExternalLink> © 2022, all
        rights reserved. | Privacy Policy
      </p>
      <ThemeTogglerWrapper>
        <Button variant="transparent">
          <LightModeIcon />
        </Button>
      </ThemeTogglerWrapper>
    </Container>
  </FooterWrapper>
)
