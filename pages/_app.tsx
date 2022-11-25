import '~/styles/globals.css'

import type { AppProps } from 'next/app'

import { GlobalLayout } from '~/layouts/global'
import { GlobalContextProvider } from '~/context/global.context'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <GlobalContextProvider user={pageProps.user || null}>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </GlobalContextProvider>
  )
}
