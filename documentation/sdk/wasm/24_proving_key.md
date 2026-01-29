---
title: ProvingKey
sidebar_label: ProvingKey
---

<a name="ProvingKey"></a>

## Overview

<p>Represents a proving key for a function within an Aleo program. The ProvingKey class provides methods for loading, serializing, and inspecting proving keys which are used to generate zero-knowledge proofs for program executions.</p>



## Methods

<a name="ProvingKey+checksum"></a>

### checksum

<p>Return the checksum of the proving key</p>

```javascript
checksum() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="ProvingKey+copy"></a>

### copy

<p>Create a copy of the proving key</p>

```javascript
copy() ► ProvingKey
```



| Param | Type |
| --- | --- |
| *return* | <code>ProvingKey</code> |

---

<a name="ProvingKey.fromBytes"></a>

### fromBytes

<p>Construct a new proving key from a byte array</p>

```javascript
fromBytes(bytes) ► ProvingKey
```



| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Uint8Array</code> | Byte array representation of a proving key |
| *return* | <code>ProvingKey</code> | Proving key object |

---

<a name="ProvingKey.fromString"></a>

### fromString

<p>Create a proving key from string</p>

```javascript
fromString(string) ► ProvingKey
```



| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | String representation of the proving key |
| *return* | <code>ProvingKey</code> | Proving key object |

---

<a name="ProvingKey+toBytes"></a>

### toBytes

<p>Return the byte representation of a proving key</p>

```javascript
toBytes() ► Uint8Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Uint8Array</code> |

---

<a name="ProvingKey+toString"></a>

### toString

<p>Get a string representation of the proving key</p>

```javascript
toString() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---
