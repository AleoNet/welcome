---
id: token_registry
title: Token Registry Program
sidebar_label: Token Registry
---

:::caution Not Recommended for New Projects

The Token Registry Program remains live on mainnet and continues to serve existing integrations. However, it is **not recommended for new projects**. Newer token standards are currently under active community discussion and are expected to supersede the Token Registry:

- [ARC-20](https://github.com/ProvableHQ/ARCs/discussions/124) — proposed standard for fungible tokens on Aleo
- [ARC-22](https://github.com/ProvableHQ/ARCs/discussions/125) — proposed standard for compliant/regulated fungible tokens on Aleo, extending ARC-20

New projects should follow these discussions and consider building against the forthcoming standards once finalized.

:::

## Overview

The Token Registry Program is a singleton program for issuing and managing tokens on Aleo. Rather than deploying a separate program per token, all tokens register with this central registry, which manages their balances. DeFi programs depend only on the registry, so new tokens can be added without redeploying existing DeFi programs. As a secondary benefit, private transfers within the registry conceal which specific token is being transferred, improving the anonymity set.

This design predates [dynamic dispatch (ARC-0009)](https://github.com/ProvableHQ/ARCs/tree/master/arc-0009). With dynamic dispatch now finalized, programs can call other programs at runtime without compile-time imports, enabling the per-program token model described in [ARC-20](https://github.com/ProvableHQ/ARCs/discussions/124). The Token Registry remains live on mainnet and continues to serve existing integrations — see the caution above for guidance on new projects.

This standard emerged from community discussion and the approval of the [ARC-21 proposal](https://vote.aleo.org/p/21).

<!-- markdown-link-check-disable -->
The original source code can be found [here](https://github.com/demox-labs/aleo-standard-programs/blob/main/token_registry/src/main.leo).
<!-- markdown-link-check-enable -->

## How to Use the Token Registry Program

Call `register_token` with a unique token ID, name, symbol, decimals, and max supply. Setting `external_authorization_required` to `true` requires approval from an `external_authorization_party` before tokens can be spent, that party uses `prehook_public` or `prehook_private` to unlock balances for a specific owner with an expiration block height. The admin can update the `external_authorization_party` later via `update_token_management`.

Once registered, tokens can be minted publicly (`mint_public`) or privately (`mint_private`), and burned publicly (`burn_public`) or privately (`burn_private`). Minting and burning require `MINTER_ROLE`/`BURNER_ROLE` or `SUPPLY_MANAGER_ROLE` if the caller is not the admin.

Owners transfer tokens publicly (`transfer_public`) or privately (`transfer_private`), and can convert between public and private balances with `transfer_public_to_private` and `transfer_private_to_public`.

## Data Structures

### Token Record

```leo
record Token {
  owner: address,
  amount: u128,
  token_id: field,
  external_authorization_required: bool,
  authorized_until: u32           // block height until authorization expires
}
```

### TokenMetadata Struct

```leo
struct TokenMetadata {
  token_id: field,
  name: u128,                          // ASCII text as u128 bitstring
  symbol: u128,                        // ASCII text as u128 bitstring
  decimals: u8,
  supply: u128,
  max_supply: u128,
  admin: address,
  external_authorization_required: bool,
  external_authorization_party: address
}
```

### TokenOwner Struct

```leo
struct TokenOwner {
  account: address,
  token_id: field
}
```

### Balance Struct

```leo
struct Balance {
  token_id: field,
  account: address,
  balance: u128,
  authorized_until: u32
}
```

### Allowance Struct

```leo
struct Allowance {
  account: address,
  spender: address,
  token_id: field
}
```

## Mappings

| Mapping | Key | Value |
|---|---|---|
| `registered_tokens` | `field` (token ID) | `TokenMetadata` |
| `balances` | `field` (hash of token ID + account) | `Balance` |
| `allowances` | `field` (hash of token ID + account + spender) | `Allowance` |
| `roles` | `field` (hash of token ID + account) | `u8` |

## Constants

| Constant | Value | Description |
|---|---|---|
| `CREDITS_RESERVED_TOKEN_ID` | `3443843282313283355522573239085696902919850365217539366784739393210722344986field` | Reserved token ID for ALEO credits |
| `MINTER_ROLE` | `1u8` | Role for minting |
| `BURNER_ROLE` | `2u8` | Role for burning |
| `SUPPLY_MANAGER_ROLE` | `3u8` | Role for minting and burning |

## Functions

### `initialize()`

Registers the ALEO credits token with hardcoded metadata (name/symbol "credits", 6 decimals, max supply 10 quadrillion). Parameters are hardcoded to prevent frontrunning. Sets `wrapped_credits.aleo` as admin with external authorization disabled so metadata cannot be modified afterward.

---

### `register_token()`

Registers a new token. The caller becomes the admin.

| Parameter | Type | Description |
|---|---|---|
| `token_id` | `public field` | Unique token identifier |
| `name` | `public u128` | Token name |
| `symbol` | `public u128` | Token symbol |
| `decimals` | `public u8` | Decimal places |
| `max_supply` | `public u128` | Maximum supply |
| `external_authorization_required` | `public bool` | Whether external authorization is required |
| `external_authorization_party` | `public address` | Address of the authorization party |

Returns: `Future`

---

### `update_token_management()`

Updates the admin and external authorization party for a token. Only callable by the current admin.

| Parameter | Type | Description |
|---|---|---|
| `token_id` | `public field` | Token identifier |
| `admin` | `public address` | New admin address |
| `external_authorization_party` | `public address` | New authorization party address |

Returns: `Future`

---

### `set_role()` / `remove_role()`

`set_role` assigns a role (`MINTER_ROLE`, `BURNER_ROLE`, or `SUPPLY_MANAGER_ROLE`) to an account for a given token. `remove_role` clears it. Both require the caller to be the token admin.

| Parameter | Type | Description |
|---|---|---|
| `token_id` | `public field` | Token identifier |
| `account` | `public address` | Target account |
| `role` | `public u8` | Role value (`set_role` only) |

Returns: `Future`

---

### `mint_public()` / `mint_private()`

Mints tokens to a recipient. Requires admin, `MINTER_ROLE`, or `SUPPLY_MANAGER_ROLE`.

| Parameter | Type | Description |
|---|---|---|
| `token_id` | `public field` | Token identifier |
| `recipient` | `address` (private for `mint_private`) | Recipient address |
| `amount` | `public u128` | Amount to mint |
| `external_authorization_required` | `public bool` | (`mint_private` only) |
| `authorized_until` | `public u32` | Authorization expiry block height |

Returns: `mint_public` → `Future`; `mint_private` → `Token`, `Future`

---

### `burn_public()` / `burn_private()`

Burns tokens. Requires admin, `BURNER_ROLE`, or `SUPPLY_MANAGER_ROLE`.

| Parameter | Type | Description |
|---|---|---|
| `token_id` | `public field` | Token identifier (`burn_public` only) |
| `owner` | `public address` | Token owner (`burn_public` only) |
| `input_record` | `Token` | Token record (`burn_private` only) |
| `amount` | `public u128` | Amount to burn |

Returns: `burn_public` → `Future`; `burn_private` → remaining `Token`, `Future`

---

### `prehook_public()` / `prehook_private()`

Called by the `external_authorization_party` to unlock a specified token amount for an owner up to a given block height.

| Parameter | Type | Description |
|---|---|---|
| `owner` | `public address` | Token owner (`prehook_public` only) |
| `input_record` | `Token` | Token record (`prehook_private` only) |
| `amount` | `u128` | Amount to authorize |
| `authorized_until` | `u32` | Authorization expiry block height |

Returns: `prehook_public` → `Future`; `prehook_private` → unauthorized `Token`, authorized `Token`, `Future`

---

### `transfer_public()`

Transfers tokens between public balances. The caller is the sender (`self.caller`).

| Parameter | Type | Description |
|---|---|---|
| `token_id` | `public field` | Token identifier |
| `recipient` | `public address` | Recipient address |
| `amount` | `public u128` | Amount to transfer |

Returns: `Future`

---

### `transfer_public_as_signer()`

Same as `transfer_public` but uses `self.signer` as the sender, enabling use within arbitrary program call chains.

Parameters and return value are identical to `transfer_public`.

---

### `approve_public()` / `unapprove_public()`

`approve_public` grants a spender an allowance to transfer tokens on the owner's behalf. `unapprove_public` revokes or reduces that allowance.

| Parameter | Type | Description |
|---|---|---|
| `token_id` | `public field` | Token identifier |
| `spender` | `public address` | Spender address |
| `amount` | `public u128` | Amount to approve or unapprove |

Returns: `Future`

---

### `transfer_from_public()`

Transfers tokens from an owner to a recipient using a pre-approved allowance.

| Parameter | Type | Description |
|---|---|---|
| `token_id` | `public field` | Token identifier |
| `owner` | `public address` | Token owner |
| `recipient` | `public address` | Recipient address |
| `amount` | `public u128` | Amount to transfer |

Returns: `Future`

---

### `transfer_public_to_private()`

Converts a public balance to a private token record.

| Parameter | Type | Description |
|---|---|---|
| `token_id` | `public field` | Token identifier |
| `recipient` | `address` (private) | Recipient address |
| `amount` | `public u128` | Amount to convert |
| `external_authorization_required` | `public bool` | Whether authorization is required |

Returns: `Token`, `Future`

---

### `transfer_from_public_to_private()`

Converts a public balance to a private token record on behalf of the owner using a pre-approved allowance.

| Parameter | Type | Description |
|---|---|---|
| `token_id` | `public field` | Token identifier |
| `owner` | `public address` | Token owner |
| `recipient` | `address` (private) | Recipient address |
| `amount` | `public u128` | Amount to convert |
| `external_authorization_required` | `public bool` | Whether authorization is required |

Returns: `Token`, `Future`

---

### `transfer_private()`

Transfers tokens between private records.

| Parameter | Type | Description |
|---|---|---|
| `recipient` | `address` (private) | Recipient address |
| `amount` | `u128` | Amount to transfer |
| `input_record` | `Token` | Sender's token record |

Returns: remaining `Token` (sender), receiving `Token` (recipient), `Future`

---

### `transfer_private_to_public()`

Converts a private token record to a public balance.

| Parameter | Type | Description |
|---|---|---|
| `recipient` | `public address` | Recipient address |
| `amount` | `public u128` | Amount to convert |
| `input_record` | `Token` | Token record to consume |

Returns: remaining `Token`, `Future`

---

### `join()`

Merges two private token records of the same token into one. Total amount is unchanged.

| Parameter | Type | Description |
|---|---|---|
| `token_1` | `private Token` | First token record |
| `token_2` | `private Token` | Second token record |

Returns: merged `Token`

---

### `split()`

Splits a private token record into two. Total amount is unchanged.

| Parameter | Type | Description |
|---|---|---|
| `token` | `private Token` | Token record to split |
| `amount` | `private u128` | Amount to split into the first output |

Returns: split `Token`, remaining `Token`
