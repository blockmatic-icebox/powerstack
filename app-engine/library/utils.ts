// This file is exclusively for Utilty functions
// These fucntions must be pure functions and perform simple tasks
import AnchorLink from 'anchor-link'
import _ from 'lodash'
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'

export const noop = () => {}
export const isBrowser = typeof window !== 'undefined'
export const isNode = !isBrowser
export const userAgent = isBrowser ? _.get(window, 'navigator.userAgent') : ''
export const ethereum = isBrowser && _.get(window, 'ethereum')
export const isAndroid = /(Android)/i.test(userAgent)
export const isIphone = /(iPhone|iPod)/i.test(userAgent)
export const isIpad = /(iPad)/i.test(userAgent)
export const isMobile = isIphone || isAndroid
// A mobile browser with ethereum we assume it's Metamask Browser
export const isMetamask = isMobile && ethereum
export const isPhantom = isBrowser && _.has(window, 'solana.isPhantom')
export const solana = isBrowser && _.get(window, 'solana')

export const formatAddress = (key: string) => `${key.slice(0, 4)}...${key.slice(-4)}`

export const base64Encode = (obj: {}) => Buffer.from(JSON.stringify(obj)).toString('base64')

export const base64Decode = (str: string) => JSON.parse(Buffer.from(str, 'base64').toString())

export function getBase64(file: File): Promise<any> {
  return new Promise((resolve, rejects) => {
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      resolve(reader?.result)
    }
    reader.onerror = function (error) {
      rejects(error)
    }
  })
}

export const copyToClipboard = (text: string) => {
  const textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
}

export const newAnchorLink = new AnchorLink({
  chains: [
    {
      // TODO: fix me @RUBENBIX
      // chainId: client_args.services.eosio.eos_chain_id,
      // nodeUrl: client_args.services.eosio.chain_rpc,
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      nodeUrl: 'https://eos.greymass.com',
    },
  ],
  transport: new AnchorLinkBrowserTransport({}),
})
