---
id: group
title: Group
sidebar_label: Group
---

## Class `Group`

Elliptic curve element.

### Methods

### `fromString(group) ► Group`
 

Creates a group object from a string representation of a group element.

Parameters | Type | Description
--- | --- | ---
__group__ | `string` | **
__*return*__ | Group | **

---

### `toString() ► string`


Returns the string representation of the group element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | **

---

### `fromBytesLe(bytes) ► Group`
 

Create a group element from a Uint8Array of left endian bytes.

Parameters | Type | Description
--- | --- | ---
__bytes__ | `Uint8Array` | **
__*return*__ | Group | **

---

### `toBytesLe() ► Uint8Array`


Encode the group element as a Uint8Array of left endian bytes.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Uint8Array` | **

---

### `fromBitsLe(bits) ► Group`
 

Reconstruct a group element from a boolean array representation.

Parameters | Type | Description
--- | --- | ---
__bits__ | `Array.<any>` | **
__*return*__ | Group | **

---

### `toBitsLe() ► Array.<any>`


Get the left endian boolean array representation of the group element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<any>` | **

---

### `toFields() ► Array.<any>`


Get the field array representation of the group.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<any>` | **

---

### `toXCoordinate() ► Field`


Get the x-coordinate of the group element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Field | **

---

### `toPlaintext() ► Plaintext`


Create a plaintext element from a group element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Plaintext | **

---

### `clone() ► Group`


Clone the group element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Group | **

---

### `random() ► Group`
 

Generate a random group element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Group | **

---

### `add(other) ► Group`


Add two group elements.

Parameters | Type | Description
--- | --- | ---
__other__ | Group | **
__*return*__ | Group | **

---

### `subtract(other) ► Group`


Subtract two group elements (equivalently: add the inverse of an element).

Parameters | Type | Description
--- | --- | ---
__other__ | Group | **
__*return*__ | Group | **

---

### `scalarMultiply(scalar) ► Group`


Multiply a group element by a scalar element.

Parameters | Type | Description
--- | --- | ---
__scalar__ | Scalar | **
__*return*__ | Group | **

---

### `double() ► Group`


Double the group element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Group | **

---

### `inverse() ► Group`


Get the inverse of the group element. This is the reflection of the point about the axis
of symmetry i.e. (x,y) -&gt; (x, -y).

Parameters | Type | Description
--- | --- | ---
__*return*__ | Group | **

---

### `equals(other) ► boolean`


Check if one group element equals another.

Parameters | Type | Description
--- | --- | ---
__other__ | Group | **
__*return*__ | `boolean` | **

---

### `zero() ► Group`
 

Get the group identity element under the group operation (i.e. the point at infinity.)

Parameters | Type | Description
--- | --- | ---
__*return*__ | Group | **

---

### `generator() ► Group`
 

Get the generator of the group.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Group | **

--- 