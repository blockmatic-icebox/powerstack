import { State, Action } from './types'

const createReducer = <Result>() => (state: State<Result>, action: Action<Result>): State<Result> => {
  if (action.type === 'start') {
    return {
      loading: true,
      result: null,
      error: null,
      success: false,
    }
  }

  if (action.type === 'succeed') {
    return {
      loading: false,
      result: action.payload,
      error: null,
      success: true,
    }
  }

  if (action.type === 'fail') {
    return {
      loading: false,
      result: null,
      error: action.payload,
      success: false,
    }
  }

  return state
}

export default createReducer
