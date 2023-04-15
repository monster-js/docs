---
sidebar_position: 5
---

# Data Binding

Data binding is a technique that synchronizes the data between a component's logic and its view. This means that when data changes in the logic, the view is updated, and when the user changes some values in the view, the data in the logic is updated accordingly.

## Attribute Binding

Here is an example of how to bind a property from the component's logic to an element's attribute:

Example.

```jsx
import { useState } from '@monster-js/core';

export function App() {
    const [id, setId] = useState(this, 0);
    setInterval(() => setId(id() + 1), 1000);
    return <h1 id={id()}>App component.</h1>
}
```

In the example above, the `id` attribute of the `h1` element will increment every second. This is an example of one-way binding.

## Text Binding

Here is an example of how to bind a state of a component to its view.

Example.

```jsx
import { useState } from '@monster-js/core';

export function App() {
    const [counter, setCounter] = useState(this, 0);
    setInterval(() => setCounter(counter() + 1), 1000);
    return <h1>{counter()}</h1>
}
```

In the example above, the counter will increment every second and display the changes as text in the view. This is another example of one-way binding.

## Model Binding

Model binding is a two-way binding of data that uses the `v:model` directive. Whenever the model is changed in the view, the value in the logic will be updated, and the same thing will happen in the view when the model is updated from the logic.

Example.

```jsx
import { useState } from '@monster-js/core';

export function App() {

    const [message, setMessage] = useState(this, 'Hello world!');
    const model = [message, setMessage];

    return <div>
        <h1>{getter()}</h1>
        <input v:model={model} type="text" />
    </div>
}
```

This is an example of two way binding. Please check the [view model directive](../main-concept/directives#view-model) form more information about this directive.
