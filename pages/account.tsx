import { styled } from '../app-view/styles/stitches.config'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from 'next'
import { useAppEngine } from '~/app-engine'
import { useState } from 'react'
import { withSessionSsr } from '~/app-server/session'
import { Accounts } from '~/app-engine/graphql/generated-sdk'
import { Button } from '~/app-view/components/base/Button'
import { Input } from '~/app-view/components/base/Input'
import { getGraphQLSdk } from '~/app-engine/graphql'

const ButtonGroup = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 450,
  paddingTop: '$small',
})

const ssrHandler = async ({
  req,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<AccountSSRProps>> => {
  const user = req.session.user
  if (!user)
    return {
      props: {
        user: null,
      },
    }

  const result = await getGraphQLSdk().Accounts({
    where: {
      username: { _eq: 'gaboesquivel' },
    },
  })

  return {
    props: {
      user: result.accounts[0],
    },
  }
}

interface AccountSSRProps {
  user: Accounts | null
}

export const getServerSideProps: GetServerSideProps = withSessionSsr<AccountSSRProps>(ssrHandler)

const AccountPage: NextPage<AccountSSRProps> = ({ user }) => {
  const { createUserAccount } = useAppEngine()
  const [username, setUsername] = useState('')
  return (
    <>
      <pre>{JSON.stringify({ user })}</pre>
      <Input
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        alt="Type your username"
        css={{ maxWidth: 450, width: '100%' }}
      />
      <ButtonGroup>
        <Button onClick={() => createUserAccount(username)}>Create your Account</Button>
      </ButtonGroup>
    </>
  )
}

export default AccountPage
