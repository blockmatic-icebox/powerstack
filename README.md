# React dApp Architecture

Front-end architecture, coding guidelines and boilerplates for web3 react applications.
## General Philosophy

The dApp Architecture project aims to facilitate starting up quickly and following industry best practices. 
The project provides a well documented architecture and guidelines to avoid common pitfalls.

If you are new to Web3 and its concepts Nader Dabit's talk at Next.js Conf 2021 [Defining the Web3 Stack](https://www.youtube.com/watch?v=f9XRH7bjV8M) is great resource to get started.

The React dApp Architecture follows the following design principles:
### The Best Code is No Code 

The fewer lines of code the better. Every line of code you write increases complexity and error surface. 
Well maintained frameworks and libraries provide battle tested code and regurlarly updated codebases. 
It is also easier to onboard new developers to the project when using known frameworks and tools such as NextJS and Ethers.

### Optimize for Change

The only constant in the universe is change; And software is no different, software evolves constantly.
By encapsulating functionality in small composable pieces you can accomplish great flexibility and speed.

### A Cannonical Approach

React Hooks is the new way of writing ReactJS applications. They let you use state and other React features without writing a class, which means you can now write your entire application using _functional programming and functional components_ and this has a myriad of advantages.

Most notably having the ability to separate functionality by concern and not by stage in the lifecycle method ( single responsibility principle ) which makes the source code of the applications much more readable, maintainable and increases the reusability and portability of the components.

Read [ReactJS Hooks Motivation](https://reactjs.org/docs/hooks-intro.html#motivation) for more information.

### Global State with Zustand

While hooks are great for encapsulating UI functionality, state management on a application is more than just UI state and most of time Vanilla JS is all you need. Zustand is a framework agnostic state management library that greatly simplifies global state on React applications. While you can technically keep all your logic in hooks, as your application grows you will find that this approach creates some overhead, is very verbose and it can have an inpact on rendering performance, the more context providers you add the more undesired rerenders your application will typically have. Zustand helps to keep state management and concise, reduces boilerplate and prevents undesired ui renders. Lots of time was spent to deal with common pitfalls, like the dreaded zombie child problem, react concurrency, and context loss between mixed renderers. It may be the one state-manager in the React space that gets all of these right.

Learn more [pmndrs/zustand](https://github.com/pmndrs/zustand)

### Avoid Hasty Abstractions

We could spend weeks optimizing code for performance, or coming up with the best API for our new abstraction, only to find out the next day that we made incorrect assumptions and the API needs a complete rework or the feature the code was written for is no longer needed. We don't know for sure. All we can really be sure of is that things will probably change.

For this reason, always start coding locally on your presentation views and extract ui functionality in custom hooks later when you realize the need for it. The same applies global state, dont overthink zustand slicing, make it work first and then optimize.

Read more about [AHA Programming](https://kentcdodds.com/blog/aha-programming)

### Composition over Inheritance

The big problem with inheritance is that you’re encouraged to predict the future. Inheritance encourages you to build this taxonomy of objects very early on in your project, and you are most likely going to make design mistakes doing that, because humans cannot predict the future (even though it feels like we can).

A slight change in requirements can make the most elegant code fall apart. The more complex a system, the more difficult it is to build a mental model of the system, and the harder it becomes to operate and debug it. As Edsger W. Dijkstra put it, _“Simplicity is prerequisite for reliability”_

## dApp Architecture

_{diagrams_here}_
## Project Structure

Inside the projects functionality modularized in atomic modules that internally use hooks, context, jsx and css-in-js with emotion.sh
Each project contains it's onw README file with detailed information. 

```
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
├── utils .................................. Utility functions
│   └── index.tsx
└── library ................................ Third party libs, sdks, etc
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

https://www.npmjs.com/package/react-error-boundaries

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

https://stackoverflow.com/questions/38842454/why-should-i-keep-the-state-flat

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

- https://kentcdodds.com/blog/usememo-and-usecallback
- https://medium.com/@sdolidze/react-hooks-memoization-99a9a91c8853

### Avoid isLoading booleans

Why using a status enum (or even better: a state machine) will help your app stay bug free.  
https://kentcdodds.com/blog/stop-using-isloading-booleans

### Use ternaries rather than && in JSX

When you use AND operator to conditionally render `flag && <Component>` it could cause the `flag` value to be displayed, that abviously not desirable. Using ternaries is safer and preferable. `flag ? <Component/> : null`

- https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx

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
* If you refactor `Foo` in `foo.ts` it will not rename it in `bar.ts`.
* If you end up needing to export more stuff from `foo.ts` (which is what many of your files will have) then you have to juggle the import syntax.

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
Auto import quickfix works better. You use `Foo` and auto import will write down `import { Foo } from "./foo";` cause its a well defined name exported from a module. Some tools out there will try to magic read and *infer* a name for a default export but magic is flaky.

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

Can be one statement for *non named / type annotated* objects e.g.: 

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

See original source of Default is Bad https://basarat.gitbook.io/typescript/main-1/defaultisbad

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
