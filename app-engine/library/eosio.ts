// This file is exclusively for Utilty functions
// These fucntions must be pure functions and perform simple tasks
import AnchorLink from 'anchor-link'

import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'

export const newAnchorLink = new AnchorLink({
  chains: [
    {
      // TODO: fix me @RUBENBIX
      // chainId: client_args.services.eosio.eos_chain_id,
      // nodeUrl: client_args.services.eosio.chain_rpc,
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      nodeUrl: 'https://eos.greymass.com',
    },
  ],
  transport: new AnchorLinkBrowserTransport({}),
})
