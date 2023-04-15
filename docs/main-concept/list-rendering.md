---
sidebar_position: 8.2
---

# List Rendering

The list rendering directive allows developers to render a list of elements based on a given array of data.

## Syntax

The syntax of the list rendering directive is `v:for` followed by the array to be rendered.

Example.

```jsx
<ul>
    <li v:for={[1,2,3]}>Hello</li>
<ul>
```

## Using List Rendering

To demonstrate how to use list rendering, consider the following example:

```jsx
export function Greeting() {
    const array = [1, 2, 3];
    return <p v:for={array}>Hello World!</p>
}
```

The example code shown above will generate a list of elements that looks like this:

```jsx
<p>Hello World!</p>
<p>Hello World!</p>
<p>Hello World!</p>
```

There are three `<p>` tags because there are three elements inside the array.

## List Item Name

`v:for-item="<item name>"`

This directive allows developers to set the variable name of each list item and display it in the view.

```jsx
export function Greeting() {
    const array = ['foo', 'bar', 'bazz'];
    return <p v:for={array} v:for-item="listItem">Hello {listItem}!</p>
}
```

:::caution
The code above might throw a TypeScript linter error of `Cannot find name 'listItem'` since listItem is not defined within the component. A temporary fix for this is to declare listItem above the component, and below the import statements, add the following line: `declare const listItem: string;`
:::

The example code above will generate a list of elements that looks like this:

```jsx
<p>Hello foo!</p>
<p>Hello bar!</p>
<p>Hello bazz!</p>
```

## List Index

`v:for-index="<index name>"`

This directive allows developers to set the variable name of each list item index.

Example.

```jsx
export function greeting() {
    const array = ['foo', 'bar', 'bazz'];
    return <p v:for={array} v:for-index="listIndex">Hello {listIndex}!</p>
}
```

:::caution
The code above might throw a TypeScript linter error of `Cannot find name 'listIndex'` since listIndex is not defined within the component. A temporary fix for this is to declare listIndex above the component, and below the import statements, add the following line: `declare const listIndex: number;`
:::

The example code above will generate a list of elements that looks like this:

```jsx
<p>Hello 0!</p>
<p>Hello 1!</p>
<p>Hello 2!</p>
```

## List Update Event

`v:for-update={<callback function>}`

The list rendering directive can detect changes in the length of the array and trigger an event, which can be useful for updating the view dynamically.

Example.

```jsx
export function Greeting() {

    const array = [1, 2, 3];

    const arrayLengthUpdated = () => {
        console.log('array length is updated');
    }

    return <p v:for={array} v:for-update={arrayLengthUpdated}>Hello World!</p>
}
```
