---
id: address
title: Address
sidebar_label: Address
---

## Class `Address`

Public address of an Aleo account

### Methods

### `from_private_key(private_key) ► Address`
 

Derive an Aleo address from a private key

Parameters | Type | Description
--- | --- | ---
__private_key__ | PrivateKey | *The private key to derive the address from*
__*return*__ | Address | *Address corresponding to the private key*

---

### `from_view_key(view_key) ► Address`
 

Derive an Aleo address from a view key

Parameters | Type | Description
--- | --- | ---
__view_key__ | `ViewKey` | *The view key to derive the address from*
__*return*__ | Address | *Address corresponding to the view key*

---

### `from_compute_key(compute_key) ► Address`
 

Derive an Aleo address from a compute key.

Parameters | Type | Description
--- | --- | ---
__compute_key__ | `ComputeKey` | *The compute key to derive the address from*
__*return*__ | Address | **

---

### `fromBytesLe(bytes) ► Address`
 

Get an address from a series of bytes.

Parameters | Type | Description
--- | --- | ---
__bytes__ | `Uint8Array` | *A left endian byte array representing the address.*
__*return*__ | Address | *The address object.*

---

### `toBytesLe() ► Uint8Array`


Get the left endian byte array representation of the address.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Uint8Array` | **

---

### `fromBitsLe(bits) ► Address`
 

Get an address from a series of bits represented as a boolean array.

Parameters | Type | Description
--- | --- | ---
__bits__ | `Array` | *A left endian boolean array representing the bits of the address.*
__*return*__ | Address | *The address object.*

---

### `toBitsLe() ► Array.<any>`


Get the left endian boolean array representation of the bits of the address.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<any>` | **

---

### `fromFields(fields) ► Plaintext`
 

Get an address object from an array of fields.

Parameters | Type | Description
--- | --- | ---
__fields__ | `Array` | *An array of fields.*
__*return*__ | Plaintext | *The address object.*

---

### `toFields() ► Array.<any>`


Get the field array representation of the address.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<any>` | **

---

### `fromGroup(group) ► Address`
 

Get an address object from a group.

Parameters | Type | Description
--- | --- | ---
__group__ | Group | *The group object.*
__*return*__ | Address | *The address object.*

---

### `toGroup() ► Group`


Get the group representation of the address object.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Group | **

---

### `from_string(address) ► Address`
 

Create an aleo address object from a string representation of an address

Parameters | Type | Description
--- | --- | ---
__address__ | `string` | *String representation of an addressm*
__*return*__ | Address | *Address*

---

### `to_string(Address) ► string`


Get a string representation of an Aleo address object

Parameters | Type | Description
--- | --- | ---
__Address__ | Address | **
__*return*__ | `string` | *String representation of the address*

---

### `toPlaintext() ► Plaintext`


Get the plaintext representation of the address.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Plaintext | **

---

### `verify(Byte) ► boolean`


Verify a signature for a message signed by the address

Parameters | Type | Description
--- | --- | ---
__Byte__ | `Uint8Array` | *array representing a message signed by the address*
__*return*__ | `boolean` | *Boolean representing whether or not the signature is valid*

---