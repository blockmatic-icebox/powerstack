import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalContextProvider } from '~/context/global.context'
import { RootLayout } from '~/layouts/root'
import '~/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <GlobalContextProvider user={pageProps.user || null}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Refetch session every hour */}
      <SessionProvider session={pageProps.session} refetchInterval={60 * 60}>
        <Component {...pageProps} />
      </SessionProvider>
    </GlobalContextProvider>
  )
}
