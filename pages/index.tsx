import { RootLayout } from '~/layouts/root'
import { HomeView } from '~/views/home'

export default function HomePage() {
  return <RootLayout main={<HomeView />} />
}
