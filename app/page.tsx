import { GlobalLayout } from "~/components/layouts";

export default function Page({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Blockmatic"></meta>
          <title>Blockmatic</title>
        </head>
        <body className="w-full h-screen">
            <GlobalLayout>
              <h1>Home Page</h1>
              {children}
            </GlobalLayout>
        </body>
      </html>
    )
  }
  