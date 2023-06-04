---
sidebar_position: 4
---

# Local Development Server

To start a local development server, you can run the following command:

```bash
npm start
```

Alternatively, if you have `webpack-cli` installed globally, you can also run:

```bash
webpack serve
```

The command above will start a development server on port 4000 and will use the development environment variables. For more information about these variables, please refer to the [environment variables](../useful-topics/environment-variables) section in the documentation.

Once the server is running, you can view your project by accessing the local development server at the URL [http://localhost:4000](http://localhost:4000).

## Command Options

You can also pass some configuration options to the `webpack` CLI command, as shown below:

```bash
webpack serve --env environment=prod port=4001
```

### Available Options

| Options | Description | Value Type | Default |
| --- | --- | --- | --- |
| --env environment=<value\> | Serve the project using the specified environment. | string | |
| --env port=<value\> | Set the port number for the local development server. | number | 4000 |
| --env open=true | Opens a browser when local development server is ready. | boolean | false |
| --mode <value\> | Serve the project in 'development', 'production', or 'none' mode. See [webpack mode](https://webpack.js.org/configuration/mode/) for more info about the different modes. This option determines whether the build or serve command will generate production or development code. | string | development |
