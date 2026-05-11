---
id: stablecoin
title: Private Stablecoin Program
sidebar_label: Private Stablecoin
---

## Overview

The Private Stablecoin Program is a standard for issuing and managing privacy-preserving stablecoins on the Aleo blockchain. Two stablecoins are live on mainnet using this implementation:

### USDCx (`usdcx_stablecoin.aleo`)

![Aleo and Circle partnership](/img/aleo-circle-usdcx.png)

[`usdcx_stablecoin.aleo`](https://explorer.provable.com/program/usdcx_stablecoin.aleo) is the first private stablecoin on Aleo, developed by Aleo in partnership with [Circle](https://www.circle.com/blog/usdcx-on-aleo-testnet-via-circle-xreserve). USDCx is backed **1:1 by native USDC** locked in Circle xReserve smart contracts on Ethereum. When a user deposits USDC into xReserve, an equivalent amount of USDCx is minted on Aleo. More details at [aleo.org/usdcx](https://aleo.org/usdcx/).

**Circle xReserve** is a non-custodial smart contract and interoperability infrastructure that provides deposit and minting attestations for USDCx on Aleo. It works alongside two complementary Circle services:

- **Circle Gateway** — enables unified USDC balance functionality
- **Circle CCTP** (Cross-Chain Transfer Protocol) — facilitates cross-blockchain asset transfers

Together, these make USDCx interoperable with USDC across supported blockchains without reliance on third-party bridges. Privacy features apply exclusively to USDCx while it remains on Aleo, bridging back to other blockchains removes these protections.

### USAD (`usad_stablecoin.aleo`)

![Aleo and Paxos Labs partnership](/img/aleo-paxos-labs-usad.png)

[`usad_stablecoin.aleo`](https://explorer.provable.com/program/usad_stablecoin.aleo) is a privacy-preserving stablecoin developed jointly by the [Aleo Network Foundation (ANF) and Paxos Labs](https://aleo.org/post/paxos-labs-and-ANF-launch-USAD-Private-Stablecoin/). USAD is backed by **USDG (Global Dollar)**, a regulated, institutional-grade digital dollar issued through Paxos Labs' issuance framework. It is the first U.S. dollar stablecoin issued on a Layer 1 blockchain that combines smart contract capabilities with enhanced privacy. USAD is designed to keep sensitive information, including participant identities and transaction amounts, confidential, while remaining transparent to regulatory oversight. More details at [aleo.org/usad](https://aleo.org/usad/).

---

Both programs share the same on-chain implementation and are designed to meet regulatory compliance requirements while leveraging Aleo's unique zero-knowledge privacy features. The program integrates three supporting components:

- A **multisig core** program for admin operations requiring multi-signature approval
- A **freeze list** program to enforce compliance controls on token holders
- A **Merkle tree** program for efficient, privacy-preserving membership proofs

The key design goal of this stablecoin architecture is to allow fully private transfers while still enabling compliant freezing of addresses. Private senders prove they are not on the freeze list by submitting a Merkle proof of non-membership, without revealing their address on-chain.

## Compliance and Privacy Design

### Freeze List

The freeze list is managed by a companion program (`usdcx_freezelist.aleo` / `usad_freezelist.aleo`). Addresses on the freeze list are blocked from all public transfers. Private transfers enforce the same restriction without revealing the sender's address: the sender must supply a Merkle non-membership proof demonstrating their address is not a leaf in the freeze list tree.

### ComplianceRecord

Every operation that crosses the public/private boundary (mint private, burn private, and public-to-private conversions) emits a `ComplianceRecord` to a designated compliance officer address. This allows the issuer to maintain an audit trail for regulatory purposes without exposing information publicly on-chain.

### Multisig Administration

Admin operations are protected by `usdcx_multisig_core.aleo` (or `usad_multisig_core.aleo`), which requires multiple signers, identified by both Aleo addresses and ECDSA keys to authorize sensitive changes such as role updates and program initialization.

The underlying pattern — an Aleo smart contract wallet authorized by ECDSA signatures — is demonstrated in the [`virtual_wallet` Leo example](https://github.com/ProvableHQ/leo-examples/tree/main/virtual_wallet). This example is particularly useful for **custodians** who need to manage on-chain assets using existing ECDSA key infrastructure (e.g. HSMs or existing Ethereum signing keys) without exposing a native Aleo private key as the authority. It shows how to deploy a program that accepts secp256k1 ECDSA signatures as its authorization mechanism, using an ephemeral Aleo key for transaction signing while ECDSA keys retain actual spending authority.

## Key Features

- Public and private token balances
- Role-based access control (admin, minter, burner)
- Compliance via a freeze list with Merkle proof-based enforcement
- Credential-gated private transfers: senders must prove they are not frozen
- Compliance records emitted for every mint, burn, and public-to-private transfer
- Pause mechanism for emergency halts
- Multisig-protected administrative operations

## How to Use the Private Stablecoin Program

Addresses with the `MINTER_ROLE` or `ADMIN_ROLE` can mint tokens publicly via `mint_public` or privately via `mint_private`. Addresses with `BURNER_ROLE` or `ADMIN_ROLE` can burn tokens via `burn_public` or `burn_private`.

Token holders can transfer publicly using `transfer_public` or privately using `transfer_private`. Private transfers require the sender to fetch the current freeze list Merkle tree via the Provable API, compute two adjacent `MerkleProof` structs that lexicographically bound their address (proving non-membership), and pass those proofs directly to `transfer_private`.

Public balances can be converted to private token records via `transfer_public_to_private`, and private records can be converted back via `transfer_private_to_public`. An allowance mechanism (`approve_public`, `unapprove_public`, `transfer_from_public`, `transfer_from_public_to_private`) allows third parties to spend tokens on behalf of owners.

### Private Transfer Flow

Private transfers enforce freeze list compliance without revealing the sender's address on-chain. The sender must prove non-membership in the freeze list by supplying a pair of adjacent Merkle tree entries that lexicographically bound their address.

```mermaid
sequenceDiagram
    participant User as Sender
    participant API as Provable API
    participant Prog as stablecoin.aleo
    participant FL as freezelist.aleo
    participant Recv as Receiver

    User->>API: GET /programs/{programID}/compliance/freeze-list
    API-->>User: Merkle tree field elements

    User->>User: Locate two adjacent entries bounding sender address
    User->>User: Construct two MerkleProof structs

    User->>Prog: transfer_private(recipient, amount, token_record, proofs)
    Prog->>FL: Validate proofs against current freeze list root
    FL-->>Prog: Root validated
    Prog-->>User: Remaining Token record
    Prog-->>Recv: Recipient's new Token record
```

#### Freeze List API

To obtain the Merkle tree data needed for a private transfer, query the Provable Explorer API:

```
GET https://api.explorer.provable.com/v2/programs/{programID}/compliance/freeze-list
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `programID` | path (string) | The stablecoin program ID, e.g. `usdcx_stablecoin.aleo` |

**Response:** An array of Merkle tree field elements representing the current freeze list. Use these to compute the two adjacent `MerkleProof` structs required by `transfer_private`.

Full API reference: [Provable Explorer API v2 — Compliance Freeze List](https://docs.explorer.provable.com/docs/api/v2/get-program-program-id-compliance-freeze-list)

## Data Structures

### Token Record

```leo
record Token {
    owner: address,
    amount: u128,
}
```

### ComplianceRecord Record

```leo
record ComplianceRecord {
    owner: address,
    amount: u128,
    sender: address,
    recipient: address,
}
```

Emitted on every `mint_private`, `burn_private`, `transfer_public_to_private`, and `transfer_from_public_to_private` call, providing an audit trail for the compliance officer without revealing data publicly on-chain.

### Credentials Record

```leo
record Credentials {
    owner: address,
    freeze_list_root: field,
}
```

Must be obtained via `get_credentials` before calling `transfer_private`. Certifies that the holder's address is not on the freeze list at the proven Merkle root.

### TokenInfo Struct

```leo
struct TokenInfo {
    name: u128,        // ASCII text encoded as u128 bitstring
    symbol: u128,      // ASCII text encoded as u128 bitstring
    decimals: u8,
    supply: u128,
    max_supply: u128,
}
```

### TokenAllowance Struct

```leo
struct TokenAllowance {
    account: address,
    spender: address,
}
```

### MerkleProof Struct

```leo
struct MerkleProof {
    siblings: [field; 16],
    leaf_index: u32,
}
```

Used in `get_credentials` and `transfer_private` to prove non-membership (or membership) in the freeze list. The tree is depth 16; `siblings` contains one sibling hash per level.

### ChecksumEdition Struct

```leo
struct ChecksumEdition {
    checksum: [u8; 32],
    edition: u16,
}
```

### AdminOp Struct

```leo
struct AdminOp {
    op: u8,
    threshold: u8,
    aleo_signer: address,
    ecdsa_signer: [u8; 20],
}
```

## Mappings

`mapping token_info: boolean => TokenInfo;`  
Stores the token metadata at key `true`. There is exactly one entry.

`mapping balances: address => u128;`  
Maps each address to its public token balance.

`mapping allowances: field => u128;`  
Maps the BHP256 hash of a `TokenAllowance` struct to the approved spending amount.

`mapping address_to_role: address => u16;`  
Maps each address to its role bitmask.

`mapping pause: boolean => boolean;`  
Stores the paused state at key `true`. When `true`, all minting, burning, and transfers are blocked.

## Role Constants

Roles are stored as a bitmask in `address_to_role`. An address may hold multiple roles simultaneously.

| Role | Bitmask | Description |
|------|---------|-------------|
| `MINTER_ROLE` | `1u16` | Can call `mint_public` and `mint_private` |
| `BURNER_ROLE` | `2u16` | Can call `burn_public` and `burn_private` |
| `ADMIN_ROLE` | `8u16` | Can call all privileged functions including `update_role` |

An address with `ADMIN_ROLE` can assign or revoke roles for other addresses. An admin cannot remove their own `ADMIN_ROLE`.

## Functions

### `initialize()`

Initializes the stablecoin program with its token metadata and sets the initial admin address. Can only be called once and only by the deployer address.

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `public u128` | Token name encoded as ASCII |
| `symbol` | `public u128` | Token symbol encoded as ASCII |
| `decimals` | `public u8` | Number of decimal places |
| `max_supply` | `public u128` | Maximum allowed supply |
| `admin` | `public address` | Initial admin address |

Returns: `Future`

---

### `update_role()`

Assigns a new role bitmask to a target address. The caller must have `ADMIN_ROLE`. An admin cannot remove their own `ADMIN_ROLE`.

| Parameter | Type | Description |
|-----------|------|-------------|
| `account` | `public address` | Address to update |
| `role` | `private u16` | New role bitmask to assign |

Returns: `Future`

---

### `get_credentials()`

Proves that the transaction signer is not on the freeze list by verifying two adjacent Merkle proofs against the current freeze list root. The function confirms the signer's address falls lexicographically between the two consecutive leaf entries, establishing non-membership. Returns a `Credentials` record required to call `transfer_private`.

| Parameter | Type | Description |
|-----------|------|-------------|
| `proofs` | `private [MerkleProof; 2]` | Two adjacent proofs bounding the signer's address in the freeze list tree |

Returns: `Credentials` (certifying non-membership at the proven root), `Future`

---

### `get_signing_op_id_for_deploy()`

Utility function that computes the signing operation ID for a program deployment, used in multisig admin flows.

| Parameter | Type | Description |
|-----------|------|-------------|
| `checksum` | `private [u8; 32]` | Deployment checksum |
| `edition` | `private u16` | Deployment edition |

Returns: `field` — the BHP256 hash of the `ChecksumEdition` struct, used as the signing operation identifier.

---

### `mint_public()` / `mint_private()`

Mints tokens to a recipient. Requires `MINTER_ROLE` or `ADMIN_ROLE`. The program must not be paused and the new supply must not exceed `max_supply`. `mint_private` emits a `ComplianceRecord` to the compliance officer.

| Parameter | Type | Description |
|-----------|------|-------------|
| `recipient` | `public address` / `private address` | Recipient address (private for `mint_private`) |
| `amount` | `public u128` | Number of tokens to mint |

Returns: `mint_public` → `Future`; `mint_private` → `ComplianceRecord`, `Token`, `Future`

---

### `burn_public()` / `burn_private()`

Burns tokens. Requires `BURNER_ROLE` or `ADMIN_ROLE`. The program must not be paused. `burn_private` emits a `ComplianceRecord` to the compliance officer.

| Parameter | Type | Description |
|-----------|------|-------------|
| `owner` | `public address` | Address whose tokens are burned (`burn_public` only) |
| `input_record` | `Token` | Token record to burn from (`burn_private` only) |
| `amount` | `public u128` | Number of tokens to burn |

Returns: `burn_public` → `Future`; `burn_private` → remaining `Token`, `ComplianceRecord`, `Future`

---

### `transfer_public()` / `transfer_public_as_signer()`

Transfers tokens between public addresses. Both sender and recipient must not be on the freeze list. The program must not be paused. `transfer_public_as_signer` uses `self.signer` as the sender rather than `self.caller`, enabling use within program call chains while attributing the debit to the original transaction signer.

| Parameter | Type | Description |
|-----------|------|-------------|
| `recipient` | `public address` | Recipient address |
| `amount` | `public u128` | Amount to transfer |

Returns: `Future`

---

### `approve_public()` / `unapprove_public()`

`approve_public` grants a spender the ability to transfer tokens on behalf of the caller, increasing the allowance by the specified amount. `unapprove_public` reduces or revokes that allowance.

| Parameter | Type | Description |
|-----------|------|-------------|
| `spender` | `public address` | Address to authorize or de-authorize |
| `amount` | `public u128` | Amount to add to or subtract from the allowance |

Returns: `Future`

---

### `transfer_from_public()`

Transfers tokens from an owner to a recipient using a pre-approved allowance. Both owner and recipient must not be on the freeze list. The program must not be paused.

| Parameter | Type | Description |
|-----------|------|-------------|
| `owner` | `public address` | Address to debit |
| `recipient` | `public address` | Address to credit |
| `amount` | `public u128` | Amount to transfer |

Returns: `Future`

---

### `transfer_public_to_private()` / `transfer_from_public_to_private()`

Converts a public balance to a private `Token` record, emitting a `ComplianceRecord` to the compliance officer. `transfer_from_public_to_private` operates on behalf of an owner using a pre-approved allowance. Both require the sender/owner to not be on the freeze list and the program to not be paused.

| Parameter | Type | Description |
|-----------|------|-------------|
| `owner` | `public address` | Address to debit publicly (`transfer_from_public_to_private` only) |
| `recipient` | `private address` | Private recipient address (not visible on-chain) |
| `amount` | `public u128` | Amount to convert |

Returns: `ComplianceRecord`, `Token`, `Future`

---

### `transfer_private()`

Transfers tokens between two private `Token` records. The sender must provide two adjacent `MerkleProof` structs proving their address is not on the current freeze list. The program must not be paused.

| Parameter | Type | Description |
|-----------|------|-------------|
| `recipient` | `private address` | Recipient address (not visible on-chain) |
| `amount` | `private u128` | Amount to transfer (not visible on-chain) |
| `input_record` | `Token` | Sender's token record |
| `proofs` | `private [MerkleProof; 2]` | Merkle proofs certifying sender is not on the freeze list |

Returns: sender's remaining `Token`, recipient's new `Token`, `Future`

---

### `transfer_private_to_public()`

Converts a private `Token` record to a public balance. The program must not be paused.

| Parameter | Type | Description |
|-----------|------|-------------|
| `recipient` | `public address` | Public recipient address |
| `amount` | `public u128` | Amount to convert |
| `input_record` | `Token` | Sender's private token record |

Returns: sender's remaining `Token`, `Future`
