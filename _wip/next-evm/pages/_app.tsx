import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { IBM_Plex_Mono, Noto_Sans } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import { useState } from 'react'
import { useEffectOnce } from 'react-use'
import { WagmiConfig, configureChains, createClient } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

import { RainbowKitProvider, getDefaultWallets, midnightTheme } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

import { clientEnv } from '~/config/client'
import { GlobalContextProvider } from '~/context/global'
import '~/styles/MiniCalendar.css'
import '~/styles/globals.css'
import '~/styles/rainbowkit-custom.css'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  const { chains, provider } = configureChains(clientEnv.networks, [publicProvider()])
  const { connectors } = getDefaultWallets({ appName: 'Jave Exchange', chains })
  const wagmiClient = createClient({ autoConnect: true, connectors, provider })
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffectOnce(() => {
    setHasLoaded(true)
  })

  return (
    <GlobalContextProvider>
      <style jsx global>
        {`
          :root {
            --font-ibm: ${ibm.style.fontFamily};
            --font-noto: ${noto.style.fontFamily};
          }
          body {
            font-size: 14px;
          }
        `}
      </style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Jade Exchange" />
        <meta name="description" content="Invest in NFTs without holding NFTs." />
        <meta name="og:image" content="https://jade.exchange/jade-exchange.png" />
        <link rel="icon" href="/jade-logo.png" />
        {clientEnv.analytics.google ? (
          <>
            <Script
              id="google-tag-manager"
              src={`https://www.googletagmanager.com/gtag/js?id=${clientEnv.analytics.google}`}
              strategy="afterInteractive"
            />

            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${clientEnv.analytics.google}');`,
              }}
            />
          </>
        ) : null}
      </Head>
      {/* Refetch session every hour */}

      <SessionProvider session={pageProps.session} refetchInterval={60 * 60}>
        {hasLoaded ? (
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
              chains={chains}
              modalSize="compact"
              initialChain={chains[0].id}
              coolMode={true}
              theme={midnightTheme({
                borderRadius: 'medium',
              })}
            >
              <Component {...pageProps} />
            </RainbowKitProvider>
          </WagmiConfig>
        ) : null}
      </SessionProvider>
    </GlobalContextProvider>
  )
}

export const noto = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const ibm = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm',
  weight: ['300', '400', '500', '600', '700'],
})
