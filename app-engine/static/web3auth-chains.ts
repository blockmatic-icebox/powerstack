import type { CustomChainConfig } from '@web3auth/base'

export const web3auth_chain_config = {
  eth: {
    displayName: 'Ethereum Mainnet',
    chainNamespace: 'eip155',
    chainId: '0x1',
    rpcTarget: `https://mainnet.infura.io/v3/776218ac4734478c90191dde8cae483c`,
    blockExplorer: 'https://etherscan.io/',
    ticker: 'ETH',
    tickerName: 'Ethereum',
  } as CustomChainConfig,
  rinkeby: {
    displayName: 'Rinkeby Testnet',
    chainNamespace: 'eip155',
    chainId: '0x4',
    rpcTarget: `https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
    blockExplorer: 'https://rinkeby.etherscan.io/',
    ticker: 'ETH',
    tickerName: 'Ethereum',
  } as CustomChainConfig,
  solana: {
    chainNamespace: 'solana',
    rpcTarget: 'https://api.mainnet-beta.solana.com',
    blockExplorer: 'https://explorer.solana.com/',
    chainId: '0x1',
    displayName: 'Solana Mainnet',
    ticker: 'SOL',
    tickerName: 'Solana',
  } as CustomChainConfig,
  polygon: {
    chainNamespace: 'eip155',
    rpcTarget: 'https://polygon-rpc.com',
    blockExplorer: 'https://polygonscan.com/',
    chainId: '0x89',
    displayName: 'Polygon Mainnet',
    ticker: 'matic',
    tickerName: 'Matic',
  } as CustomChainConfig,
  mumbai: {
    chainNamespace: 'eip155',
    rpcTarget: 'https://matic-testnet-archive-rpc.bwarelabs.com',
    blockExplorer: 'https://mumbai.polygonscan.com/',
    chainId: '0x13881', // '80001'
    displayName: 'Polygon Testnet',
    ticker: 'matic',
    tickerName: 'Matic',
  },
} as const
