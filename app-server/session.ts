// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next'
import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiHandler } from 'next/types'
import { AppUser } from '~/app-engine/types/app-engine'

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    user?: AppUser
  }
}

const session_options = {
  password: 'somepasssdfasdfasdfasdfdsafsdsadfsdafsdafsd', // TODO: get it from ./environment/
  cookieName: 'app-session',
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production', // TODO: get it from ./environment/
  },
}

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, session_options)
}

// Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
export function withSessionSsr<P extends { [key: string]: any } = { [key: string]: any }>(
  handler: (
    context: GetServerSidePropsContext,
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
) {
  return withIronSessionSsr(handler, session_options)
}
