# Hooks Architecture

A simple and powerful project architecture for React and React Native apps.

## General Philosophy

> Everything should be pure so it’s easy to test and reason about (functional), and async behavior should be modeled using values that change over time (reactive).

React in itself is not fully functional, nor is it fully reactive. But it is inspired by some of the concepts behind FRP. Functional components for instance are pure functions with respect to their props. And they are reactive to prop or state changes. `useEffect` allows handling side effects in a reactive manner.

Hooks Architecture follows pragmatic functional JavaScript best practices and React hooks patterns to provide a powerful, expressive and flexible framework for building applications with speed and simplicity. Composability and atomicity allow teams to develop faster and with less concern of introducing bugs when modifying existing code.

In Hooks Architecture everything is expressed and encapsulated as a custom hook or a functional component, no other abstractions are required. **Just like a fractal, this pattern is repeated everywhere greatly simplifying developer experience**.

Hooks Architecture follows the following principles:

### Optimize for Change

The only constant in the universe is change. And software is no different, software evolves constantly.
By encapsulating functionality in small composable hooks you can accomplish great flexibility and speed.

### Avoid Hasty Abstractions

We could spend weeks optimizing code for performance, or coming up with the best API for our new abstraction, only to find out the next day that we made incorrect assumptions and the API needs a complete rework or the feature the code was written for is no longer needed. We don't know for sure. All we can really be sure of is that things will probably change.

For this reason, always start coding locally on your presentation views and extract functionality in custom hooks later when you realize the need for it.

