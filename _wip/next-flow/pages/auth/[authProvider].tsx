import { get } from 'lodash'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const SignInPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const authProvider = get(router.query, 'authProvider')

  useEffect(() => {
    if (!authProvider) return
    if (!(status === 'loading') && !session) void signIn(authProvider as string)
    if (session) window.close()
  }, [session, status, authProvider])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        left: 0,
        top: 0,
        background: 'white',
      }}
    ></div>
  )
}

export default SignInPage
