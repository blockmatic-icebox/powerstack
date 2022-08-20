import { WalletLogin } from '~/app-view/components/modules/WalletLogin'
import { NextPage } from 'next'
import { useAppEngine } from '~/app-engine'
import { Button } from '~/app-view/components/base/Button'

<<<<<<< HEAD
const LoginPage: NextPage = () => {
  const { user, fetchUserBalances } = useAppEngine()
=======
const Home: NextPage = () => {
  const { user, create_session_error, fetchUserBalances } = useAppEngine()
>>>>>>> c79eab0 (impr: web3auth config)

  if (!user) return <WalletLogin />

  return (
    <>
      <Button
        onClick={() => {
          fetchUserBalances()
        }}
      >
        Update balances
      </Button>
      <pre>{JSON.stringify(user.user_addresses)}</pre>
      <div>
        <strong>ERRORS</strong>
        <pre>{create_session_error}</pre>
      </div>
      <ul>
        {user.user_addresses.map((address) => (
          <li key={address.address}>{address.balance?.toString()}</li>
        ))}
      </ul>
    </>
  )
}

export default LoginPage
