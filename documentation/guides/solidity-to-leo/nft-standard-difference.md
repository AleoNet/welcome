---
id: nft-standard-difference
title: NFT Standard Differences
sidebar_label: NFT Standard Differences
---

## Introduction

ERC-721 is the standard for non-fungible tokens on Ethereum, but every piece of state (owner, metadata, price) is public.  

ARC-721, the Aleo variant implemented in Leo, maintains the same ergonomics while allowing you to choose which parts remain private and which are stored on-chain. The standard originated from the [ARC-721 proposal](https://github.com/ProvableHQ/ARCs/discussions/79) and was officially approved through community voting on [Aleo Governance](https://vote.aleo.org/p/721). The standard leverages Aleo's unique privacy features to provide enhanced functionality compared to ERC-721. For example, every NFT in ARC-721 has two separate privacy controls: one for ownership and one for the NFT data itself, with configurable privacy settings for both. For more detailed information about the NFT standards and implementation details, please refer to the [NFT Standards documentation](../standards/01_nft_standards.md).

To address program composability challenges on Aleo, there is a proposed [NFT Registry Program (ARC-722)](https://github.com/ProvableHQ/ARCs/discussions/80) that would serve as a central hub for NFT collections, similar to how the [Token Registry Program](../standards/00_token_registry.md) works for fungible tokens. This registry would allow multiple implementations with different data structures, identified by the unique pair (registry_program_id, collection_id). Note that ARC-722 is currently in the proposal stage and has not yet been voted on or approved by the Aleo community.

## Quick-glance Comparison

| Function                     | **ERC-721 (Ethereum)**             | **ARC-721 (Aleo)**                                                                                            |
| ---------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Owner visibility**         | Always public                      | Optional — private record *or* public mapping                                                                 |
| **Metadata visibility**      | Whatever you publish is visible    | Private, public or hybrid (mixed on-/off-chain)                                                               |
| **Unique identifier**        | Incremental `tokenId uint256`      | Commitment `field = hash(data) ⊕ edition` (opaque)                                                            |
| **Transfer functions**       | `transferFrom`, `safeTransferFrom` | `transfer_private`, `transfer_private_to_public`, `transfer_public_as_signer`, `transfer_public_to_private`   |
| **Approvals**                | `approve`, `setApprovalForAll`     | `approve_public`, `set_for_all_approval`                                                                      |
| **Burn & re-mint privately** | Not possible without trace         | `update_edition_private` re-obfuscates commit                                                                 |

## Architectural Differences

### State Management

**ERC-721**
```solidity
contract ERC721 {
    // Token name
    string private _name;

    // Token symbol
    string private _symbol;

    // Mapping from token ID to owner address
    mapping(uint256 => address) private _owners;

    // Mapping owner address to token count
    mapping(address => uint256) private _balances;

    // Mapping from token ID to approved address
    mapping(uint256 => address) private _tokenApprovals;
}
```

**ARC-721**

Below is the example data structure of an ARC-721 NFT program, using record as private storage and mappings as public storage. Name of the structs don't necessarily have to match `data` and `attribute`, allowing to import several NFT collection program without shadowing:

```leo
record NFT {
    private owner: address,   // hidden unless revealed
    private data: data,      // on-chain struct (can mirror off-chain JSON)
    private edition: scalar,  // as obfuscator to store NFT commitment on-chain
}

// NFT data is always private and store in NFTView even if ownership is made public
// is_view is always true, to differentiate NFTView from NFT in plaintext representations of records
record NFTView {
    private owner: address,
    private data: data,
    private edition: scalar,
    public is_view: bool
}

// Example attribute, optional
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

// On-chain NFT data storage if made public 
struct nft_content {
    data: data,
    edition: scalar
}
mapping nft_contents: field => nft_content; // commit(data, edition) => (data, edition)

// Approval data structure
struct Approval {
    collection_id: field,
    approver: address,
    spender: address,
}
mapping for_all_approvals: field => bool     // approval hash → bool
mapping nft_approvals:     field => field    // commit → approval hash
```

### String Management

Since Leo doesn't have a native string type, strings are managed using arrays of `field` elements:

```leo
// Example attribute, optional
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

Key points about string management in Leo:
- The array length can be adjusted based on the maximum number of characters needed
- Fields are used instead of u128 because they offer approximately twice the amount of data for the same constraints
- This approach is particularly useful for storing metadata URIs and other string data in NFTs
- For JavaScript/TypeScript applications, an example [utility](https://github.com/zsociety-io/aleo-standard-programs/blob/main/arc721/utils/strings.js) is available in the ARC-721 implementation to convert between JavaScript strings and Aleo plaintexts

### NFT Identifier

**ERC-721**

In ERC-721, NFTs are identified by a simple incremental `uint256 tokenId`.

**ARC-721**

NFT commit is used to identify each unique NFT in ARC-721:

```leo
mapping nft_commits: field => bool; // NFT commit => NFT exists or has existed

inline commit_nft(
    nft_data: data,
    nft_edition: scalar
) -> field {
    let data_hash: field = BHP256::hash_to_field(nft_data);
    let commitment: field = BHP256::commit_to_field(data_hash, nft_edition);
    return commitment;
}
```

### NFT Creation and Structure

**ERC-721**

ERC-721 provides a standard minting function with optional extensions for custom capabilities.

```solidity
contract MyNFT is ERC721 {
    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}
    
    function mint(address to, uint256 tokenId) public {
        _mint(to, tokenId);
    }
}
```

**ARC-721**  

ARC-721 provides flexibility in defining custom NFT creation logic as the NFT program is deployed by developers. The standard implementation includes functions for minting NFTs with different privacy settings:

```leo
// Mints a private NFT
// Returns the NFT record that representing ownership and contains NFT data.
async transition mint_private(
    admin_nft: nft_records.aleo/NFT,
    private recipient: address,
    private nft_data: Data,
    private nft_edition: scalar,
) -> (nft_records.aleo/NFT, Future) 

// Mints a private NFT, verifying admin rights during finalization publicly.
// Returns the NFT record that representing ownership and contains NFT data.
async transition mint_private_as_public(
    private recipient: address,
    private collection_id: field,
    private nft_data: Data,
    private nft_edition: scalar,
) -> (nft_records.aleo/NFT, Future)

// Mints a public NFT, with private admin as authorization.
// Returns NFTView record that contains private NFT data, ownership is stored publicly on-chain.
async transition mint_public_as_private(
    admin_nft: nft_records.aleo/NFT,
    public recipient: address,
    private nft_data: Data,
    private nft_edition: scalar,
) -> (nft_records.aleo/NFTView, Future)

// Mints a public NFT
// Returns NFTView record that contains private NFT data, ownership is stored publicly on-chain.
async transition mint_public(
    public recipient: address,
    public collection_id: field,
    private nft_data: Data,
    private nft_edition: scalar,
) -> (nft_records.aleo/NFTView, Future)

// Make a NFT data public
async transition publish_nft_content(
    public nft_data: Data,
    public nft_edition: scalar,
) -> Future
```

### Transfer Mechanisms

**ERC-721**
```solidity
function transferFrom(address from, address to, uint256 tokenId) public
function safeTransferFrom(address from, address to, uint256 tokenId) public
```

**ARC-721**
```leo
// Private transfer
transition transfer_private(
    private nft: NFT,
    private to: address,
) -> NFT

// Public transfer from function caller (msg.sender)
async transition transfer_public(
    private nft_data: data,
    private nft_edition: scalar,
    public to: address,
) -> (NFTView, Future)

// Public transfer from transaction signer (tx.origin)
async transition transfer_public_as_signer(
    private collection_id: field,
    private nft_data: Data,
    private nft_edition: scalar,
    public recipient: address,
) -> (NFTView, Future)

// Public transfer by an approved spender
async transition transfer_from_public(
    public from: address,
    public to: address,
    private nft_data: data,
    private nft_edition: scalar,
) -> (NFTView, Future)

// Convert private NFT ownership to public NFT ownership
async transition transfer_private_to_public(
    nft: nft_records.aleo/NFT,
    public recipient: address,
) -> (nft_records.aleo/NFTView, Future)

// Convert public NFT ownership to private NFT ownership
async transition transfer_public_to_private(
    private nft_data: data,
    private nft_edition: scalar,
    private to: address,
) -> (NFT, Future)

// Convert public NFT ownership to private NFT ownership by an approved sender
async transition transfer_from_public_to_private(
    private collection_id: field,
    public from: address,
    public recipient: address,
    private nft_data: Data,
    private nft_edition: scalar,
) -> (NFT, Future)
```

#### Transfer flows side by side

| **Transfer Flow**       | **ERC-721 (Solidity)**              | **ARC-721 (Leo)**                                                                | **Privacy Level**                                            |
| ----------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| **Private → Private**   | ❌ Not Supported                     | `transfer_private`                                                                         | Fully private — no public trace                                |
| **Private → Public**    | ❌ Not Supported                     | `transfer_private_to_public`           | Owner becomes visible; content stay hidden in `NFTView`                 |
| **Public → Public**     | `transferFrom` / `safeTransferFrom` | `transfer_public` (via `self.caller`) `transfer_public_as_signer` (via `self.signer`)   | Matches ERC-721 behavior with added flexibility                |
| **Public → Private**    | ❌ Not Supported                     | `transfer_public_to_private`   `transfer_from_public_to_private`  | Ownership becomes private; asset vanishes from public registry |
| **Public (by Spender)** | `transferFrom` with `approve()`     | `transfer_from_public`   `transfer_from_public_to_private`  | Approved delegated transfers, public or private                |

### Approval System

**ERC-721**
```solidity
function approve(address to, uint256 tokenId) public
function setApprovalForAll(address operator, bool approved) public
```

**ARC-721**
```leo
// Collection-wide approval
async transition set_for_all_approval(
    private spender: address,
    public new_value: bool,
) -> Future

// Individual NFT approval
async transition approve_public(
    private spender: address,
    private nft_data: data,
    private nft_edition: scalar,
) -> Future

// Revoke approval
async transition unapprove_public(
    private collection_id: field,
    private nft_data: Data,
    private nft_edition: scalar,
) -> Future
```

## Settings

ARC-721 also recommended standard setting for collection:

```leo
mapping general_settings: u8 => field;  // Setting index => Setting value
```

- `0u8` - Amount of mintable NFTs (all editions)
- `1u8` - Number of total NFTs (first-editions) that can be minted
- `2u8` - Symbol for the NFT
- `3u8` - Base URI for NFT, part 1
- `4u8` - Base URI for NFT, part 2
- `5u8` - Base URI for NFT, part 3
- `6u8` - Base URI for NFT, part 4
- `7u8` - Admin address hash

## Edition
ARC-721 introduces the edition field as a mandatory scalar inside every NFT record. The reason for using edition is three-fold:

**Privacy salt** – edition is mixed with the BHP256 hash of the NFT's data to form
`nft_commit = BHP256::commit_to_field(BHP256::hash_to_field(data), edition)`.
This blinding factor prevents brute force attacks that attempt to determine if two commits contain the same underlying data.

**Uniqueness anchor** – Because the commit depends on edition, any change (even when
data is identical) produces a brand-new nft_commit, guaranteeing each token is non-fungible.

**Re-obfuscation** –
Owners may "rotate" privacy by choosing a fresh random scalar and calling `update_edition_private`, breaking on-chain linkage to prior transfers.

## Publishing (and re-hiding) content

When an NFT's data should become public, the owner calls:

```leo
transition publish_nft_content(nft_data, nft_edition)
```

which copies the cleartext struct into:

```leo
mapping nft_contents: field => nft_content;
```

If you later need to hide it again:

1. Bring the NFT **private** with `transfer_public_to_private`.
2. Call `update_edition_private` to roll the commitment.


## Privacy Features

The ARC-721 standard provides several privacy-enhancing features:

1. **Private Ownership**
   - NFTs can be held privately using Aleo records
   - Ownership can be verified without revealing the owner's identity
   - Supports conversion between private and public ownership states

2. **Private Data**
   - NFT data is kept private by default
   - Optional data publication through `publish_nft_content`

3. **Edition-based Privacy**
   - Each NFT has a unique edition number (scalar)
   - Editions enable privacy while maintaining uniqueness
   - Supports edition updates for re-obfuscation

4. **Flexible Visibility**
   - `NFTView` record type for public ownership with private data
   - `NFT` record type for fully private ownership
   - Built-in conversion functions between states
