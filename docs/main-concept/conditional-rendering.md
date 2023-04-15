---
sidebar_position: 8.3
---

# Conditional Rendering

Conditional rendering is used to conditionally render an element in the DOM. It uses the `v:if` directive to remove an element from the DOM if the value is falsy, and append the element if the value is truthy.

## Syntax

The syntax of the conditional rendering directive is `v:if` followed by the boolean expression to be evaluated.

Example.

```jsx
<div v:if={toggle()}></div>
```

## Using Conditional Rendering

To demonstrate how to use conditional rendering, consider the following example:

Example.

```jsx
export function greeting() {
    const [toggle, setToggle] = useState(this, true);

    const click = () => {
        setToggle(!toggle());
    }

    return <div>
        <button on:click={click}>Toggle</button>
        <h1 v:if={toggle()}>Hello World!</h1>
    </div>
}
```
