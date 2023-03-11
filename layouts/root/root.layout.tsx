import { AppBar } from '~/layouts/components/app-bar'
import { cn } from '~/styles'

import { RootLayoutProps } from './root-layout.type'

export function RootLayout({ main, header }: RootLayoutProps) {
  return (
    <div className={cn('w-full h-screen')}>
      <AppBar />

      {header ? <header className="w-full">{header}</header> : null}

      <main
        className={cn(
          'relative flex flex-col justify-center w-full px-2 pb-10 mx-auto md:py-10 xl:px-24 lg:px-24 md:max-w-screen-xl md:items-center',
        )}
      >
        {main}
      </main>
    </div>
  )
}
