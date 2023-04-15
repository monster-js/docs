---
sidebar_position: 2
---

# Environment Variables

Environment variables help us define static variables for our application. They allow us to configure our project for different deployments without changing the code inside our application. We can define environment variables for production, development, and even custom environment variables.

When we create our application, two available environment variables are provided for us. If we check the `src/environments` directory, we can see that there are `environment.ts` and `environment.prod.ts` files.

## Using Environment Variables in a Project

To use our environment variables inside our project, we can simply import the `src/environment/environment.ts` file. The CLI will be responsible for replacing the value of the environment variables depending on the command.

Example if we have two environment variables:

#### Development environment variables

filename: `src/environments/environment.ts`
```tsx
export const environment = {
    hostURL: 'http://dev.my-server.com'
};
```

#### Production environment variables

filename: `src/environments/environment.prod.ts`
```tsx
export const environment = {
    hostURL: 'http://my-server.com'
};
```

We just need to import the development environment variables into our application. To use the production environment variable we can build the application using the following command:

:::caution
Never import other environment variables in the application other than the development environment variables.
:::

```bash
mn build --env prod
```

or to serve it:

```bash
mn serve --env prod
```

## Custom Environment Variables

To create a new environment variable, we just need to create a file named `environment.<env name>.ts`, where `<env name>` is the name used in the CLI option `--env`, as shown in the following example:

Example if we have `environment.stage.ts`:

```bash
mn serve --env stage
```

## Using Environment Variables in CLI

To use our environment variables in the CLI command, we just need to pass the environment name to the `--env` option in CLI commands.

Example, if we have environment variables like the following:

```
environments
    ├── environment.ts
    ├── environment.uat.ts
    └── environment.prod.ts
```

And we want to build our application using the `uat` environment. Then we can use the following command:

```bash
mn build --env uat
```
