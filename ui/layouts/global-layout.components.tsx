import React from 'react'
import { Header } from './header'
import { Main } from './main-layout/main.component'
import { Sidebar } from './sidebar'

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
  <div>
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">    
      <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-200">
        
        <div className="flex items-center flex-shrink-0 px-4">
          <div className="flex-shrink-0">
              <img
              className="block w-8 h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
              alt="Your Company"
            />
            </div>
            <div>Blockmatic</div>
          </div>
        
        <div className="flex flex-col flex-grow mt-5">
          <Sidebar />
        </div>
      </div>   
    </div>
    <div className="flex flex-col flex-1 md:pl-64">  
      <Header/>
      <Main/>
    </div>
  </div> 
  )}
