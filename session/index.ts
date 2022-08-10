// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiHandler } from 'next/types'
import { AppUser } from '~/app-engine/types/app-engine'

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    user?: AppUser
  }
}

export const withAppSessionApiRoute = (handler: NextApiHandler) => {
  return withIronSessionApiRoute(handler, {
    password: 'somepasssdfasdfasdfasdfdsafsdsadfsdafsdafsd', // TODO: get it from ./environment/
    cookieName: 'app-session',
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production', // TODO: get it from ./environment/
    },
  })
}
