---
id: getting_started
title: Getting Started
sidebar_label: Getting Started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installation

<Tabs defaultValue="npm"
values={[
  { label: 'NPM', value: 'npm' },
  { label: 'Yarn', value: 'yarn' },
  { label: 'Build From Source', value: 'source' },
]}>
<TabItem value="npm">
```
npm install @provablehq/sdk
```
</TabItem>
<TabItem value="yarn">
```
yarn add @provablehq/sdk
```
</TabItem>
<TabItem value="source">
1. Clone the [SDK repository](https://github.com/ProvableHQ/sdk)
2. Navigate to `sdk/` and execute the following command:
```
yarn build:all
```
</TabItem>
</Tabs>



## Configuration

### Ensure compatibility with ES modules
In your project's `package.json`, ensure that the following line is added above `scripts`:

```json
{
  "type": "module",
}
```

### Top-Level Await
Top level await is a feature that allows you to use the await keyword outside of an async function. This feature is necessary for the Provable SDK to function correctly.

In webpack this is enabled with the following options within `webpack.config.js`:
```typescript
experiments: {
    asyncWebAssembly: true,
    topLevelAwait: true,
},
```

### Framework Specific Configuration
The npm package [create-leo-app](https://www.npmjs.com/package/create-leo-app) offers several templates for building zero knowledge JavaScript apps using several popular frameworks including React, Next.js, and Node. Examining the configuration of these templates can provide additional guidance on how to configure your project.

:::note
If you are using `Node.js` as your framework, the Provable SDK requires a minimum of `Node.js `version 20 and recommends using version 22+ for best performance.
:::



## Network Selection
The Provable SDK contains modules for interacting with both the Mainnet and Testnet networks. The Mainnet and Testnet networks are **NOT** interoperable so it is required to explicitly select the desired network. Any transactions built for the Mainnet network will not be valid on the Testnet network and vice versa.

The following import syntax is used to select the desired network:

#### Mainnet
```typescript
import { ... } from '@provablehq/sdk/mainnet.js';
```
#### Testnet
```typescript
import { ... } from '@provablehq/sdk/testnet.js';
```

If no network is explicitly selected, the SDK defaults to the testnet network.

## WebAssembly Initialization
When the SDK is imported, single-threaded WebAssembly is enabled by default. However, it is recommended to enable multithreaded WebAssembly as it is much more performant and eliminates the possibility of a computationally expensive operation blocking the main thread.

Multi-threaded WebAssembly is enabled by calling the `initThreadPool()` function at the beginning of the application. This starts multiple WebWorker threads and provides access to the WebAssembly instance and memory to each thread.

**This function only needs to be called once and should be called before any other SDK functions.**

```typescript
import { initThreadPool } from '@provablehq/sdk/mainnet.js';

// Enables multithreading
await initThreadPool();

// Perform further program logic...
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