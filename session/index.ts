// nextjs session with iron-session

// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from 'iron-session'
import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiHandler } from 'next/types'
import { AppUser } from '~/app-engine/types/app-engine'

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    user?: AppUser
  }
}

export const withAppSession = (handler: NextApiHandler) => {
  console.log('with app session')
  return withIronSessionApiRoute(handler, {
  password: '74e1926a5f332cb1c4ad028dbc4fe13f2c49efef', // TODO: get it from ./environment/
  cookieName: 'app-session',
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production', // TODO: get it from ./environment/
  },
})
}
