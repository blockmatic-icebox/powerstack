import Image from 'next/image'

export function Transfer(props: { date: string; sum: string; avatar: string; name: string }) {
  const { date, sum, avatar, name } = props

  return (
    <div className="mb-4 ml-1 flex items-center justify-between">
      {/* left side */}
      <div className="flex items-center gap-3">
        <div className="flex relative  h-9 w-9 items-center justify-center rounded-full bg-blue-300">
          <Image className="rounded-full" src={avatar} fill alt="img" />
        </div>
        <div>
          <h5 className="text-base font-bold text-navy-700 dark:text-white">{name}</h5>
          <p className="text-sm font-medium text-gray-600"> {date} </p>
        </div>
      </div>
      {/* right side */}
      <div
        className={`flex items-center justify-center rounded-xl px-2.5 py-1 ${
          sum[0] === '-' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'
        }`}
      >
        <p className="text-sm font-bold"> {sum} </p>
      </div>
    </div>
  )
}
