---
sidebar_position: 9
---

# Lifecycle Hooks

Lifecycle hooks are functions that let you run a block of code when your component or directive triggers a lifecycle event.

## Component Hooks

| Hooks | Description |
| --- | --- |
| onInit | The first hook to run when the component is initialized. This will be called right after the view is built as DOM elements but is not yet connected to the DOM tree. |
| afterInit | This hook will be called once the component's view is connected to the DOM tree. |
| onChangeDetection | This is called every time the component's change detection runs. |
| onViewChange | This will be called every time there are changes in view caused by change detection. |
| onDestroy | This function will be called when a component is destroyed, and is typically used for cleanup tasks such as unsubscribing from all subscriptions. |
| adopted | Called when a component is moved from one HTML document to another using adoptNode() |
| attributeChanged | Called when an observed attribute has been added, removed, or changed. The callback function for this hook has three parameters, first the the name of the attribute, second is the old value, and third is the new value. |
| onPropsChange | This function is called when there are changes to a component's props. |
| useEffect | This is a hook used to watch for changes in a state or variable during change detection. It has three arguments: the first is the `this` context of the component, the second is the callback function, and the third is a function that returns an array of values. If one or more of these values change, the hook will execute the callback function. |

Example.

```jsx
import { onInit, useEffect, useState } from '@monster-js/core';

export function Greeting() {

    const [name, setName] = useState(this, 'John');

    onInit(this, () => {
        console.log('I am in onInit hook');
    });

    useEffect(this, () => {
        console.log('Hello ' + name);
    }, () => [name()]);

    return <h1>Greeting<h1>
}
```

## Directive Hooks

There are no hooks specifically intended for directives, but directives can make use of the component hooks. It's important to note that these hooks will only trigger when their corresponding event in the component is triggered. For example, the `onInit` hook will only trigger when the component is being initialized. Elements created using structural directives like `v:if` and `v:for` will not trigger this event.

Example.

```jsx
import { onChangeDetection, createDirective } from '@monster-js/core';

export function highlight(element: HTMLElement, directives: DirectiveObject, context: FunctionComponent) {

    onChangeDetection(this, () => {
        console.log('I am in onChangeDetection hook');
    }, () => element.isConnected);

    return element;
}

createDirective(highlight, 'highlight');
```

It's important to note that when using hooks inside a directive, we need to pass a third argument, which is a function that returns a boolean value. During the change detection process, if this function returns false, the hook will be removed. In the example above, the hook will be removed when the element is disconnected from the DOM tree.
