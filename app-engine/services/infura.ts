import _ from 'lodash'

export const getInfuraChains = (infura_api_key: string) => {
  return [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ]
}

// TODO: review this whole chain_id and network data management
const supported_infura_network_ids = [1, 137, 80001, 4]
export const getInfuraChainData = (infura_network_id: number) => {
  if (_.isUndefined(_.find(supported_infura_network_ids, (id) => id === infura_network_id)))
    throw `unsupported infura network id ${infura_network_id}`
  const chain_data = getInfuraChains('d1113d056f834c6192955c2b26a14cc1').filter(
    ({ network_id }) => network_id === infura_network_id,
  )

  return chain_data[0]
}
