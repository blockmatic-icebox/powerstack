'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

const tabs = [
  { name: 'Profile', href: '#', current: true },
  { name: 'Notifications', href: '#', current: false },
  { name: 'Security', href: '#', current: false },
]

export default function Profile() {
  const [currentTab, setCurrentTab] = useState<number>(0)
  const defaultImage = '/images/image10.png'

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#111F40]">Profile Configuration</h1>
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
      </div>
      {currentTab === 0 && (
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="py-8 space-y-2 rounded-xl sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <div className="flex flex-shrink-0 place-content-center">
              <Image
                className="w-24 h-28"
                src={defaultImage}
                width={87}
                height={104}
                alt="username icon"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="space-y-0.5">
                <p className="text-xl font-bold text-[#1A2141]">{username.name}</p>
                <p className="font-medium text-[#1A2141]">
                  Select one of your NFTs as your profile picture
                </p>
              </div>
              <button className="text-sm text-[#044BFF]">Change profile NFT</button>
            </div>
          </div>
          <div className="pb-6">
            <h1 className="text-2xl font-bold text-[#111F40]">Account Details</h1>
          </div>
          <div className="relative pb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t text-[#E7E9ED]" />
            </div>
          </div>
          <div className="pb-8">
            <h2 className="py-4 text-base text-[#404467] font-inter">User Name</h2>
            <input type="text" className="box-content rounded-lg w-96 border-1 text-[#111F40]" />
            <h2 className="py-4 text-base text-[#404467] font-inter">Email</h2>
            <input type="email" className="box-content rounded-lg w-96 border-1 text-[#111F40]" />
            <h2 className="pt-4 text-base text-[#404467] font-inter">Bio</h2>
            <input
              type="text"
              className="box-content h-32 p-4 rounded-lg w-96 border-1 text-[#111F40]"
            />
          </div>
          <button
            type="button"
            className="px-6 py-4 text-sm text-white bg-[#044BFF] rounded-2xl font-inter"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  )
}

const username = {
  name: '@M4st3rmiau ',
}
