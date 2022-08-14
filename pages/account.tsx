import { styled } from '../app-view/styles/stitches.config'
import { NextPage } from 'next'
import { Container, Footer, Header } from '~/app-view/components/layout'
import { Button, Input } from '~/app-view/components/base'
import { useAppEngine } from '~/app-engine'
import { useState } from 'react'

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
  const { createAccount } = useAppEngine()
  const [username, setUsername] = useState('')
  return (
    <LoginBackground>
      <Header />
      <MainContent>
        <Container>
          <Input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="image"
            alt="Type your username"
            css={{ maxWidth: 450, width: '100%' }}
          />
          <ButtonGroup>
            <Button onClick={() => createAccount(username)}>Create your Account</Button>
          </ButtonGroup>
        </Container>
      </MainContent>
      <Footer />
    </LoginBackground>
  )
}

export default Home
