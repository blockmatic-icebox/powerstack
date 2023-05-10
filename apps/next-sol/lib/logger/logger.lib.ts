import { clientEnv } from '~/config/client'

// TODO: add log levels and read it from env
export const logger = {
  log: (message?: any, ...optionalParams: any[]) =>
    clientEnv.debug && console.log(message, ...optionalParams),
  info: (message?: any, ...optionalParams: any[]) =>
    clientEnv.debug && console.info(message, ...optionalParams),
  error: (message?: any, ...optionalParams: any[]) =>
    clientEnv.debug && console.log(message, ...optionalParams),
}
