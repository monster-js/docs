---
sidebar_position: 3
---

# Document Fragment

A document fragment is a JSX element that allows you to group a list of elements together without creating a new DOM element. This is useful for improving performance and reducing the number of unnecessary DOM operations, especially when rendering long lists or dynamic content.

## Group Element Using Document Fragment

To group elements using a document fragment, we simply need to create a `<fragment></fragment>` element and place the elements to be grouped as child elements within the fragment tags.

Example.

```jsx
export function App() {
    return <fragment>
        <h1>Element 1</h1>
        <h1>Element 2</h1>
    </fragment>
}
```

A document fragment can only have child elements and cannot have any attributes, props, or directives. Its sole purpose is to group elements together without adding any additional markup or behavior to the DOM.
