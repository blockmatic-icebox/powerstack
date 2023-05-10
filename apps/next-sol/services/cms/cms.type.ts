import { getAllEvents } from './cms.service'

export interface CmsParams {
  preview?: boolean
}

export interface GetArticleParams extends CmsParams {
  slug: string
}

export type GetAllEvents = Awaited<ReturnType<typeof getAllEvents>>
