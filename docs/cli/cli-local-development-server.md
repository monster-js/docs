---
sidebar_position: 4
---

# Local Development Server

The MonsterJS CLI provides a command `mn serve` to start a local development server, allowing us to see the changes we made in our project before making it live.

## Serve Command

To start the local development server, we can run the following command:

```bash
mn serve
```

The command above will start a development server on port 4000 and will use the dev environment variables. For more information about these variables, please refer to the [environment variables](../useful-topics/environment-variables) section in the documentation.

Once the server is running, we can view our project by accessing the local development server at the URL [http://localhost:4000](http://localhost:4000).

## Command Options

| Options | Description | Value Type | Default |
| --- | --- | --- | --- |
| --env <value\> | Serve the project using the specified environment. | string | dev |
| --port <value\> | Set the port number for the local development server. | number | 4000 |
| --mode <value\> | Serve the project in 'development', 'production', or 'none' mode. See [webpack mode](https://webpack.js.org/configuration/mode/) for more info about the different modes. This option will determine if the build or serve command will generate a production or development codes. |
| --open | Opens a browser when local development server is ready. | boolean | false |

Example.

```bash
mn serve --port 4001 --env stage
```
