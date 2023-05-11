import { users } from '~/components/users/users-data'

import { Card } from '../cards/card'
import { SearchTableUsers } from './users-search-table.component'

export function UsersTable() {
  return (
    <Card extra={'w-full h-full'}>
      <SearchTableUsers tableData={users} columnsData={columnsDataUsersOverview} />
    </Card>
  )
}

export const columnsDataUsersOverview = [
  {
    Header: 'USER NAME',
    accessor: 'name',
  },
  {
    Header: 'EMAIL',
    accessor: 'email',
  },
  {
    Header: 'USERNAME',
    accessor: 'username',
  },
  {
    Header: 'JOIN DATE',
    accessor: 'date',
  },
  {
    Header: 'USER TYPE',
    accessor: 'type',
  },
  {
    Header: 'ACTIONS',
    accessor: 'actions',
  },
]
