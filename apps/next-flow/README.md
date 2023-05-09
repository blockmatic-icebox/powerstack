# PowerStack NextJS Starter

NextJS application starter for rapid development of multi-chain applications.

⚡️ [PowerStack: a powerful fullstack development framework](https://powerstack.xyz).

<img width="892" alt="image" src="https://user-images.githubusercontent.com/391270/218875724-35571654-5576-4e61-835f-e6aa325f4cc9.png">

_ This is a work in progress._

Demo <https://powerstack-next.vercel.app/>

### File Structure

```
.
├── config .............................. environment variables
│   ├── client .......................... client side vars
│   └── server .......................... server side secrets
├── context ............................. shared state
│   └── global.context.ts
├── icons ............................... svg icons as components
├── hooks ............................... global react hooks
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
│   ├── web3auth                          to interact with apis
│   ├── media                             and crypto wallets
│   ├── events
│   ├── sentry
│   ├── solana
│   └── evm
├── types ............................... global typescript types
├── components .......................... shared components
│   └── example
│       ├── index.ts
│       ├── example.context.tsx
│       ├── example.component.tsx
│       ├── example.test.tsx
│       └── example.type.ts
├── layouts ............................. structural components
│   └── main-layout
│       ├── index.ts
│       └── main-layout.component.tsx
├── styles .............................. css styles
│   └── globals.css
└── views ............................... components for specific views
    └── home
        └── home-example
            ├── home-example.component.tsx
            └── index.ts
```
