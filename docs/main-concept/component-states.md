---
sidebar_position: 3.5
---

# Component States

A state is data that describes the current state of a component. Updating a state will trigger the change detection of the component and update the bindings. In MonsterJS, there are two types of state: component state (managed using the useState hook), and shared state (created by createSharedState function).

## Component State

The component state is a state that only affects the component where it is defined. It uses the `useState` function to create a getter and setter of the state. It has two arguments, first is the `this` context of the component, and second is the initial value of the state.

Example.

```jsx
import { useState } from '@monster-js/core';

export function App() {
    const [counter, setCounter] = useState(this, 100);
    return <h1>{counter()}</h1>
}
```

In the example above, which uses the useState function, the `counter` variable is the getter of the current value of the state, and `setCounter` is the corresponding function for updating the state.

### Setting a State Value

Updating the value of a state variable will trigger change detection of the component and any other components that depend on that state value.

Example.

```jsx
import { useState } from '@monster-js/core';

export function App() {
    const [ counter, setCounter ] = useState(this, 100);
    setInterval(() => setCounter(counter() + 1), 1000);
    return <h1>{counter()}</h1>
}
```

The example above demonstrates updating the `counter` state every second using the `setCounter` function and triggers change detection of the component to update the view. This update will only affect the current component, as the counter state is local to the component where it is defined using `useState`.

## Shared State

Shared state is a state that can be accessed and updated by multiple components.
In MonsterJS, shared state can be created using `createSharedState` function.
When a value in the shared state is updated, all components that depend on that value will be notified to reflect the updated value.

### Create a Shared State

We can create a shared state using the `createSharedState` function.
This function accept one arguments which is the initial value of the state.
This function returns another function that we can use inside our components.

Example.

```jsx
import { createSharedState } from '@monster-js/core';

export const counterState = createSharedState('counter', 100);
```

Now, we can import the `counterState` function inside our component. This function accepts two arguments,
first is the component's `this` context, and second is an optional parameter which is a callback function that is called when the state is changed.
This function returns a getter and setter of the shared state.

Example.

```jsx
import { counterState } from './counter.state';

export function App() {
    const [counter, setCounter] = counterState(this);
    return <h1>{counter()}</h1>
}
```

### Setting a Shared State Value

Setting the value of a state will trigger change detection for all components using that state.

Example.

```jsx
import { counterState } from './counter.state';

export function App() {
    const [counter, setCounter] = counterState(this);
    setInterval(() => setCounter(counter() + 1), 1000);
    return <h1>{counter()}</h1>
}
```
