import Link from "next/link"
import React from "react"

export interface SidebarLinkProps{
  text: string
  href: string
}

export const SidebarLink = ({text, href}: SidebarLinkProps) => {
  return (
      <li key={text} className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group">
        <Link href={href}>  
            {text}          
        </Link>
      </li>
   )
}