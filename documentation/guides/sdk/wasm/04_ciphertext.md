---
title: Ciphertext
sidebar_label: Ciphertext
---

<a name="Ciphertext"></a>

## Overview

<p>SnarkVM Ciphertext object. A Ciphertext represents a symmetrically encrypted plaintext. This object provides decryption methods to recover the plaintext from the ciphertext given the proper decryption materials like view keys, transition keys, or nonces.</p>



## Methods

<a name="Ciphertext+decrypt"></a>

### decrypt

<p>Decrypt the ciphertext using the given view key</p>

```javascript
decrypt(viewKey, nonce) ► Plaintext
```



| Param | Type | Description |
| --- | --- | --- |
| viewKey | <code>ViewKey</code> | The view key of the account that encrypted the ciphertext |
| nonce | <code>Group</code> | The nonce used to encrypt the ciphertext |
| *return* | <code>Plaintext</code> | The decrypted plaintext |

---

<a name="Ciphertext+decryptWithTransitionInfo"></a>

### decryptWithTransitionInfo

<p>Decrypt a ciphertext using the view key of the transition signer, transition public key, and (program, function, index) tuple</p>

```javascript
decryptWithTransitionInfo(view_key, transition_public_key, program, function_name, index) ► Plaintext
```



| Param | Type | Description |
| --- | --- | --- |
| view_key | <code>ViewKey</code> | The view key of the transition signer |
| transition_public_key | <code>Group</code> | The transition public key used to encrypt the ciphertext |
| program | <code>string</code> | The program ID associated with the ciphertext |
| function_name | <code>string</code> | The name of the function associated with the encrypted inputs and outputs |
| index | <code>u16</code> | The index of the input or output parameter that was encrypted |
| *return* | <code>Plaintext</code> | The decrypted plaintext |

---

<a name="Ciphertext+decryptWithTransitionViewKey"></a>

### decryptWithTransitionViewKey

<p>Decrypt a ciphertext using the transition view key and a (program, function, index) tuple</p>

```javascript
decryptWithTransitionViewKey(transition_view_key, program, function_name, index) ► Plaintext
```



| Param | Type | Description |
| --- | --- | --- |
| transition_view_key | <code>Field</code> | The transition view key that was used to encrypt the ciphertext |
| program | <code>string</code> | The program ID associated with the ciphertext |
| function_name | <code>string</code> | The name of the function associated with the encrypted inputs and outputs |
| index | <code>u16</code> | The index of the input or output parameter that was encrypted |
| *return* | <code>Plaintext</code> | The decrypted plaintext |

---

<a name="Ciphertext+decryptSymmetric"></a>

### decryptSymmetric

<p>Decrypts a ciphertext into plaintext using the given ciphertext view key</p>

```javascript
decryptSymmetric(transition_view_key) ► Plaintext
```



| Param | Type | Description |
| --- | --- | --- |
| transition_view_key | <code>Field</code> | The transition view key that was used to encrypt the ciphertext |
| *return* | <code>Plaintext</code> | The decrypted plaintext |

---

<a name="Ciphertext.fromBytesLe"></a>

### fromBytesLe

<p>Deserialize a left endian byte array into a Ciphertext</p>

```javascript
fromBytesLe(bytes) ► Ciphertext
```



| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Uint8Array</code> | The byte array representing the Ciphertext |
| *return* | <code>Ciphertext</code> | The Ciphertext object |

---

<a name="Ciphertext+toBytesLe"></a>

### toBytesLe

<p>Get the left endian byte array representation of the ciphertext</p>

```javascript
toBytesLe() ► Uint8Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Uint8Array</code> |

---

<a name="Ciphertext.fromBitsLe"></a>

### fromBitsLe

<p>Get a ciphertext object from a series of bits represented as a boolean array</p>

```javascript
fromBitsLe(bits) ► Ciphertext
```



| Param | Type | Description |
| --- | --- | --- |
| bits | <code>Array</code> | A left endian boolean array representing the bits of the ciphertext |
| *return* | <code>Ciphertext</code> | The ciphertext object |

---

<a name="Ciphertext+toBitsLe"></a>

### toBitsLe

<p>Get the left endian boolean array representation of the bits of the ciphertext</p>

```javascript
toBitsLe() ► Array.<any>
```



| Param | Type |
| --- | --- |
| *return* | <code>Array.&lt;any&gt;</code> |

---

<a name="Ciphertext.fromFields"></a>

### fromFields

<p>Get a ciphertext object from an array of fields</p>

```javascript
fromFields(fields) ► Ciphertext
```



| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Array</code> | An array of fields |
| *return* | <code>Ciphertext</code> | The ciphertext object |

---

<a name="Ciphertext+toFields"></a>

### toFields

<p>Get the field array representation of the ciphertext</p>

```javascript
toFields() ► Array.<any>
```



| Param | Type |
| --- | --- |
| *return* | <code>Array.&lt;any&gt;</code> |

---

<a name="Ciphertext.fromString"></a>

### fromString

<p>Deserialize a Ciphertext string into a Ciphertext object</p>

```javascript
fromString(ciphertext) ► Ciphertext
```



| Param | Type | Description |
| --- | --- | --- |
| ciphertext | <code>string</code> | A string representation of the ciphertext |
| *return* | <code>Ciphertext</code> | The Ciphertext object |

---

<a name="Ciphertext+toBytes"></a>

### toBytes

<p>Serialize a Ciphertext object into a byte array</p>

```javascript
toBytes() ► Uint8Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Uint8Array</code> | The serialized Ciphertext |

---

<a name="Ciphertext+toString"></a>

### toString

<p>Serialize a Ciphertext into a js string</p>

```javascript
toString() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> | The serialized Ciphertext |

---