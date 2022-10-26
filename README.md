# PowerStack NextJS Starter

NextJS application starter for rapid development of multi-chain applications.

⚡️ [PowerStack: a powerful fullstack development framework](https://powerstack.xyz).

_Disclaimer: This is a work in progress. Will be finalized soon._

Demo <https://powerstack-next.vercel.app/>

## Features

- Web2 and Web3 authentication ( EVM, Solana, Antelope, Web3Auth ).
- Read blockchain state, sign messages and transactions.
- Read account token balances and nfts.
- Read token prices and market data.
- Next 13 optimized architecture and best practices.
- Semantic, idiomatic, functional and declarative codestyle.
- Utility first CSS with TailwindUI components.
- Upload files to Arweave using Blundr.
- Upload files to IPFS using Pinata.
- Utilities for decimal precision and math.
- Internationalization.
- Integration with DatoCMS.
- TypeScript, ESLint, Prettier and hooks for code quality.
- Docker support and Taskfile.

## Tech Stack

- NextJS [nextjs.org](https://nextjs.org)
- TailwindCSS [tailwindcss.com](https://tailwindcss.com)
- Ethers [docs.ethers.io](https://docs.ethers.io/v5)
- Solana Web3 [solana-labs/solana-web3.js](https://github.com/solana-labs/solana-web3.js)
- TweetNaCl.js [dchest/tweetnacl-js](https://github.com/dchest/tweetnacl-js)
- Eosio Core [greymass/eosio-core](https://github.com/greymass/eosio-core)
- Decimal.js [MikeMcl/decimal.js](https://github.com/MikeMcl/decimal.js)
- Iron Session [vvo/iron-session](https://github.com/vvo/iron-session)
- Lodash tools [lodash.com/docs](https://lodash.com/docs)
- Zod validator [colinhacks/zod](https://github.com/colinhacks/zod)
- React-use hooks [streamich/react-use](https://github.com/streamich/react-use)
- Sentry reporting [sentry.io/](https://sentry.io/)
- Next i18next [i18next/next-i18next](https://github.com/i18next/next-i18next)

### File Structure

```
.
├── config .............................. environment variables and secrets
│   ├── client
│   └── server
├── context ............................. global react context
├── graphql ............................. genql generated sdk
│   └── generated
├── lib ................................. utility pure functions
│   ├── encoding
│   ├── logger
│   ├── platform
│   ├── ssr
│   └── utils
├── pages ............................... nextjs routes
│   └── [account]
├── public .............................. nextjs public
│   ├── fonts
│   └── images
├── services ............................ stateless services
│   ├── auth                              to interact with apis
│   ├── media                             and crypto wallets
│   ├── price
│   ├── search
│   ├── solana
│   └── user
├── types ............................... global typescript types
└── ui .................................. ui react components
    ├── components
    │   └── shared-example
    │       ├── index.ts
    │       ├── shared-example.context.tsx
    │       ├── shared-example.components.tsx
    │       ├── shared-example.tests.tsx
    │       └── shared-example.types.ts
    ├── layouts
    │   └── main-layout
    │       ├── index.ts
    │       └── main-layout.components.tsx
    ├── styles
    │   └── globals.css
    └── views
        └── home
            └── home-example
                ├── home-example.components.tsx
                └── index.ts
```

## JavaScript Code Conventions

- naming variables: boolean should be named using auxiliary verbs such as `does`, `has`, `is` and `should`. For example, Button uses `isDisabled`, `isLoading`, etc.
- composition: break down components into smaller parts with minimal props to keep complexity low, and compose them together.
- filenames: create folders with and index, lowercase with dash separator for dirs and names `components/auth-wizard`, and five the following extensions each file acordingly `.config.ts`, `.component.tsx`, `.test.ts`, `.context.tsx`, `.type.ts`, `.hook.ts`
- avoid default export [default is bad](https://basarat.gitbook.io/typescript/main-1/defaultisbad)

```ts
const helloMessage = 'hello'
export function saySomething() {
  const someValue = 'fren'
  console.log(`${helloMessage} ${someValue}`)
}
```

## ReactJS Conventions

- declare component with function keyword
- use const for methods
- place code in the following order
  - function component declaration
  - styled components
  - typescript types
  - getServerSideProps

Eg.

```tsx
export function MyReactComponent({ myParam }: MyReactComponetParams) {
  const myMethod = () => console.log(myParam)

  return (
    <div className="md:flex bg-slate-100 ">
      A new world awaits. <br /> be the first to discover it.
      <button onClick={myMethod}>let's goo!</button>
    </div>
  )
}

export interface MyReactComponetParams {
  myParam: boolean
}
```

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commands

- `dev`: runs your application on `localhost:3000`.
- `build`: creates the production build version.
- `start`: starts a simple server with the build production code.

## Docker

```bash
# Build the image
docker build -t powerstack-next:local .

# Start a container
docker run --name powerstack-next --env-file .env -p 3000:3303 -d powerstack-next:local

# Get container ID
docker ps -aqf "name=^powerstack-next$"

# Print app output
docker logs -f powerstack-next

# Stop, start, restart, kill
docker stop powerstack-next
docker start powerstack-next
docker restart powerstack-next
docker kill powerstack-next
```

## Contributing

We use a [Discussions Board](https://github.com/blockmatic/powerstack-docs/discussions/1) to gather thoughts, bug reports and feature requests from the community.

Follow the standard Github Flow for PRs. [Contributing Guidelines](https://docs.powerstack.xyz/powerstack/other-resources/contributing-guidelines).

## Blockmatic

Blockmatic is building a robust ecosystem of people and tools for the development of blockchain applications.

[blockmatic.io](https://blockmatic.io)

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

<!-- display the social media buttons in your README -->

[![Blockmatic Twitter][1.1]][1]
[![Blockmatic Facebook][2.1]][2]
[![Blockmatic Github][3.1]][3]

<!-- links to social media icons -->
<!-- no need to change these -->

<!-- icons with padding -->

[1.1]: http://i.imgur.com/tXSoThF.png 'twitter icon with padding'
[2.1]: http://i.imgur.com/P3YfQoD.png 'facebook icon with padding'
[3.1]: http://i.imgur.com/0o48UoR.png 'github icon with padding'

<!-- icons without padding -->

<!-- links to your social media accounts -->
<!-- update these accordingly -->

[1]: http://www.twitter.com/blockmatic_io
[2]: http://fb.me/blockmatic.io
[3]: http://www.github.com/blockmatic

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->
