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
| [self.signer](#selfsigner)   | Returns the user address that originated the transition |
| [self.caller](#selfcaller)   | Returns the address of the immediate caller of the program |
| [network.id](#networkid)     | Returns the ID of the network on which the program is executed |

## Specification

The following is the specification for each special operands in the Aleo Virtual Machine (AVM).

### `network.id`

[Back to Top](#table-of-standard-operands)

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

[Back to Top](#table-of-standard-operands)

#### Description

Returns the height of the block within the finalize scope.  
The `block.height` command must be called within a finalize block.

#### Example Usage

```aleo
assert.eq block.height 100u64;
```

### `self.signer`

[Back to Top](#table-of-standard-operands)

#### Description

Returns the user address that originated the transition.

#### Example Usage

```aleo
assert.eq self.signer aleo1...;
```

### `self.caller`

[Back to Top](#table-of-standard-operands)

#### Description

Returns the address of the immediate caller of the program.

#### Example Usage

```aleo
assert.eq self.caller aleo1...;
```

***

