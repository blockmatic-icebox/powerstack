import { CHAIN_NAMESPACES, CustomChainConfig } from '@web3auth/base'

export interface ChainConfig extends CustomChainConfig {
  networkId: number
}

export type ChainKeyConfig = {
  readonly ethereum: ChainConfig;
  readonly rinkeby: ChainConfig;
  readonly solana: ChainConfig;
  readonly polygon: ChainConfig;
  readonly mumbai: ChainConfig;
}

export const web3auth_chain_config: ChainKeyConfig = {
  ethereum: {
    displayName: 'Ethereum Mainnet',
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x1',
    rpcTarget: `https://mainnet.infura.io/v3/776218ac4734478c90191dde8cae483c`,
    blockExplorer: 'https://etherscan.io/',
    ticker: 'ETH',
    tickerName: 'Ethereum',
    networkId: 1,
  },
  rinkeby: {
    displayName: 'Rinkeby Testnet',
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x4',
    networkId: 4,
    // which one should be? 'https://rinkeby.infura.io/v3/d1113d056f834c6192955c2b26a14cc1'
    rpcTarget: `https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
    blockExplorer: 'https://rinkeby.etherscan.io/',
    ticker: 'rinkETH',
    tickerName: 'Ethereum',
  },
  solana: {
    chainNamespace: CHAIN_NAMESPACES.SOLANA,
    rpcTarget: 'https://api.testnet.solana.com',
    blockExplorer: 'https://explorer.solana.com/',
    chainId: '',
    networkId: 0,
    displayName: 'Solana Mainnet',
    ticker: 'SOL',
    tickerName: 'Solana',
  },
  polygon: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    rpcTarget: 'https://polygon-rpc.com',
    blockExplorer: 'https://polygonscan.com/',
    chainId: '0x89',
    displayName: 'Polygon Mainnet',
    ticker: 'matic',
    tickerName: 'Matic',
    networkId: 137,
  },
  mumbai: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    rpcTarget: 'https://matic-testnet-archive-rpc.bwarelabs.com',
    blockExplorer: 'https://mumbai.polygonscan.com/',
    chainId: '0x13881', // '80001'
    displayName: 'Polygon Testnet',
    ticker: 'matic',
    tickerName: 'Matic',
    networkId: 80001,
  },
}
