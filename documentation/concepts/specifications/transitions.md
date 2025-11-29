---
id: transitions
title: Transition Format
sidebar_label: Transitions
---

## Transition

|    Parameter    |         Type         |                                                                        Description                                                                        |
|:---------------:|:--------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------:|
|      `id`       | finite field element |                         The transition id, which is computed via the Merkle tree digest formed from the `Input` and `Output` IDs                          |
|  `program_id`   |        string        |                          The program ID, which is associated with a verification key on a globally maintained map on the ledger.                          |
| `function_name` |        string        |                                    The function name, which is used to compute a `function_id` using the `program_id`.                                    |
|    `inputs`     |  array of `Input`s   |                                 The transition `Input`s, which can be a `constant`, `public`, `private`, or `inputRecord`                                 |
|    `outputs`    |  array of `Output`s  |                                The transition `Output`s, which can be a `constant`, `public`, `private`, `outputRecord` or [`Future`](https://docs.leo-lang.org/guides/async)                                |
|      `tpk`      |    group element     |                    The transition public key, equivalent to `r * G`                    |
|      `tcm`      | finite field element |                                                                 The transition commitment, hash of transition view key (tvk)                                                                 |
|      `scm`      | finite field element |                                                                 Signer commitment, hash of the owner address and root transition view key (root_tvk)             |