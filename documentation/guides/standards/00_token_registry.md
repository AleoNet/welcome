---
id: token_registry
title: Token Registry Program
sidebar_label: Token Registry
---

## Overview

The Token Registry Program is a standard program designed for issuing and managing new tokens on the Aleo blockchain. It operates as a singleton program because on Aleo, all imported programs must be known and deployed before the importing program, and dynamic cross-program calls are not currently supported which makes composability difficult to implement. This means that a DeFi program must be compiled with support for all token programs that it will ever interact with. If a new token program is subsequently deployed on-chain, the DeFi program will need to be re-compiled and redeployed on chain in order to interact with that token.

In the near-term, support for program upgradability will resolve this but currently, the issue is circumvented by means of the [token registry](https://explorer.provable.com/program/token_registry.aleo) which can manage balances for many different ARC-20 tokens. This program would be the standard "hub" that all tokens and DeFi programs interface with. Individual ARC-20 tokens can register with the registry and mint new tokens via this program. Transfers of token value will occur by direct call to the registry rather than the ARC-20 program itself. The benefit of this approach is that DeFi programs do not need to be compiled with any special knowledge of individual ARC-20 tokens: their sole dependency will be the registry. Hence the deployment of new tokens does not require re-deployment of DeFi programs. Similarly, individual ARC-20 tokens can also be compiled with dependence on the registry, but no dependence on the DeFi programs. The registry thus allows interoperability between new tokens and DeFi programs, with no need for program re-deployment. As a secondary benefit, the registry will provide privacy benefits (via an improved anonymity set) because all private transfers within the registry will conceal the identity of the specific token being transferred.

This standard is emerged from extensive discussions and the approval of the [ARC-21 proposal](https://vote.aleo.org/p/21) to enable token interoperability across different applications.

<!-- markdown-link-check-disable -->
This documentation outlines the functions of the Token Registry Program and provides guidance on how to use it. The original source code can be found [here](https://github.com/demox-labs/aleo-standard-programs/blob/main/token_registry/src/main.leo).
<!-- markdown-link-check-enable -->

## How to use the Token Registry Program

Anyone can create a new token on Aleo using the `token_registry.aleo` program by calling the `register_token` transition with a unique token ID and specifying any name, symbol, decimals, and maximum supply. An optional `external_authorization_required` boolean grants extra control over token available to spend by requiring extra approval from an `external_authorization_party`, the `external_authorization_party` can unlocks certain amount of balances for spending with expiration over a specific owner's token using `prehook_public` or `prehook_private`. The admin can also set `external_authorization_party` to another address with `update_token_management` later if needed.

Once a token is registered, the tokens can be minted either publicly using `mint_public` or privately to a specific recipient using `mint_private` with roles `MINTER_ROLE` or `SUPPLY_MANAGER_ROLE` if not admin. The tokens can also be burned either publicly with `burn_public` or privately with `burn_private` with roles `BURNER_ROLE` or `SUPPLY_MANAGER_ROLE` if not admin.

The token owner then can transfer the token either publicly using `transfer_public` or privately to a specific recipient using `transfer_private`. The token can also be converted from public to private using `transfer_public_to_private` or from private to public using `transfer_private_to_public`.

For an example of how the flow works, please refer to the [Usage Example with Token Registry Program](../wallets/01_usage_example.md).

## Token Registry Program Data Structures

### Token Record

```leo
  record Token {
    owner: address,
    amount: u128,
    token_id: field,
    external_authorization_required: bool,
    authorized_until: u32
  }
```

#### Token Record Fields

- `owner`: The address of the token owner.
- `amount`: The amount of tokens in the account.
- `token_id`: The unique identifier for the token.
- `external_authorization_required`: Whether or not the token requires external authorization.
- `authorized_until`: The block height until which the token is authorized.

### Token Metadata Struct

```leo
  struct TokenMetadata {
    token_id: field,
    name: u128, // ASCII text represented in bits, and the u128 value of the bitstring
    symbol: u128, // ASCII text represented in bits, and the u128 value of the bitstring
    decimals: u8,
    supply: u128,
    max_supply: u128,
    admin: address,
    external_authorization_required: bool, // whether or not this token requires authorization from an external program before transferring
    external_authorization_party: address
  }
```

#### Token Metadata Struct Fields

- `token_id`: The unique identifier for the token.
- `name`: The name of the token.
- `symbol`: The symbol of the token.
- `decimals`: The number of decimals for the token.
- `supply`: The total supply of the token.
- `max_supply`: The maximum supply of the token.
- `admin`: The address of the token admin.
- `external_authorization_required`: Whether or not the token requires external authorization.
- `external_authorization_party`: The address of the external authorization party.

### Token Owner Struct

```leo
  struct TokenOwner {
    account: address,
    token_id: field
  }
```

#### Token Owner Struct Fields

- `account`: The address of the token owner.
- `token_id`: The unique identifier for the token.

### Balance Struct

```leo
  struct Balance {
    token_id: field,
    account: address,
    balance: u128,
    authorized_until: u32
  }
``` 

#### Balance Struct Fields

- `token_id`: The unique identifier for the token.
- `account`: The address of the token owner.
- `balance`: The balance of the token.
- `authorized_until`: The block height until which the token is authorized.

### Allowance Struct

```leo
  struct Allowance {
    account: address,
    spender: address,
    token_id: field
  }
```

#### Allowance Struct Fields

- `account`: The address of the token owner.
- `spender`: The address of the spender.
- `token_id`: The unique identifier for the token.

## Token Registry Program Mappings

`mapping registered_tokens: field => TokenMetadata;`  
Mapping of token IDs to token metadata structs.

`mapping balances: field => Balance;`  
Mapping of the hash of the token ID and the account address to the balance struct.

`mapping allowances: field => Allowance;`  
Mapping of the hash of the token ID, the account address, and the spender address to the allowance struct.

`mapping roles: field => u8;`  
Mapping of the hash of the token ID and the account address to the role.

## Token Registry Program Constants

`const CREDITS_RESERVED_TOKEN_ID: field = 3443843282313283355522573239085696902919850365217539366784739393210722344986field;`  
Token ID reserved for the ALEO credits token.

`const MINTER_ROLE: u8 = 1u8;`  
Role for the minter.

`const BURNER_ROLE: u8 = 2u8;`  
Role for the burner.

`const SUPPLY_MANAGER_ROLE: u8 = 3u8;`  
Role for the supply manager.

## Token Registry Program Functions

The Token Registry Program includes the following functions:

### `initialize()`
#### Description
Initializes the Token Registry Program by registering the ALEO credits token with predefined metadata. The token is initialized with a specific token ID, name "credits", symbol "credits", 6 decimals, and a max supply of 10 quadrillion. The program sets itself (wrapped_credits.aleo) as the admin and disables external authorization requirements to ensure the token metadata cannot be modified after initialization.

#### Parameters
Parameters are hardcoded in program to safeguard against frontrunning.

#### Returns
None.

### `register_token()`
#### Description
Registers a new token with the Token Registry Program.

#### Parameters
- `public token_id: field`: The unique identifier for the token.
- `public name: u128`: The name of the token.
- `public symbol: u128`: The symbol of the token.
- `public decimals: u8`: The number of decimals for the token.
- `public max_supply: u128`: The maximum supply of the token.
- `public external_authorization_required: bool`: Whether or not the token requires external authorization.
- `public external_authorization_party: address`: The address of the external authorization party.

#### Returns
- `Future`: A Future to finalize the token registration.

### `update_token_management()`
#### Description
Updates the token management settings.

#### Parameters
- `public token_id: field`: The unique identifier for the token.
- `public admin: address`: The address of the admin.
- `public external_authorization_party: address`: The address of the external authorization party.

#### Returns
- `Future`: A Future to finalize the token management update.

### `set_role()`
#### Description
Sets the role for a specific token ID.

#### Parameters
- `public token_id: field`: The unique identifier for the token.
- `public account: address`: The address of the account.
- `public role: u8`: The role to set.

#### Returns
- `Future`: A Future to finalize the role set.

### `remove_role()`
#### Description
Removes the role for a specific token ID.

#### Parameters
- `public token_id: field`: The unique identifier for the token.
- `public account: address`: The address of the account.

#### Returns
- `Future`: A Future to finalize the role removal.

### `mint_public()`
#### Description
Mints a new token publicly by the specific token ID's admin.

#### Parameters
- `public token_id: field`: The unique identifier for the token.
- `public recipient: address`: The address of the recipient.
- `public amount: u128`: The amount of tokens to mint.
- `public authorized_until: u32`: The block height until which the token is authorized.

#### Returns
- `Future`: A Future to finalize the mint.

### `mint_private()`
#### Description
Mints a new token privately by the specific token ID's admin.

#### Parameters
- `public token_id: field`: The unique identifier for the token.
- `recipient: address`: The address of the recipient that is not visible to the public.
- `public amount: u128`: The amount of tokens to mint.
- `public external_authorization_required: bool`: Whether or not the token requires external authorization.
- `public authorized_until: u32`: The block height until which the token is authorized.

#### Returns
- `Token`: The token record.
- `Future`: A Future to finalize the mint.

### `burn_public()`
#### Description
Burns a token publicly by the specific token ID's admin.

#### Parameters
- `public token_id: field`: The unique identifier for the token.
- `public owner: address`: The address of the owner.
- `public amount: u128`: The amount of tokens to burn.

#### Returns
- `Future`: A Future to finalize the burn.

### `burn_private()`
#### Description
Burns a token privately by the specific token ID's admin.

#### Parameters
- `input_record: Token`: The token record.
- `public amount: u128`: The amount of tokens to burn.

#### Returns
- `Token`: The token record with remaining balance.
- `Future`: A Future to finalize the burn.

### `prehook_public()`
#### Description
A function for the authorized party to modify authorized amount and new expiration publicly.

#### Parameters
- `public owner: address`: The address of the owner.
- `public amount: u128`: The amount of tokens to prehook.
- `public authorized_until: u32`: The block height until which the token is authorized.

#### Returns
- `Future`: A Future to finalize the prehook.

### `prehook_private()`
#### Description
A function for the authorized party to modify authorized amount and new expiration privately.

#### Parameters
- `input_record: Token`: The token record.
- `amount: u128`: The amount of tokens to prehook.
- `authorized_until: u32`: The block height until which the token is authorized.

#### Returns
- `Token`: The unauthorized token record.
- `Token`: The authorized token record.
- `Future`: A Future to finalize the prehook.

### `transfer_public()`
#### Description
Transfers a token publicly by the token owner.

#### Parameters
- `public token_id: field`: The unique identifier for the token.
- `public recipient: address`: The address of the recipient.
- `public amount: u128`: The amount of tokens to transfer.

#### Returns
- `Future`: A Future to finalize the transfer.

### `transfer_public_as_signer()`
#### Description
Transfers a token publicly by the token owner as the transaction signer in any arbitrary program calls.

#### Parameters
- `public token_id: field`: The unique identifier for the token.
- `public recipient: address`: The address of the recipient.
- `public amount: u128`: The amount of tokens to transfer.

#### Returns
- `Future`: A Future to finalize the transfer.

### `approve_public()`
#### Description
Approves a token for a spender to be able to transfer the token on behalf of the owner.

#### Parameters
- `public token_id: field`: The unique identifier for the token.
- `public spender: address`: The address of the spender.
- `public amount: u128`: The amount of tokens to approve.

#### Returns
- `Future`: A Future to finalize the approval.

### `unapprove_public()`
#### Description
Revokes or reduces the approval for a spender to transfer the token on behalf of the owner.

#### Parameters
- `public token_id: field`: The unique identifier for the token.
- `public spender: address`: The address of the spender.
- `public amount: u128`: The amount of tokens to unapprove.

#### Returns
- `Future`: A Future to finalize the unapproval.

### `transfer_from_public()`
#### Description
Transfers a token from the owner to the recipient after getting approval from the owner.

#### Parameters
- `public token_id: field`: The unique identifier for the token.
- `public owner: address`: The address of the owner.
- `public recipient: address`: The address of the recipient.
- `public amount: u128`: The amount of tokens to transfer.

#### Returns
- `Future`: A Future to finalize the transfer.

### `transfer_public_to_private()`
#### Description
Convert public token to private token by its owner.

#### Parameters
- `public token_id: field`: The unique identifier for the token.
- `recipient: address`: The address of the recipient that is not visible to the public.
- `public amount: u128`: The amount of tokens to transfer.
- `public external_authorization_required: bool`: Whether or not the token requires external authorization.

#### Returns
- `Token`: The token record.
- `Future`: A Future to finalize the transfer.

### `transfer_from_public_to_private()`
#### Description
Convert public token to private token on behalf of the token owner after getting approval from the owner.

#### Parameters
- `public token_id: field`: The unique identifier for the token.
- `public owner: address`: The address of the owner.
- `recipient: address`: The address of the recipient that is not visible to the public.
- `public amount: u128`: The amount of tokens to transfer.
- `public external_authorization_required: bool`: Whether or not the token requires external authorization.

#### Returns
- `Token`: The token record.
- `Future`: A Future to finalize the transfer.

### `transfer_private()`
#### Description
Transfers a token privately by the token owner.

#### Parameters
- `recipient: address`: The address of the recipient that is not visible to the public.
- `amount: u128`: The amount of tokens to transfer.
- `input_record: Token`: The token record.

#### Returns
- `Token`: The remaining token record.
- `Token`: The receiving token record.
- `Future`: A Future to finalize the transfer.

### `transfer_private_to_public()`
#### Description
Convert private token to public token by the token owner.

#### Parameters
- `public recipient: address`: The address of the recipient that is visible to the public.
- `public amount: u128`: The amount of tokens to transfer.
- `input_record: Token`: The token record.

#### Returns
- `Token`: The remaining token record.
- `Future`: A Future to finalize the transfer.

### `join()`
#### Description
Joins two private token records and become one single record. Does not change the total amount of the tokens.

#### Parameters
- `private token_1: Token`: The first token record.
- `private token_2: Token`: The second token record.

#### Returns
- `Token`: The joined token record.

### `split()`
#### Description
Splits a private token record into two new token records. Does not change the total amount of the tokens.

#### Parameters
- `private token: Token`: The token record.
- `private amount: u128`: The amount of tokens to split.

#### Returns
- `Token`: The splitted token record.
- `Token`: The remaining token record.
