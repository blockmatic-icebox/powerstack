import type { IronSession } from 'iron-session'
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { getIronSession } from 'iron-session'
import { logger } from '~/lib/logger'
import { serverEnv } from '~/config/server'

export async function serverResponse(
  context: GetServerSidePropsContext,
  routeProps: (params: { session: IronSession }) => Promise<{ props?: any; notFound?: boolean }>,
): Promise<GetServerSidePropsResult<unknown>> {
  const session = await getIronSession(context.req, context.res, serverEnv.sessionOptions)
  logger.log('user from getServerSideProps', session.user)

  const { props, notFound } = await routeProps({ session })

  if (notFound) return { notFound }

  return {
    props: {
      user: session.user || null,
      ...props,
    },
  }
}
