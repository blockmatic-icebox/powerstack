import { Fragment, useState } from 'react'
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import { Blockmatic, BlockmaticIcon, MenuIcons, BellIcon, SparkleLight } from '~/ui/icons'
import { SearchBar } from '~/ui/components/search-bar/search-bar.component'
import { Sidebar } from '../sidebar'
import XcloseIcon from '~/ui/icons/XcloseIcon'
import { PopoverHeader } from '~/ui/components/popover-header/popover-header.component'

export function Header() {
  return (
  <div className="min-h-full">
    <div className="pt-1 bg-white h-30 sm:border-b sm:border-gray-400 sm:border-opacity-25 lg:pr-7">
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="flex h-24 max-w-full sm:px-2 lg:px-3">
              <div className="flex items-center justify-between w-full px-1 mt-0">
                <div className="items-center justify-between px-0 lg:px-4">
                  <div className="flex space-x-2 md:hidden">
                    <BlockmaticIcon />
                    <Blockmatic />
                  </div>
                  <SearchBar />
                </div>
                <div className="flex md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-indigo-200 rounded-md hover:bg-white hover:bg-opacity-75 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-200">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XcloseIcon />
                    ) : (
                      <MenuIcons />
                    )}
                  </Disclosure.Button>
                </div>
                <PopoverHeader />             
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="px-2 mt-3 space-y-1">
                  <Sidebar />
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  </div>
)}