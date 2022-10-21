import { AppEngineApi } from '../../store'

export {}

declare global {
  interface Window {
    phantom?: any
    ethereum?: any
    app_engine: AppEngineApi
  }
}
