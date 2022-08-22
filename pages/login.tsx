import { AuthModal } from '~/app-view/components/modules/AuthModal'
import { NextPage } from 'next'
import { useAppEngine } from '~/app-engine'
import { Button } from '~/app-view/components/base/Button'

const LoginPage: NextPage = () => {
  const { user, create_session_error, fetchUserBalances } = useAppEngine()

  if (!user) return <AuthModal />

  return (
    <>
      <Button
        onClick={() => {
          fetchUserBalances()
        }}
      >
        Update balances
      </Button>
      <pre>{JSON.stringify(user.user_addresses, null, 2)}</pre>
      {create_session_error && (
        <code>
          <strong>ERRORS</strong>
          <pre>{create_session_error}</pre>
        </code>
      )}
      <ul>
        {user.user_addresses.map((address) => (
          <li key={address.address}>Balance: {address.balance?.toString()}</li>
        ))}
      </ul>
    </>
  )
}

export default LoginPage
