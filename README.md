
# PowerStack Architecture

High performance fullstack architecture, coding guidelines and boilerplates for web3 applications.

_Disclaimer: this project is currently under development._

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [PowerStack Architecture](#powerstack-architecture)
  - [General Philosophy](#general-philosophy)
    - [The Best Code is No Code](#the-best-code-is-no-code)
    - [Optimize for Change](#optimize-for-change)
    - [Cannonical Approach](#cannonical-approach)
    - [Simple Global State](#simple-global-state)
    - [Avoid Hasty Abstractions](#avoid-hasty-abstractions)
    - [Composition over Inheritance](#composition-over-inheritance)
  - [dApp Architecture](#dapp-architecture)
  - [Starter features](#starter-features)
  - [Tech Stack](#tech-stack)
    - [Ethers](#ethers)
    - [Zustand](#zustand)
    - [GraphQL](#graphql)
      - [Apollo Client](#apollo-client)
      - [The Graph](#the-graph)
      - [ChainGraph](#chaingraph)
    - [Emotion](#emotion)
      - [Theme Structure](#theme-structure)
  - [Project Structure](#project-structure)
  - [Testing](#testing)
  - [Starters](#starters)
  - [Recommended Libraries](#recommended-libraries)
  - [Useful React Patterns](#useful-react-patterns)
    - [Context Hook Pattern](#context-hook-pattern)
    - [Hooks Utils and createContextHook](#hooks-utils-and-createcontexthook)
    - [Error Boundaries](#error-boundaries)
    - [useState with functional updates](#usestate-with-functional-updates)
    - [useReducer](#usereducer)
  - [Code Guidelines & Style Conventions](#code-guidelines--style-conventions)
    - [Prefer serializables objects on store state](#prefer-serializables-objects-on-store-state)
    - [Define components and methods as constant arrow functions](#define-components-and-methods-as-constant-arrow-functions)
    - [Keep things that don't change outside of React components in VanillaJS](#keep-things-that-dont-change-outside-of-react-components-in-vanillajs)
    - [Keep the state flat](#keep-the-state-flat)
    - [Keep i18n files flat too](#keep-i18n-files-flat-too)
    - [Favor camelCase variables, snake_ase attributes is ok](#favor-camelcase-variables-snake_ase-attributes-is-ok)
    - [Rerturn arrays in hooks](#rerturn-arrays-in-hooks)
    - [Avoid over optimization (`useCallback` and `useMemo`)](#avoid-over-optimization-usecallback-and-usememo)
    - [Avoid isLoading booleans](#avoid-isloading-booleans)
    - [Use ternaries rather than && in JSX](#use-ternaries-rather-than--in-jsx)
    - [Typescript types or interfaces?](#typescript-types-or-interfaces)
    - [File names](#file-names)
    - [Avoid export default](#avoid-export-default)
      - [Poor Discoverability](#poor-discoverability)
      - [Autocomplete](#autocomplete)
      - [CommonJS interop](#commonjs-interop)
      - [Typo Protection](#typo-protection)
      - [TypeScript auto-import](#typescript-auto-import)
      - [Re-exporting](#re-exporting)
      - [Dynamic Imports](#dynamic-imports)
      - [Needs two lines for non-class / non-function](#needs-two-lines-for-non-class--non-function)
  - [Blockmatic](#blockmatic)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## General Philosophy

The dApp Architecture project aims to facilitate starting up quickly and following industry best practices.
The project provides a well documented architecture and guidelines to avoid common pitfalls.

If you are new to Web3 and its concepts Nader Dabit's talk at Next.js Conf 2021 [Defining the Web3 Stack](https://www.youtube.com/watch?v=f9XRH7bjV8M) is a great resource to get started.

The React dApp Architecture follows the following design principles:

### The Best Code is No Code

The fewer lines of code the better. Every line of code you write increases complexity and error surface.
Well maintained frameworks and libraries provide battle tested code and regurlarly updated codebases.
It is also easier to onboard new developers to the project when using known frameworks and tools such as NextJS and Ethers.

### Optimize for Change

The only constant in the universe is change; And software is no different, software evolves constantly.
By encapsulating functionality in small composable pieces you can accomplish great flexibility and speed.

### Cannonical Approach

React Hooks is the new way of writing ReactJS applications. They let you use state and other React features without writing a class, which means you can now write your entire application using _functional programming and functional components_ and this has a myriad of advantages.

Most notably having the ability to separate functionality by concern and not by stage in the lifecycle method ( single responsibility principle ) which makes the source code of the applications much more readable, maintainable and increases the reusability and portability of the components.

Read [ReactJS Hooks Motivation](https://reactjs.org/docs/hooks-intro.html#motivation) for more information.

### Simple Global State

While hooks are great for encapsulating UI functionality, state management on a application is more than just UI state and most of time Vanilla JS is all you need. Zustand is an agnostic state management library that greatly simplifies global state on React applications. While you can technically keep all your logic in hooks, as your application grows you will find that this approach creates some overhead, is very verbose and it can have an inpact on rendering performance, the more context providers you add the more undesired rerenders your application will typically have.  

### Avoid Hasty Abstractions

We could spend weeks optimizing code for performance, or coming up with the best API for our new abstraction, only to find out the next day that we made incorrect assumptions and the API needs a complete rework or the feature the code was written for is no longer needed. We don't know for sure. All we can really be sure of is that things will probably change.

For this reason, always start coding locally on your presentation views and extract ui functionality in custom hooks later when you realize the need for it. The same applies global state, dont overthink zustand slicing, make it work first and then optimize.

Read more about [AHA Programming](https://kentcdodds.com/blog/aha-programming)

### Composition over Inheritance

The big problem with inheritance is that you’re encouraged to predict the future. Inheritance encourages you to build this taxonomy of objects very early on in your project, and you are most likely going to make design mistakes doing that, because humans cannot predict the future (even though it feels like we can).

A slight change in requirements can make the most elegant code fall apart. The more complex a system, the more difficult it is to build a mental model of the system, and the harder it becomes to operate and debug it. As Edsger W. Dijkstra put it, _“Simplicity is prerequisite for reliability”_

## dApp Architecture

_{diagrams_here}_

## Starter features

- multi-chain support
- wallet integration
- auto-refresh when wallet and network changes
- real-time subscriptions client
- support multiple graphql links
- typescript types auto-generated from graphql
- simple global state management
- global state devtool
- internationalization
- css-in-js and theming with emotion
- helpful comments in code

## Tech Stack

...

### Ethers

- Ecosystem, documentation and tests
- Convenient abstractions, utils and cli
- ENS names are first-class citizens
- New Projects are using ethers over web3js
- Tiny (~88kb compressed; 284kb uncompressed)

Presentation by Richard Moore at DevCon 2019: [A Complete, Tiny and Simple Ethereum Library in JavaScript](https://www.youtube.com/watch?v=r1ldSzcqaHo)

Ethers playground

- <https://playground.ethers.org>
- [Introduction to Ethers.js Playground](https://www.youtube.com/watch?v=qzRWio_-wVw)  by Richard Moore (Ricmoo) at Toronto Ethereum Developers Meetup 2021

### Zustand

Zustand helps to keep state management and concise, reduces boilerplate and prevents undesired ui renders. Lots of time was spent to deal with common pitfalls, like the dreaded zombie child problem, react concurrency, and context loss between mixed renderers. It may be the one state-manager in the React space that gets all of these right.

**Why zustand over redux?**

- Simple and un-opinionated
- Makes hooks the primary means of consuming state
- Doesn't wrap your app in context providers
- Can inform components transiently (without causing render)

**Why zustand over context?**

- Less boilerplate
- Renders components only on changes
- Centralized, action-based state management

**Why zustand over valtio and jotai?**

- Familiar flux pattern
- Ecosystem and extensions

Zustand, valtio and jotai are three different takes on three different global state management paradigms implementations

- Zustand is another take on the flux pattern famously catapulted by Redux
- Valtio is another take on functional reactive programming initially represented by MobX
- Jotai is another take on atom based state management spearheaded by Recoil

Learn more [pmndrs/zustand](https://github.com/pmndrs/zustand)

### GraphQL

GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

Know exactly what data you can request from your API without leaving your editor, highlight potential issues before sending a query, and take advantage of improved code intelligence. GraphQL makes it easy to build powerful tools like GraphiQL by leveraging your API’s type system.

Learn the basics [howtographql.com/](https://www.howtographql.com/)

#### Apollo Client

- Great documentation and maintainance
- Large ecosystem and a lot of tooling  

[apollographql.com/docs/react/](https://www.apollographql.com/docs/react/)

#### The Graph

- Leading GraphQL protocol in the blockchain space
- Anyone can build and publish open APIs, called subgraphs
- Many different providers

[thegraph.com](https://thegraph.com/en/)

#### ChainGraph

Experimental project for GraphQL streaming on EOSIO chains.

- Subscribe to state and not the table deltas
- Query and subscribe to multiples contract and tables
- Powerful filtering

[chaingraph.io](https://chaingraph.io)

### Emotion

Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.

Emotion minimizes the runtime cost of css-in-js dramatically by parsing your styles with babel and PostCSS, making it high performance, lightweight css-in-js library. The idea is simple. You shouldn’t have to sacrifice runtime performance for good developer experience when writing CSS, something that is being explained on a philosophy given by [Sunil Pai](https://gist.github.com/threepointone/0ef30b196682a69327c407124f33d69a).

There are good points that support Emotion to be what it calls to be, such as:

- **No Globally Scoped Selectors**: With emotion, we do not worry about the selector names existing in a global scope with cascading overrides.
- **Consistency**: With UI CSS libraries, we get to the ground quickly but normally we would have to make custom changes and it can lead to an unnecessary learning curve or tabbing back and forth to find the right selector. With Emotion makes this easy since this extends the styles of a React component via `styled(Component)` function.
- **Sass Syntax**: We can use it out-of-the-box without having to set any preprocessor and extra build tools.
- **Theming**: By using React Context API, Emotion can provide a ThemeContext, which pass a theme object, accessible to any component and by default can be interpolated into your styled definitions. For example:

```jsx
import React from 'react';
import styled from '@emotion/styled';

// By using string interpolation to wrap a function in
// your style definition, you can access the props of the
// component & the theme.
const Button = styled.button`
  color: ${({ theme }) => theme.color.textPrimary};
`;

export default () => {
  return (
    <Button /> 
  );
};
```

- **Dynamic Styling**: Same way as we access our theme, you can do it as well for props passes to the compoenent, opening up powerful opportunities to create reusable, customizable components. Rather than creating multiple class definitions, you can leverage props to dynamically change the styles.

```jsx
import React from 'react';
import styled from '@emotion/styled';

// By default, the Text component will render
// to the dom as a <p> tag.
const Text = styled.p`
  color: ${({ color, theme }) => theme.color[color]};
  font-size: ${({ size }) => size}px;
  line-height: ${({ lineHeight, size }) => lineHeight || size + 8}px;
`;

Text.defaultProps = {
   color: 'text',
   size: 16,
};

export default () => {
  return (
    <div>
      <Text color="primary" as="h1" size={24}>Title</Text>
      <Text>Paragraph</Text>
    </div>
  ); 
};
```

> " On first `<Text>` component, notice the 'as' property, above we pass "h1" to render the Text as a heading, whilst maintaining the style definition. "

It is known also that Emotion might create performance issues in larger applications & websites. Performance and the caching of assets is instrumental in maintaining a solid user experience, especially as tech becomes more readily available in areas with slower connections. Nevertheless, following good practices is the key to make these components efficient, for that I'll make another points to acknowledge it:

- **Code split & lazy load**: this is a common technique that we apply for components in general, though one point to highlight is when we use these components and inside of it we define our styles.

```jsx
// index.tsx
// ... imports
import styled from '@emotion/styled'

const ComponentA = styled.div`` // ... styles
const ComponentB = styled.section`` // ... styles
const ComponentC = styled.form`` // ... styles
const ComponentD = styled.p`` // ... styles
const ComponentE = styled.input`` // ... styles
const ComponentF = styled.button`` // ... styles

export const FunctionalComponent = () => {
  // ... code
}
```

The above cause performance issues due the component will first try to render those styles and then the component itself.
It makes sense to us to split the code on this scenario and open to do lazy load if required and available:

```jsx
// Styles.tsx
import styled from '@emotion/styled'

export const ComponentA = styled.div`` // ...styles
export const ComponentB = styled.div`` // ...styles

// and so on...
```

And it does it again if we put these components into a separate file within the parent related component folder, as:

```bash
.
├── store
├── assets
├── components
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── FunctionalComponent/
│       ├── index.tsx
│       ├── Styles.tsx ...................... Defined styled components
├── hooks
├── pages
├── utils
└── lib
```

- **Component style extensions**: Emotion is able to add more styles to a defined component. Using it as advantage.
- **Using theme in all cases**: Since theme is on the react context, it is important to use it on all cases that apply and rely on the props, in order to avoid cumbersome code.

[emotion.sh](https://emotion.sh/)

#### Theme Structure

Our structure is base on supporting Dark & Light themes, automatically read user theme on first request in order to render proper colors & styles if apply and save the elected one on the cookies for smooth theme render (SSR). We focus on create generic names so this can be in use on any application or web that we develop. In order to do so, we do the following:

1. To develop the theme according project necessities, adding every scale point, radius, line-height, etc... As an example, we follow [this structure](https://gist.github.com/AndlerRL/57f54a146dbff6d5f50a3d44e0aae843#file-theme-js).
2. To create Global Styles that can read the user elected theme, so we can make differences in our [Global styles](https://gist.github.com/AndlerRL/57f54a146dbff6d5f50a3d44e0aae843#file-globalstyles-js) if required.
3. To create a [`index` file](https://gist.github.com/AndlerRL/57f54a146dbff6d5f50a3d44e0aae843#file-index-js) to export all the required function to spread logic among all components.

> Notice the dark/light theme properties on colors, this one is being applied while we read the user browser theme, so we can render at the end, the desire one.
>
> This structure is very convenient because with the usage of variants for components. We can pass these as properties and render them with the selected option, as we have it on buttons, we can do the same for cards if the application requires it.

## Project Structure

Inside each project directory functionality modularized in modules that internally use hooks, context, jsx and css-in-js with emotion.sh
Each project contains it's onw README file with detailed information.

```bash
.
├── store ................................... Zustand store. Slicing is recommended
├── assets .................................. Static assets
├── components .............................. Components used by different views
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── VideoPlayer/
│       ├── index.tsx
│       ├── useVideoPlayerControls.tsx
│       └── useStreaming.tsx
├── hooks .................................. Global hooks ( prefer Zustand over context api for global state )
│   ├── useWallet.tsx
│   ├── useAuth.tsx
│   ├── useBigHook/
│   │    ├── index.tsx
│   │    ├── Big.tsx
│   │    └── BigHookProvider.tsx
│   └── ...
├── pages .................................. NextJS route container components
│   ├── index.tsx
│   ├── Swaps.tsx
│   ├── Trade.tsx
│   └── Profile/
│       ├── index.tsx
│       └── useProfileCustomizations.tsx
├── utils .................................. Utilities, helpers, constants, and the like
│   └── index.tsx
└── lib .................................... JS services, third party libs, sdks, etc
    ├── apollo-client.tsx
    └── somelib.tsx
```

## Testing

Write tests, not too many, mainly integration.
E2E testing and API black box testing will catch most errors and regressions you care about, let the code change fast internally without unit test overhead. Let if flux.
Of course it depends on the project and the particular functionality. Test your business critical flows first, then extend coverage.

Read more about [this testing approach](https://kentcdodds.com/blog/write-tests)

## Starters

Each dApp starter has it's own README.md file with detailed feature list and components information.

_under development ..._

- [NextJS Ethers](./next-ethers)
- [NextJS EOSIO](./next-eosio)
- [NextJS Solana](./next-solana)

## Recommended Libraries

Recommended libraries not included in the boilerplates.

- [react-use](https://github.com/streamich/react-use) - React hooks swissknife.
- [react-hook-form](https://github.com/react-hook-form/react-hook-form) - Performant, flexible and extensible forms with easy to use validation.
- [react-i18next](https://react.i18next.com/latest/usetranslation-hook) - Internationalization
- <https://github.com/crcn/sift.js/>
- <https://github.com/cchanxzy/react-currency-input-field>

## Useful React Patterns

### Context Hook Pattern

While we encorage Zustand VanillaJS stores for global state the context hook pattern still plays a fundamental role in hooks architecture.  
The Context API in React allows you to share state between different components.
Encapsulating Context and Hooks in atomic modules has the following advantages.

- Prevents prop drilling.
- Single responsibility principle.
- Increased portability.
- Easier to debug and test.
- Idiomatic.

```tsx
import React from 'react'
import useNotifications from 'hooks/useNotifications'
import { createObservable } from 'lib/observables'
import { CustomHookContextType, Message } from './types'

const CustomHookContext = React.createContext<CustomHookContextType | null>(null)

const CustomHookProvider: React.FC = ({ children }) => {
  const [message, setMessage] = React.useState<Message | null>(null)
  const observable = React.useMemo(() => createObservable(), [])
  const { showNotification } = useNotifications()

  React.useEffect(() => {
    showNotification({ message })
  }, [message, showNotification])

  React.useEffect(() => {
    observable.subscribe('message', ({ message }) => setMessage(message))
    return () => observable.unsubscribe()
  }, [observable])

  return (
    <CustomHookContext.Provider value={{ setMessage }}>
      {children}
    </CustomHookContext.Provider>
  )
}

const useCustomHook = () => {
  const context = React.useContext(CustomHookContext)

  if (context === undefined) {
    throw new Error(
      'You must wrap your application with <CustomHookProvider /> in order to useCustomHook().',
    )
  }

  return context
}

export default useCustomHook
```

### Hooks Utils and createContextHook

`createContextHook` allows us to quickly create react hooks with a context. It simplifies and removes all the boilerplate required to create context hooks.

```jsx
import { createContextHook } from '@blockmatic/hooks-utils'
import React from 'react'

const useHookFn = () => {
  const [state, setState] = React.useState(false)
  const toggle = () => setState(!state)
  return { state, toggle }
}

export const [useHook, HookProvider] = createContextHook(
  useHookFn,
  'You must wrap your application with <HookProvider /> in order to useHook().',
)
```

### Error Boundaries

<https://www.npmjs.com/package/react-error-boundaries>

### useState with functional updates

```jsx
const [count, setCount] = React.useState(0)
const inc = React.useCallback(() => setCount((c) => c + 1), [])
```

### useReducer

`useReducer` memoization works exactly as `useState` in this example. Since dispatch is guaranteed to have same reference across renders, `useCallback` is not needed, which makes code less error-prone to memoization related bugs.

```jsx
const [count, inc] = React.useReducer((c) => c + 1, 0)
```

## Code Guidelines & Style Conventions

### Prefer serializables objects on store state

It is highly recommended that you only put plain serializable objects, arrays, and primitives into your store. It's technically possible to insert non-serializable items into the store, but doing so can break the ability to persist and rehydrate the contents of a store, as well as interfere with time-travel debugging.

If you are okay with things like persistence and time-travel debugging potentially not working as intended, then you are totally welcome to put non-serializable items into your store. Ultimately, it's your application, and how you implement it is up to you. As with many other things, just be sure you understand what tradeoffs are involved.

### Define components and methods as constant arrow functions

It helps with type inference and typescript intelisense in your VSCode

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

const MyPageTitle: React:FC = ({children}) =>  {
 return <Text>{pageTitle}</Text>;
}
```

### Keep the state flat

Three main reasons:

- Updating nested Javascript objects immutably generally results in uglier code that is harder to maintain, unless you use a utility library to wrap up the process

- Immutably updating nested data requires that you return new copies of all items in the nesting hierarchy. Since components generally do shallow-equality reference comparisons on data to see if they need to update, updating nested data usually means that more objects are updated, and more components will probably have to re-render even if the actual data isn't different.

- Flat data, and in particular normalized data, enables some more optimized approaches for defining components (such as a list where each list item component is itself connected, given an item ID as a prop, and is responsible for looking up its own item's data by that ID)

<https://stackoverflow.com/questions/38842454/why-should-i-keep-the-state-flat>

### Keep i18n files flat too

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

### Favor camelCase variables, snake_ase attributes is ok

```jsx
const myVar = 'hello'
const blockmaticAccount = await rpc.get_account('blockmaticio')
console.log(blockmaticAccount.last_code_update) // eosio snake case attributes, that's fine.
```

### Rerturn arrays in hooks

If a hook returns an array, you can name the variables whatever you want more easily than using destructuring.

### Avoid over optimization (`useCallback` and `useMemo`)

Apply the AHA Programming principle and wait until the abstraction/optimization is screaming at you before applying it and you'll save yourself from incurring the costs without reaping the benefit.

Specifically the cost for `useCallback` and `useMemo` are that you make the code more complex for your co-workers, you could make a mistake in the dependencies array, and you're potentially making performance worse by invoking the built-in hooks and preventing dependencies and memoized values from being garbage collected. Those are all fine costs to incur if you get the performance benefits necessary, but it's best to measure first.

- <https://kentcdodds.com/blog/usememo-and-usecallback>
- <https://medium.com/@sdolidze/react-hooks-memoization-99a9a91c8853>

### Avoid isLoading booleans

Why using a status enum (or even better: a state machine) will help your app stay bug free.  
<https://kentcdodds.com/blog/stop-using-isloading-booleans>

### Use ternaries rather than && in JSX

When you use AND operator to conditionally render `flag && <Component>` it could cause the `flag` value to be displayed, that abviously not desirable. Using ternaries is safer and preferable. `flag ? <Component/> : null`

- <https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx>

### Typescript types or interfaces?

Always use interface for public API's definition when authoring a library or 3rd party ambient type definitions.

Use type for your React Component Props and State, because it is more constrained.

### File names

- PascalCase for all react components.  eg. `AddUser.tsx`
- camelCase for hooks files. eg. `useSubscription.tsx`
- lowercase with dash separator for package folders and names. eg.  `eosio-hooks-transit`

### Avoid export default

Consider you have a file `foo.ts` with the following contents:

```ts
class Foo {}
export default Foo;
```

You would import it (in `bar.ts`) using ES6 syntax as follows:

```ts
import Foo from "./foo";
```

There are a few maintainability concerns here:

- If you refactor `Foo` in `foo.ts` it will not rename it in `bar.ts`.
- If you end up needing to export more stuff from `foo.ts` (which is what many of your files will have) then you have to juggle the import syntax.

For this reason I recommend simple exports + destructured import. E.g. `foo.ts`:

```ts
export class Foo {}
```

And then:

```ts
import { Foo } from "./foo";
```

Below I also present a few more reasons.

#### Poor Discoverability

Discoverability is very poor for default exports. You cannot explore a module with intellisense to see if it has a default export or not.

With export default you get nothing here (maybe it does export default / maybe it doesn't `¯\_(ツ)_/¯`):

```
import /* here */ from 'something';
```

Without export default you get a nice intellisense here:

```
import { /* here */ } from 'something';
```

#### Autocomplete

Irrespective of if you know about the exports, you even autocomplete at this `import {/*here*/} from "./foo";` cursor location. Gives your developers a bit of wrist relief.

#### CommonJS interop

With `default` there is horrible experience for commonJS users who have to `const {default} = require('module/foo');` instead of `const {Foo} = require('module/foo')`. You will most likely want to rename the `default` export to something else when you import it.

#### Typo Protection

You don't get typos like one dev doing `import Foo from "./foo";` and another doing `import foo from "./foo";`

#### TypeScript auto-import

Auto import quickfix works better. You use `Foo` and auto import will write down `import { Foo } from "./foo";` cause its a well defined name exported from a module. Some tools out there will try to magic read and _infer_ a name for a default export but magic is flaky.

#### Re-exporting

Re-exporting is common for the root `index` file in npm packages, and forces you to name the default export manually e.g. `export { default as Foo } from "./foo";` (with default) vs. `export * from "./foo"` (with named exports).

#### Dynamic Imports

Default exports expose themselves badly named as `default` in dynamic `import`s e.g.

```ts
const HighCharts = await import('https://code.highcharts.com/js/es-modules/masters/highcharts.src.js');
HighCharts.default.chart('container', { ... }); // Notice `.default`
```

Much nicer with named exports:

```ts
const {HighCharts} = await import('https://code.highcharts.com/js/es-modules/masters/highcharts.src.js');
HighCharts.chart('container', { ... }); // Notice `.default`
```

#### Needs two lines for non-class / non-function

Can be one statement for function / class e.g.

```ts
export default function foo() {}
```

Can be one statement for _non named / type annotated_ objects e.g.:

```ts
export default {
  notAFunction: 'Yeah, I am not a function or a class',
  soWhat: 'The export is now *removed* from the declaration'
};
```

But needs two statements otherwise:

```ts
// If you need to name it (here `foo`) for local use OR need to annotate type (here `Foo`)
const foo: Foo = {
  notAFunction: 'Yeah, I am not a function or a class',
  soWhat: 'The export is now *removed* from the declaration'
};
export default foo;
```

See original source of Default is Bad <https://basarat.gitbook.io/typescript/main-1/defaultisbad>

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
