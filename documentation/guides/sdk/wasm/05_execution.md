---
id: execution
title: Execution
sidebar_label: Execution
---

## Class `Execution`

Execution of an Aleo program.

### Methods

### `toString() ► string`


Returns the string representation of the execution.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | *The string representation of the execution.*

---

### `fromString(execution) ► Execution`
 

Creates an execution object from a string representation of an execution.

Parameters | Type | Description
--- | --- | ---
__execution__ | `string` | **
__*return*__ | Execution | *The wasm representation of an execution object.*

---

### `globalStateRoot() ► Execution`


Returns the global state root of the execution.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Execution | *The global state root used in the execution.*

---

### `proof() ► string`


Returns the proof of the execution.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | *The execution proof.*

---

### `transitions() ► `


Returns the transitions present in the execution.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `undefined` | *Array&lt;Transition&gt; the array of transitions present in the execution.*

--- 