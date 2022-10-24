import { AuthModal } from '~/ui/_legacy/components/shared/AuthWizard/components/AuthModal'
import { NextPage } from 'next'
import { useAppEngine } from '~/engine/_legacy/store'
import { CreateSessionParams } from '~/engine/_legacy/store/session-slice'
import { Button } from '~/ui/_legacy/components/base/Button'
import { defaultGetServerSideProps, DefaultSsrPage } from '~/server/session-ssr'

export const getServerSideProps = defaultGetServerSideProps

const LoginPage: DefaultSsrPage = () => {
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
      <pre>{JSON.stringify(user.addresses, null, 2)}</pre>
      {create_session_error && (
        <code>
          <strong>ERRORS</strong>
          <pre>{create_session_error}</pre>
        </code>
      )}
      <ul>
        {user.addresses.map((address) => (
          <li key={address.address}>Balance: {address.balance?.toString()}</li>
        ))}
      </ul>
    </>
  )
}

export default LoginPage
