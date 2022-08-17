import type { CustomChainConfig } from '@web3auth/base'

interface ChainConfig extends CustomChainConfig {
  networkId: number
}

export const web3auth_chain_config = {
  ethereum: {
    displayName: 'Ethereum Mainnet',
    chainNamespace: 'eip155',
    chainId: '0x1',
    rpcTarget: `https://mainnet.infura.io/v3/776218ac4734478c90191dde8cae483c`,
    blockExplorer: 'https://etherscan.io/',
    ticker: 'ETH',
    tickerName: 'Ethereum',
    networkId: 1,
  } as ChainConfig,
  rinkeby: {
    displayName: 'Rinkeby Testnet',
    chainNamespace: 'eip155',
    chainId: '0x4',
    networkId: 4,
    rpcTarget: `https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
    blockExplorer: 'https://rinkeby.etherscan.io/',
    ticker: 'ETH',
    tickerName: 'Ethereum',
  } as ChainConfig,
  solana: {
    chainNamespace: 'solana',
    rpcTarget: 'https://api.testnet.solana.com',
    blockExplorer: 'https://explorer.solana.com/',
    chainId: '',
    networkId: 0,
    displayName: 'Solana Mainnet',
    ticker: 'SOL',
    tickerName: 'Solana',
  } as ChainConfig,
  polygon: {
    chainNamespace: 'eip155',
    rpcTarget: 'https://polygon-rpc.com',
    blockExplorer: 'https://polygonscan.com/',
    chainId: '0x89',
    displayName: 'Polygon Mainnet',
    ticker: 'matic',
    tickerName: 'Matic',
    networkId: 137,
  } as ChainConfig,
  mumbai: {
    chainNamespace: 'eip155',
    rpcTarget: 'https://matic-testnet-archive-rpc.bwarelabs.com',
    blockExplorer: 'https://mumbai.polygonscan.com/',
    chainId: '0x13881', // '80001'
    displayName: 'Polygon Testnet',
    ticker: 'matic',
    tickerName: 'Matic',
    networkId: 80001,
  } as ChainConfig,
} as const
