---
id: scalar
title: Scalar
sidebar_label: Scalar
---

## Class `Scalar`

Scalar field element.

## Methods

### `fromString(group) ► Scalar`
 

Creates a scalar object from a string representation of a scalar element.

Parameters | Type | Description
--- | --- | ---
__group__ | `string` | **
__*return*__ | Scalar | **

---

### `toString() ► string`


Returns the string representation of the scalar element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | **

---

### `fromBytesLe(bytes) ► Scalar`
 

Create a scalar element from a Uint8Array of left endian bytes.

Parameters | Type | Description
--- | --- | ---
__bytes__ | `Uint8Array` | **
__*return*__ | Scalar | **

---

### `toBytesLe() ► Uint8Array`


Encode the scalar element as a Uint8Array of left endian bytes.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Uint8Array` | **

---

### `fromBitsLe(bits) ► Scalar`
 

Reconstruct a scalar element from a boolean array representation.

Parameters | Type | Description
--- | --- | ---
__bits__ | `Array.<any>` | **
__*return*__ | Scalar | **

---

### `toBitsLe() ► Array.<any>`


Get the left endian boolean array representation of the scalar element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<any>` | **

---

### `toPlaintext() ► Plaintext`


Create a plaintext element from a scalar element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Plaintext | **

---

### `clone() ► Scalar`


Clone the scalar element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### `random() ► Scalar`
 

Generate a random scalar element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### `add(other) ► Scalar`


Add two scalar elements.

Parameters | Type | Description
--- | --- | ---
__other__ | Scalar | **
__*return*__ | Scalar | **

---

### `subtract(other) ► Scalar`


Subtract two scalar elements.

Parameters | Type | Description
--- | --- | ---
__other__ | Scalar | **
__*return*__ | Scalar | **

---

### `multiply(other) ► Scalar`


Multiply two scalar elements.

Parameters | Type | Description
--- | --- | ---
__other__ | Scalar | **
__*return*__ | Scalar | **

---

### `divide(other) ► Scalar`


Divide two scalar elements.

Parameters | Type | Description
--- | --- | ---
__other__ | Scalar | **
__*return*__ | Scalar | **

---

### `double() ► Scalar`


Double the scalar element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### `pow(other) ► Scalar`


Power of a scalar element.

Parameters | Type | Description
--- | --- | ---
__other__ | Scalar | **
__*return*__ | Scalar | **

---

### `inverse() ► Scalar`


Invert the scalar element.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### `one() ► Scalar`
 

Get the multiplicative identity of the scalar field.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### `zero() ► Scalar`
 

Get the additive identity of the scalar field.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### `equals(other) ► boolean`


Check if one scalar element equals another.

Parameters | Type | Description
--- | --- | ---
__other__ | Scalar | **
__*return*__ | `boolean` | **

---