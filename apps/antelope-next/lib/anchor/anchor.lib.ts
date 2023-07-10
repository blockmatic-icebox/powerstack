import AnchorLink from "anchor-link"
import AnchorLinkBrowserTransport from "anchor-link-browser-transport"

import { chainConfig } from "~/config/chain"

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
