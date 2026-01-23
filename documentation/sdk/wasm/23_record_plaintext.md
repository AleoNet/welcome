---
title: RecordPlaintext
sidebar_label: RecordPlaintext
---

<a name="RecordPlaintext"></a>

## Overview

<p>Represents a plaintext Aleo record. The RecordPlaintext class provides methods for creating, inspecting, and extracting data from decrypted records including computing serial numbers and commitments.</p>



## Methods

<a name="RecordPlaintext.fromString"></a>

### fromString

<p>Return a record plaintext from a string</p>

```javascript
fromString(record) ► RecordPlaintext
```



| Param | Type | Description |
| --- | --- | --- |
| record | <code>string</code> | String representation of a plaintext representation of an Aleo record |
| *return* | <code>RecordPlaintext</code> | Record plaintext |

---

<a name="RecordPlaintext+toString"></a>

### toString

<p>Returns the record plaintext string</p>

```javascript
toString() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="RecordPlaintext+commitment"></a>

### commitment

<p>Get the commitment of the record</p>

```javascript
commitment(program_id, record_name, record_view_key) ► Field
```



| Param | Type | Description |
| --- | --- | --- |
| program_id | <code>string</code> | Program ID of the program that the record is associated with |
| record_name | <code>string</code> | Name of the record |
| record_view_key | <code>string</code> | The string representation of the record view key |
| *return* | <code>Field</code> | Commitment of the record |

---

<a name="RecordPlaintext+getMember"></a>

### getMember

<p>Get the record entry matching a key</p>

```javascript
getMember(input) ► Plaintext
```



| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | The key to retrieve the value in the record data field |
| *return* | <code>Plaintext</code> | The plaintext value corresponding to the key |

---

<a name="RecordPlaintext+owner"></a>

### owner

<p>Get the owner of the record</p>

```javascript
owner() ► Address
```



| Param | Type |
| --- | --- |
| *return* | <code>Address</code> |

---

<a name="RecordPlaintext+toJsObject"></a>

### toJsObject

<p>Get a representation of a record as a javascript object for usage in client side computations. Note that this is not a reversible operation and exists for the convenience of discovering and using properties of the record.</p>

The conversion guide is as follows:
- u8, u16, u32, i8, i16, i32 → Number
- u64, u128, i64, i128 → BigInt
- Address, Field, Group, Scalar → String (bech32 representation)

```javascript
toJsObject() ► Object
```



| Param | Type |
| --- | --- |
| *return* | <code>Object</code> |

---

<a name="RecordPlaintext.fromBytesLe"></a>

### fromBytesLe

<p>Get a record plaintext object from a series of bytes</p>

```javascript
fromBytesLe(bytes) ► RecordPlaintext
```



| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Uint8Array</code> | A left endian byte array representing the record plaintext |
| *return* | <code>RecordPlaintext</code> | The record plaintext |

---

<a name="RecordPlaintext+toBytesLe"></a>

### toBytesLe

<p>Returns the left endian byte array representation of the record plaintext</p>

```javascript
toBytesLe() ► Uint8Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Uint8Array</code> |

---

<a name="RecordPlaintext+toBitsLe"></a>

### toBitsLe

<p>Returns the left endian boolean array representation of the record plaintext bits</p>

```javascript
toBitsLe() ► Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Array</code> |

---

<a name="RecordPlaintext+toFields"></a>

### toFields

<p>Get the field array representation of the record plaintext</p>

```javascript
toFields() ► Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Array</code> |

---

<a name="RecordPlaintext+microcredits"></a>

### microcredits

<p>Returns the amount of microcredits in the record</p>

```javascript
microcredits() ► bigint
```



| Param | Type |
| --- | --- |
| *return* | <code>bigint</code> |

---

<a name="RecordPlaintext+nonce"></a>

### nonce

<p>Returns the nonce of the record. This can be used to uniquely identify a record.</p>

```javascript
nonce() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="RecordPlaintext+serialNumberString"></a>

### serialNumberString

<p>Attempt to get the serial number of a record to determine whether or not it has been spent</p>

```javascript
serialNumberString(private_key, program_id, record_name, record_view_key) ► string
```



| Param | Type | Description |
| --- | --- | --- |
| private_key | <code>PrivateKey</code> | Private key of the account that owns the record |
| program_id | <code>string</code> | Program ID of the program that the record is associated with |
| record_name | <code>string</code> | Name of the record |
| record_view_key | <code>string</code> | The string representation of the record view key |
| *return* | <code>string</code> | Serial number of the record |

---

<a name="RecordPlaintext+tag"></a>

### tag

<p>Get the tag of the record using the graph key</p>

```javascript
tag(graph_key, commitment) ► Field
```



| Param | Type | Description |
| --- | --- | --- |
| graph_key | <code>GraphKey</code> | Graph key of the account |
| commitment | <code>Field</code> | Commitment of the record |
| *return* | <code>Field</code> | Tag of the record |

---

<a name="RecordPlaintext+recordViewKey"></a>

### recordViewKey

<p>Generate the record view key. The record view key can only decrypt the record if the supplied view key belongs to the record owner.</p>

```javascript
recordViewKey(view_key) ► Field
```



| Param | Type | Description |
| --- | --- | --- |
| view_key | <code>ViewKey</code> | View key used to generate the record view key |
| *return* | <code>Field</code> | Record view key |

---

<a name="RecordPlaintext+decryptSender"></a>

### decryptSender

<p>Decrypt the sender ciphertext associated with the record</p>

```javascript
decryptSender(view_key, sender_ciphertext) ► Address
```



| Param | Type | Description |
| --- | --- | --- |
| view_key | <code>ViewKey</code> | View key associated with the record |
| sender_ciphertext | <code>Field</code> | Sender ciphertext associated with the record |
| *return* | <code>Address</code> | Address of the sender |

---

<a name="RecordPlaintext+clone"></a>

### clone

<p>Clone the RecordPlaintext WASM object</p>

```javascript
clone() ► RecordPlaintext
```



| Param | Type |
| --- | --- |
| *return* | <code>RecordPlaintext</code> |

---
