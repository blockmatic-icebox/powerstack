import jwtDecode from 'jwt-decode'

export const jwtIsExpired = (jwt: string | null | undefined): boolean => {
  if (!jwt) return true

  const decoded: any = jwtDecode(jwt)
  const now = new Date()
  const exp = new Date(decoded.exp * 1000)

  if (now > exp) {
    return true
  }

  return false
}

// refreshes the session by dispatching NextAuth visibilitychange event
// https://stackoverflow.com/questions/70405436/next-auth-how-to-update-the-session-client-side
export const reloadSession = () => {
  const event = new Event('visibilitychange')
  document.dispatchEvent(event)
}
