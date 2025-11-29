---
id: aleovm
title: AleoVM Specification
sidebar_label: AleoVM
---

## [AleoVM](https://developer.aleo.org/specs/aleovm.pdf)

The Aleo Virtual Machine (AVM) is a computational platform integral to the Aleo blockchain, designed to run privacy-focused applications. It operates as a stack machine that executes queued instructions. Its primary function is to construct arithmetic circuits described as Rank-1 Constraint System (R1CS) from each instruction in a function. After constructing the R1CS, corresponding proofs are generated using a variation of the Marlin algorithm called Varuna. This approach allows for succinct verification of arbitrary computations by leveraging a universal and updatable Structured Reference String (SRS).
The AVM is crucial for maintaining privacy and scalability on the Aleo network. It ensures that transactions and contracts are executed while maintaining the confidentiality of the data involved, using zk-SNARKs to verify the correctness of computations without revealing the inputs or internal state.