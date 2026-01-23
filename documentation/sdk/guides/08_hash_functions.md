---
id: hash_functions
title: Hash Functions
sidebar_label: Hash Functions
---

The Provable SDK provides access to several cryptographic hash functions that are compatible with Aleo's zero-knowledge proof system. These hash functions can be used for various purposes such as data integrity verification, commitment schemes, and generating deterministic values from inputs.

## Available Hash Functions

The SDK provides three families of hash functions:

| Family | Variants | Input Type | Primary Use Case |
|--------|----------|------------|------------------|
| **BHP** | BHP256, BHP512, BHP768, BHP1024 | Boolean array (bits) | General-purpose hashing with different security levels |
| **Pedersen** | Pedersen64, Pedersen128 | Boolean array (bits) | Efficient commitments for smaller inputs |
| **Poseidon** | Poseidon2, Poseidon4, Poseidon8 | Field array | Optimized for zkSNARK circuits |

## Importing Hash Functions

```typescript
import { 
    BHP256, BHP512, BHP768, BHP1024,
    Pedersen64, Pedersen128,
    Poseidon2, Poseidon4, Poseidon8,
    Field, Scalar
} from '@provablehq/sdk';
```

## BHP Hash Functions

BHP (Bowe-Hopwood-Pedersen) hash functions are general-purpose cryptographic hash functions. The number indicates the chunk size in bits (256, 512, 768, or 1024).

### Creating a BHP Hasher

```typescript
const bhp256 = new BHP256();
const bhp512 = new BHP512();
const bhp768 = new BHP768();
const bhp1024 = new BHP1024();
```

### BHP Methods

All BHP hashers support the following methods:

#### `hash(input: boolean[]): Field`
Hashes the input bits and returns a `Field` element.

```typescript
const bhp256 = new BHP256();

// Create input as a boolean array (bits)
const inputBits = [true, false, true, true, false, false, true, false];

// Hash the input
const hashResult = bhp256.hash(inputBits);
console.log(hashResult.toString()); // Returns a field element string
```

#### `hashToGroup(input: boolean[]): Group`
Hashes the input bits and returns a `Group` element.

```typescript
const bhp256 = new BHP256();
const inputBits = [true, false, true, true, false, false, true, false];

const groupResult = bhp256.hashToGroup(inputBits);
console.log(groupResult.toString()); // Returns a group element string
```

#### `commit(input: boolean[], randomizer: Scalar): Field`
Creates a commitment to the input using a randomizer. This is useful for hiding values while still being able to verify them later.

```typescript
const bhp256 = new BHP256();
const inputBits = [true, false, true, true, false, false, true, false];

// Create a randomizer (blinding factor)
const randomizer = Scalar.fromString("1774157567936692047646837016039369013254365378639847034769080448564598011047scalar");

const commitment = bhp256.commit(inputBits, randomizer);
console.log(commitment.toString());
```

#### `commitToGroup(input: boolean[], randomizer: Scalar): Group`
Creates a commitment that returns a `Group` element instead of a `Field`.

```typescript
const bhp256 = new BHP256();
const inputBits = [true, false, true, true, false, false, true, false];
const randomizer = Scalar.fromString("1774157567936692047646837016039369013254365378639847034769080448564598011047scalar");

const groupCommitment = bhp256.commitToGroup(inputBits, randomizer);
console.log(groupCommitment.toString());
```

### Choosing a BHP Variant

- **BHP256**: Fastest, suitable for smaller inputs
- **BHP512**: Balanced performance and security
- **BHP768**: Higher security margin
- **BHP1024**: Highest security, suitable for larger inputs

## Pedersen Hash Functions

Pedersen hash functions are efficient for commitments, especially with smaller inputs. They're commonly used in cryptographic protocols where efficiency is critical.

### Creating a Pedersen Hasher

```typescript
const pedersen64 = new Pedersen64();
const pedersen128 = new Pedersen128();
```

### Pedersen Methods

#### `hash(input: boolean[]): Field`
Hashes the input bits and returns a `Field` element.

```typescript
const pedersen64 = new Pedersen64();

// Input must fit within the bit limit (64 bits for Pedersen64, 128 bits for Pedersen128)
const inputBits = [
    true, false, false, false, false, false, false, false,  // 8 bits
    false, false, false, false, false, false, false, false, // 8 bits
    false, false, false, false, false, false, false, false, // 8 bits
    false, false, false, false, false, false, false, false  // 8 bits = 32 bits total
];

const hashResult = pedersen64.hash(inputBits);
console.log(hashResult.toString());
```

#### `commit(input: boolean[], randomizer: Scalar): Field`
Creates a commitment to the input.

```typescript
const pedersen64 = new Pedersen64();
const inputBits = [true, false, true, true];
const randomizer = Scalar.fromString("1774157567936692047646837016039369013254365378639847034769080448564598011047scalar");

const commitment = pedersen64.commit(inputBits, randomizer);
console.log(commitment.toString());
```

#### `commitToGroup(input: boolean[], randomizer: Scalar): Group`
Creates a commitment that returns a `Group` element.

```typescript
const pedersen128 = new Pedersen128();
const inputBits = [true, false, true, true];
const randomizer = Scalar.fromString("1774157567936692047646837016039369013254365378639847034769080448564598011047scalar");

const groupCommitment = pedersen128.commitToGroup(inputBits, randomizer);
console.log(groupCommitment.toString());
```

