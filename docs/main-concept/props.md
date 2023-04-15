---
sidebar_position: 8
---

# Props

Component props enables developers to pass any type of data from a parent component to child components. It is more advanced than observed attributes, since observed attributes can only accept string, number, or boolean values.

:::caution
Destructuring the props is not advised. The bindings must have a reference to the props in order to work properly. If the bindings don't reference the props, they will not work as intended. Therefore, object destructuring is not advised.
:::

## Passing Props to Child

Here is an example of how to pass properties to a child component:

```jsx
export function Parent() {

    const date = new Date();
    const user = { ... };
    const posts = [ ... ];

    return <Child
        date={date}
        user={user}
        posts={posts}
    ></Child>
}
```

## Accessing The Props

To access the values of props, we can define a parameter in our component that holds a reference to the props.

Example.

```jsx
export function Child(props) {

    console.log(props.user);
    console.log(props.post);

    return <div>
        <p>Date: {props.date}</p>
    </div>
}
```

## On Change Event

We can use the `onPropsChange` hook to monitor changes to props. This hook is triggered whenever there are changes to any of the props on the parent component's side. For more information about this hook, please refer to the [lifecycle hooks](/docs/main-concept/lifecyle-hooks) documentation.

Example.

```jsx
import { onPropsChange } from '@monster-js/core';

export function Child(props) {

    onPropsChange(this, () => {
        console.log('Props has been changed', props);
    });

    return <h1>Child component</h1>
}
```
