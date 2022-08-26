import '~/app-engine'
import type { AppProps } from 'next/app'
import { exec_env } from '~/app-engine/library/exec-env'
import { app_logger } from '~/app-engine/library/logger'
import { Layout } from '~/app-view/components/layout/Layout'
import { AuthModal } from '~/app-view/components/modules/AuthModal'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { AppEngineContext, useCreateAppEngine } from '~/app-view/hooks/useAppEngine'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const app_engine = useCreateAppEngine({ user: pageProps.user })
  // devtools https://github.com/beerose/simple-zustand-devtools
  if (exec_env.is_browser) mountStoreDevtool('AppEngine', app_engine)

  // log the store state on every update
  useEffect(() => {
    app_logger.log('✓ zustand state updated', JSON.parse(JSON.stringify(app_engine)))
  }, [app_engine])

  return (
    <AppEngineContext.Provider value={app_engine}>
      <AuthModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppEngineContext.Provider>
  )
}

export default MyApp
