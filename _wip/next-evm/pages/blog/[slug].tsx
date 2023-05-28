import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { ArticleRecord } from '~/graphql/generated/cms/schema'
import { RootLayout } from '~/layouts/root'
import { getAllArticles, getArticle } from '~/services/cms'
import { ArticleView } from '~/views/blog/article-view'

export default function ArticlePage({ article }: ArticlePageProps) {
  return (
    <RootLayout>
      <ArticleView article={article} />
    </RootLayout>
  )
}

export const getStaticProps: GetStaticProps<any, ArticlePageParams> = async ({ params }) => {
  const { article } = await getArticle({ slug: params?.slug as string })

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const { articles } = await getAllArticles()

  return {
    paths: articles.map((a) => `/blog/${a.slug}`),
    fallback: false,
  }
}

interface ArticlePageParams extends ParsedUrlQuery {
  slug: string
}

interface ArticlePageProps {
  article: ArticleRecord
}
