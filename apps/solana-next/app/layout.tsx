import { Metadata } from "next"

import { siteConfig } from "~/config/site/site.config"
import { cn } from "~/lib/chadcn-utils"
import { fontSans } from "~/lib/fonts"
import { SiteHeader } from "~/components/site-header"
import { ThemeProvider } from "~/components/theme-provider"
import { NextAuthProvider } from "~/app/provider"

import "~/styles/globals.css"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "bg-background min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <NextAuthProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex flex-col min-h-screen">
                <SiteHeader />
                <div className="flex-1">{children}</div>
              </div>
            </ThemeProvider>
          </NextAuthProvider>
        </body>
      </html>
    </>
  )
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}
