import { antelopeApi } from "~/lib/anchor"

import { useAuth } from "../use-auth"

export async function useBalance() {
  const { session } = useAuth()

  // const balance = await antelopeApi.get_currency_balance(
  //   "eosio.token",
  //   session.user.account,
  //   "EOS"
  // )

  return "0 EOS"
}
