import { createContext, useContext, useLayoutEffect } from 'react'
import create, { createStore, UseBoundStore } from 'zustand'
import { AppEngineStoreApi, createAppEngine } from '~/app-engine'
import { exec_env } from '~/app-engine/library/exec-env'

// initial default state
// standard zustand store https://github.com/pmndrs/zustand
export let app_engine = createAppEngine()

export const AppEngineContext = createContext<UseBoundStore<AppEngineStoreApi>>(create(app_engine))

export const useAppEngine = () => {
  const store = useContext(AppEngineContext)
  return store
}

export const useCreateAppEngine = (initial_server_state: any = {}) => {
  // Server side code: For SSR & SSG, always use a new store.
  if (exec_env.is_node) return create(createAppEngine(initial_server_state))
  // End of server side code

  // Client side code:
  // Next.js always re-uses same store regardless of whether page is a SSR or SSG or CSR type.
  const is_reusing_store = Boolean(app_engine)
  app_engine = app_engine ?? createAppEngine(initial_server_state)

  // When next.js re-renders _app while re-using an older store, then replace current state with
  // the new state (in the next render cycle).
  // (Why next render cycle? Because react cannot re-render while a render is already in progress.
  // i.e. we cannot do a setState() as that will initiate a re-render)
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment (i.e. client or server)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    // initial_server_state is undefined for CSR pages. It is up to you if you want to reset
    // states on CSR page navigation or not. I have chosen not to, but if you choose to,
    // then add `initial_server_state = getDefaultInitialState()` here.
    if (initial_server_state && is_reusing_store) {
      app_engine.setState(
        {
          // re-use functions from existing store
          ...app_engine.getState(),
          // but reset all other properties.
          ...initial_server_state,
        },
        true, // replace states, rather than shallow merging
      )
    }
  })

  return create(app_engine)
}
