---
id: offline_query
title: OfflineQuery
sidebar_label: OfflineQuery
---

## Class `OfflineQuery`

An offline query object used to insert the global state root and state paths needed to create
a valid inclusion proof offline.

### Constructors


### `OfflineQuery(block_height, state_root)`

Creates a new offline query object. The state root is required to be passed in as a string

Parameters | Type | Description
--- | --- | ---
__block_height__ | `u32` | *The block height.*
__state_root__ | `string` | *The state root of the current network.*
__*return*__ | OfflineQuery | *The newly created offline query object.*

---

### Methods

### `addBlockHeight(block_height) ► void`


Add a new block height to the offline query object.

Parameters | Type | Description
--- | --- | ---
__block_height__ | `u32` | *The block height to add.*
__*return*__ | `void` | **

---

### `addStatePath(commitment:, state_path:) ► void`


Add a new state path to the offline query object.

Parameters | Type | Description
--- | --- | ---
__commitment:__ | `string` | *The commitment corresponding to a record input.*
__state_path:__ | `string` | *The state path corresponding to the commitment.*
__*return*__ | `void` | **

---

### `toString() ► string`


Get a json string representation of the offline query object.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | *JSON string representation of the offline query object.*

---

### `fromString(JSON) ► OfflineQuery`
 

Create an offline query object from a json string representation.

Parameters | Type | Description
--- | --- | ---
__JSON__ | `string` | *string representation of the offline query object.*
__*return*__ | OfflineQuery | **

--- 