import { NextPage } from 'next'
import { defaultGetServerSideProps, DefaultSsrPage } from '~/app-server/session-ssr'

export const getServerSideProps = defaultGetServerSideProps

const Marketplace: DefaultSsrPage = () => {
  return <h1>You can buy things here 🤑</h1>
}

export default Marketplace
