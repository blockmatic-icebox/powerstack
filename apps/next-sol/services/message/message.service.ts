import { everything } from '@genql/runtime'

import { getGraphQLClient } from '~/graphql/gwt'

export async function getMessage({ userName }: { userName: string }) {
  const errorMessage = 'Error get message'

  try {
    const { message } = await getGraphQLClient().query({
      message: {
        __args: {
          where: { recipient: { username: { _eq: userName } } },
        },
        ...everything,
        sender: {
          name: true,
        },
      },
    })

    return { message }
  } catch (error) {
    throw new Error(errorMessage)
  }
}
