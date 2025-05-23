---
id: ans
title: Aleo Name Service
sidebar_label: Aleo Name Service
---

## Overview

The Aleo Name Service (ANS) is a standard program designed for managing human-readable domain names on the Aleo blockchain. This standard emerged from the [ARC-137 proposal](https://github.com/ProvableHQ/ARCs/discussions/45) and was officially approved through community voting on [Aleo Governance](https://vote.aleo.org/p/137).

ANS aims to simplify the interaction with Aleo's resources by allowing memorable and updatable human-readable identifiers. It supports both public and private domain names, each serving distinct use cases and privacy needs. Public domain names provide stable, human-readable identifiers that can be used to specify network resources, while private domain names enable private transfer of Aleo Credits (ACs) without revealing the recipient's real Aleo address.

This documentation outlines the functions of the Aleo Name Service Program and provides guidance on how to use it. The original source code can be found in the [GitHub Repository](https://github.com/S-T-Soft/ans-programs).

## ANS Components

The Aleo Name Service consists of three main components:

1. Registry Program: Manages the domain name system, mapping names to resolvers and allowing updates to these mappings
2. Registrars: Handle domain name assignments and top-level domain management
3. Resolvers: Process resource lookups and return requested data

## Registry Program

The Registry Program is the core component of ANS, responsible for managing the domain name system and maintaining the mappings between names and their associated data.

### Data Structures

#### Name Struct

```leo
struct Name {
    name: [u128; 4],
    parent: field // The name_hash of the parent name, for top level domain(tld), this attribute is 0field.
}
```

#### NameStruct

```leo
struct NameStruct {
    name: [u128; 4],
    parent: field,
    resolver: field // The resolver program address
}
```

#### Data Struct

```leo
struct data {
    metadata: [field; 4], // the first element is the name_hash of the name
}
```

#### NFT Record

```leo
record NFT {
    owner: address,
    data: data,
    edition: scalar
}
```

#### NFTView Record

```leo
record NFTView {
    owner: address,
    data: data,
    edition: scalar,
    is_view: bool
}
```

### Mappings

```leo
mapping nft_owners: field => address;  
mapping names: field => NameStruct;  
mapping tlds: field => [u128; 4];  
mapping primary_names: address => field;  
mapping name_versions: field => u64;  
mapping resolvers: ResolverIndex => [u128; 4];  
mapping domain_credits: field => u64;  
```

### Core Functions

The Registry Program provides the following core functions:

- `register_tld()`: Registers a new top-level domain
- `register()`: Registers a new domain name
- `register_private()`: Registers a private subdomain
- `register_public()`: Registers a public domain
- `transfer_private()`: Transfers ownership of a private domain
- `transfer_public()`: Transfers ownership of a public domain
- `set_primary_name()`: Sets a domain as the primary name for an address
- `unset_primary_name()`: Removes the primary name setting
- `set_resolver()`: Sets the resolver address for a domain

## Registrars

Registrars are responsible for managing domain name assignments and top-level domain (TLD) operations. They work in conjunction with the Registry Program to handle domain registration and management.

### Registrar Functions

- Domain name validation
- TLD management
- Registration fee handling
- Domain renewal processing

## Resolvers

Resolvers are specialized programs that process resource lookups and return requested data for domains. They handle the actual resolution of domain names to their associated resources.

### Resolver Functions

- Resource lookup processing
- Data resolution
- Record management
- Version control

### ResolverIndex Struct

```leo
struct ResolverIndex {
    name: field, // The name_hash of the domain
    category: u128, // The type of the resolver
    version: u64 // The version of the resolver
}
```

### Resolver Operations

- `set_resolver_record()`: Sets a resolver record for a private domain
- `unset_resolver_record()`: Removes a resolver record for a private domain
- `set_resolver_record_public()`: Sets a resolver record for a public domain
- `unset_resolver_record_public()`: Removes a resolver record for a public domain

## Privacy Credit Transfer Scheme

The Privacy Credit Transfer Scheme is an innovative feature built upon the Aleo Name Service (ANS) that facilitates the private transfer of credits. This scheme ensures that neither party in the transaction is required to disclose their Aleo address, thereby enhancing privacy while maintaining ease of use.

### Transfer Credits

This function enables the transfer of credits to an ANS domain without revealing the recipient's real Aleo address. It involves a secret that allows the domain holder to claim the transferred credits privately.

#### Transfer private credits to ANS name

```leo
// Function for transferring credits to an ANS domain without revealing the domain holder's real address.
// @param receiver: The name_hash of the recipient ANS domain.
// @param secret: The secret associated with the transaction, used for claim verification.
// @param amount: The amount of credits to be transferred.
// @param pay_record: The record of the payment being made.
transition transfer_credits(receiver: field, secret: [u128; 2], amount: u64, pay_record: credits.leo/credits)
```

#### Transfer public credits to ANS name

```leo
// Function for transferring credits to an ANS domain without revealing the domain holder's real address.
// @param receiver: The name_hash of the recipient ANS domain.
// @param secret: The secret associated with the transaction, used for claim verification.
// @param amount: The amount of credits to be transferred.
transition transfer_credits_public(receiver: field, secret: [u128; 2], amount: u64)
```

### Claim Credits

These functions allow domain holders to claim the transferred credits. Depending on whether the domain is public or private, the appropriate claim function is used.

#### Claim Credits Private

```leo
// Function for a domain holder to claim credits using a private ANS domain represented by an NFT and a secret.
// This ensures that the claim process remains private and the domain holder's real address is not exposed.
// @param receiver: The receiver address
// @param nft: The NFT record representing the private ANS domain.
// @param secret: The secret used to verify the claim.
// @param amount: The amount of credits to be claimed.
transition claim_credits_private(receiver: address, nft: NFT, secret: [u128; 2], amount: u64)
```

#### Claim Credits Public - the caller is the owner of the ANS name

```leo
// Similar to the private claim function, this enables the claiming of credits for a public ANS domain.
// The domain holder uses a secret to claim the credits, maintaining privacy.
// @param receiver: The receiver address
// @param name_hash: The name_hash of the public ANS domain.
// @param secret: The secret used to verify the claim.
// @param amount: The amount of credits to be claimed.
transition claim_credits_public(receiver: address, name_hash: field, secret: [u128; 2], amount: u64)
```

#### Claim Credits as Signer - the signer is the owner of the ANS name

```leo
// Similar to the private claim function, this enables the claiming of credits for a public ANS domain.
// The domain holder uses a secret to claim the credits, maintaining privacy.
// @param receiver: The receiver address
// @param name_hash: The name_hash of the public ANS domain.
// @param secret: The secret used to verify the claim.
// @param amount: The amount of credits to be claimed.
transition claim_credits_as_signer(receiver: address, name_hash: field, secret: [u128; 2], amount: u64)
```

## Compatibility with ARC-0721

The Aleo Name Service (ANS) aims to be as compatible as possible with the [ARC-0721 standard](https://github.com/AleoHQ/ARCs/discussions/79), which establishes a framework for non-fungible tokens on the Aleo platform. However, there are some irreconcilable differences between the two, primarily due to the unique requirements of the ANS.

### Divergence in NFT Structure

One of the key differences lies in the structure of the NFT used within ANS. While ARC-0721 defines a standard structure for NFTs, ANS requires a dynamic approach to the data field within the NFT record. This is due to the nature of domain name registration, where each NFT must reflect a unique identifier (name_hash) that is only determined at the time of domain registration by the user. Below is the ANS-specific NFT structure:

```leo
// The ANS NFT structure diverges from ARC-0721 in the `data` field.
// Here, `data` is not predefined but is dynamically created based on the domain name registered by the user.
// This `data` serves as the name_hash of the name, uniquely identifying the domain within ANS.
record NFT {
    owner: address,
    data: data, 
    edition: scalar // The edition number, similar to ARC-0721's structure.
}
```

### Embracing Differences for Enhanced Functionality

The modifications to the NFT structure within ANS are necessary to support the protocol's functionality and objectives. While ANS strives to align with existing standards like ARC-0721, it also recognizes the need to innovate and adapt its NFT representation to serve its unique purpose effectively. This approach ensures that ANS can provide a robust and privacy-centric naming service that complements the broader Aleo ecosystem.

It is important for the community and developers to be aware of these differences for a seamless integration and to leverage the strengths of both standards where they apply.

## Usage Example

For a complete example of how the flow works, please refer to the [Usage Example with Aleo Name Service](../wallets/01_usage_example.md).