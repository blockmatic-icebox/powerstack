import { siteConfig } from "~/config/site/site.config"
import { AppBarDropdown } from "~/components/app-bar-dropdown"
import { ConnectWallet } from "~/components/connect-wallet"
import { MainNav } from "~/components/main-nav"
import { ThemeToggle } from "~/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-1">
            <ConnectWallet />
            <ThemeToggle />
            <AppBarDropdown />
          </nav>
        </div>
      </div>
    </header>
  )
}
