---
title: Address
sidebar_label: Address
---

<a name="Address"></a>

## Overview

<p>Represents a public address of an Aleo account. The Address class provides methods for creating addresses from various sources (private keys, view keys, compute keys), converting between different formats (bytes, bits, fields, groups), and verifying signatures.</p>



## Methods

<a name="Address.from_private_key"></a>

### from_private_key

<p>Derive an Aleo address from a private key</p>

```javascript
from_private_key(private_key) ► Address
```



| Param | Type | Description |
| --- | --- | --- |
| private_key | <code>PrivateKey</code> | The private key to derive the address from |
| *return* | <code>Address</code> | Address corresponding to the private key |

---

<a name="Address.from_view_key"></a>

### from_view_key

<p>Derive an Aleo address from a view key</p>

```javascript
from_view_key(view_key) ► Address
```



| Param | Type | Description |
| --- | --- | --- |
| view_key | <code>ViewKey</code> | The view key to derive the address from |
| *return* | <code>Address</code> | Address corresponding to the view key |

---

<a name="Address.from_compute_key"></a>

### from_compute_key

<p>Derive an Aleo address from a compute key</p>

```javascript
from_compute_key(compute_key) ► Address
```



| Param | Type | Description |
| --- | --- | --- |
| compute_key | <code>ComputeKey</code> | The compute key to derive the address from |
| *return* | <code>Address</code> | Address corresponding to the compute key |

---

<a name="Address.fromBytesLe"></a>

### fromBytesLe

<p>Get an address from a series of bytes</p>

```javascript
fromBytesLe(bytes) ► Address
```



| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Uint8Array</code> | A left endian byte array representing the address |
| *return* | <code>Address</code> | The address object |

---

<a name="Address+toBytesLe"></a>

### toBytesLe

<p>Get the left endian byte array representation of the address</p>

```javascript
toBytesLe() ► Uint8Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Uint8Array</code> |

---

<a name="Address.fromBitsLe"></a>

### fromBitsLe

<p>Get an address from a series of bits represented as a boolean array</p>

```javascript
fromBitsLe(bits) ► Address
```



| Param | Type | Description |
| --- | --- | --- |
| bits | <code>Array</code> | A left endian boolean array representing the bits of the address |
| *return* | <code>Address</code> | The address object |

---

<a name="Address+toBitsLe"></a>

### toBitsLe

<p>Get the left endian boolean array representation of the bits of the address</p>

```javascript
toBitsLe() ► Array.<any>
```



| Param | Type |
| --- | --- |
| *return* | <code>Array.&lt;any&gt;</code> |

---

<a name="Address.fromFields"></a>

### fromFields

<p>Get an address object from an array of fields</p>

```javascript
fromFields(fields) ► Plaintext
```



| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Array</code> | An array of fields |
| *return* | <code>Plaintext</code> | The address object |

---

<a name="Address+toFields"></a>

### toFields

<p>Get the field array representation of the address</p>

```javascript
toFields() ► Array.<any>
```



| Param | Type |
| --- | --- |
| *return* | <code>Array.&lt;any&gt;</code> |

---

<a name="Address.fromGroup"></a>

### fromGroup

<p>Get an address object from a group</p>

```javascript
fromGroup(group) ► Address
```



| Param | Type | Description |
| --- | --- | --- |
| group | <code>Group</code> | The group object |
| *return* | <code>Address</code> | The address object |

---

<a name="Address+toGroup"></a>

### toGroup

<p>Get the group representation of the address object</p>

```javascript
toGroup() ► Group
```



| Param | Type |
| --- | --- |
| *return* | <code>Group</code> |

---

<a name="Address.from_string"></a>

### from_string

<p>Create an aleo address object from a string representation of an address</p>

```javascript
from_string(address) ► Address
```



| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | String representation of an address |
| *return* | <code>Address</code> | Address object |

---

<a name="Address+to_string"></a>

### to_string

<p>Get a string representation of an Aleo address object</p>

```javascript
to_string(Address) ► string
```



| Param | Type |
| --- | --- |
| Address | <code>Address</code> |
| *return* | <code>string</code> | String representation of the address |

---

<a name="Address+toPlaintext"></a>

### toPlaintext

<p>Get the plaintext representation of the address</p>

```javascript
toPlaintext() ► Plaintext
```



| Param | Type |
| --- | --- |
| *return* | <code>Plaintext</code> |

---

<a name="Address+verify"></a>

### verify

<p>Verify a signature for a message signed by the address</p>

```javascript
verify(message, signature) ► boolean
```



| Param | Type | Description |
| --- | --- | --- |
| message | <code>Uint8Array</code> | Byte array representing a message signed by the address |
| signature | <code>Signature</code> | The signature to verify |
| *return* | <code>boolean</code> | Boolean representing whether or not the signature is valid |

---

<a name="Address.fromProgramId"></a>

### fromProgramId

<p>Get the address of a program based on the program ID</p>

```javascript
fromProgramId(program_id) ► Address
```



| Param | Type | Description |
| --- | --- | --- |
| program_id | <code>string</code> | The program ID string |
| *return* | <code>Address</code> | The address corresponding to the program ID |

---