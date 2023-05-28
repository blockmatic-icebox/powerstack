import { cn } from '~/styles'

export const SearchIcon = (props: { className?: string }) => {
  return (
    <svg
      className={cn(
        'mx-3 my-[12px] h-5 w-5 cursor-pointer text-gray-400 dark:text-white',
        props.className ? props.className : '',
      )}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  )
}
