---
sidebar_position: 7
---

# Observed Attributes

Observed attributes are values passed down from a parent component to a child component as an element attribute, and their changes are observed by the child component. This feature uses the observed attributes implementation of web components. Similar to web components, it does not accept objects and arrays, and only accepts string values. However, the MonsterJS implementation is more advanced, as it can convert the value into a number or boolean.

## Attr Directive

Observed attributes are directives that are namespaced with `attr`, followed by the attribute name. The syntax of this directive is written as `attr:<name>=<data>`.

Example.

```jsx
<Child attr:message="Hello World!" />
```

## Define Observed Attributes

To define the list of attributes that should be observed by the component, we can use the `observedAttributes` function to do so.

Example.

```jsx
import { observedAttributes } from '@monster-js/core';

export function App() {
    return <h1>App</h1>
}

observedAttributes(App, ['name', 'age', 'is-verified-user']);
```

## String Attribute

This type of attribute is similar to the observed attributes of a typical web component, which accept a string as a value. In order to retrieve the value and monitor any changes made to the attribute, this type of attribute uses the `attribute` function. This is a built-in function that allows developers to access the value and observe the changes to an element's attributes.

Example.

#### Child component

```jsx
import { attribute } from '@monster-js/core';

export function Child() {

    const name = attribute(this, 'name');

    return <h1>{name()}</h1>
}

observedAttributes(Child, ['name', 'age', 'is-verified-user']);
```

#### Parent component

```jsx
export function parent() {

    const [name] = useState(this, 'John Doe');

    return <Child attr:name={name()} />
}
```

In the example above, the child component has an observed attribute named `name`. Every time the `name` state of the parent component is changed, it will also be reflected in the child component's name attribute getter.

The `attribute` function can have a third argument that accepts a callback function, which is called whenever the attribute is changed. This allows developers to perform custom logic whenever the attribute value changes.

Example.

```jsx
import { attribute } from '@monster-js/core';

export function Child() {

    const name = attribute(this, 'name', (newValue: string, oldValue: string) => {
        console.log(newValue, oldValue);
    });

    return <h1>{name()}</h1>
}

observedAttributes(Child, ['name', 'age', 'is-verified-user']);
```

## Boolean attribute

This type of attribute has the same implementation as the string attribute described above, with the only difference being that the value is converted into a boolean value instead of a string. The value will be false if the attribute value is `null`, `undefined`, `""` (an empty string), `0`, or `false`. To retrieve the value and monitor changes to the attribute, this type of attribute uses the `attrBoolean` function.

Example.

#### Child component

```jsx
import { attrBoolean } from '@monster-js/core';

export function Child() {

    const isVerified = attrBoolean(this, 'is-verified-user');

    return <h1>{isVerified() ? 'Yes' : 'No'}</h1>
}

observedAttributes(Child, ['name', 'age', 'is-verified-user']);
```

#### Parent component

```jsx
export function Parent() {

    const [isVerified] = useState(this, true);

    return <Child attr:is-verified-user={isVerified()}></Child>
}
```

The `attrBoolean` function can have a third argument that accepts a callback function, which is called whenever the attribute is changed. This allows developers to perform custom logic whenever the attribute value changes.

Example.

```jsx
import { attrBoolean } from '@monster-js/core';

export function Child() {

    const isVerified = attrBoolean(this, 'is-verified-user', (newValue: boolean, oldValue: boolean) => {
        console.log(newValue, oldValue);
    });

    return <h1>{isVerified() ? 'Yes' : 'No'}</h1>
}

observedAttributes(Child, ['name', 'age', 'is-verified-user']);
```

## Number Attribute

This type of attribute has the same implementation as the string attribute described above, with the only difference being that the value is converted into a numeric value instead of a string. To retrieve the value and monitor changes to the attribute, this type of attribute uses the `attrNumber` function.

Example.

#### Child component

```jsx
import { attrNumber } from '@monster-js/core';

export function Child() {

    const age = attrNumber(this, 'age');

    return <h1>{age()}</h1>
}

observedAttributes(Child, ['name', 'age', 'is-verified-user']);
```

#### Parent component

```jsx
export function Parent() {

    const [age] = useState(this, 20);

    return <Child attr:age={age()}></Child>
}
```

The `attrNumber` function can have a third argument that accepts a callback function, which is called whenever the attribute is changed. This allows developers to perform custom logic whenever the attribute value changes.

Example.

```jsx
import { attrNumber } from '@monster-js/core';

export function Child() {

    const age = attrNumber(this, 'age', (newValue: number, oldValue: number) => {
        console.log(newValue, oldValue);
    });

    return <h1>{age()}</h1>
}

observedAttributes(Child, ['name', 'age', 'is-verified-user']);
```

## The attributeChanged Hook

This is a hook that runs each time one of the observed attributes is added, removed, or updated. It takes two arguments: the first is the `this` context of the component, and the second is the callback. For more information about this hook, please refer to the [lifecycle hooks](/docs/main-concept/lifecyle-hooks) documentation.

Example.

```jsx
import { observedAttributes, attributeChanged } from '@monster-js/core';

export function Child() {

    attributeChanged(this, (name: string, oldValue: any, newValue: any) => {
        console.log(name, oldValue, newValue);
    });

    return <h1>Child component</h1>
}

observedAttributes(Child, 'name', 'age', 'is-verified-user');
```
