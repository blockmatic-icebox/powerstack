import { Hamburger } from '../hamburger'

export function AppBar() {
  return (
    <div className="sticky top-0 z-10 flex flex-col w-full bg-white md:items-center">
      app bar
      <Hamburger />
    </div>
  )
}
