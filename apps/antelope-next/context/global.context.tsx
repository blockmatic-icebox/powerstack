import React from 'react'

export const GlobalContext = React.createContext<GlobalState>({ user: null })

export const GlobalContextProvider = ({ children, ...value }: GlobalContextProviderProps) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
}

export function useGlobalContext() {
  return React.useContext(GlobalContext)
}

export interface GlobalContextProviderProps extends GlobalState {
  children: React.ReactNode
}

export type GlobalState = {}
