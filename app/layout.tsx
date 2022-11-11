import '~/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta name="description" content="Blockmatic"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blockmatic</title>
      </head>
      <body className="w-full h-screen">
        {children}
      </body>
    </html>
  )
}
