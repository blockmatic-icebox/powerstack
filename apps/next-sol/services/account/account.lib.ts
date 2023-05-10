import { merge } from 'lodash'

import { Account } from './account.type'

// this object defines the types and defaults of Event
export const AccountDefaults = {
  email: '',
  parentId: '',
  username: '',
  id: '',
  binaryParentId: '',
  binaryPlacement: '',
  bio: '',
  createdAt: '',
  image: '',
  name: '',
  phone: '',
  updatedAt: '',
  wallet: '',
}

// return an Event object with randomly generated values

// Event constructor function. takes partial data and returns Event
export function createAccount(params: Partial<Account>) {
  // get defaults based on fake data feature flag

  // deep merge defaults with params
  return merge({}, AccountDefaults, params) as Account
}
