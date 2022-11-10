import React from 'react'
import { Blockmatic, BlockmaticIcon } from '../icons'
import { Header } from './header'
import { Main } from './main-layout/main.component'
import { Sidebar } from './sidebar'

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="hidden mt-0 md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 h-16 px-5">
            <div className="flex flex-shrink-0 space-x-2">
              <BlockmaticIcon />
              <Blockmatic />
            </div>
          </div>
          <div className="flex flex-col flex-grow mt-4 border-t border-gray-200">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 md:pl-64">
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
  )
}
