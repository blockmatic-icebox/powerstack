export function Transaction(props: {
  title: string
  date: string
  sum: string
  mb: string
  icon: JSX.Element
}) {
  const { title, date, sum, icon, mb } = props
  return (
    <div className={`flex justify-between ${mb} mt-2 items-center px-1`}>
      <div className="flex items-center gap-3">
        <div className="first-letter flex items-center justify-center rounded-full bg-lightPrimary p-2.5 text-xl text-primary-500 dark:bg-navy-700 dark:text-white">
          {icon}
        </div>
        <div>
          <h5 className="text-base font-bold text-navy-700 dark:text-white"> {title} </h5>
          <p className="text-sm font-medium text-gray-600"> {date} </p>
        </div>
      </div>
      <div>
        <p className="mr-1 text-sm font-bold text-navy-700 dark:text-white"> {sum} </p>
      </div>
    </div>
  )
}
