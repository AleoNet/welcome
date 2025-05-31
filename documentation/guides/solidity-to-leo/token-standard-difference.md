---
id: token-standard-difference
title: Token Standard Differences
sidebar_label: Token Standard Differences
---
## Current Implementation: Token Registry (ARC21)

The centralized [Token Registry Program](../standards/00_token_registry.md) (ARC21) serves as the primary way to manage tokens on Aleo. This approach was chosen because on Aleo, all imported programs must be known and deployed before the importing program, and dynamic cross-program calls are not currently supported which makes composability difficult to implement.

The Token Registry Program (ARC21) serves as the standard "hub" that all tokens and DeFi programs interface with, providing interoperability between new tokens and DeFi programs without requiring program re-deployment.

## Architectural Differences

### Program Structure

**ERC20**
- Each token is deployed as a separate smart contract
- Requires approval flow for token transfers
- New smart contract deployment needed for each token

**ARC21 Token Registry**
- Single program (Token Registry) manages all tokens
- No separate approval flow needed for basic transfers
- New tokens are created through registration, not deployment

### State Management

**ERC20**
- State is stored within each token contract
- Uses mappings for balances and allowances
- Direct state access within contract

**ARC21 Token Registry**
- State is managed through the registry program
- Uses mappings for registered tokens, balances, and allowances
- State access through API endpoints or `mappings::get()` calls within async function

## Functional Differences

### Token Creation

**ERC20**
```solidity
contract MyToken is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
```

**ARC21 Token Registry**
```leo
// Register a new token
register_token(
    token_id: field,
    name: u128,
    symbol: u128,
    decimals: u8,
    max_supply: u128,
    external_authorization_required: bool,
    external_authorization_party: address
)
```

### Token Transfer

**ERC20**
```solidity
function transfer(address to, uint256 amount) public returns (bool)
function transferFrom(address from, address to, uint256 amount) public returns (bool)
```

**ARC21 Token Registry**
```leo
// Public transfer
transfer_public(
    token_id: field,
    recipient: address,
    amount: u128
)

// Private transfer
transfer_private(
    recipient: address,
    amount: u128,
    input_record: Token
)

// Transfer from (after approval)
transfer_from_public(
    token_id: field,
    owner: address,
    recipient: address,
    amount: u128
)
```

### Token Approval

**ERC20**
```solidity
function approve(address spender, uint256 amount) public returns (bool)
function allowance(address owner, address spender) public view returns (uint256)
```

**ARC21 Token Registry**
```leo
// Public approval
approve_public(
    token_id: field,
    spender: address,
    amount: u128
)

// Public unapproval
unapprove_public(
    token_id: field,
    spender: address,
    amount: u128
)
```

### Balance and Supply Queries

**ERC20**
```solidity
function balanceOf(address account) public view returns (uint256)
function totalSupply() public view returns (uint256)
```

**ARC21 Token Registry**
```bash
# Get balance via RPC endpoint
GET /{network}/program/token_registry.aleo/mapping/balances/{token_id}_{account}

# Get total supply via RPC endpoint
GET /{network}/program/token_registry.aleo/mapping/registered_tokens/{token_id}
```

The ARC21 Token Registry uses RPC endpoints to query balances and supply by accessing the program's mappings directly. This approach allows for efficient querying of on-chain state without requiring a transaction. The balance is stored in the `balances` mapping with a composite key of `token_id` and `account`, while the supply information is stored in the `registered_tokens` mapping.

## Key Features Comparison

| Feature | ERC20 | ARC21 Token Registry |
|---------|-------|-------------------|
| Token Creation | Deploy new contract | Register with registry |
| State Management | Per contract | Centralized registry |
| Transfer Mechanism | Direct contract call | Registry program call |
| Privacy | None | Built-in private transfers |
| Approval Flow | Required | Optional |
| Token Metadata | In contract | In registry |
| Supply Management | Per contract | Centralized registry |

## Privacy Features

The ARC21 Token Registry provides additional privacy features not available in ERC20:

1. **Private Transfers**: Ability to transfer tokens privately using the `transfer_private` function
2. **Public to Private Conversion**: Convert public tokens to private using `transfer_public_to_private`
3. **Private to Public Conversion**: Convert private tokens to public using `transfer_private_to_public`
4. **Record Management**: Ability to join and split private token records

## Role Management

The ARC21 Token Registry implements a role-based access control system:

- `MINTER_ROLE`: Can mint new tokens
- `BURNER_ROLE`: Can burn tokens
- `SUPPLY_MANAGER_ROLE`: Can manage token supply

This is different from ERC20 where such roles need to be implemented separately in each contract.

## External Authorization

The ARC21 Token Registry includes an optional external authorization system that allows for:

1. Required external approval for token transfers
2. Time-limited authorizations
3. External party management of token permissions

## Summary and Future Outlook

The ARC21 Token Registry provides a more centralized and feature-rich approach to token management compared to ERC20. While ERC20 requires separate contracts for each token, the Token Registry manages all tokens through a single program, providing additional features like privacy and role-based access control. This design choice makes it easier to implement DeFi applications and ensures better interoperability between different tokens on the Aleo blockchain.

With the future implementation of dynamic dispatch, the ARC20 standard will provide a more familiar approach for Ethereum developers, allowing for individual token programs while maintaining Aleo's privacy features.
