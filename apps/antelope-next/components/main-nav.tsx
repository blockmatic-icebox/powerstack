import * as React from "react"
import Link from "next/link"
import { AntelopeIcon } from "~/icons"
import { cn } from "shared-lib"

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        {/* <Icons.logo className="w-6 h-6" /> */}
        <AntelopeIcon className="text-white" />
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}

interface MainNavProps {
  items?: NavItem[]
}

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}
