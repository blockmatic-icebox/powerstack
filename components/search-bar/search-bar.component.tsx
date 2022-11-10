import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { CaretDown, CaretRight, MagnifyingGlassIcon } from '~/ui/icons';


const coins = [
  { id: 0, name: 'Network' },
  { id: 1, name: 'Ethereum' },
  { id: 2, name: 'Solana' },
  { id: 3, name: 'Polygon' },
  { id: 4, name: 'EOS' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SearchBar() {
  const [selected, setSelected] = useState(coins[0])

  return (
    <div className="hidden rounded-l-lg bg-gray-50 lg:ml-2 md:block rounded-r-xl" >
      <form>
      <div className="flex w-full" >
        <label
          htmlFor="search"
          className="sr-only">
          Search
        </label>
        <div className="relative text-black focus-within:text-gray-600">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon />
          </div>
          <input
            id="search"
            className="block w-64 py-2 pl-10 pr-3 leading-5 text-black placeholder-gray-500 border-r rounded-l-lg bg-gray-50"
            placeholder="Search by Address / Txn Hash"
            name="search"
          />
        </div>
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="relative w-32 m-1">
                <Listbox.Button className="w-full pl-4 text-left">
                  <span className="block truncate">{selected.name}</span>
                  <span className="absolute right-0 items-center pt-1 pr-4 pointer-events-none inset-y-1 ">
                    <CaretDown />
                  </span>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 w-48 py-1 mt-1 overflow-auto text-base bg-white rounded-lg shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {coins.map((coin) => (
                      <Listbox.Option
                        key={coin.id}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-black bg-gray-100' : 'text-black',
                            'relative cursor-default select-none py-2 pl-3 pr-9 m-1'
                          )
                        }
                        value={coin}
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                              {coin.name}
                            </span>
                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-black',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon className="w-5 h-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
      </form>
    </div>
  )
}

