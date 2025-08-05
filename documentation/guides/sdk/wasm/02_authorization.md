---
id: authorization
title: Authorization
sidebar_label: Authorization
---

## Class `Authorization`

Authorization object containing the authorization for a transaction.

### Methods

### `new(request) ► Authorization`
 

Create a new authorization from a request object.

Parameters | Type | Description
--- | --- | ---
__request__ | `ExecutionRequest` | *The ExecutionRequest to build the authorization from.*
__*return*__ | Authorization | **

---

### `replicate() ► Authorization`


Returns a new and independent replica of the Authorization.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Authorization | **

---

### `toString() ► string`


Returns the string representation of the Authorization.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | **

---

### `fromString(authorization) ► Authorization`
 

Reconstructs an Authorization object from its string representation.

Parameters | Type | Description
--- | --- | ---
__authorization__ | `String` | *The string representation of the Authorization.*
__*return*__ | Authorization | **

---

### `toBytesLe() ► Uint8Array`


Returns the left-endian byte representation of the Authorization.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Uint8Array` | **

---

### `fromBytesLe(bytes) ► Authorization`
 

Creates an authorization object from a left-endian byte representation of an Authorization.

Parameters | Type | Description
--- | --- | ---
__bytes__ | `Uint8Array` | *Left-endian bytes representing the Authorization.*
__*return*__ | Authorization | **

---

### `equals(other) ► boolean`


Check if an Authorization object is the same as another.

Parameters | Type | Description
--- | --- | ---
__other__ | Authorization | *The Authorization object to determine equality with.*
__*return*__ | `boolean` | **

---

### `len() ► number`


Returns the number of &#x60;Request&#x60;s in the Authorization.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `number` | **

---

### `isEmpty() ► boolean`


Return &#x60;true&#x60; if the Authorization is empty.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `boolean` | **

---

### `isFeePrivate() ► boolean`


Returns &#x60;true&#x60; if the Authorization is for &#x60;credits.aleo/fee_private&#x60;.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `boolean` | **

---

### `isFeePublic() ► boolean`


Returns &#x60;true&#x60; if the Authorization is for &#x60;credits.aleo/fee_public&#x60;.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `boolean` | **

---

### `isSplit() ► boolean`


Returns &#x60;true&#x60; if the Authorization is for &#x60;credits.aleo/split&#x60;.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `boolean` | **

---

### `insertTransition(transition) ► void`


Insert a transition into the Authorization.

Parameters | Type | Description
--- | --- | ---
__transition__ | `Transition` | *The transition object to insert into the Authorization.*
__*return*__ | `void` | **

---

### `transitions() ► Array.<Transition>`


Get the transitions in an Authorization.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<Transition>` | *Array of transition objects*

---

### `toExecutionId() ► Field`


Returns the execution ID for the Authorization.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Field | *The execution ID for the Authorization, call toString() after this result to get the string representation.*

--- 