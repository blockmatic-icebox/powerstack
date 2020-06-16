import { State, Action } from './types'

const createReducer = <Result>() => (state: State<Result>, action: Action<Result>): State<Result> => {
  if (action.type === 'start') {
    return {
      isLoading: true,
      result: null,
      error: null,
      wasSuccessful: false,
    }
  }

  if (action.type === 'succeed') {
    return {
      isLoading: false,
      result: action.payload,
      error: null,
      wasSuccessful: true,
    }
  }

  if (action.type === 'fail') {
    return {
      isLoading: false,
      result: null,
      error: action.payload,
      wasSuccessful: false,
    }
  }

  return state
}

export default createReducer
