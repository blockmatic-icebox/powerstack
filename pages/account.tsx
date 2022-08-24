import { styled } from '../app-view/styles/stitches.config'
import { useAppEngine } from '~/app-engine'
import { useState } from 'react'
import { Button } from '~/app-view/components/base/Button'
import { Input } from '~/app-view/components/base/Input'
import { defaultGetServerSideProps, DefaultSsrPage } from '~/app-server/session-ssr'

const ButtonGroup = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 450,
  paddingTop: '$small',
})

export const getServerSideProps = defaultGetServerSideProps

const AccountPage: DefaultSsrPage = ({ user }) => {
  const { createUsername } = useAppEngine()
  const [username, setUsername] = useState('')
  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Input
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        alt="Type your username"
        css={{ maxWidth: 450, width: '100%' }}
      />
      <ButtonGroup>
        <Button onClick={() => createUsername(username)}>Create your Account</Button>
      </ButtonGroup>
    </>
  )
}

export default AccountPage
