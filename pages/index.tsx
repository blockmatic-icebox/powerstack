import { NextPage } from 'next'
import { useAppEngine } from '~/app-engine'
import { formatAddress } from '~/app-view/library/uiux'

const HomePage: NextPage = () => {
  const { user } = useAppEngine()
  /** 
   * NOTE - on refresh after login:
   * Error: Hydration failed because the initial UI does not match what was rendered on the server.
   * See more info here: https://nextjs.org/docs/messages/react-hydration-error
   */
  const user_data = { ...user, jwt: user?.jwt ? formatAddress(user?.jwt) : 'none' }
  console.log('user_data', user_data)

  return (
    <>
      <h2>Home Sweet Home</h2>
      <br />
      <hr />
      <br />
      <h3>user data: </h3>
      <pre>{JSON.stringify(user_data, null, 2)}</pre>
    </>
  )
}

export default HomePage
