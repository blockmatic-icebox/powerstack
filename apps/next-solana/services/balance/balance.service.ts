import { everything } from '@genql/runtime'

import { getGraphQLClient } from '~/graphql/gwt'

import { updateBalanceParams } from './balance.type'

export async function getBalance(wallet: string) {
  try {
    const balance = await getGraphQLClient().query({
      balanceByPk: {
        __args: {
          wallet: wallet,
          symbol: 'USD',
        },
        ...everything,
      },
    })

    return balance?.balanceByPk?.quantity
  } catch (err) {
    console.error(err)
  }
}

export async function deductBalance({ wallet, amount }: updateBalanceParams) {
  try {
    const currentBalance = await getBalance(wallet)
    if (!currentBalance) return
    console.log('deduct balance', currentBalance, amount, currentBalance - amount)
    const balance = await getGraphQLClient().mutation({
      updateBalance: {
        __args: {
          where: {
            wallet: { _eq: wallet },
          },
          _set: {
            quantity: currentBalance - amount,
            displayQuantity: `${currentBalance - amount} USD`,
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

export async function increaseBalance({ wallet, amount }: updateBalanceParams) {
  try {
    const currentBalance = await getBalance(wallet)

    if (currentBalance === undefined) {
      console.log('new balance', amount)
      const balance = await getGraphQLClient().mutation({
        insertBalanceOne: {
          __args: {
            object: {
              wallet,
              symbol: 'USD',
              quantity: amount,
              displayQuantity: `${amount / 100} USD`,
            },
          },
          ...everything,
        },
      })
      return balance
    }
    console.log('increase balance', currentBalance, amount, currentBalance + amount)

    const balance = await getGraphQLClient().mutation({
      updateBalance: {
        __args: {
          where: {
            wallet: { _eq: wallet },
          },
          _set: {
            quantity: currentBalance + amount,
            displayQuantity: `${currentBalance + amount} USD`,
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
