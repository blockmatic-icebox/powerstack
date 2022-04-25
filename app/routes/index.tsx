import { Link } from '@remix-run/react'
import { WalletLogin } from '~/components/WalletLogin'
import { useStore } from '~/store'
import { Header } from '~/components/Header'

export default function Index() {
  const { user, appconfig } = useStore()
  console.log(JSON.stringify(appconfig))
  return (
    <div>
      <Header />
      <h1>Welcome {user ? 'Back' : null} to PoweStack Remix</h1>
      <WalletLogin />
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}
