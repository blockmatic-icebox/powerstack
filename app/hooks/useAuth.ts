import { useFetcher } from '@remix-run/react'

export const useAuth = () => {
  const fetcher = useFetcher()
  const logout = () => {
    fetcher.submit(
      {},
      {
        method: 'post',
        action: `/actions/logout`,
      },
    )
  }

  return { logout }
}
