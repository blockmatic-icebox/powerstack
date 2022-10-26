import React from 'react'
import { Header } from './header'
import { Main } from './main-layout/main.component'
import { Sidebar } from './sidebar'

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
  <div>
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">    
      <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
        <div className="flex flex-shrink-0 items-center px-4">
         LOGO
        </div>
        <div className="mt-5 flex flex-grow flex-col">
          <Sidebar />
        </div>
      </div>   
    </div>
    <div className="flex flex-1 flex-col md:pl-64">  
      <Header/>
      <Main/>
    </div>
  </div> 
  )}
