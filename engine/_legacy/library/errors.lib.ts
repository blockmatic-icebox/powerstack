export class MissingEnvVarError extends Error {
  name = 'MissingEnvVarError'
  constructor(envVar: string) {
    super(`${envVar} missing in environment configuration`)
  }
}
export class InvalidAssetIdError extends Error {
  name = 'InvalidAssetIdError'
  message = 'Invalid asset_id'
}

export class ChainNotConfiguredError extends Error {
  name = 'ChainNotConfigured'
  message = 'Chain not configured'
}

export class ConnectorAlreadyConnectedError extends Error {
  name = 'ConnectorAlreadyConnectedError'
  message = 'Connector already connected'
}

export class ConnectorNotFoundError extends Error {
  name = 'ConnectorNotFoundError'
  message = 'Connector not found'
}

export class SwitchChainError extends Error {
  name = 'SwitchChainError'
  message = 'Error switching chain'
}

export class UserRejectedRequestError extends Error {
  name = 'UserRejectedRequestError'
  message = 'User rejected request'
}
