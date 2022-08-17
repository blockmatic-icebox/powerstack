import _ from 'lodash'

export const habitat = (() => {
  const is_browser = typeof window !== 'undefined'
  const user_agent = is_browser ? _.get(window, 'navigator.userAgent') : ''
  const is_android = /(Android)/i.test(user_agent)
  const is_iphone = /(iPhone|iPod)/i.test(user_agent)
  const is_ipad = /(iPad)/i.test(user_agent)
  const is_mobile = is_iphone || is_android
  const solana = is_browser && _.get(window, 'solana')
  const ethereum = is_browser && _.get(window, 'ethereum')
  // A mobile browser with ethereum we assume it's Metamask Browser,
  const is_metamask_browser = is_mobile && ethereum
  const has_phantom = is_browser && _.has(window, 'solana.isPhantom')

  return {
    is_browser,
    is_node: !is_browser,
    user_agent,
    is_iphone,
    is_ipad,
    is_mobile,
    is_metamask_browser,
    has_phantom,
    solana,
    ethereum,
  }
})()
