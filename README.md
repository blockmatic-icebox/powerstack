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

## Hook + Context Pattern

This is ADN of the Hooks Architecture, you will find it everywhere.

The Context API in React allows you share state between different components.  
Encapsulating Context and Hooks in atomic modules has the following advantages.

- Prevents prop drilling.
- Allows to follow the single responsibility principle.
- Allows portability.
- Easier to debug and test.
- Idiomatic.

```tsx
import React, { useState, useEffect, createContext, useContext, useMemo } from 'react';
import useNotifications from 'hooks/useNotifications'
import { OneOrMoreChildren, CustomHookContextType } from './types';

const customHookDefaults = { showNotification: () => {}, message: null };
const CustomHookContext = createContext<CustomHookContextType>(customHookDefaults);

export default function useCustomHook() {
  const context = useContext(CustomHookContext);

  if (context === undefined) {
    throw new Error(
      'You must wrap your application with <CustomHookProvider /> in order to useCustomHook().',
    );
  }

  return context;
}

export function CustomHookProvider({ children }: OneOrMoreChildren) {
  const [message, setMessage] = useState<Message | null>(null);
  const { showNotification } = useNotifications()
  const observable = useMemo(()=> createObservable())

  useEffect(()=>{
      showNotification({message})
  },[message])

  useEffect(()=>{
      observable.subscribe('message', ({message})=> setMessage(message))
      return () => observable.unsubscribe()
  },[message])

  return (
    <CustomHookContext.Provider value={{ setMessage }}>
      {children}
      <FlashMessage position="top" MessageComponent={InAppNotification} />
    </CustomHookContext.Provider>
  );
}

```

## Project Structures

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

Write tests, not too mainly integration.
E2E testing and API black box testing will catch most errors and regressions you care about, let the code change fast internally without unit test overhead.
Of course it depends on the project and the particular functionality. Test your business critical flows first, then extend coverage.

Read more about [this testing approach](https://kentcdodds.com/blog/write-tests)

## Examples

TODO

## Other resources

- https://github.com/blockmatic/react-dapp-stack
- https://telosdreamstack.io

## Contributing

Read the [contributing guidelines](https://developers.blockmatic.io) for details.

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

[1.1]: http://i.imgur.com/tXSoThF.png "twitter icon with padding"
[2.1]: http://i.imgur.com/P3YfQoD.png "facebook icon with padding"
[3.1]: http://i.imgur.com/0o48UoR.png "github icon with padding"

<!-- icons without padding -->

[1.2]: http://i.imgur.com/wWzX9uB.png "twitter icon without padding"
[2.2]: http://i.imgur.com/fep1WsG.png "facebook icon without padding"
[3.2]: http://i.imgur.com/9I6NRUm.png "github icon without padding"

<!-- links to your social media accounts -->
<!-- update these accordingly -->

[1]: http://www.twitter.com/blockmatic_io
[2]: http://fb.me/blockmatic.io
[3]: http://www.github.com/blockmatic

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->
