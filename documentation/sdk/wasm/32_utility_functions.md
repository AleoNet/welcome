---
title: Utility Functions
sidebar_label: Utility Functions
---

<a name="UtilityFunctions"></a>

## Overview

<p>The SDK exports several utility functions for initialization and verification operations.</p>

## Functions

<a name="initThreadPool"></a>

### initThreadPool

<p>Initialize the thread pool for parallel WASM operations. This should be called before performing CPU-intensive operations like proof generation.</p>

```javascript
initThreadPool(num_threads) ► Promise<void>
```

| Param | Type | Description |
| --- | --- | --- |
| num_threads | <code>number</code> | Number of threads to use in the thread pool |
| *return* | <code>Promise&lt;void&gt;</code> | Promise that resolves when initialization is complete |

**Example**

```javascript
import { initThreadPool } from '@provablehq/sdk';

// Initialize with available CPU cores
await initThreadPool(navigator.hardwareConcurrency);
```

---

<a name="verifyFunctionExecution"></a>

### verifyFunctionExecution

<p>Verify an execution. Executions with multiple transitions must have the program source code and verifying keys of imported functions supplied from outside to correctly verify. Note: this does not verify that the state root of the execution is included in the Aleo Network ledger.</p>

```javascript
verifyFunctionExecution(execution, verifying_key, program, function_id, imports, import_verifying_keys, block_height) ► boolean
```

| Param | Type | Description |
| --- | --- | --- |
| execution | <code>Execution</code> | The function execution to verify |
| verifying_key | <code>VerifyingKey</code> | The verifying key for the function |
| program | <code>Program</code> | The program that the function execution belongs to |
| function_id | <code>string</code> | The name of the function that was executed |
| imports | <code>Object</code> | The imports for the program in the form of `{ "program_id.aleo": "source code", ... }` |
| import_verifying_keys | <code>Object</code> | The verifying keys for the imports in the form of `{ "program_id.aleo": [["function", "verifying_key"], ...], ... }` |
| block_height | <code>number</code> | The block height at which the execution occurred |
| *return* | <code>boolean</code> | True if the execution is valid, false otherwise |

**Example**

```javascript
import { verifyFunctionExecution, Execution, VerifyingKey, Program } from '@provablehq/sdk';

const execution = Execution.fromString(executionJson);
const verifyingKey = VerifyingKey.fromString(vkString);
const program = Program.fromString(programSource);

const isValid = verifyFunctionExecution(
  execution,
  verifyingKey,
  program,
  "transfer_public",
  {},  // imports
  {},  // import_verifying_keys
  1000000  // block_height
);

console.log("Execution valid:", isValid);
```

---

<a name="getOrInitConsensusVersionTestHeights"></a>

### getOrInitConsensusVersionTestHeights

<p>Get or initialize consensus version test heights. This is primarily used for testing network consensus version transitions.</p>

```javascript
getOrInitConsensusVersionTestHeights() ► Object
```

| Param | Type |
| --- | --- |
| *return* | <code>Object</code> |

---
