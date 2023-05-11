export function UserBinaryTree() {
  function GenerateMainTree(this: MainTreeObject, { username }: MainTreeParams) {
    this.username = username
    this.leftReferral = null
    this.rightReferral = null
  }

  let userTree = new (GenerateMainTree as any)({ username: 'leandrogavidia' })
  let rightReferral = new (GenerateMainTree as any)({ username: 'gaboesquivel' })
  let leftReferral = new (GenerateMainTree as any)({ username: 'milkercastro' })

  rightReferral.rightReferral = leftReferral

  userTree.rightReferral = rightReferral
  userTree.leftReferral = leftReferral
  // // console.log(userTree)
  return <div></div>
}

export interface MainTreeParams {
  username: string
}

export interface MainTreeObject {
  username: string
  leftReferral: string | null
  rightReferral: string | null
}
