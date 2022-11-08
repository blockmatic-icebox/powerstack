import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import type { selectedType } from './crypto-select.type'


const crypto = [
  {
    name: 'Tether',
    abbreviation: 'USDT',
    balance: '9,500 USDT',
    price: '1,00 US$',
    change: '-0.01%',
    icon: '/SolanaLogo.png',
  },
  {
    name: 'Solana',
    abbreviation: 'SOL',
    balance: '500 SOL',
    price: '2,00 US$',
    change: '-0.03%',
    icon: '/SolanaLogo.png',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function CryptoSelect() {
  const [selected, setSelected] = useState<selectedType>()

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-1">
            <Listbox.Button className="min-w-full py-3 pl-1 pr-5 text-center border border-blue-600 shadow-sm cursor-default md:pl-3 md:px-8 rounded-3xl bg-blue focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
              {selected ? (
                <span className="flex items-center">
                  <span className="px-8 ml-3 font-bold text-blue-600 font-inter">
                    {selected.name}
                  </span>
                </span>
              ) : (
                <p className="px-2 ml-3 text-sm font-bold text-blue-600 md:text-base font-inter">Filter By Network</p>
              )}
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                <ChevronDownIcon className="w-5 h-5 text-blue-600" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-sm bg-white rounded-md shadow-lg md:text-base max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {crypto.map((coin) => (
                  <Listbox.Option
                    key={coin.name}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                      )
                    }
                    value={coin}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <Image
                            src={coin.icon}
                            alt=""
                            width={200}
                            height={200}
                            className="flex-shrink-0 w-6 h-6 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate',
                            )}
                          >
                            {coin.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
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
  )
}
