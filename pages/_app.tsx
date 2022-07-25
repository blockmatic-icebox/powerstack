import type { AppProps } from 'next/app'
import { useStore } from '../store'
import { useEffect } from 'react'
import { isBrowser } from '../library/utils'
import { Container } from 'components/layout'

// NOTE: we are only using zustand on the client side for sharing state between components and ease optimistic ui updates.
//       we are not doing any hydration of the store from the server as in here. https://bit.ly/3uSGsm . its not necessary at the moment.
if (isBrowser && !useStore.getState().zustand_initialized) {
  useStore.setState({
    zustand_initialized: true,
    zustand_init_time: new Date(),
  })
  console.log('🗂 initialized zustand state')
  // initialize web3auth on first page load
  // useStore.getState().web3authInit()
}

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore()

  // log the store state on every update
  useEffect(() => {
    if (!useStore.getState())
      console.log(
        '✓ zustand state updated',
        JSON.parse(JSON.stringify(useStore.getState())),
      )
  }, [store])

  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
