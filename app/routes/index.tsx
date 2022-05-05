import { WalletLogin } from '~/components/WalletLogin'
import { Header } from '~/components/Header'
import { styled } from '~/styles/stitches.config'
import { Container } from '~/components/Container'
import { Footer } from '~/components/Footer'
import { Flex } from '~/components/Flex'

const MainContent = styled(Flex, {
  minHeight: '75vh',
  position: 'relative',
})
const LoginBackground = styled(Flex, {
  // ToDo: Add a contrasting image
  // backgroundImage: 'url(/assets/images/login-bg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  minHeight: '100vh',
})

export default function Index() {
  return (
    <LoginBackground direction="column">
      <Header />
      <MainContent align="center" justify="center">
        <Container>
          <WalletLogin />
        </Container>
      </MainContent>
      <Footer />
    </LoginBackground>
  )
}
