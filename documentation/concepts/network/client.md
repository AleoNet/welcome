---
id: client 
title: Client
sidebar_label: Client
---

A client in the Aleo network is a node that serves blockchain data and interacts with the network without participating in consensus or block production. Clients play a crucial role in the ecosystem by providing access to blockchain data and facilitating user interactions with the network.

Key features of an Aleo client:

1. **Data Retrieval**: Clients can fetch and serve blockchain data, including blocks, transactions, and state information, to users and applications.

2. **Transaction Submission**: Users can submit new transactions to the network through client nodes.

3. **Network Interaction**: Clients maintain connections with other nodes to stay updated with the latest blockchain state.

4. **Lightweight Operation**: Compared to validators and provers, clients have lower hardware requirements, making them more accessible to run.

5. **API Access**: Many clients expose REST APIs, allowing developers to build applications that interact with the Aleo network.

To run an Aleo client node:

1. Ensure your system meets the minimum requirements:
   - **OS**: Ubuntu 22.04 (LTS), macOS Sonoma or later, Windows 11 or later
   - **CPU**: 32-cores
   - **RAM**: 32GB of memory
   - **Storage**: 300GB of disk space (PCIe Gen 3 x4 NVME SSD or better)
   - **Network**: 100Mbps of upload and download bandwidth

2. Install [snarkOS](../../guides/introduction/02_installation.md) following the instructions in the Build Guide.

3. Start the client node by running:
   ```
   ./run-client.sh
   ```

   Or use the following command for more control:
   ```
   snarkos start --client
   ```

By running a client node, you contribute to the decentralization and robustness of the Aleo network while gaining direct access to its data and functionality.

