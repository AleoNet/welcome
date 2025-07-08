---
id: specifications
title: Specifications
---

## Overview

In the context of blockchain technology, specifications are detailed descriptions of the system's architecture, components, and operations. They serve as a blueprint for developers and engineers to understand and implement the system effectively. For Aleo, the specifications focus on two main areas: the consensus mechanism and the virtual machine.


## [AleoBFT](https://developer.aleo.org/specs/aleobft.pdf)

AleoBFT is the consensus algorithm that powers the Aleo blockchain. It is designed to ensure secure and reliable agreement among validators. AleoBFT builds on concepts from Narwhal and Bullshark, optimizing for dynamic validator committees and staking participation. Validators in AleoBFT collect transactions and submit proposals, which are then endorsed by others to form cryptographic certificates. These certificates are structured into a Directed Acyclic Graph (DAG), enabling efficient ordering of transactions and preventing forks, thus ensuring a robust and scalable consensus process.

## [AleoBFT Syncing](https://developer.aleo.org/specs/aleobft_syncing.pdf)

When a validator (re)joins the network it quickly learns what it’s missing by exchanging compact “checkpoint” and “recent” block summaries with peers via periodic pings. By comparing these locators, it detects any gaps in its local copy, then asks a rotating set of peers for the missing blocks in small batches. Each returned block is cross-checked against multiple peers and its embedded sub-DAG data is applied to rebuild the recent certificate graph. Once it has filled in all gaps, the validator is fully synced and can immediately take part in proposing and endorsing new blocks.

## [AleoVM](https://developer.aleo.org/specs/aleovm.pdf)

The Aleo Virtual Machine (AVM) is a computational platform integral to the Aleo blockchain, designed to run privacy-focused applications. It operates as a stack machine that executes queued instructions. Its primary function is to construct arithmetic circuits described as Rank-1 Constraint System (R1CS) from each instruction in a function. After constructing the R1CS, corresponding proofs are generated using a variation of the Marlin algorithm called Varuna. This approach allows for succinct verification of arbitrary computations by leveraging a universal and updatable Structured Reference String (SRS).
The AVM is crucial for maintaining privacy and scalability on the Aleo network. It ensures that transactions and contracts are executed while maintaining the confidentiality of the data involved, using zk-SNARKs to verify the correctness of computations without revealing the inputs or internal state.