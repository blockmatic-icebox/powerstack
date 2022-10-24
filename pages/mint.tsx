import { styled } from '../ui/_legacy/styles/stitches.config'
import { NextPage } from 'next'
import { useAppEngine } from '~/engine/_legacy/store'
import { Button } from '~/ui/_legacy/components/base/Button'
import { Input } from '~/ui/_legacy/components/base/Input'
import { defaultGetServerSideProps, DefaultSsrPage } from '~/server/session-ssr'

const ButtonGroup = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 450,
  paddingTop: '$small',
})

export const getServerSideProps = defaultGetServerSideProps

const MintPage: DefaultSsrPage = () => {
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
