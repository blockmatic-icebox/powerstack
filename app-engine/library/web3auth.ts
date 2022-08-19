import camelcaseKeys from 'camelcase-keys'
import { chainlist } from '../static/chainlist'

// TODO= fitler supported networks.
export const getWeb3AuthChainConfig = () => camelcaseKeys(chainlist)
