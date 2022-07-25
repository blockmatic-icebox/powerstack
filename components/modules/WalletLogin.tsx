import { styled } from 'styles/stitches.config'
import { useStore } from 'store'
import _ from 'lodash'
import { ethers } from 'ethers'
import { ethereum, isPhantom, solana } from 'library'
import {
  AnchorIcon,
  MetamaskIcon,
  PhantonIcon,
  // GitlabIcon,
  // GhLoginIcon,
  // BitbucketIcon,
} from 'icons'
import { useEffect, useState } from 'react'
import { Button } from 'components/base'
import { Card } from './Card'

const message = 'Login to PowerStack App'

type LoginOptions = {
  strategy: 'metamask' | 'phantom' | 'twitter'
  signed_message?: {
    signature: string
    address: string
    message: string
  }
}

const useLoginSubmit = () => {
  const submit = ({ strategy, signed_message }: LoginOptions) => {
    //   fetcher.submit(signed_message || {}, {
    //     method: 'post',
    //     action: `/actions/login/${strategy}?redirect_to=${
    //       location.pathname || '/'
    //     }`,
    //   })
  }
  return submit
}

const Title = styled('p', {
  fontSize: '$h-2',
  fontWeight: '$semi-bold',
  mb: '$large',
  mt: 0,
  px: '$small',
  textAlign: 'center',
  '@tabletUp': {
    fontSize: '$h-1',
    mb: '$x-large',
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

const IconsFlex = styled('div', {
  display: 'flex',
  px: '$small',
  columnGap: '$small',
  button: {
    flex: '1',
  },
})

export const WalletLogin = () => {
  const { user } = useStore()
  const submit = useLoginSubmit()

  const loginWithMetamask = async () => {
    if (!ethereum) return alert('Metamask not found')
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    // submit({
    //   strategy: 'metamask',
    //   signed_message: {
    //     signature: await signer.signMessage(message),
    //     address: await signer.getAddress(),
    //     message,
    //   },
    // })
  }

  const loginWithPhantom = async () => {
    if (!isPhantom) return alert('Phantom not found')
    try {
      const resp = await solana.connect()
      console.log(resp.publicKey.toString(), solana.isConnected) // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
      // submit({
      //   strategy: 'phantom',
      //   signed_message: {
      //     signature: await solana.signMessage(
      //       new TextEncoder().encode(message),
      //       'utf8',
      //     ),
      //     address: resp.publicKey.toString(),
      //     message,
      //   },
      // })
    } catch (err) {
      alert((err as Error).message)
    }
  }

  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(window.location.origin)
  }, [])

  return (
    <Card direction="column" variant="login">
      <Title as="h1" variant="h1">
        Welcome {user ? 'Back' : null} to PowerStack Remix
      </Title>
      <LoginButton onClick={() => {}} variant="panthom">
        <PhantonIcon />
        Login with Phantom
      </LoginButton>
      <LoginButton
        css={{ mb: '$small' }}
        onClick={() => console.log("I'm dummy, gimme power!")}
        variant="anchor"
      >
        <AnchorIcon />
        Login with Anchor
      </LoginButton>
      <LoginButton css={{ mb: '$small' }} onClick={() => {}} variant="metamask">
        <MetamaskIcon />
        Login with Metamask
      </LoginButton>
      {/* <p>
        Address:{' '}
        {user?.address && user?.network === 'rinkeby'
          ? user.address
          : 'wallet not connected'}
      </p> */}
      {/* <p>
        Address:{' '}
        {user?.address && user?.network === 'solana'
          ? user.address
          : 'wallet not connected'}
      </p> */}
      <Separator>Or sign in with</Separator>
      <IconsFlex justify="center">
        {/* <a
          href={`https://powerstack-auth-atgjsg75cq-uc.a.run.app/provider/twitter`}
          role="button"
        >
          Sign in with Twitter
        </a> */}
        <a
          href={`https://powerstack-auth-atgjsg75cq-uc.a.run.app/provider/twitter?redirect_uri=${path}`}
          role="button"
        >
          Sign in with Twitter
        </a>
        {/* <Button 
          css={{ svg: { mr: 0 } }}
          onClick={() => loginWithTwitter()}
          variant="oAuth"
          aria-label="Login with Twitter"
        >
          <GhLoginIcon />
        </Button> */}
        {/* <Button
          css={{ svg: { mr: 0 } }}
          onClick={() => console.log("I'm dummy, gimme power!")}
          variant="oAuth"
          aria-label="Login with Github"
        >
          <GhLoginIcon />
        </Button>
        <Button
          css={{ svg: { mr: 0 } }}
          onClick={() => console.log("I'm dummy, gimme power!")}
          variant="oAuth"
          aria-label="Login with Gitlab"
        >
          <GitlabIcon />
        </Button>
        <Button
          css={{ svg: { mr: 0 } }}
          onClick={() => console.log("I'm dummy, gimme power!")}
          variant="oAuth"
          aria-label="Login with BitBucket"
        >
          <BitbucketIcon />
        </Button> */}
      </IconsFlex>
    </Card>
  )
}
