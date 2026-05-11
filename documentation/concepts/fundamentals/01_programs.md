---
id: programs
title: Programs
sidebar_label: Programs
---

A **program** is a fundamental data structure for representing application logic and application state.

Aleo introduces a new programming language called **Aleo instructions** that enables developers to write
private web applications. Aleo instructions is a statically-typed programming language for
writing privacy-preserving, secure programs on Aleo. By leveraging zero-knowledge proofs, Aleo instructions offers computational
integrity for real-world applications.

## Program Logic

Aleo instructions is an assembly-style language with typed registers, composable functions, and syntax familiar to developers. It is well-suited to integrate with existing developer frameworks to supercharge web apps with privacy and integrity.

For syntax details and examples, see the [Aleo Instructions guide](../../guides/aleo/02_aleo_program.md).

## Program Data

### Program ID

Each program has a unique **program ID** that is stored in the program manifest `program.json`. This program ID is used to indicate the program that was run in the
consumption or production of [records](02_records.md).

### Program Input

To run a program, user-defined inputs are provided in the form of a **program input**. This input provided by the user
is fully private and not revealed to the public network, unless the user intends for it to be public.

### Program State

Each program is executed with respect to its **program state** on Aleo. A [transaction](03_transactions.md) on Aleo produces a valid state transitions by satisfying the logic of programs deployed on the network. New states are then stored either publicly as program mappings or privately as address-owned records.

### Program Output

Once a program is evaluated, its **program output** is produced, along with a zero-knowledge proof attesting to the
validity of the output.

## Limitation

Currently there are limits imposed on every program deployment to ensure validators processing times and therefore block times remain consistent and low. The limitation details can be found [in the Leo documentation](https://docs.leo-lang.org/language/programs#limitations).

Generally these limits involve the number of constraints and variables enforced by snarkVM. A large portion of them comes from hashing, which occurs silently under the hood for all arguments and return values in function calls. One way to reduce these counts is to minimize the passing of large structs, arrays, or integers (which are sometimes represented as bits).