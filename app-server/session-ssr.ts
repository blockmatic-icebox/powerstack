import Decimal from 'decimal.js'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from 'next'
import { AppUser } from '~/app-engine/types/app-engine'
import { withSessionSsr } from './session-hoc'

export interface DefaultSessionSsrProps {
  user: AppUser | null
}

const defaultSsrHandler = async ({
  req,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<DefaultSessionSsrProps>> => {
  return {
    props: {
      user: req.session.user || null,
    },
  }
}

export const defaultGetServerSideProps: GetServerSideProps =
  withSessionSsr<DefaultSessionSsrProps>(defaultSsrHandler)

export type DefaultSsrPage = NextPage<DefaultSessionSsrProps>
