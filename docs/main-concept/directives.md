---
sidebar_position: 10
---

# Directives

In MonsterJS, directives allow you to modify the appearance or add additional behavior to an element. Directives are used to attach special behavior to elements in the DOM, such as manipulating their attributes or registering event listeners. They can be used to make elements dynamic, reactive, or conditional based on certain conditions or state changes.

There are two types of directives: attribute directives and structural directives. Attribute directives are used to modify the behavior of an element by manipulating its attributes or to reference an element to a variable, while structural directives are used to dynamically modify the structure of the DOM. Attribute directives include `v:class`, `v:ref`, and `v:model`, while structural directives include `v:for` and `v:if`.

## Syntax

The syntax of a directive is `<namespace>:<name>="<value>"`. The value can be a string or a JSX expression container in curly braces `{}`, or you can omit the value altogether because it is optional.

## Available Directives

Below is a list of directives provided by the core package.

### View Model

`v:model={[<state getter>, <state setter>]}`

The view model directive provides a two-way binding of data between the view and the logic. Whenever the model is changed in the view, the corresponding state in the logic is updated, and vice versa. This ensures that the view and logic stay in sync with each other.

Example.

```jsx
import { registerDirectives, viewDirectives, useState } from '@monster-js/core';

export function Greeting() {

    const [message, setMessage] = useState(this, 'Hello World');
    const messageModel = [message, setMessage];

    return <div>
        <h1>{getter()}</h1>
        <input v:model={messageModel} type="text" />
    </div>
}

registerDirectives(Greeting, [viewDirectives]);
```

### View Class

`v:class={<object>}`

The `v:class` directive is used to conditionally add or remove a CSS class to an element. It accepts an object as an argument, and adds the keys of truthy object properties as classes to the element.

Example.

```jsx
import { registerDirectives, viewDirectives, useState } from '@monster-js/core';

export function Greeting() {
    const [showGreeting, setShowGreeting] = useState(this, true);
    return <h1 v:class={{ 'show-greeting': showGreeting }}>Hello world!</h1>
}

registerDirectives(Greeting, [viewDirectives]);
```

### View Reference

`v:ref={<reference_holder>}`

This directive is used to create a reference of an element to the variable in logic.

Example.

```jsx
import { registerDirectives, viewDirectives } from '@monster-js/core';

export function Greeting() {
    let elementRef: HTMLElement;
    return <h1 v:ref={elementRef}>Hello world!</h1>
}

registerDirectives(Greeting, [viewDirectives]);
```

After the view has been initialized, the `elementRef` variable should contain a reference to the `h1` element in the view.

### Observed Attribute

`attr:<attribute name>={<value>}`

This directive allows you to track changes to a component's attributes. You can find more information about the observed attributes in the documentation [here](/docs/main-concept/observed-attributes).

Example.

```jsx
import { Child } from './child.component';

export function Parent() {
    return <Child attr:date={new Date()} />
}
```

This directive is a built-in directive, we do not need to register any directives to the component.

### Event Handler

`on:<event name>={<event handler>}`

`on-prevent:<event name>={<event handler>}`

This directive is used to attach an event handler to an element. You can find more information about the event handler in the documentation [here](/docs/main-concept/event-handling).

Example.

```jsx
export function Greeting() {
    const greet = () => {
        console.log('Hello World!');
    }
    return <button on:click={greet}>Greet</button>
}
```

or

```jsx
export function Greeting() {
    const submit = () => {
        console.log('Hello World!');
    }
    return <form on-prevent:submit={submit}>
        <input type="text" />
        <button type="submit">Submit</button>
    </form>
}
```

to use `event.preventDefault()` to prevent the default action from happening.

This directives are built-in directives, we do not need to register any directives to the component.

### List Rendering

`v:for={<array of values>}`

This directive is used for list rendering. It allows developers to render a list of elements based on a given array of data. You can find more information about the list rendering in the documentation [here](/docs/main-concept/list-rendering).

Example.

```jsx
export function List() {
    const array = [1, 2, 3];
    return <p v:for={this.array}>Hello World!</p>
}
```

This directives are built-in directives, we do not need to register any directives to the component.

### Conditional Rendering

`v:if={<expression>}`

This directive is used to conditionally render an element to the DOM. It will remove the element from the DOM if the value of the directive is false, and append the element if the value is true. You can find more information about the list rendering in the documentation [here](/docs/main-concept/conditional-rendering).

Example.

```jsx
export function Greeting() {
    const [toggle] = useState(this, true);
    return <h1 v:if={toggle()}>Hello World!</h1>
}
```
