import { NextPage } from 'next'
import { useAppEngine } from '~/app-engine'

const HomePage: NextPage = () => {
  const { user } = useAppEngine()
  return (
    <>
      <h2>Home Sweet Home</h2>
      <br />
      <hr />
      <br />
      <h3>user data: </h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}

export default HomePage
