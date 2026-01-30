---
id: querying_network
title: Querying the Aleo Network
sidebar_label: Querying the Network
---

Communication with the Aleo network is done through the `AleoNetworkClient` class. This class provides methods to query
data from Aleo network nodes and submit transactions to the Aleo network.

## Blocks
Blocks are formed by Aleo validators and represent the canonical unit of state change. They contain all transactions, solutions to the Aleo puzzle, metadata about the block (such as height, current coinbase target, etc.) and cryptographic information such as the block's merkle roots and validator signatures.  The `AleoNetworkClient` can querying the block and return it in JSON format. The returned JSON mirrors the block's Typescript interface.

The following Typescript snippet shows how to extract most of the important information from a block:

```typescript
import { AleoNetworkClient } from "@provablehq/sdk"
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");

const block = await networkClient.getBlock(1);

// Get the block's metadata
const blockHeight = block.header.metadata.height;
const blockHash = block.block_hash;
const blockTimestamp = block.header.metadata.timestamp;
const coinbaseTarget = block.header.metadata.coinbase_target;
const proofTarget = block.header.metadata.proof_target;

// Get the block's transactions
const transactions = block.transactions;

// Iterate through the transactions in the block.
for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    // Get the transaction's ID.
    const transactionID = transaction.id;
    
    // Get the transaction's type.
    const transactionType = transaction.type;
    if (transactionType === "execute") {
        // Get the execution.
        const execution = transaction.transaction.execution;
        // Get the transitions in the execution.
        const transitions = execution.transitions;
        for (let j = 0; j < transitions.length; j++) {
            const transition = transitions[j];
            // Get the inputs of an individual transition.
            const transitionInputs = transition.inputs;
            // Get the outputs of an individual transition.
            const transitionOutputs = transition.outputs;
        }
    } else if (transactionType === "deploy") {
        // Get the transaction's deployment data.
        const deploymentData = transaction.transaction.deployment;
        // Get the program's name.
        const programName = deploymentData.program;
        // Get the program's verifying keys.
        const verifyingKeys = deploymentData.verifying_keys;
    }
    
    // Get the block and puzzle reward (this information is important to calculating staking and mining rewards).
    const ratificationsJSON = block.ratifications;
    const blockReward = ratificationsJSON[0].amount;
    const puzzleReward = ratificationsJSON[1].amount;
    
    // Get the block's puzzle solutions.
    const solutions = block.solutions
}
```

## Transactions and Transitions
While blocks contain most relevant information, they are large and may represent more data than is necessary for your application. An application may only be interested in specific transactions, and the `AleoNetworkClient` provides methods to query transactions by their unique ID. 

Transactions contain either deployments of new programs or executions of existing programs that change chain state. Each execution transaction contain one or more transitions that list all inputs and outputs of the executed functions including any records produced or futures created by functions with finalize statements.

After a program function relevant to an app has been executed, it is often useful to query transaction objects to visualize, store, or use the state changes produced in the transaction within the app.  Each transaction has a unique ID with the `bech32` prefix at. When a transaction is executed and submitted by the deploy or execute methods of the `ProgramManager` or submitted manually via the `submitTransaction()` method of the `AleoNetworkClient`, the transaction ID is returned as a `string`.  This transaction ID can then be used to query the transaction data from the Aleo network.



```typescript
import { AleoNetworkClient, Transition } from '@provablehq/sdk';
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");

// Get a transaction by id and get its inputs and outputs from the JSON representation.
let jsonRecords = [];
const transactionJSON = await networkClient.getTransaction('at1...');
const transitions = transactionJSON["execution"]["transitions"];
for (let i = 0; i < transitions.length; i++) {
    const transition = transitions[i];
    // Get the records of an individual transition.
    const transitionRecords = transition["records"];
    // Get the inputs of an individual transition.
    const transitionInputs = transition["inputs"];
    // Get the outputs of an individual transition.
    const transitionOutputs = transition["outputs"];
    // Record all records in the transaction.
    jsonRecords.push(transitionRecords);
}
```

The `AleoNetworkClient` also provides a method for transaction information back in the format of a WASM object. The WASM representation will provide the raw snarkVM object, which has several convenience methods for extracting the objects such as inputs, outputs, and records without the need for traditional JSON parsing. The choice of representation is up to the developer's personal preference in ergonomics.

```typescript
import { AleoNetworkClient, Transition } from '@provablehq/sdk';
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");

// Get a transaction by id and get its inputs and outputs from the Wasm representation.
const transactionWasm = await networkClient.getTransactionObject(`at1...`);
const transitionsWasm = transactionWasm.transitions();
for (let i = 0; i < transitionsWasm.length; i++) {
    const transition = transitionsWasm[i];
    // Get the records of an individual transition.
    const transitionRecords = transition.records();
    // Get the inputs of an individual transition.
    const transitionInputs = transition.inputs();
    // Get the outputs of an individual transition.
    const transitionOutputs = transition.outputs();
}

// Get all records present in a transaction.
const transactionRecords = transactionWasm.records();
```

## Programs
It is often key to use data both about a program's structure and it's internal data within apps. The AleoNetworkClient provides several methods to query and inspect programs on the Aleo Network.

### Querying Public Program State
The public state of a program exists within its mappings. These mappings often contain information such as public balances, validator stake, token information and more. This information will often change from block to block, and at any given block it can be queried using the AleoNetworkClient.

#### Querying Mappings
The list of mappings within a program can be queried using the getProgramMappingNames method of the AleoNetworkClient:

