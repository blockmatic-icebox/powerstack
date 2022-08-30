import '~/app-engine'
import type { AppProps } from 'next/app'
import { Layout } from '~/app-view/components/layout/Layout'
import { AppEngineProvider } from '~/app-engine'
import { AuthModal } from '~/app-view/components/modules/AuthModal'

function MyApp({ Component, pageProps }: AppProps) {
  // console.log('app_engine_server_state', pageProps.app_engine_server_state)
  return (
    <AppEngineProvider app_engine_server_state={pageProps.app_engine_server_state}>
      <AuthModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppEngineProvider>
  )
}

export default MyApp
