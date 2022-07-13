import React, { createContext } from 'react'
import { RemixBrowser } from '@remix-run/react'
import { hydrate } from 'react-dom'
import { getGeneratedStylesheet } from '~/styles'
import { ClientStyleContext } from './styles/styles.context'
interface ClientCacheProviderProps {
  children: React.ReactNode
}

const generated_stylesheet = getGeneratedStylesheet()
console.log('sssstyyyllesss', generated_stylesheet)

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [stylesheet] = React.useState(generated_stylesheet)

  return (
    <ClientStyleContext.Provider value={{ stylesheet }}>
      {children}
    </ClientStyleContext.Provider>
  )
}

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document,
)
