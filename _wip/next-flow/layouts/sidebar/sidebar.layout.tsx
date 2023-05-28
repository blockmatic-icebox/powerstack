import { RootLayout } from '~/layouts/root'

import { SidebarLayoutProps } from './sidebar.layout.type'

export function SidebarLayout({ sidebar, main, header }: SidebarLayoutProps) {
  return (
    <RootLayout
      header={header}
      main={
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-10 md:gap-10">
          <section className="sticky self-end hidden border border-red-900 lg:col-span-3 xl:col-span-3 sm:col-span-2 lg:block bottom-4">
            {sidebar}
          </section>

          <section className="flex flex-col gap-5 px-0 py-10 border border-green-900 lg:px-10 sm:px-6 sm:col-span-10 lg:col-span-7">
            {main}
          </section>
        </div>
      }
    />
  )
}
