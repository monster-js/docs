---
sidebar_position: 2
---

# Store

The Store is a state management system designed specifically for the MonsterJS framework. By using the Store, developers can easily centralize the state of their application and ensure that it is consistent throughout the codebase. This makes it easier to maintain and debug the code, as well as to add new features and functionality in a scalable way.

The store is just an extension of shared state. The store is using the shared state behind the scene. It is just a way to organize the data provided by the shared state functionality.

## Installation

To use the Store in your project, you can install it using the following npm command.

```bash
npm install @monster-js/store
```

## Create a Store

In order to create a Store, you can use the `createStore` function, which is provided by the MonsterJS framework. This function accepts an initial state as a parameter, which sets the starting value for the Store's state.

Example.

```jsx
import { createStore } from '@monster-js/store';

const initialState = {
    counter: 0
};

export const store = createStore(initialState);
```

Now we have an object with shared state properties.

## Initial State

It is good practice to separate the initial state and create an interface that describes it. This interface will be useful in other parts of our store.

Example.

```jsx
// initial-state.ts
export interface InitialState {
    counter: number;
}

export const initialState: InitialState = {
    counter: 0;
};
```

```jsx
// store.ts
import { createStore } from '@monster-js/store';
import { initialState, InitialState } from './initial-state';

export const store = createStore<InitialState>(initialState);
```

## Using The Store

Example.

```jsx
import { store } from './store';

export function Counter() {

    const [counter, setCounter] = store(this, 'counter');

    return <div>
        <button on:click={() => setCounter(counter() + 1)}>Increment</button>
        <h1>Count: {counter()}</h1>
    </div>
}
```

Similar to shared state, we can also access a getter function (`counter`) and a setter function (`setCounter`) for this state.

## Getter

To retrieve a value from the store, we can use the getter function of the state.

Example.

```jsx
import { store } from './store';

export function App() {

    const [counter, setCounter] = store(this, 'counter');

    return <h1>Count: {counter()}</h1>
}
```

In the example above, the `counter` is the getter function.

## Setter

We can use the setter function to update the value of the state. When we update the value of the state in the store, the changes will be reflected in the components that use that state.

Example.

```jsx
import { store } from './store';

export function App() {

    const [counter, setCounter] = store(this, 'counter');

    const clickMe = () => {
        setCounter(counter() + 1);
    }

    return <button on:click={clickMe}>Increment</button>
}
```

## Subscribe to Changes

The store also provides a way to subscribe to changes for each item of the state.

Example.

```jsx
import { store } from './store';

export function App() {

    store(this, 'counter', (value) => {
        console.log(`Counter value changed: ${value}`);
        return value;
    });

    return <h1>App</h1>
}
```

The callback function should return a value that will be used as the value returned by the getter function. This approach is useful if we need to perform some data manipulation before setting the local state of the component with the value.

## Actions

One of the many advantages of using a store instead of shared state is that we can use actions to update the state. Actions can make your code much cleaner, easier to manage, and more understandable.

### Create Actions

To create an action, we need to create an action creator first.

Using our example above, we need to create an action creator for the `counter` state.

Example.

```jsx
// counter.action.ts
import { actionCreator } from '@monster-js/store';
import { InitialState } from './initial-state';
import { store } from './store';

const counterActionCreator = actionCreator<InitialState>(store, 'counter');
```

After creating an action creator function, we can then use it to create an actual action function. This action can be dispatched to the store, triggering its registered reducers to update the state accordingly.

Example.

```jsx
// counter.action.ts
import { actionCreator } from '@monster-js/store';
import { InitialState } from './initial-state';
import { store } from './store';

const counterActionCreator = actionCreator<InitialState>(store, 'counter');

export const incrementCounter = counterActionCreator<number, number>((counterState, payload) => {
    return counterState + payload;
}, 'Increment counter');
```

The created action creator function(`counterActionCreator`) takes two arguments: the first is the reducer function, and the second is the action description. The reducer function also takes two parameters: the current state, and optionally, the action payload. The return value of the reducer function becomes the new state of the store(in the example above, the counter state of the store).

The created action creator function(`counterActionCreator`) has two generic types. First is the type of the state and second is the type of the payload.

### Dispatch an Action

To dispatch an action, we just need to call the action inside our component or service.

Example.

```jsx
import { store } from './store';
import { incrementCounter } from './counter.actions';

export function App() {

    const [counter] = store(this, 'counter');

    const clickMe = () => {
        incrementCounter(1);
    }

    return <div>
        <h1>Count: {counter()}</h1>
        <button on:click={clickMe}>Increment</button>
    </div>
}
```

## DevTools

We can also use the [Redux DevTools](https://github.com/reduxjs/redux-devtools) to inspect the shared state of our application in real-time. This DevTool provides various features, including time travel debugging, which allows us to replay and inspect the state of our application at any point in time. This is especially useful when debugging complex state management scenarios.

The Redux DevTools are enabled by default in development mode, allowing us to debug and inspect the state of our application during development. However, when building the application for production, the DevTools will be automatically removed to ensure better performance and security.
