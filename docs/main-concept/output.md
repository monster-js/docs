---
sidebar_position: 8.1
---

# Output Function

The `output` function allows us to expose a function from the component, which can then be triggered from the parent component using `callOutputFn`.

## Syntax

The `output` function has three arguments: the first is the `this` context of the component, the second is the output function name, and the third is the callback. The output function key is the property key that will be used to trigger the output function from outside the component. The callback function will run once the output function is triggered.

The `callOutputFn` function takes three arguments: the first is the child component that contains the outputted function; the second is the name of the output function; and the third is an optional argument that accepts an array, which will serve as the parameters of the outputted callback from the child component.

Example.

#### Child component

```jsx
import { output } from '@monster-js/core';

export function Child() {
    output(this, 'greet', (name: string) => {
        return 'Hello ' + name;
    });
    return <h1>Child component</h1>
}
```

#### Parent component

```jsx
import { callOutputFn } from '@monster-js/core';

export function Parent() {

    let childRef: any;

    const clickMe = () => {
        const message = callOutputFn(childRef, 'greet', ['John']);
        console.log(message);
    }

    return <div>
        <button on:click={clickMe}>Click Me</button>
        <Child v:ref={childRef}></Child>
    </div>
}
```

## Typing

We can also provide generic types for our output function. This will help developers easily identify which properties they can use, and it will also assist with type checking.

Example.

#### Child component

```jsx
import { output } from '@monster-js/core';

export interface ChildInterface {
    greet: (...args: any[]) => string;
}

export function Child() {
    output<ChildInterface>(this, 'greet', (name: string) => {
        return 'Hello ' + name;
    });
    return <h1>Child component</h1>
}
```

#### Parent component

```jsx
import { callOutputFn } from '@monster-js/core';
import { Child, ChildInterface } from './child.component';

export function Parent() {

    let childRef: any;

    const clickMe = () => {
        const message = callOutputFn<ChildInterface>(childRef, 'greet', ['John']);
        console.log(message);
    }

    return <div>
        <button on:click={clickMe}>Click Me</button>
        <Child v:ref={childRef}></Child>
    </div>
}
```

This will ensure that the output function exists in `ChildInterface`.
