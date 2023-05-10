import { getCategories } from './categories.service'

export type GetCategories = Awaited<ReturnType<typeof getCategories>>
