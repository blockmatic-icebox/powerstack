import { styled } from '../ui/styles/stitches.config'
import { useAppEngine } from '~/engine'
import { useState } from 'react'
import { Button } from '~/ui/components/base/Button'
import { Input } from '~/ui/components/base/Input'
import { defaultGetServerSideProps, DefaultSsrPage } from '~/server/session-ssr'

const ButtonGroup = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 450,
  paddingTop: '$small',
})

export const getServerSideProps = defaultGetServerSideProps

const AccountPage: DefaultSsrPage = () => {
  const { createUsername, user } = useAppEngine()
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
