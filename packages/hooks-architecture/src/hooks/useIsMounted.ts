import { useEffect, useRef } from 'react'

export default function useIsMounted() {
  const mountedRef = useRef<boolean>(false)

  useEffect(() => {
    mountedRef.current = true

    return () => {
      mountedRef.current = false
    }
  }, [])

  return mountedRef
}
