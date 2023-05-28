import { everything } from '@genql/runtime'

import { getFeGraphQLClient, getGraphQLClient } from '~/graphql/gwt'

import { createAccount } from './account.lib'

export async function getAccountbyWallet(wallet: string) {
  const { account } = await getGraphQLClient().query({
    account: {
      __args: {
        where: {
          wallet: {
            _eq: wallet,
          },
        },
      },
      ...everything,
    },
  })

  return { account: account[0] }
}

export async function getAccountbyUsernameWithReferral(username: string) {
  const accountsPromise = getGraphQLClient().query({
    account: {
      __args: {
        where: {
          username: {
            _eq: username,
          },
        },
      },
      ...everything,
    },
  })

  const [accountsResponse] = await Promise.all([accountsPromise])

  const referralsPromise = getGraphQLClient().query({
    account: {
      __args: {
        where: {
          parentId: {
            _eq: accountsResponse.account[0].id,
          },
        },
      },
      ...everything,
    },
  })

  const [referralsResponse] = await Promise.all([referralsPromise])

  const referrals = referralsResponse.account.map((account) => {
    return createAccount({
      ...account,
    })
  })

  const account = createAccount({
    ...accountsResponse.account[0],
  })

  return {
    account: account,
    refferals: referrals,
  }
}

export async function getAccountbyUsername(username: string) {
  const accountsResponse = await getGraphQLClient().query({
    account: {
      __args: {
        where: {
          username: {
            _eq: username,
          },
        },
      },
      ...everything,
    },
  })

  const account = accountsResponse.account.map((account) => {
    return createAccount({
      ...account,
    })
  })

  return { account: account[0] }
}

export async function validateUser(username: string, email: string, phone: string) {
  const usernamePromise = await getGraphQLClient().query({
    account: {
      __args: {
        where: {
          username: { _eq: username },
        },
      },
      ...everything,
    },
  })
  const emailPromise = await getGraphQLClient().query({
    account: {
      __args: {
        where: {
          email: { _eq: email },
        },
      },
      ...everything,
    },
  })
  const phoneNumberPromise = await getGraphQLClient().query({
    account: {
      __args: {
        where: {
          phone: { _eq: phone },
        },
      },
      ...everything,
    },
  })

  const [usernameResponse, emailResponse, phoneNumberResponse] = await Promise.all([
    usernamePromise,
    emailPromise,
    phoneNumberPromise,
  ])

  return {
    username: usernameResponse.account[0],
    email: emailResponse.account[0],
    phone: phoneNumberResponse.account[0],
  }
}

export async function changeUserBio(id: string, bio: string) {
  const result = getGraphQLClient().mutation({
    updateAccount: {
      __args: {
        _set: { bio },
        where: { id: { _eq: id } },
      },
      ...everything,
    },
  })

  return { result }
}
export async function updateAvatar({ id, image }: { id: string; image: string }) {
  const errorMessage = 'Error update Avatar'

  try {
    const { updateAccountByPk } = await getFeGraphQLClient().mutation({
      updateAccountByPk: {
        __args: {
          pkColumns: { id },
          _set: { image },
        },
        image: true,
      },
    })

    return { avatar: updateAccountByPk?.image }
  } catch (error) {
    throw new Error(errorMessage)
  }
}

export async function searchPeople({ search }: { search: string }) {
  const errorMessage = 'Error search people'

  try {
    const { account } = await getGraphQLClient().query({
      account: {
        __args: {
          where: { _or: [{ name: { _iregex: search } }, { username: { _iregex: search } }] },
        },
        name: true,
        image: true,
        username: true,
      },
    })

    return { account }
  } catch (error) {
    throw new Error(errorMessage)
  }
}
