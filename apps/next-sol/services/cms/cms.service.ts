import { everything } from '@genql/runtime'

import { getCMSSdk } from '~/graphql/cms'
import { ArticleRecord, EventRecord } from '~/graphql/generated/cms/schema'
import { GetArticleParams } from '~/services/cms/cms.type'

import { CmsParams } from './cms.type'

export async function getAllArticles({ preview }: CmsParams) {
  const { allArticles } = await getCMSSdk().query({
    allArticles: {
      ...everything,
      heroImage: everything,
      author: everything,
    },
    includeDrafts: preview,
  })

  return { articles: allArticles }
}

export async function getArticles() {
  const { allArticles } = await getCMSSdk().query({
    allArticles: {
      ...everything,
      heroImage: everything,
      author: everything,
    },
  })

  return { articles: allArticles as ArticleRecord[] }
}

export async function getArticle({ slug, preview }: GetArticleParams) {
  const { article } = await getCMSSdk().query({
    article: {
      __args: {
        filter: { slug: { eq: slug } },
      },
      includeDrafts: preview,
      ...everything,
      heroImage: everything,
      gallery: everything,
      _seoMetaTags: everything,
      author: everything,
      video: everything,
      content: everything,
    },
  })

  return { article: article as ArticleRecord }
}

export async function getAllEvents() {
  const { allEvents } = await getCMSSdk().query({
    allEvents: {
      ...everything,
      cover: everything,
      categoryname: everything,
      date: true,
      description: true,
      duration: true,
      title: true,
    },
  })

  return { events: allEvents as EventRecord[] }
}

export async function getEvent({ slug }: any) {
  const { event } = await getCMSSdk().query({
    event: {
      __args: {
        filter: { slug: { eq: slug } },
      },
      ...everything,
      video: everything,
      introduction: true,
      content: everything,
    },
  })

  return { event: event as EventRecord }
}
