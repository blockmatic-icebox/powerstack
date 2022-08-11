import { styled } from '../app-ui/styles/stitches.config'
import { NextPage } from 'next'
import { Container, Footer, Header } from '~/app-ui/components/layout'
import { Button, Input } from '~/app-ui/components/base'
import { useAppEngine } from '~/app-engine'

const MainContent = styled('div', {
  minHeight: '75vh',
  position: 'relative',
})

const LoginBackground = styled('div', {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  minHeight: '100vh',
})

const ButtonGroup = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 450,
  paddingTop: '$small',
})

const Home: NextPage = () => {
  const { mintOnSolana, mintOnEvm } = useAppEngine()
  return (
    <LoginBackground>
      <Header />
      <MainContent>
        <Container>
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
        </Container>
      </MainContent>
      <Footer />
    </LoginBackground>
  )
}

export default Home
