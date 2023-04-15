---
sidebar_position: 4
---

# Change Detection

Change detection is the process of synchronizing the data between a component's logic and view. It is triggered when a value of a state is updated or the `detectChanges` function is manually called.

## Setting a State

We can create a state using the `useState` function. For more information about how to create and use a state, please refer to the documentation on [component states](../main-concept/component-states#component-state).

Example.

```jsx
import { useState } from '@monster-js/core';

export function Counter() {
    const [count, setCount] = useState(this, 0);
    setInterval(() => setCount(count() + 1), 1000);
    return <h1>{count()}</h1>
}
```

In the example above, we set a new value for the state using the `setCount` function, and this will trigger the change detection process.

## Manually Trigger Change Detection

In some cases, we may need to manually trigger the change detection process of a component.

To manually trigger the change detection process, we just need to call the `detectChanges` function and pass the `this` context of a component as an argument.

Example.

```jsx
import { detectChanges } from '@monster-js/core';

export function Counter() {
    setInterval(() => detectChanges(this), 1000);
    return <h1>{new Date()}</h1>
}
```