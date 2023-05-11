export interface InsertAccountPackageParams {
  accountId: string
  packageId: number
  transaction: string
}

export interface UpdateAccountPackageParams extends InsertAccountPackageParams {
  accountPackageId: string
}
