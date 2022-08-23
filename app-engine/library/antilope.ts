import AnchorLink, { APIClient } from 'anchor-link'

import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'
import { app_networks } from '../static/app-networks';

export const newAnchorLink = new AnchorLink({
  chains: [
    {
      chainId: app_networks.eosio.chain_id,
      nodeUrl: app_networks.eosio.rpc_target,
    },
  ],
  transport: new AnchorLinkBrowserTransport({}),
})

export const eosioApi = new APIClient({ url: app_networks.eosio.rpc_target }).v1.chain
