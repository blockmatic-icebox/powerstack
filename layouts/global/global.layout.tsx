import { Header } from '~/layouts/global/header'
import { Main } from '~/layouts/global/main-layout'
import { Sidebar } from '~/layouts/global/sidebar'

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <Sidebar />

      <Main>{children}</Main>
    </>
  )
}
