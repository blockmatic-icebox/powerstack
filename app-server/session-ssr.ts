import Decimal from 'decimal.js'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from 'next'
import { getGraphQLSdk } from '~/app-engine/graphql'
import { Accounts } from '~/app-engine/graphql/generated-sdk'
import { AppUser } from '~/app-engine/types/app-engine'
import { withSessionSsr } from './session-hoc'

const defaultSsrHandler = async ({
  req,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<DefaultSessionSsrProps>> => {
  const user = req.session.user
  if (!user)
    return {
      props: {
        user: null,
      },
    }

  const result = await getGraphQLSdk(user.jwt).Accounts({
    where: {
      username: { _eq: 'gaboesquivel' },
    },
  })

  console.log('=========================')
  console.log('wat', JSON.stringify(result.accounts))
  const user_account = result.accounts[0]
  return {
    props: {
      user: {
        username: user_account.username,
        jwt: user.jwt,
        auth_method: user.auth_method,
        user_addresses: user_account.addresses.map((address) => ({
          address: address.address,
          network: address.network,
          ticker: 'ETH',
          balance: '0',
          unit_balance: '0',
        })),
      },
    },
  }
}

export interface DefaultSessionSsrProps {
  user: AppUser | null
}

export const defaultGetServerSideProps: GetServerSideProps =
  withSessionSsr<DefaultSessionSsrProps>(defaultSsrHandler)

export type DefaultSsrPage = NextPage<DefaultSessionSsrProps>
