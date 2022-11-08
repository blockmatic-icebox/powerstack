import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Blockmatic, BlockmaticIcon, MenuIcons, BellIcon, CaretRight, CaretDown } from '~/ui/icons'
import { SearchBar } from '~/ui/components/search-bar/search-bar.component'
import { Sidebar } from '../sidebar'
import XcloseIcon from '~/ui/icons/XcloseIcon'
import Image from 'next/image'

export function Header() {
  const defaultImage = '/images/user.png'
  
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
                  <div className="hidden lg:ml-4 md:block md:mr-4">
                    <div className="flex">
                      <button
                        type="button"
                        className="flex-shrink-0 p-2 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-100 focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon />
                      </button>
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative flex-shrink-0 ml-3h-11">
                        <div className='flex items-center justify-between border border-gray-100 rounded-full w-44 h-11'>
                          <Menu.Button className="grid grid-cols-3 p-1 mt-2 mb-2">
                            <span className="sr-only">Open user menu</span>                       
                            <Image
                            className="h-10 w-9"
                            src={defaultImage}
                            width={37}
                            height={40}
                            alt="user"
                          />
                            <div className="min-w-0 col-span-2">
                              <a href="#" className="focus:outline-none">
                                <span className="absolute inset-1" aria-hidden="true" />
                                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                                <p className="text-sm text-gray-500 truncate">{user.email}</p>
                              </a>
                            </div>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                              <CaretDown />
                            </span>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block py-2 px-4 text-sm text-gray-700'
                                    )}
                                  >
                                      {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
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
  )
}

const user = {
  name: 'Mao Lop',
  email: '@MaoLop',
}

const userNavigation = [
  { name: 'Settings', href: '#' },
  { name: 'Dark theme', href: '#' },
  { name: 'Logout', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
