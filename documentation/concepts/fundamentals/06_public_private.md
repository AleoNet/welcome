---
id: public_private 
title: Public vs. Private State
sidebar_label: Public vs. Private State
---

## Introduction
<!-- markdown-link-check-disable -->
The concept of Zero Knowledge proofs was first introduced in 1985 in the paper [The Knowledge Complexity of Interactive Proof Systems](https://epubs.siam.org/doi/10.1137/0218012?utm_source=the+new+stack&utm_medium=referral&utm_content=inline-mention&utm_campaign=tns+platform). However, it is only in recent years that the groundbreaking technology has been feasible to be applicable to blockchains. 
<!-- markdown-link-check-enable -->


Zcash was one of the earliest chains to utilize the power of zero knowledge proofs to provide privacy to an account's balance. Unlike traditional cryptocurrencies like Bitcoin, where transaction details are publicly visible on the blockchain, Zcash enables users to shield their transactions, rendering them completely opaque to outside observers. It utilizes zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge), a type of zero-knowledge proof system that allows parties to verify the validity of a computation without revealing the underlying data. 

In even more recent times, we have seen several Ethereum virtual machine-compatible Layer-2 chains that have employed zero-knowledge cryptography techniques to solve Ethereum's scalability issues. They use zk-rollups, which compute multiple state changes off-chain, followed by posting the summary of those transactions and proofs on-chain. This helps to reduce transaction fees significantly. However, all of them utilize zero-knowledge technology mainly for scalability reasons.

Aleo is a new layer-1 blockchain that combines general-purpose programmability with privacy by default. Unlike the other chains, Aleo is one of the first blockchains to utilize zero-knowledge for both privacy and scalability. 


## Privacy
There are generally four different types of privacy that relate to blockchains, of which Aleo fulfils three:
- [x] Private inputs (messages)
- [x] Private outputs (state changes)
- [x] Private user
- [ ] Private function 

The core belief at Aleo is that privacy is necessary in order for blockchains to have mainstream adoption. For instance, how many of us would be comfortable revealing our bank account numbers if anyone in public were able to trace all the transactions we have ever made? 

## Aleo State Storage 
In order to have privacy native to a chain, Aleo uses a record model for application state storage, which is similar to the UTXO model in Bitcoin. However, Aleo provides developers the option to make application states public should they choose to do so. Public states are stored using the account model as done in Ethereum. 

### Storing Private States via Record
Records are a fundamental data structure that can contain any arbitrary payload and are used for encoding user assets or application states. A record represents a certain state of a program in the global state, for example, the balance of an account or your identity document. 


An Aleo record is serialized in the following format:

| Parameter  |             Type             | Description                                                                                         |
|------------|:----------------------------:|-----------------------------------------------------------------------------------------------------|
|     owner    |            address           |                      The address public key of the owner of the program record                      |
|    data    |    `map`   | A data payload containing arbitrary application-dependent information                               |
|    nonce   |             group            |                            The serial number nonce of the program record                            |

Records are tied to programs deployed on Aleo, and only the owner has permissions to alter the state of the record.

Records are private by default and are stored as ciphertext on-chain. For more information on how Records are encrypted, please refer to the [Output Record](./04_transitions.md#output-record).

### Storing Public State via Mapping

A public state in Aleo is stored in the form of a mapping, which are key-value pairs. Anyone is able to query the state of the mapping by querying the Aleo blockchain explorer.

### Switching Between Privacy States
By supporting both private and public storage states, an interesting feature emerges in Aleo where states can be converted from private to public and vice versa.

An example of such a use case would be in a poker game. The state of the shuffled deck after dealing the cards to players should be kept private initially. Proceeding, as the "flop" reveals the top 3 cards, the state of those cards should be revealed to the public.

### View Key
Aleo has a unique feature known as a view key for each account. The view key allows one to decrypt all transactions of it's account. It is different from the private key in that it does not provide the permission to spend the records.

## Private Inputs and Outputs of Programs
Apart from stored program states being private, program function inputs and outputs can also be made private or public. Inputs, outputs, and record fields are annotated with `public` or `private` visibility modifiers — Aleo is private by default, so fields without a modifier are treated as private. For syntax details and examples, see the [Leo language documentation](https://docs.leo-lang.org/language/programs).

More information on how private inputs and outputs are encrypted, please refer to [here](./04_transitions.md#non-record-ciphertext).

## Public vs. Private States

The choice to store an application state as public or private should depend on the particular use case of the program. Instead of being a chain that is completely private or completely public, Aleo believes in a hybrid approach that offers developers a choice. 

Aleo's model is more suitable for real-world applications, which often rely on a combination of public and private information.

For example, elections require a system in which votes remain private while vote tallies are made public to ensure the outcome can be verified. This balance between privacy and transparency enables powerful application functionality.


## Conclusion
Aleo is one of the very first few layer-1 blockchains that emphasizes programmable privacy. Developers are able to choose if they wish to make certain states of their program public or private. This opens up a whole new set of interesting applications that cannot be built easily with other blockchains. This is certainly an exciting chain to keep an eye out for.
