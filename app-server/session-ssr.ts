import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from 'next'
import { AppState } from '~/app-engine'
import { coingecko } from '~/app-engine/services/coingecko'
import { AppUser } from '~/app-engine/types/app-engine'
import { withSessionSsr } from './session-hoc'

export interface DefaultSessionSsrProps {
  user: AppUser | null
  server_engine_state: AppState
}

export const defaultGetServerSideProps: GetServerSideProps =
  withSessionSsr<DefaultSessionSsrProps>(async ({
  req,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<DefaultSessionSsrProps>> => {

  const app_engine = createAppEngine()
  await app_engine.fetchPrices() 
  
  return {
    props: {
      user: req.session.user || null,
      server_engine_state: JSON.stringify(app_engine.getState())
    },
  }
})

export type DefaultSsrPage = NextPage<DefaultSessionSsrProps>


export const withZustand(gssp) {
  return async (context) => {
    const response = await fetch('http://localhost:4000/user/me')
    const data = await response.json()

    if (!data) {
      return {
        redirect: {
          destination: '/admin/login',
        },
      }
    }

    const gsspData = await gssp(context) // Run `getServerSideProps` to get page-specific data

    // Pass page-specific props along with user data from `withAuth` to component
    return {
      props: {
        ...gsspData.props,
        data,
      },
    }
  }
}

function createAppEngine() {
  throw new Error('Function not implemented.')
}
