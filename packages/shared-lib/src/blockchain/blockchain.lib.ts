// shortens crptocurrency addresses for display
export function formatAddress(key: string) {
  return `${key.slice(0, 4)}...${key.slice(-4)}`
}
