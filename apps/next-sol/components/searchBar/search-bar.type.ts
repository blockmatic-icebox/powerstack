export type SearchPeopleResult = {
  username: string
  name: string
  image: string
}

export type SearchStateProps = {
  isOpen: boolean
  searchResult: SearchPeopleResult[]
  textToSearch: string
}
