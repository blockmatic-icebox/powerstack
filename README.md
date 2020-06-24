<p align="center">
	</a>
	<a href="https://git.io/col">
		<img src="https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg" alt="Collaborative Etiquette">
	</a>
  <a href="https://developers.blockmatic.io">
		<img src="https://img.shields.io/badge/code%20style-blockmatic-brightgreen.svg" alt="Blockmatic Standard">
	</a>
	<a href="https://twitter.com/intent/follow?screen_name=blockmatic_io">
		<img src="https://img.shields.io/twitter/follow/blockmatic_io.svg?style=social&logo=twitter" alt="Follow on Twitter" />
	</a>
	<a href="https://t.me/blockmatic">
		<img src="https://img.shields.io/badge/-Chat%20on%20Telegram-blue?style=social&logo=telegram" alt="Chat on Telegram">
	</a>
</p>

# Hooks Architecture

A simple and powerful project structure for React apps.

## General Philosophy

Functional reactive programming (FRP) is a paradigm that has gained lots of attention lately, especially in the JavaScript front end world. It’s an overloaded term, but it describes a simple idea:

> Everything should be pure so it’s easy to test and reason about (functional), and async behavior should be modeled using values that change over time (reactive).

React in itself is not fully functional, nor is it fully reactive. But it is inspired by some of the concepts behind FRP. Functional components for instance are pure functions with respect to their props. And they are reactive to prop or state changes. `useEffect` allows handling side effects in a reactive manner.

Hooks Architecture follows pragmatic functional JavaScript best practices and React hooks patterns to provide a powerful, expressive and flexible framework for building applications with speed and simplicity. Composability and atomicity allow teams to develop faster and with less concern of introducing bugs when modifying existing code.

In Hooks Architecture everything is expressed and encapsulated as a custom hook or a functional component, no other abstractions are required. Just like a fractal, this pattern is repeated everywhere greatly simplifying developer experience.

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

## Context Container Pattern

The context container pattern allows us to easily create state containers based on react hooks. It simplifies and removes all the boilerplate required to create context hooks.

[@kevinwolfdev](https://github.com/kevinwolfdev) created this utility function that creates context containers for react hooks.

```jsx
import React from 'react';

export interface ContainerProviderProps<State = void> {
  initialState?: State;
}

export interface Container<Value, State = void> {
  Provider: React.ComponentType<ContainerProviderProps<State>>;
  useContainer: () => Value;
}

const EMPTY: unique symbol = Symbol('__EMPTY__');

const createContainer = <Value, State = void>(
  useHook: (initialState?: State) => Value,
  errorMsg = 'Component must be wrapped with <Container.Provider />',
): Container<Value, State> => {
  const Context = React.createContext<Value | typeof EMPTY>(EMPTY);

  const Provider: React.FC<ContainerProviderProps<State>> = ({ initialState, children }) => {
    const value = useHook(initialState);
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useContainer = (): Value => {
    const value = React.useContext(Context);
    if (value === EMPTY) {
      throw new Error(errorMsg);
    }
    return value;
  };

  return { Provider, useContainer };
};

export default createContainer;

```

Example:

```jsx
import randomQuote from 'lib/randomQuote'
import React from 'react'
import createContainer from 'utils/createContainer'

export const useRandomQuote = () => {
  const [quote, setQuote] = React.useState < string > randomQuote()

  React.useEffect(() => {
    const interval = setInterval(() => {
      setQuote(randomQuote())
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  })

  return quote
}

const RandomQuoteContext = createContainer(useRandomQuote)

export default RandomQuoteContext
```

```jsx
export const MyComponent = () => {
  const quote = RandomQuoteContext.useContainer()

  return (
    <div>
      <h3>Random Quote</h3>
      <p>{quote.text}</p>
    </div>
  )
}
```

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
import React, { createContext, useReducer, Dispatch, useContext } from "react";
import { Post } from "../types/Post";

export type ExtendableError = Error & Record<string, any>;

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
  payload?: Post[] | ExtendableError;
};

const reducer = (
  state = initialState,
  { type, payload }: PostsAction
): PostsState => {
  switch (type) {
    case "FETCHING_BLOGPOSTS":
      return { ...state, isLoading: true };
    case "FETCH_BLOGPOSTS":
      return { ...state, isLoading: false, posts: payload as Post[] };
    case "FETCH_BLOGPOSTS_ERROR":
      return { ...state, isLoading: false, error: payload as ExtendableError };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const PostsContext = createContext(initialState);
const PostsDispatchContext = createContext<Dispatch<PostsAction> | null>(null);

export const PostsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PostsDispatchContext.Provider value={dispatch}>
      <PostsContext.Provider value={state}>{children}</PostsContext.Provider>
    </PostsDispatchContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);

export const usePostsActions = () => {
  const dispatch = useContext(PostsDispatchContext);
  if (!dispatch) throw new Error("PostsProvider must be provided");
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
  const reset = () => dispatch({ type: "RESET" });
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
│           └──  usePreferenceMatrix.tsx
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

## Hooks Architecture Toolkit

We provide a hooks architecture toolkit with tools for creating react and react native applications following these architectural patterns.

See [packages/hooks-architecture](./packages/hooks-architecture) for a thorough guide.

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

### Typescript types or interfaces?

Always use interface for public API's definition when authoring a library or 3rd party ambient type definitions.

Use type for your React Component Props and State, because it is more constrained. 

### File names

- PascalCase for all react components.  eg. `AddUser.tsx`
- camelCase for hooks files. eg. `useSubscription.tsx`
- lowercase with dash separator for package folders and names. eg.  `eosio-hooks-transit`
 
## Examples

The TELOS DreamStack project starters follow this architecture and patterns.
https://github.com/telosdreamstack

## Credits

- Kent C. Dodds [@kentcdodds](https://github.com/kentcdodds)
- Kevin Wolf [@kevinwolfdev](https://github.com/kevinwolfdev)
- Kevin Rodríguez [@kevinrodriguez-io](https://github.com/kevinrodriguez-io)
- Guillermo Rauch [@rauchg](https://github.com/rauchg)
- Luca Matteis [@lmatteis](https://github.com/lmatteis)
- Mattias Petter Johansson [@mpj](https://github.com/mpj)

## Contributing

[Contributing Guide](./CONTRIBUTING.md)

[Code of Conduct](./CONTRIBUTING.md#conduct)

## Important

See [LICENSE](./LICENSE) for copyright and license terms.

All repositories and other materials are provided subject to the terms of this [IMPORTANT](./IMPORTANT.md) notice and you must familiarize yourself with its terms. The notice contains important information, limitations and restrictions relating to our software, publications, trademarks, third-party resources, and forward-looking statements. By accessing any of our repositories and other materials, you accept and agree to the terms of the notice.

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
