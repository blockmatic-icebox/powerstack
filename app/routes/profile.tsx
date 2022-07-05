import { useStore } from '~/store'
import { Header } from '~/components'
import { useAuth } from '~/hooks/useAuth'

export default function Index() {
  const { user } = useStore()
  const { logout } = useAuth()
  return (
    <div>
      <Header />
      <a href="/">Home</a>
      <button onClick={logout}>Logout</button>
      <h1>Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
