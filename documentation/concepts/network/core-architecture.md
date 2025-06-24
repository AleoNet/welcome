---
id: core_architecture 
title: Core Architecture
sidebar_label: Core Architecture
---
Aleo is focused on permissionless private programmability, which means the ability for anyone to codify any logic onto the Aleo blockchain without asking for anyone's permission. This is achieved through two key components:

1. [**SnarkVM (AleoVM)**](./snarkvm.md): The off-chain execution environment that serves as the virtual machine for Aleo. SnarkVM is essentially AleoVM, which allows for the execution of Aleo programs and generation of zero-knowledge proofs. By utilizing SnarkVM and encryption, anyone can execute logic in a privacy-preserving manner.

2. [**SnarkOS**](./snarkos.md): The blockchain node client of Aleo, powered by AleoBFT consensus mechanism. SnarkOS implements the AleoBFT protocol, which ensures secure and efficient consensus among network participants.

Together, these components form a complementary system where SnarkVM handles zero-knowledge off-chain execution, while SnarkOS serves as the network client that verifies the correctness of these off-chain computations by validating the submitted zero-knowledge proofs (zk-SNARKs).

This architecture enables two key capabilities:
- **For users**: The ability to maintain data privacy while interacting with decentralized applications (programs) on Aleo through off-chain computation and zero-knowledge proofs
- **For developers**: The ability to create privacy-preserving decentralized applications using Leo programming language or Aleo instructions and deploy them to the network

For more detailed information on these components, check out [specification](../../references/03_specifications.md) section in reference, which covers SnarkVM and SnarkOS in depth.

## Aleo Roadmap

Aleo is consistently improving its protocol to enhance privacy, scalability, and usability. The roadmap outlines key initiatives and projects that aim to strengthen the network's infrastructure, introduce new features, and optimize performance. By following the roadmap, developers and users can stay informed about upcoming releases and participate in the evolution of the Aleo ecosystem.

For the latest updates on Aleo's development progress and future milestones, visit the official [Aleo Roadmap](https://aleo.org/roadmap/). 

## What makes Aleo permissionless, private and programmable ?

An overview of the Aleo network architecture will help contextualize the concepts introduced in the learn section.

![overview](./images/overview.png)


All these components at play in this diagram together give rise to permissionless programmable privacy.

## Components

### User
The **User** initiates private transactions by preparing inputs and generating zero-knowledge proofs (ZKPs) for their actions. Users can generate these proofs locally or delegate this task to a **Third Party Prover** for efficiency.

### Proof Generation
This is the process where the user (or a third party) computes a zero-knowledge proof for a transaction. Proof generation can be performed:
- **Locally by the user** using their own device.
- **Delegated to a Third Party Prover** (such as a wallet provider), which can handle the computational workload on behalf of the user. This delegation is optional and does not compromise the privacy of the user's data, as authorization/signing is separate from proving.

### Third Party Prover
A **Third Party Prover** is an external service that users can optionally delegate proof generation to. This entity receives the necessary data from the user, generates the proof, and returns it to the user for submission. This improves efficiency, especially for users with limited computational resources.

### Client
The **Client** acts as the interface between the user and the Aleo network. It receives the proof and transaction data from the user (via RPC), and submits transactions to the network. The client also receives new blocks and data from the network, relaying relevant information back to the user.

### Prover (Miner)
**Provers** (sometimes called "miners") are network participants who generate SNARK proofs for coinbase puzzles. Their primary role is to improve the efficiency of proof generation, which can lead to faster transaction confirmation times and a better user experience. Provers are not part of the consensus process; instead, they contribute computational resources to help solve cryptographic puzzles, submit solutions to validators, **and earn coinbase rewards from doing so**.

### Validators
**Validators** are responsible for verifying the correctness of submitted zero-knowledge proofs and maintaining consensus using the AleoBFT protocol. Their responsibilities include:
- **Proof Verification:** Checking the validity of the proofs attached to transactions.
- **Consensus:** Participating in AleoBFT, a Byzantine Fault Tolerant protocol, to agree on the next block.
- **Ledger Storage:** Recording verified transactions in the ledger as part of a new block.

There are multiple validators (Validator 1, Validator 2, ..., Validator n), and they coordinate to ensure the integrity and security of the network.

### Ledger (Data Storage)
The **Ledger** is the blockchain's data storage layer. It stores all verified transactions and blocks, ensuring an immutable and publicly verifiable record of all activity on the network.

## User flow of executing a Private Transaction

1. User prepares inputs.

2. Fetches program from Node.

3. Executes required function from fetched program locally using snarkvm.

4. Broadcasts the output proof result along with the inputs and outputs to a client node. In the cases of private execution, the inputs and outputs are encrypted.

5. Validator verifies proof and consensus is held.

6. If transaction is verified, then it is stored in the ledger in a new block.

7. Now the transaction is fully complete.
