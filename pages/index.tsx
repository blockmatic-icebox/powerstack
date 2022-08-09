import { WalletLogin } from 'components/modules/WalletLogin'
import { styled } from '../styles/stitches.config'
import { NextPage } from 'next'
import { Container, Footer, Header } from 'components/layout'
import { appconfig } from '~/environment'

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
  return (
    <LoginBackground>
      <Header />
      <MainContent>
        <Container>
          <WalletLogin />
        </Container>
      </MainContent>
      <Footer />
    </LoginBackground>
  )
}

export default Home
