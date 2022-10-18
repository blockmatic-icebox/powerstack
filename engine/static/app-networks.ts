import { CHAIN_NAMESPACES } from '@web3auth/base'
import { AppNetworks } from '../types/app-engine'
import { app_args } from '../config/app-arguments'

/*  NOTE:
We need to handle attributes form all type of chains under AppNetwork strucutre. Solana, EVM and Antelope for staters.

Ethereum networks have two identifiers, a network ID and a chain ID. Although they often have the same value, they have different uses.

Peer-to-peer communication between nodes uses the network ID, while the transaction signature process uses the chain ID.

EIP-155 introduced using the chain ID as part of the transaction signing process to protect against transaction replay attacks.

For most networks, including Mainnet and the public testnets, the network ID and the chain ID are the same,
 with the network ID defaulting to the chain ID, as specified in the genesis file.
*/

export const app_networks: AppNetworks = {
  ethereum: {
    display_name: 'Ethereum Mainnet',
    chain_namespace: CHAIN_NAMESPACES.EIP155,
    chain_id: '0x1',
    rpc_target: `https://mainnet.infura.io/v3/776218ac4734478c90191dde8cae483c`,
    block_explorer: 'https://etherscan.io/',
    ticker: 'ETH',
    ticker_name: 'Ethereum',
    network_id: 1,
  },
  rinkeby: {
    display_name: 'Rinkeby Testnet',
    chain_namespace: CHAIN_NAMESPACES.EIP155,
    chain_id: '0x4',
    network_id: 4,
    // which one should be? 'https://rinkeby.infura.io/v3/d1113d056f834c6192955c2b26a14cc1'
    rpc_target: `https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
    block_explorer: 'https://rinkeby.etherscan.io/',
    ticker: 'rinkETH',
    ticker_name: 'Ethereum',
  },
  solana: {
    chain_namespace: CHAIN_NAMESPACES.SOLANA,
    rpc_target: 'https://api.testnet.solana.com',
    block_explorer: 'https://explorer.solana.com/',
    chain_id: '',
    network_id: 0,
    display_name: 'Solana Mainnet',
    ticker: 'SOL',
    ticker_name: 'Solana',
  },
  polygon: {
    chain_namespace: CHAIN_NAMESPACES.EIP155,
    rpc_target: 'https://polygon-rpc.com',
    block_explorer: 'https://polygonscan.com/',
    chain_id: '0x89',
    display_name: 'Polygon Mainnet',
    ticker: 'matic',
    ticker_name: 'Matic',
    network_id: 137,
  },
  mumbai: {
    chain_namespace: CHAIN_NAMESPACES.EIP155,
    rpc_target: 'https://matic-testnet-archive-rpc.bwarelabs.com',
    block_explorer: 'https://mumbai.polygonscan.com/',
    chain_id: '0x13881', // '80001'
    display_name: 'Polygon Testnet',
    ticker: 'matic',
    ticker_name: 'Matic',
    network_id: 80001,
  },
  eos: {
    chain_namespace: CHAIN_NAMESPACES.OTHER,
    rpc_target: 'https://eos.blockmatic.io',
    block_explorer: 'https://bloks.io/',
    chain_id: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    display_name: 'EOS',
    ticker: 'EOS',
    ticker_name: 'EOS',
    network_id: 0,
  },
  wax: {
    chain_namespace: CHAIN_NAMESPACES.OTHER,
    rpc_target: 'https://wax.blockmatic.io',
    block_explorer: 'https://bloks.io/',
    chain_id: 'xx',
    display_name: 'WAX',
    ticker: 'WAX',
    ticker_name: 'WAX',
    network_id: 0,
  },
}
