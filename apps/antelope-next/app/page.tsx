import { siteConfig } from '~/config/site'

export default function IndexPage() {
  return (
    <section className="container">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          {siteConfig.description}
        </h1>
      </div>
    </section>
  )
}
