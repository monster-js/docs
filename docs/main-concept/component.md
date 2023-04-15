---
sidebar_position: 1
---

# Component

Components are the most basic building block of an application. They are composed of templates, logic, and styles, and are used to split the UI into small, reusable pieces of code.

:::info
A component file must have the extension `.tsx` instead of `.ts` since it contains JSX code.
:::

## Logic and Template

A component file combines the logic and template in a single file. It is a function that returns a single JSX element with zero to many child JSX elements. To indicate that the file contains JSX code, the component file must have a `.tsx` extension instead of `.ts`.

Example.

```jsx
export function Greeting() {
    return <h1>Hello World!</h1>
}
```

## Styles

MonsterJS uses `Sass` by default, but we can also use other CSS frameworks depending on our webpack configuration. The component styles will only affect its corresponding component and will have no effect on its parent or child components.

Component styles are imported directly to the `.tsx` file.

Example.

```jsx
import styles from './greeting.component.scss';
import { component } from '@monster-js/core';

export function Greeting() {
    return <h1>Hello World!</h1>
}

component(Greeting, styles);
```

In the example above, we use the `component` function to attach the style to the component. However, the component function is only necessary if styles are applied to the component. If no styles are applied, the component function can be omitted.

:::caution
To ensure that component styles work properly, the component's logic and styles should have the same filename with a `.component.tsx` extension for the logic and a `.component.scss` extension for the styles. Additionally, the styles should be imported directly into the component's .tsx file.
:::

Example.

```
greeting
    ├── greeting.component.tsx
    └── greeting.component.scss
```

## Render a Component Into View

To render a component into view, we need to import the component and create a JSX element using the imported component, as shown in the following example:

```jsx
import { App } from './app.component';

<App></App>
```

## Shadow Dom Component

We can also create a Shadow DOM component to encapsulate our component. To do this, we can use a custom `shadowComponent` function. This function takes three arguments. The first argument is the function component itself, the second argument is an optional component style, and the third argument is an optional Shadow DOM mode (open or closed), which defaults to open if not specified.

Example.

```jsx
import styles from './greeting.component.scss';
import { shadowComponent } from '@monster-js/core';

export function Greeting() {
    return <h1>Hello World</h1>
}

shadowComponent(Greeting, styles, 'closed');
```

## Web Component Slot

Using Shadow DOM, we can pass elements from the parent component to the child component's view by using slots. Slots are placeholder elements in the child component's Shadow DOM that allow content from the parent component to be displayed.

Example.

#### Parent component

```jsx
import { Child } from './child.component';

export function Parent(props) {
    return <div>
        <Child>
            <h1>I am a slot content</h1>
            <span>I am a slot content</span>
        </Child>
    </div>
}
```

All elements inside the `<Child></Child>` tag will be displayed in the child component slot.

#### Child component

```jsx
import { shadowComponent } from '@monster-js/core';

export function Child() {
    return <div>
        <slot></slot>
    </div>
}

shadowComponent(Child);
```

### Named Slot

Named slots allow us to choose where we want to display the elements inside the child component's view. A component can have multiple named slots.

Example.

#### Parent component

```jsx
import { Child } from './child.component';

export function Parent() {
    return <div>
        <Child>
            <h1 slot="slot-1">I am a slot content</h1>
            <span slot="slot-2">I am a slot content</span>
        </Child>
    </div>
}
```

#### Child component

```jsx
import { shadowComponent } from '@monster-js/core';

export function Child() {
    return <div>
        <slot name="slot-1"></slot>
        <div>
            <slot name="slot-2"></slot>
        </div>
    </div>
}

shadowComponent(Child);
```

In the example above, the element `<h1 slot="slot-1">I am a slot content</h1>` from parent component will be displayed in `<slot name="slot-1"></slot>` in child component. The same for the `<span slot="slot-2">I am a slot content</span>` will be displayed in `<slot name="slot-2"></slot>`.

:::info
Slots only work when using shadow DOM.
:::

## Custom Element Component

Custom elements allow us to define a new type of element. To create a custom element, we can use the `customElement` function. This function has three parameters: the first is the function component, the second is the type of custom element constructor, and the third is the type of element it will extend.

Example.

```jsx
import { component, customElement } from '@monster-js/core';

export function CustomButton {
    return <span>I am a button!</span>
}

customElement(CustomButton, HTMLButtonElement, 'button');
```

To render the above component within its parent component, use the following code:

```jsx
<CustomButton />
```

When the above example component is rendered, it generates an HTML element like this:

```jsx
<button>
    <span>I am a button!</span>
</button>
```

As long as the custom element is defined we can also use it like the following:

```jsx
<button is="app-custom-button"></button>
```

Custom element names are prefixed with `app-` when defined.

## Define Component

In order to use a Component outside of a MonsterJS component, it must first be defined using `customElement.define`. This is because MonsterJS components are web components.

Example.

```jsx
import { createComponent } from '@monster-js/core';
import { Greeting } from './greeting.component';

customElement.define('app-greeting', createComponent(Greeting));
```

:::info
Components used within a MonsterJS component do not need to be separately defined, as they are automatically recognized within the scope of the MonsterJS component.
:::

## Define Custom Element Component

Custom element components created by `customElement` function can also be defined using the customElement.define method.

Example.

```jsx
import { createComponent } from '@monster-js/core';
import { CustomButton } from './custom-button.component';

customElement.define('app-custom-button', createComponent(CustomButton), {
    extends: 'button'
});
```
