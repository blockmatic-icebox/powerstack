import { Fragment, useState } from 'react'
import { Disclosure, Listbox, Menu, Transition } from '@headlessui/react'
import BlockmaticIcon from '~/ui/icons/BlockmaticIcon'
import { Blockmatic } from '~/ui/icons'
import { SearchBar } from '~/ui/components/search-bar/search-bar.component'
import { Sidebar } from '../sidebar'
import MenuIcon from '~/ui/icons/menuIcon'
import CloseIcon from '~/ui/icons/closeIcon'
import BellIcon from '~/ui/icons/BellIcon'
// import { SidebarLink } from "./sidebar-link.component"

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

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
                  
                  <div className="flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-indigo-200 rounded-md hover:bg-white hover:bg-opacity-75 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-200">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <CloseIcon />
                      ) : (
                        <MenuIcon />
                      )}
                    </Disclosure.Button>
                  </div>
                    {/* TODO: popover component - Profile dropdown */}
                  <div className="hidden lg:ml-4 md:block md:mr-4">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="flex-shrink-0 p-1 text-gray-500 rounded-full hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon />
                      </button>
                    
                      <Menu as="div" className="relative flex-shrink-0 ml-3">
                        <div>
                          <Menu.Button className="flex text-sm text-white rounded-full bg- focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
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