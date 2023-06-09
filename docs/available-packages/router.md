---
sidebar_position: 3
---

# Router

The MonsterJS Router enables developers to build a single-page application with multiple components that act as different pages of the app. The view changes depending on the activated route, which is determined by the URL of the browser and the path registered in the route component.

## Installation

The router can be installed using npm.

Example.

```jsx
npm install @monster-js/router
```

## Creating a Route

A route is simply a component provided by the router package. We can create a route using the `<Route />` component.

Example.

```jsx
import { Route } from '@monster-js/router';
import { Greeting } from './greeting.component';

export function App() {
    return <div>
        <Route
            path="/greeting"
            element={() => <Greeting />}
        />
    </div>
}
```

In the example given above, when the user navigates to the `/greeting` route, the `Greeting` component will be displayed in the view.

## Route Props

Route props refer to the properties of a route that determine its behavior.

Below is a list of the props that can be used in a route to configure its behavior.

| Props | Description |
| --- | --- |
| path | This particular prop refers to the path that must match in the browser URL pathname before the route can be activated. |
| element | This particular prop is a function that returns the component or element that will be rendered inside the <Route /> when the route path matches the browser URL pathname. |
| exact | If this is set to true, then the component will only activate if the route path is an exact match with the browser URL pathname, but it will still respect dynamic route matching. |
| guards | A route guard is an additional layer of checking that determines whether a component can activate or deactivate when a particular route is navigated to or away from. |
| redirect-to | This prop is a string URL to redirect to if the route path matches the browser URL pathname. |

## Router Directive

The router also provides some directives that are very helpful when working with routes.

### Router Link

`router:link="<link>"`

Attach this directive to an element to navigate to the link when the element is clicked. If used in an `<a>` tag, it will automatically add the link as an href attribute.

Example.

```jsx
<a router:link="/some/url">I am a link</a>
<button router:link="/some/url/123">I am a button</button>
```

### Router Link Active

`router:link-active="<class name>"`

This directive will add the specified class name to the class list of the element if the `router:link` directive link matches the browser URL pathname using dynamic matching.

```jsx
<a
    router:link="/some/url/123"
    router:link-active="i-am-active"
>I am a link</a>
```

### Router Link Active Exact

`router:link-active-exact={<boolean>}`

If the value is true, this directive will enable us to add the class name of router:link-active directive only when the router:link directive link is an exact match of the browser url pathname but still respect dynamic matching.

Example.

```jsx
<button
    router:link="/some/url/123"
    router:link-active="i-am-active"
    router:link-active-exact={true}
>I am a button</button>
```

## Router Guard

Router guard is another way to check whether a component can activate or not. It can also run a block of code before a route can activate or deactivate.

The following code is an example of working router guard code.

```jsx
export function authGuard(): Promise<boolean> | boolean {
    return true;
}
```

### Can Activate

The `canActivate` guards can help us add additional checks to determine if a component is allowed to activate or not.

Example.

```jsx
import { navigate } from '@monster-js/core';
import { AuthService } from './auth.service';
import { authDI } from 'auth.container';

export function authGuard(): Promise<boolean> | boolean {

    const authService = authDI.inject(AuthService);
    if (authService.isLoggedIn) {
        return true;
    }

    navigate('/guest/route');
    return false;
}
```

To use it as `canActivate` guard, you can pass it to the canActivate prop of the `Route` component.

Example.

```jsx
<Route path="/auth/path" canActivate={[authGuard]} element={...}>
```

### Can Deactivate

The `canDeactivate` guards can help us add additional checks to determine if a component is allowed to deactivate or not.

Example.

```jsx
export function confirmationGuard(): Promise<boolean> | boolean {
    const confirmation = confirm('Are you sure you want to leave this page?');
    return confirmation;
}
```

To use it as `canDeactivate` guard, you can pass it to the canDeactivate prop of the `Route` component.

Example.

```jsx
<Route path="/auth/path" canDeactivate={[confirmationGuard]} element={...}>
```

### Route Data

We can also pass data to the route guard by passing it to the `data` prop in the route.

Example.

```jsx
<Route path="/auth/path" canActivate={[authGuard]} data={{ authenticated: true }} element={...}>
```

And we can access it inside the route as a function parameter.

Example.

```jsx
import { navigate } from '@monster-js/core';

export function authGuard(data: any): Promise<boolean> | boolean {

    if (data.authenticated) {
        return true;
    }

    navigate('/guest/route');
    return false;
}
```

## Navigate

The `navigate(<url>, <state>, <title>, <replace state>)` function can be used to navigate to a route programmatically.

Example.

```jsx
import { navigate } from '@monster-js/router';

export function greeting() {

    const handleClick = () => {
        navigate('/some/url');
    }

    return <button on:click={handleClick}>Navigate</button>
}
```

#### Arguments

| Arguments | Description |
| --- | --- |
| url | This parameter is required and specifies the URL to which we want to navigate. |
| state | An object, used as the state in history.pushState api. This parameter is not required. |
| title | A string, used as the title in history.pushState api. This parameter is not required. |
| replace state | This boolean value indicates whether to use history.replaceState or history.pushState during navigation. |

## On Route Change

Using the `onRouteChange` function can help developers to subscribe to the route change event.

Example.

```jsx
import { onRouteChange } from '@monster-js/router';

export function Greeting() {

    onRouteChange(this, () => {
        console.log('route has change');
    });

    return <h1>Greeting</h1>
}
```

In the example above, the component will log a message to the console every time the route changes.

:::info
Note that `onRouteChange` hook works only to the components used directly as an element in the `<Route />` component.
To trigger onRouteChange to child components, you need to use event emitters.
:::

## Router Params

The `getParams` functions allows us to retrieve router parameters. More information about these route parameters can be found in the [dynamic route matching](#dynamic-route-matching) section.

Example.

```jsx
import { getParams } from '@monster-js/router';

export function greeting(props) {

    const params = getParams(this);

    console.log(params);

    return <h1>Greeting</h1>
}
```

:::info
Note that `getParams` function works only to the components used directly as an element in the `<Route />` component.
To get the params in child components, we can use the shared state or pass the params using event emitters on route change event.
:::

## Dynamic Route Matching

Dynamic route matching is a way to match a segment of a route path with the corresponding segment of a browser URL pathname. A dynamic segment is denoted by a colon (`:`) followed by the segment name. For example, `/users/:userId`. The values of the dynamic segments are referred to as router parameters.

Here is a table that shows examples of dynamic routes and their corresponding router parameter values:

| Component Path | Browser URL Pathname | Router Params |
| --- | --- | --- |
| /:path | /100 | { path: 100 } |
| /user/:userId | /user/123 | { userId: 123 } |
| /post/:postId/:userId | /post/1/123 | { postId: 1, userId: 123 } |

## Lazy Loading

To load a component on demand, we can use the `createLazyComponent` function to create a lazily loaded component.

Example.

```jsx
import { Route } from '@monster-js/router';
import { createLazyComponent } from '@monster-js/core';

const LazyGreeting = createLazyComponent(() => import('./greeting.component').then(c => c.Greeting));

export function App() {
    return <div>
        <Route path="/" element={() => <LazyGreeting />} />
    </div>
}
```
