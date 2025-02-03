---
id: contribution_guidelines
title: Welcome
sidebar_label: Contribution Guidelines
---
## Contribution Guidelines
Welcome to Aleo’s Developer Documentation. Committed to open-source principles and decentralization, Aleo actively welcomes and values contributions from the community. All forms of contributions are encouraged, including suggesting new topics and contents, or providing examples to improve clarity and usefulness.

## Introduction
Aleo is a fully open-source, decentralized, privacy-preserving Layer 1 blockchain that allows developers to create applications with built-in privacy features. Using zero-knowledge proofs, Aleo enables programmable privacy, ensuring that sensitive data remains confidential while still allowing verification. The platform offers high scalability, making it capable of supporting large-scale applications, and provides an unrestricted runtime environment that removes typical blockchain limitations. This unique combination of privacy, scalability, and flexibility makes Aleo an ideal platform for building the next generation of privacy-focused decentralized applications.   

For more details, visit the **Concepts** section to explore Aleo’s architecture and features.

## Help improve our ecosystem
### Proposing an ARC
Have ideas on development standards or protocol improvements? Follow these steps to propose an Aleo Request for Comments (ARC):
To create a new ARC proposal:
1. Open a [Github Discussion](https://github.com/AleoHQ/ARCs/discussions/categories/arcs) with your proposal using template [ARC-0000](https://github.com/ProvableHQ/ARCs/tree/master/arc-0000) and an available ARC number.
2. File a [Pull Request](https://github.com/AleoHQ/ARCs/pulls) with your proposal in a new subdirectory.

To update an existing ARC:
1. File a pull request with your changes. 
2. If the change is significant, you may be asked to open a new ARC entirely.

#### Progressing an ARC

An ARC will start as a "Draft" and progress through the following stages:

Once a proposal is up:
1. The community will discuss and review the proposal. A maintainer will monitor the ARC and change its status to "Active" once it is ready. 
    * ARCs will be prioritized by number of votes and whether a prototype exists.
    * ARCs will be discussed during certain community calls. Proposers will have the opportunity to join and participate in the discussion.
    * Up to this point, the ARC can be withdrawn by the proposer or withdrawn by the maintainers if there is no activity for a long time.
2. A governor or a team member of the Aleo Network Foundation (ANF) will create a formal proposal on Aleo governance (https://vote.aleo.org/) and initiate the voting process.
3. The community will vote on the proposal for approval.
4. If the proposal is accepted, its status will be updated to "Accepted" and the associated pull request will be merged into the ARCs repo. If the proposal is rejected, the status will be reverted to "Draft".
5. The relevant parties should complete the implementation. Updates can be made to the ARC as needed through new PRs, which do not need votes.
6. Once the implementation is finalized, the status will change from "Accepted" to "Final" or "Living", depending on the nature of the proposal. The associated discussion will be closed.

A proposal can be "Deprecated" if it is replaced by a new proposal.

#### Statuses

See [ARC-0001](https://github.com/ProvableHQ/ARCs/tree/master/arc-0001) for a detailed explanation of the statuses.

### Contributing to Aleo
Every component that forms Aleo is open-sourced and welcomes contributions of all kinds including [this documentation](./01_documentation_contribute.md). Each component has its own specific contribution guidelines, which are provided below for easy reference:  
- [DevDocs](./01_documentation_contribute.md) - This developer documentation  
- [Leo](https://docs.leo-lang.org/leo/resources#contributing) - Rust-based DSL to write programs on Aleo  
- [Provable SDK](https://github.com/ProvableHQ/sdk/tree/mainnet/sdk) - Javascript/Typescript tools for creating zero knowledge apps  
- [Create-leo-app](https://github.com/ProvableHQ/sdk/tree/mainnet/create-leo-app) - Scaffolding your first Aleo project  
- [Aleo Instruction](../guides/aleo/00_aleo_overview.md) - IR that Leo language compiles into  
- [SnarkOS](./02_snarkos_contribute.md) - The operating system or blockchain node client of Aleo  
- [SnarkVM](./03_snarkvm_contribute.md) - The virtual machine that performs verifiable computation  
