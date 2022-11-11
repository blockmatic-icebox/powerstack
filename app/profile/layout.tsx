import { GlobalLayout } from "~/components/global-layout.components"

export default function ProfileLayout({
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
  