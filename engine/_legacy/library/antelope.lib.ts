import AnchorLink, { APIClient } from 'anchor-link'

import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'
import { app_networks } from '../../static/app-networks'

export const createNewAnchorLink = () =>
  new AnchorLink({
    chains: [
      {
        chainId: app_networks.eos.chain_id,
        nodeUrl: app_networks.eos.rpc_target,
      },
    ],
    transport: new AnchorLinkBrowserTransport({}),
  })

export const antelope_api = new APIClient({ url: app_networks.eos.chain_id }).v1.chain
