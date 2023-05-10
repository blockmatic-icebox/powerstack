import { toast } from 'react-toastify'

export function getPhatomProvider() {
  if ('phantom' in window) {
    const provider = window.phantom?.solana
    if (provider?.isPhantom) return provider
  }
  toast.error('Phantom extension is not installed')
}