### Choosing a Pedersen Variant

- **Pedersen64**: For inputs up to 64 bits
- **Pedersen128**: For inputs up to 128 bits

## Poseidon Hash Functions

Poseidon hash functions are specifically optimized for zkSNARK circuits, making them the most efficient choice for use within Aleo programs. They operate on `Field` elements rather than bits.

### Creating a Poseidon Hasher

```typescript
const poseidon2 = new Poseidon2();
const poseidon4 = new Poseidon4();
const poseidon8 = new Poseidon8();
```

### Poseidon Methods

#### `hash(input: Field[]): Field`
Hashes an array of `Field` elements and returns a single `Field`.

```typescript
const poseidon2 = new Poseidon2();

// Create Field elements as input
const field1 = Field.fromString("1field");
const field2 = Field.fromString("2field");
const fieldArray = [field1, field2];

const hashResult = poseidon2.hash(fieldArray);
console.log(hashResult.toString());
```

#### `hashToScalar(input: Field[]): Scalar`
Hashes the input and returns a `Scalar` element.

```typescript
const poseidon4 = new Poseidon4();
const fieldArray = [
    Field.fromString("1field"),
    Field.fromString("2field"),
    Field.fromString("3field")
];

const scalarResult = poseidon4.hashToScalar(fieldArray);
console.log(scalarResult.toString());
```

#### `hashToGroup(input: Field[]): Group`
Hashes the input and returns a `Group` element.

```typescript
const poseidon8 = new Poseidon8();
const fieldArray = [Field.fromString("42field")];

const groupResult = poseidon8.hashToGroup(fieldArray);
console.log(groupResult.toString());
```

#### `hashMany(input: Field[], numOutputs: number): Field[]`
Hashes the input and returns multiple `Field` elements. Useful when you need multiple hash outputs from a single input.

```typescript
const poseidon2 = new Poseidon2();
const fieldArray = [
    Field.fromString("1field"),
    Field.fromString("2field"),
    Field.fromString("3field"),
    Field.fromString("4field")
];

// Get 2 output fields
const multipleHashes = poseidon2.hashMany(fieldArray, 2);
multipleHashes.forEach((hash, index) => {
    console.log(`Hash ${index}: ${hash.toString()}`);
});
```

### Choosing a Poseidon Variant

The number in Poseidon variants (2, 4, 8) refers to the rate parameter, which affects performance and security trade-offs:

- **Poseidon2**: Fastest for small inputs
- **Poseidon4**: Balanced performance
- **Poseidon8**: Better throughput for larger inputs

## Working with Field Elements

When using Poseidon hash functions, you'll work with `Field` elements. Here's how to create and manipulate them:

```typescript
import { Field, Scalar, Group } from '@provablehq/sdk';

// Create a Field from a string
const field1 = Field.fromString("123field");

// Create a Field from another Field (clone)
const field2 = field1.clone();

// Arithmetic operations
const sum = field1.add(field2);
const product = field1.multiply(field2);

// Convert to string
console.log(field1.toString());

// Convert to bits (for BHP/Pedersen)
const bits = field1.toBitsLe(); // Little-endian bit representation
```

## Complete Example

Here's a complete example demonstrating all hash function families:

```typescript
import { 
    BHP256, Pedersen64, Poseidon2,
    Field, Scalar
} from '@provablehq/sdk';

// BHP Example
const bhp = new BHP256();
const bhpInput = [true, false, true, false, true, false, true, false];
const bhpHash = bhp.hash(bhpInput);
console.log("BHP256 Hash:", bhpHash.toString());

// Pedersen Example
const pedersen = new Pedersen64();
const pedersenInput = [true, true, false, false, true, true, false, false];
const pedersenHash = pedersen.hash(pedersenInput);
console.log("Pedersen64 Hash:", pedersenHash.toString());

// Poseidon Example
const poseidon = new Poseidon2();
const poseidonInput = [
    Field.fromString("1field"),
    Field.fromString("2field")
];
const poseidonHash = poseidon.hash(poseidonInput);
console.log("Poseidon2 Hash:", poseidonHash.toString());

// Commitment Example
const randomizer = Scalar.fromString("1774157567936692047646837016039369013254365378639847034769080448564598011047scalar");
const commitment = bhp.commit(bhpInput, randomizer);
console.log("BHP256 Commitment:", commitment.toString());
```

## Use Cases

| Use Case | Recommended Hash Function |
|----------|--------------------------|
| In-circuit hashing (Aleo programs) | Poseidon |
| General-purpose hashing | BHP512 or BHP1024 |
| Small commitments (< 64 bits) | Pedersen64 |
| Medium commitments (< 128 bits) | Pedersen128 |
| Deriving multiple values | Poseidon with `hashMany` |
| Group element outputs | Any with `hashToGroup` |

## Compatibility with Aleo Programs

These hash functions produce outputs that are compatible with Aleo programs. For example, if you hash data using Poseidon2 in the SDK, you'll get the same result as using `Poseidon2::hash_to_field` in an Aleo program with the same inputs.

This makes the SDK ideal for:
- Pre-computing hashes off-chain
- Verifying program outputs client-side
- Building Merkle trees compatible with on-chain verification
