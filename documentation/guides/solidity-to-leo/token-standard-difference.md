---
id: token-standard-difference
title: Token Standard Differences
sidebar_label: Token Standard Differences
---
## Introduction

The [Token Registry Program (ARC-21)](../standards/00_token_registry.md) serves as the standard "hub" that all tokens and DeFi programs interface with, providing interoperability between new tokens and DeFi programs without requiring program re-deployment. This approach was chosen because on Aleo, all imported programs must be known and deployed before the importing program, and dynamic cross-program calls are not currently supported, which makes composability difficult to implement. However, dynamic dispatch is currently in development and will enable more flexible program interactions in the future.

## Quick-glance Comparison

| Feature | ERC-20 | ARC-21 Token Registry |
|---------|-------|-------------------|
| Token Creation | Deploy new contract | Register with registry |
| State Management | Per contract | Centralized registry |
| Transfer Mechanism | Direct contract call | Registry program call |
| Privacy | None | Built-in private transfers |
| Approval Flow | Required | Optional |
| Token Metadata | In contract | In registry |
| Supply Management | Per contract | Centralized registry |

## Architectural Differences

### Program Structure

**ERC-20**
- Each token is deployed as a separate smart contract
- Requires approval flow for token transfers
- New smart contract deployment needed for each token

**ARC-21 Token Registry**
- Single program (Token Registry) manages all tokens
- No separate approval flow needed for basic transfers
- New tokens are created through registration, not deployment

### State Management

**ERC-20**
- State is stored within each token contract
- Direct state access within the contract
- Only supports public visibility for all states

**ARC-21 Token Registry**
- State is managed through the registry program
- State access through API endpoints or `mappings::get()` calls within async functions
- Supports both public state visibility with mappings and private state with records

## Functional Differences

### Token Creation

**ERC-20**
```solidity
contract MyToken is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
```

**ARC-21 Token Registry**
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

#### External Authorization
The ARC-21 Token Registry supports an optional external authorization system where a designated party (usually a program) can control token spending permissions with time-limited approvals. This feature enforces extra requirements on tokens before they can be transferred, such as time-locked tokens, tokens with vesting schedules or spending limits, compliance requirements, and more. The authorization party can be updated later using `update_token_management`.

`prehook_public` and `prehook_private` are both functions that the `external_authorization_party` can use to unlock token transfers once the extra requirements have been fulfilled.

### Token Transfer

**ERC-20**
```solidity
function transfer(address to, uint256 amount) public returns (bool)
function transferFrom(address from, address to, uint256 amount) public returns (bool)
```

**ARC-21 Token Registry**
```leo
// Public transfer from function caller
async transition transfer_public(
    public token_id: field,
    public recipient: address,
    public amount: u128
) -> Future

// Public transfer from transaction signer
async transition transfer_public_as_signer(
    public token_id: field,
    public recipient: address,
    public amount: u128
) -> Future

// Private transfer
async transition transfer_private(
    recipient: address,
    amount: u128,
    input_record: Token
) -> (Token, Token, Future)

// Public transfer by an approved spender
async transition transfer_from_public(
    public token_id: field,
    public owner: address,
    public recipient: address,
    public amount: u128
) -> Future

// Convert public balance to private Token
async transition transfer_public_to_private(
    public token_id: field,
    recipient: address,
    public amount: u128,
    public external_authorization_required: bool
) -> (Token, Future)

// Convert public balance to private Token by an approved spender
async transition transfer_from_public_to_private(
    public token_id: field,
    public owner: address,
    recipient: address,
    public amount: u128,
    public external_authorization_required: bool
) -> (Token, Future)

// Conver private Token to public balance
async transition transfer_private_to_public(
    public recipient: address,
    public amount: u128,
    input_record: Token
) -> (Token, Future)
```

#### Privacy Features

The ARC-21 Token Registry provides additional privacy features not available in ERC-20:

1. **Private Transfers**: Ability to transfer tokens privately using the `transfer_private` function
2. **Public to Private Conversion**: Convert public tokens to private using `transfer_public_to_private`
3. **Private to Public Conversion**: Convert private tokens to public using `transfer_private_to_public`

### Token Minting

**ERC-20**
```solidity
function mint(address to, uint256 amount) public onlyOwner {
    _mint(to, amount);
}
```

**ARC-21 Token Registry**
```leo
// Public minting
async transition mint_public(
    public token_id: field,
    public recipient: address,
    public amount: u128,
    public authorized_until: u32
) -> Future

// Private minting
async transition mint_private(
    public token_id: field,
    recipient: address,
    public amount: u128,
    public external_authorization_required: bool,
    public authorized_until: u32
) -> (Token, Future)
```

The ARC-21 Token Registry provides both public and private minting capabilities. Access to minting is controlled through roles that can be assigned using `set_role` and revoked using `remove_role`. Only addresses with `MINTER_ROLE` or `SUPPLY_MANAGER_ROLE` can mint tokens if not the admin.

### Token Burning

**ERC-20**
```solidity
function burn(uint256 amount) public {
    _burn(msg.sender, amount);
}
```

**ARC-21 Token Registry**
```leo
// Public burning
async transition burn_public(
    public token_id: field,
    public owner: address,
    public amount: u128
) -> Future

// Private burning
async transition burn_private(
    input_record: Token,
    public amount: u128
) -> (Token, Future)
```

The ARC-21 Token Registry supports both public and private burning mechanisms. Similar to minting, burning permissions are managed through roles using `set_role` and `remove_role`. Only addresses with `BURNER_ROLE` or `SUPPLY_MANAGER_ROLE` can burn tokens if not the admin.

### Token Approval

**ERC-20**
```solidity
function approve(address spender, uint256 amount) public returns (bool)
function allowance(address owner, address spender) public view returns (uint256)
```

**ARC-21 Token Registry**
```leo
// Public approval
async transition approve_public(
    public token_id: field,
    public spender: address,
    public amount: u128
) -> Future

// Revoke public unapproval
async transition unapprove_public(
    public token_id: field,
    public spender: address,
    public amount: u128
) -> Future
```

### Balance and Supply Queries

**ERC-20**
```solidity
function balanceOf(address account) public view returns (uint256)
function totalSupply() public view returns (uint256)
```

**ARC-21 Token Registry**
```bash
# Get balance via RPC endpoint
GET /{network}/program/token_registry.aleo/mapping/balances/{token_id}_{account}

# Get total supply via RPC endpoint
GET /{network}/program/token_registry.aleo/mapping/registered_tokens/{token_id}
```

The ARC-21 Token Registry uses RPC endpoints to query balances and supply by accessing the program's mappings directly. This approach allows for efficient querying of on-chain state without requiring a transaction. The balance is stored in the `balances` mapping with a composite key of `token_id` and `account`, while the supply information is stored in the `registered_tokens` mapping.

## Summary and Future

The ARC-21 Token Registry provides a more centralized and feature-rich approach to token management compared to ERC-20. While ERC-20 requires separate contracts for each token, the Token Registry manages all tokens through a single program, providing additional features like privacy and role-based access control. This design choice makes it easier to implement DeFi applications and ensures better interoperability between different tokens on the Aleo blockchain.

With the future implementation of dynamic dispatch, the ARC-20 standard will provide a more familiar approach for Ethereum developers, allowing different individual token programs to be called at runtime rather than being strictly defined.
