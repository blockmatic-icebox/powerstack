import { useAuth } from "../use-auth"

export function useDBoard() {
  const { session } = useAuth()

  return "holi"
}
