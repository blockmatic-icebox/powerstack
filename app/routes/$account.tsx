import { prisma } from '~/library'
import type { accounts } from '@prisma/client'
import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export interface AccountProfileLoaderData {
  account: accounts | null
}

export const loader: LoaderFunction = async ({ params }) => {
  const account = await prisma.accounts.findFirst({
    where: {
      account: params.account,
    },
  })

  return json<AccountProfileLoaderData>({ account })
}

export default function Index() {
  const { account } = useLoaderData<AccountProfileLoaderData>()
  return <pre>{JSON.stringify(account, null, 2)}</pre>
}
