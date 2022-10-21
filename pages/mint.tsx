import { styled } from '../ui/styles/stitches.config'
import { NextPage } from 'next'
import { useAppEngine } from '~/engine/store'
import { Button } from '~/ui/components/base/Button'
import { Input } from '~/ui/components/base/Input'
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
