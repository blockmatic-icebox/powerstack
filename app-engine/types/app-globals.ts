import { AppEngineApi } from '..'

export {}

declare global {
  interface Window {
    phantom?: any
    ethereum?: any
    app_engine: AppEngineApi
  }
}
