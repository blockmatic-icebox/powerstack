import { WalletLogin } from '~/components/modules/WalletLogin'
import { Header } from '~/components/layout/Header'
import { styled } from '~/styles/stitches.config'
import { Container } from '~/components/base/Container'
import { Footer } from '~/components/layout/Footer'
import { Flex } from '~/components/deprecated/Flex'

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
