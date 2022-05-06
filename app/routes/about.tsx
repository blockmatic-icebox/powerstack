import { useStore } from '~/store'
import { Header } from '~/components'

export default function Index() {
  const { user } = useStore()
  return (
    <div>
      <Header />
      <h1>Something</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
