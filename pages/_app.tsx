import type { AppProps } from 'next/app'
import { useAppEngine } from '~/app-engine/index'
import { useEffect } from 'react'
import { Container } from '~/app-ui/components/layout/index'
import { isBrowser } from '~/app-engine/library'
import '~/app-engine'

// NOTE: we are only using zustand on the client side for sharing state between components and ease optimistic ui updates.
//       we are not doing any hydration of the store from the server as in here. https://bit.ly/3uSGsm . its not necessary at the moment.
if (isBrowser) console.log(useAppEngine.getState())
// if (isBrowser && !useAppEngine.getState().app_engine_initialized) {
//   console.log('🗂 initializing app_engine state ...')
//   useAppEngine.setState({
//     app_engine_initialized: true,
//     app_engine_init_time: new Date(),
//   })
//   console.log('🗂 initialized app_engine state')
//   // initialize web3auth on first page load
//   useAppEngine.getState().web3authInit()
// }

function MyApp({ Component, pageProps }: AppProps) {
  const engine = useAppEngine()
  console.log('WAT')

  // log the store state on every update
  useEffect(() => {
    if (!useAppEngine.getState())
      console.log('✓ zustand state updated', JSON.parse(JSON.stringify(engine)))
  }, [engine])

  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
