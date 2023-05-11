export interface EventCardProps {
  icon: JSX.Element
  title: string
  desc: string
  date: string
  day: string
  time?: string
  topics: string[]
  bgBox?: string
  extra?: string
  isExpanded?: boolean
}
