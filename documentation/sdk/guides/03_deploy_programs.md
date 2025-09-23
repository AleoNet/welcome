---
id: deploy_programs
title: Deploying Programs
sidebar_label: Deploying Programs
---

Developers on Aleo will often need to deploy their own program to implement the logic of their dApp. This section provides an overview of how to deploy a program to the Aleo Network and the languages that can be used to develop programs.

## Developing Programs
Programs on Aleo are written in one of two languages:


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs defaultValue="leo"
values={[
  { label: 'Leo', value: 'leo' },
  { label: 'Aleo Instructions', value: 'aleo_instructions' },
]}>
<TabItem value="leo">
[Leo](https://docs.leo-lang.org) is a high-level, developer-friendly language for developing zero-knowledge programs. The [Leo Playground](https://play.leo-lang.org/) provides a web IDE that allows developers to build, test and deploy new programs for.  Leo programs are compiled into Aleo Instructions
under the hood.

```leo
// A simple program adding two numbers together
program helloworld.aleo {
  transition hello(public a: u32, b: u32) -> u32 {
      let c: u32 = a + b;
      return c;
  }
}
```
</TabItem>
<TabItem value="aleo_instructions">
[Aleo Instructions](../../guides/aleo/00_aleo_overview.md) is a lower level language that provides developers with fine-grained control over the execution flow of zero-knowledge programs. It is written to be syntactically similar to the R1CS constraint systems that Aleo programs eventually compile into.

```aleo
program helloworld.aleo;

// The Leo code compiles to the following Aleo instructions
function hello:
    input r0 as u32.public;
    input r1 as u32.private;
    add r0 r1 into r2;
    output r2 as u32.private;
```
</TabItem>
</Tabs>


## Deploying Programs
Programs are deployed by building a deployment transaction. This is done by calling the SDK `deploy()` or `buildDeploymentTransaction()` method. Calling `deploy()` will build and submit the transaction to the Aleo network, while `buildDeploymentTransaction()` will only build the transaction and return it to the caller within Javascript.  Under the hood these methods execute and prove each function in the Aleo program to derive verifying keys. These keys are stored in a deployment transaction and sent to the Aleo network.

If the program name is available and the fee is sufficient, the program will be stored on the Aleo network. Once it is deployed, its functions can be executed via execution transactions by any party.  

Programs can be deployed to either the Aleo Testnet or Mainnet. It is highly recommended that developers test their programs on the Testnet before deploying them to Aleo Mainnet.

:::note
If you haven't already, check out the [Getting Started](./01_getting_started.md) guide.  Specifically, you'll need to import the correct version of the SDK (Mainnet vs. Testnet) for the your desired network and initialize WebAssembly.
:::
When ready to deploy a program, the Aleo Instructions source code must be imported into the JS/TS environment as a string. If the program is written in Leo it must first be compiled to Aleo Instructions. Once the source code is available with JS/TS, it can be deployed using the `ProgramManager`. 

Let's walk through an example:  

### Imports and WebAssembly

As mentioned earlier, you'll first need to import the necessary classes from the correct Provable SDK package and initialize Webassembly if you haven't done so already.

```typescript
import { Account, AleoNetworkClient, initThreadPool, ProgramManager, AleoKeyProvider } from '@provablehq/sdk/mainnet.js';

// If the threadpool has not been initialized, do so (this step can be skipped if it's been initialized elsewhere). 
await initThreadPool();
```

You'll also need to initialize an `Account` object with the desired private key:
```typescript
const account = new Account({ privateKey: 'APrivateKey1...'});
```

### `AleoNetworkClient`

Next, you'll need to initialize `AleoNetworkClient:
```typescript
// Create a network client to connect to the Aleo network.
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
```
`AleoNetworkClient` is a library that encapsulates REST calls to publicly exposed endpoints of Aleo nodes. The methods provided in this allow users to query public information from the Aleo blockchain and submit transactions to the network. `


### `AleoKeyProvider`
You'll also need to initialize `AleoKeyProvider`:
```typescript
// Create a key provider that will be used to find public proving & verifying keys for Aleo programs.
const keyProvider = new AleoKeyProvider();
keyProvider.useCache = true;
```
Since each function in a program has a proof associated with it, each function in a program has something called a proving key and verifying key. These keys are cryptographic material that uniquely identifies the structure of the function and are required to build the proof and verify the proof respectively. The SDK provides an interface called the `KeyProvider` to enable developers to define easy ways to retrieve these keys.  If an execution in the SDK does not have the keys, it will generate them. However, generating them is a computationally expensive process, and significantly slows down the execution process if they need. It is wise for developers to store/cache them for re-use when possible. 

The default implementation of the `KeyProvider` interface is the `AleoKeyProvider`. This implementation allows users to specify an optional HTTP url where the keys may be found and an in-memory cache for proving and verifying keys. However, developers can implement their own `KeyProvider` to store keys in places such as CDNs, databases, local file systems, etc.

### `ProgramManager`
Using the `AleoNetworkClient` and `AleoKeyProvider` objects, we can initialize the `ProgramManager` object and set the account that transactions will be signed by:

```typescript
// Initialize a program manager to talk to the Aleo network with the configured key and record providers.
const programManager = new ProgramManager(networkClient, keyProvider);

// Set the account for the program manager.
programManager.setAccount(account);
```

### Load the Program
As mentioned, you'll need to load the Aleo Instructions program into JS/TS as a string:
```typescript
// Define an Aleo program to deploy
const program = "program hello_hello.aleo;\n\nfunction hello:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n";
```
You'll also need to set a fee to pay to deploy the program:
```typescript
// Define a fee to pay to deploy the program
const fee = 3.8; // 3.8 Aleo credits
```

### Build the Transaction
Finally, we can build and submit the transaction, and await the results:
```typescript
// Build a deployment transaction for the program.
const tx = await programManager.buildDeploymentTransaction(program, fee, false);

// Send the transaction to the network.
const transaction_id = await programManager.networkClient.submitTransaction(tx);

// Verify the transaction was successful
const transaction = await programManager.networkClient.getTransaction(transaction_id);
```

Alternatively, you can use the `deploy()` method to build and broadcast the transaction in one call:

```typescript
// Build a deployment transaction for the program.
const transaction_id = await programManager.deploy(program, fee, false);

// Verify the transaction was successful
const transaction = await programManager.networkClient.getTransaction(transaction_id);
```


Once a program has been deployed, developers can check to see its deployment status and monitor its activity using the [Provable Explorer](https://explorer.provable.com/programs).

### Deployment Fees
A fee must be paid to the Aleo network for deployment. This fee can be paid publicly using a public balance or privately using an `credits.aleo` Record. The fee for deploying any program can be calculated with the static `estimateDeploymentFee()` method of the `ProgramManager` class.
```typescript
const program = "program hello_hello.aleo;\n\nfunction hello:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n";

const fee = await ProgramManager.estimateDeploymentFee(program);
```
Deployment fees are calculated based on the following formulas. The cost of deploying a program is proportional to the amount of opcodes used in a program and the complexity of the operations it performs. More computationally expensive opcode usage such as hash functions will cost more than simple opcodes such as arithmetic or boolean opcodes.

|Cost Component |	Cost (Microcredits) |
| ---- | ---- |
|Synthesis Cost |	25*#Constraints |
|Storage Cost |	1000*#Bytes |
|Namespace Cost	| 10^(10 - num_characters) |
|**Total Cost** |	**Synthesis + Storage + Namespace** |

