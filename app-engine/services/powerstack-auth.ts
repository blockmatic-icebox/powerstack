import { appconfig } from '../../environment'
import { PublicKey } from 'anchor-link'

interface RequestTokenAnchorEOSParams {
  identity: any
}

const getTokenAnchorEOS = async (data: RequestTokenAnchorEOSParams) => {
  const response = await fetch(`${appconfig.services.auth}/provider/anchor`, {
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
