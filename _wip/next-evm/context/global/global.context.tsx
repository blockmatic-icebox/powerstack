import React, { useEffect } from 'react'
import { useSetState } from 'react-use'

const defaultState = {
  setGlobalState: (p: Partial<GlobalState>) => {},
  showSignUp: false,
  equity: '0',
}

export const GlobalContext = React.createContext<GlobalState>(defaultState)

export const GlobalContextProvider = ({
  children,
  ...initialState
}: GlobalContextProviderProps) => {
  const [state, setGlobalState] = useSetState<GlobalState>({
    ...defaultState,
    ...initialState,
  })

  useEffect(() => {
    setGlobalState({ equity: localStorage.getItem('equity') || '0' })
  }, [])

  return (
    <GlobalContext.Provider value={{ ...state, setGlobalState }}>{children}</GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  return React.useContext(GlobalContext)
}

export interface GlobalContextProviderProps {
  children: React.ReactNode
}

export type GlobalState = {
  showSignUp: boolean
  equity: string
  setGlobalState: (p: Partial<GlobalState>) => void
}
