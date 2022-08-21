import { styled } from '../../styles/stitches.config'
import _ from 'lodash'
import {
  AnchorIcon,
  MetamaskIcon,
  PhantonIcon,
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
    backgroundColor: '#E5E7EB',
  },
})

const ButtonGroup = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '$small',
  '& svg': {
    flexShrink: 0,
    m: '$regular',
  },
})

const WalletCard = styled(Card, {
  maxWidth: '100%',
  maxHeight: '100vh',
  overflowX: 'hidden',
  overflowY: 'auto',
})

export const WalletLogin = () => {
  const {
    user,
    loginWithAnchor,
    loginWithPhantom,
    loginWithMetamask,
    web3authLogin,
    destroySession,
    setShowLoginModal,
    show_login_modal,
  } = useAppEngine()
  const location = useLocation()
  const default_user_address = user?.user_addresses[0].address

  return (
    <Modal
      handleClose={() => setShowLoginModal(false)}
      show={show_login_modal}
      width={544}
    >
      <WalletCard>
        <Title>Welcome {user ? 'Back' : null} to PowerStack Demo</Title>
        <p>Address: {default_user_address ? default_user_address : 'wallet not connected'}</p>

        {user ? (
          <>
            <LoginButton css={{ mb: '$small' }} onClick={destroySession} variant="metamask">
              Log out
            </LoginButton>
          </>
        ) : (
          <>
            <LoginButton onClick={loginWithPhantom} variant="panthom">
              <PhantonIcon />
              Login with Phantom
            </LoginButton>
            <LoginButton css={{ mb: '$small' }} onClick={loginWithAnchor} variant="anchor">
              <AnchorIcon />
              Login with Anchor
            </LoginButton>
            <LoginButton css={{ mb: '$small' }} onClick={loginWithMetamask} variant="metamask">
              <MetamaskIcon />
              Login with Metamask
            </LoginButton>
            <LoginButton css={{ mb: '$small' }} onClick={web3authLogin} variant="metamask">
              Login with Web3Auth
            </LoginButton>

            <Separator>Or use social web2 logins without wallet</Separator>

            <ButtonGroup>
              <LoginButton
                css={{ mb: '$small' }}
                onClick={() => {
                  window.location.href = `https://powerstack-auth-atgjsg75cq-uc.a.run.app/provider/twitter?redirect_uri=${location.href}`
                }}
                variant="metamask"
                role="button"
              >
                <TwitterIcon />
              </LoginButton>
              <Button
                css={{ mb: '$small' }}
                onClick={() => {}}
                variant="metamask"
                aria-label="Login with Github"
              >
                <GhLoginIcon />
              </Button>
              <Button
                css={{ mb: '$small' }}
                onClick={() => {}}
                variant="metamask"
                aria-label="Login with Gitlab"
              >
                <GitlabIcon />
              </Button>
              <Button
                css={{ mb: '$small' }}
                onClick={() => {}}
                variant="metamask"
                aria-label="Login with BitBucket"
              >
                <BitbucketIcon />
              </Button>
            </ButtonGroup>
          </>
        )}
      </WalletCard>
    </Modal>
  )
}
