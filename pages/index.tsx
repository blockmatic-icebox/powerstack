import { useAppEngine } from '~/app-engine'
import { defaultGetServerSideProps, DefaultSsrPage } from '~/app-server/session-ssr'
import { formatAddress } from '~/app-view/library/uiux'

export const getServerSideProps = defaultGetServerSideProps

const HomePage: DefaultSsrPage = () => {
  const { user, coins } = useAppEngine()
  const user_data = { ...user, auth_jwt: user?.auth_jwt ? formatAddress(user?.auth_jwt) : 'none' }

  return (
    <>
      <h2>Home Sweet SSR Home</h2>
      <br />
      <hr />
      <br />
      <h3>user data ssr: </h3>
      <pre>{JSON.stringify(user_data, null, 2)}</pre>
      <h3>coins ssr: </h3>
      <pre>{JSON.stringify(coins, null, 2)}</pre>
    </>
  )
}

export default HomePage
