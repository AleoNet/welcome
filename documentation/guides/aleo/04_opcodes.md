---
id: opcodes
title: Aleo Opcodes Reference
sidebar_label: Opcodes
---

The following lists show the standard and cryptographic opcodes supported by Aleo instructions.

## Table of Standard Opcodes
| Name                         | Description                                           |
|------------------------------|:------------------------------------------------------|
| [abs](#abs)                  | Absolute value operation                              |
| [abs.w](#abs.w)               | Wrapping absolute value operation                     |
| [add](#add)                  | Addition operation                                    |
| [add.w](#add.w)               | Wrapping addition operation                           |
| [and](#and)                  | AND operation                                         |
| [assert.eq](#asserteq)       | Assert equality                                       |
| [assert.neq](#assertneq)     | Assert non-equality                                   |
| [branch.eq](#brancheq)       | Branches to a position if the arguments are equal     |
| [branch.neq](#branchneq)     | Branches to a position if the arguments are not equal |
| [cast](#cast)                | Cast between literals                                 |
| [cast.lossy](#castlossy)     | Cast between literals with lossy truncation           |
| [div](#div)                  | Division operation                                    |
| [div.w](#div.w)               | Wrapping division operation                           |
| [double](#double)            | Double operation                                      |
| [gt](#gt)                    | Greater than comparison                               |
| [gte](#gte)                  | Greater than or equal to comparison                   |
| [inv](#inv)                  | Multiplicative inverse operation                      |
| [is.eq](#iseq)               | Equality comparison                                   |
| [is.neq](#isneq)             | Not equal comparison                                  |
| [lt](#lt)                    | Less than comparison                                  |
| [lte](#lte)                  | Less than or equal to comparison                      |
| [mod](#mod)                  | Arithmetic modulo operation                           |
| [mul](#mul)                  | Multiplication operation                              |
| [mul.w](#mul.w)               | Wrapping multiplication operation                     |
| [nand](#nand)                | `Boolean` NAND operation                              |
| [neg](#neg)                  | Additive inverse operation                            |
| [nor](#nor)                  | `Boolean` NOR operation                               |
| [not](#not)                  | NOT operation                                         |
| [or](#or)                    | OR Operation                                          |
| [position](#position)        | The position command                                  |
| [pow](#pow)                  | Exponentiation operation                              |
| [pow.w](#pow.w)               | Wrapping exponentiation operation                     |
| [rand.chacha](#randchacha)   | Generates a random value within the `finalize` scope. |
| [rem](#rem)                  | Remainder operation                                   |
| [rem.w](#rem.w)               | Wrapping remainder operation                          |
| [shl](#shl)                  | Shift left operation                                  |
| [shl.w](#shlw)               | Wrapping shift left operation                         |
| [shr](#shr)                  | Shift right operation                                 |
| [shr.w](#shrw)               | Wrapping shift right operation                        |
| [sqrt](#sqrt)                | Square root operation                                 |
| [square](#square)            | Square operation                                      |
| [sub](#sub)                  | Subtraction operation                                 |
| [sub.w](#subw)               | Wrapping subtraction operation                        |
| [ternary](#ternary)          | Ternary select operation                              |
| [xor](#xor)                  | XOR operation                                         |
| [serialize.bits](#serializebits) | Serialize value to bits array (Aleo variant bits) |
| [serialize.bits.raw](#serializebitsraw) | Serialize value to bits array (raw bits) |
| [deserialize.bits](#deserializebits) | Deserialize from bits array to value (Aleo variant bits) |
| [deserialize.bits.raw](#deserializebitsraw) | Deserialize from bits array to value (raw bits) |

## Table of Cryptographic Opcodes
| Name                             | Description                       |
|----------------------------------|:----------------------------------|
| [commit.bhp256](#commitbhp256)   | 256-bit input BHP commitment      |
| [commit.bhp512](#commitbhp512)   | 512-bit input BHP commitment      |
| [commit.bhp768](#commitbhp768)   | 768-bit input BHP commitment      |
| [commit.bhp1024](#commitbhp1024) | 1024-bit input BHP commitment     |
| [commit.ped64](#commitped64)     | 64-bit input Pedersen commitment  |
| [commit.ped128](#commitped128)   | 128-bit input Pedersen commitment |
| [hash.bhp256](#hashbhp256)       | 256-bit input BHP hash            |
| [hash.bhp512](#hashbhp512)       | 512-bit input BHP hash            |
| [hash.bhp768](#hashbhp768)       | 768-bit input BHP hash            |
| [hash.bhp1024](#hashbhp1024)     | 1024-bit input BHP hash           |
| [hash.keccak256](#hashkeccak256) | 256-bit input Keccak hash         |
| [hash.keccak384](#hashkeccak384) | 384-bit input Keccak hash         |
| [hash.keccak512](#hashkeccak512) | 512-bit input Keccak hash         |
| [hash.ped64](#hashped64)         | 64-bit input Pedersen hash        |
| [hash.ped128](#hashped128)       | 128-bit input Pedersen hash       |
| [hash.psd2](#hashpsd2)           | Poseidon hash with input rate 2   |
| [hash.psd4](#hashpsd4)           | Poseidon hash with input rate 4   |
| [hash.psd8](#hashpsd8)           | Poseidon hash with input rate 8   |
| [hash.sha3_256](#hashsha3_256)   | 256-bit input SHA3 hash           |
| [hash.sha3_384](#hashsha3_384)   | 384-bit input SHA3 hash           |
| [hash.sha3_512](#hashsha3_512)   | 512-bit input SHA3 hash           |
| [hash.bhp256.raw](#hashbhp256raw)       | 256-bit input BHP hash (raw bits)            |
| [hash.bhp512.raw](#hashbhp512raw)       | 512-bit input BHP hash (raw bits)            |
| [hash.bhp768.raw](#hashbhp768raw)       | 768-bit input BHP hash (raw bits)            |
| [hash.bhp1024.raw](#hashbhp1024raw)     | 1024-bit input BHP hash (raw bits)           |
| [hash.keccak256.raw](#hashkeccak256raw) | 256-bit input Keccak hash (raw bits)         |
| [hash.keccak384.raw](#hashkeccak384raw) | 384-bit input Keccak hash (raw bits)         |
| [hash.keccak512.raw](#hashkeccak512raw) | 512-bit input Keccak hash (raw bits)         |
| [hash.ped64.raw](#hashped64raw)         | 64-bit input Pedersen hash (raw bits)        |
| [hash.ped128.raw](#hashped128raw)       | 128-bit input Pedersen hash (raw bits)       |
| [hash.psd2.raw](#hashpsd2raw)           | Poseidon hash with input rate 2 (raw bits)   |
| [hash.psd4.raw](#hashpsd4raw)           | Poseidon hash with input rate 4 (raw bits)   |
| [hash.psd8.raw](#hashpsd8raw)           | Poseidon hash with input rate 8 (raw bits)   |
| [hash.sha3_256.raw](#hashsha3_256raw)   | 256-bit input SHA3 hash (raw bits)           |
| [hash.sha3_384.raw](#hashsha3_384raw)   | 384-bit input SHA3 hash (raw bits)           |
| [hash.sha3_512.raw](#hashsha3_512raw)   | 512-bit input SHA3 hash (raw bits)           |
| [hash.keccak256.native](#hashkeccak256native) | 256-bit input Keccak hash (outputs bit array)         |
| [hash.keccak256.native.raw](#hashkeccak256nativeraw) | 256-bit input Keccak hash (raw bits, outputs bit array)         |
| [hash.keccak384.native](#hashkeccak384native) | 384-bit input Keccak hash (outputs bit array)         |
| [hash.keccak384.native.raw](#hashkeccak384nativeraw) | 384-bit input Keccak hash (raw bits, outputs bit array)         |
| [hash.keccak512.native](#hashkeccak512native) | 512-bit input Keccak hash (outputs bit array)         |
| [hash.keccak512.native.raw](#hashkeccak512nativeraw) | 512-bit input Keccak hash (raw bits, outputs bit array)         |
| [hash.sha3_256.native](#hashsha3_256native)   | 256-bit input SHA3 hash (outputs bit array)           |
| [hash.sha3_256.native.raw](#hashsha3_256nativeraw)   | 256-bit input SHA3 hash (raw bits, outputs bit array)           |
| [hash.sha3_384.native](#hashsha3_384native)   | 384-bit input SHA3 hash (outputs bit array)           |
| [hash.sha3_384.native.raw](#hashsha3_384nativeraw)   | 384-bit input SHA3 hash (raw bits, outputs bit array)           |
| [hash.sha3_512.native](#hashsha3_512native)   | 512-bit input SHA3 hash (outputs bit array)           |
| [hash.sha3_512.native.raw](#hashsha3_512nativeraw)   | 512-bit input SHA3 hash (raw bits, outputs bit array)           |
| [sign.verify](#signverify)       | Verify a Schnorr signature        |
| [ecdsa.verify.digest](#ecdsaverifydigest)       | Verify an ECDSA signature with pre-computed digest         |
| [ecdsa.verify.digest.eth](#ecdsaverifydigesteth)       | Verify an ECDSA signature with pre-computed digest (Ethereum 20-byte address)        |
| [ecdsa.verify.keccak256](#ecdsaverifykeccak256)       | Verify an ECDSA signature with Keccak-256 (Aleo variant bits)        |
| [ecdsa.verify.keccak256.raw](#ecdsaverifykeccak256raw)       | Verify an ECDSA signature with Keccak-256 (raw bits)        |
| [ecdsa.verify.keccak256.eth](#ecdsaverifykeccak256eth)       | Verify an ECDSA signature with Keccak-256 (raw bits + Ethereum 20-byte address)        |
| [ecdsa.verify.keccak384](#ecdsaverifykeccak384)       | Verify an ECDSA signature with Keccak-384 (Aleo variant bits)        |
| [ecdsa.verify.keccak384.raw](#ecdsaverifykeccak384raw)       | Verify an ECDSA signature with Keccak-384 (raw bits)        |
| [ecdsa.verify.keccak384.eth](#ecdsaverifykeccak384eth)       | Verify an ECDSA signature with Keccak-384 (raw bits + Ethereum 20-byte address)        |
| [ecdsa.verify.keccak512](#ecdsaverifykeccak512)       | Verify an ECDSA signature with Keccak-512 (Aleo variant bits)        |
| [ecdsa.verify.keccak512.raw](#ecdsaverifykeccak512raw)       | Verify an ECDSA signature with Keccak-512 (raw bits)        |
| [ecdsa.verify.keccak512.eth](#ecdsaverifykeccak512eth)       | Verify an ECDSA signature with Keccak-512 (raw bits + Ethereum 20-byte address)        |
| [ecdsa.verify.sha3_256](#ecdsaverifysha3_256)       | Verify an ECDSA signature with SHA3-256 (Aleo variant bits)        |
| [ecdsa.verify.sha3_256.raw](#ecdsaverifysha3_256raw)       | Verify an ECDSA signature with SHA3-256 (raw bits)        |
| [ecdsa.verify.sha3_256.eth](#ecdsaverifysha3_256eth)       | Verify an ECDSA signature with SHA3-256 (raw bits + Ethereum 20-byte address)        |
| [ecdsa.verify.sha3_384](#ecdsaverifysha3_384)       | Verify an ECDSA signature with SHA3-384 (Aleo variant bits)        |
| [ecdsa.verify.sha3_384.raw](#ecdsaverifysha3_384raw)       | Verify an ECDSA signature with SHA3-384 (raw bits)        |
| [ecdsa.verify.sha3_384.eth](#ecdsaverifysha3_384eth)       | Verify an ECDSA signature with SHA3-384 (raw bits + Ethereum 20-byte address)        |
| [ecdsa.verify.sha3_512](#ecdsaverifysha3_512)       | Verify an ECDSA signature with SHA3-512 (Aleo variant bits)        |
| [ecdsa.verify.sha3_512.raw](#ecdsaverifysha3_512raw)       | Verify an ECDSA signature with SHA3-512 (raw bits)        |
| [ecdsa.verify.sha3_512.eth](#ecdsaverifysha3_512eth)       | Verify an ECDSA signature with SHA3-512 (raw bits + Ethereum 20-byte address)        |

## Specification

The following is the specification for each opcode in the Aleo Virtual Machine (AVM).

### `abs`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes the absolute value of the input, checking for overflow, storing the result in the destination register.

For integer types, a constraint is added to check for underflow. For cases where wrapping semantics are needed, see the [abs.w](#abs.w) instruction. This underflow happens when the input is the minimum value of a signed integer type. For example, `abs -128i8` would result in underflow, since `128` cannot be represented as an `i8`.

#### Example Usage

```aleo
abs r0 into r1;
```

#### Supported Types

| Input  | Destination |
|--------|:------------|
| `I8`   | `I8`        |
| `I16`  | `I16`       |
| `I32`  | `I32`       |
| `I64`  | `I64`       |
| `I128` | `I128`      |

***

### `abs.w` {#abs.w}

[Back to Top](#table-of-standard-opcodes)

#### Description

Compute the absolute value of the input, wrapping around at the boundary of the type, and storing the result in the destination register.

#### Example Usage

```aleo
abs.w r0 into r1;
```

#### Supported Types

| Input  | Destination |
|--------|:------------|
| `I8`   | `I8`        |
| `I16`  | `I16`       |
| `I32`  | `I32`       |
| `I64`  | `I64`       |
| `I128` | `I128`      |

***

### `add`

[Back to Top](#table-of-standard-opcodes)

#### Description

Adds `first` with `second`, storing the outcome in `destination`.

For integer types, a constraint is added to check for overflow. For cases where wrapping semantics are needed for integer types, see the [add.w](#add.w) instruction.

#### Example Usage

```aleo
add r0 r1 into r2;
```

#### Supported Types

| First    | Second   | Destination |
|----------|----------|-------------|
| `Field`  | `Field`  | `Field`     |
| `Group`  | `Group`  | `Group`     |
| `I8`     | `I8`     | `I8`        |
| `I16`    | `I16`    | `I16`       |
| `I32`    | `I32`    | `I32`       |
| `I64`    | `I64`    | `I64`       |
| `I128`   | `I128`   | `I128`      |
| `U8`     | `U8`     | `U8`        |
| `U16`    | `U16`    | `U16`       |
| `U32`    | `U32`    | `U32`       |
| `U64`    | `U64`    | `U64`       |
| `U128`   | `U128`   | `U128`      |
| `Scalar` | `Scalar` | `Scalar`    |

***

### `add.w` {#add.w}

[Back to Top](#table-of-standard-opcodes)

#### Description

Adds `first` with `second`, wrapping around at the boundary of the type, and storing the outcome in `destination`.

#### Example Usage

```aleo
add.w r0 r1 into r2;
```

#### Supported Types

| First  | Second | Destination |
|--------|--------|:------------|
| `I8`   | `I8`   | `I8`        |
| `I16`  | `I16`  | `I16`       |
| `I32`  | `I32`  | `I32`       |
| `I64`  | `I64`  | `I64`       |
| `I128` | `I128` | `I128`      |
| `U8`   | `U8`   | `U8`        |
| `U16`  | `U16`  | `U16`       |
| `U32`  | `U32`  | `U32`       |
| `U64`  | `U64`  | `U64`       |
| `U128` | `U128` | `U128`      |

***

### `and`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs an AND operation on integer (bitwise) or boolean `first` and `second`,
storing the outcome in `destination`.

#### Example Usage

```aleo
and r0 r1 into r2;
```

#### Supported Types

| First     | Second    | Destination |
|-----------|-----------|:------------|
| `Boolean` | `Boolean` | `Boolean`   |
| `I8`      | `I8`      | `I8`        |
| `I16`     | `I16`     | `I16`       |
| `I32`     | `I32`     | `I32`       |
| `I64`     | `I64`     | `I64`       |
| `I128`    | `I128`    | `I128`      |
| `U8`      | `U8`      | `U8`        |
| `U16`     | `U16`     | `U16`       |
| `U32`     | `U32`     | `U32`       |
| `U64`     | `U64`     | `U64`       |
| `U128`    | `U128`    | `U128`      |

***

### `assert.eq`

[Back to Top](#table-of-standard-opcodes)

#### Description

Checks whether `first` and `second` are equal, halting if they are not equal.

#### Example Usage

```aleo
assert.eq r0 r1;
```

#### Supported Types

| First       | Second      |
|-------------|-------------|
| `Address`   | `Address`   |
| `Boolean`   | `Boolean`   |
| `Field`     | `Field`     |
| `Group`     | `Group`     |
| `I8`        | `I8`        |
| `I16`       | `I16`       |
| `I32`       | `I32`       |
| `I64`       | `I64`       |
| `I128`      | `I128`      |
| `U8`        | `U8`        |
| `U16`       | `U16`       |
| `U32`       | `U32`       |
| `U64`       | `U64`       |
| `U128`      | `U128`      |
| `Scalar`    | `Scalar`    |
| `Signature` | `Signature` |
| `Struct`    | `Struct`    |
| `Record`    | `Record`    |

***

### `assert.neq`

[Back to Top](#table-of-standard-opcodes)

#### Description

Checks whether `first` and `second` are not equal, halting if they are equal.

#### Example Usage

```aleo
assert.neq r0 r1;
```

#### Supported Types

| First       | Second      |
|-------------|-------------|
| `Address`   | `Address`   |
| `Boolean`   | `Boolean`   |
| `Field`     | `Field`     |
| `Group`     | `Group`     |
| `I8`        | `I8`        |
| `I16`       | `I16`       |
| `I32`       | `I32`       |
| `I64`       | `I64`       |
| `I128`      | `I128`      |
| `U8`        | `U8`        |
| `U16`       | `U16`       |
| `U32`       | `U32`       |
| `U64`       | `U64`       |
| `U128`      | `U128`      |
| `Scalar`    | `Scalar`    |
| `Signature` | `Signature` |
| `Struct`    | `Struct`    |
| `Record`    | `Record`    |

***

### `branch.eq`

[Back to Top](#table-of-standard-opcodes)

#### Description

The command `branch.eq <first> <second> to <destination>` branches execution to the [position](#position) indicated by `destination` if `first` and `second` are equal.  This command is restricted to the finalize scope, and the destination must follow the command.  Backward branches are not currently supported.

#### Example Usage

```aleo
branch.eq r0 r1 to skip;
```

| First     | Second    | Destination |
|-----------|-----------|-------------|
| `Address` | `Address` | `Position`  |
| `Boolean` | `Boolean` | `Position`  |
| `Field`   | `Field`   | `Position`  |
| `Group`   | `Group`   | `Position`  |
| `I8`      | `I8`      | `Position`  |
| `I16`     | `I16`     | `Position`  |
| `I32`     | `I32`     | `Position`  |
| `I64`     | `I64`     | `Position`  |
| `I128`    | `I128`    | `Position`  |
| `U8`      | `U8`      | `Position`  |
| `U16`     | `U16`     | `Position`  |
| `U32`     | `U32`     | `Position`  |
| `U64`     | `U64`     | `Position`  |
| `U128`    | `U128`    | `Position`  |
| `Scalar`  | `Scalar`  | `Position`  |
| `Struct`  | `Struct`  | `Position`  |
| `Record`  | `Record`  | `Position`  |

***

### `branch.neq`

[Back to Top](#table-of-standard-opcodes)

#### Description

The command `branch.neq <first> <second> to <destination>` branches execution to the [position](#position) indicated by `destination` if `first` and `second` are not equal.  This command is restricted to the finalize scope, and the destination must follow the command.  Backward branches are not currently supported.

#### Example Usage

```aleo
branch.neq r0 r1 to process;
```

| First     | Second    | Destination |
|-----------|-----------|-------------|
| `Address` | `Address` | `Position`  |
| `Boolean` | `Boolean` | `Position`  |
| `Field`   | `Field`   | `Position`  |
| `Group`   | `Group`   | `Position`  |
| `I8`      | `I8`      | `Position`  |
| `I16`     | `I16`     | `Position`  |
| `I32`     | `I32`     | `Position`  |
| `I64`     | `I64`     | `Position`  |
| `I128`    | `I128`    | `Position`  |
| `U8`      | `U8`      | `Position`  |
| `U16`     | `U16`     | `Position`  |
| `U32`     | `U32`     | `Position`  |
| `U64`     | `U64`     | `Position`  |
| `U128`    | `U128`    | `Position`  |
| `Scalar`  | `Scalar`  | `Position`  |
| `Struct`  | `Struct`  | `Position`  |
| `Record`  | `Record`  | `Position`  |

***

### `cast`

[Back to Top](#table-of-standard-opcodes)

#### Description

Enables casting between different literals.

#### Example Usage

```aleo
input r0 as field.private;
cast r0 into r1 as group;
cast r0 into r2 as u8;
cast r3 r4 r5 r6 into r7 as [boolean; 4u32];
cast r7 into r8 as [[boolean; 4u32]; 1u32];
```

#### Supported Types

| From      | To                                                                                                        |
|-----------|-----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

| Elements  | To                |
|-----------|-------------------|
| `Address` | `Array`, `Struct` |
| `Boolean` | `Array`, `Struct` |
| `Field`   | `Array`, `Struct` |
| `Group`   | `Array`, `Struct` |
| `I8`      | `Array`, `Struct` |
| `I16`     | `Array`, `Struct` |
| `I32`     | `Array`, `Struct` |
| `I64`     | `Array`, `Struct` |
| `I128`    | `Array`, `Struct` |
| `U8`      | `Array`, `Struct` |
| `U16`     | `Array`, `Struct` |
| `U32`     | `Array`, `Struct` |
| `U64`     | `Array`, `Struct` |
| `U128`    | `Array`, `Struct` |
| `Scalar`  | `Array`, `Struct` |

***

### `cast.lossy`

[Back to Top](#table-of-standard-opcodes)

#### Description

Perform casting with lossy truncation.

#### Example Usage

```aleo
input r0 as field.private;
cast r0 into r1 as group;
cast r0 into r2 as u8;
cast.lossy r0 into r3 as u8; // The bottom 8 bits of the r0 are extracted into a u8 and placed into r3
```

#### Supported Types
| From      | To                                                                                                        |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `commit.bhp256`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 256-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be an `Address`, `Field`, or `Group` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given input is smaller than 129 bits.

#### Example Usage

```aleo
commit.bhp256 r0 r1 into r2 as address;
```

#### Supported Types

| First     | Second   | Destination                 |
|-----------|----------|:----------------------------|
| `Address` | `Scalar` | `Address`, `Field`, `Group` |
| `Boolean` | `Scalar` | `Address`, `Field`, `Group` |
| `Field`   | `Scalar` | `Address`, `Field`, `Group` |
| `Group`   | `Scalar` | `Address`, `Field`, `Group` |
| `I8`      | `Scalar` | `Address`, `Field`, `Group` |
| `I16`     | `Scalar` | `Address`, `Field`, `Group` |
| `I32`     | `Scalar` | `Address`, `Field`, `Group` |
| `I64`     | `Scalar` | `Address`, `Field`, `Group` |
| `I128`    | `Scalar` | `Address`, `Field`, `Group` |
| `U8`      | `Scalar` | `Address`, `Field`, `Group` |
| `U16`     | `Scalar` | `Address`, `Field`, `Group` |
| `U32`     | `Scalar` | `Address`, `Field`, `Group` |
| `U64`     | `Scalar` | `Address`, `Field`, `Group` |
| `U128`    | `Scalar` | `Address`, `Field`, `Group` |
| `Scalar`  | `Scalar` | `Address`, `Field`, `Group` |
| `Struct`  | `Scalar` | `Address`, `Field`, `Group` |
| `Array`   | `Scalar` | `Address`, `Field`, `Group` |

***

### `commit.bhp512`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 512-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be an `Address`, `Field`, or `Group` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given input is smaller than 171 bits.

#### Example Usage

```aleo
commit.bhp512 r0 r1 into r2 as field;
```

#### Supported Types

| First     | Second   | Destination                 |
|-----------|----------|:----------------------------|
| `Address` | `Scalar` | `Address`, `Field`, `Group` |
| `Boolean` | `Scalar` | `Address`, `Field`, `Group` |
| `Field`   | `Scalar` | `Address`, `Field`, `Group` |
| `Group`   | `Scalar` | `Address`, `Field`, `Group` |
| `I8`      | `Scalar` | `Address`, `Field`, `Group` |
| `I16`     | `Scalar` | `Address`, `Field`, `Group` |
| `I32`     | `Scalar` | `Address`, `Field`, `Group` |
| `I64`     | `Scalar` | `Address`, `Field`, `Group` |
| `I128`    | `Scalar` | `Address`, `Field`, `Group` |
| `U8`      | `Scalar` | `Address`, `Field`, `Group` |
| `U16`     | `Scalar` | `Address`, `Field`, `Group` |
| `U32`     | `Scalar` | `Address`, `Field`, `Group` |
| `U64`     | `Scalar` | `Address`, `Field`, `Group` |
| `U128`    | `Scalar` | `Address`, `Field`, `Group` |
| `Scalar`  | `Scalar` | `Address`, `Field`, `Group` |
| `Struct`  | `Scalar` | `Address`, `Field`, `Group` |
| `Array`   | `Scalar` | `Address`, `Field`, `Group` |

***

### `commit.bhp768`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 768-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be an `Address`, `Field`, or `Group` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given input is smaller than 129 bits.

#### Example Usage

```aleo
commit.bhp768 r0 r1 into r2 as group;
```

#### Supported Types

| First     | Second   | Destination                 |
|-----------|----------|:----------------------------|
| `Address` | `Scalar` | `Address`, `Field`, `Group` |
| `Boolean` | `Scalar` | `Address`, `Field`, `Group` |
| `Field`   | `Scalar` | `Address`, `Field`, `Group` |
| `Group`   | `Scalar` | `Address`, `Field`, `Group` |
| `I8`      | `Scalar` | `Address`, `Field`, `Group` |
| `I16`     | `Scalar` | `Address`, `Field`, `Group` |
| `I32`     | `Scalar` | `Address`, `Field`, `Group` |
| `I64`     | `Scalar` | `Address`, `Field`, `Group` |
| `I128`    | `Scalar` | `Address`, `Field`, `Group` |
| `U8`      | `Scalar` | `Address`, `Field`, `Group` |
| `U16`     | `Scalar` | `Address`, `Field`, `Group` |
| `U32`     | `Scalar` | `Address`, `Field`, `Group` |
| `U64`     | `Scalar` | `Address`, `Field`, `Group` |
| `U128`    | `Scalar` | `Address`, `Field`, `Group` |
| `Scalar`  | `Scalar` | `Address`, `Field`, `Group` |
| `Struct`  | `Scalar` | `Address`, `Field`, `Group` |
| `Array`   | `Scalar` | `Address`, `Field`, `Group` |

***

### `commit.bhp1024`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen commitment on inputs of 1024-bit chunks in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment will always be an `Address`, `Field`, or `Group` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given input is smaller than 171 bits.

#### Example Usage

```aleo
commit.bhp1024 r0 r1 into r2 as address;
```

#### Supported Types

| First     | Second   | Destination                 |
|-----------|----------|:----------------------------|
| `Address` | `Scalar` | `Address`, `Field`, `Group` |
| `Boolean` | `Scalar` | `Address`, `Field`, `Group` |
| `Field`   | `Scalar` | `Address`, `Field`, `Group` |
| `Group`   | `Scalar` | `Address`, `Field`, `Group` |
| `I8`      | `Scalar` | `Address`, `Field`, `Group` |
| `I16`     | `Scalar` | `Address`, `Field`, `Group` |
| `I32`     | `Scalar` | `Address`, `Field`, `Group` |
| `I64`     | `Scalar` | `Address`, `Field`, `Group` |
| `I128`    | `Scalar` | `Address`, `Field`, `Group` |
| `U8`      | `Scalar` | `Address`, `Field`, `Group` |
| `U16`     | `Scalar` | `Address`, `Field`, `Group` |
| `U32`     | `Scalar` | `Address`, `Field`, `Group` |
| `U64`     | `Scalar` | `Address`, `Field`, `Group` |
| `U128`    | `Scalar` | `Address`, `Field`, `Group` |
| `Scalar`  | `Scalar` | `Address`, `Field`, `Group` |
| `Struct`  | `Scalar` | `Address`, `Field`, `Group` |
| `Array`   | `Scalar` | `Address`, `Field`, `Group` |

***

### `commit.ped64`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Pedersen commitment up to a 64-bit input in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment is an `Address`, `Field`, or `Group` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given `Struct` value exceeds the 64-bit limit.

#### Example Usage

```aleo
commit.ped64 r0 r1 into r2 as field;
```

#### Supported Types

| First     | Second   | Destination                 |
|-----------|----------|:----------------------------|
| `Boolean` | `Scalar` | `Address`, `Field`, `Group` |
| `I8`      | `Scalar` | `Address`, `Field`, `Group` |
| `I16`     | `Scalar` | `Address`, `Field`, `Group` |
| `I32`     | `Scalar` | `Address`, `Field`, `Group` |
| `U8`      | `Scalar` | `Address`, `Field`, `Group` |
| `U16`     | `Scalar` | `Address`, `Field`, `Group` |
| `U32`     | `Scalar` | `Address`, `Field`, `Group` |
| `Struct`  | `Scalar` | `Address`, `Field`, `Group` |
| `Array`   | `Scalar` | `Address`, `Field`, `Group` |

***

### `commit.ped128`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Pedersen commitment up to a 128-bit input in `first`, and some randomness in `second`, storing the commitment in `destination`. Randomness should always be a `Scalar` value, and the produced commitment is an `Address`, `Field`, or `Group` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given `Struct` value exceeds the 128-bit limit.

#### Example Usage

```aleo
commit.ped128 r0 r1 into r2 as group;
```

#### Supported Types

| First     | Second   | Destination                 |
|-----------|----------|:----------------------------|
| `Boolean` | `Scalar` | `Address`, `Field`, `Group` |
| `I8`      | `Scalar` | `Address`, `Field`, `Group` |
| `I16`     | `Scalar` | `Address`, `Field`, `Group` |
| `I32`     | `Scalar` | `Address`, `Field`, `Group` |
| `I64`     | `Scalar` | `Address`, `Field`, `Group` |
| `U8`      | `Scalar` | `Address`, `Field`, `Group` |
| `U16`     | `Scalar` | `Address`, `Field`, `Group` |
| `U32`     | `Scalar` | `Address`, `Field`, `Group` |
| `U64`     | `Scalar` | `Address`, `Field`, `Group` |
| `Struct`  | `Scalar` | `Address`, `Field`, `Group` |
| `Array`   | `Scalar` | `Address`, `Field`, `Group` |

***

### `div`

[Back to Top](#table-of-standard-opcodes)

#### Description

Divides `first` by `second`, storing the outcome in `destination`. Halts on division by zero.

For integer types, this operation performs truncated division. Furthermore, a constraint is added to check for underflow. This underflow happens when dividing the minimum value of a signed integer type by `-1`. For example, `div -128i8 -1i8` would result in underflow, since `128` cannot be represented as an `i8`.

For cases where wrapping semantics are needed for integer types, see the [div.w](#div.w) instruction.

#### Example Usage

```aleo
div r0 r1 into r2;
```

#### Supported Types

| First   | Second  | Destination |
|---------|---------|:------------|
| `Field` | `Field` | `Field`     |
| `I8`    | `I8`    | `I8`        |
| `I16`   | `I16`   | `I16`       |
| `I32`   | `I32`   | `I32`       |
| `I64`   | `I64`   | `I64`       |
| `I128`  | `I128`  | `I128`      |
| `U8`    | `U8`    | `U8`        |
| `U16`   | `U16`   | `U16`       |
| `U32`   | `U32`   | `U32`       |
| `U64`   | `U64`   | `U64`       |
| `U128`  | `U128`  | `U128`      |

***

### `div.w` {#div.w}

[Back to Top](#table-of-standard-opcodes)

#### Description

Divides `first` by `second`, wrapping around at the boundary of the type, and storing the outcome in `destination`.

#### Example Usage

```aleo
div.w r0 r1 into r2;
```

#### Supported Types

| First  | Second | Destination |
|--------|--------|:------------|
| `I8`   | `I8`   | `I8`        |
| `I16`  | `I16`  | `I16`       |
| `I32`  | `I32`  | `I32`       |
| `I64`  | `I64`  | `I64`       |
| `I128` | `I128` | `I128`      |
| `U8`   | `U8`   | `U8`        |
| `U16`  | `U16`  | `U16`       |
| `U32`  | `U32`  | `U32`       |
| `U64`  | `U64`  | `U64`       |
| `U128` | `U128` | `U128`      |

***

### `double`

[Back to Top](#table-of-standard-opcodes)

#### Description

Doubles the input, storing the outcome in `destination`.

#### Example Usage

```aleo
double r0 into r1;
```

#### Supported Types

| Input   | Destination |
|---------|-------------|
| `Field` | `Field`     |
| `Group` | `Group`     |

***

### `gt`

[Back to Top](#table-of-standard-opcodes)

#### Description

Checks if `first` is greater than `second`, storing the result in `destination`.

#### Example Usage

```aleo
gt r0 r1 into r2;
```

#### Supported Types

| First     | Second    | Destination |
|-----------|-----------|-------------|
| `Field`   | `Field`   | `Boolean`   |
| `I8`      | `I8`      | `Boolean`   |
| `I16`     | `I16`     | `Boolean`   |
| `I32`     | `I32`     | `Boolean`   |
| `I64`     | `I64`     | `Boolean`   |
| `I128`    | `I128`    | `Boolean`   |
| `U8`      | `U8`      | `Boolean`   |
| `U16`     | `U16`     | `Boolean`   |
| `U32`     | `U32`     | `Boolean`   |
| `U64`     | `U64`     | `Boolean`   |
| `U128`    | `U128`    | `Boolean`   |
| `Scalar`  | `Scalar`  | `Boolean`   |

***

### `gte`

[Back to Top](#table-of-standard-opcodes)

#### Description

Checks if `first` is greater than or equal to `second`, storing the result in `destination`.

#### Example Usage

```aleo
gte r0 r1 into r2;
```

#### Supported Types

| First    | Second   | Destination |
|----------|----------|-------------|
| `Field`  | `Field`  | `Boolean`   |
| `I8`     | `I8`     | `Boolean`   |
| `I16`    | `I16`    | `Boolean`   |
| `I32`    | `I32`    | `Boolean`   |
| `I64`    | `I64`    | `Boolean`   |
| `I128`   | `I128`   | `Boolean`   |
| `U8`     | `U8`     | `Boolean`   |
| `U16`    | `U16`    | `Boolean`   |
| `U32`    | `U32`    | `Boolean`   |
| `U64`    | `U64`    | `Boolean`   |
| `U128`   | `U128`   | `Boolean`   |
| `Scalar` | `Scalar` | `Boolean`   |

***

### `hash.bhp256`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 256-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given input is smaller than 129 bits.

#### Example Usage

```aleo
hash.bhp256 r0 into r1 as address;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.bhp512`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 512-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given input is smaller than 171 bits.

#### Example Usage

```aleo
hash.bhp512 r0 into r1 as field;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.bhp768`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 768-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given input is smaller than 129 bits.

#### Example Usage

```aleo
hash.bhp768 r0 into r1 as group;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.bhp1024`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 1024-bit chunks in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given input is smaller than 171 bits.

#### Example Usage

```aleo
hash.bhp1024 r0 into r1 as scalar;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.keccak256`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs a Keccak hash on `first`, storing a 256-bit digest in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.keccak256 r0 into r1 as address;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.keccak384`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs a Keccak hash on `first`, storing a 384-bit digest in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.keccak384 r0 into r1 as field;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.keccak512`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs a Keccak hash on `first`, storing a 512-bit digest in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.keccak512 r0 into r1 as group;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.ped64`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Pedersen hash up to a 64-bit input in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given `Struct` value exceeds the 64-bit limit.

#### Example Usage

```aleo
hash.ped64 r0 into r1 as address;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.ped128`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Pedersen hash up to a 128-bit input in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given `Struct` value exceeds the 128-bit limit.

#### Example Usage

```aleo
hash.ped128 r0 into r1 as field;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.psd2`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a Poseidon hash with an input rate of 2, from an input in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.psd2 r0 into r1 as group;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.psd4`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a Poseidon hash with an input rate of 4, from an input in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.psd4 r0 into r1 as scalar;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.psd8`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a Poseidon hash with an input rate of 8, from an input in `first`, storing the hash in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.psd8 r0 into r1 as address;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.sha3_256`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a SHA3-256 hash, from an input in `first`, storing the 256-bit digest in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.sha3_256 r0 into r1 as field;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.sha3_384`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a SHA3-384 hash, from an input in `first`, storing the 384-bit digest in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.sha3_384 r0 into r1 as group;
```

#### Supported Types
| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.sha3_512`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a SHA3-512 hash, from an input in `first`, storing the 512-bit digest in `destination`. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.sha3_512 r0 into r1 as scalar;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.bhp256.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 256-bit chunks in `first`, storing the hash in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given input is smaller than 129 bits.

#### Example Usage

```aleo
hash.bhp256.raw r0 into r1 as address;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.bhp512.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 512-bit chunks in `first`, storing the hash in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given input is smaller than 171 bits.

#### Example Usage

```aleo
hash.bhp512.raw r0 into r1 as address;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.bhp768.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 768-bit chunks in `first`, storing the hash in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given input is smaller than 213 bits.

#### Example Usage

```aleo
hash.bhp768.raw r0 into r1 as address;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.bhp1024.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Bowe-Hopwood-Pedersen hash on inputs of 1024-bit chunks in `first`, storing the hash in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given input is smaller than 255 bits.

#### Example Usage

```aleo
hash.bhp1024.raw r0 into r1 as address;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.keccak256.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs a Keccak hash on `first`, storing a 256-bit digest in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.keccak256.raw r0 into r1 as address;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.keccak384.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs a Keccak hash on `first`, storing a 384-bit digest in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.keccak384.raw r0 into r1 as field;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.keccak512.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs a Keccak hash on `first`, storing a 512-bit digest in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.keccak512.raw r0 into r1 as field;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.ped64.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Pedersen hash up to a 64-bit input in `first`, storing the hash in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given `Struct` value exceeds the 64-bit limit.

#### Example Usage

```aleo
hash.ped64.raw r0 into r1 as address;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.ped128.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes a Pedersen hash up to a 128-bit input in `first`, storing the hash in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

The compiler will throw an error if the given `Struct` value exceeds the 128-bit limit.

#### Example Usage

```aleo
hash.ped128.raw r0 into r1 as address;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.psd2.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a Poseidon hash with an input rate of 2, from an input in `first`, storing the hash in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.psd2.raw r0 into r1 as group;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.psd4.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a Poseidon hash with an input rate of 4, from an input in `first`, storing the hash in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.psd4.raw r0 into r1 as group;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.psd8.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a Poseidon hash with an input rate of 8, from an input in `first`, storing the hash in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.psd8.raw r0 into r1 as address;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.sha3_256.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a SHA3-256 hash, from an input in `first`, storing the 256-bit digest in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.sha3_256.raw r0 into r1 as field;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.sha3_384.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a SHA3-384 hash, from an input in `first`, storing the 384-bit digest in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.sha3_384.raw r0 into r1 as group;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.sha3_512.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a SHA3-512 hash, from an input in `first`, storing the 512-bit digest in `destination`. This variant uses raw bit form without Aleo variant bits. The produced hash will always be an arithmetic (`U8`, `U16`, `U32`, `U64`, `U128`, `I8`, `I16`, `I32`,`I64`,`I128`, `Field`, `Group`, or `Scalar`) or `Address` value, as specified via `as` at the end of the instruction.

#### Example Usage

```aleo
hash.sha3_512.raw r0 into r1 as scalar;
```

#### Supported Types

| First     | Destination                                                                                               |
|-----------|:----------------------------------------------------------------------------------------------------------|
| `Array`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Address` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Boolean` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Field`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Group`   | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `I128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U8`      | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U16`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U32`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U64`     | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `U128`    | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Scalar`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |
| `Struct`  | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`,`I64`,`I128`, `U8`, `U16`, `U32`, `U64`, `U128` |

***

### `hash.keccak256.native`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs a Keccak hash on `first`, storing a 256-bit digest as a bit array in `destination`. This variant performs the underlying hash returning a bit array `[bool; 256]`.

#### Example Usage

```aleo
hash.keccak256.native r0 into r1;
```

#### Supported Types

| First     | Destination |
|-----------|-------------|
| `Array`   | `[bool; 256]` |
| `Address` | `[bool; 256]` |
| `Boolean` | `[bool; 256]` |
| `Field`   | `[bool; 256]` |
| `Group`   | `[bool; 256]` |
| `I8`      | `[bool; 256]` |
| `I16`     | `[bool; 256]` |
| `I32`     | `[bool; 256]` |
| `I64`     | `[bool; 256]` |
| `I128`    | `[bool; 256]` |
| `U8`      | `[bool; 256]` |
| `U16`     | `[bool; 256]` |
| `U32`     | `[bool; 256]` |
| `U64`     | `[bool; 256]` |
| `U128`    | `[bool; 256]` |
| `Scalar`  | `[bool; 256]` |
| `Struct`  | `[bool; 256]` |

***

### `hash.keccak256.native.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs a Keccak hash on `first`, storing a 256-bit digest as a bit array in `destination`. This variant uses raw bit form without Aleo variant bits and performs the underlying hash returning a bit array `[bool; 256]`.

#### Example Usage

```aleo
hash.keccak256.native.raw r0 into r1;
```

#### Supported Types

| First     | Destination |
|-----------|-------------|
| `Array`   | `[bool; 256]` |
| `Address` | `[bool; 256]` |
| `Boolean` | `[bool; 256]` |
| `Field`   | `[bool; 256]` |
| `Group`   | `[bool; 256]` |
| `I8`      | `[bool; 256]` |
| `I16`     | `[bool; 256]` |
| `I32`     | `[bool; 256]` |
| `I64`     | `[bool; 256]` |
| `I128`    | `[bool; 256]` |
| `U8`      | `[bool; 256]` |
| `U16`     | `[bool; 256]` |
| `U32`     | `[bool; 256]` |
| `U64`     | `[bool; 256]` |
| `U128`    | `[bool; 256]` |
| `Scalar`  | `[bool; 256]` |
| `Struct`  | `[bool; 256]` |

***

### `hash.keccak384.native`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs a Keccak hash on `first`, storing a 384-bit digest as a bit array in `destination`. This variant performs the underlying hash returning a bit array `[bool; 384]`.

#### Example Usage

```aleo
hash.keccak384.native r0 into r1;
```

#### Supported Types

| First     | Destination |
|-----------|-------------|
| `Array`   | `[bool; 384]` |
| `Address` | `[bool; 384]` |
| `Boolean` | `[bool; 384]` |
| `Field`   | `[bool; 384]` |
| `Group`   | `[bool; 384]` |
| `I8`      | `[bool; 384]` |
| `I16`     | `[bool; 384]` |
| `I32`     | `[bool; 384]` |
| `I64`     | `[bool; 384]` |
| `I128`    | `[bool; 384]` |
| `U8`      | `[bool; 384]` |
| `U16`     | `[bool; 384]` |
| `U32`     | `[bool; 384]` |
| `U64`     | `[bool; 384]` |
| `U128`    | `[bool; 384]` |
| `Scalar`  | `[bool; 384]` |
| `Struct`  | `[bool; 384]` |

***

### `hash.keccak384.native.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs a Keccak hash on `first`, storing a 384-bit digest as a bit array in `destination`. This variant uses raw bit form without Aleo variant bits and performs the underlying hash returning a bit array `[bool; 384]`.

#### Example Usage

```aleo
hash.keccak384.native.raw r0 into r1;
```

#### Supported Types

| First     | Destination |
|-----------|-------------|
| `Array`   | `[bool; 384]` |
| `Address` | `[bool; 384]` |
| `Boolean` | `[bool; 384]` |
| `Field`   | `[bool; 384]` |
| `Group`   | `[bool; 384]` |
| `I8`      | `[bool; 384]` |
| `I16`     | `[bool; 384]` |
| `I32`     | `[bool; 384]` |
| `I64`     | `[bool; 384]` |
| `I128`    | `[bool; 384]` |
| `U8`      | `[bool; 384]` |
| `U16`     | `[bool; 384]` |
| `U32`     | `[bool; 384]` |
| `U64`     | `[bool; 384]` |
| `U128`    | `[bool; 384]` |
| `Scalar`  | `[bool; 384]` |
| `Struct`  | `[bool; 384]` |

***

### `hash.keccak512.native`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs a Keccak hash on `first`, storing a 512-bit digest as a bit array in `destination`. This variant performs the underlying hash returning a bit array `[bool; 512]`.

#### Example Usage

```aleo
hash.keccak512.native r0 into r1;
```

#### Supported Types

| First     | Destination |
|-----------|-------------|
| `Array`   | `[bool; 512]` |
| `Address` | `[bool; 512]` |
| `Boolean` | `[bool; 512]` |
| `Field`   | `[bool; 512]` |
| `Group`   | `[bool; 512]` |
| `I8`      | `[bool; 512]` |
| `I16`     | `[bool; 512]` |
| `I32`     | `[bool; 512]` |
| `I64`     | `[bool; 512]` |
| `I128`    | `[bool; 512]` |
| `U8`      | `[bool; 512]` |
| `U16`     | `[bool; 512]` |
| `U32`     | `[bool; 512]` |
| `U64`     | `[bool; 512]` |
| `U128`    | `[bool; 512]` |
| `Scalar`  | `[bool; 512]` |
| `Struct`  | `[bool; 512]` |

***

### `hash.keccak512.native.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs a Keccak hash on `first`, storing a 512-bit digest as a bit array in `destination`. This variant uses raw bit form without Aleo variant bits and performs the underlying hash returning a bit array `[bool; 512]`.

#### Example Usage

```aleo
hash.keccak512.native.raw r0 into r1;
```

#### Supported Types

| First     | Destination |
|-----------|-------------|
| `Array`   | `[bool; 512]` |
| `Address` | `[bool; 512]` |
| `Boolean` | `[bool; 512]` |
| `Field`   | `[bool; 512]` |
| `Group`   | `[bool; 512]` |
| `I8`      | `[bool; 512]` |
| `I16`     | `[bool; 512]` |
| `I32`     | `[bool; 512]` |
| `I64`     | `[bool; 512]` |
| `I128`    | `[bool; 512]` |
| `U8`      | `[bool; 512]` |
| `U16`     | `[bool; 512]` |
| `U32`     | `[bool; 512]` |
| `U64`     | `[bool; 512]` |
| `U128`    | `[bool; 512]` |
| `Scalar`  | `[bool; 512]` |
| `Struct`  | `[bool; 512]` |

***

### `hash.sha3_256.native`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a SHA3-256 hash, from an input in `first`, storing the 256-bit digest as a bit array in `destination`. This variant performs the underlying hash returning a bit array `[bool; 256]`.

#### Example Usage

```aleo
hash.sha3_256.native r0 into r1;
```

#### Supported Types

| First     | Destination |
|-----------|-------------|
| `Array`   | `[bool; 256]` |
| `Address` | `[bool; 256]` |
| `Boolean` | `[bool; 256]` |
| `Field`   | `[bool; 256]` |
| `Group`   | `[bool; 256]` |
| `I8`      | `[bool; 256]` |
| `I16`     | `[bool; 256]` |
| `I32`     | `[bool; 256]` |
| `I64`     | `[bool; 256]` |
| `I128`    | `[bool; 256]` |
| `U8`      | `[bool; 256]` |
| `U16`     | `[bool; 256]` |
| `U32`     | `[bool; 256]` |
| `U64`     | `[bool; 256]` |
| `U128`    | `[bool; 256]` |
| `Scalar`  | `[bool; 256]` |
| `Struct`  | `[bool; 256]` |

***

### `hash.sha3_256.native.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a SHA3-256 hash, from an input in `first`, storing the 256-bit digest as a bit array in `destination`. This variant uses raw bit form without Aleo variant bits and performs the underlying hash returning a bit array `[bool; 256]`.

#### Example Usage

```aleo
hash.sha3_256.native.raw r0 into r1;
```

#### Supported Types

| First     | Destination |
|-----------|-------------|
| `Array`   | `[bool; 256]` |
| `Address` | `[bool; 256]` |
| `Boolean` | `[bool; 256]` |
| `Field`   | `[bool; 256]` |
| `Group`   | `[bool; 256]` |
| `I8`      | `[bool; 256]` |
| `I16`     | `[bool; 256]` |
| `I32`     | `[bool; 256]` |
| `I64`     | `[bool; 256]` |
| `I128`    | `[bool; 256]` |
| `U8`      | `[bool; 256]` |
| `U16`     | `[bool; 256]` |
| `U32`     | `[bool; 256]` |
| `U64`     | `[bool; 256]` |
| `U128`    | `[bool; 256]` |
| `Scalar`  | `[bool; 256]` |
| `Struct`  | `[bool; 256]` |

***

### `hash.sha3_384.native`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a SHA3-384 hash, from an input in `first`, storing the 384-bit digest as a bit array in `destination`. This variant performs the underlying hash returning a bit array `[bool; 384]`.

#### Example Usage

```aleo
hash.sha3_384.native r0 into r1;
```

#### Supported Types

| First     | Destination |
|-----------|-------------|
| `Array`   | `[bool; 384]` |
| `Address` | `[bool; 384]` |
| `Boolean` | `[bool; 384]` |
| `Field`   | `[bool; 384]` |
| `Group`   | `[bool; 384]` |
| `I8`      | `[bool; 384]` |
| `I16`     | `[bool; 384]` |
| `I32`     | `[bool; 384]` |
| `I64`     | `[bool; 384]` |
| `I128`    | `[bool; 384]` |
| `U8`      | `[bool; 384]` |
| `U16`     | `[bool; 384]` |
| `U32`     | `[bool; 384]` |
| `U64`     | `[bool; 384]` |
| `U128`    | `[bool; 384]` |
| `Scalar`  | `[bool; 384]` |
| `Struct`  | `[bool; 384]` |

***

### `hash.sha3_384.native.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a SHA3-384 hash, from an input in `first`, storing the 384-bit digest as a bit array in `destination`. This variant uses raw bit form without Aleo variant bits and performs the underlying hash returning a bit array `[bool; 384]`.

#### Example Usage

```aleo
hash.sha3_384.native.raw r0 into r1;
```

#### Supported Types

| First     | Destination |
|-----------|-------------|
| `Array`   | `[bool; 384]` |
| `Address` | `[bool; 384]` |
| `Boolean` | `[bool; 384]` |
| `Field`   | `[bool; 384]` |
| `Group`   | `[bool; 384]` |
| `I8`      | `[bool; 384]` |
| `I16`     | `[bool; 384]` |
| `I32`     | `[bool; 384]` |
| `I64`     | `[bool; 384]` |
| `I128`    | `[bool; 384]` |
| `U8`      | `[bool; 384]` |
| `U16`     | `[bool; 384]` |
| `U32`     | `[bool; 384]` |
| `U64`     | `[bool; 384]` |
| `U128`    | `[bool; 384]` |
| `Scalar`  | `[bool; 384]` |
| `Struct`  | `[bool; 384]` |

***

### `hash.sha3_512.native`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a SHA3-512 hash, from an input in `first`, storing the 512-bit digest as a bit array in `destination`. This variant performs the underlying hash returning a bit array `[bool; 512]`.

#### Example Usage

```aleo
hash.sha3_512.native r0 into r1;
```

#### Supported Types

| First     | Destination |
|-----------|-------------|
| `Array`   | `[bool; 512]` |
| `Address` | `[bool; 512]` |
| `Boolean` | `[bool; 512]` |
| `Field`   | `[bool; 512]` |
| `Group`   | `[bool; 512]` |
| `I8`      | `[bool; 512]` |
| `I16`     | `[bool; 512]` |
| `I32`     | `[bool; 512]` |
| `I64`     | `[bool; 512]` |
| `I128`    | `[bool; 512]` |
| `U8`      | `[bool; 512]` |
| `U16`     | `[bool; 512]` |
| `U32`     | `[bool; 512]` |
| `U64`     | `[bool; 512]` |
| `U128`    | `[bool; 512]` |
| `Scalar`  | `[bool; 512]` |
| `Struct`  | `[bool; 512]` |

***

### `hash.sha3_512.native.raw`

[Back to Top](#table-of-standard-opcodes)

#### Description

Calculates a SHA3-512 hash, from an input in `first`, storing the 512-bit digest as a bit array in `destination`. This variant uses raw bit form without Aleo variant bits and performs the underlying hash returning a bit array `[bool; 512]`.

#### Example Usage

```aleo
hash.sha3_512.native.raw r0 into r1;
```

#### Supported Types

| First     | Destination |
|-----------|-------------|
| `Array`   | `[bool; 512]` |
| `Address` | `[bool; 512]` |
| `Boolean` | `[bool; 512]` |
| `Field`   | `[bool; 512]` |
| `Group`   | `[bool; 512]` |
| `I8`      | `[bool; 512]` |
| `I16`     | `[bool; 512]` |
| `I32`     | `[bool; 512]` |
| `I64`     | `[bool; 512]` |
| `I128`    | `[bool; 512]` |
| `U8`      | `[bool; 512]` |
| `U16`     | `[bool; 512]` |
| `U32`     | `[bool; 512]` |
| `U64`     | `[bool; 512]` |
| `U128`    | `[bool; 512]` |
| `Scalar`  | `[bool; 512]` |
| `Struct`  | `[bool; 512]` |

***

### `inv`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes the multiplicative inverse of the input, storing the outcome in `destination`.

#### Example Usage

```aleo
inv r0 into r1;
```

#### Supported Types

| Input   | Destination |
|---------|-------------|
| `Field` | `Field`     |

***

### `is.eq`

[Back to Top](#table-of-standard-opcodes)

#### Description

Compares `first` and `second`, storing the result in `destination`.

#### Example Usage

```aleo
is.eq r0 r1 into r2;
```

#### Supported Types

| First       | Second      | Destination |
|-------------|-------------|-------------|
| `Address`   | `Address`   | `Boolean`   |
| `Boolean`   | `Boolean`   | `Boolean`   |
| `Field`     | `Field`     | `Boolean`   |
| `Group`     | `Group`     | `Boolean`   |
| `I8`        | `I8`        | `Boolean`   |
| `I16`       | `I16`       | `Boolean`   |
| `I32`       | `I32`       | `Boolean`   |
| `I64`       | `I64`       | `Boolean`   |
| `I128`      | `I128`      | `Boolean`   |
| `U8`        | `U8`        | `Boolean`   |
| `U16`       | `U16`       | `Boolean`   |
| `U32`       | `U32`       | `Boolean`   |
| `U64`       | `U64`       | `Boolean`   |
| `U128`      | `U128`      | `Boolean`   |
| `Scalar`    | `Scalar`    | `Boolean`   |
| `Signature` | `Signature` | `Boolean`   |
| `Struct`    | `Struct`    | `Boolean`   |
| `Record`    | `Record`    | `Boolean`   |

***

### `is.neq`

[Back to Top](#table-of-standard-opcodes)

#### Description

Returns true if `first` is not equal to `second`, storing the result in `destination`.

#### Example Usage

```aleo
is.neq r0 r1 into r2;
```

#### Supported Types

| First       | Second      | Destination |
|-------------|-------------|-------------|
| `Address`   | `Address`   | `Boolean`   |
| `Boolean`   | `Boolean`   | `Boolean`   |
| `Field`     | `Field`     | `Boolean`   |
| `Group`     | `Group`     | `Boolean`   |
| `I8`        | `I8`        | `Boolean`   |
| `I16`       | `I16`       | `Boolean`   |
| `I32`       | `I32`       | `Boolean`   |
| `I64`       | `I64`       | `Boolean`   |
| `I128`      | `I128`      | `Boolean`   |
| `U8`        | `U8`        | `Boolean`   |
| `U16`       | `U16`       | `Boolean`   |
| `U32`       | `U32`       | `Boolean`   |
| `U64`       | `U64`       | `Boolean`   |
| `U128`      | `U128`      | `Boolean`   |
| `Scalar`    | `Scalar`    | `Boolean`   |
| `Signature` | `Signature` | `Boolean`   |
| `Struct`    | `Struct`    | `Boolean`   |
| `Record`    | `Record`    | `Boolean`   |

***

### `lt`

[Back to Top](#table-of-standard-opcodes)

#### Description

Checks if `first` is less than `second`, storing the outcome in `destination`.

#### Example Usage

```aleo
lt r0 r1 into r2;
```

#### Supported Types

| First    | Second   | Destination |
|----------|----------|-------------|
| `Field`  | `Field`  | `Boolean`   |
| `I8`     | `I8`     | `Boolean`   |
| `I16`    | `I16`    | `Boolean`   |
| `I32`    | `I32`    | `Boolean`   |
| `I64`    | `I64`    | `Boolean`   |
| `I128`   | `I128`   | `Boolean`   |
| `U8`     | `U8`     | `Boolean`   |
| `U16`    | `U16`    | `Boolean`   |
| `U32`    | `U32`    | `Boolean`   |
| `U64`    | `U64`    | `Boolean`   |
| `U128`   | `U128`   | `Boolean`   |
| `Scalar` | `Scalar` | `Boolean`   |

***

### `lte`

[Back to Top](#table-of-standard-opcodes)

#### Description

Checks if `first` is less than or equal to `second`, storing the outcome in `destination`.

#### Example Usage

```aleo
lte r0 r1 into r2;
```

#### Supported Types

| First    | Second   | Destination |
|----------|----------|-------------|
| `Field`  | `Field`  | `Boolean`   |
| `I8`     | `I8`     | `Boolean`   |
| `I16`    | `I16`    | `Boolean`   |
| `I32`    | `I32`    | `Boolean`   |
| `I64`    | `I64`    | `Boolean`   |
| `I128`   | `I128`   | `Boolean`   |
| `U8`     | `U8`     | `Boolean`   |
| `U16`    | `U16`    | `Boolean`   |
| `U32`    | `U32`    | `Boolean`   |
| `U64`    | `U64`    | `Boolean`   |
| `U128`   | `U128`   | `Boolean`   |
| `Scalar` | `Scalar` | `Boolean`   |

***

### `mod`

[Back to Top](#table-of-standard-opcodes)

#### Description

Takes the modulus of `first` with respect to `second`, storing the outcome in `destination`. Halts if `second` is zero.

The semantics of this operation are consistent with the mathematical definition of modulo operation.

#### Example Usage

```aleo
mod r0 r1 into r2;
```

#### Supported Types

| First  | Second | Destination |
|--------|--------|-------------|
| `U8`   | `U8`   | `U8`        |
| `U16`  | `U16`  | `U16`       |
| `U32`  | `U32`  | `U32`       |
| `U64`  | `U64`  | `U64`       |
| `U128` | `U128` | `U128`      |

***

### `mul`

[Back to Top](#table-of-standard-opcodes)

#### Description

Multiplies `first` with `second`, storing the outcome in `destination`.

For integer types, a constraint is added to check for overflow/underflow. For cases where wrapping semantics are needed for integer types, see the [mul.w](#mul.w) instruction.

#### Example Usage

```aleo
mul r0 r1 into r2;
```

#### Supported Types

| First    | Second   | Destination |
|----------|----------|-------------|
| `Field`  | `Field`  | `Field`     |
| `Group`  | `Scalar` | `Group`     |
| `Scalar` | `Group`  | `Group`     |
| `I8`     | `I8`     | `I8`        |
| `I16`    | `I16`    | `I16`       |
| `I32`    | `I32`    | `I32`       |
| `I64`    | `I64`    | `I64`       |
| `I128`   | `I128`   | `I128`      |
| `U8`     | `U8`     | `U8`        |
| `U16`    | `U16`    | `U16`       |
| `U32`    | `U32`    | `U32`       |
| `U64`    | `U64`    | `U64`       |
| `U128`   | `U128`   | `U128`      |

***

### `mul.w` {#mul.w}

[Back to Top](#table-of-standard-opcodes)

#### Description

Multiplies `first` with `second`, wrapping around at the boundary of the type, and storing the outcome in `destination`.

#### Example Usage

```aleo
mul.w r0 r1 into r2;
```

#### Supported Types

| First  | Second | Destination |
|--------|--------|-------------|
| `I8`   | `I8`   | `I8`        |
| `I16`  | `I16`  | `I16`       |
| `I32`  | `I32`  | `I32`       |
| `I64`  | `I64`  | `I64`       |
| `I128` | `I128` | `I128`      |
| `U8`   | `U8`   | `U8`        |
| `U16`  | `U16`  | `U16`       |
| `U32`  | `U32`  | `U32`       |
| `U64`  | `U64`  | `U64`       |
| `U128` | `U128` | `U128`      |

***

### `nand`

[Back to Top](#table-of-standard-opcodes)

#### Description

Returns false only if `first` and `second` are true, storing the outcome in `destination`.

#### Example Usage

```aleo
nand r0 r1 into r2;
```

#### Supported Types

| First     | Second    | Destination |
|-----------|-----------|-------------|
| `Boolean` | `Boolean` | `Boolean`   |

***

### `neg`

[Back to Top](#table-of-standard-opcodes)

#### Description

Negates `first`, storing the outcome in `destination`.

For signed integer types, calling `neg` on the minimum value is an invalid operation. For example, the input `-128i8` would not be valid since `128` cannot be represented as an `i8`.

#### Example Usage

```aleo
neg r0 into r1;
```

#### Supported Types

| Input   | Destination |
|---------|-------------|
| `Field` | `Field`     |
| `Group` | `Group`     |
| `I8`    | `I8`        |
| `I16`   | `I16`       |
| `I32`   | `I32`       |
| `I64`   | `I64`       |
| `I128`  | `I128`      |

***

### `nor`

[Back to Top](#table-of-standard-opcodes)

#### Description

Returns true when neither `first` nor `second` is true, storing the outcome in `destination`.

#### Example Usage

```aleo
nor r0 r1 into r2;
```

#### Supported Type

| First     | Second    | Destination |
|-----------|-----------|-------------|
| `Boolean` | `Boolean` | `Boolean`   |

***

### `not`

[Back to Top](#table-of-standard-opcodes)

#### Description

Perform a NOT operation on an integer (bitwise) or boolean input, storing the outcome in `destination`.

#### Example Usage

```aleo
not r0 into r1;
```

#### Supported Types

| Input     | Destination |
|-----------|-------------|
| `Boolean` | `Boolean`   |
| `I8`      | `I8`        |
| `I16`     | `I16`       |
| `I32`     | `I32`       |
| `I64`     | `I64`       |
| `I128`    | `I128`      |
| `U8`      | `U8`        |
| `U16`     | `U16`       |
| `U32`     | `U32`       |
| `U64`     | `U64`       |
| `U128`    | `U128`      |

***

### `or`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs an OR operation on integer (bitwise) or boolean `first` and `second`, storing the outcome in `destination`.

#### Example Usage

```aleo
or r0 r1 into r2;
```

#### Supported Types

| First     | Second    | Destination |
|-----------|-----------|-------------|
| `Boolean` | `Boolean` | `Boolean`   |
| `I8`      | `I8`      | `I8`        |
| `I16`     | `I16`     | `I16`       |
| `I32`     | `I32`     | `I32`       |
| `I64`     | `I64`     | `I64`       |
| `I128`    | `I128`    | `I128`      |
| `U8`      | `U8`      | `U8`        |
| `U16`     | `U16`     | `U16`       |
| `U32`     | `U32`     | `U32`       |
| `U64`     | `U64`     | `U64`       |
| `U128`    | `U128`    | `U128`      |

***

### `position`

[Back to Top](#table-of-standard-opcodes)

#### Description

The position declaration, e.g. `position <name>`, which indicates a location `name` in the program to branch execution to.  
Positions must be a lowercase alphanumeric string.  

#### Example Usage

```aleo
position skip;
```

***

### `pow`

[Back to Top](#table-of-standard-opcodes)

#### Description

Raises `first` to the power of `second`, storing the outcome in `destination`.

For integer types, a constraint is added to check for overflow/underflow. For cases where wrapping semantics are needed for integer types, see the [pow.w](#pow.w) instruction.

#### Example Usage

```aleo
pow r0 r1 into r2;
```

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First   | Second      | Destination |
|---------|-------------|-------------|
| `Field` | `Field`     | `Field`     |
| `I8`    | `Magnitude` | `I8`        |
| `I16`   | `Magnitude` | `I16`       |
| `I32`   | `Magnitude` | `I32`       |
| `I64`   | `Magnitude` | `I64`       |
| `I128`  | `Magnitude` | `I128`      |
| `U8`    | `Magnitude` | `U8`        |
| `U16`   | `Magnitude` | `U16`       |
| `U32`   | `Magnitude` | `U32`       |
| `U64`   | `Magnitude` | `U64`       |
| `U128`  | `Magnitude` | `U128`      |

***

### `pow.w` {#pow.w}

[Back to Top](#table-of-standard-opcodes)

#### Description

Raises `first` to the power of `second`, wrapping around at the boundary of the type, storing the outcome in `destination`.

#### Example Usage

```aleo
pow.w r0 r1 into r2;
```

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
|--------|-------------|-------------|
| `I8`   | `Magnitude` | `I8`        |
| `I16`  | `Magnitude` | `I16`       |
| `I32`  | `Magnitude` | `I32`       |
| `I64`  | `Magnitude` | `I64`       |
| `I128` | `Magnitude` | `I128`      |
| `U8`   | `Magnitude` | `U8`        |
| `U16`  | `Magnitude` | `U16`       |
| `U32`  | `Magnitude` | `U32`       |
| `U64`  | `Magnitude` | `U64`       |
| `U128` | `Magnitude` | `U128`      |

***

### `rand.chacha`

#### Description

The `rand.chacha` opcode is used to generate random values within the `finalize` scope. It supports a wide range of types for the random value.

#### Example Usage

```aleo
rand.chacha into r0 as field;
rand.chacha r0 into r1 as field;
rand.chacha r0 r1 into r2 as field;
rand.chacha 1u8 2i16 into r27 as u32;
```

#### Supported Types

Single can be any of the following types `Address`, `Boolean`, `Field`, `Group`, `I8`, `I16`, `I32`, `I64`, `I128`, `U8`, `U16`, `U32`, `U64`, `U128`, or `Scalar`. Composite data types such as structs and mappings are not allowed.

| First       | Second      | Destination |
|-------------|-------------|-------------|
| `Single` | `Single` | `Single` |

***

### `rem`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes the truncated remainder of `first` divided by `second`, storing the outcome in `destination`. Halts on division by zero.


A constraint is added to check for underflow.  This underflow happens when the associated division operation, [div](#div), underflows.

For cases where wrapping semantics are needed for integer types, see the [rem.w](#rem.w) instruction.

#### Example Usage

```aleo
rem r0 r1 into r2;
```

#### Supported Types

| First  | Second | Destination |
|--------|--------|-------------|
| `I8`   | `I8`   | `I8`        |
| `I16`  | `I16`  | `I16`       |
| `I32`  | `I32`  | `I32`       |
| `I64`  | `I64`  | `I64`       |
| `I128` | `I128` | `I128`      |
| `U8`   | `U8`   | `U8`        |
| `U16`  | `U16`  | `U16`       |
| `U32`  | `U32`  | `U32`       |
| `U64`  | `U64`  | `U64`       |
| `U128` | `U128` | `U128`      |

***

### `rem.w` {#rem.w}

[Back to Top](#table-of-standard-opcodes)

#### Description
Computes the truncated remainder of `first` divided by `second`, wrapping around at the boundary of the type, and storing the outcome in destination.

#### Example Usage

```aleo
rem.w r0 r1 into r2;
```

#### Supported Types

| First  | Second | Destination |
|--------|--------|-------------|
| `I8`   | `I8`   | `I8`        |
| `I16`  | `I16`  | `I16`       |
| `I32`  | `I32`  | `I32`       |
| `I64`  | `I64`  | `I64`       |
| `I128` | `I128` | `I128`      |
| `U8`   | `U8`   | `U8`        |
| `U16`  | `U16`  | `U16`       |
| `U32`  | `U32`  | `U32`       |
| `U64`  | `U64`  | `U64`       |
| `U128` | `U128` | `U128`      |

***

### `sign.verify`

[Back to Top](#table-of-standard-opcodes)

#### Description

Verifies the signature `first` against the address public key `second` and the message `third`, storing the outcome in `destination`.

#### Example Usage

```aleo
sign.verify r0 r1 r2 into r3;
```

#### Supported Types

| First       | Second    | Third     | Destination |
|-------------|-----------|-----------|-------------|
| `Signature` | `Address` | Array of `Field` | `Boolean`   |

***

### `ecdsa.verify.digest`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a 33-byte ECDSA address and a pre-computed message digest, storing the outcome in `destination`. Both the address and digest are already in raw form. The digest must be a 32-byte array.

#### Example Usage

```aleo
ecdsa.verify.digest r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third      | Destination |
|------------|------------|------------|-------------|
| `[u8; 65]` | `[u8; 33]` | `[u8; 32]` | `Boolean`   |

***

### `ecdsa.verify.digest.eth`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a 20-byte Ethereum address and a pre-computed message digest, storing the outcome in `destination`. Both the address and digest are already in raw form. The digest must be a 32-byte array.

#### Example Usage

```aleo
ecdsa.verify.digest.eth r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third      | Destination |
|------------|------------|------------|-------------|
| `[u8; 65]` | `[u8; 20]` | `[u8; 32]` | `Boolean`   |

***

### `ecdsa.verify.keccak256`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a public key and message using Keccak-256 hash, storing the outcome in `destination`. This is the Aleo variant bits form.

#### Example Usage

```aleo
ecdsa.verify.keccak256 r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third     | Destination |
|------------|------------|-----------|-------------|
| `[u8; 65]` | `[u8; 33]` | `Address` | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Field`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Group`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Scalar`  | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I8`      | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I16`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I32`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I64`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I128`    | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U8`      | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U16`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U32`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U64`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U128`    | `Boolean`   |

***

### `ecdsa.verify.keccak256.raw`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a public key and message using Keccak-256 hash, storing the outcome in `destination`. This variant uses raw bit form without metadata. The message must be byte-aligned (bit length must be a multiple of 8).

#### Example Usage

```aleo
ecdsa.verify.keccak256.raw r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third          | Destination |
|------------|------------|----------------|-------------|
| `[u8; 65]` | `[u8; 33]` | `[Address; 8]` | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Field; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Group; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Scalar; 8]`  | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I128`         | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U128`         | `Boolean`   |

***

### `ecdsa.verify.keccak256.eth`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a 20-byte Ethereum address and message using Keccak-256 hash, storing the outcome in `destination`. The address is a 20-byte Ethereum address and the message is in raw form. The message must be byte-aligned (bit length must be a multiple of 8).

#### Example Usage

```aleo
ecdsa.verify.keccak256.eth r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third          | Destination |
|------------|------------|----------------|-------------|
| `[u8; 65]` | `[u8; 20]` | `[Address; 8]` | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Field; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Group; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Scalar; 8]`  | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I128`         | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U128`         | `Boolean`   |

***

### `ecdsa.verify.keccak384`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a public key and message using Keccak-384 hash, storing the outcome in `destination`. This is the Aleo variant bits form.

#### Example Usage

```aleo
ecdsa.verify.keccak384 r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third     | Destination |
|------------|------------|-----------|-------------|
| `[u8; 65]` | `[u8; 33]` | `Address` | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Field`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Group`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Scalar`  | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I8`      | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I16`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I32`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I64`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I128`    | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U8`      | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U16`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U32`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U64`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U128`    | `Boolean`   |

***

### `ecdsa.verify.keccak384.raw`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a public key and message using Keccak-384 hash, storing the outcome in `destination`. This variant uses raw bit form without metadata. The message must be byte-aligned (bit length must be a multiple of 8).

#### Example Usage

```aleo
ecdsa.verify.keccak384.raw r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third          | Destination |
|------------|------------|----------------|-------------|
| `[u8; 65]` | `[u8; 33]` | `[Address; 8]` | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Field; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Group; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Scalar; 8]`  | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I128`         | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U128`         | `Boolean`   |

***

### `ecdsa.verify.keccak384.eth`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a 20-byte Ethereum address and message using Keccak-384 hash, storing the outcome in `destination`. The address is a 20-byte Ethereum address and the message is in raw form. The message must be byte-aligned (bit length must be a multiple of 8).

#### Example Usage

```aleo
ecdsa.verify.keccak384.eth r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third          | Destination |
|------------|------------|----------------|-------------|
| `[u8; 65]` | `[u8; 20]` | `[Address; 8]` | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Field; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Group; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Scalar; 8]`  | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I128`         | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U128`         | `Boolean`   |

***

### `ecdsa.verify.keccak512`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a public key and message using Keccak-512 hash, storing the outcome in `destination`. This is the Aleo variant bits form.

#### Example Usage

```aleo
ecdsa.verify.keccak512 r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third     | Destination |
|------------|------------|-----------|-------------|
| `[u8; 65]` | `[u8; 33]` | `Address` | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Field`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Group`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Scalar`  | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I8`      | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I16`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I32`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I64`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I128`    | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U8`      | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U16`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U32`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U64`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U128`    | `Boolean`   |

***

### `ecdsa.verify.keccak512.raw`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a public key and message using Keccak-512 hash, storing the outcome in `destination`. This variant uses raw bit form without metadata. The message must be byte-aligned (bit length must be a multiple of 8).

#### Example Usage

```aleo
ecdsa.verify.keccak512.raw r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third          | Destination |
|------------|------------|----------------|-------------|
| `[u8; 65]` | `[u8; 33]` | `[Address; 8]` | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Field; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Group; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Scalar; 8]`  | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I128`         | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U128`         | `Boolean`   |

***

### `ecdsa.verify.keccak512.eth`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a 20-byte Ethereum address and message using Keccak-512 hash, storing the outcome in `destination`. The address is a 20-byte Ethereum address and the message is in raw form. The message must be byte-aligned (bit length must be a multiple of 8).

#### Example Usage

```aleo
ecdsa.verify.keccak512.eth r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third          | Destination |
|------------|------------|----------------|-------------|
| `[u8; 65]` | `[u8; 20]` | `[Address; 8]` | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Field; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Group; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Scalar; 8]`  | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I128`         | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U128`         | `Boolean`   |

***

### `ecdsa.verify.sha3_256`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a public key and message using SHA3-256 hash, storing the outcome in `destination`. This is the Aleo variant bits form.

#### Example Usage

```aleo
ecdsa.verify.sha3_256 r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third     | Destination |
|------------|------------|-----------|-------------|
| `[u8; 65]` | `[u8; 33]` | `Address` | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Field`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Group`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Scalar`  | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I8`      | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I16`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I32`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I64`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I128`    | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U8`      | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U16`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U32`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U64`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U128`    | `Boolean`   |

***

### `ecdsa.verify.sha3_256.raw`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a public key and message using SHA3-256 hash, storing the outcome in `destination`. This variant uses raw bit form without metadata. The message must be byte-aligned (bit length must be a multiple of 8).

#### Example Usage

```aleo
ecdsa.verify.sha3_256.raw r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third          | Destination |
|------------|------------|----------------|-------------|
| `[u8; 65]` | `[u8; 33]` | `[Address; 8]` | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Field; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Group; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Scalar; 8]`  | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I128`         | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U128`         | `Boolean`   |

***

### `ecdsa.verify.sha3_256.eth`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a 20-byte Ethereum address and message using SHA3-256 hash, storing the outcome in `destination`. The address is a 20-byte Ethereum address and the message is in raw form. The message must be byte-aligned (bit length must be a multiple of 8).

#### Example Usage

```aleo
ecdsa.verify.sha3_256.eth r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third          | Destination |
|------------|------------|----------------|-------------|
| `[u8; 65]` | `[u8; 20]` | `[Address; 8]` | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Field; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Group; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Scalar; 8]`  | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I128`         | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U128`         | `Boolean`   |

***

### `ecdsa.verify.sha3_384`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a public key and message using SHA3-384 hash, storing the outcome in `destination`. This is the Aleo variant bits form.

#### Example Usage

```aleo
ecdsa.verify.sha3_384 r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third     | Destination |
|------------|------------|-----------|-------------|
| `[u8; 65]` | `[u8; 33]` | `Address` | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Field`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Group`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Scalar`  | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I8`      | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I16`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I32`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I64`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I128`    | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U8`      | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U16`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U32`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U64`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U128`    | `Boolean`   |

***

### `ecdsa.verify.sha3_384.raw`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a public key and message using SHA3-384 hash, storing the outcome in `destination`. This variant uses raw bit form without metadata. The message must be byte-aligned (bit length must be a multiple of 8).

#### Example Usage

```aleo
ecdsa.verify.sha3_384.raw r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third          | Destination |
|------------|------------|----------------|-------------|
| `[u8; 65]` | `[u8; 33]` | `[Address; 8]` | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Field; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Group; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Scalar; 8]`  | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I128`         | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U128`         | `Boolean`   |

***

### `ecdsa.verify.sha3_384.eth`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a 20-byte Ethereum address and message using SHA3-384 hash, storing the outcome in `destination`. The address is a 20-byte Ethereum address and the message is in raw form. The message must be byte-aligned (bit length must be a multiple of 8).

#### Example Usage

```aleo
ecdsa.verify.sha3_384.eth r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third          | Destination |
|------------|------------|----------------|-------------|
| `[u8; 65]` | `[u8; 20]` | `[Address; 8]` | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Field; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Group; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Scalar; 8]`  | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I128`         | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U128`         | `Boolean`   |

***

### `ecdsa.verify.sha3_512`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a public key and message using SHA3-512 hash, storing the outcome in `destination`. This is the Aleo variant bits form.

#### Example Usage

```aleo
ecdsa.verify.sha3_512 r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third     | Destination |
|------------|------------|-----------|-------------|
| `[u8; 65]` | `[u8; 33]` | `Address` | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Field`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Group`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `Scalar`  | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I8`      | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I16`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I32`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I64`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I128`    | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U8`      | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U16`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U32`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U64`     | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U128`    | `Boolean`   |

***

### `ecdsa.verify.sha3_512.raw`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a public key and message using SHA3-512 hash, storing the outcome in `destination`. This variant uses raw bit form without metadata. The message must be byte-aligned (bit length must be a multiple of 8).

#### Example Usage

```aleo
ecdsa.verify.sha3_512.raw r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third          | Destination |
|------------|------------|----------------|-------------|
| `[u8; 65]` | `[u8; 33]` | `[Address; 8]` | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Field; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Group; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `[Scalar; 8]`  | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `I128`         | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 33]` | `U128`         | `Boolean`   |

***

### `ecdsa.verify.sha3_512.eth`

[Back to Top](#table-of-cryptographic-opcodes)

#### Description

Verifies an ECDSA signature against a 20-byte Ethereum address and message using SHA3-512 hash, storing the outcome in `destination`. The address is a 20-byte Ethereum address and the message is in raw form. The message must be byte-aligned (bit length must be a multiple of 8).

#### Example Usage

```aleo
ecdsa.verify.sha3_512.eth r0 r1 r2 into r3;
```

#### Supported Types

| First      | Second     | Third          | Destination |
|------------|------------|----------------|-------------|
| `[u8; 65]` | `[u8; 20]` | `[Address; 8]` | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Field; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Group; 8]`   | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `[Scalar; 8]`  | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `I128`         | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U8`           | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U16`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U32`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U64`          | `Boolean`   |
| `[u8; 65]` | `[u8; 20]` | `U128`         | `Boolean`   |

***

### `shl`

[Back to Top](#table-of-standard-opcodes)

#### Description

Shifts `first` left by `second` bits, storing the outcome in `destination`.

#### Example Usage

```aleo
shl r0 r1 into r2;
```

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
|--------|-------------|-------------|
| `I8`   | `Magnitude` | `I8`        |
| `I16`  | `Magnitude` | `I16`       |
| `I32`  | `Magnitude` | `I32`       |
| `I64`  | `Magnitude` | `I64`       |
| `I128` | `Magnitude` | `I128`      |
| `U8`   | `Magnitude` | `U8`        |
| `U16`  | `Magnitude` | `U16`       |
| `U32`  | `Magnitude` | `U32`       |
| `U64`  | `Magnitude` | `U64`       |
| `U128` | `Magnitude` | `U128`      |

***

### `shl.w`

[Back to Top](#table-of-standard-opcodes)

#### Description

Shifts `first` left by `second` bits, wrapping around at the boundary of the type, storing the outcome in `destination`.

#### Example Usage

```aleo
shl.w r0 r1 into r2;
```

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
|--------|-------------|-------------|
| `I8`   | `Magnitude` | `I8`        |
| `I16`  | `Magnitude` | `I16`       |
| `I32`  | `Magnitude` | `I32`       |
| `I64`  | `Magnitude` | `I64`       |
| `I128` | `Magnitude` | `I128`      |
| `U8`   | `Magnitude` | `U8`        |
| `U16`  | `Magnitude` | `U16`       |
| `U32`  | `Magnitude` | `U32`       |
| `U64`  | `Magnitude` | `U64`       |
| `U128` | `Magnitude` | `U128`      |

***

### `shr`

[Back to Top](#table-of-standard-opcodes)

#### Description

Shifts `first` right by `second` bits, storing the outcome in `destination`.

#### Example Usage

```aleo
shr r0 r1 into r2;
```

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
|--------|-------------|-------------|
| `I8`   | `Magnitude` | `I8`        |
| `I16`  | `Magnitude` | `I16`       |
| `I32`  | `Magnitude` | `I32`       |
| `I64`  | `Magnitude` | `I64`       |
| `I128` | `Magnitude` | `I128`      |
| `U8`   | `Magnitude` | `U8`        |
| `U16`  | `Magnitude` | `U16`       |
| `U32`  | `Magnitude` | `U32`       |
| `U64`  | `Magnitude` | `U64`       |
| `U128` | `Magnitude` | `U128`      |

***

### `shr.w`

[Back to Top](#table-of-standard-opcodes)

#### Description

Shifts `first` right by `second` bits, wrapping around at the boundary of the type, storing the outcome in `destination`.

#### Example Usage

```aleo
shr.w r0 r1 into r2;
```

#### Supported Types

`Magnitude` can be a `U8`, `U16`, or `U32`.

| First  | Second      | Destination |
|--------|-------------|-------------|
| `I8`   | `Magnitude` | `I8`        |
| `I16`  | `Magnitude` | `I16`       |
| `I32`  | `Magnitude` | `I32`       |
| `I64`  | `Magnitude` | `I64`       |
| `I128` | `Magnitude` | `I128`      |
| `U8`   | `Magnitude` | `U8`        |
| `U16`  | `Magnitude` | `U16`       |
| `U32`  | `Magnitude` | `U32`       |
| `U64`  | `Magnitude` | `U64`       |
| `U128` | `Magnitude` | `U128`      |

***

### `square`

[Back to Top](#table-of-standard-opcodes)

#### Description

Squares the input, storing the outcome in `destination`.

#### Supported Types

| Input   | Destination |
|---------|-------------|
| `Field` | `Field`     |

#### Example Usage

```aleo
square r0 into r1;
```

***

### `sqrt`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes the square root of the input, storing the outcome in `destination`.

#### Supported Types

| Input   | Destination |
|---------|-------------|
| `Field` | `Field`     |

#### Example Usage

```aleo
sqrt r0 into r1;
```

***


### `sub`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes `first - second`, storing the outcome in `destination`.

#### Example Usage

```aleo
sub r0 r1 into r2;
```

#### Supported Types

| First   | Second  | Destination |
|---------|---------|-------------|
| `Field` | `Field` | `Field`     |
| `Group` | `Group` | `Group`     |
| `I8`    | `I8`    | `I8`        |
| `I16`   | `I16`   | `I16`       |
| `I32`   | `I32`   | `I32`       |
| `I64`   | `I64`   | `I64`       |
| `I128`  | `I128`  | `I128`      |
| `U8`    | `U8`    | `U8`        |
| `U16`   | `U16`   | `U16`       |
| `U32`   | `U32`   | `U32`       |
| `U64`   | `U64`   | `U64`       |
| `U128`  | `U128`  | `U128`      |

***

### `sub.w`

[Back to Top](#table-of-standard-opcodes)

#### Description

Computes `first - second`, wrapping around at the boundary of the type, and storing the outcome in `destination`.

#### Example Usage

```aleo
sub.w r0 r1 into r2;
```

#### Supported Types

| First  | Second | Destination |
|--------|--------|-------------|
| `I8`   | `I8`   | `I8`        |
| `I16`  | `I16`  | `I16`       |
| `I32`  | `I32`  | `I32`       |
| `I64`  | `I64`  | `I64`       |
| `I128` | `I128` | `I128`      |
| `U8`   | `U8`   | `U8`        |
| `U16`  | `U16`  | `U16`       |
| `U32`  | `U32`  | `U32`       |
| `U64`  | `U64`  | `U64`       |
| `U128` | `U128` | `U128`      |

***

### `ternary`

[Back to Top](#table-of-standard-opcodes)

#### Description

Selects `first`, if `condition` is true, otherwise selects `second`, storing the result in `destination`.

Example: `ternary r0 r1 r2 into r3`, where `r0` is the condition, `r1` is first, `r2` is second, and `r3` is the destination.

#### Example Usage

```aleo
ternary r0 r1 r2 into r3;
```

#### Supported Types

| Condition | First       | Second      | Destination |
|-----------|-------------|-------------|-------------|
| `Boolean` | `Boolean`   | `Boolean`   | `Boolean`   |
| `Boolean` | `Field`     | `Field`     | `Field`     |
| `Boolean` | `Group`     | `Group`     | `Group`     |
| `Boolean` | `I8`        | `I8`        | `I8`        |
| `Boolean` | `I16`       | `I16`       | `I16`       |
| `Boolean` | `I32`       | `I32`       | `I32`       |
| `Boolean` | `I64`       | `I64`       | `I64`       |
| `Boolean` | `I128`      | `I128`      | `I128`      |
| `Boolean` | `U8`        | `U8`        | `U8`        |
| `Boolean` | `U16`       | `U16`       | `U16`       |
| `Boolean` | `U32`       | `U32`       | `U32`       |
| `Boolean` | `U64`       | `U64`       | `U64`       |
| `Boolean` | `U128`      | `U128`      | `U128`      |
| `Boolean` | `Scalar`    | `Scalar`    | `Scalar`    |
| `Boolean` | `Signature` | `Signature` | `Signature` |

***

### `xor`

[Back to Top](#table-of-standard-opcodes)

#### Description

Performs a XOR operation on integer (bitwise) or boolean `first` and `second`, storing the outcome in `destination`.

#### Example Usage

```aleo
xor r0 r1 into r2;
```

#### Supported Types

| First     | Second    | Destination |
|-----------|-----------|-------------|
| `Boolean` | `Boolean` | `Boolean`   |
| `I8`      | `I8`      | `I8`        |
| `I16`     | `I16`     | `I16`       |
| `I32`     | `I32`     | `I32`       |
| `I64`     | `I64`     | `I64`       |
| `I128`    | `I128`    | `I128`      |
| `U8`      | `U8`      | `U8`        |
| `U16`     | `U16`     | `U16`       |
| `U32`     | `U32`     | `U32`       |
| `U64`     | `U64`     | `U64`       |
| `U128`    | `U128`    | `U128`      |

***

### `serialize.bits` {#serializebits}

[Back to Top](#table-of-standard-opcodes)

#### Description

Serializes a value into a bits array (boolean array), using Aleo variant bits. The input can be various types, and the output must be a boolean array.

#### Example Usage

```aleo
serialize.bits r0 (u32) into r1 ([boolean; 32u32]);
```

#### Supported Types

| Input | Destination |
|-------|-------------|
| `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`, `I64`, `I128`, `U8`, `U16`, `U32`, `U64`, `U128`, `[U8; N]`, `[U16; N]`, `[U32; N]`, `[U64; N]`, `[U128; N]`, `[I8; N]`, `[I16; N]`, `[I32; N]`, `[I64; N]`, `[I128; N]` | `[bool; M]` |

***

### `serialize.bits.raw` {#serializebitsraw}

[Back to Top](#table-of-standard-opcodes)

#### Description

Serializes a value into a bits array (boolean array), using raw bits without Aleo variant bits. The input can be various types, and the output must be a boolean array.

#### Example Usage

```aleo
serialize.bits.raw r0 (u32) into r1 ([boolean; 32u32]);
```

#### Supported Types

| Input | Destination |
|-------|-------------|
| `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`, `I64`, `I128`, `U8`, `U16`, `U32`, `U64`, `U128`, `[U8; N]`, `[U16; N]`, `[U32; N]`, `[U64; N]`, `[U128; N]`, `[I8; N]`, `[I16; N]`, `[I32; N]`, `[I64; N]`, `[I128; N]` | `[bool; M]` |

***

### `deserialize.bits` {#deserializebits}

[Back to Top](#table-of-standard-opcodes)

#### Description

Deserializes a bits array (boolean array) into a value, using Aleo variant bits. The input must be a boolean array, and the output can be various types.

#### Example Usage

```aleo
deserialize.bits r0 ([boolean; 256u32]) into r1 as u8;
```

#### Supported Types

| Input | Destination |
|-------|-------------|
| `[bool; N]` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`, `I64`, `I128`, `U8`, `U16`, `U32`, `U64`, `U128`, `[U8; M]`, `[U16; M]`, `[U32; M]`, `[U64; M]`, `[U128; M]`, `[I8; M]`, `[I16; M]`, `[I32; M]`, `[I64; M]`, `[I128; M]` |

***

### `deserialize.bits.raw` {#deserializebitsraw}

[Back to Top](#table-of-standard-opcodes)

#### Description

Deserializes a bits array (boolean array) into a value, using raw bits without Aleo variant bits. The input must be a boolean array, and the output can be various types.

#### Example Usage

```aleo
deserialize.bits.raw r5 ([boolean; 256u32]) into r6 ([u8; 32u32]);
```

#### Supported Types

| Input | Destination |
|-------|-------------|
| `[bool; N]` | `Address`, `Field`, `Group`, `Scalar`, `I8`, `I16`, `I32`, `I64`, `I128`, `U8`, `U16`, `U32`, `U64`, `U128`, `[U8; M]`, `[U16; M]`, `[U32; M]`, `[U64; M]`, `[U128; M]`, `[I8; M]`, `[I16; M]`, `[I32; M]`, `[I64; M]`, `[I128; M]` |

***
