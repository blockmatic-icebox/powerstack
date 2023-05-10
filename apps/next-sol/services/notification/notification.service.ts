import { everything } from '@genql/runtime'

import { getGraphQLClient } from '~/graphql/gwt'

export async function getNotification({ userName }: { userName: string }) {
  const errorMessage = 'Error get notification'

  try {
    const { notification } = await getGraphQLClient().query({
      notification: {
        __args: {
          where: { account: { username: { _eq: userName } } },
        },
        ...everything,
      },
    })
    return { notification }
  } catch (error) {
    throw new Error(errorMessage)
  }
}
