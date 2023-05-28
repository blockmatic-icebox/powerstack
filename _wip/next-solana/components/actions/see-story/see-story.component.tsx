// import Modal from "components/modal";
import Image from 'next/image'
import { useState } from 'react'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

import { SeeStoryProps } from './see-story.type'

export const SeeStory = ({ name, photo, content }: SeeStoryProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="mb-1 flex flex-col items-center hover:cursor-pointer"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#FF5E62] text-2xl text-navy-700 dark:text-white">
          <Image
            className="flex items-center justify-center rounded-full"
            src={photo}
            fill
            alt=""
          />
        </div>
        <p className="mt-[8px] text-sm font-medium dark:text-white">{name}</p>
      </div>
      <div className="relative flex w-[400px] max-w-full items-center justify-center overflow-hidden rounded-2xl">
        <div className="relative">{content}</div>
        <div className="absolute bottom-5 z-[100] flex w-full px-3">
          <input
            className="!border-whit mr-3 flex h-12 w-full items-center justify-center rounded-full border bg-white/0 p-3 text-sm text-white outline-none placeholder:text-white"
            placeholder="Write your comment..."
          />
          <button className="mr-3 bg-none px-0 hover:bg-none">
            <MdOutlineFavoriteBorder className="h-6 w-6 text-white" />
          </button>
          <button className="bg-none px-0 hover:bg-none">
            <IoPaperPlaneOutline className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="z-99 radius-2xl absolute top-0 h-full w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.2)]" />
      </div>
    </div>
  )
}

export default SeeStory
