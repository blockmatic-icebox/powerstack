import { styled } from '../../styles/stitches.config'
import _ from 'lodash'
import {
  AnchorIcon,
  MetamaskIcon,
  PhantonIcon,
  GitlabIcon,
  GhLoginIcon,
  BitbucketIcon,
} from '~/app-view/components/icons/index'
import { Button } from '~/app-view/components/base/index'
import { Card } from './Card'
import { useAppEngine } from '~/app-engine/index'
import { useLocation } from 'react-use'

type LoginOptions = {
  strategy: 'metamask' | 'phantom' | 'twitter'
  signed_message?: {
    signature: string
    address: string
    message: string
  }
}

const Title = styled('h1', {
  fontSize: '$h-2',
  fontWeight: '$semi-bold',
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
    mr: '$regular',
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

export const WalletLogin = () => {
  const { user, loginWithAnchor, loginWithPhantom, loginWithMetamask, web3authLogin } =
    useAppEngine()
  const location = useLocation()
  const default_user_address = user?.user_addresses[0].address

  return (
    <Card>
      <Title>Welcome {user ? 'Back' : null} to PowerStack Demo</Title>
      <p>Address: {default_user_address ? default_user_address : 'wallet not connected'}</p>
      <LoginButton onClick={loginWithPhantom} variant="panthom">
        <PhantonIcon />
        Login with Phantom
      </LoginButton>
      <LoginButton css={{ mb: '$small' }} onClick={loginWithAnchor} variant="anchor">
        <AnchorIcon />
        Login with Anchor XXX
      </LoginButton>
      <LoginButton css={{ mb: '$small' }} onClick={loginWithMetamask} variant="metamask">
        <MetamaskIcon />
        Login with Metamask
      </LoginButton>
      <LoginButton css={{ mb: '$small' }} onClick={web3authLogin} variant="metamask">
        Login with Web3Auth
      </LoginButton>

      <Separator>Or use social web2 logins without wallet</Separator>

      <LoginButton
        css={{ mb: '$small' }}
        onClick={() => {
          window.location.href = `https://powerstack-auth-atgjsg75cq-uc.a.run.app/provider/twitter?redirect_uri=${location.href}`
        }}
        variant="metamask"
        role="button"
      >
        Login in with Twitter
      </LoginButton>
      <Button
        css={{ mb: '$small' }}
        onClick={() => {}}
        variant="metamask"
        aria-label="Login with Github"
      >
        <GhLoginIcon /> Login with Github
      </Button>
      <Button
        css={{ mb: '$small' }}
        onClick={() => {}}
        variant="metamask"
        aria-label="Login with Gitlab"
      >
        <GitlabIcon /> Login with Gitlab
      </Button>
      <Button
        css={{ mb: '$small' }}
        onClick={() => {}}
        variant="metamask"
        aria-label="Login with BitBucket"
      >
        <BitbucketIcon /> Login with BitBucket
      </Button>
    </Card>
  )
}
