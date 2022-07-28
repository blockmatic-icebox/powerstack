import type { AppProps } from 'next/app'
import { useAppEngine } from '~/app-engine/index'
import { useEffect } from 'react'
import { Container } from '~/components/layout/index'
import '~/app-engine'

function MyApp({ Component, pageProps }: AppProps) {
  const store = useAppEngine()

  // log the store state on every update
  useEffect(() => {
    if (!useAppEngine.getState())
      console.log('✓ zustand state updated', JSON.parse(JSON.stringify(useAppEngine.getState())))
  }, [store])

  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
