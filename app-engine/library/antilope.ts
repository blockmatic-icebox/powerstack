import AnchorLink from 'anchor-link'

import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'

export const newAnchorLink = new AnchorLink({
  chains: [
    {
      // TODO: fix me @RUBENBIX
      // chainId: app_args.services.antilope.eos_chain_id,
      // nodeUrl: app_args.services.antilope.chain_rpc,
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      nodeUrl: 'https://eos.greymass.com',
    },
  ],
  transport: new AnchorLinkBrowserTransport({}),
})
