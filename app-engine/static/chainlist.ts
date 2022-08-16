import { AppNetwork } from '../types/app-engine'

/*  NOTE:
We need to handle attributes form all type of chains under AppNetwork strucutre. Solana, EVM and EOSIO for staters.

Ethereum networks have two identifiers, a network ID and a chain ID. Although they often have the same value, they have different uses.

Peer-to-peer communication between nodes uses the network ID, while the transaction signature process uses the chain ID.

EIP-155 introduced using the chain ID as part of the transaction signing process to protect against transaction replay attacks.

For most networks, including Mainnet and the public testnets, the network ID and the chain ID are the same,
 with the network ID defaulting to the chain ID, as specified in the genesis file.
*/

export const chainlist: AppNetwork[] = []
