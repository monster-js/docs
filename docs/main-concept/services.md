---
sidebar_position: 14
---

# Services

Services are injectable classes that allow us to perform reusable logic. This approach can help keep our components clean and easy to maintain. It is recommended that all HTTP requests and business logic be performed inside a service.

## Create a Service

To create a service, we can use the [CLI](/docs/cli/cli-what-is-cli) to automatically generate a service file with boilerplate code, or we can manually create a file and write the code from scratch.

The following code is an example of working service code, but it does not yet include any functions.

```jsx
import { Service } from '@monster-js/core';

@Service()
export class GreetingService {
}
```

## Singleton Service

Services are transient by default. To create a singleton service, we need to pass an optional configuration object to the `@Service()` decorator. This object should contain a 'singleton' property that is set to true.

Example.

```jsx
import { Service } from '@monster-js/core';

@Service({ singleton: true })
export class GreetingService {
}
```

## Register a Service

We need to register a service in a dependency injection container before we can use it.

Example.

```jsx
// home.di.ts
import { createDIContainer } from "framework";
import { GreetingService } from "./greeting.service";

export const homeDI = createDIContainer('home', [ GreetingService ]);
```

## Inject a Service

To use a service in our component, we can import the dependency injection container we created and use its `inject` method to get an instance of the service.

Example.

```jsx
import { homeDI } from './home.di';
import { GreetingService } from "./greeting.service";

export function App() {
    const greetingService = homeDI.inject(GreetingService);
    return <h1>App Component</h1>
}
```

Now we can use the `greetingService` in our component.

## Inject a Service into a Directive

To inject a service into a directive we can use the same process that we used to inject a service in a component.

Example.

```jsx
import { homeDI } from './home.di';
import { GreetingService } from "./greeting.service";

export function highlightDirective(element: HTMLElement) {

    const greetingService = homeDI.inject(GreetingService);

    return element;
}
```

## Injecting a Service into Another Service

To inject a service into another service, we can use the constructor of the service line the following:


```jsx
import { Service } from '@monster-js/core';

@Service()
export class MessageService {
    public getMessage() {
        return "Hello World";
    }
}
```

```jsx
import { Service } from '@monster-js/core';

@Service()
export class GreetingService {

    constructor(private messageService: MessageService) {}

    public greet() {
        console.log(this.messageService.getMessage());
    }
}
```

Both the `MessageService` and `GreetingService` must be registered in the same dependency injection container for them to work properly.