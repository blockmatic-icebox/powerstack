import useIsMounted from 'hooks/useIsMounted'
import { useCallback, useReducer } from 'react'

import createReducer from './reducer'
import { AnyPromise, Unwrap, State } from './types'

export default function useAsyncCallback<Cb extends AnyPromise, Result = Unwrap<Cb>>(cb: Cb): [Cb, State<Result>] {
  const isMounted = useIsMounted()

  const [state, dispatch] = useReducer(createReducer<Result>(), {
    loading: false,
    result: null,
    error: null,
    success: false,
  })

  const exec = useCallback(
    async (...args: Parameters<Cb>) => {
      try {
        dispatch({ type: 'start' })
        const result = await cb(...args)
        if (isMounted.current) dispatch({ type: 'succeed', payload: result })
        return result
      } catch (error) {
        if (isMounted.current) dispatch({ type: 'fail', payload: error })
        throw error
      }
    },
    [cb, isMounted],
  ) as Cb

  return [exec, state]
}
