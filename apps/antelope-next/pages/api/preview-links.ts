import { NextApiRequest, NextApiResponse } from "next"

/*
  This endpoint is for the Web Previews DatoCMS plugin:
  https://www.datocms.com/marketplace/plugins/i/datocms-plugin-web-previews

  After installing the plugin on the project, insert the following frontend settings:

  Name: Production Website
  URL: <YOUR_WEBSITE>/api/preview-links
*/

const findUrlForItem = ({ item, itemType }: any) => {
  switch (itemType.attributes.api_key) {
    case "blog":
      return `/blog/${item.attributes.slug}`
    default:
      return null
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // setup CORS permissions
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")

  // This will allow OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).json({ success: true })
  }

  const url = findUrlForItem(req.body)

  if (!url) {
    return res.status(200).json({ previewLinks: [] })
  }

  const baseUrl = process.env.VERCEL_URL
    ? // Vercel auto-populates this environment variable
      `https://${process.env.VERCEL_URL}`
    : // Netlify auto-populates this environment variable
      process.env.URL

  const previewLinks = [
    {
      label: "Published version",
      url: `${baseUrl}${url}`,
    },
    {
      label: "Draft version",
      url: `${baseUrl}/api/preview?redirect=${url}&secret=${
        process.env.NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET || ""
      }`,
    },
  ]

  return res.status(200).json({ previewLinks })
}
