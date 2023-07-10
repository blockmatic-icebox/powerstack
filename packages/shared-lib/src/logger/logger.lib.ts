

// TODO: add log levels and read it from env
const debug = true
export const logger = {
  log: (message?: any, ...optionalParams: any[]) => debug && console.log(message, ...optionalParams),
  info: (message?: any, ...optionalParams: any[]) => debug && console.info(message, ...optionalParams),
  error: (message?: any, ...optionalParams: any[]) => debug && console.log(message, ...optionalParams),
}
