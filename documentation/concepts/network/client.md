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


## How to get the ledger data

### Option 1 –  Sync entire folder with `gcloud cp`

Blind copy – copies everything, even if already present. Requires Google Cloud SDK

- **Mainnet**  
  ```sh
  gcloud storage cp -r gs://snarkos-mainnet/uncompressed/ledger-0 {local-ledger-path}
  ```
- **Testnet**  
  ```sh
  gcloud storage cp -r gs://snarkos-testnet/uncompressed/ledger-1 {local-ledger-path}
  ```
- **Canary**  
  ```sh
  gcloud storage cp -r gs://snarkos-canary/uncompressed/ledger-2 {local-ledger-path}
  ```

---

### Option 2 – Sync only missing or updated files with `gcloud rsync`

Smart sync – only copies changes, optionally deletes outdated files. Requires Google Cloud SDK

- **Mainnet**  
  ```sh
  gcloud storage rsync gs://snarkos-mainnet/uncompressed/ledger-0 {local-ledger-path}
  ```
- **Testnet**  
  ```sh
  gcloud storage rsync gs://snarkos-testnet/uncompressed/ledger-1 {local-ledger-path}
  ```
- **Canary**  
  ```sh
  gcloud storage rsync gs://snarkos-canary/uncompressed/ledger-2 {local-ledger-path}
  ```

**Useful flags:**

- `--recursive` → copy all subdirectories
- `--delete-unmatched-destination-objects` → remove local files that don’t exist in the source (ensures a clean mirror)

---

### Option 3 – Download the entire ledger from scratch with `wget`

- **Mainnet**  
  ```sh
  wget -c https://storage.googleapis.com/snarkos-mainnet/latest.tar -O {local-ledger-path}
  ```
- **Testnet**  
  ```sh
  wget -c https://storage.googleapis.com/snarkos-testnet/latest.tar -O {local-ledger-path}
  ```
- **Canary**  
  ```sh
  wget -c https://storage.googleapis.com/snarkos-canary/latest.tar -O {local-ledger-path}
  ```

---

### Option 4 –  Download the entire ledger with `aria2` (multi-connection, parallel download)

Install first: `sudo apt install -y aria2` on Ubuntu, `brew install aria2` on macOS

- **Mainnet**  
  ```sh
  aria2c -x 16 -s 16 -c https://snapshots.provable.com/mainnet/latest.tar
  ```
- **Testnet**  
  ```sh
  aria2c -x 16 -s 16 -c https://snapshots.provable.com/testnet/latest.tar
  ```
- **Canary**  
  ```sh
  aria2c -x 16 -s 16 -c https://snapshots.provable.com/canary/latest.tar
  ```

:::warning[Deprecated alternative sources]
- **Mainnet** → https://ledger.aleo.network/mainnet/snapshot/latest.txt  
- **Testnet** → https://ledger.aleo.network/testnet/snapshot/latest.txt  
- **Canary** → https://ledger.aleo.network/canary/snapshot/latest.txt
:::





