import { get } from 'lodash'
import { useEffect, useState } from 'react'
import { useEffectOnce } from 'react-use'

import { Auction, everything, generateSubscriptionOp } from '~/graphql/generated/gwt'
import { getWsGraphQLClient } from '~/graphql/gwt'
import { useAuth } from '~/hooks/use-auth'

export function useAuctions() {
  const [auctions, setAuctions] = useState<Auction[]>([])
  const { session } = useAuth()

  useEffectOnce(() => {
    if (!session?.user.wallet) return
    const client = getWsGraphQLClient()
    const { query, variables } = generateSubscriptionOp({
      auction: {
        time: true,
        lastBidTime: true,
        updatedAt: true,
        bids: {
          __args: {
            limit: 1,
            orderBy: [{ createdAt: 'DESC' }],
          },
          ...everything,
          account: { username: true },
        },
        ...everything,
      },
    })

    client.subscribe(
      { query, variables },
      {
        next: (data: any) => {
          console.log('data', data, get(data, 'data.auction'))
          setAuctions(get(data, 'data.auction') || [])
        },
        error: console.error,
        complete: () => console.log('finished'),
      },
    )
  })

  return { auctions }
}
