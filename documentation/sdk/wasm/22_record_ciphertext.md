---
title: RecordCiphertext
sidebar_label: RecordCiphertext
---

<a name="RecordCiphertext"></a>

## Overview

<p>Represents an encrypted Aleo record. The RecordCiphertext class provides methods for creating, decrypting, and inspecting encrypted records. Records can be decrypted using a view key or a record view key.</p>



## Methods

<a name="RecordCiphertext.fromString"></a>

### fromString

<p>Create a record ciphertext from a string</p>

```javascript
fromString(record) ► RecordCiphertext
```



| Param | Type | Description |
| --- | --- | --- |
| record | <code>string</code> | String representation of a record ciphertext |
| *return* | <code>RecordCiphertext</code> | Record ciphertext |

---

<a name="RecordCiphertext+toString"></a>

### toString

<p>Return the string representation of the record ciphertext</p>

```javascript
toString() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="RecordCiphertext+decrypt"></a>

### decrypt

<p>Decrypt the record ciphertext into plaintext using the view key. The record will only decrypt if the record was encrypted by the account corresponding to the view key.</p>

```javascript
decrypt(view_key) ► RecordPlaintext
```



| Param | Type | Description |
| --- | --- | --- |
| view_key | <code>ViewKey</code> | View key used to decrypt the ciphertext |
| *return* | <code>RecordPlaintext</code> | Record plaintext object |

---

<a name="RecordCiphertext+recordViewKey"></a>

### recordViewKey

<p>Generate the record view key. The record view key can only decrypt record if the supplied view key belongs to the record owner.</p>

```javascript
recordViewKey(view_key) ► Field
```



| Param | Type | Description |
| --- | --- | --- |
| view_key | <code>ViewKey</code> | View key used to generate the record view key |
| *return* | <code>Field</code> | Record view key |

---

<a name="RecordCiphertext+isOwner"></a>

### isOwner

<p>Determines if the account corresponding to the view key is the owner of the record</p>

```javascript
isOwner(view_key) ► boolean
```



| Param | Type | Description |
| --- | --- | --- |
| view_key | <code>ViewKey</code> | View key used to check ownership |
| *return* | <code>boolean</code> | True if the view key owner is the record owner |

---

<a name="RecordCiphertext.tag"></a>

### tag

<p>Get the tag of the record using the graph key</p>

```javascript
tag(graph_key, commitment) ► Field
```



| Param | Type | Description |
| --- | --- | --- |
| graph_key | <code>GraphKey</code> | Graph key of the account associated with the record |
| commitment | <code>Field</code> | Commitment of the record |
| *return* | <code>Field</code> | Tag of the record |

---

<a name="RecordCiphertext.fromBytesLe"></a>

### fromBytesLe

<p>Get a record ciphertext object from a series of bytes</p>

```javascript
fromBytesLe(bytes) ► RecordCiphertext
```



| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Uint8Array</code> | A left endian byte array representing the record ciphertext |
| *return* | <code>RecordCiphertext</code> | Record ciphertext object |

---

<a name="RecordCiphertext+toBytesLe"></a>

### toBytesLe

<p>Get the left endian byte array representation of the record ciphertext</p>

```javascript
toBytesLe() ► Uint8Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Uint8Array</code> |

---

<a name="RecordCiphertext+toBitsLe"></a>

### toBitsLe

<p>Get the left endian boolean array representation of the record ciphertext bits</p>

```javascript
toBitsLe() ► Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Array</code> |

---

<a name="RecordCiphertext+toFields"></a>

### toFields

<p>Get the field array representation of the record ciphertext</p>

```javascript
toFields() ► Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Array</code> |

---

<a name="RecordCiphertext+decryptWithRecordViewKey"></a>

### decryptWithRecordViewKey

<p>Decrypt the record ciphertext into plaintext using a record view key</p>

```javascript
decryptWithRecordViewKey(record_vk) ► RecordPlaintext
```



| Param | Type | Description |
| --- | --- | --- |
| record_vk | <code>Field</code> | Record view key used to decrypt the record |
| *return* | <code>RecordPlaintext</code> | Record plaintext object |

---

<a name="RecordCiphertext+nonce"></a>

### nonce

<p>Get the record nonce</p>

```javascript
nonce() ► Group
```



| Param | Type |
| --- | --- |
| *return* | <code>Group</code> |

---

<a name="RecordCiphertext+clone"></a>

### clone

<p>Clone the RecordCiphertext WASM object</p>

```javascript
clone() ► RecordCiphertext
```



| Param | Type |
| --- | --- |
| *return* | <code>RecordCiphertext</code> |

---
