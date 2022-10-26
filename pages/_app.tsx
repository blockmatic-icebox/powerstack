import '~/ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { MainLayout } from '~/ui/layouts/main-layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
