import { app_args } from "~/app-config/app-arguments"
import { ChainConfig, web3auth_chain_config } from "../static/web3auth-chains"

export type InfraChainConfigNativeCurrency = {
  symbol: string
  name: string
  decimals: string
  contractAddress: string
  balance: string
}
export interface InfraChainConfig {
  name: string
  short_name: string
  chain: string
  network: string
  chain_id: number
  hex_chain_id: string
  network_id: number
  rpc_url: string
  native_currency: InfraChainConfigNativeCurrency
  chain_config: ChainConfig
}

export type InfraKeyChainConfig = {
  readonly ethereum: InfraChainConfig;
  readonly rinkeby: InfraChainConfig;
  readonly solana: InfraChainConfig;
  readonly polygon: InfraChainConfig;
  readonly mumbai: InfraChainConfig;
}

export const getInfuraChains = (infura_api_key: string): InfraKeyChainConfig => {
  return {
    ethereum: {
      name: 'Ethereum Mainnet',
      short_name: 'eth',
      chain: 'ETH',
      network: 'mainnet',
      chain_id: 1,
      hex_chain_id: '0x1',
      network_id: 1,
      rpc_url: 'https://mainnet.infura.io/v3/' + infura_api_key,
      native_currency: {
        symbol: 'ETH',
        name: 'Ether',
        decimals: '18',
        contractAddress: '',
        balance: '',
      },
      chain_config: web3auth_chain_config.ethereum,
    },
    polygon: {
      name: 'Polygon Mainnet',
      short_name: 'MATIC',
      chain: '',
      network: '',
      chain_id: 137,
      hex_chain_id: '',
      network_id: 137,
      rpc_url: 'https://polygon-rpc.com/',
      native_currency: {
        symbol: 'MATIC',
        name: 'MATIC',
        decimals: '18',
        contractAddress: '',
        balance: '',
      },
      chain_config: web3auth_chain_config.polygon
    },
    mumbai: {
      name: 'Polygon Tesnet',
      short_name: 'Mumbai',
      chain: '',
      network: '',
      chain_id: 80001,
      hex_chain_id: '',
      network_id: 80001,
      rpc_url: 'https://rpc-mumbai.maticvigil.com',
      native_currency: {
        symbol: 'MATIC',
        name: 'MATIC',
        decimals: '18',
        contractAddress: '',
        balance: '',
      },
      chain_config: web3auth_chain_config.mumbai
    },
    rinkeby: {
      name: 'Ethereum Rinkeby',
      short_name: 'rin',
      chain: 'ETH',
      network: 'rinkeby',
      chain_id: 4,
      hex_chain_id: '0x4',
      network_id: 4,
      rpc_url: 'https://rinkeby.infura.io/v3/' + infura_api_key,
      native_currency: {
        symbol: 'ETH',
        name: 'Ether',
        decimals: '18',
        contractAddress: '',
        balance: '',
      },
      chain_config: web3auth_chain_config.rinkeby,
    },
    solana: {
      name: 'Solana Mainnet',
      short_name: 'rin',
      chain: 'ETH',
      network: 'rinkeby',
      chain_id: 4,
      hex_chain_id: '0x4',
      network_id: 4,
      rpc_url: 'https://rinkeby.infura.io/v3/' + infura_api_key,
      native_currency: {
        symbol: 'ETH',
        name: 'Ether',
        decimals: '18',
        contractAddress: '',
        balance: '',
      },
      chain_config: web3auth_chain_config.rinkeby,
    },
  }
}

// TODO: review this whole chain_id and network data management
const supported_infura_networks = app_args.features.supported_networks.split(',')

export const getInfraChainData = (infura_network: keyof InfraKeyChainConfig) => {
  if (!Boolean(supported_infura_networks.find((id) => id === infura_network))) throw `Unsupported Infura Network ${infura_network}`

  const chain_data = getInfuraChains(app_args.services.web3auth_infra_api_key)[infura_network as keyof InfraKeyChainConfig]

  return chain_data
}
