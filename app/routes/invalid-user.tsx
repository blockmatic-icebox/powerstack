import { useStore } from '~/store'
import { Header } from '~/components'

export default function Index() {
  const { user } = useStore()
  return (
    <div>
      <Header />
      <a href="/">Home</a>
      <h1>Invalid User</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
