import { AccountInsertInput, everything } from '~/graphql/generated/gwt'
import { getFeGraphQLClient, getGraphQLClient } from '~/graphql/gwt'

export async function signUp(object: AccountInsertInput) {
  // console.log('signup', object)
  const result = await getFeGraphQLClient().mutation({
    insertAccountOne: { __args: { object }, ...everything },
  })

  return { result }
}

export async function linkWallet({ id, wallet }: { id: string; wallet: string }) {
  // console.log('linkWallet', { id, wallet })
  const addressExist = await getGraphQLClient().query({
    account: {
      __args: {
        where: {
          wallet: { _eq: wallet },
        },
      },
      ...everything,
    },
  })
  if (addressExist.account[0]) throw new Error('address already linked')
  const result = await getFeGraphQLClient().mutation({
    updateAccount: {
      __args: {
        _set: { wallet },
        where: { id: { _eq: id } },
      },
      ...everything,
    },
  })

  return { result }
}
