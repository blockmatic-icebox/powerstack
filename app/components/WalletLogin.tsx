import { styled } from '@stitches/react'
import { useStore } from '~/store'
import _ from 'lodash'
import { ethers } from 'ethers'
import { useFetcher, useLocation } from '@remix-run/react'
import { ethereum, isPhantom, solana } from '~/library'

const StyledWallet = styled('div', {
  border: '1px dotted gray',
  minHeight: 100,
})

const message = 'Login to PowerStack Remix'

type LoginOptions = {
  strategy: 'metamask' | 'phantom'
  signed_message: {
    signature: string
    address: string
    message: string
  }
}

const useLoginSubmit = () => {
  const location = useLocation()
  const fetcher = useFetcher()
  const submit = ({ strategy, signed_message }: LoginOptions) => {
    fetcher.submit(signed_message, {
      method: 'post',
      action: `/actions/login/${strategy}?redirect_to=${
        location.pathname || '/'
      }`,
    })
  }
  return submit
}

export const WalletLogin = () => {
  const { user } = useStore()
  const submit = useLoginSubmit()

  const loginWithMetamask = async () => {
    if (!ethereum) return alert('Metamask not found')
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    submit({
      strategy: 'metamask',
      signed_message: {
        signature: await signer.signMessage(message),
        address: await signer.getAddress(),
        message,
      },
    })
  }

  const loginWithPhantom = async () => {
    if (!isPhantom) return alert('Phantom not found')
    try {
      const resp = await solana.connect({ onlyIfTrusted: true })
      console.log(resp.publicKey.toString(), solana.isConnected) // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
    } catch (err) {
      alert((err as Error).message)
    }

    submit({
      strategy: 'phantom',
      signed_message: {
        signature: await solana.signMessage(
          new TextEncoder().encode(message),
          'utf8',
        ),
        address: resp.publicKey.toString(),
        message,
      },
    })
  }

  return (
    <StyledWallet>
      {/* {console.log('Wat chain', appconfig.network.chain)}
      <p>Network: {appconfig.network.chain}</p> */}
      <h3>Rinkeby</h3>
      <button onClick={loginWithMetamask}>Login with Metamask</button>
      <p>
        Address:{' '}
        {user?.address && user?.network === 'rinkeby'
          ? user.address
          : 'wallet not connected'}
      </p>
      {}
      <h3>Solana</h3>
      <button onClick={loginWithPhantom}>Login with Phantom</button>
      <p>
        Address:{' '}
        {user?.address && user?.network === 'solana'
          ? user.address
          : 'wallet not connected'}
      </p>
    </StyledWallet>
  )
}
