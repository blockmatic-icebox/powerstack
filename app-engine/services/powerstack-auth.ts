
import { PublicKey } from 'anchor-link'
import { app_engine } from '../index'
interface RequestTokenAnchorEOSParams {
  identity: any
}

const getTokenAnchorEOS = async (data: RequestTokenAnchorEOSParams) => {
  const response = await fetch(`${app_engine.getState().app_engine_config.services.auth_api}/provider/anchor`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return await response.json()
}

export const powerstackAuthService = {
  getTokenAnchorEOS,
}
