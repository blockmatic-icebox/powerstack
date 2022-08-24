import type { AppProps } from 'next/app'
import { useAppEngine } from '~/app-engine/index'
import { useEffect } from 'react'
import '~/app-engine'
import { exec_env } from '~/app-engine/library/exec-env'
import { app_logger } from '~/app-engine/library/logger'
import { Layout } from '~/app-view/components/layout/Layout'
import { AuthModal } from '~/app-view/components/modules/AuthModal'

// NOTE: we are only using zustand on the client side for sharing state between components and ease optimistic ui updates.
//       we are not doing any hydration of the store from the server as in here. https://bit.ly/3uSGsm .
//       hydration its not necessary at the moment.

if (exec_env.is_browser) useAppEngine.getState().initializeAppEngine()

function MyApp({ Component, pageProps }: AppProps) {
  const engine = useAppEngine()
  console.log('pageProps', JSON.stringify(pageProps))

  if (pageProps.user && !engine.user) engine.setUser(pageProps.user)

  // log the store state on every update
  useEffect(() => {
    if (!useAppEngine.getState())
      app_logger.log('✓ zustand state updated', JSON.parse(JSON.stringify(engine)))
  }, [engine])

  return (
    <>
      <AuthModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
