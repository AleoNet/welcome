---
id: staking 
title: Staking
sidebar_label: Staking
---
## What is staking?

**Staking** is an economic security mechanism used to secure decentralized networks that rely on **Proof of Stake (PoS)** as their consensus mechanism. Unlike **Proof of Work (PoW)**, where miners compete to solve cryptographic puzzles in order to add new blocks, PoS selects validators at random for each block to confirm transactions and validate block data. This approach replaces competitive mining with a randomized, stake-based selection process, where validators earn rewards based on their participation rather than computational power.

To become a validator and participate in consensus, **a minimum stake of 10,000,000 ACs is required**. This ensures that the network is economically secured by validators with a significant investment in the system. However, not everyone has the resources to meet this threshold individually. Staking allows users to delegate their ACs to support validators, helping them become active participants in the consensus process while sharing in the rewards.

## How to become a staker?

Stakers are individuals or organizations who lock up or delegate Aleo Credits (ACs) to support validators in participating in consensus on the network. In return, they earn rewards proportional to the amount of ACs they have staked, reflecting their contribution to network security. This allows users who do not run validator nodes to still participate in the consensus process and receive staking rewards. Stakers are sometimes refer as delegators because they delegate their stakes to validators.

Anyone holding ACs can become a staker. **[Native staking](#native-staking) is available starting from 10,000 ACs**, there are also [liquid staking](#liquid-staking) options available for holders who has less than 10,000 ACs. To get started, users can utilize various tools developed by the Aleo ecosystem—such as staking platforms or supported wallets.

:::warning[disclaimer]
The community tools are developed by third parties within the Aleo ecosystem. Aleo does not endorse, review, or audit these tools, and users are solely responsible for their use.
:::

## Native Staking

Native staking enables token holders to interact on-chain and stake their Aleo Credits (ACs) directly, without the need to rely on third-party programs or custodial services. The native staking functions are made available in the `credits.aleo` program, the same program that host every Aleo Credit. There are staking rules enforced in the `credits.aleo` program:

* **Self-bond minimums** for validators (≥ 100 credits)
* **Delegation minimums** for stakers (≥ 10 000 credits)
* **Automatic removal** of validators that drop below 10 M total stake
* **Time-locked unbonding** (360 blocks) before re-claiming stakes

The source code in Aleo Instructions can be found [here](https://github.com/ProvableHQ/snarkVM/blob/staging/synthesizer/program/src/resources/credits.aleo).

### Function glossary

| Function | Caller | Purpose |
|----------|---------------|---------|
| `bond_validator` | Validator (self-bond) | Creates a validator or tops-up self-bonded stake and sets commission + withdrawal address |
| `bond_public` | Staker | Bonds (delegates) stake to an existing validator that is open to new stake |
| `unbond_public` | Validator or Staker | Starts the unbonding timer for some or all of the bonded amount |
| `claim_unbond_public` | Anyone | After the timer has expired, transfers the unbonded amount to the staker's withdrawal address |

### Staking related mappings

The staking system in Aleo uses several key mappings to track validator and delegator states:

#### `committee`
Contains the active validator set with their committee state:
- Whether the validator is open to new stakers (`is_open`)
- The commission percentage (0-100) that the validator keeps from rewards

```aleo
/// The `committee` mapping contains the active validator set and their corresponding stake.
mapping committee:
    // The key represents the address of the validator.
    key as address.public;
    // The value represents the committee state of the validator.
    value as committee_state.public;

// The `committee_state` struct tracks the total stake of the validator, and whether they are open to new stakers.
struct committee_state:
    // The boolean flag indicating if the validator is open to new stakers.
    is_open as boolean;
    // The percentage amount (from 0 to 100, inclusive) of rewards that retained by the validator.
    commission as u8;
```

#### `delegated`
Tracks the total amount of microcredits bonded to each validator address (including both self-bonded and delegator bonds). This mapping is used to determine if a validator meets the minimum 10 million credits threshold to join the committee.

```aleo
// The `delegated` mapping tracks the total amount of microcredits that are prebonded and bonded to validator addresses.
// Note: The mapping includes both prebonded and bonded microcredits. However, it does not contain unbonding microcredits.
mapping delegated:
    // The key represents the address of the validator.
    key as address.public;
    // The value represents the amount of microcredits bonded to the validator, by the validator and its delegators.
    value as u64.public;
```

#### `metadata`
Stores global staking statistics:
- `metadata[aleo1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3ljyzc]` - Number of active committee members
- `metadata[aleo1qgqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqanmpl0]` - Number of delegators (capped at 100,000)

```aleo
/// The `metadata` mapping stores:
///   - The number of members in the committee.
///   - The number of delegators.
mapping metadata:
    // The key represents the index at which the count is stored.
    //    - This address (aleo1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3ljyzc) stores the number of **members** in the committee.
    //    - This address (aleo1qgqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqanmpl0) stores the number of **delegators**.
    key as address.public;
    // The value represents the count.
    value as u32.public;
```

#### `bonded`
Maps each staker's address to their bond state, which includes:
- The validator address they're bonded to
- The amount of microcredits currently bonded

```aleo
// The `bonded` mapping represents the amount of microcredits that are currently bonded.
mapping bonded:
    // The key represents the address of the staker, which includes the validators and their delegators.
    key as address.public;
    // The value represents the bond state.
    value as bond_state.public;

// The `bond_state` struct tracks the amount of microcredits that are currently bonded to the specified validator.
struct bond_state:
    // The address of the validator.
    validator as address;
    // The amount of microcredits that are currently bonded to the specified validator.
    microcredits as u64;
```

#### `unbonding`
Tracks stakers who have initiated the unbonding process:
- The amount of microcredits currently unbonding
- The block height when unbonding will be complete (360 blocks from initiation)

```aleo
// The `unbonding` mapping contains a set of stakers with their unbonding microcredits and unlock height.
mapping unbonding:
    // The key represents the address of the staker, which includes the validators and their delegators.
    key as address.public;
    // The value represents the unbond state.
    value as unbond_state.public;

// The `unbond_state` struct tracks the microcredits that are currently unbonding, along with the unlock height.
struct unbond_state:
    // The amount of microcredits that are currently unbonding.
    microcredits as u64;
    // The block height at which the unbonding will be complete, and can be claimed.
    height as u32;
```

#### `withdraw`
Maps each staker's address to their withdrawal address, which is where rewards and unbonded amounts are sent.

```aleo
// The `withdraw` mapping contains the staking address and their corresponding withdrawal address.
mapping withdraw:
    // The key represents the staking address of the owner.
    key as address.public;
    // The value represents the withdrawal address of the owner.
    value as address.public;
```

### Becoming or topping-up as a validator

To become a validator or top-up the self-bonded stake, execute the `bond_validator` function using the validator address:

```bash
leo execute credits.aleo/bond_validator <withdrawal_address> <amount> <commission_percentage> --network mainnet --endpoint https://api.explorer.provable.com/v1 --broadcast 
```

```aleo
function bond_validator:
    // Input the withdrawal address.
    input r0 as address.public;
    // Input the amount of microcredits to bond.
    input r1 as u64.public;
    // Input the commission percentage.
    input r2 as u8.public;
```

* **withdrawal_address** – a separate address that will receive rewards and unbonded stake. Must be different from the validator address.
* **amount_in_microcredits** – minimum 1 AC. To enter the committee you need ≥ 10 millions ACs combining self-bond + delegation.
* **commission_percentage** – integer 0-100 that defines the share of rewards kept by the validator.

What happens on-chain:

1. The amount is subtracted from the validator's public `account` balance.
2. `bonded[validator]` is written/updated with the new self-bond amount.
3. `delegated[validator]` is updated (self-bond counts towards total delegation).
4. If the total delegation is ≥ 10 millions ACs and the validator was not in `committee` yet, they are added and `metadata[committee_size]` is incremented. (Subjected to network maximum committee size that can be increased with protocol upgrades)

### Delegating to a validator

If you are not running a validator, you can still participate in the network by delegating your Aleo Credits to a validator and earn rewards based on their performance.

#### Choosing a validator

Before you delegate, inspect the candidate validator's on-chain stats. You can query `committee`, `delegated`, and `bonded` mappings via [API endpoints](https://docs.explorer.provable.com/docs/api-reference/vz155069d5xy3-introduction) or block explorers to learn:

* **Total stake** – how much ACs have been delegated to the validator.
* **Self-bond** – validator's own stake (at least 100 ACs is required).
* **Commission** – the % of rewards the validator keeps (0–100).
* **Is open** – only validators with `is_open = true` can accept new stake.

A healthy validator typically has:

* At least 10 millions ACs total stake (otherwise it is not in the committee and earns no block rewards).
* Consistent uptime / performance (check explorers).

#### Steps to delegate

1. Decide the amount you want to delegate (≥ 10 000 AC).
:::warning[important]
Must keep minimum bonded balance of ≥ 10 000 ALEO bonded at all times.
:::
2. Ensure that amount is available in your public account balance.
3. Choose a withdrawal address (can reuse current signer address or another address).
4. Execute `bond_public` function from `credits.aleo` using [Leo CLI](https://docs.leo-lang.org/cli/execute):

```bash
leo execute credits.aleo/bond_public <validator_address> <withdrawal_address> <amount> --network mainnet --endpoint https://api.explorer.provable.com/v1 --broadcast 
```

```aleo
function bond_public:
    // Input the validator's address.
    input r0 as address.public;
    // Input the withdrawal address.
    input r1 as address.public;
    // Input the amount of microcredits to bond.
    input r2 as u64.public;
```

:::tip
[Staking.xyz](https://www.staking.xyz/stake?network=aleo&currency=ALEO&stakingType=native) also provides an interface to `bond_public`. 
:::

After the transaction is finalized you will start to accrue a share of the validator's block rewards proportionally to your stake. You may top up your bond at any time, in any amount.

On-chain effects:

1. Deducts the amount from the staker's `account`.
2. Updates `bonded[delegator]` (mapping staker → validator).
3. Adds the amount to `delegated[validator]`.
4. Increments the global staker counter (`metadata[delegator_count]`, capped at 100,000).

:::warning[important]
The validator must be open (`committee_state.is_open = true`) and not in the unbonding (exiting) process.
:::
:::info
Each address can be bonded to one validator at a time. Staker may bond to a new validator only after the previous bond has fully unbonded and the ACs has been claimed. Or simply use a new address.
:::

### Withdrawing stake

 Stakers can withdraw bonded ACs at any time, provided the remaining bonded balance stays ≥ 10 000. Any withdrawal that takes the bonded balance below 10 000 ACs immediately triggers a full unbond.
 
To withdraw a stake, the staker must first call the `unbond_public` function. This function initiates the unbonding process by specifying the staker's address and the amount of microcredits to unbond. The unbonding process allows the staker to either partially or fully unbond their stake. This can be done by using [Leo CLI](https://docs.leo-lang.org/cli/execute):

```bash
leo execute credits.aleo/unbond_public <staker_address> <amount> --network mainnet --endpoint https://api.explorer.provable.com/v1 --broadcast 
```

```aleo
function unbond_public:
    // Input the staker's address.
    input r0 as address.public;
    // Input the amount of microcredits to unbond.
    input r1 as u64.public;
```

Called either by the staker's withdrawal address or the validator's withdrawal address.

* Stakers may unbond partially or fully. If the remaining bond falls below 10 000 ACs, the entire bond is unbonded and the staker entry is removed.
* Validators can unbond themselves or forcibly unbond a staker.
* If unbonding causes the validator's total stake to drop below 10 millions ACs or self-bond below 100 ACs, the validator is removed from the committee.
* The amount begins a 360-block cooldown stored in `unbonding[staker]`.

#### Claiming unbonded stake

To claim your unbonded stake, make sure the 360 blocks cooldown has passed, then you can use the [Leo CLI](https://docs.leo-lang.org/cli/execute) as follows:

```bash
leo execute credits.aleo/claim_unbond_public <staker_address> --network mainnet --endpoint https://api.explorer.provable.com/v1 --broadcast
```

```aleo
function claim_unbond_public:
    // Input the staker's address.
    input r0 as address.public;
```

* Anyone can trigger this once `block.height ≥ unbonding[staker].height`.
* The unbonded amount is transferred to the staker's withdrawal address (`account[withdrawal]`).
* The corresponding `unbonding` entry is cleared. If the staker has no remaining bond, their withdrawal address is also removed.


## Liquid Staking

Liquid staking is an innovative approach that allows users to stake their Aleo Credits (ACs) while maintaining liquidity. Instead of locking up your ACs, you receive a liquid staking token (stToken) that represents your staked position. This enables you to participate in staking while still being able to use your tokens in other DeFi activities. Liquid staking platforms allow users to stake with less than 10,000 ACs, making staking more accessible to everyone.

Currently available liquid staking platforms:
- [Beta Staking](https://betastaking.com/)
- [Staking.xyz](https://www.staking.xyz/)
- [PONDO](https://www.pondo.xyz/)
- [LSP Finance](https://www.lsp.finance/)