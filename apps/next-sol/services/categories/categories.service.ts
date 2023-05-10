import { everything } from '~/graphql/generated/gwt/runtime'
import { getGraphQLClient } from '~/graphql/gwt'

export async function getCategories() {
  const { category } = await getGraphQLClient().query({
    category: {
      ...everything,
    },
  })

  return category
}
