---
id: scalar
title: Scalar
sidebar_label: Scalar
---

## Class `Scalar`

Scalar field element.

## Methods

### fromString
 

Creates a scalar object from a string representation of a scalar element.

```javascript
fromString(group) ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__group__ | `string` | **
__*return*__ | Scalar | **

---

### toString


Returns the string representation of the scalar element.

```javascript
toString() ► string
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | **

---

### fromBytesLe


Create a scalar element from a Uint8Array of left endian bytes.

```javascript
fromBytesLe(bytes) ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__bytes__ | `Uint8Array` | **
__*return*__ | Scalar | **

---

### toBytesLe


Encode the scalar element as a Uint8Array of left endian bytes.

```javascript
toBytesLe() ► Uint8Array
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Uint8Array` | **

---

### fromBitsLe


Reconstruct a scalar element from a boolean array representation.

```javascript
fromBitsLe(bits) ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__bits__ | `Array.<any>` | **
__*return*__ | Scalar | **

---

### toBitsLe


Get the left endian boolean array representation of the scalar element.

```javascript
toBitsLe() ► Array.<any>
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<any>` | **

---

### toPlaintext


Create a plaintext element from a scalar element.

```javascript
toPlaintext() ► Plaintext
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | Plaintext | **

---

### clone


Clone the scalar element.

```javascript
clone() ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### random


Generate a random scalar element.

```javascript
random() ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### add


Add two scalar elements.

```javascript
add(other) ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__other__ | Scalar | **
__*return*__ | Scalar | **

---

### subtract


Subtract two scalar elements.

```javascript
subtract(other) ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__other__ | Scalar | **
__*return*__ | Scalar | **

---

### multiply


Multiply two scalar elements.

```javascript
multiply(other) ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__other__ | Scalar | **
__*return*__ | Scalar | **

---

### divide


Divide two scalar elements.

```javascript
divide(other) ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__other__ | Scalar | **
__*return*__ | Scalar | **

---

### double


Double the scalar element.

```javascript
double() ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### pow


Power of a scalar element.

```javascript
pow(other) ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__other__ | Scalar | **
__*return*__ | Scalar | **

---

### inverse


Invert the scalar element.

```javascript
inverse() ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### one


Get the multiplicative identity of the scalar field.

```javascript
one() ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### zero


Get the additive identity of the scalar field.

```javascript
zero() ► Scalar
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | Scalar | **

---

### equals


Check if one scalar element equals another.

```javascript
equals(other) ► boolean
```

Parameters | Type | Description
--- | --- | ---
__other__ | Scalar | **
__*return*__ | `boolean` | **

---