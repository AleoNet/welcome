---
id: snarkos 
title: SnarkOS
sidebar_label: SnarkOS
---

SnarkOS is a decentralized operating system for zero-knowledge applications. This code forms the backbone of Aleo network, which verifies transactions and stores the encrypted state of applications in a publicly-verifiable manner.

The network client has to take care of verifying the transactions computed off chain using snarkvm, allowing all snarkOS nodes to reach consensus and to store the private and non private state in Aleo's distributed ledger.

## Aleo Node Options
An Aleo node can be run in three modes.

<!-- ### [Client](../network/) -->


- [Client](../network/client.md)
- [Prover](../network/provers.md)
- [Validator](../network/validators.md)


### JWT Authentication
The snarkOS accepts runtime parameters for JWT authentication:

- `--jwt-secret`: An optional base64-encoded JWT secret used for token generation and validation
- `--jwt-timestamp`: An optional UNIX timestamp used to determine the validity of the token

#### Protected Endpoints
The following endpoints require valid JWT authentication:

- `/{network}/node/address` - Get node address information
- `/{network}/program/{id}/mapping/{name}` - Access program mapping data
- `/{network}/db_backup?path={path}` - Database backup operations

## Who uses snarkOS ?
Everyone involved in Aleo uses snarkOS both to submit transactions and to fetch their data.
