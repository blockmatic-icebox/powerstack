export const siteConfig = {
  name: 'NextJS Antelope App',
  description: 'NextJS Antelope App',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Wallet',
      href: '/',
    },
  ],
  links: {
    twitter: 'https://twitter.com/blockmatic',
    github: 'https://github.com/blockmatic',
    docs: 'https://powerstack.xyz',
  },
}

export type SiteConfig = typeof siteConfig
