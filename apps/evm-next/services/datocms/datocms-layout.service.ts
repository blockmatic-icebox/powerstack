import { everything, getCMSSdk } from '~/graphql/cms'

export async function getLayoutText() {
  const data = await getCMSSdk().query({
    allArticles: everything,
  })

  return data.allArticles
}
