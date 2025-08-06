---
id: signature
title: Signature
sidebar_label: Signature
---

## Class `Signature`

Cryptographic signature of a message signed by an Aleo account

## Methods

### sign


Sign a message with a private key

```javascript
sign(private_key, message) ► Signature
```

Parameters | Type | Description
--- | --- | ---
__private_key__ | PrivateKey | *The private key to sign the message with*
__message__ | `Uint8Array` | *Byte representation of the message to sign*
__*return*__ | Signature | *Signature of the message*

---

### to_address


Get an address from a signature.

```javascript
to_address() ► Address
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | Address | *Address object*

---

### challenge


Get the challenge of a signature.

```javascript
challenge() ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### response


Get the response of a signature.

```javascript
response() ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### verify


Verify a signature of a message with an address

```javascript
verify(address, message) ► boolean
```

Parameters | Type | Description
--- | --- | ---
__address__ | Address | *The address to verify the signature with*
__message__ | `Uint8Array` | *Byte representation of the message to verify*
__*return*__ | `boolean` | *True if the signature is valid, false otherwise*

---

### fromBytesLe


Get a signature from a series of bytes.

```javascript
fromBytesLe(bytes) ► Signature
```

Parameters | Type | Description
--- | --- | ---
__bytes__ | `Uint8Array` | *A left endian byte array representing the signature.*
__*return*__ | Signature | *The signature object.*

---

### toBytesLe


Get the left endian byte array representation of the signature.

```javascript
toBytesLe() ► Uint8Array
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Uint8Array` | **

---

### fromBitsLe


Get a signature from a series of bits represented as a boolean array.

```javascript
fromBitsLe(bits) ► Signature
```

Parameters | Type | Description
--- | --- | ---
__bits__ | `Array` | *A left endian boolean array representing the bits of the signature.*
__*return*__ | Signature | *The signature object.*

---

### toBitsLe


Get the left endian boolean array representation of the bits of the signature.

```javascript
toBitsLe() ► Array.<any>
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<any>` | **

---

### toFields


Get the field array representation of the signature.

```javascript
toFields() ► Array.<any>
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<any>` | **

---

### from_string


Get a signature from a string representation of a signature

```javascript
from_string(signature) ► Signature
```

Parameters | Type | Description
--- | --- | ---
__signature__ | `string` | *String representation of a signature*
__*return*__ | Signature | *Signature*

---

### to_string


Get a string representation of a signature

```javascript
to_string() ► string
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | *String representation of a signature*

---

### toPlaintext


Get the plaintext representation of the signature.

```javascript
toPlaintext() ► Plaintext
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | Plaintext | **

---