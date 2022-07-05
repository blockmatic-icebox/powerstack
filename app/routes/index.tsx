import { WalletLogin } from '~/components/WalletLogin'
import { Header } from '~/components/layout/Header'
import { styled } from '~/styles/stitches.config'
import { Container } from '~/components/primitives/Container'
import { Footer } from '~/components/layout/Footer'
import { Flex } from '~/components/primitives/Flex'
import { json, LoaderFunction } from '@remix-run/node'
import { auth } from '~/auth.server'
import { useLoaderData } from '@remix-run/react'

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

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url)
  const token = url.searchParams.get('token')
  const provider = url.searchParams.get('provider')
  if (token && provider) {
    return auth.authenticate(provider, request, {
      successRedirect: '/profile',
      failureRedirect: '/invalid-user',
    })
  }
  return json({ user: {} })
}

export default function Index() {
  const data = useLoaderData()
  return (
    <LoginBackground direction="column">
      <Header />
      {/* {data.user && <p>{JSON.stringify(data.user)}</p>} */}
      <MainContent align="center" justify="center">
        <Container>
          <WalletLogin />
        </Container>
      </MainContent>
      <Footer />
    </LoginBackground>
  )
}
