import Image from 'next/image'

import { FollowProps } from './follow.type'

const Follow = ({ name, username, photo, mb }: FollowProps) => {
  return (
    <div className={`z-10 flex items-center justify-between ${mb} `}>
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 rounded-full">
          <Image className="rounded-full" src={photo} fill alt="" />
        </div>
        <div className="">
          <p className="text-base font-bold text-navy-700 dark:text-white"> {name} </p>
          <p className="text-sm font-medium text-gray-600"> {username} </p>
        </div>
      </div>
      <p className="mr-4 text-sm font-medium text-primary-500 dark:text-white">Follow</p>
    </div>
  )
}

export default Follow
