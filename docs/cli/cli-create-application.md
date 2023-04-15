---
sidebar_position: 3
---

# Create MonsterJS Application

To create a new application using the CLI, we just need to run the command `mn new <project-name>`.

Example.

```bash
mn new my-app
```

Running this command will generate the MonsterJS files needed to create an application and automatically install the npm packages. Once the installation of the packages is complete, we now have a new MonsterJS application.

## Local development

To run a local development server for our project, we need to open a CLI, change directory to the root of the project, and run the following command:

```bash
mn serve
```

After the command is done, we can now view our application by pointing our browsers to [http://localhost:4000](http://localhost:4000). The port 4000 can be changed by adding a `--port` option to the command.

Example.

```bash
mn serve --port 4001
```
