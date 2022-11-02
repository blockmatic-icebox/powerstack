import { Fragment, useState } from 'react'
import { Disclosure, Listbox, Menu, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import BlockmaticIcon from '~/ui/icons/BlockmaticIcon'
import { Blockmatic } from '~/ui/icons'
import { SearchBar } from '~/ui/components/search-bar/search-bar.component'
// import { SidebarLink } from "./sidebar-link.component"

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Account', href: '/', current: true },
  { name: 'Profile', href: '/profile', current: false },
  { name: 'Wallet', href: '/wallet', current: false },
  { name: 'Marketplace', href: '/marketplace', current: false },
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}



export function Header() {
 
  return (
    <div className="min-h-full">
      <div className="bg-white sm:border-b sm:border-indigo-300 sm:border-opacity-25">
        <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
                
                <div className="relative flex items-center justify-between h-16 ">
                  
                  <div className="flex items-center px-2 lg:px-0">
                    <div className="flex space-x-2 md:hidden">
                      <BlockmaticIcon />
                      <Blockmatic />
                    </div>

                  <SearchBar />
                    
    
                  </div>
                  <div className="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">

                  </div>
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-indigo-200 rounded-md hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden lg:ml-4 lg:block">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="w-6 h-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative flex-shrink-0 ml-3">
                        <div>
                          <Menu.Button className="flex text-sm text-white bg-indigo-600 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src={user.imageUrl} alt="" />
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

              <Disclosure.Panel className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-indigo-700 text-white'
                          : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                        'block rounded-md py-2 px-3 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-indigo-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="w-10 h-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">{user.name}</div>
                      <div className="text-sm font-medium text-indigo-300">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="flex-shrink-0 p-1 ml-auto text-indigo-200 bg-indigo-600 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="px-2 mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-indigo-500 hover:bg-opacity-75"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
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