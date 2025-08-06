---
title: Boolean
sidebar_label: Boolean
---

<a name="Boolean"></a>

## Overview

<p>Boolean element class for performing logical operations in Aleo. This class provides methods for creating boolean values, converting between different formats, and performing logical operations like AND, OR, XOR, NAND, NOR, and NOT.</p>



## Constructors

### Boolean

<p>Creates a Boolean from a native JS bool</p>

```javascript
Boolean(value)
```

| Param | Type |
| --- | --- |
| value | <code>boolean</code> |

## Methods

<a name="Boolean.fromString"></a>

### fromString

<p>Creates a boolean object from a string representation ("true"/"false")</p>

```javascript
fromString(boolean) ► Boolean
```



| Param | Type |
| --- | --- |
| boolean | <code>string</code> |
| *return* | <code>Boolean</code> |

---

<a name="Boolean+toString"></a>

### toString

<p>Returns the string representation of the boolean element</p>

```javascript
toString() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="Boolean.fromBytesLe"></a>

### fromBytesLe

<p>Create a boolean element from a Uint8Array of left endian bytes</p>

```javascript
fromBytesLe(bytes) ► Boolean
```



| Param | Type |
| --- | --- |
| bytes | <code>Uint8Array</code> |
| *return* | <code>Boolean</code> |

---

<a name="Boolean+toBytesLe"></a>

### toBytesLe

<p>Encode the boolean element as a Uint8Array of left endian bytes</p>

```javascript
toBytesLe() ► Uint8Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Uint8Array</code> |

---

<a name="Boolean.fromBitsLe"></a>

### fromBitsLe

<p>Reconstruct a boolean element from a boolean array representation</p>

```javascript
fromBitsLe(bits) ► Boolean
```



| Param | Type |
| --- | --- |
| bits | <code>Array.&lt;any&gt;</code> |
| *return* | <code>Boolean</code> |

---

<a name="Boolean+toBitsLe"></a>

### toBitsLe

<p>Get the left endian boolean array representation of the boolean element</p>

```javascript
toBitsLe() ► Array.<any>
```



| Param | Type |
| --- | --- |
| *return* | <code>Array.&lt;any&gt;</code> |

---

<a name="Boolean+toPlaintext"></a>

### toPlaintext

<p>Create a plaintext from the boolean element</p>

```javascript
toPlaintext() ► Plaintext
```



| Param | Type |
| --- | --- |
| *return* | <code>Plaintext</code> |

---

<a name="Boolean+clone"></a>

### clone

<p>Clone the boolean element</p>

```javascript
clone() ► Boolean
```



| Param | Type |
| --- | --- |
| *return* | <code>Boolean</code> |

---

<a name="Boolean.random"></a>

### random

<p>Generate a random boolean element</p>

```javascript
random() ► Boolean
```



| Param | Type |
| --- | --- |
| *return* | <code>Boolean</code> |

---

<a name="Boolean+not"></a>

### not

<p>Logical NOT</p>

```javascript
not() ► Boolean
```



| Param | Type |
| --- | --- |
| *return* | <code>Boolean</code> |

---

<a name="Boolean+and"></a>

### and

<p>Logical AND</p>

```javascript
and(other) ► Boolean
```



| Param | Type |
| --- | --- |
| other | <code>Boolean</code> |
| *return* | <code>Boolean</code> |

---

<a name="Boolean+or"></a>

### or

<p>Logical OR</p>

```javascript
or(other) ► Boolean
```



| Param | Type |
| --- | --- |
| other | <code>Boolean</code> |
| *return* | <code>Boolean</code> |

---

<a name="Boolean+xor"></a>

### xor

<p>Logical XOR</p>

```javascript
xor(other) ► Boolean
```



| Param | Type |
| --- | --- |
| other | <code>Boolean</code> |
| *return* | <code>Boolean</code> |

---

<a name="Boolean+nand"></a>

### nand

<p>Logical NAND</p>

```javascript
nand(other) ► Boolean
```



| Param | Type |
| --- | --- |
| other | <code>Boolean</code> |
| *return* | <code>Boolean</code> |

---

<a name="Boolean+nor"></a>

### nor

<p>Logical NOR</p>

```javascript
nor(other) ► Boolean
```



| Param | Type |
| --- | --- |
| other | <code>Boolean</code> |
| *return* | <code>Boolean</code> |

---

<a name="Boolean+equals"></a>

### equals

<p>Check if one boolean element equals another</p>

```javascript
equals(other) ► boolean
```



| Param | Type |
| --- | --- |
| other | <code>Boolean</code> |
| *return* | <code>boolean</code> |

---