Read more about [AHA Programming](https://kentcdodds.com/blog/aha-programming)

### Composition over Inheritance

The big problem with inheritance is that you’re encouraged to predict the future. Inheritance encourages you to build this taxonomy of objects very early on in your project, and you are most likely going to make design mistakes doing that, because humans cannot predict the future (even though it feels like we can).

A slight change in requirements can make the most elegant code fall apart. The more complex a system, the more difficult it is to build a mental model of the system, and the harder it becomes to operate and debug it. As Edsger W. Dijkstra put it, _“Simplicity is prerequisite for reliability”_

### The Best Code is No Code

The fewer lines of code the better. Every line of code you write increases complexity and error surface.
Hooks Architecture avoids boilerplate code and focuses on functionality.

## The Essence of React Hooks

React Hooks is the new way of writing ReactJS applications. They let you use state and other React features without writing a class, which means you can now write your entire application using _functional programming and functional components_ and this has a myriad of advantages.

Most notably having the ability to separate functionality by concern and not by stage in the lifecycle method ( single responsibility principle ) which makes the source code of the applications much more readable, maintainable and increases the reusability and portability of the components.

Hooks allow you to reuse stateful logic without changing your component hierarchy and it lets you use more of React’s features without classes.

Read [ReactJS Hooks Motivation](https://reactjs.org/docs/hooks-intro.html#motivation) for more information.

## Context Hook Pattern

This is ADN of the Hooks Architecture, you will find it everywhere.   
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

## Hooks Utils and createContextHook

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

Go to https://github.com/blockmatic/hooks-utils for more detail.

## Dispatch Context Pattern

Often we want to separate actions from the state into different React contexts to prevent unnecessary or undesired renders.

Consider the following code. We have 2 components, one for load posts button and one for displaying the posts.
When you click on the button that invokes the login action it will set isLoggedIn to true in the context of our custom hook, which will cause the LoginComponent to rerender, and sometimes that's not desirable.

```jsx
const LoadPost: React.FC = () => {
  const { loadPosts } = useCustomHook()
  
  return <div onClick={loadPosts}>login</div>
}

const ShowPost: React.FC = () => {
  const { posts } = useCustomHook()

  if (posts) {
    return <div>{posts.map(post => <Post post={post} />)}</div>
  }else{
    return <div>please login</div>
  }
}

```

We can prevent this behavior by splitting the context hooks, typically one for state and another one for the actions. 


```jsx
import React, { createContext, useReducer, Dispatch, useContext } from "react"
import { Post } from "../types/Post"

export type ExtendableError = Error & Record<string, any>

type PostsState = {
  posts: Post[];
  isLoading: boolean;
  error?: ExtendableError;
};

const initialState: PostsState = {
  posts: [],
  isLoading: false,
};

type PostsAction = {
  type:
    | "FETCH_BLOGPOSTS"
    | "FETCHING_BLOGPOSTS"
    | "FETCH_BLOGPOSTS_ERROR"
    | "RESET";
  payload?: Post[] | ExtendableError
};

const reducer = (
  state = initialState,
  { type, payload }: PostsAction
): PostsState => {
  switch (type) {
    case "FETCHING_BLOGPOSTS":
      return { ...state, isLoading: true }
    case "FETCH_BLOGPOSTS":
      return { ...state, isLoading: false, posts: payload as Post[] }
    case "FETCH_BLOGPOSTS_ERROR":
      return { ...state, isLoading: false, error: payload as ExtendableError }
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const PostsContext = createContext(initialState)
const PostsDispatchContext = createContext<Dispatch<PostsAction> | null>(null)

export const PostsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <PostsDispatchContext.Provider value={dispatch}>
      <PostsContext.Provider value={state}>{children}</PostsContext.Provider>
    </PostsDispatchContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext)

export const usePostsActions = () => {
  const dispatch = useContext(PostsDispatchContext);
  if (!dispatch) throw new Error("PostsProvider must be provided")
  const fetchPosts = async () => {
    try {
      dispatch({
        type: "FETCHING_BLOGPOSTS",
      });
      const result = (await (
        await fetch("https://jsonplaceholder.typicode.com/posts")
      ).json()) as Post[];
      dispatch({
        type: "FETCH_BLOGPOSTS",
        payload: result,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_BLOGPOSTS_ERROR",
        payload: error,
      });
    }
  };
  const reset = () => dispatch({ type: "RESET" })
  return {
    fetchPosts,
    reset,
  };
};

```

See the full working example at [kevinrodriguez-io/react-posts-example-context/](https://github.com/kevinrodriguez-io/react-posts-example-context/)

__The state and dispatch separation is annoying__

Some people find this annoying/overly verbose:

```jsx
const state = usePostState()
const dispatch = usePostsDispatch()
```

They say "can't we just do this?":

```jsx
const [state, dispatch] = usePost()
```

Sure you can:

```jsx
const usePost = () => {
  return [usePostsState(), usePostsDispatch()]
}
```

Kent. C. Dodds has great article on the topic https://kentcdodds.com/blog/how-to-use-react-context-effectively 

## Project Structure

It very simple. Functionality modularized in atomic modules that internally use hooks, context, jsx and css-in-js.
Just put all related functionality on the same file or directory with and index.tsx file.

```
.
├── App.tsx ................................. Entry point
├── AppProvider.tsx ......................... Group all global providers in one file
├── assets .................................. Global static assets
├── components .............................. Global components
│   ├── Container.tsx
│   ├── Header.tsx
│   └── VideoPlayer/
│       ├── index.tsx
│       ├── useVideoPlayerControls.tsx
│       └── useStreaming.tsx
├── hooks .................................. Global hooks ( typically with context )
│   ├── useWallet.tsx
│   ├── useAuth.tsx
│   ├── useBigHook/
│   │    ├── index.tsx
│   │    ├── Big.tsx
│   │    └── BigHookProvider.tsx
│   └── ...
├── views .................................. Container components ( by feature or route )
│   ├── Admin.tsx
│   ├── Signup.tsx
│   ├── Signin.tsx
│   ├── Container.tsx
│   ├── Header.tsx
│   └── Profile/
│       ├── index.tsx
│       ├── useProfileCustomizations.tsx
│       └── Preferences
│           ├── index.tsx
│           └── usePreferenceMatrix.tsx
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

## Code Style Conventions

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

### Names in camelCase, tolerate snake_ase attributes ( eosio cpp style )

```jsx
const myVar = 'this a var or function name within the JS code'
const blockmaticAccount = await rpc.get_account('blockmaticio')
console.log(blockmaticAccount.last_code_update) // eosio snake case attributes, that's fine.
```

### useState with functional updates

```jsx
const [count, setCount] = React.useState(0)
const inc = React.useCallback(() => setCount((c) => c + 1), [])
```

### useReducer

`useReducer` memoization works exactly as `useState` in this case. Since dispatch is guaranteed to have same reference across renders, `useCallback` is not needed, which makes code less error-prone to memoization related bugs.

```jsx
const [count, inc] = React.useReducer((c) => c + 1, 0)
```

### Avoid over optimization (`useCallback` and `useMemo`)

Apply the AHA Programming principle and wait until the abstraction/optimization is screaming at you before applying it and you'll save yourself from incurring the costs without reaping the benefit.

Specifically the cost for `useCallback` and `useMemo` are that you make the code more complex for your co-workers, you could make a mistake in the dependencies array, and you're potentially making performance worse by invoking the built-in hooks and preventing dependencies and memoized values from being garbage collected. Those are all fine costs to incur if you get the performance benefits necessary, but it's best to measure first.

- https://kentcdodds.com/blog/usememo-and-usecallback
- https://medium.com/@sdolidze/react-hooks-memoization-99a9a91c8853

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
class Foo {
}
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
export class Foo {
}
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
export default function foo() {
}
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

## Recommended Libraries 

- [react-use](https://github.com/streamich/react-use) - React hooks swissknife.
- [swr](https://github.com/vercel/swr) - React Hooks library for remote data fetching.
- [the-platform](https://github.com/jaredpalmer/the-platform) - Web API's turned into React Hooks and Suspense-friendly React components.
- [react-hook-form](https://github.com/react-hook-form/react-hook-form) - Performant, flexible and extensible forms with easy to use validation.
- [react-apollo-hooks](https://github.com/trojanowski/react-apollo-hooks) - GraphQL hooks. 
- [usetranslation-hook](https://react.i18next.com/latest/usetranslation-hook) - Internationalization hooks with i18next. 
- [@blockmatic/hooks-utils](https://github.com/blockmatic/hooks-utils) - Blockmatic's utility hooks. 
- [@blockmatic/eosio-hooks](https://github.com/blockmatic/eosio-hooks) - Hooks for EOSIO applications. 
- [sindresorhus/promise-fun](https://github.com/sindresorhus/promise-fun) - Useful promise patterns.

## Credits

- Kent C. Dodds [@kentcdodds](https://github.com/kentcdodds)
- Kevin Wolf [@kevinwolfdev](https://github.com/kevinwolfdev)
- Kevin Rodríguez [@kevinrodriguez-io](https://github.com/kevinrodriguez-io)
- Guillermo Rauch [@rauchg](https://github.com/rauchg)
- Luca Matteis [@lmatteis](https://github.com/lmatteis)
- Mattias Petter Johansson [@mpj](https://github.com/mpj)

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
