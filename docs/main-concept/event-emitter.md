---
sidebar_position: 3.5
---

# Event Emitter

MonsterJS provides an event emitter that can be shared among different components. This emitter is used to notify other components when a specific event is triggered.

## Creating an Event Emitter

To create an event emitter, you can use the `createEventEmitter` function.

Example:

```jsx
import { createEventEmitter } from "@monster-js/core";

export const routeChangeEvent = createEventEmitter();
```

Now, you can import the `routeChangeEvent` function into your component.
This function accepts the component's `this` context as an argument.
It returns a function to trigger the event and a function to subscribe to the event.

Example:

```jsx
import { routeChangeEvent } from './route-change.event';

export function App() {
    const [trigger, subscribe] = routeChangeEvent(this);

    return <h1>App Component</h1>
}
```

## Triggering the Event

To trigger the event, simply call the trigger function returned by the event emitter function.

Example:

```jsx
import { routeChangeEvent } from './route-change.event';

export function App() {

    const [trigger, subscribe] = routeChangeEvent(this);

    const triggerEvent = () => {
        trigger();
    }

    return <button on:click={triggerEvent}>Trigger event</button>
}
```

You can also pass optional data to the event, which will be received by the subscribers.

Example:

```jsx
import { routeChangeEvent } from './route-change.event';

export function App() {

    const [trigger, subscribe] = routeChangeEvent(this);

    const triggerEvent = () => {
        trigger('Triggered in app component.');
    }

    return <button on:click={triggerEvent}>Trigger event</button>
}
```

## Subscribing to the Event

To subscribe to the event, use the subscribe function returned by the event emitter function.

Example:

```jsx
import { routeChangeEvent } from './route-change.event';

export function App() {

    const [trigger, subscribe] = routeChangeEvent(this);

    subscribe(this, () => {
        console.log('The event is triggered.');
    });

    return <h1>App Component</h1>
}
```

You can also retrieve the data passed by the trigger function within the subscriber.

Example:

```jsx
import { routeChangeEvent } from './route-change.event';

export function App() {

    const [trigger, subscribe] = routeChangeEvent(this);

    subscribe(this, (message) => {
        console.log(message);
    });

    return <h1>App Component</h1>
}
```