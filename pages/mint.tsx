import { styled } from '../app-view/styles/stitches.config'
import { NextPage } from 'next'
import { useAppEngine } from '~/app-engine'
import { Button } from '~/app-view/components/base/Button'
import { Input } from '~/app-view/components/base/Input'

const ButtonGroup = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 450,
  paddingTop: '$small',
})

const MintPage: NextPage = () => {
  const { mintOnSolana, mintOnEvm } = useAppEngine()
  return (
    <>
      <Input
        name="asset_url"
        type="image"
        alt="Select Image"
        css={{ maxWidth: 450, width: '100%' }}
      />
      <ButtonGroup>
        <Button onClick={mintOnSolana}>Mint using Blundr and Solana</Button>
        <Button onClick={mintOnEvm}>Mint using Pinata and EVM</Button>
      </ButtonGroup>
    </>
  )
}

export default MintPage
