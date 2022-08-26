import type { AppProps } from 'next/app'
import { app_engine, useAppEngine } from '~/app-engine/index'
import { useEffect } from 'react'
import '~/app-engine'
import { exec_env } from '~/app-engine/library/exec-env'
import { app_logger } from '~/app-engine/library/logger'
import { Layout } from '~/app-view/components/layout/Layout'
import { AuthModal } from '~/app-view/components/modules/AuthModal'

if (exec_env.is_browser) useAppEngine.getState().initializeAppEngine()

function MyApp({ Component, pageProps }: AppProps) {
  console.log('app_engine_server_state', pageProps.app_engine_server_state)
  app_engine.setState(pageProps.app_engine_server_state)
  const engine = useAppEngine()

  // log the store state on every update
  // useEffect(() => {
  //   app_logger.log('✓ zustand state updated', JSON.parse(JSON.stringify(engine)))
  // }, [engine])

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
