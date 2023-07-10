import AnchorLink, { APIClient } from 'anchor-link'
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'

import { chainConfig } from '~/config/chain'

export const createNewAnchorLink = () =>
  new AnchorLink({
    chains: [
      {
        chainId: chainConfig.eosMainnet.chainId,
        nodeUrl: chainConfig.eosMainnet.rpcTarget,
      },
    ],
    transport: new AnchorLinkBrowserTransport({}),
  })

export const antelopeApi = new APIClient({
  url: chainConfig.eosMainnet.rpcTarget,
}).v1.chain
