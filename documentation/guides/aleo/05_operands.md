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