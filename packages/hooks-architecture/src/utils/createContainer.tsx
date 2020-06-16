import React, { createContext, useContext } from 'react'

export interface ContainerProviderProps<State = void> {
  initialState?: State
}

export interface Container<Value, State = void> {
  Provider: React.ComponentType<ContainerProviderProps<State>>
  useContainer: () => Value
}

const EMPTY: unique symbol = Symbol('__EMPTY__')

const createContainer = <Value, State = void>(
  useHook: (initialState?: State) => Value,
  errorMsg = 'Component must be wrapped with <Container.Provider />',
): Container<Value, State> => {
  const Context = createContext<Value | typeof EMPTY>(EMPTY)

  const Provider: React.FC<ContainerProviderProps<State>> = ({ initialState, children }) => {
    const value = useHook(initialState)
    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  const useContainer = (): Value => {
    const value = useContext(Context)
    if (value === EMPTY) {
      throw new Error(errorMsg)
    }
    return value
  }

  return { Provider, useContainer }
}

export default createContainer
