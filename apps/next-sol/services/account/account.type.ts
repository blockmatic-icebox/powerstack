import { getAccountbyWallet } from './account.service'

export type GetAccougetAccountbyWallet = Awaited<ReturnType<typeof getAccountbyWallet>>

export type Account = {
  email: string
  parentId: string
  username: string
  id: string
  binaryParentId: string
  binaryPlacement: string
  bio: string
  createdAt: string
  image: string
  name: string
  phone: string
  updatedAt: string
  wallet: string
}
