---
title: Integer Types
sidebar_label: Integer Types
---

<a name="Integers"></a>

## Overview

<p>The SDK provides signed and unsigned integer types that match Aleo's native integer types. All integer types share a common API for creation, conversion, and arithmetic operations.</p>

## Unsigned Integers

- `U8` - 8-bit unsigned integer (0 to 255)
- `U16` - 16-bit unsigned integer (0 to 65,535)
- `U32` - 32-bit unsigned integer (0 to 4,294,967,295)
- `U64` - 64-bit unsigned integer (0 to 18,446,744,073,709,551,615)
- `U128` - 128-bit unsigned integer

## Signed Integers

- `I8` - 8-bit signed integer (-128 to 127)
- `I16` - 16-bit signed integer (-32,768 to 32,767)
- `I32` - 32-bit signed integer (-2,147,483,648 to 2,147,483,647)
- `I64` - 64-bit signed integer
- `I128` - 128-bit signed integer

## Common Methods

All integer types share the following methods:

<a name="Integer.fromString"></a>

### fromString

<p>Construct an integer from a string representation</p>

```javascript
fromString(s) ► Integer
```

| Param | Type | Description |
| --- | --- | --- |
| s | <code>string</code> | String representation of the integer (e.g., "42u32") |
| *return* | <code>Integer</code> | The integer object |

---

<a name="Integer+toString"></a>

### toString

<p>Get the string representation of the integer</p>

```javascript
toString() ► string
```

| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="Integer.fromBytesLe"></a>

### fromBytesLe

<p>Construct an integer from a byte array representation</p>

```javascript
fromBytesLe(bytes) ► Integer
```

| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Uint8Array</code> | Left endian byte array |
| *return* | <code>Integer</code> | The integer object |

---

<a name="Integer+toBytesLe"></a>

### toBytesLe

<p>Get the byte array representation of the integer</p>

```javascript
toBytesLe() ► Uint8Array
```

| Param | Type |
| --- | --- |
| *return* | <code>Uint8Array</code> |

---

<a name="Integer.fromBitsLe"></a>

### fromBitsLe

<p>Construct an integer from a boolean array representation</p>

```javascript
fromBitsLe(bits) ► Integer
```

| Param | Type | Description |
| --- | --- | --- |
| bits | <code>Array</code> | Left endian boolean array |
| *return* | <code>Integer</code> | The integer object |

---

<a name="Integer+toBitsLe"></a>

### toBitsLe

<p>Get the boolean array representation of the integer</p>

```javascript
toBitsLe() ► Array
```

| Param | Type |
| --- | --- |
| *return* | <code>Array</code> |

---

<a name="Integer+absChecked"></a>

### absChecked

<p>Checked absolute value</p>

```javascript
absChecked() ► Integer
```

| Param | Type |
| --- | --- |
| *return* | <code>Integer</code> |

---

<a name="Integer+absWrapped"></a>

### absWrapped

<p>Wrapped absolute value</p>

```javascript
absWrapped() ► Integer
```

| Param | Type |
| --- | --- |
| *return* | <code>Integer</code> |

---

<a name="Integer+addWrapped"></a>

### addWrapped

<p>Wrapped addition with another integer</p>

```javascript
addWrapped(other) ► Integer
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Integer</code> | The integer to add |
| *return* | <code>Integer</code> | The result of the addition |

---

<a name="Integer+subWrapped"></a>

### subWrapped

<p>Wrapped subtraction with another integer</p>

```javascript
subWrapped(other) ► Integer
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Integer</code> | The integer to subtract |
| *return* | <code>Integer</code> | The result of the subtraction |

---

<a name="Integer+mulWrapped"></a>

### mulWrapped

<p>Wrapped multiplication with another integer</p>

```javascript
mulWrapped(other) ► Integer
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Integer</code> | The integer to multiply |
| *return* | <code>Integer</code> | The result of the multiplication |

---

<a name="Integer+divWrapped"></a>

### divWrapped

<p>Wrapped division</p>

```javascript
divWrapped(other) ► Integer
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Integer</code> | The divisor |
| *return* | <code>Integer</code> | The result of the division |

---

<a name="Integer+powU8"></a>

### powU8

<p>Exponentiate the integer with a U8 exponent</p>

```javascript
powU8(exponent) ► Integer
```

| Param | Type | Description |
| --- | --- | --- |
| exponent | <code>U8</code> | The exponent |
| *return* | <code>Integer</code> | The result of exponentiation |

---

<a name="Integer+powU16"></a>

### powU16

<p>Exponentiate the integer with a U16 exponent</p>

```javascript
powU16(exponent) ► Integer
```

| Param | Type | Description |
| --- | --- | --- |
| exponent | <code>U16</code> | The exponent |
| *return* | <code>Integer</code> | The result of exponentiation |

---

<a name="Integer+powU32"></a>

### powU32

<p>Exponentiate the integer with a U32 exponent</p>

```javascript
powU32(exponent) ► Integer
```

| Param | Type | Description |
| --- | --- | --- |
| exponent | <code>U32</code> | The exponent |
| *return* | <code>Integer</code> | The result of exponentiation |

---

<a name="Integer+neg"></a>

### neg

<p>Negate the integer (e.g., 5 → -5)</p>

```javascript
neg() ► Integer
```

| Param | Type |
| --- | --- |
| *return* | <code>Integer</code> |

---

<a name="Integer+equals"></a>

### equals

<p>Check equality with another integer</p>

```javascript
equals(other) ► boolean
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Integer</code> | The integer to compare |
| *return* | <code>boolean</code> | True if the integers are equal |

---

<a name="Integer+rem"></a>

### rem

<p>Get the remainder from integer division</p>

```javascript
rem(other) ► Integer
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Integer</code> | The divisor |
| *return* | <code>Integer</code> | The remainder |

---

<a name="Integer+remWrapped"></a>

### remWrapped

<p>Get the remainder from an integer division which wraps if there's an overflow</p>

```javascript
remWrapped(other) ► Integer
```

| Param | Type | Description |
| --- | --- | --- |
| other | <code>Integer</code> | The divisor |
| *return* | <code>Integer</code> | The remainder |

---

<a name="Integer+toScalar"></a>

### toScalar

<p>Convert the integer to a Scalar value</p>

```javascript
toScalar() ► Scalar
```

| Param | Type |
| --- | --- |
| *return* | <code>Scalar</code> |

---

<a name="Integer+toPlaintext"></a>

### toPlaintext

<p>Convert the integer to the Plaintext type. This must be done before hashing an integer to ensure it matches hashes with a Leo/Aleo program.</p>

```javascript
toPlaintext() ► Plaintext
```

| Param | Type |
| --- | --- |
| *return* | <code>Plaintext</code> |

---

<a name="Integer.fromField"></a>

### fromField

<p>Attempt to construct the integer from a field element</p>

```javascript
fromField(field) ► Integer
```

| Param | Type | Description |
| --- | --- | --- |
| field | <code>Field</code> | The field element |
| *return* | <code>Integer</code> | The integer object |

---

<a name="Integer.fromFields"></a>

### fromFields

<p>Attempt to construct the integer from a list of field elements</p>

```javascript
fromFields(fields) ► Integer
```

| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Array</code> | Array of field elements |
| *return* | <code>Integer</code> | The integer object |

---

<a name="Integer+clone"></a>

### clone

<p>Clone the integer in wasm memory</p>

```javascript
clone() ► Integer
```

| Param | Type |
| --- | --- |
| *return* | <code>Integer</code> |

---
