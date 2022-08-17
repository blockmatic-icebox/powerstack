import { WalletLogin } from '~/app-view/components/modules/WalletLogin'
import { styled } from '../app-view/styles/stitches.config'
import { NextPage } from 'next'
import { Container, Footer, Header } from '~/app-view/components/layout'
import { Button } from '~/app-view/components/base'
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

const Home: NextPage = () => {
  const { user, fetchUserBalances } = useAppEngine()
  return (
    <LoginBackground>
      <Header />
      <MainContent>
        <Container>
          {user && (
            <>
              <Button
                onClick={() => {
                  fetchUserBalances()
                }}
              >
                Update balances
              </Button>
              <pre>{JSON.stringify(user.user_addresses)}</pre>
              <ul>
                {user.user_addresses.map((address) => (
                  <li key={address.address}>{address.balance?.toString()}</li>
                ))}
              </ul>
            </>
          )}
          <WalletLogin />
        </Container>
      </MainContent>
      <Footer />
    </LoginBackground>
  )
}

export default Home
