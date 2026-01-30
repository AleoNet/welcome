---
title: Plaintext
sidebar_label: Plaintext
---

<a name="Plaintext"></a>

## Overview

<p>SnarkVM Plaintext object. Plaintext is a fundamental monadic type used to represent Aleo primitive types (boolean, field, group, i8, i16, i32, i64, i128, u8, u16, u32, u64, u128, scalar, and signature), struct types, and array types.</p>

<p>In the context of a web or NodeJS application, this type is useful for turning an Aleo type into a JS value, object, or array that might be necessary for performing computations within the application.</p>

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

## Methods

<a name="Plaintext+find"></a>

### find

<p>Find plaintext member if the plaintext is a struct. Returns null if the plaintext is not a struct or the member does not exist</p>

```javascript
find(name) ► Plaintext
```

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the plaintext member to find |
| *return* | <code>Plaintext</code> | The plaintext member |

---

<a name="Plaintext+encrypt"></a>

### encrypt

<p>Encrypt a plaintext with an address and randomizer</p>

```javascript
encrypt(address, randomizer) ► Ciphertext
```

| Param | Type | Description |
| --- | --- | --- |
| address | <code>Address</code> | The address to encrypt the plaintext for |
| randomizer | <code>Scalar</code> | The randomizer to use for encryption |
| *return* | <code>Ciphertext</code> | The encrypted ciphertext |

---

<a name="Plaintext+encryptSymmetric"></a>

### encryptSymmetric

<p>Encrypt a plaintext with a transition view key</p>

```javascript
encryptSymmetric(transition_view_key) ► Ciphertext
```

| Param | Type | Description |
| --- | --- | --- |
| transition_view_key | <code>Field</code> | The transition view key of the transition associated with the plaintext |
| *return* | <code>Ciphertext</code> | The encrypted ciphertext |

---

<a name="Plaintext.fromString"></a>

### fromString

<p>Creates a plaintext object from a string representation of a plaintext</p>

```javascript
fromString(plaintext) ► Plaintext
```

| Param | Type | Description |
| --- | --- | --- |
| plaintext | <code>string</code> | The string representation of the plaintext |
| *return* | <code>Plaintext</code> | The plaintext object |

---

<a name="Plaintext.fromBytesLe"></a>

### fromBytesLe

<p>Get a plaintext object from a series of bytes</p>

```javascript
fromBytesLe(bytes) ► Plaintext
```

| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Uint8Array</code> | A left endian byte array representing the plaintext |
| *return* | <code>Plaintext</code> | The plaintext object |

---

<a name="Plaintext+toBytesLe"></a>

### toBytesLe

<p>Get the left endian byte array representation of the plaintext</p>

```javascript
toBytesLe() ► Uint8Array
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Uint8Array</code> | The left endian byte array representation of the plaintext |

---

<a name="Plaintext.fromBitsLe"></a>

### fromBitsLe

<p>Get a plaintext object from a series of bits represented as a boolean array</p>

```javascript
fromBitsLe(bits) ► Plaintext
```

| Param | Type | Description |
| --- | --- | --- |
| bits | <code>Array</code> | A left endian boolean array representing the bits plaintext |
| *return* | <code>Plaintext</code> | The plaintext object |

---

<a name="Plaintext+toBitsLe"></a>

### toBitsLe

<p>Get the left endian boolean array representation of the bits of the plaintext</p>

```javascript
toBitsLe() ► Array
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Array</code> | The left endian boolean array representation of the bits of the plaintext |

---

<a name="Plaintext.fromFields"></a>

### fromFields

<p>Get a plaintext object from an array of fields</p>

```javascript
fromFields(fields) ► Plaintext
```

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Array</code> | An array of fields |
| *return* | <code>Plaintext</code> | The plaintext object |

---

<a name="Plaintext+toFields"></a>

### toFields

<p>Get the field array representation of the plaintext</p>

```javascript
toFields() ► Array
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Array</code> | The field array representation of the plaintext |

---

<a name="Plaintext+toString"></a>

### toString

<p>Returns the string representation of the plaintext</p>

```javascript
toString() ► string
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>string</code> | The string representation of the plaintext |

---

<a name="Plaintext+plaintextType"></a>

### plaintextType

<p>Gives the type of the plaintext</p>

```javascript
plaintextType() ► string
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>string</code> | The type of the plaintext |

---

<a name="Plaintext+toObject"></a>

### toObject

<p>Attempt to convert the plaintext to a JS object</p>

```javascript
toObject() ► Object
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Object</code> | The JS object representation of the plaintext |

---

<a name="Plaintext+toBytesRawLe"></a>

### toBytesRawLe

<p>Get the raw little endian byte array representation of the plaintext</p>

```javascript
toBytesRawLe() ► Uint8Array
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Uint8Array</code> | The raw little endian byte array representation of the plaintext |

---

<a name="Plaintext+toBytesRawBe"></a>

### toBytesRawBe

<p>Get the raw big endian byte array representation of the plaintext</p>

```javascript
toBytesRawBe() ► Uint8Array
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Uint8Array</code> | The raw big endian byte array representation of the plaintext |

---

<a name="Plaintext+toBitsRawLe"></a>

### toBitsRawLe

<p>Get the raw little endian boolean array representation of the bits of the plaintext</p>

```javascript
toBitsRawLe() ► Array
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Array</code> | The raw little endian boolean array representation of the bits of the plaintext |

---

<a name="Plaintext+toBitsRawBe"></a>

### toBitsRawBe

<p>Get the raw big endian boolean array representation of the bits of the plaintext</p>

```javascript
toBitsRawBe() ► Array
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Array</code> | The raw big endian boolean array representation of the bits of the plaintext |

---

<a name="Plaintext+toFieldsRaw"></a>

### toFieldsRaw

<p>Get the raw field array representation of the plaintext</p>

```javascript
toFieldsRaw() ► Array
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Array</code> | The raw field array representation of the plaintext |