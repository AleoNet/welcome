---
id: special_operands
title: Aleo Special Operands
sidebar_label: Special Operands
---

The following lists show the special operands supported by Aleo instructions.

## Table of Special Operands
| Name                         | Description                                           |
|------------------------------|:------------------------------------------------------|
| [block.height](#blockheight) | Returns height of the block within the finalize scope |
| [block.timestamp](#blocktimestamp) | Returns the unix timestamp of the current block within the finalize scope |
| [self.signer](#selfsigner)   | Returns the user address that originated the transition |
| [self.caller](#selfcaller)   | Returns the address of the immediate caller of the program |
| [network.id](#networkid)     | Returns the ID of the network on which the program is executed |
| [edition](#edition)          | Returns the program's version number (u16) |
| [checksum](#checksum)        | Returns the SHA3-256 hash of the program string |
| [program_owner](#programowner) | Returns the address of the account that submitted the deployment transaction |

## Table of Group Generators
| Name                         | Description                                           |
|------------------------------|:------------------------------------------------------|
| [group::GEN](#groupgen)      | The generator of the prime order subgroup for the elliptic curve |
| [aleo::GENERATOR](#aleogenerator) | The point G used for Aleo account derivation |
| [aleo::GENERATOR_POWERS](#aleogeneratorpowers) | The full group bases for Aleo signature and encryption schemes |

## Specification

The following is the specification for each special operands in the Aleo Virtual Machine (AVM).

### `network.id`

[Back to Top](#table-of-special-operands)

#### Description

Returns the ID of the network on which the program is executed. This can be useful for managing network-specific program behavior.
The `network.id` command must be called within a finalize block.

Currently supported network IDs are:
- 0: Mainnet
- 1: Testnet 
- 2: Canarynet

#### Example Usage

```aleo
assert.eq network.id 0u64;  // For mainnet
```

### `block.height`

[Back to Top](#table-of-special-operands)

#### Description

Returns the height of the block within the finalize scope.  
The `block.height` command must be called within a finalize block.
The type returned is `u64`.

#### Example Usage

```aleo
assert.eq block.height 100u64;
```

### `block.timestamp` {#blocktimestamp}

[Back to Top](#table-of-special-operands)

#### Description

Returns the unix timestamp of the current block within the finalize scope.  
The `block.timestamp` command must be called within a finalize block.  
The type returned is `i64`.

#### Example Usage

```aleo
assert.eq block.timestamp 1767976339i64;
```

### `self.signer`

[Back to Top](#table-of-special-operands)

#### Description

Returns the user address that originated the transition.

#### Example Usage

```aleo
assert.eq self.signer aleo1...;
```

### `self.caller`

[Back to Top](#table-of-special-operands)

#### Description

Returns the address of the immediate caller of the program.

#### Example Usage

```aleo
assert.eq self.caller aleo1...;
```

### `edition`

[Back to Top](#table-of-special-operands)

#### Description

Returns the program's version number as an unsigned 16-bit integer (`u16`). The `edition` must be `0u16` for the initial deployment. For every valid upgrade, it must increment by exactly 1.

This operand is exclusively available within the `finalize` scope and is used for program upgradability.

#### Example Usage

```aleo
assert.eq edition 0u16;  // Check if this is the initial deployment
```

:::note
You may also refer to other program's metadata by qualifying the operand with the program name, like `Program::edition(credits.aleo)`, `Program::edition(foo.aleo)`. You will need to import the program in your Leo file to use this syntax.
:::

### `checksum`

[Back to Top](#table-of-special-operands)

#### Description

Returns a 32-byte array (`[u8; 32u32]`) representing the SHA3-256 hash of the program string. It's a unique fingerprint of the program's code.

The `checksum` is required in any deployment of an upgradable program and is used to verify that the deployed code is what was expected.

This operand is exclusively available within the `finalize` scope.

#### Example Usage

```aleo
assert.eq checksum <EXPECTED_CHECKSUM>;  // Verify program code matches expected hash
```

:::note
You may also refer to other program's metadata by qualifying the operand with the program name, like `Program::checksum(credits.aleo)`, `Program::checksum(foo.aleo)`. You will need to import the program in your Leo file to use this syntax.
:::

### `program_owner` {#programowner}

[Back to Top](#table-of-special-operands)

#### Description

Returns the `address` of the account that submitted the deployment transaction.

The `program_owner` is required in any deployment of an upgradable program and can be used to enforce access control for program upgrades.

This operand is exclusively available within the `finalize` scope.

#### Example Usage

```aleo
assert.eq program_owner <ADMIN_ADDRESS>;  // Restrict upgrades to specific admin
```

:::note
You may also refer to other program's metadata by qualifying the operand with the program name, like `Program::program_owner(credits.aleo)`, `Program::program_owner(foo.aleo)`. You will need to import the program in your Leo file to use this syntax.
:::

:::warning
Programs deployed before upgradability do not have a `program_owner`. Attempting to access it will result in a runtime error.
:::

### `group::GEN` {#groupgen}

[Back to Top](#table-of-group-generators)

#### Description

The generator of the prime order subgroup for the elliptic curve. It is used for general-purpose elliptic curve operations on the Twisted Edwards curve and as one of the defaults during specific casting operations.

#### Example Usage

```aleo
add group::GEN group::GEN into r0;
mul group::GEN 2scalar into r1;
```

### `aleo::GENERATOR` {#aleogenerator}

[Back to Top](#table-of-group-generators)

#### Description

The point `G` used for Aleo account derivation, where `view_key * G = address`. It is used in `g_scalar_multiply` for Aleo account and signature derivation. It is the first element of the group bases generated by calling `hash_to_curve` on the domain string `"AleoAccountEncryptionAndSignatureScheme0"`. These group bases are used specifically for Aleo accounts and signatures.

#### Example Usage

```aleo
function derive_address:
    input r0 as scalar.public;  // view_key
    input r1 as address.public; // expected address
    // Derive the address from the view key
    mul aleo::GENERATOR r0 into r2;
    cast r2 into r3 as address;
    assert.eq r1 r3;
```

:::note
See the [Accounts documentation](../../concepts/fundamentals/00_accounts.md#generate-an-address) for more details on how this generator is used in account derivation.
:::

### `aleo::GENERATOR_POWERS` {#aleogeneratorpowers}

[Back to Top](#table-of-group-generators)

#### Description

The group bases for the Aleo signature and encryption schemes, generated by calling `hash_to_curve` on the domain string `"AleoAccountEncryptionAndSignatureScheme0"`. This is used specifically for Aleo accounts and signatures.

The array length is 253 and valid indices are `0u32` through `252u32`.

#### Example Usage

```aleo
function example:
    input r0 as scalar.public;
    // Access the first generator power (same as aleo::GENERATOR)
    mul aleo::GENERATOR_POWERS[0u32] r0 into r1;
    
    // Verify equivalence with aleo::GENERATOR
    mul aleo::GENERATOR r0 into r2;
    assert.eq r1 r2;
    
    // These are equivalent
    assert.eq aleo::GENERATOR aleo::GENERATOR_POWERS[0u32];
```