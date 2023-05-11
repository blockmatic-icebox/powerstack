import { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineShop } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { TiLightbulb } from 'react-icons/ti'

import { Dropdown } from '~/components/dropdown/dropdown.component'
import { cn } from '~/styles'

export function CardMenu(props: { transparent?: boolean }) {
  const { transparent } = props
  const [open, setOpen] = useState(false)
  return (
    <Dropdown
      button={
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center text-xl hover:cursor-pointer ${
            transparent
              ? 'bg-none text-white hover:bg-none active:bg-none'
              : 'bg-lightPrimary p-1.5 text-primary-500 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10'
          } linear justify-center rounded-lg font-bold transition duration-200`}
        >
          <BsThreeDots className="h-6 w-6" />
        </button>
      }
      animation={'origin-top-right transition-all duration-300 ease-in-out'}
      classNames={cn('right-0 w-max', transparent ? 'top-8' : 'top-11')}
    >
      <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:font-medium">
          <span>
            <AiOutlineUser />
          </span>
          Panel 1
        </p>
        <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
          <span>
            <AiOutlineShop />
          </span>
          Panel 2
        </p>
        <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
          <span>
            <TiLightbulb />
          </span>
          Panel 3
        </p>
        <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
          <span>
            <FiSettings />
          </span>
          Panel 4
        </p>
      </div>
    </Dropdown>
  )
}
