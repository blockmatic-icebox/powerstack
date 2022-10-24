import type { GetServerSidePropsContext, NextPage, PreviewData } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import { AppState, useAppEngine } from '~/engine/_legacy/store'
import { getGraphQLDatoCMSSdk } from '~/engine/graphql'
import { defaultGetServerSideProps, DefaultSsrPage } from '~/server/session-ssr'
import { formatAddress } from '~/ui/_legacy/library/uiux'
import * as DatoCMS from '~/engine/graphql/generated/generated-datocms-sdk'
import { Input } from '~/ui/_legacy/components/base/Input'
import { LanguageSelector } from '~/ui/_legacy/components/shared/AuthWizard/components/LanguageSelector'

interface HomePageProps {
  app_engine_server_state: AppState
  page_content: {
    pageSection1: string | null
    metadata: {
      title: string | null
      description: string | null
      twitterCard: string | null
      image: { url: string } | null
    } | null
  }
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) => {
  console.log('SSP context ===>', context)
  const default_props = await defaultGetServerSideProps(context)
  // @ts-ignore
  const { app_engine_server_state }: DefaultSessionSsrProps = default_props.props
  const { home } = await getGraphQLDatoCMSSdk().HomeLocales({
    locale: (context.locale as DatoCMS.SiteLocale) || (context.defaultLocale as DatoCMS.SiteLocale),
  })

  return {
    props: {
      app_engine_server_state,
      page_content: home,
    },
  }
}

const HomePage: NextPage<HomePageProps> = ({ app_engine_server_state, page_content }) => {
  const { user, coins } = app_engine_server_state
  const user_data = { ...user, auth_jwt: user?.auth_jwt ? formatAddress(user?.auth_jwt) : 'none' }
  console.log('page_content', page_content)
  return (
    <>
      <LanguageSelector />
      <div dangerouslySetInnerHTML={{ __html: page_content?.pageSection1 || '' }} />
      <pre style={{ maxWidth: 300 }}>{JSON.stringify(user_data, null, 2)}</pre>
      <pre>{JSON.stringify(coins, null, 2)}</pre>
    </>
  )
}

export default HomePage
