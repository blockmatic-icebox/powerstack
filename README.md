
# PowerStack Architecture

High performance fullstack architecture, coding guidelines and boilerplates for web3 applications.

You can think about the this architecture as a big redux where:

- Actions are in smart contracts.
- Reducers are in the backend (indexers).
- Dispatcher is the wallet.
- Performant UI with server side rendering.

_Disclaimer: this project is currently under development._

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents** 

- [General Philosophy](#general-philosophy)
  - [The Best Code is No Code](#the-best-code-is-no-code)
  - [Optimize for Change](#optimize-for-change)
  - [Avoid Hasty Abstractions](#avoid-hasty-abstractions)
  - [Declarative Code](#declarative-code)
  - [Composition over Inheritance](#composition-over-inheritance)
  - [Project Features](#project-features)
- [dApp Architecture](#dapp-architecture)
- [Starters](#starters)
- [Tech Stack](#tech-stack)
  - [Frontend](#frontend)
    - [React Remix](#react-remix)
    - [Apollo Client](#apollo-client)
    - [Vercel](#vercel)
    - [Expo](#expo)
  - [Backend](#backend)
    - [GraphQL](#graphql)
    - [Hasura Engine](#hasura-engine)
    - [Database Migrations](#database-migrations)
    - [PostgreSQL](#postgresql)
    - [Google Cloud](#google-cloud)
    - [Docker Containers](#docker-containers)
  - [Web3](#web3)
    - [Ethers](#ethers)
    - [The Graph](#the-graph)
    - [ChainGraph](#chaingraph)
  - [Automation](#automation)
    - [GraphQL CodeGen](#graphql-codegen)
- [Testing Strategies](#testing-strategies)
- [Code Guidelines and Style Conventions](#code-guidelines-and-style-conventions)
  - [JavaScript](#javascript)
  - [Underscore Variables and camelCase functions](#underscore-variables-and-camelcase-functions)
  - [Avoid export default](#avoid-export-default)
  - [React](#react)
  - [File Names](#file-names)
  - [Define components and methods as constant arrow functions](#define-components-and-methods-as-constant-arrow-functions)
  - [Keep things that don't change outside of React components in VanillaJS](#keep-things-that-dont-change-outside-of-react-components-in-vanillajs)
  - [Avoid over optimization (`useCallback` and `useMemo`)](#avoid-over-optimization-usecallback-and-usememo)
  - [Use ternaries rather than && in JSX](#use-ternaries-rather-than--in-jsx)
  - [Keep State Simple](#keep-state-simple)
    - [Prefer serializables objects on store state](#prefer-serializables-objects-on-store-state)
    - [Keep the state flat](#keep-the-state-flat)
    - [Keep i18n files flat](#keep-i18n-files-flat)
- [Blockmatic](#blockmatic)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## General Philosophy

The dApp Architecture project aims to facilitate starting up quickly and following industry best practices.   
The project provides a well documented architecture and guidelines to avoid common pitfalls.

If you are new to Web3 and its concepts Nader Dabit's talk at Next.js Conf 2021 [Defining the Web3 Stack](https://www.youtube.com/watch?v=f9XRH7bjV8M) is a great resource to get started.

The React dApp Architecture follows the following design principles:

### The Best Code is No Code 

The fewer lines of code the better. Every line of code you write increases complexity and error surface. 
### Optimize for Change

The only constant in the universe is change; And software is no different, software evolves constantly.
By encapsulating functionality in small composable pieces you can accomplish great flexibility and speed.

### Avoid Hasty Abstractions

We could spend weeks optimizing code for performance, or coming up with the best API for our new abstraction, only to find out the next day that we made incorrect assumptions and the API needs a complete rework or the feature the code was written for is no longer needed. We don't know for sure. All we can really be sure of is that things will probably change.

For this reason, always start coding locally on your presentation views and extract ui functionality in custom hooks later when you realize the need for it. The same applies global state, dont overthink zustand slicing, make it work first and then optimize.

Read more about [AHA Programming](https://kentcdodds.com/blog/aha-programming)

### Declarative Code

### Composition over Inheritance

### Project Features

- Powerful open source architecture.
- Clear documentation and conventions.
- Applications starters to reduce time-to-market.
- Microservices strategy and automation strategies.
- Multi-chain support and wallet integration.
- Auto-refresh when wallet and network changes.
- Real-time graphql subscriptions client.
- TypeScript types auto-generated from GraphQL Schema.
- Internationalization and Accessibilty. 
- CSS-in-JS and design system with Stitches.
## dApp Architecture

_{diagrams_here}_
## Starters 

- [Remix](https://github.com/blockmatic/powerstack-remix): Webapp Client.
- [Expo](https://github.com/blockmatic/powerstack-expo): Mobile Client for Andriod and iOS.
- [Hasura](https://github.com/blockmatic/powerstack-hasura): GraphQL Engine.
- [Apollo](https://github.com/blockmatic/powerstack-apollo): GraphQL Apollo server.
- [Auth](https://github.com/nhost/hasura-auth): API JWT Auth.
- [Node](https://github.com/blockmatic/powerstack-node): NodeJS Service.
- [Compose](https://github.com/blockmatic/powerstack-compose): Full Environment.
## Tech Stack 

### Frontend
#### React Remix

- SSR React framework with powerful conventions.
- Great documentation and community.

Learn more [Modern React](https://github.com/blockmatic/modern-react) and [Remix Philosophy](https://remix.run/docs/en/v1/pages/philosophy)

#### Apollo Client

- Great documentation and maintainance.
- Large ecosystem and a lot of tooling. 

Learn more [apollographql.com/docs/react/](https://www.apollographql.com/docs/react/)

#### Vercel 

- Ease of configuration.
- Deployment speed.
- Developer experience.

Learn more [vercel.com/docs](https://vercel.com/docs)

#### Expo

Develop for all your users' devices with just one codebase in TypeScript!. 

Learn more [expo.dev](https://expo.dev/)

### Backend 
#### GraphQL

GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

Know exactly what data you can request from your API without leaving your editor, highlight potential issues before sending a query, and take advantage of improved code intelligence. GraphQL makes it easy to build powerful tools like GraphiQL by leveraging your API’s type system.

Learn the basics [howtographql.com/](https://www.howtographql.com/)

#### Hasura Engine

Hasura GraphQL engine automatically generates your GraphQL schema and resolvers based on your tables/views in Postgres. You don’t need to write a GraphQL schema or resolvers.

The Hasura console gives you UI tools that speed up your data-modeling process, or working with your existing database. The console also automatically generates migrations or metadata files that you can edit directly and check into your version control.

Hasura GraphQL engine lets you do anything you would usually do with Postgres by giving you GraphQL over native Postgres constructs.

Learn more at [hasura.io](https://hasura.io)

#### Database Migrations

It enables a rock-solid deployment process because you are doing exactly the same when updating your local database, your development database, your QA database, your acceptance database and your production database. It’s always the same process and it can be automated.

[hasura.io/docs/latest/graphql/core/migrations](https://hasura.io/docs/latest/graphql/core/migrations/index.html)

#### PostgreSQL

PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

- Postgres has a strongly typed schema that leaves very little room for errors. You first create the schema for a table and then add rows to the table. You can also define relationships between different tables with rules so that you can store related data across several tables and avoid data duplication.

- You can change tables in PostgreSQL without requiring to lock it for every operation. For example, you can add a column and set a default value quickly without locking the entire table. This ensures that every row in a table has the column and your codebase remains clean without needing to check if the column exists at every stage. It is also much quicker to update every row since Postgres doesn't need to retrieve each row, update, and put it back.

- Postgres also supports JSONB, which lets you create unstructured data, but with data constraint and validation functions to help ensure that JSON documents are more meaningful. The folks at Sisense have written a great blog with a detailed comparison of [Postgres vs MongoDB for JSON documents](https://www.sisense.com/blog/postgres-vs-mongodb-for-storing-json-data/).

- The newest round of performance comparisons of PostgreSQL and MongoDB produced a near repeat of the results from the first tests that proved PostgreSQL can outperform MongoDB.

Learn more at [postgresql.org](https://www.postgresql.org)


#### Google Cloud

- CloudRun features.
- Ease of configuration.
- Lower cost. 
- Better developer experience.

Learn more [cloud.google.com/](https://cloud.google.com), [CloudRun Overview](https://www.youtube.com/watch?v=gx8VTa1c8DA&t=1s)

#### Docker Containers

The primary benefits of containers are efficiency and agility. Containers are orders of magnitude faster to provision, and much lighter-weight to build and define versus methods like omnibus software builds and full Virtual Machine images. Containers in a single OS are also more efficient at resource utilization than running a Hypervisor and guest OSs.

Efficiency and agility are good for everyone, but they become game-changers at scale. 

Learn more at [cloud.google.com/containers](https://cloud.google.com/containers/) and [Docker](https://docs.docker.com/get-started/)

### Web3
#### Ethers

- Ecosystem, documentation and tests.
- Convenient abstractions, utils and cli.
- ENS names are first-class citizens.
- New Projects are using ethers over web3js.
- Tiny (~88kb compressed; 284kb uncompressed).

Presentation by Richard Moore at DevCon 2019: [A Complete, Tiny and Simple Ethereum Library in JavaScript](https://www.youtube.com/watch?v=r1ldSzcqaHo)

Ethers playground 
- https://playground.ethers.org 
- [Introduction to Ethers.js Playground](https://www.youtube.com/watch?v=qzRWio_-wVw)  by Richard Moore (Ricmoo) at Toronto Ethereum Developers Meetup 2021

#### The Graph

- Leading GraphQL protocol in the blockchain space.
- Anyone can build and publish open APIs, called subgraphs.
- Many different providers.

[thegraph.com](https://thegraph.com/en/)
#### ChainGraph

Experimental project for GraphQL streaming on EOSIO chains.

- Subscribe to state and not the table deltas.
- Query and subscribe to multiples contract and tables.
- Powerful filtering.

[chaingraph.io](https://chaingraph.io)

### Automation

#### GraphQL CodeGen

- Automated TypeScript Types from the GraphQL ( Don't repeat yourself ).
- Automated React hooks generation.

Learn more [gaboesquivel.com/blog/2020/typescript-code-generation-from-graphql/](https://gaboesquivel.com/blog/2020/typescript-code-generation-from-graphql/)

## Testing Strategies

In general focus on testing the critical pieces like the smart contracts and apis, write tests, not too many, mainly integration for most things.

In UI, E2E testing wiil catch most errors and regressions you care about, let the code change fast internally without unit test overhead. Let if flux.
Of course it depends on the project and the particular functionality. Test your business critical flows first, then extend coverage.

## Code Guidelines and Style Conventions

### JavaScript

### Underscore Variables and camelCase functions

```jsx
const my_message= 'hello'
const saySomething = () => console.log(my_message)
```

### Avoid export default

Discoverability is very poor for default exports. You cannot explore a module with intellisense to see if it has a default export or not.

Learn more [Default is Bad](https://basarat.gitbook.io/typescript/main-1/defaultisbad)

### React
### File Names

- PascalCase for all react components.  eg. `AddUser.tsx`
- camelCase for hooks files. eg. `useSubscription.tsx`
- lowercase with dash separator for package folders and names. eg.  `eosio-hooks-transit`

### Define components and methods as constant arrow functions

It helps with type inference and typescript intelisense in your VSCode.

```jsx
const MyComponent: React:FC = ({children}) => {
 const myMethod = () => { }

 return <View>{children}</View>;
}
```

### Keep things that don't change outside of React components in VanillaJS

Ej. defaults, constants, browser configuration.

```jsx
const userAgent = window.navigator.userAgent;
const pageTitle = randomTitle();

const MyPageTitle = () =>  {
 return <Text>{pageTitle}</Text>;
}
```

### Avoid over optimization (`useCallback` and `useMemo`)

Apply the AHA Programming principle and wait until the abstraction/optimization is screaming at you before applying it and you'll save yourself from incurring the costs without reaping the benefit.

Specifically the cost for `useCallback` and `useMemo` are that you make the code more complex for your co-workers, you could make a mistake in the dependencies array, and you're potentially making performance worse by invoking the built-in hooks and preventing dependencies and memoized values from being garbage collected. Those are all fine costs to incur if you get the performance benefits necessary, but it's best to measure first.

- https://kentcdodds.com/blog/usememo-and-usecallback
- https://medium.com/@sdolidze/react-hooks-memoization-99a9a91c8853

### Use ternaries rather than && in JSX

When you use AND operator to conditionally render `flag && <Component>` it could cause the `flag` value to be displayed, that abviously not desirable. Using ternaries is safer and preferable. `flag ? <Component/> : null`

- https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx

### Keep State Simple

In Remix app you will realize that there's very few you are going to need on the Zustand store, most state will come from the [data loaders](https://remix.run/docs/en/v1/guides/data-loading). When you need state follow these best practices
#### Prefer serializables objects on store state

It is highly recommended that you only put plain serializable objects, arrays, and primitives into your store. It's technically possible to insert non-serializable items into the store, but doing so can break the ability to persist and rehydrate the contents of a store, as well as interfere with time-travel debugging.

If you are okay with things like persistence and time-travel debugging potentially not working as intended, then you are totally welcome to put non-serializable items into your store. Ultimately, it's your application, and how you implement it is up to you. As with many other things, just be sure you understand what tradeoffs are involved.
#### Keep the state flat

Updating nested Javascript objects immutably generally results in uglier code that is harder to maintain, unless you use a utility library to wrap up the process

Immutably updating nested data requires that you return new copies of all items in the nesting hierarchy. Since components generally do shallow-equality reference comparisons on data to see if they need to update, updating nested data usually means that more objects are updated, and more components will probably have to re-render even if the actual data isn't different.

Flat data, and in particular normalized data, enables some more optimized approaches for defining components (such as a list where each list item component is itself connected, given an item ID as a prop, and is responsible for looking up its own item's data by that ID)

#### Keep i18n files flat

- Use snake_case keys.
- Don't create nested objects.
- Don't use full text as translation key.

This allows us to quickly search for the keys and know where are these used and defined in the project, it's much better than navigating thru deep structures to find them.

Eg: 

```
{
  login_title: 'Login',
  login_username_input_label: 'Enter your username',
  login_username_input_error: 'Invalid username',
}
```

---

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

[1.2]: http://i.imgur.com/wWzX9uB.png 'twitter icon without padding'
[2.2]: http://i.imgur.com/fep1WsG.png 'facebook icon without padding'
[3.2]: http://i.imgur.com/9I6NRUm.png 'github icon without padding'

<!-- links to your social media accounts -->
<!-- update these accordingly -->

[1]: http://www.twitter.com/blockmatic_io
[2]: http://fb.me/blockmatic.io
[3]: http://www.github.com/blockmatic

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->
