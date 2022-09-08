import type { GetServerSidePropsContext, NextPage, PreviewData } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import { AppState, useAppEngine } from '~/app-engine'
import { getGraphQLDatoCMSSdk } from '~/app-engine/graphql'
import { defaultGetServerSideProps, DefaultSsrPage } from '~/app-server/session-ssr'
import { formatAddress } from '~/app-view/library/uiux'
import * as DatoCMS from '~/app-engine/graphql/generated-datocms-sdk'
import { Input } from '~/app-view/components/base/Input'
import { LanguageSelector } from '~/app-view/components/modules/LanguageSelector'

interface HomePageProps {
  app_engine_server_state: AppState
  page_content: {
    pageSection1?: string | null
    metadata: {
      title?: string | null
      description?: string | null
      twitterCard?: string | null
      image?: { url: string } | null
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
