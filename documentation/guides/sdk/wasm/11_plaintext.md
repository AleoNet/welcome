---
id: plaintext
title: Plaintext
sidebar_label: Plaintext
---

## Class `Plaintext`

SnarkVM Plaintext object. Plaintext is a fundamental monadic type used to represent Aleo
primitive types (boolean, field, group, i8, i16, i32, i64, i128, u8, u16, u32, u64, u128,
scalar, and signature), struct types, and array types.

In the context of a web or NodeJS application, this type is useful for turning an Aleo type into
a JS value, object, or array that might be necessary for performing computations within the
application.

## Examples

```javascript
// Get the bond state of an existing address.
const bondState = await fetch(https://api.explorer.provable.com/v1/mainnet/program/credits.aleo/mapping/bond_state/aleo12zlythl7htjdtjjjz3ahdj4vl6wk3zuzm37s80l86qpx8fyx95fqnxcn2f);
// Convert the bond state to a Plaintext object.
const bondStatePlaintext = Plaintext.fromString(bond_state);
// Convert the Plaintext object to a JS object.
const bondStateObject = bond_state_plaintext.toObject();
// Check if the bond state matches the expected object.
const expectedObject = { validator: "aleo12zlythl7htjdtjjjz3ahdj4vl6wk3zuzm37s80l86qpx8fyx95fqnxcn2f", microcredits: 100000000u64 };
assert( JSON.stringify(bondStateObject) === JSON.stringify(expectedObject) );
```

### Methods

### `find(name) ► Plaintext`


Find plaintext member if the plaintext is a struct. Returns &#x60;null&#x60; if the plaintext is not
a struct or the member does not exist.

Parameters | Type | Description
--- | --- | ---
__name__ | `string` | *The name of the plaintext member to find.*
__*return*__ | Plaintext | *The plaintext member.*

---

### `encrypt(address, randomizer) ► Ciphertext`


Encrypt a plaintext with an address and randomizer.

Parameters | Type | Description
--- | --- | ---
__address__ | Address | *The address to encrypt the plaintext for.*
__randomizer__ | Scalar | *The randomizer to use for encryption.*
__*return*__ | Ciphertext | *The encrypted ciphertext.*

---

### `encryptSymmetric(transition_view_key) ► Ciphertext`


Encrypt a plaintext with a transition view key.

Parameters | Type | Description
--- | --- | ---
__transition_view_key__ | Field | *The transition view key of the transition
associated with the plaintext.*
__*return*__ | Ciphertext | *The encrypted ciphertext.*

---

### `fromString(plaintext) ► Plaintext`
 

Creates a plaintext object from a string representation of a plaintext.

Parameters | Type | Description
--- | --- | ---
__plaintext__ | `string` | *The string representation of the plaintext.*
__*return*__ | Plaintext | *The plaintext object.*

---

### `fromBytesLe(bytes) ► Plaintext`
 

Get a plaintext object from a series of bytes.

Parameters | Type | Description
--- | --- | ---
__bytes__ | `Uint8Array` | *A left endian byte array representing the plaintext.*
__*return*__ | Plaintext | *The plaintext object.*

---

### `toBytesLe() ► Uint8Array`


Get the left endian byte array representation of the plaintext.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Uint8Array` | *The left endian byte array representation of the plaintext.*

---

### `fromBitsLe(bits) ► Plaintext`
 

Get a plaintext object from a series of bits represented as a boolean array.

Parameters | Type | Description
--- | --- | ---
__bits__ | `Array` | *A left endian boolean array representing the bits plaintext.*
__*return*__ | Plaintext | *The plaintext object.*

---

### `toBitsLe() ► Array`


Get the left endian boolean array representation of the bits of the plaintext.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array` | *The left endian boolean array representation of the bits of the plaintext.*

---

### `fromFields(fields) ► Plaintext`
 

Get a plaintext object from an array of fields.

Parameters | Type | Description
--- | --- | ---
__fields__ | `Array` | *An array of fields.*
__*return*__ | Plaintext | *The plaintext object.*

---

### `toFields() ► Array`


Get the field array representation of the plaintext.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array` | *The field array representation of the plaintext.*

---

### `toString() ► string`


Returns the string representation of the plaintext.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | *The string representation of the plaintext.*

---

### `plaintextType() ► string`


Gives the type of the plaintext.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | *The type of the plaintext.*

---

### `toObject() ► Object`


Attempt to convert the plaintext to a JS object.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Object` | *The JS object representation of the plaintext.*

--- 