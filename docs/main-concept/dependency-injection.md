---
sidebar_position: 14.5
---

# Dependency Injection

Dependency Injection is a design pattern that enables a class to be injected with its dependencies instead of creating them inside the class. This pattern is used to promote loose coupling between classes, which can lead to more maintainable and testable code.

In MonsterJS, we use a built-in dependency injection container to manage and inject dependencies into our components, services, routes, and directives.

## Registering a Dependency

Before we can use a dependency, we need to register it with the dependency injection container. We can do this by passing the dependencies to the dependency array of the `createDIContainer` function.

```jsx
import { createDIContainer } from "@monster-js/core";
import { GreetingService } from "./greeting.service";

export const homeDI = createDIContainer('home', [ GreetingService ]);
```

## Injecting a Dependency

We can inject a dependency into a function-type consumer using the container's inject method.

Example.

```jsx
import { homeDI } from './home.di';
import { GreetingService } from "./greeting.service";

export function App() {
    const greetingService = homeDI.inject(GreetingService);
    return <h1>App Component</h1>
}
```

## Constructor Injection

We can also inject dependencies using constructor injection for a class-type consumer. To do this, we add a constructor to our class that takes the dependencies as arguments.

```jsx
import { Service } from '@monster-js/core';
import { MessageService } from './message.service';

@Service()
export class GreetingService {

    constructor(private messageService: MessageService) {}

    public greet() {
        console.log(this.messageService.getMessage());
    }
}
```

## Dependency Configuration

We can configure how our dependency injection container resolves registered dependencies.

### The useValue Method

The useValue property is used to return a value, instead of a class instance, when the dependencies are resolved.

Example.

```jsx
import { createDIContainer } from "@monster-js/core";
import { GreetingService } from "./greeting.service";

export const homeDI = createDIContainer('home', [GreetingService]);

const stubGreet = {
    greet: () => {
        console.log('Hello I am a custom message');
    }
};

homeDI.useValue(GreetingService, stubGreet);
```

In the example above, when we inject the `GreetingService` into our component, service, or directive, it will return the `stubGreet` object instead of an instance of GreetingService.

### The useClass Method

The useClass property is used to replace a dependency with another class when resolving dependencies.

Example.

```jsx
import { createDIContainer } from "@monster-js/core";
import { GreetingService } from "./greeting.service";

export const homeDI = createDIContainer('home', [GreetingService]);

class MockGreetingService {
    greet() {
        console.log('Hello I am a custom message');
    }
}

homeDI.useValue(GreetingService, MockGreetingService);
```

In the example above, when we inject `GreetingService` into our component, service, or directive, it will return the resolved instance of `MockGreetingService` instead.
