---
sidebar_position: 2
---

# Quick Start

There are multiple ways to set up a MonsterJS project, but the easiest method is to clone the starter app from [GitHub](https://github.com/monster-js/starter-app). Another option is to use the [CLI](/docs/cli/cli-what-is-cli).

## Create App

Clone the starter app from [GitHub](https://github.com/monster-js/starter-app).

```bash
git clone https://github.com/monster-js/starter-app.git monster-app
```

Once you have cloned the repository, navigate to the starter project directory which is monster-app in the example above.

```bash
cd monster-app
```

Install the dependencies

```bash
npm install
```

To start the local development server, run the following command:

```bash
npm start
```

To view the app, open your browser and navigate to [http://localhost:4000](http://localhost:4000).

## Project Structure

After the setup is complete, you can see the project file structure in the current directory.

```
.monster
    └── monster.json
node_modules
src
    └── app
        └── app.component.scss
        └── app.component.tsx
    ├── assets
    └── environments
        ├── environment.ts
        └── environment.prod.ts
    ├── index.html
    ├── index.ts
    ├── styles.scss
    └── types.d.ts
package.json
tsconfig.json
```

- `.monster` Contains the configurations needed for MonsterJS project.
- `.monster/monster.json` The configuration for MonsterJS project. Usually used by the CLI.
- `node_modules/` This is where the installed node packages are located.
- `src/` A directory that contains the source code and assets of your application.
- `src/app/` This is where the codes related to application is located
- `src/app/app.component.scss` Contains the css codes of the root component.
- `src/app/app.component.tsx` Contains the ts codes of the root component. Any other components must be a child of this component.
- `src/assets/` This is the recommended directory to put all of the asset files.
- `src/environments/` Contains the different environment files for the project.
- `src/environments/environment.ts` The development environment of the project.
- `src/environments/environment.prod.ts` The production environment of the project.
- `src/index.html` The main HTML page that is served when someone visits your application.
- `src/index.ts` The main entry point of your application. It bootstrap the root module of the entire project.
- `src/styles.scss` Contains the global styles of the application.
- `src/types.d.ts` Interfaces to override the default types.
- `package.json` All the dependencies and configurations of your project.
- `tsconfig.json` The typescript configuration file.