---
id: field
title: Field
sidebar_label: Field
---

## Class `Field`

Field element.

### Methods

### `fromString(field) ► Field`
 

Creates a field object from a string representation of a field element.

Parameters | Type | Description
--- | --- | ---
__field__ | `string` | **
__*return*__ | Field | **

---

### `toString() ► string`


Returns the string representation of the field element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | **

---

### `fromBytesLe(bytes) ► Field`
 

Create a field element from a Uint8Array of left endian bytes.

Parameters | Type | Description
--- | --- | ---
__bytes__ | `Uint8Array` | **
__*return*__ | Field | **

---

### `toBytesLe() ► Uint8Array`


Encode the field element as a Uint8Array of left endian bytes.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Uint8Array` | **

---

### `fromBitsLe(bits) ► Field`
 

Reconstruct a field element from a boolean array representation.

Parameters | Type | Description
--- | --- | ---
__bits__ | `Array.<any>` | **
__*return*__ | Field | **

---

### `toBitsLe() ► Array.<any>`


Get the left endian boolean array representation of the field element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<any>` | **

---

### `toPlaintext() ► Plaintext`


Create a plaintext from the field element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Plaintext | **

---

### `clone() ► Field`


Clone the field element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Field | **

---

### `random() ► Field`
 

Generate a random field element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Field | **

---

### `add(other) ► Field`


Add two field elements.

Parameters | Type | Description
--- | --- | ---
__other__ | Field | **
__*return*__ | Field | **

---

### `subtract(other) ► Field`


Subtract two field elements.

Parameters | Type | Description
--- | --- | ---
__other__ | Field | **
__*return*__ | Field | **

---

### `multiply(other) ► Field`


Multiply two field elements.

Parameters | Type | Description
--- | --- | ---
__other__ | Field | **
__*return*__ | Field | **

---

### `divide(other) ► Field`


Divide two field elements.

Parameters | Type | Description
--- | --- | ---
__other__ | Field | **
__*return*__ | Field | **

---

### `pow(other) ► Field`


Power of a field element.

Parameters | Type | Description
--- | --- | ---
__other__ | Field | **
__*return*__ | Field | **

---

### `inverse() ► Field`


Invert the field element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Field | **

---

### `zero() ► Field`
 

Get the additive identity element of the field.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Field | **

---

### `one() ► Field`
 

Get the multiplicative identity of the field.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Field | **

---

### `double() ► Field`


Double the field element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Field | **

---

### `equals(other) ► boolean`


Check if one field element equals another.

Parameters | Type | Description
--- | --- | ---
__other__ | Field | **
__*return*__ | `boolean` | **

--- 