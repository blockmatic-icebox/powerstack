import { GlobalLayout } from "~/components/layouts/global-layout.components"

export default function WalletLayout({
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
  