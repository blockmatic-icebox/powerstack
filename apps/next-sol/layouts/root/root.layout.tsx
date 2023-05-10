import { SignUp } from '~/components/signup'
import { AppBar } from '~/layouts/components/app-bar'
import { cn } from '~/styles'

// import { AppBar2 } from '../components/app-bar-2'
import { Footer } from '../components/footer'
import { RootLayoutProps } from './root-layout.type'

export function RootLayout({ main, header }: RootLayoutProps) {
  return (
    <div className={cn('w-full h-min bg-gray-50 dark:!bg-navy-900 flex flex-col justify-center')}>
      <AppBar />
      {/* <AppBar2 /> */}

      <div className="flex justify-center p-2">
        <section className="container flex flex-col">
          {header ? <header className="w-full dark:!bg-navy-900">{header}</header> : null}
          {main}
        </section>
      </div>
      <SignUp />

      <Footer />
    </div>
  )
}
