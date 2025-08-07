---
title: Field
sidebar_label: Field
---

<a name="Field"></a>

## Overview

<p>Field element class for operations on field elements in the Aleo network. Provides methods for creating, converting, and manipulating field elements with support for various formats including strings, bytes, and BigInt.</p>

## Methods

<a name="Field.fromString"></a>

### fromString

<p>Creates a field object from a string representation of a field element</p>

```javascript
fromString(field) ► Field
```

| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | String representation of a field element |
| *return* | <code>Field</code> | Field object |

---

<a name="Field+toString"></a>

### toString

<p>Returns the string representation of the field element</p>

```javascript
toString() ► string
```

| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="Field.fromBytesLe"></a>

### fromBytesLe

<p>Create a field element from a Uint8Array of left endian bytes</p>

```javascript
fromBytesLe(bytes) ► Field
```

| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Uint8Array</code> | Byte array representation |
| *return* | <code>Field</code> | Field object |

---

<a name="Field+toBytesLe"></a>

### toBytesLe

<p>Encode the field element as a Uint8Array of left endian bytes</p>

```javascript
toBytesLe() ► Uint8Array
```

| Param | Type |
| --- | --- |
| *return* | <code>Uint8Array</code> |

---

<a name="Field.fromBitsLe"></a>

### fromBitsLe

<p>Reconstruct a field element from a boolean array representation</p>

```javascript
fromBitsLe(bits) ► Field
```

| Param | Type | Description |
| --- | --- | --- |
| bits | <code>Array.&lt;any&gt;</code> | Boolean array representation |
| *return* | <code>Field</code> | Field object |

---

<a name="Field+toBitsLe"></a>

### toBitsLe

<p>Get the left endian boolean array representation of the field element</p>

```javascript
toBitsLe() ► Array.<any>
```

| Param | Type |
| --- | --- |
| *return* | <code>Array.&lt;any&gt;</code> |

---

<a name="Field+toPlaintext"></a>

### toPlaintext

<p>Create a plaintext from the field element</p>

```javascript
toPlaintext() ► Plaintext
```

| Param | Type |
| --- | --- |
| *return* | <code>Plaintext</code> |

---

<a name="Field+clone"></a>

### clone

<p>Clone the field element</p>

```javascript
clone() ► Field
```

| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---

<a name="Field.random"></a>

### random

<p>Generate a random field element</p>

```javascript
random() ► Field
```

| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---

<a name="Field+add"></a>

### add

<p>Add two field elements</p>

```javascript
add(other) ► Field
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Field</code> | Field element to add |
| *return* | <code>Field</code> | Sum of the field elements |

---

<a name="Field+subtract"></a>

### subtract

<p>Subtract two field elements</p>

```javascript
subtract(other) ► Field
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Field</code> | Field element to subtract |
| *return* | <code>Field</code> | Difference of the field elements |

---

<a name="Field+multiply"></a>

### multiply

<p>Multiply two field elements</p>

```javascript
multiply(other) ► Field
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Field</code> | Field element to multiply |
| *return* | <code>Field</code> | Product of the field elements |

---

<a name="Field+divide"></a>

### divide

<p>Divide two field elements</p>

```javascript
divide(other) ► Field
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Field</code> | Field element to divide by |
| *return* | <code>Field</code> | Quotient of the field elements |

---

<a name="Field+pow"></a>

### pow

<p>Power of a field element</p>

```javascript
pow(other) ► Field
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Field</code> | Field element as exponent |
| *return* | <code>Field</code> | Result of the power operation |

---

<a name="Field+inverse"></a>

### inverse

<p>Invert the field element</p>

```javascript
inverse() ► Field
```

| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---

<a name="Field.zero"></a>

### zero

<p>Get the additive identity element of the field</p>

```javascript
zero() ► Field
```

| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---

<a name="Field.one"></a>

### one

<p>Get the multiplicative identity of the field</p>

```javascript
one() ► Field
```

| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---

<a name="Field+double"></a>

### double

<p>Double the field element</p>

```javascript
double() ► Field
```

| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---

<a name="Field+equals"></a>

### equals

<p>Check if one field element equals another</p>

```javascript
equals(other) ► boolean
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Field</code> | Field element to compare |
| *return* | <code>boolean</code> | Whether the field elements are equal |