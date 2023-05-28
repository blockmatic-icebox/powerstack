

export const siteConfig = {
  name: "NextJS Antelope App",
  description:
    "NextJS Antelope App",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Wallet",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/bitcashorg",
    github: "https://github.com/bitcashorg",
    docs: "https://docs.bitcash.org",
  },
}

export type SiteConfig = typeof siteConfig