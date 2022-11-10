"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import { CryptoSelect } from '~/components/crypto-select/crypto-select.components';
import clsx from 'clsx'


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

const nfts = [
  {
    id: 1,
    name: 'Bored Ape Yacht Club',
    href: '#',
    nftCreator: 'YugaLabs',
    nftCreatorIcon: '/SolanaLogo.png',
    imageSrc: '/NFT1.png',
    imageAlt: 'image alt.',
  },
  {
    id: 2,
    name: 'CryptoPunk #260 - CryptoPunks ',
    href: '#',
    nftCreator: 'MarbleCard',
    nftCreatorIcon: '/SolanaLogo.png',
    imageSrc: '/NFT1.png',
    imageAlt: 'image alt',
  },
  {
    id: 3,
    name: 'Doodle #4358',
    href: '#',
    nftCreator: 'Doodle',
    nftCreatorIcon: '/SolanaLogo.png',
    imageSrc: '/NFT1.png',
    imageAlt: 'image alt',
  },
  // More products...
]

const tabs = [
  { name: 'Tokens', href: '#', current: true },
  { name: 'NFTs assets', href: '#', current: false },
]

export default function Wallet() {

  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Your wallet</h1>
      <div className="flex items-center content-center justify-between">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            onChange={(e) => setCurrentTab(parseInt(e.target.value))}
            name="tabs"
            className="block w-full py-2 pl-3 pr-10 mt-3 text-base border-gray-300 rounded-md focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
            defaultValue={0}
          >
            {tabs.map((tab, idx) => (
              <option value={idx} key={tab.name}>
                {tab.name}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="flex mt-6 -mb-px space-x-8" aria-label="Tabs">
            {tabs.map((tab, idx) => (
              <button
                key={tab.name}
                onClick={() => setCurrentTab(idx)}
                className={clsx(
                  idx === currentTab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap font-sans py-2 px-1 font-inter border-b-2 font-semibold text-lg',
                )}
                aria-current={idx === currentTab ? 'page' : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
        {currentTab === 1 && <CryptoSelect />}
      </div>
      {currentTab === 0 && (
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="px-4 py-6 mt-7 bg-gray-50 sm:flex-auto">
              <h2 className="text-xl text-gray-900 font-inter">Total balance</h2>
              <p className="mt-2 font-sans text-3xl font-bold text-gray-700 font-inter">
                10.000 US$
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-4 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6 font-inter"
                        >
                          Cryptocurrency
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-4 text-sm text-left text-gray-900 font-inter"
                        >
                          Balance
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-4 text-sm text-left text-gray-900 font-inter"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-4 text-sm text-left text-gray-900 font-inter"
                        >
                          1h Change
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-4 font-sans text-sm text-left text-gray-900 font-inter"
                        >
                          Send
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {crypto.map((coin) => (
                        <tr className="border-b-2 border-b-gray-100" key={coin.name}>
                          <td className="py-4 pl-6 pr-3 text-sm whitespace-nowrap sm:pl-6">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <Image
                                  className="w-10 h-10 rounded-full"
                                  width={150}
                                  height={150}
                                  src={coin.icon}
                                  alt="cryto icon"
                                />
                              </div>
                              <div className="ml-4">
                                <div className="font-sans font-bold text-gray-900 font-inter">
                                  {coin.name}
                                </div>
                                <div className="font-sans text-xs text-gray-400 font-inter">
                                  {coin.abbreviation}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <div className="font-bold text-blue-600 font-inter">{coin.balance}</div>
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <span className="inline-flex text-xs font-semibold leading-5 font-inter">
                              {coin.price}
                            </span>
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <span className="inline-flex text-xs font-bold leading-5 text-red-500 font-inter">
                              {coin.change}
                            </span>
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <a href="#" className="font-bold text-blue-600 font-inter">
                              Transfer Now
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentTab === 1 && (
        <div className="p-3 bg-white">
          <div className="px-4 py-8 mx-auto max-w-7xl sm:py-12 sm:px-3 lg:px-4">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {nfts.map((nft) => (
                <a
                  key={nft.id}
                  href={nft.href}
                  className="p-6 text-sm border border-gray-200 rounded-lg"
                >
                  <div className="w-full overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1 group-hover:opacity-75">
                    <Image
                      src={nft.imageSrc}
                      alt={nft.imageAlt}
                      width={290}
                      height={290}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="flex mt-5">
                    <div>
                      <Image
                        src={nft.nftCreatorIcon}
                        alt=""
                        width={200}
                        height={200}
                        className="w-8 mt-5 mr-4 rounded-full"
                      />
                    </div>
                    <div>
                      <p className="mt-4 text-gray-500">{nft.nftCreator}</p>
                      <h3 className="font-bold text-gray-900">{nft.name}</h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
