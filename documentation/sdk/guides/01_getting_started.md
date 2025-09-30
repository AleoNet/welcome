---
id: getting_started
title: Getting Started
sidebar_label: 1. Getting Started
---
## Installation

### NPM / Yarn

To install Provable SDK, run the following commands in your project's root:

`npm install @provablehq/sdk` or `yarn add @provablehq/sdk`.

###  Build from source

To build the project from source, clone [the sdk repository](https://github.com/ProvableHQ/sdk/tree/testnet3/sdk) and execute the following command at `/sdk`:

`yarn build:all`

### Ensure compatibility with ES modules

In your project's `package.json`, ensure that the following line is added above `scripts`:

```json
{
  "type": "module",
}
```

<!--

## Zero Knowledge Web App Examples

### Create Leo App
A set of fully functional examples of zero knowledge web apps can be found in
[create-leo-app](https://github.com/ProvableHQ/sdk/tree/testnet3/create-leo-app ). Create-leo-app provides several web-app
templates in common web frameworks such as React that can be used as a starting point for building zero knowledge web apps.

Developers can get started immediately with create-react-app by running:
`npm create leo-app@latest`

### Provable Tools

Additionally, the SDK powers [provable.tools](https://provable.tools) - a React app that provides a graphical interface for most
of the functionality provided by the SDK and can be used as a reference for usage of the SDK. Source code for provable.tools
can be found [in the SDK repo here](https://github.com/provablehq/sdk/tree/testnet3/website) -->