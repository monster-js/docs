---
sidebar_position: 6
---

# Event Handling

Event handling is a directive that allows a component to respond to user actions on the UI, such as button clicks, text inputs, dragging elements, and other actions. It uses a directive with the namespace of on or on-prevent to bind a function to an element as an event listener.

## Syntax

The syntax for the event handling directive is `on:<event_name>={<function>}`. We can also use the `on-prevent` namespace to top the default action of an element from happening. It uses `event.preventDefault()` function in the background.

Example.

```jsx
export function Greeting() {

    const clickMe = () => {
        console.log('Hello World!');
    }

    return <button on:click={clickMe}>Greet</button>
}
```

## Function Parameters

Since the directive value for event handling is a function, we can pass arguments to the function by using a fat arrow function and passing the event handler to its body.

Example.

```jsx
export function Greeting() {

    const clickMe = (name: string) => {
        console.log(`Hello ${name}!`);
    }

    return <button on:click={()=> clickMe('John')}>Greet</button>
}
```

## Event Variable

We can also obtain the event variable that contains data about the event, as shown in the following example.

Example.

```jsx
export function Greeting() {

    const clickMe = (event) => {
        console.log(event);
    }

    return <button on:click={(event) => clickMe(event)}>Greet</button>
}
```

or

```jsx
export function Greeting() {

    const clickMe = (event) => {
        console.log(event);
    }

    return <button on:click={clickMe}>Greet</button>
}
```

will have the same result.