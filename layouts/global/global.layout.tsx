import { Header } from '~/layouts/global/header'
import { Main } from '~/layouts/global/main-layout'
import { Sidebar } from '~/layouts/global/sidebar'

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        <Header/>
        <Main>{children}</Main>
      </div>
    </div>
  )
}
