---
title: Hash Functions
sidebar_label: Hash Functions
---

<a name="HashFunctions"></a>

## Overview

<p>The SDK provides various cryptographic hash functions that match Aleo's native hash implementations. These include BHP (Bowe-Hopwood-Pedersen), Pedersen, and Poseidon hash functions.</p>

## BHP Hash Functions

BHP (Bowe-Hopwood-Pedersen) hash functions are available with different input sizes:

- `BHP256` - 256-bit input hasher
- `BHP512` - 512-bit input hasher
- `BHP768` - 768-bit input hasher
- `BHP1024` - 1024-bit input hasher

### BHP Methods

<a name="BHP.constructor"></a>

#### constructor

<p>Create a BHP hasher with the default domain separator</p>

```javascript
new BHP256() ► BHP256
new BHP512() ► BHP512
new BHP768() ► BHP768
new BHP1024() ► BHP1024
```

---

<a name="BHP.setup"></a>

#### setup

<p>Create a BHP hasher with a custom domain separator</p>

```javascript
setup(domain_separator) ► BHP
```

| Param | Type | Description |
| --- | --- | --- |
| domain_separator | <code>string</code> | Custom domain separator |
| *return* | <code>BHP</code> | BHP hasher instance |

---

<a name="BHP+hash"></a>

#### hash

<p>Returns the BHP hash of the input bits</p>

```javascript
hash(input) ► Field
```

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Array</code> | Boolean array representing the input bits |
| *return* | <code>Field</code> | The hash result |

---

<a name="BHP+hashToGroup"></a>

#### hashToGroup

<p>Returns a BHP hash as a group element</p>

```javascript
hashToGroup(input) ► Group
```

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Array</code> | Boolean array representing the input bits |
| *return* | <code>Group</code> | The hash result as a group element |

---

<a name="BHP+commit"></a>

#### commit

<p>Returns a BHP commitment with the given randomizer</p>

```javascript
commit(input, randomizer) ► Field
```

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Array</code> | Boolean array representing the input bits |
| randomizer | <code>Scalar</code> | The randomizer for the commitment |
| *return* | <code>Field</code> | The commitment result |

---

<a name="BHP+commitToGroup"></a>

#### commitToGroup

<p>Returns a BHP commitment as a group element</p>

```javascript
commitToGroup(input, randomizer) ► Group
```

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Array</code> | Boolean array representing the input bits |
| randomizer | <code>Scalar</code> | The randomizer for the commitment |
| *return* | <code>Group</code> | The commitment result as a group element |

---

## Pedersen Hash Functions

Pedersen hash functions are available for small inputs:

- `Pedersen64` - up to 64-bit input
- `Pedersen128` - up to 128-bit input

### Pedersen Methods

<a name="Pedersen.constructor"></a>

#### constructor

<p>Create a Pedersen hasher with the default domain separator</p>

```javascript
new Pedersen64() ► Pedersen64
new Pedersen128() ► Pedersen128
```

---

<a name="Pedersen.setup"></a>

#### setup

<p>Create a Pedersen hasher with a custom domain separator</p>

```javascript
setup(domain_separator) ► Pedersen
```

| Param | Type | Description |
| --- | --- | --- |
| domain_separator | <code>string</code> | Custom domain separator |
| *return* | <code>Pedersen</code> | Pedersen hasher instance |

---

<a name="Pedersen+hash"></a>

#### hash

<p>Returns the Pedersen hash of the input bits</p>

```javascript
hash(input) ► Field
```

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Array</code> | Boolean array representing the input bits |
| *return* | <code>Field</code> | The hash result |

---

<a name="Pedersen+commit"></a>

#### commit

<p>Returns a Pedersen commitment with the given randomizer</p>

```javascript
commit(input, randomizer) ► Field
```

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Array</code> | Boolean array representing the input bits |
| randomizer | <code>Scalar</code> | The randomizer for the commitment |
| *return* | <code>Field</code> | The commitment result |

---

<a name="Pedersen+commitToGroup"></a>

#### commitToGroup

<p>Returns a Pedersen commitment as a group element</p>

```javascript
commitToGroup(input, randomizer) ► Group
```

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Array</code> | Boolean array representing the input bits |
| randomizer | <code>Scalar</code> | The randomizer for the commitment |
| *return* | <code>Group</code> | The commitment result as a group element |

---

## Poseidon Hash Functions

Poseidon hash functions operate on field elements with different input rates:

- `Poseidon2` - input rate of 2
- `Poseidon4` - input rate of 4
- `Poseidon8` - input rate of 8

### Poseidon Methods

<a name="Poseidon.constructor"></a>

#### constructor

<p>Create a Poseidon hasher with the default domain separator</p>

```javascript
new Poseidon2() ► Poseidon2
new Poseidon4() ► Poseidon4
new Poseidon8() ► Poseidon8
```

---

<a name="Poseidon.setup"></a>

#### setup

<p>Create a Poseidon hasher with a custom domain separator</p>

```javascript
setup(domain_separator) ► Poseidon
```

| Param | Type | Description |
| --- | --- | --- |
| domain_separator | <code>string</code> | Custom domain separator |
| *return* | <code>Poseidon</code> | Poseidon hasher instance |

---

<a name="Poseidon+hash"></a>

#### hash

<p>Returns the Poseidon hash of the input field elements</p>

```javascript
hash(input) ► Field
```

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Array</code> | Array of Field elements |
| *return* | <code>Field</code> | The hash result |

---

<a name="Poseidon+hashMany"></a>

#### hashMany

<p>Returns the extended Poseidon hash with multiple outputs</p>

```javascript
hashMany(input, num_outputs) ► Array
```

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Array</code> | Array of Field elements |
| num_outputs | <code>number</code> | Number of output field elements |
| *return* | <code>Array</code> | Array of Field elements |

---

<a name="Poseidon+hashToScalar"></a>

#### hashToScalar

<p>Returns the Poseidon hash on the scalar field</p>

```javascript
hashToScalar(input) ► Scalar
```

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Array</code> | Array of Field elements |
| *return* | <code>Scalar</code> | The hash result as a scalar |

---

<a name="Poseidon+hashToGroup"></a>

#### hashToGroup

<p>Returns the Poseidon hash on the affine curve</p>

```javascript
hashToGroup(input) ► Group
```

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Array</code> | Array of Field elements |
| *return* | <code>Group</code> | The hash result as a group element |

---
