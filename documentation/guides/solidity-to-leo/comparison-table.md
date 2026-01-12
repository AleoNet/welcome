---
id: comparison-table
title: Comparison Table
description: Side-by-side comparison of Aleo's Leo language and Ethereum's Solidity
sidebar_label: Comparison Table
---

A side-by-side comparison between **Leo** (Aleo) and **Solidity** (Ethereum/EVM).  

| Feature              | **Leo** | **Solidity** |
|----------------------|---------|--------------|
| **Execution Model**  | Off-chain execution + on-chain proof verification and optional on-chain execution | Fully on-chain execution |
| **State Model**      | Public key-value `mapping` and private `record` [storage](../../concepts/fundamentals/06_public_private.md#aleo-state-storage) | Key-value contract `storage`, temporary `transient` storage, temporary `memory` and read-only `calldata` |
| **Privacy**          | Built-in privacy with private inputs (messages), private outputs (state changes) and private user | No privacy – all state and calldata are public |
| **Execution Cost**   | Storage cost + finalize cost (on-chain compute based on instruction) | Gas based on opcode |
| **Supported Types**  | `bool`, `u8…u128`, `i8…i128`, plus `field`, `group`, `scalar`; no `bytes`, dynamic arrays and `string` | `bool`, `(u)int8…256`, `bytes`, dynamic arrays, `string`, etc. |
| **Tooling**          | [leo CLI](https://docs.leo-lang.org/cli/overview), [Leo debugger](https://docs.leo-lang.org/testing/debugging), [IDE plugins](https://docs.leo-lang.org/getting_started/ide#plugins), [DokoJS](https://github.com/venture23-aleo/doko-js), [Amareleo](https://github.com/kaxxa123/amareleo-chain) | Hardhat, Foundry, Remix, Truffle etc. |
| **Randomness**       | [ChaCha random function](https://docs.leo-lang.org/language/operators#random) | Relies on 3rd party off-chain oracle (e.g. Chainlink VRF) |
| **Error Handling**   | `assert`, `assert_eq`, `assert_neq` (no custom msg) | `assert`, `require`, `revert` with optional revert strings |
| **Dispatch Type**    | Static dispatch (with dynamic dispatch in [roadmap](https://aleo.org/roadmap/)) | Dynamic dispatch |
| **Built-in Functions** | `block.height`, `block.timestamp`, `self.signer`, `self.caller`, `self.address`, `network.id`, `signature::verify`, `group::GEN`, BHP hashes and commits, Keccak hashes, Pedersen hashes and commits, Poseidon hashes, SHA3 hashes etc. | `keccak256`, `sha256`, `ripemd160`, `ecrecover`, address.(member functions), `abi.encode`, `abi.decode`, block.(metadata) etc. |
| **Token Standard**   | [ARC-21](../standards/00_token_registry.md) | ERC20 |
| **NFT Standard**     | [ARC-721](../standards/01_nft_standards.md) | ERC721 |
| **Upgradability**    | Native upgradeability coming soon with [ARC-6](https://github.com/ProvableHQ/ARCs/discussions/94) | Via proxy patterns (Transparent, UUPS, Beacon) |
| **Block Explorers**  | [Provable Explorer (Beta)](https://beta.explorer.provable.com/), [VXB.ai (Formerly Aleo123.io)](https://vxb.ai/), [Aleoscan](https://aleoscan.io/) etc. | Etherscan, Blockscout etc. |