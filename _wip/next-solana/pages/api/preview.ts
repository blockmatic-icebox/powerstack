import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const secret = process.env.NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET

  // Check the secret and next parameters
  if (secret && req.query.secret !== secret) {
    return res.status(401).json({ message: 'Missing or invalid `secret` query string parameter!' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the homepage, or to the URL provided with the `redirect` query
  // string parameter:
  const redirectUrl = new URL((req.query.redirect as string) || '/', 'https://example.com')

  res.redirect(`${redirectUrl.pathname}${redirectUrl.search}`)
}
