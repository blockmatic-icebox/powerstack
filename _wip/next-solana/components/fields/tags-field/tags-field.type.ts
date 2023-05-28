export interface TagsFieldProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string
  id: string
  placeholderTags: {
    name: string
    id: number
  }[]
  placeholder: string
}
