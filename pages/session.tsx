import { defaultGetServerSideProps, DefaultSsrPage } from '~/app-server/session-ssr'
import ReactJson from 'react-json-view'
import { useAppEngine } from '~/app-engine'

export const getServerSideProps = defaultGetServerSideProps

const Profle: DefaultSsrPage = () => {
  const { user } = useAppEngine()
  return (
    <>
      <h1>My Session Info</h1>
      {user ? <ReactJson src={user} /> : <p>User not logged in</p>}
    </>
  )
}

export default Profle
