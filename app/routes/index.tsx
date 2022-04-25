import { Link } from '@remix-run/react'
import { WalletLogin } from '~/components/WalletLogin'
import { useStore } from '~/store'
import { Header } from '~/components/Header'

export default function Index() {
  const { user, appconfig } = useStore()
  return (
    <div>
      <Header />
      <h1>Welcome {user ? 'Back' : null} to PoweStack Remix</h1>
      <WalletLogin />
      <ul>
        <li>
          <Link to="/jokes">Jokes</Link>
        </li>
        <li>
          <Link to="/jokes-error">Jokes: Error</Link>
        </li>
      </ul>
    </div>
  )
}
