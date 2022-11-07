import {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {BellIcon, SparkleLight} from '~/ui/icons';


//ToDo: change later is for testing
const user = {
    name: 'Mao Lop',
    email: '@maolop',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
  
  const userNavigation = [
    { name: 'Settings', href: '#' },
    { name: 'Dark theme', href: '#' },
    { name: 'Logout', href: '#' },
  ]

  
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  

export function PopoverHeader(){
    return(
        <div className="hidden lg:ml-4 md:block md:mr-4">
        <div className="flex items-center">
          <button
            type="button"
            className="flex-shrink-0 p-1 text-gray-500 rounded-full hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon />
          </button>
          <Menu as="div" className="relative flex-shrink-0 ml-3 h-11 ">
            <div className='flex items-center justify-between w-48 border rounded-full h-11'>
              <Menu.Button className="grid grid-cols-3 p-2 mt-2">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={user.imageUrl} alt="" />
                <div className="flex-1 min-w-0 ">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-1" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500 truncate">{user.email}</p>
                  </a>
                </div>
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <SparkleLight />
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
    )
}