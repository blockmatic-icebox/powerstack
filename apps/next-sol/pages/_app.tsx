import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import 'react-calendar/dist/Calendar.css'

import { GlobalContextProvider } from '~/context/global/global.context'
import '~/styles/MiniCalendar.css'
import '~/styles/globals.css'
import '~/styles/popover.css'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <GlobalContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="GWT Network" />
        <meta name="description" content="GWT Multilevel Network" />
      </Head>
      {/* Refetch session every hour */}
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        {pageProps.preview ? (
          <div className="fixed top-0 left-0 z-50 p-4 text-white bg-red-500">Preview</div>
        ) : null}
        <NextNProgress color="#012C30" />
        <Component {...pageProps} />
      </SessionProvider>
    </GlobalContextProvider>
  )
}
