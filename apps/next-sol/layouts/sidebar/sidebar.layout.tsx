import { useState } from 'react'

import { RootLayout } from '~/layouts/root'

import { SidebarLayoutProps } from './sidebar.layout.type'

export function SidebarLayout({ Sidebar, main, header }: SidebarLayoutProps) {
  const [open, setOpen] = useState(true)
  return (
    <RootLayout
      header={header}
      main={
        <div className="flex w-full grid-cols-1 gap-4 sm:grid-cols-10 md:gap-10">
          <section className="sticky self-end hidden w-72 lg:col-span-3 xl:col-span-3 sm:col-span-2 lg:block bottom-4">
            {<Sidebar open={open} onClose={setOpen} />}
          </section>

          <section className="flex w-full lg:w-[calc(100%-300px)] flex-col gap-5 px-0 sm:col-span-10 lg:col-span-7">
            {main}
          </section>
        </div>
      }
    />
  )
}
