import { get } from 'lodash'
import { useEffect, useState } from 'react'

import { everything, generateSubscriptionOp } from '~/graphql/generated/gwt'
import { getWsGraphQLClient } from '~/graphql/gwt'
import { useAuth } from '~/hooks/use-auth'

export function useBalance() {
  const [userBidBalance, setUserBidBalance] = useState(0)
  const { session } = useAuth()

  useEffect(() => {
    if (!session?.user.wallet) return
    const client = getWsGraphQLClient()
    const { query, variables } = generateSubscriptionOp({
      balance: {
        __args: { where: { wallet: { _eq: session.user.wallet } } },
        ...everything,
      },
    })

    client.subscribe(
      { query, variables },
      {
        next: (data) => setUserBidBalance(get(data, 'data.balance[0].quantity') || 0),
        error: console.error,
        complete: () => console.log('finished'),
      },
    )
  }, [session?.user.wallet])

  return { userBidBalance }
}
