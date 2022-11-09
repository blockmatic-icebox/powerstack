import { GlobalLayout } from "~/components/layouts/global-layout.components"


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
  