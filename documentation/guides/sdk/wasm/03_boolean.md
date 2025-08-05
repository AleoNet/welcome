---
id: boolean
title: Boolean
sidebar_label: Boolean
---

## Class `Boolean`

Boolean element.

### Constructors


### `Boolean(value)`

Creates a Boolean from a native JS bool.

Parameters | Type | Description
--- | --- | ---
__value__ | `boolean` | **

---

### Methods

### `fromString(boolean) ► Boolean`
 

Creates a boolean object from a string representation (&quot;true&quot;/&quot;false&quot;).

Parameters | Type | Description
--- | --- | ---
__boolean__ | `string` | **
__*return*__ | Boolean | **

---

### `toString() ► string`


Returns the string representation of the boolean element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | **

---

### `fromBytesLe(bytes) ► Boolean`
 

Create a boolean element from a Uint8Array of left endian bytes.

Parameters | Type | Description
--- | --- | ---
__bytes__ | `Uint8Array` | **
__*return*__ | Boolean | **

---

### `toBytesLe() ► Uint8Array`


Encode the boolean element as a Uint8Array of left endian bytes.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Uint8Array` | **

---

### `fromBitsLe(bits) ► Boolean`
 

Reconstruct a boolean element from a boolean array representation.

Parameters | Type | Description
--- | --- | ---
__bits__ | `Array.<any>` | **
__*return*__ | Boolean | **

---

### `toBitsLe() ► Array.<any>`


Get the left endian boolean array representation of the boolean element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<any>` | **

---

### `toPlaintext() ► Plaintext`


Create a plaintext from the boolean element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Plaintext | **

---

### `clone() ► Boolean`


Clone the boolean element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Boolean | **

---

### `random() ► Boolean`
 

Generate a random boolean element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Boolean | **

---

### `not() ► Boolean`


Logical NOT.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Boolean | **

---

### `and(other) ► Boolean`


Logical AND.

Parameters | Type | Description
--- | --- | ---
__other__ | Boolean | **
__*return*__ | Boolean | **

---

### `or(other) ► Boolean`


Logical OR.

Parameters | Type | Description
--- | --- | ---
__other__ | Boolean | **
__*return*__ | Boolean | **

---

### `xor(other) ► Boolean`


Logical XOR.

Parameters | Type | Description
--- | --- | ---
__other__ | Boolean | **
__*return*__ | Boolean | **

---

### `nand(other) ► Boolean`


Logical NAND.

Parameters | Type | Description
--- | --- | ---
__other__ | Boolean | **
__*return*__ | Boolean | **

---

### `nor(other) ► Boolean`


Logical NOR.

Parameters | Type | Description
--- | --- | ---
__other__ | Boolean | **
__*return*__ | Boolean | **

---

### `equals(other) ► boolean`


Check if one boolean element equals another.

Parameters | Type | Description
--- | --- | ---
__other__ | Boolean | **
__*return*__ | `boolean` | **

--- 