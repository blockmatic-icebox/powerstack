import { styled } from '@stitches/react'
import { useStore } from '~/store'
import _ from 'lodash'
import { ethers } from 'ethers'
import { useFetcher, useLocation } from '@remix-run/react'

const StyledWallet = styled('div', {
  border: '1px dotted gray',
  minHeight: 100,
})

export const Wallet = () => {
  const { user, appconfig } = useStore()
  const location = useLocation()
  const fetcher = useFetcher()

  const loginWithMetamask = async () => {
    const message = 'Login to PowerStack Remix'
    const ethereum = _.get(window, 'ethereum')
    if (!ethereum) alert('window.ethereum not found')
    const accounts = await ethereum.send('eth_requestAccounts')
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const signature = await signer.signMessage(message)
    const address = await signer.getAddress()
    console.log({ accounts, signature, address })

    fetcher.submit(
      {
        signature,
        address,
        message,
      },
      {
        method: 'post',
        action: `/actions/login/metamask?redirect_to=${
          location.pathname || '/'
        }`,
      },
    )
  }

  return (
    <StyledWallet>
      {/* {console.log('Wat chain', appconfig.network.chain)}
      <p>Network: {appconfig.network.chain}</p> */}
      <p>Supported Network: Rinkeby</p>
      <button onClick={loginWithMetamask}>Login with Metamask</button>
      <p>Address: {user?.address ? user.address : 'wallet not connected'}</p>
    </StyledWallet>
  )
}
