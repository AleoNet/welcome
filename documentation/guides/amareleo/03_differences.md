---
id: differences
title: Amareleo-Chain vs SnarkOS
sidebar_label: Differences
---


amareleo-chain looks and feels very similar to running snarkOS with devnet.sh

Here is a quick comparison:

* amareleo-chain is functionally equivalent to running four snarkOS validators in a single process.  where snarkOS would be started with the `--dev <n> --network 1` arguments.

* amareleo-chain only requires a single port, for its REST server (default: `3030`), unless the metrics server is enabled (default: `9000`).

* amareleo-chain supports three commands: `start`, `clean` and `update`. The `clean` and `update` commands are identical in functionality to the snarkOS `clean` and `update` commands. 

* amareleo-chain `start` supports a subset of the arguments supported by snarkOS `start`. Here is a comparison of the arguments common to both:

    | Argument | Comparison |
    |----------|------------|
    | --network | amareleo-chain defaults to testnet (1) |
    | | devnet.sh+snarkOS defaults to testnet (1) |
    | | snarkOS defaults to mainnet (0) |
    | --logfile | amareleo-chain defaults to `/tmp/amareleo-chain.log` |
    | | snarkOS defaults to `/tmp/snakros.log` |
    | --storage | amareleo-chain state storage differs from snarkOS depending on the flag --keep-state |
    | --rest | identical |
    | --rest-rps | identical |
    | --verbosity | identical |
    | --metrics | identical |
    | --metrics-ip | identical |

* amareleo-chain does not support the `developer` and `account` commands provided by snarkOS. If needed, snarkOS can be used alongside amareleo-chain for these commands.

* amareleo-chain `start` supports a new argument, a flag named `--keep-state`. When specified, the chain state is retained across runs. If not specified, the chain starts from genesis and is discarded on exit. The following table describes storage based on `--keep-state`. We can think of snarkOS as being equivalent to having `--keep-state` set (even though snarkOS does not support this flag).

    | `--keep-state` | amareleo-chain | snarkOS |
    |----------------|----------------|----------|
    | __set__ | `.amareleo-ledger-*/` | `.ledger-*/` |
    | | `.amareleo-proposal-cache*` | `.current-proposal-cache*` |
    | __not set__ | `.amareleo-tmp-ledger-*/` | -- |

    Note: Even though a temporary ledger is persisted to disk when `--keep-state` is not specified, this data is temporary and is not guaranteed to be valid once the chain is terminated.