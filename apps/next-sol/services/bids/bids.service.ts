import { everything } from '@genql/runtime'

import { BidInsertInput } from '~/graphql/generated/gwt'
import { getFeGraphQLClient } from '~/graphql/gwt'

export async function insertBid(object: BidInsertInput) {
  const result = await getFeGraphQLClient().mutation({
    insertBidOne: { __args: { object }, ...everything },
  })

  return { result }
}
