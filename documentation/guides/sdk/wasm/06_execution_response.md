---
id: execution_response
title: ExecutionResponse
sidebar_label: ExecutionResponse
---

## Class `ExecutionResponse`

Webassembly Representation of an Aleo function execution response

This object is returned by the execution of an Aleo function off-chain. It provides methods for
retrieving the outputs of the function execution.

### Methods

### `getOutputs() ► Array`


Get the outputs of the executed function

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array` | *Array of strings representing the outputs of the function*

---

### `getExecution() ► Execution`


Returns the execution object if present, null if otherwise.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Execution | *The execution object if present, null if otherwise*

---

### `getKeys() ► KeyPair`


Returns the program keys if present

Parameters | Type | Description
--- | --- | ---
__*return*__ | KeyPair | **

---

### `getProvingKey() ► ProvingKey`


Returns the proving_key if the proving key was cached in the Execution response.
Note the proving key is removed from the response object after the first call to this
function. Subsequent calls will return null.

Parameters | Type | Description
--- | --- | ---
__*return*__ | ProvingKey | *The proving key*

---

### `getVerifyingKey() ► VerifyingKey`


Returns the verifying_key associated with the program

Parameters | Type | Description
--- | --- | ---
__*return*__ | VerifyingKey | *The verifying key*

---

### `getFunctionId() ► string`


Returns the function identifier

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | **

---

### `getProgram() ► Program`


Returns the program

Parameters | Type | Description
--- | --- | ---
__*return*__ | Program | **

--- 