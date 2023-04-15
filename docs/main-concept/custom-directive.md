---
sidebar_position: 11
---

# Custom Directives

Custom directives are functions that manipulate elements in a MonsterJS application. They can be used to add behavior or modify the appearance of an element.

## Creating a Custom Directive

To create a custom directive, we can use the CLI to automatically generate a directive file with boilerplate code or we can manually create a file and write the code from scratch.

The following code is an example of a custom directive in MonsterJS, but it does not have any functionality yet.

```jsx
import { FunctionComponent, createWatcher, createDirective, DirectiveObject } from "framework";

export function highlightDirective(element: HTMLElement, directives: DirectiveObject, context: FunctionComponent) {
    return element;
}

createDirective(highlightDirective, 'highlight');
```

The next step is to handle the custom directive by creating a condition to check if the directive has been defined.

Here is an example of how to use the custom directive highlight to set the background color of an element to red: `<div highlight:color="red">Some text</div>`.

```jsx
import { FunctionComponent, createDirective, DirectiveObject } from "framework";

export function highlightDirective(element: HTMLElement, directives: DirectiveObject, context: FunctionComponent) {
    const { color } = directives;

    if (color) {
        element.style.backgroundColor = color.get();
    }

    return element;
}

createDirective(highlightDirective, 'highlight');
```

## Register a Directive to Component

Before using a custom directive, we must first register it with a component. The following examples demonstrate how to register a directive:

```jsx
import { registerDirectives } from '@monster-js/core';
import { customDirective1 } from './custom-directive1.directive';
import { customDirective2 } from './custom-directive2.directive';

export function Greeting() {
    return <h1>Hello World!</h1>
}

registerDirectives(Greeting, [customDirective1, customDirective2]);
```

## Using a Directive

After registering the custom directive, we can now use it using the following syntax: `<namespace>:<name>="<value>"`.

```jsx
import { registerDirectives } from '@monster-js/core';
import { highlight } from './highlight.directive';

export function Greeting() {
    return <h1 highlight:color="red">Hello World!</h1>
}

registerDirectives(Greeting, [highlight]);
```

## Value Change Watcher

To make our custom directive respond to changes in its value, we can use the `createWatcher` function from the core package.

Here's an example of how to use a custom directive to change the background color of an element based on the value passed to the directive:

    <!-- valueCaller: () => any,
    element: HTMLElement,
    context: FunctionComponent,
    updateCallback: (value: any) => void -->

#### The directive

```jsx
import { FunctionComponent, createWatcher, createDirective, DirectiveObject } from "framework";

export function highlightDirective(element: HTMLElement, directives: DirectiveObject, context: FunctionComponent) {
    const { color } = directives;

    if (color) {
        element.style.backgroundColor = color.get();

        const valueGetter = color.get;
        createWatcher(valueGetter, element, context, (newValue: any) => {
            element.style.backgroundColor = newValue;
        });
    }

    return element;
}

createDirective(highlightDirective, 'highlight');
```

#### The component

```jsx
import { registerDirectives, useState } from '@monster-js/core';
import { highlightDirective } from './highlight.directive';

export function Greeting() {

    const [color, setColor] = useState(this, 'red');

    render() {
        return <h1 highlight:color={color()}>Hello World</h1>
    }
}

registerDirectives(Greeting, [highlightDirective]);
```
