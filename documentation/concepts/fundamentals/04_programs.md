---
id: programs
title: Programs
sidebar_label: Programs
---

**Programs** are the Aleo network's version of smart contracts.

Similar to smart contracts in other languages, Aleo programs contain various definitions of state objects, as well as functions that modify that state.  Users interact with programs by submitting transactions that specify the function to execute and the appropriate inputs to that function. Once deployed, programs cannot be deleted, and finalized interactions with them are irreversible.

Unlike other networks, however, Aleo programs contain representation of both onchain and offchain state, as well as corresponding functions to modify that state.

## Language
Programs on Aleo are written in a new programming language called **Aleo Instructions**. Aleo Instructions are statically-type and designed to be similar to assembly or bytecode in other smart contract language.  For more specific documentation on Aleo Instructions, check out the [Aleo Instructions](../../category/aleo-instructions) guide.

## Program Layout

In addition to the definitions and implementations of the previously mentioned [records](./01_records.md), [mappings](./02_mappings.md), and [transitions](./03_transitions.md), programs also contain a few additional components:

### Identifier

Each program has a unique **program identifier**:
```aleo
program example.aleo;
```

### Imports
Programs may optionally contain a list of imports at the top of the file.  These are external programs that have functions or data types that are called by the current program.
```aleo
import credits.aleo;
```

### Constructors

**Constructors** are special functions that govern how programs can be upgraded after initial deployment. Constructor logic runs on-chain only during the initial deployment and every subsequent upgrade.  As of `ConsensusV10`, constructors are required by every program and are immutable once deployed.  

There are a variety of different ways that constructor functions can be implemented.  For more information, check out the Upgrading Programs guide.

```aleo 
constructor:
    assert.eq edition 0u16;
```

## Example

Putting all the components together, a valid program might look like the following:
```aleo showLineNumbers
import credits.aleo;
program test.aleo;

record privateState:
    owner as address.private;
    amount as u8.private;

mapping publicState:
    key as u8.public;
    value as u8.public;

function transition_example:
    input r0 as privateState.record;
    cast r0.owner r0.amount into r1 as privateState.record;
    output r1 as privateState.record;

function async_transition_example:
    input r0 as privateState.record;
    async async_transition_example r0.amount into r1;
    output r1 as test.aleo/async_transition_example.future;

finalize async_transition_example:
    input r0 as u8.public;
    set r0 into publicState[r0];

constructor:
    assert.eq edition 0u16;
```
**Note**: In this example, the imported program (`credits.aleo`) is not actually used.

