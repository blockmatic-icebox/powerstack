import { defaultGetServerSideProps, DefaultSsrPage } from '~/app-server/session-ssr'

export const getServerSideProps = defaultGetServerSideProps

const Profle: DefaultSsrPage = () => {
  return <h1>Hi! This should be your profile... or not 🕵️</h1>
}

export default Profle
