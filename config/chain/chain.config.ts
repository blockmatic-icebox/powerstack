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
  polygon: {
    chainNamespace: 'eip155',
    chainId: '0x89', // hex of 137, polygon mainnet
    rpcTarget: 'https://rpc.ankr.com/polygon',
    // Avoid using public rpcTarget in production.
    // Use services like Infura, Quicknode etc
    displayName: 'Polygon Mainnet',
    blockExplorer: 'https://polygonscan.com',
    ticker: 'MATIC',
    tickerName: 'Matic',
  } as CustomChainConfig,
  mumbai: {
    chainNamespace: 'eip155',
    chainId: '0x13881', // hex of 80001, polygon testnet
    rpcTarget: 'https://rpc.ankr.com/polygon_mumbai',
    displayName: 'Polygon Mainnet',
    blockExplorer: 'https://mumbai.polygonscan.com/',
    ticker: 'MATIC',
    tickerName: 'Matic',
  } as CustomChainConfig,
} as const
