import { CHAIN_NAMESPACES, CustomChainConfig } from '@web3auth/base'

export const chainConfig = {
  solanaMainnet: {
    chainNamespace: CHAIN_NAMESPACES.SOLANA,
    rpcTarget: 'https://api.mainnet-beta.solana.com',
    blockExplorer: 'https://explorer.solana.com/',
    chainId: '0x1',
    displayName: 'Solana Mainnet Beta',
    ticker: 'SOL',
    tickerName: 'Solana',
  } as CustomChainConfig,
  solanaTestnet: {
    chainNamespace: CHAIN_NAMESPACES.SOLANA,
    rpcTarget: 'https://api.testnet.solana.com',
    blockExplorer: 'https://explorer.solana.com',
    chainId: '0x2',
    displayName: 'testnet',
    ticker: 'sol',
    tickerName: 'solana',
  } as CustomChainConfig,
} as const
