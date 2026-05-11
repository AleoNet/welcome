---
id: token-standard-difference
title: Token Standard Differences
sidebar_label: Token Standard Differences
---
## Introduction

Aleo has two active token standards, each designed for a different era of the network:

- **[ARC-21 Token Registry](../standards/00_token_registry.md)** — the existing singleton program that manages all token balances centrally. It predates dynamic dispatch and was designed so that DeFi programs could support any token without knowing it at compile time.
- **[ARC-20 Token Standard](https://github.com/ProvableHQ/ARCs/discussions/124)** — the forthcoming standard (in draft) that leverages [dynamic dispatch (ARC-0009)](https://github.com/ProvableHQ/ARCs/tree/master/arc-0009), letting each token be its own program called at runtime via Leo's `Interface@(token_id)/function()` syntax.
- **[ARC-22 Compliant Token Standard](https://github.com/ProvableHQ/ARCs/discussions/125)** — extends ARC-20 with freeze-list enforcement and compliance records for regulated tokens (stablecoins, security tokens).

:::caution Not Recommended for New Projects

The Token Registry Program (ARC-21) remains live on mainnet and continues to serve existing integrations. However, it is **not recommended for new projects**.

Newer token standards (ARC-20 and ARC-22) are currently under active community discussion and are expected to supersede it. New projects should follow these discussions and consider building against the forthcoming standards once finalized.

:::

## Quick-glance Comparison

| Feature | ERC-20 | ARC-21 Token Registry | ARC-20 |
|---------|--------|-----------------------|--------|
| Token Creation | Deploy new contract | Register with registry | Deploy new program implementing `ARC20` interface |
| State Management | Per contract | Centralized registry | Per program |
| Transfer Mechanism | Direct contract call | Registry program call | Dynamic call via `ARC20@(token_id)/function()` |
| Privacy | None | Built-in private transfers | Built-in private transfers |
| Approval Flow | Required | Optional | Required (public) |
| Token Metadata | In contract | In registry | In program |
| Supply Management | Per contract | Centralized registry | Per program (optional `MintableToken` extension) |
| Dynamic Dispatch | N/A | Not needed (central hub) | Core design requirement |

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

**ARC-20**
- Each token is a separate deployed program that declares conformance to the `ARC20` interface (`:InterfaceName` in Leo)
- DeFi programs interact with any conforming token at runtime via dynamic dispatch, no compile-time import needed
- Optional `MintableToken` interface extends `ARC20` for tokens that support mint/burn

### State Management

**ERC-20**
- State is stored within each token contract
- Direct state access within the contract
- Only supports public visibility for all states

**ARC-21 Token Registry**
- State is managed through the registry program
- State access through API endpoints or `mappings::get()` calls within async functions
- Supports both public state visibility with mappings and private state with records

**ARC-20**
- State is managed within each token's own program
- Public balances stored in per-program mappings; private balances held as `Token` records
- Interface-conformant programs are queried individually rather than through a shared registry

## Functional Differences

For complete ARC-21 function signatures and parameter details, see the [Token Registry Program reference](../standards/00_token_registry.md).

### Token Creation

**ERC-20** deploys a new contract per token:
```solidity
contract MyToken is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
```

**ARC-21 Token Registry** registers a new token within the shared registry program via `register_token`, supplying a unique `token_id`, name, symbol, decimals, and max supply. No contract deployment is needed.

An optional `external_authorization_required` flag enables a designated `external_authorization_party` to gate token transfers with time-limited approvals. Useful for vesting schedules, spending limits, or compliance controls. Use `prehook_public` / `prehook_private` to unlock transfers once conditions are met.

**ARC-20** deploys a new program that declares interface conformance:
```leo
program my_token.aleo: MintableToken {
    record Token {
        owner: address,
        amount: u128,
    }

    fn transfer_public(public recipient: address, public amount: u128) -> Final { ... }
    fn transfer_private(input: Token, to: address, amount: u128) -> (Token, Token) { ... }
    // ... all ARC20 + MintableToken functions
}
```

Any DeFi program can then call this token by name at runtime without importing it:
```leo
ARC20@(token_id)/transfer_public(recipient, amount);
```

### Token Transfer

**ERC-20**
```solidity
function transfer(address to, uint256 amount) public returns (bool)
function transferFrom(address from, address to, uint256 amount) public returns (bool)
```

**ARC-21 Token Registry** offers several transfer variants:

| Function | Description |
|----------|-------------|
| `transfer_public` | Public transfer from the function caller |
| `transfer_public_as_signer` | Public transfer from the transaction signer (useful in multi-program calls) |
| `transfer_private` | Private transfer using a `Token` record |
| `transfer_from_public` | Public transfer by an approved spender |
| `transfer_public_to_private` | Convert a public balance into a private `Token` record |
| `transfer_from_public_to_private` | Same, initiated by an approved spender |
| `transfer_private_to_public` | Convert a private `Token` record into a public balance |

**ARC-20** defines a similar set via the `ARC20` interface, called at runtime using dynamic dispatch:

| Function | Description |
|----------|-------------|
| `transfer_public` | Public transfer |
| `transfer_private` | Private transfer using a `Token` record |
| `transfer_private_to_public` | Private `Token` → public balance, emits `Metadata` receipt to sender |
| `transfer_public_to_private` | Public balance → private `Token` |
| `shield` | Convert the signer's public balance to a private `Token` |
| `unshield` | Convert a private `Token` back to public |
| `transfer_from_public` | Public transfer by an approved spender |
| `transfer_from_public_to_private` | Public-to-private by an approved spender |

Calling any of these dynamically from a DeFi program:
```leo
// Works with any ARC20-conformant token, resolved at runtime
ARC20@(token_id)/transfer_public(recipient, amount);
ARC20@(token_id)/transfer_from_public(owner, recipient, amount);
```

For private token operations using `dyn record` (dynamic records):
```leo
fn deposit_private(
    private token_record: dyn record,
    public token_id: identifier,
    public amount: u128,
) -> (dyn record, Final) {
    let (change, f): (dyn record, Final) =
        ARC20@(token_id)/transfer_private_to_public(token_record, self.address, amount);
    return (change, final { f.run(); });
}
```

### Token Minting

**ERC-20**
```solidity
function mint(address to, uint256 amount) public onlyOwner
```

**ARC-21 Token Registry** supports `mint_public` and `mint_private`. Access is role-gated: only addresses with `MINTER_ROLE` or `SUPPLY_MANAGER_ROLE` (or the admin) can mint. Roles are managed via `set_role` / `remove_role`.

**ARC-20** defines minting via the optional `MintableToken` extension:
```leo
fn mint_public(public recipient: address, public amount: u128) -> Final;
fn mint_private(public recipient: address, public amount: u128) -> (Token, Final);
```

Access control is defined by the program itself, not enforced by the interface.

### Token Burning

**ERC-20**
```solidity
function burn(uint256 amount) public
```

**ARC-21 Token Registry** supports `burn_public` and `burn_private`, with the same role-based access control as minting (`BURNER_ROLE` or `SUPPLY_MANAGER_ROLE`).

**ARC-20** via `MintableToken`:
```leo
fn burn_public(public amount: u128) -> Final;
fn burn_private(input: Token) -> Final;
```

### Token Approval

**ERC-20**
```solidity
function approve(address spender, uint256 amount) public returns (bool)
function allowance(address owner, address spender) public view returns (uint256)
```

**ARC-21 Token Registry** uses `approve_public` to grant a spender allowance and `unapprove_public` to revoke or reduce it.

**ARC-20** uses the same pattern (`approve_public` / `unapprove_public`) with one key difference: `approve_public` **adds** to the existing allowance rather than replacing it, avoiding the ERC-20 approval race condition.

### Balance and Supply Queries

**ERC-20**
```solidity
function balanceOf(address account) public view returns (uint256)
function totalSupply() public view returns (uint256)
```

**ARC-21 Token Registry** exposes balances and supply via RPC mapping lookups, no transaction required:
```bash
# Balance (composite key: token_id + account)
GET /{network}/program/token_registry.aleo/mapping/balances/{token_id}_{account}

# Total supply (within TokenMetadata)
GET /{network}/program/token_registry.aleo/mapping/registered_tokens/{token_id}
```

**ARC-20** queries are per-program:
```bash
# Balance in a specific ARC-20 token program
GET /{network}/program/{my_token}.aleo/mapping/account/{address}

# Supply stored in the program's own mapping
GET /{network}/program/{my_token}.aleo/mapping/supply/true
```

## Summary

The [ARC-21](../standards/00_token_registry.md) Token Registry manages all tokens through a single program, providing privacy and role-based access control without requiring DeFi programs to know specific tokens at compile time. It remains the recommended standard for existing integrations.

[ARC-20](https://github.com/ProvableHQ/ARCs/discussions/124) takes a more decentralized approach made possible by [dynamic dispatch (ARC-0009)](https://github.com/ProvableHQ/ARCs/tree/master/arc-0009): each token is its own program, and any DeFi program can interact with any conforming token at runtime via `ARC20@(token_id)/function()`. [ARC-22](https://github.com/ProvableHQ/ARCs/discussions/125) extends this with freeze-list enforcement and investigator-visible compliance records for regulated issuers. Both are currently in draft, follow the discussions and build against them once finalized.
