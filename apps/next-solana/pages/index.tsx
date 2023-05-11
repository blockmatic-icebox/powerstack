import { GetServerSideProps } from 'next'

import { RootLayout } from '~/layouts/root'

export default function Home() {
  return <RootLayout header={<p>Work in progress</p>} main={<></>} />
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return {
    props: {},
  }
}

interface HomeProps {}
