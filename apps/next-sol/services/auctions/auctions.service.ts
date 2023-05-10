import { everything } from '~/graphql/generated/gwt/runtime'
import { Auction } from '~/graphql/generated/gwt/schema'
import { getGraphQLClient } from '~/graphql/gwt'

export async function getAuctions() {
  const auctionsResponse = await getGraphQLClient().query({
    auction: {
      ...everything,
    },
  })

  return auctionsResponse.auction as Auction[]
}

export async function getAuctionsByCategory(categoryId: number) {
  const auctionsResponse = await getGraphQLClient().query({
    auction: {
      __args: {
        where: {
          category: {
            id: {
              _eq: categoryId,
            },
          },
        },
      },
      ...everything,
    },
  })

  return auctionsResponse.auction as Auction[]
}

export async function updateAuction({ id, endTime }: { id: number; endTime: Date }) {
  try {
    const balance = await getGraphQLClient().mutation({
      updateAuctionByPk: {
        __args: {
          pkColumns: {
            id,
          },
          _set: {
            endTime,
          },
        },
        returning: {
          ...everything,
        },
      },
    })
    return balance
  } catch (err) {
    console.error(err)
  }
}
