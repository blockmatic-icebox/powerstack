import { useAppEngine } from '~/engine/_legacy/store'
import { defaultGetServerSideProps, DefaultSsrPage } from '~/server/session-ssr'
import { formatAddress } from '~/ui/_legacy/library/uiux'

export const getServerSideProps = defaultGetServerSideProps

const SessionPage: DefaultSsrPage = () => {
  const { user } = useAppEngine()
  const user_data = { ...user, auth_jwt: user?.auth_jwt ? formatAddress(user?.auth_jwt) : 'none' }

  return (
    <>
      <h2>My Session</h2>
      <br />
      <hr />
      <br />
      <h3>user data: </h3>
      <pre>{JSON.stringify(user_data, null, 2)}</pre>
    </>
  )
}

export default SessionPage
