import _ from 'lodash'

export const platform = (() => {
  const isBrowser = typeof window !== 'undefined'
  const userAgent = isBrowser ? _.get(window, 'navigator.userAgent') : ''
  const isAndroid = /(Android)/i.test(userAgent)
  const isPhone = /(iPhone|iPod)/i.test(userAgent)
  const isIpad = /(iPad)/i.test(userAgent)
  const isMobile = isPhone || isAndroid
  const solana = isBrowser && _.get(window, 'solana')
  const isPhantom = isBrowser && _.has(window, 'solana.isPhantom')

  return {
    userAgent,
    isBrowser,
    isNode: !isBrowser,
    isPhone,
    isIpad,
    isMobile,
    isPhantom,
    solana,
  }
})()
