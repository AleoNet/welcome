---
id: signature
title: Signature
sidebar_label: Signature
---

## Class `Signature`

Cryptographic signature of a message signed by an Aleo account

## Methods

### `sign(private_key, message) ► Signature`
 

Sign a message with a private key

Parameters | Type | Description
--- | --- | ---
__private_key__ | PrivateKey | *The private key to sign the message with*
__message__ | `Uint8Array` | *Byte representation of the message to sign*
__*return*__ | Signature | *Signature of the message*

---

### `to_address() ► Address`


Get an address from a signature.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Address | *Address object*

---

### `challenge() ► Scalar`


Get the challenge of a signature.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### `response() ► Scalar`


Get the response of a signature.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### `verify(address, message) ► boolean`


Verify a signature of a message with an address

Parameters | Type | Description
--- | --- | ---
__address__ | Address | *The address to verify the signature with*
__message__ | `Uint8Array` | *Byte representation of the message to verify*
__*return*__ | `boolean` | *True if the signature is valid, false otherwise*

---

### `fromBytesLe(bytes) ► Signature`
 

Get a signature from a series of bytes.

Parameters | Type | Description
--- | --- | ---
__bytes__ | `Uint8Array` | *A left endian byte array representing the signature.*
__*return*__ | Signature | *The signature object.*

---

### `toBytesLe() ► Uint8Array`


Get the left endian byte array representation of the signature.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Uint8Array` | **

---

### `fromBitsLe(bits) ► Signature`
 

Get a signature from a series of bits represented as a boolean array.

Parameters | Type | Description
--- | --- | ---
__bits__ | `Array` | *A left endian boolean array representing the bits of the signature.*
__*return*__ | Signature | *The signature object.*

---

### `toBitsLe() ► Array.<any>`


Get the left endian boolean array representation of the bits of the signature.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<any>` | **

---

### `toFields() ► Array.<any>`


Get the field array representation of the signature.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<any>` | **

---

### `from_string(signature) ► Signature`
 

Get a signature from a string representation of a signature

Parameters | Type | Description
--- | --- | ---
__signature__ | `string` | *String representation of a signature*
__*return*__ | Signature | *Signature*

---

### `to_string() ► string`


Get a string representation of a signature

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | *String representation of a signature*

---

### `toPlaintext() ► Plaintext`


Get the plaintext representation of the signature.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Plaintext | **

---