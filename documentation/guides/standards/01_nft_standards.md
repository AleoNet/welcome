---
id: nft_standards
title: NFT Standards
sidebar_label: NFT Standards
---

## Overview

The NFT Standards document outlines the specifications for implementing Non-Fungible Tokens (NFTs) on the Aleo blockchain. This standard emerged from the [ARC-0721 proposal](https://github.com/ProvableHQ/ARCs/discussions/79) and was officially approved through community voting on [Aleo Governance](https://vote.aleo.org/p/721).

Similar to the Token Registry Program, the NFT standard faces challenges with program composability due to Aleo's current limitations on dynamic cross-program calls. To address this, an [NFT Registry Program (ARC-722)](https://github.com/ProvableHQ/ARCs/discussions/80) has been proposed, which would serve as a central hub for NFT collections and enable better interoperability between NFTs and DeFi applications.

## Key Features

The standard leverages Aleo's unique privacy features to provide:
- Private or public token owner visibility
- Private or public data associated with the token
- Flexible on-chain and off-chain data storage options

## Data Storage Options

### On-chain vs Off-chain Data

The standard allows for NFT data to be stored in three ways:

1. **On-chain Data**
   - Direct storage of data on the blockchain
   - Enables use of data as input/outputs of zk-circuits
   - Can be either the complete data or a hash of the data
   - Provides transactional guarantees for data access

2. **Off-chain Data**
   - Reduces storage fees on the network
   - Typically stored as URIs pointing to external metadata
   - Can be combined with on-chain data for hybrid approaches

3. **Hybrid Approach**
   - Combination of on-chain and off-chain storage
   - Critical data stored on-chain
   - Supplementary data stored off-chain
   - Provides balance between cost and functionality

## Data Structures

### NFT Record

```leo
record NFT {
    private owner: address,
    private data: data,
    private edition: scalar,
}
```

#### NFT Record Fields
- `owner`: The private address of the NFT owner
- `data`: The private data associated with the NFT
- `edition`: A scalar value used for uniqueness and privacy

### NFT View Record

```leo
record NFTView {
    private owner: address,
    private data: data,
    private edition: scalar,
    private is_view: bool
}
```

#### NFT View Record Fields
- `owner`: The private address of the NFT owner
- `data`: The private data associated with the NFT
- `edition`: A scalar value used for uniqueness and privacy
- `is_view`: A boolean flag to differentiate NFTView from NFT (always true)

### Data Structure

```leo
struct attribute {
    trait_type: [field; 4],
    _value: [field; 4],
}

struct data {
    metadata: [field; 4], // URI of offchain metadata JSON
    // (optional) name: [field; 4],
    // (optional) image: [field; 16],
    // (optional) attributes: [attribute; 4],
    // (optional) ...
}
```

#### Data Structure Fields
- `metadata`: URI pointing to off-chain metadata JSON
- `name`: Optional name of the NFT
- `image`: Optional image data
- `attributes`: Optional array of attributes

An example of such an off-chain metadata JSON can be found [here](https://aleo-public.s3.us-west-2.amazonaws.com/testnet3/privacy-pride/1.json).

### NFT Content Struct

```leo
struct nft_content {
    data: data,
    edition: scalar
}
```

#### NFT Content Struct Fields
- `data`: The data associated with the NFT
- `edition`: The edition number of the NFT

## Mappings

`mapping nft_commits: field => bool;`  
Mapping of NFT commits to their existence status.

`mapping nft_owners: field => address;`  
Mapping of NFT commits to their public owners.

`mapping nft_contents: field => nft_content;`  
Mapping of NFT commits to their public content.

## Functions

### `commit_nft()`
#### Description
Creates a unique identifier for an NFT by committing its data and edition to a field.

#### Parameters
- `nft_data: data`: The data of the NFT
- `nft_edition: scalar`: The edition number of the NFT

#### Returns
- `field`: The NFT commit identifier

### `transfer_private_to_public()`
#### Description
Converts a privately owned NFT to public ownership.

#### Parameters
- `private nft: NFT`: The NFT record to convert
- `public to: address`: The public recipient address

#### Returns
- `NFTView`: The NFT view record
- `Future`: A Future to finalize the transfer

### `publish_nft_content()`
#### Description
Publishes NFT content to make it publicly accessible.

#### Parameters
- `public nft_data: data`: The NFT data to publish
- `public nft_edition: scalar`: The edition number to publish

#### Returns
- `Future`: A Future to finalize the publication

### `update_edition_private()`
#### Description
Updates the edition of a private NFT to re-obfuscate its content.

#### Parameters
- `private nft: NFT`: The NFT record to update
- `private new_edition: scalar`: The new edition number

#### Returns
- `NFT`: The updated NFT record
- `Future`: A Future to finalize the update

## String Encoding

NFTs heavily rely on the use of strings, either for URL to off-chain data or for data itself. The standard specifies the following encoding for strings:

```leo
// Leo
string: [field; 4],

// Aleo instructions
string as [field; 4u32];
```

The length of the array can be freely adapted to match the maximum amount of characters required by the collection. The choice of fields type is motivated by the fact that they offer close to twice the amount of data for the same constraints as u128.

For JavaScript/TypeScript applications, an example for converting between JavaScript strings and Aleo plaintexts is available in the [ARC-721 implementation](https://github.com/zsociety-io/aleo-standard-programs/blob/main/arc721/utils/strings.js).

## Privacy Features

The standard implements privacy through several mechanisms:

### Ownership Privacy
- Private ownership is achieved through Aleo records
- Public ownership can be enabled via the `nft_owners` mapping
- Programs can own NFTs without revealing their data

### Data Privacy
- NFT data is kept private by default in records
- The `edition` scalar ensures uniqueness without revealing data
- NFT commits serve as unique identifiers without exposing underlying data

### Re-obfuscation
NFTs can be re-obfuscated through a two-step process:
1. Transfer back to private ownership
2. Update the edition using `update_edition_private()`

```leo
async transition update_edition_private(
    private nft: NFT,
    private new_edition: scalar,
) -> (NFT, Future) {
    let out_nft: NFT = NFT {
        owner: nft.owner,
        data: nft.data,
        edition: new_edition,
    };
    let nft_commit: field = commit_nft(nft.data, new_edition);

    let update_edition_private_future: Future = finalize_update_edition_private(
        nft_commit
    );
    return (out_nft, update_edition_private_future);
}

async function finalize_update_edition_private(
    nft_commit: field,
) {
    assert(nft_commits.contains(nft_commit).not());
    nft_commits.set(nft_commit, true);
}
```

Important privacy considerations:
- Previous NFT commits remain in the mapping to prevent revealing data relationships
- New editions must be unique
- Process maintains data privacy while creating new public identifiers

## Approvals
The standard includes an approval mechanism that allows designated addresses to transfer NFTs on behalf of the owner. The approval system supports both collection-wide and individual NFT approvals:

```leo
struct approval {
    approver: address,
    spender: address
}

mapping for_all_approvals: field => bool; 
// Approval hash => Is approved

mapping nft_approvals: field => field;
// NFT commit => Approval hash
```

The approval system provides two main functions:
1. `set_for_all_approval`: Allows an owner to approve a spender for all NFTs in the collection
2. `approve_public`: Allows an owner to approve a spender for a specific NFT

Once approved, the spender can use `transfer_from_public` to transfer the NFT from the approver to a recipient address.

## Settings
Collection-level settings are managed through a mapping:

```leo
mapping general_settings: u8 => field;
// Setting index => Setting value
```

Available settings indices and their purposes:
- `0u8`: Amount of mintable NFTs (all editions)
- `1u8`: Number of total NFTs (first-editions) that can be minted
- `2u8`: Symbol for the NFT
- `3u8`: Base URI for NFT, part 1
- `4u8`: Base URI for NFT, part 2
- `5u8`: Base URI for NFT, part 3
- `6u8`: Base URI for NFT, part 4
- `7u8`: Admin address hash

These settings allow for fine-grained control over the NFT collection's properties, including minting limits, metadata location, and administrative controls.

## Implementation Notes

1. The standard is compatible with ARC21 standard for name and symbol of fungible tokens.

2. For collections where data can become public ("publishable collections"), the standard provides mechanisms to publish and manage public content while maintaining the option to re-obfuscate data when needed.

3. The [NFT Registry Program (ARC-722)](https://github.com/ProvableHQ/ARCs/discussions/80) is proposed to address program composability challenges, similar to how the [Token Registry Program](./00_token_registry.md) works for fungible tokens. This registry would allow multiple implementations with different data structures, identified by the unique pair (registry_program_id, collection_id).