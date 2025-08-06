---
title: Group
sidebar_label: Group
---

<a name="Group"></a>

## Overview

<p>Elliptic curve group element class for operations on group elements in the Aleo network. Provides methods for creating, converting, and manipulating group elements with support for various arithmetic operations and format conversions.</p>

## Methods

<a name="Group.fromString"></a>

### fromString

<p>Creates a group object from a string representation of a group element</p>

```javascript
fromString(group) ► Group
```

| Param | Type | Description |
| --- | --- | --- |
| group | <code>string</code> | String representation of a group element |
| *return* | <code>Group</code> | Group object |

---

<a name="Group+toString"></a>

### toString

<p>Returns the string representation of the group element</p>

```javascript
toString() ► string
```

| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="Group.fromBytesLe"></a>

### fromBytesLe

<p>Create a group element from a Uint8Array of left endian bytes</p>

```javascript
fromBytesLe(bytes) ► Group
```

| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Uint8Array</code> | Byte array representation |
| *return* | <code>Group</code> | Group object |

---

<a name="Group+toBytesLe"></a>

### toBytesLe

<p>Encode the group element as a Uint8Array of left endian bytes</p>

```javascript
toBytesLe() ► Uint8Array
```

| Param | Type |
| --- | --- |
| *return* | <code>Uint8Array</code> |

---

<a name="Group.fromBitsLe"></a>

### fromBitsLe

<p>Reconstruct a group element from a boolean array representation</p>

```javascript
fromBitsLe(bits) ► Group
```

| Param | Type | Description |
| --- | --- | --- |
| bits | <code>Array.&lt;any&gt;</code> | Boolean array representation |
| *return* | <code>Group</code> | Group object |

---

<a name="Group+toBitsLe"></a>

### toBitsLe

<p>Get the left endian boolean array representation of the group element</p>

```javascript
toBitsLe() ► Array.<any>
```

| Param | Type |
| --- | --- |
| *return* | <code>Array.&lt;any&gt;</code> |

---

<a name="Group+toFields"></a>

### toFields

<p>Get the field array representation of the group</p>

```javascript
toFields() ► Array.<any>
```

| Param | Type |
| --- | --- |
| *return* | <code>Array.&lt;any&gt;</code> |

---

<a name="Group+toXCoordinate"></a>

### toXCoordinate

<p>Get the x-coordinate of the group element</p>

```javascript
toXCoordinate() ► Field
```

| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---

<a name="Group+toPlaintext"></a>

### toPlaintext

<p>Create a plaintext element from a group element</p>

```javascript
toPlaintext() ► Plaintext
```

| Param | Type |
| --- | --- |
| *return* | <code>Plaintext</code> |

---

<a name="Group+clone"></a>

### clone

<p>Clone the group element</p>

```javascript
clone() ► Group
```

| Param | Type |
| --- | --- |
| *return* | <code>Group</code> |

---

<a name="Group.random"></a>

### random

<p>Generate a random group element</p>

```javascript
random() ► Group
```

| Param | Type |
| --- | --- |
| *return* | <code>Group</code> |

---

<a name="Group+add"></a>

### add

<p>Add two group elements</p>

```javascript
add(other) ► Group
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Group</code> | Group element to add |
| *return* | <code>Group</code> | Sum of the group elements |

---

<a name="Group+subtract"></a>

### subtract

<p>Subtract two group elements (equivalently: add the inverse of an element)</p>

```javascript
subtract(other) ► Group
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Group</code> | Group element to subtract |
| *return* | <code>Group</code> | Difference of the group elements |

---

<a name="Group+scalarMultiply"></a>

### scalarMultiply

<p>Multiply a group element by a scalar element</p>

```javascript
scalarMultiply(scalar) ► Group
```

| Param | Type | Description |
| --- | --- | --- |
| scalar | <code>Scalar</code> | Scalar element to multiply by |
| *return* | <code>Group</code> | Result of scalar multiplication |

---

<a name="Group+double"></a>

### double

<p>Double the group element</p>

```javascript
double() ► Group
```

| Param | Type |
| --- | --- |
| *return* | <code>Group</code> |

---

<a name="Group+inverse"></a>

### inverse

<p>Get the inverse of the group element. This is the reflection of the point about the axis of symmetry i.e. (x,y) -> (x, -y)</p>

```javascript
inverse() ► Group
```

| Param | Type |
| --- | --- |
| *return* | <code>Group</code> |

---

<a name="Group+equals"></a>

### equals

<p>Check if one group element equals another</p>

```javascript
equals(other) ► boolean
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Group</code> | Group element to compare |
| *return* | <code>boolean</code> | Whether the group elements are equal |

---

<a name="Group.zero"></a>

### zero

<p>Get the group identity element under the group operation (i.e. the point at infinity)</p>

```javascript
zero() ► Group
```

| Param | Type |
| --- | --- |
| *return* | <code>Group</code> |

---

<a name="Group.generator"></a>

### generator

<p>Get the generator of the group</p>

```javascript
generator() ► Group
```

| Param | Type |
| --- | --- |
| *return* | <code>Group</code> |