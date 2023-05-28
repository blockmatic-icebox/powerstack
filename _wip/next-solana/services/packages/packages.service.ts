import { everything } from '@genql/runtime'

import { getGraphQLClient } from '~/graphql/gwt'

import { InsertAccountPackageParams, UpdateAccountPackageParams } from './packages.type'

export async function getPackages() {
  const packages = await getGraphQLClient().query({
    package: { ...everything },
  })

  return packages.package
}

export async function insertAccountPackage({
  accountId,
  packageId,
  transaction,
}: InsertAccountPackageParams) {
  try {
    const { insertAccountPackageOne: dateResponse } = await getGraphQLClient().mutation({
      insertAccountPackageOne: {
        __args: {
          object: {
            accountId,
            packageId,
            transaction,
          },
        },
        ...everything,
      },
    })

    return dateResponse
  } catch (err) {
    console.error(err)
  }
}

export async function updateAccountPackageByPk({
  accountPackageId,
  accountId,
  packageId,
  transaction,
}: UpdateAccountPackageParams) {
  try {
    const { updateAccountPackageByPk: dataResponse } = await getGraphQLClient().mutation({
      updateAccountPackageByPk: {
        __args: {
          pkColumns: {
            id: accountPackageId,
          },
          _set: {
            accountId,
            packageId,
            transaction,
          },
        },
        ...everything,
      },
    })

    return dataResponse
  } catch (err) {
    console.error(err)
  }
}
