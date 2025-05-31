---
id: nft-standard-difference
title: NFT Standard Differences
sidebar_label: NFT Standard Differences
---

## Current Implementation: ARC721

The ARC721 standard emerged from the [ARC-0721 proposal](https://github.com/ProvableHQ/ARCs/discussions/79) and was officially approved through community voting on [Aleo Governance](https://vote.aleo.org/p/721). The standard leverages Aleo's unique privacy features to provide enhanced functionality compared to ERC721.

For more detailed information about the NFT standards and implementation details, please refer to the [NFT Standards documentation](../standards/01_nft_standards.md).

## Architectural Differences

### Program Structure

**ERC721**
- Each NFT collection is deployed as a separate smart contract
- Requires approval flow for NFT transfers
- New smart contract deployment needed for each collection

**ARC721**
- Each NFT collection is a separate program currently (addressing composability issue with [NFT Registry Program (ARC722)](https://github.com/ProvableHQ/ARCs/discussions/80))
- Optional approval flow for NFT transfers
- New program deployment needed for each collection

### State Management

**ERC721**
- State is stored within each collection contract
- Uses mappings for token ownership and approvals
- Direct state access within contract

**ARC721**
- State is managed through program mappings
- Uses mappings for NFT commits, owners, and contents
- State access through API endpoints or `mappings::get()` calls within async function

## Functional Differences

### NFT Creation

**ERC721**
```solidity
contract MyNFT is ERC721 {
    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}
    
    function mint(address to, uint256 tokenId) public {
        _mint(to, tokenId);
    }
}
```

**ARC721**
```leo
// Create NFT record
record NFT {
    private owner: address,
    private data: data,
    private edition: scalar,
}

// Commit NFT to program state
commit_nft(
    nft_data: data,
    nft_edition: scalar
) -> field
```

### NFT Transfer

**ERC721**
```solidity
function transferFrom(address from, address to, uint256 tokenId) public
function safeTransferFrom(address from, address to, uint256 tokenId) public
```

**ARC721**
```leo
// Private transfer
transfer_private(
    private nft: NFT,
    private to: address
) -> NFT

// Public transfer
transfer_public(
    public nft_commit: field,
    public to: address
)

// Transfer from (after approval)
transfer_from_public(
    public nft_commit: field,
    public from: address,
    public to: address
)
```

### NFT Approval

**ERC721**
```solidity
function approve(address to, uint256 tokenId) public
function setApprovalForAll(address operator, bool approved) public
```

**ARC721**
```leo
// Collection-wide approval
set_for_all_approval(
    public approver: address,
    public spender: address
)

// Individual NFT approval
approve_public(
    public nft_commit: field,
    public approver: address,
    public spender: address
)
```

### Metadata and Content

**ERC721**
```solidity
function tokenURI(uint256 tokenId) public view returns (string memory)
```

**ARC721**
```leo
struct data {
    metadata: [field; 4], // URI of offchain metadata JSON
    // Optional fields for on-chain data
    // name: [field; 4],
    // image: [field; 16],
    // attributes: [attribute; 4],
}
```

## ARC721-Specific Features

### Edition System

The edition system in ARC721 serves multiple purposes:

1. **Uniqueness Guarantee**
   - Each NFT has a unique edition number (scalar)
   - Editions are used to generate unique commits without revealing data
   - Prevents duplicate NFTs while maintaining privacy

2. **Privacy Enhancement**
   - Editions act as obfuscators for NFT data
   - Allows verification of uniqueness without revealing content
   - Enables re-obfuscation through edition updates

3. **Commit Generation**
```leo
inline commit_nft(
    nft_data: data,
    nft_edition: scalar
) -> field {
    let data_hash: field = BHP256::hash_to_field(nft_data);
    let nft_commit: field = BHP256::commit_to_field(data_hash, nft_edition);
    return nft_commit;
}
```

### NFTView Record

The NFTView record is a specialized record type that enables public ownership while maintaining data privacy:

1. **Structure**
```leo
record NFTView {
    private owner: address,
    private data: data,
    private edition: scalar,
    private is_view: bool
}
```

2. **Purpose**
   - Enables programs to own NFTs without revealing their data
   - Serves as a vehicle for NFT data during public transfers
   - Maintains privacy while allowing public ownership

3. **Usage in Transfers**
```leo
async transition transfer_private_to_public(
    private nft: NFT,
    public to: address,
) -> (NFTView, Future) {
    let nft_commit: field = commit_nft(nft.data, nft.edition);
    let nft_view: NFTView = NFTView {
        owner: to,
        data: nft.data,
        edition: nft.edition,
        is_view: true
    };
    let transfer_private_to_public_future: Future =
        finalize_transfer_private_to_public(
            to, nft_commit
        );
    return (
        nft_view,
        transfer_private_to_public_future
    );
}
```

4. **Key Benefits**
   - Enables private data transfer to public owners
   - Maintains data privacy in program-to-program transfers
   - Supports marketplace and escrow functionality

### Settings Management

The ARC721 standard includes a flexible settings management system through a mapping:

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

## Privacy Features

The ARC721 standard provides additional privacy features not available in ERC721:

1. **Private Ownership**: NFT ownership can be kept private using Aleo records
2. **Private Data**: NFT data can be kept private by default
3. **Edition-based Privacy**: Unique edition numbers ensure privacy while maintaining uniqueness
4. **Re-obfuscation**: Ability to update NFT editions to re-obfuscate content
5. **Public/Private Conversion**: Convert between public and private ownership

### Privacy Implementation Details

The ARC721 standard implements privacy through several key mechanisms:

1. **Record-based Privacy**
   - NFTs are represented as Aleo records with private fields
   - Ownership and data remain private by default
   - Records can be spent only by their owners

2. **Edition-based Uniqueness**
   - Each NFT has a unique edition number (scalar)
   - Editions are used to generate unique commits without revealing data
   - Enables privacy while maintaining non-fungibility

3. **Flexible Visibility**
   - Owners can choose to make ownership public while keeping data private
   - Data can be published or kept private based on use case
   - Supports both private and public transfers

4. **Data Privacy Controls**
   - On-chain data can be kept private or made public
   - Off-chain data can be referenced without revealing content
   - Supports re-obfuscation of previously public data

## Key Features Comparison

| Feature | ERC721 | ARC721 |
|---------|--------|--------|
| Collection Creation | Deploy new contract | Deploy new program |
| State Management | Per contract | Per program |
| Transfer Mechanism | Direct contract call | Program call |
| Privacy | None | Built-in private transfers |
| Approval Flow | Required | Optional |
| Metadata Storage | URI-based | Flexible (on-chain/off-chain) |
| Content Management | Per contract | Per program |

## Data Storage 

Data storage in ARC721 standard are both on-chain and off-chain:

1. **On-chain Data**
   - Direct storage of NFT data on the blockchain
   - Enables use of data in zk-circuits
   - Can store complete data or hashes

2. **Off-chain Data**
   - URI-based metadata storage
   - Reduces on-chain storage costs
   - Standard JSON metadata format

## String Encoding

The ARC721 standard uses a specific string encoding format:

```leo
// Leo
string: [field; 4],

// Aleo instructions
string as [field; 4u32];
```

This encoding allows for efficient storage of strings while maintaining compatibility with Aleo's field type system.

## Summary

The ARC721 standard provides a more feature-rich approach to NFT management compared to ERC721, with built-in privacy features and flexible data storage options. While both standards require separate deployments for each collection, ARC721 leverages Aleo's privacy features to provide enhanced functionality.

The standard is designed to be compatible with the ARC21 standard for name and symbol of fungible tokens, and provides mechanisms for both private and public NFT management.

There is a proposed [NFT Registry Program (ARC722)](https://github.com/ProvableHQ/ARCs/discussions/80) that would serve as a central hub for NFT collections, similar to how the Token Registry Program works for fungible tokens. This registry would address program composability challenges by allowing multiple implementations with different data structures, identified by the unique pair (registry_program_id, collection_id). With the future implementation of dynamic dispatch, this would enable even more flexible program composability while maintaining Aleo's privacy features.
