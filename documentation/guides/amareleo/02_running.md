---
id: running
title: Running Amareleo-Chain
sidebar_label: Running
---

To start amareleo-chain, run one of these commands depending on the required chain state:

```BASH
# Start testnet from genesis
amareleo-chain start
```

```BASH
# Start testnet continuing the state from the last run
amareleo-chain start --keep-state
```
For a complete list of commands and arguments, run:

```BASH
# Get list of commands
amareleo-chain help

# Get list of command arguments
amareleo-chain <command> --help
```

<BR />


## Keep-State

Amareleo-Chain `start` runs in two modes depending on whether `--keep-state` is specified. 

* When `--keep-state` is specified, the chain state is retained across runs.
* When `--keep-state` is not specified, the chain starts from genesis and is discarded on exit.

To avoid conflicts between these two modes, each mode uses a different storage location. This ensures that the two modes remain independent of each other.

The following example demonstrates how mixing runs that includes and excludes `--keep-state` does not cause any state conflicts.

1. Start amareleo-chain for the first time __with__ `--keep-state`

    ```BASH
    amareleo-chain start --keep-state
    ```

    Assume that the chain runs from block 0 to block 100, at which point amareleo-chain is terminated with `CTRL-C`.

1. Start amareleo-chain __without__ `--keep-state`

    ```BASH
    amareleo-chain start
    ```
    
    The chain will again start from block 0. However this won't touch the storage of the previous run. After some time terminate this amareleo-chain instance.

1. Again run amareleo-chain with `--keep-state`

    ```BASH
    amareleo-chain start --keep-state
    ```

    The chain continues from block 100, the last block generated when running in  `--keep-state` mode.


This demonstrates how specifiying `--keep-state` retains the chain state across runs. Each run keeps adding blocks until the chain is deleted using the `clean` command:

```BASH
amareleo-chain clean
```

At the same time, whenever `--keep-state` is not specified, a fresh chain is created.


<BR />

## Test accounts

Just like running snarkOS with the `--dev <N>` argument, amareleo-chain intializes four accounts loaded with aleo credits that can be used for testing purposes.

The private key for these accounts is well-known and common to both snarkOS and amareleo-chain:

```BASH
# Account 0
APrivateKey1zkp8CZNn3yeCseEtxuVPbDCwSyhGW6yZKUYKfgXmcpoGPWH
AViewKey1mSnpFFC8Mj4fXbK5YiWgZ3mjiV8CxA79bYNa8ymUpTrw
aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px

# Account 1
APrivateKey1zkp2RWGDcde3efb89rjhME1VYA8QMxcxep5DShNBR6n8Yjh
AViewKey1pTzjTxeAYuDpACpz2k72xQoVXvfY4bJHrjeAQp6Ywe5g
aleo1s3ws5tra87fjycnjrwsjcrnw2qxr8jfqqdugnf0xzqqw29q9m5pqem2u4t

# Account 2
APrivateKey1zkp2GUmKbVsuc1NSj28pa1WTQuZaK5f1DQJAT6vPcHyWokG
AViewKey1u2X98p6HDbsv36ZQRL3RgxgiqYFr4dFzciMiZCB3MY7A
aleo1ashyu96tjwe63u0gtnnv8z5lhapdu4l5pjsl2kha7fv7hvz2eqxs5dz0rg

# Account 3
APrivateKey1zkpBjpEgLo4arVUkQmcLdKQMiAKGaHAQVVwmF8HQby8vdYs
AViewKey1iKKSsdnatHcm27goNC7SJxhqQrma1zkq91dfwBdxiADq
aleo12ux3gdauck0v60westgcpqj7v8rrcr3v346e4jtq04q7kkt22czsh808v2
```

