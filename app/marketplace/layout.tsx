import { GlobalLayout } from "~/components/global-layout.components"

export default function MarketplaceLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>     
        <GlobalLayout>
          {children}
        </GlobalLayout>
      </div>
    )
  }
  