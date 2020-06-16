/* eslint-disable @typescript-eslint/no-explicit-any */
export type AnyPromise = (...args: any[]) => Promise<any>

export type Unwrap<T> = T extends Promise<infer U> ? U : T extends (...args: any[]) => Promise<infer V> ? V : T

type ExtendableError = Error & Record<string, any>

export type State<Result> = {
  isLoading: boolean
  result: Result | null
  error: ExtendableError | null
  wasSuccessful: boolean
}

export type Action<Result> = { type: 'start' } | { type: 'succeed'; payload: Result } | { type: 'fail'; payload: Error }