```typescript
import { AleoNetworkClient } from '@provablehq/sdk';
import { deepStrictEqual } from 'assert';
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");

// Get the list of program mappings in credits.aleo.
// The credits.aleo program contains the following mappings
const expectedMappings = [
    "committee",
    "delegated",
    "metadata",
    "bonded",
    "unbonding",
    "account",
    "withdraw",
    "pool"
];

const creditsMappings = await networkClient.getProgramMappingNames("credits.aleo");
deepStrictEqual(creditsMappings, expectedMappings);
```

To get the value from a mapping, one must know the type of the mapping's keys. When this is known, the `getMappingValue()` method can be used:

```typescript
import { AleoNetworkClient } from '@provablehq/sdk';
import { strictEqual } from 'assert';
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");


// Get the balance of an account in the `account` mapping in credits.aleo.
const account = await networkClient.getProgramMappingValue("credits.aleo", "account", "aleo1q3vx8pet0h7739hx5xlekfxh9kus6qdlxhx9qdkxhh9rnva8q5gsskve3t");
const expectedBalance = null;
strictEqual(account, expectedBalance);
```

Often the returned value from a mapping will be a struct or array. When returned as a string, this can be difficult to parse. The `AleoNetworkClient` provides a method to return the value as a WASM object called a `Plaintext`, which has several convenience methods for inspecting the returned value. The `toObject()` method can be used to convert the WASM object to a JavaScript object:

```typescript
import { AleoNetworkClient } from '@provablehq/sdk';
import {deepStrictEqual} from 'assert';
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");

// Get a token value of the `registered_tokens` mapping in token_registry.aleo.
const tokenStruct = await networkClient.getProgramMappingPlaintext("token_registry.aleo", "registered_tokens", "1381601714105276218895759962490543360839827276760458984912661726715051428034field");
const tokenObject = tokenStruct.toObject();
const expectedTokenObject = {
  token_id: "1381601714105276218895759962490543360839827276760458984912661726715051428034field",
  name: BigInt(1447384136),
  symbol: BigInt(1984255048),
  decimals: 18,
  supply: BigInt(1000000000000000000000000n),
  max_supply: BigInt(340282366920938463463374607431768211455n),
  admin: "aleo1uldp2afc9gnfsxd0r2svaecax8quutny5j6ns2qa80yp5uhsac9q35h7h6",
  external_authorization_required: false,
  external_authorization_party: "aleo1uldp2afc9gnfsxd0r2svaecax8quutny5j6ns2qa80yp5uhsac9q35h7h6"
};

deepStrictEqual(tokenObject,expectedTokenObject);
```
### Querying Program Structure
Apps often need to know information about a program's structure such as its source code, the functions it contains, function inputs and their types, and the mappings, records, and other programs it imports. The guide below shows how to query this information.

#### Querying Program Source Code
To get the source code of a program, the `AleoNetworkClient` provides a method to query the program by its unique ID.

```typescript
import { AleoNetworkClient } from '@provablehq/sdk';
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");

// Get the source code of credits.aleo.
const credits = await networkClient.getProgram("credits.aleo");
// Get the source code of token_registry.aleo.
const token_registry = await networkClient.getProgram("token_registry.aleo");
```

#### Querying Programs as Objects
The snarkVM representation of a program can be queried from the Aleo network by its unique ID. The returned object representation has several convenience methods for extracting a list of program's functions, inputs and input types , mappings, records, and address. This is useful because this data is difficult to parse from the source code directly.

```typescript
import { AleoNetworkClient } from '@provablehq/sdk';
import {deepStrictEqual} from 'assert';
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");

// Get credits.aleo as a program object.
const credits_program = await networkClient.getProgramObject("credits.aleo");

// Get all functions in the program.
const functions = credits_program.getFunctions();

// Get all inputs for the `transfer_private` function.
const transfer_function_inputs = credits_program.getFunctionInputs("transfer_private");

// Inputs will be an array of objects with the following structure, this an be used to build web forms or other UI 
// elements.
const expected_inputs = [
    {
      type:"record",
      record:"credits",
      members:[
        {
          name:"microcredits",
          type:"u64",
          visibility:"private"
        },
        { 
            name: '_nonce', 
            type: 'group', 
            visibility: 'public' 
        }
      ],
      register:"r0"
    },
    {
      type:"address",
      visibility:"private",
      register:"r1"
    },
    {
      type:"u64",
      visibility:"private",
      register:"r2"
    }
];
deepStrictEqual(transfer_function_inputs, expected_inputs);

// Get all mappings in the program.
const mappings = credits_program.getMappings();

// Get all programs the program imports.
const records = credits_program.getImports()
```

#### Querying Program Imports and Mappings
The following example shows how to query the mappings within a program and the other programs it imports:

```typescript
import { AleoNetworkClient, Program } from '@provablehq/sdk';
import {deepStrictEqual} from 'assert';
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");

// Get the program's import names.
const programImportsNames = await networkClient.getProgramImportNames("token_registry.aleo");
const expectedImportsNames = ["credits.aleo"];
deepStrictEqual(programImportsNames, expectedImportsNames);

// Get the source code of all imported programs.
const programImports = await networkClient.getProgramImports("token_registry.aleo");

// Get the list of all program mappings.
const programMappings = await networkClient.getProgramMappingNames("token_registry.aleo");
const expectedMappings = [
    "registered_tokens",
    "balances",
    "authorized_balances",
    "allowances",
    "roles"
];
deepStrictEqual(programMappings, expectedMappings);
```

A full list of methods provided by the `AleoNetworkClient` class and usage examples can be found in the
[Network Client API documentation](../../sdk/api-specification/02_aleo_network_client.md).