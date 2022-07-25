import { createContext } from 'react'

export interface ClientStyleContextData {
  stylesheet: string
}

export const ClientStyleContext = createContext<ClientStyleContextData>({
  stylesheet: '',
})
