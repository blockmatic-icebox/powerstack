export const chainConfig = {
  solanaMainnet: {
    chainNamespace: 'solana',
    rpcTarget: 'https://api.mainnet-beta.solana.com',
    blockExplorer: 'https://explorer.solana.com/',
    chainId: '0x1',
    displayName: 'Solana Mainnet Beta',
    ticker: 'SOL',
    tickerName: 'Solana',
  },
  solanaTestnet: {
    chainNamespace: 'solana',
    rpcTarget: 'https://api.testnet.solana.com',
    blockExplorer: 'https://explorer.solana.com',
    chainId: '0x2',
    displayName: 'testnet',
    ticker: 'sol',
    tickerName: 'solana',
  },
} as const
