---
sidebar_position: 6
---

# Generate Commands

The MonsterJS CLI is a powerful tool that simplifies the process of creating components, services, and other necessary files for a MonsterJS application.

The syntax for the generate command in MonsterJS CLI is `mn generate <type> <name>`. Here, the `<type>` is the type of file to be generated, and `<name>` refers to the name of the file to be created. The name field can also accept a file path.

Here's an example command that generates a component in MonsterJS CLI: 

```bash
mn generate component my-component
```

The command above will generate the files like the following.

```
hello-world
    ├── hello-world.component.tsx
    └── hello-world.component.scss
```

## Generate Types

Here's a list of available types for the generate command in MonsterJS CLI.

| Type | Description |
| --- | --- |
| component | Generate a component file. |
| guard | Generate a route guard that can help the developer to allow or prevent the user from navigating certain paths or viewing components. |
| service | Generate a service file that will hold the business logic of the application. |
| class | Generate a simple typescript class. |
| interface | Generate a typescript interface to describe a data. |
| directive | Generate a directive file. |

For more information about each command in MonsterJS CLI, we can check the help feature of the cli. The syntax for this is `mn <command> --help`, where `<command>` is the name of the command you want to learn more about.

Example.

```bash
mn generate component --help
```

This will show additional information for the generate component command.
