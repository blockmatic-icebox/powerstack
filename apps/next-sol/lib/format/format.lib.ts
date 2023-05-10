export const formatAddress = (key: string) => `${key.slice(0, 4)}...${key.slice(-4)}`

export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const convertSeconds = (seconds: number) => {
  const result = new Date(seconds * 1000).toISOString().slice(11, 19)
  return result
}

export const usdFormatter = ({value, decimals = 0}: {value: number, decimals?: number}) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: decimals,
  }).format(value)
}
