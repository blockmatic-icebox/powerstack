import React from 'react'
import { useSetState } from 'react-use'

const defaultState = {
  setGlobalState: (p: Partial<GlobalState>) => {},
  showSignUp: false,
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
  setGlobalState: (p: Partial<GlobalState>) => void
}
