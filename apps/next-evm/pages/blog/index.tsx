import { ArticleRecord } from '~/graphql/generated/cms/schema'
import { RootLayout } from '~/layouts/root'
import { getAllArticles } from '~/services/cms'
import { ArticleList } from '~/views/blog/article-list'

export default function BlogIndexPage({ articles }: BlogIndexPageProps) {
  return (
    <RootLayout>
      <ArticleList articles={articles} />
    </RootLayout>
  )
}

export async function getStaticProps() {
  const { articles } = await getAllArticles()

  return {
    props: {
      articles,
    },
  }
}

interface BlogIndexPageProps {
  articles: ArticleRecord[]
}
