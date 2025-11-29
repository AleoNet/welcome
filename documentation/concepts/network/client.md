---
id: client 
title: Client
sidebar_label: Client
---


**Clients** act as the interface between users and the Aleo network. Client nodes receives the proof and transaction data from the user and submit those transactions to the network. The client also receives new blocks and data from the network, relaying relevant information back to the user.

**Clients** nodes do not participate in consensus or block production.

Key features of an Aleo client:

1. **Data Retrieval**: Clients can fetch and serve blockchain data, including blocks, transactions, and state information, to users and applications.

2. **Transaction Submission**: Users can submit new transactions to the network through client nodes.

3. **Network Interaction**: Clients maintain connections with other nodes to stay updated with the latest blockchain state.

4. **Lightweight Operation**: Compared to validators and provers, clients have lower hardware requirements, making them more accessible to run.

5. **API Access**: Many clients expose REST APIs, allowing developers to build applications that interact with the Aleo network.