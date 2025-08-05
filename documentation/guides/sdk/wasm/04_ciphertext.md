---
id: ciphertext
title: Ciphertext
sidebar_label: Ciphertext
---

## Class `Ciphertext`

SnarkVM Ciphertext object. A Ciphertext represents an symmetrically encrypted plaintext. This
object provides decryption methods to recover the plaintext from the ciphertext (given the
api consumer has the proper decryption materials).

### Methods

### `decrypt(viewKey, nonce) ► Plaintext`


Decrypt the ciphertext using the given view key.

Parameters | Type | Description
--- | --- | ---
__viewKey__ | `ViewKey` | *The view key of the account that encrypted the ciphertext.*
__nonce__ | Group | *The nonce used to encrypt the ciphertext.*
__*return*__ | Plaintext | *The decrypted plaintext.*

---

### `decryptWithTransitionInfo(view_key, transition_public_key, program, function_name, index) ► Plaintext`


Decrypt a ciphertext using the view key of the transition signer, transition public key, and
(program, function, index) tuple.

Parameters | Type | Description
--- | --- | ---
__view_key__ | `ViewKey` | *The view key of the transition signer.*
__transition_public_key__ | Group | *The transition public key used to encrypt the ciphertext.*
__program__ | `string` | *The program ID associated with the ciphertext.*
__function_name__ | `string` | *The name of the function associated with the encrypted inputs and outputs.*
__index__ | `u16` | *The index of the input or output parameter that was encrypted.*
__*return*__ | Plaintext | *The decrypted plaintext.*

---

### `decryptWithTransitionViewKey(transition_view_key, program, function_name, index) ► Plaintext`


Decrypt a ciphertext using the transition view key and a (program, function, index) tuple.

Parameters | Type | Description
--- | --- | ---
__transition_view_key__ | Field | *The transition view key that was used to encrypt the ciphertext.*
__program__ | `string` | *The program ID associated with the ciphertext.*
__function_name__ | `string` | *The name of the function associated with the encrypted inputs and outputs.*
__index__ | `u16` | *The index of the input or output parameter that was encrypted.*
__*return*__ | Plaintext | *The decrypted plaintext.*

---

### `decryptSymmetric(transition_view_key) ► Plaintext`


Decrypts a ciphertext into plaintext using the given ciphertext view key.

Parameters | Type | Description
--- | --- | ---
__transition_view_key__ | Field | *The transition view key that was used to encrypt the ciphertext.*
__*return*__ | Plaintext | *The decrypted plaintext.*

---

### `fromBytesLe(bytes) ► Ciphertext`
 

Deserialize a left endian byte array into a Ciphertext.

Parameters | Type | Description
--- | --- | ---
__bytes__ | `Uint8Array` | *The byte array representing the Ciphertext.*
__*return*__ | Ciphertext | *The Ciphertext object.*

---

### `toBytesLe() ► Uint8Array`


Get the left endian byte array representation of the ciphertext.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Uint8Array` | **

---

### `fromBitsLe(bits) ► Ciphertext`
 

Get a ciphertext object from a series of bits represented as a boolean array.

Parameters | Type | Description
--- | --- | ---
__bits__ | `Array` | *A left endian boolean array representing the bits of the ciphertext.*
__*return*__ | Ciphertext | *The ciphertext object.*

---

### `toBitsLe() ► Array.<any>`


Get the left endian boolean array representation of the bits of the ciphertext.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<any>` | **

---

### `fromFields(fields) ► Ciphertext`
 

Get a ciphertext object from an array of fields.

Parameters | Type | Description
--- | --- | ---
__fields__ | `Array` | *An array of fields.*
__*return*__ | Ciphertext | *The ciphertext object.*

---

### `toFields() ► Array.<any>`


Get the field array representation of the ciphertext.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<any>` | **

---

### `fromString(ciphertext) ► Ciphertext`
 

Deserialize a Ciphertext string into a Ciphertext object.

Parameters | Type | Description
--- | --- | ---
__ciphertext__ | `string` | *A string representation of the ciphertext.*
__*return*__ | Ciphertext | *The Ciphertext object.*

---

### `toBytes() ► Uint8Array`


Serialize a Ciphertext object into a byte array.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Uint8Array` | *The serialized Ciphertext.*

---

### `toString() ► string`


Serialize a Ciphertext into a js string.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | *The serialized Ciphertext.*

--- 