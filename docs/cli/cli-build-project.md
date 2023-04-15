---
sidebar_position: 5
---

# Build MonsterJS Project

The MonsterJS CLI provides a command `mn build` to compile the project for deployment. By default, the output of this build process is found in the `./build` directory, but it can be changed using the options available when running the CLI command to build the project.

## Build Command

To build the project we can run the following command:

```bash
mn build
```

After running the mn build command, the generated files will be located in the output directory specified by the user.

## Command Options

| Options | Description | Value Type | Default |
| --- | --- | --- | --- |
| --env <value\> | Build the project using the specified environment. | string | dev |
| --mode <value\> | Build the project in 'development', 'production', or 'none' mode. See [webpack mode](https://webpack.js.org/configuration/mode/) for more info about the different modes. This option will determine if the build or serve command will generate a production or development codes. |
| --output <value\> | The directory where it should output the bundles, assets and other files. | string | dist |

Example.

```bash
mn build --env prod --output dist
```