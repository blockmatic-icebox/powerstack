import { WalletLogin } from '~/app-ui/components/modules/WalletLogin'
import { styled } from '../app-ui/styles/stitches.config'
import { NextPage } from 'next'
import { Container, Footer, Header } from '~/app-ui/components/layout'
import { appconfig } from '~/app-server'
import { Button } from '~/app-ui/components/base'
import { useAppEngine } from '~/app-engine'

const MainContent = styled('div', {
  minHeight: '75vh',
  position: 'relative',
})

const LoginBackground = styled('div', {
  // ToDo: Add a contrasting image
  // backgroundImage: 'url(/assets/images/login-bg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  minHeight: '100vh',
})

// export async function getServerSideProps() {
//   console.log('index getServerSideProps', appconfig)
//   return {
//     props: {
//       hola: 'hola',
//     },
//   }
// }

const Home: NextPage = () => {
  const { destroySession } = useAppEngine()
  return (
    <LoginBackground>
      <Header />
      <MainContent>
        <Container>
          <WalletLogin />

          <div>
            <Button onClick={destroySession}>log out</Button>
          </div>
        </Container>
      </MainContent>
      <Footer />
    </LoginBackground>
  )
}

export default Home
