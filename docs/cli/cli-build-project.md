---
sidebar_position: 5
---

# Build MonsterJS Project

To build a MonsterJS application, you can run the following command:

```bash
npm run build
```

Alternatively, if you have `webpack-cli` installed globally, you can also run:

```bash
webpack --mode production
```

By default, the output of this build process is found in the `./dist` folder, but it can be changed using the options available when running the CLI command to build the project.

## Command Options

You can also pass some configuration options to the `webpack` CLI command, as shown below:

```bash
webpack --env output=./build
```

### Available Options

| Options | Description | Value Type | Default |
| --- | --- | --- | --- |
| --env environment=<value\> | Build the project using the specified environment. | string | |
| --env output=<value\> | The directory where it should output the bundles, assets and other files. | string | dist |
| --mode <value\> | Build the project in 'development', 'production', or 'none' mode. See [webpack mode](https://webpack.js.org/configuration/mode/) for more info about the different modes. This option will determine if the build or serve command will generate a production or development codes. | string | development |
