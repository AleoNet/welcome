---
id: contribution_guidelines
title: Welcome
sidebar_label: Contribution Guidelines
---
## Contribution Guidelines
Welcome to Aleo’s Developer Documentation. Committed to open-source principles and decentralization, Aleo actively welcomes and values contributions from the community. All forms of contributions are encouraged, including suggesting new topics and contents, or providing examples to improve clarity and usefulness.

## Introduction
Aleo is a fully open-source, decentralized, privacy-preserving Layer 1 blockchain that allows developers to create applications with built-in privacy features. Using zero-knowledge proofs, Aleo enables programmable privacy, ensuring that sensitive data remains confidential while still allowing verification. The platform offers high scalability, making it capable of supporting large-scale applications, and provides an unrestricted runtime environment that removes typical blockchain limitations. This unique combination of privacy, scalability, and flexibility makes Aleo an ideal platform for building the next generation of privacy-focused decentralized applications.   

For more details, visit the [Concepts](../concepts) section to explore Aleo’s architecture and features.

## Help improve our ecosystem
### Proposing an ARC
Have ideas on development standards or protocol improvements? Follow these steps to propose an Aleo Request for Comments (ARC):

1. Share your idea in the `#loose-thoughts` channel on our [Discord](https://discord.gg/aleo) as a new thread.
2. The governance bot will add thumbs up and down emoji reactions to your thread to gather community feedbacks.
3. If your idea receives more than 20 thumbs up reactions:
   - Create a new discussion in the [ARCs GitHub Discussions](https://github.com/AleoNet/ARCs/discussions) to formalize your proposal.
   - Run the `/propose` command in the Discord thread to initiate the governance bot, which will:
     - Create an official proposal on the Aleo Governance website
     - Create a post in the `#proposals` channel with details of your proposal to continue discussion and a link to the governance website
4. As the author, you can edit your proposal through the Aleo Governance Interface and update the GitHub discussion accordingly.
5. The community will then discuss your proposal in the `#proposals` channel and in the GitHub discussion.
6. Finally, the community will vote on your proposal for approval.

This process ensures that ideas are thoroughly discussed and vetted by the community before becoming official ARCs.

For more details and a visual guide of this process, please refer to [here](https://hackmd.io/@edsammy2/ByTN2Rqk0#/).

<!-- markdown-link-check-disable -->
### Contributing to the Aleo stacks
Every stack that forms Aleo is open-sourced and welcomes contributions of all kinds including [this documentation](./documentation_contribute). Each stack has its own specific contribution guidelines, which are provided below for easy reference:  
- [DevDocs](./documentation_contribute) - This developer documentation  
- [Leo](https://docs.leo-lang.org/leo/resources#contributing) - Rust-based DSL to write programs on Aleo  
- [Provable SDK](https://github.com/ProvableHQ/sdk/tree/testnet3/sdk) - Javascript/Typescript tools for creating zero knowledge apps  
- [Create-leo-app](https://github.com/ProvableHQ/sdk/tree/testnet3/create-leo-app) - Scaffolding your first Aleo project  
- [Aleo Instruction](../aleo) - IR that Leo language compiles into  
- [SnarkOS](./snarkos_contribute) - The operating system or blockchain node client of Aleo  
- [SnarkVM](./snarkvm_contribute) - The virtual machine that performs verifiable computation  
<!-- markdown-link-check-enable -->