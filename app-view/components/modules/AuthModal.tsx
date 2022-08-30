import { styled } from '../../styles/stitches.config'
import _ from 'lodash'
import {
  AnchorIcon,
  MetamaskIcon,
  PhantonIcon,
  Web3authIcon,
  TwitterIcon,
  GitlabIcon,
  GhLoginIcon,
  BitbucketIcon,
} from '~/app-view/components/icons/index'
import { Card } from './Card'
import { useAppEngine } from '~/app-engine/index'
import { useLocation } from 'react-use'
import { Button } from '../base/Button'
import { Modal } from './Modal'

const Title = styled('h1', {
  fontSize: '$h-2',
  fontWeight: '$bold',
  mb: '$large',
  mt: 0,
  px: '$small',
  textAlign: 'center',
  '@tabletUp': {
    fontSize: '$h-1',
    mb: '$x-small',
  },
})

const LoginButton = styled(Button, {
  '& svg': {
    flexShrink: 0,
    m: '$regular',
  },
})

const Separator = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr max-content 1fr',
  gridColumnGap: '$regular',
  alignItems: 'center',
  my: '$regular',
  '&:before, &:after': {
    content: '""',
    display: 'block',
    height: '1px',
    backgroundColor: '$neutral-100',
  },
})

const ButtonGroup = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '$small',
  '& svg': {
    flexShrink: 0,
    m: '$small',
  },
})

const WalletCard = styled(Card, {
  maxWidth: '100%',
  maxHeight: '100vh',
  overflowX: 'hidden',
  overflowY: 'auto',
})

export const AuthModal = () => {
  const {
    user,
    loginWithAnchor,
    loginWithPhantom,
    loginWithMetamask,
    web3authLogin,
    setShowLoginModal,
    show_login_modal,
    login_modal_message,
  } = useAppEngine()
  const location = useLocation()

  return (
    <Modal
      handleClose={() => setShowLoginModal(false)}
      show={show_login_modal && !user}
      width={544}
    >
      <WalletCard>
        <Title>{login_modal_message || 'Login'}</Title>
        <LoginButton css={{ mb: '$small' }} onClick={loginWithPhantom} variant="panthom">
          <PhantonIcon />
          Login with Phantom
        </LoginButton>
        <LoginButton css={{ mb: '$small' }} onClick={loginWithMetamask} variant="metamask">
          <MetamaskIcon />
          Login with Metamask
        </LoginButton>
        <LoginButton css={{ mb: '$small' }} onClick={loginWithAnchor} variant="anchor">
          <AnchorIcon />
          Login with Anchor
        </LoginButton>
        <LoginButton css={{ mb: '$small' }} onClick={web3authLogin} variant="web3auth">
          <Web3authIcon />
          Login with Web3Auth
        </LoginButton>

        <Separator>Or sign in with web2</Separator>

        <ButtonGroup>
          <LoginButton
            css={{ m: '$xx-small' }}
            onClick={() => {
              window.location.href = `https://powerstack-auth-atgjsg75cq-uc.a.run.app/provider/twitter?redirect_uri=${location.href}`
            }}
            variant="metamask"
            role="button"
          >
            <TwitterIcon />
          </LoginButton>
          <Button
            css={{ m: '$xx-small' }}
            onClick={() => {}}
            variant="metamask"
            aria-label="Login with Github"
          >
            <GhLoginIcon />
          </Button>
          <Button
            css={{ m: '$xx-small' }}
            onClick={() => {}}
            variant="metamask"
            aria-label="Login with Gitlab"
          >
            <GitlabIcon />
          </Button>
          <Button
            css={{ m: '$xx-small' }}
            onClick={() => {}}
            variant="metamask"
            aria-label="Login with BitBucket"
          >
            <BitbucketIcon />
          </Button>
        </ButtonGroup>
      </WalletCard>
    </Modal>
  )
}
