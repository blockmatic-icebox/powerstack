import { WalletLogin } from 'components/modules/WalletLogin'
import { styled } from '../styles/stitches.config'
import { NextPage } from 'next'
import { Container, Footer, Header } from 'components/layout'
import { appconfig } from '~/environment'
import { Button, Input } from '~/components/base'
import { useAppEngine } from '~/app-engine'

const MainContent = styled('div', {
  minHeight: '75vh',
  position: 'relative',
})

const LoginBackground = styled('div', {
  // ToDo: Add a contrasting image
  backgroundImage: 'url(/assets/images/login-bg.png)',
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
