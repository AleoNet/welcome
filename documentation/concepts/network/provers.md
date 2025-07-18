---
id: provers 
title: Provers
sidebar_label: Provers
---

# Introduction

The Aleo blockchain introduces a computational puzzle aimed at incentivizing the acceleration of zkSNARKs and Aleo-specific program optimizations. Historically, puzzles on Aleo's test networks targeted the generation of entire proofs or focused on optimizing computationally intensive aspects of proof generation, such as Multi-Scalar Multiplications (MSM) and Number Theoretic Transforms (NTT). However, advancements in these areas have reduced their dominance in proof generation time, prompting a new focus for the next iteration.

The puzzle sets its sights on enhancing synthesis, otherwise known as witness generation. This area is particularly crucial for Aleo, as it represents a significant portion of the time spent in generating proof for Aleo programs. By directing efforts towards synthesis, the puzzle aims to address a critical bottleneck specific to Aleo's ecosystem, ensuring a more streamlined and efficient process for developers and users alike. This strategic emphasis not only caters to the unique needs of Aleo's platform but also fosters innovation and optimizations in the broader ecosystem.

### Role and Incentives of Provers

Anyone can run a prover. Provers does not participate in Aleo's network consensus. They run specific algorithms to solve the `Puzzle` and obtain a `Solution` that satisfies the `proof_target`. This `Solution` is then broadcasted to the network. After the consensus network verifies and include the `Solution` in a block, the Prover receives `puzzle_reward` as incentives.

The economic incentive for Provers is similar to PoW in Bitcoin, but unlike Bitcoin, Aleo's network doesn't employ a winner-takes-all strategy. As long as the `Solution` satisfies `proof_target`, it is accepted by the network. The `puzzle_reward` incentivized Prover directly proportional to their computational power relative to the entire network in every epoch. This approach ensures fairer and more stable rewards for Provers. It's noteworthy that the `puzzle_reward` decreases gradually over 10 years time, until it reaches the minimum threshold in year 9 and becomes constant after that.

## Goals of the Puzzle
The puzzle has been designed with the following goals in mind.

**Hardness**: Ensure that no adversary can compute solutions to the puzzle faster than through random guessing. This requires the system to be memoryless, or non-amortizable, meaning that the probability of winning does not depend on the time spent computing a solution.

**System Safety**: The design and its implementation must prevent attacker-controlled inputs from causing denial of service (DoS) attacks, crashes, code execution, or any other unexpected changes to the system.

**Uniquely-Determined Circuits**: Maintain the soundness and uniqueness of opcode circuits in zero-knowledge proofs, preventing the existence of multiple valid assignments that could allow for cheaper puzzle attempts.

**Consistency in Resource Consumption**: Distribute the puzzle running time and resource consumption to minimize variance and the risk of extreme behaviors, aiming for a distribution that is more Gaussian-like than power-law-like.

**Maximizing Usefulness**: The majority of the computation should focus on "useful" algorithms.

## Puzzle Design
### Overview
Below is a high-level description of the puzzle:

1.  Provers construct puzzle solutions and broadcast them to the network.

2.  Validators aggregate solutions and transactions into a set for the next block via the consensus mechanism.
    -   The set of solutions cannot exceed the `MAX_SOLUTIONS` allowed in a block.
    -   Validators are not required to verify solutions beforehand.

3.  During block production, validators will process solutions in order, accepting up to `MAX_SOLUTIONS` valid solutions and aborting the rest. The ledger state is updated accordingly.
    -   The validator maintains a ledger which stores the:
        - `latest_epoch_hash`: The latest epoch hash.
        - `latest_proof_target`: The minimum target a solution must reach to be accepted.
        - `cumulative_proof_target`: The aggregated sum of proof targets for valid solutions in an epoch, from the previous block.
        - `coinbase_target`: The expected sum of proof targets, which acts as a threshold for difficulty adjustment.
    -   A solution is valid if its:
        -  `epoch_hash` matches the ledger's `latest_epoch_hash`
        - `proof_target`, computed for each solution, meets the `latest_proof_target`.
        - Fewer than `MAX_SOLUTIONS` solutions have already been accepted for this block.
    -   A valid solution is rewarded proportionally to its share of the sum of the `proof_target`s for the set of accepted solutions.
    -   Each `proof_target` is added to `cumulative_proof_target`.
    -   The `next_coinbase_target` and `next_proof_target` are updated according to the [ASERT retargeting algorithm](https://reference.cash/protocol/blockchain/proof-of-work/difficulty-adjustment-algorithm) in each block. The `next_coinbase_target` and `next_proof_target` are decreased if time between current `coinbase_timestamp` and `last_coinbase_timestamp` is longer than the `anchor_time` and remains the same if shorter or same.
    -   If the updated `cumulative_proof_target` exceeds half of the `coinbase_target`, the `cumulative_proof_target` is reset and the latest `coinbase_target` and `coinbase_timestamp` become the new retargeting parameters to calculate next `coinbase_target`.
    -   If the block height advances to the next epoch, the `latest_epoch_hash` is updated.

### Solution

A `Solution` consists:

-   `solution_id: SolutionID<N>` A unique identifier for a puzzle solution, which must be unique among all solutions submitted to the network. The protocol enforces uniqueness by rejecting any solution whose solution ID has already been recorded in the ledger. The solution ID is constructed from the 3-tuple `(address, epoch_hash, counter)`, which together form a per-attempt `nonce`. This nonce is then used to seed an RNG, ensuring that each puzzle attempt deterministically generates unique, random internal values.
-   `address: Address<N>` The address that is rewarded, if the puzzle solution is valid for the current proof target.
-   `epoch_hash: N::Blockhash` The current epoch block hash. A valid solution for the current epoch must use the current epoch hash. If any other epoch hash is used, the puzzle solution should always be invalid.
-   `counter: u64` A counter that is varied across multiple attempts of the puzzle for a given address and epoch hash.
-   `target: u64`  The proof target value that this solution claims to meet. A solution is only valid if its `target` is greater than or equal to the current `proof_target` required by the network. The higher the `target`, the greater the share of the reward the solution can earn.

### K-ary Merkle Tree

- The puzzle use a K-ary Merkle Tree of `DEPTH` 8 and `ARITY` 8.
- The leaf and path hash functions is SHA-256.
- The puzzle produce a Merkle root, which is converted into a solution `proof_target`. The target is compared against the `latest_proof_target` which determines whether or not the solution is valid.

### Synthesis Puzzle

The synthesis puzzle emphasizes synthesizing a valid R1CS assignment as the key computational element of the puzzle.

The steps for constructing a solution for synthesis puzzle are given below:

1.  Construct an attempt-specific `nonce` (`SolutionID`) from the `address`, `epoch_hash`, and `counter`.
2.  Sample an `EpochProgram` using the `epoch_hash`.
3.  Sample an attempt-specific set of inputs using an RNG seeded by the `nonce` (`SolutionID`).
4.  Synthesize the R1CS for the `EpochProgram` and puzzle inputs.
5.  Convert the R1CS assignment into a sequence of Merkle leaves.
6.  Compute the Merkle root and convert it into a `proof_target`.
7.  If the `proof_target` meets the `latest_proof_target`, submit the `address`, `epoch_hash`, and `counter` as a solution. Otherwise, repeat the steps above.

### Sampling Programs 

Each epoch, an `EpochProgram` is sampled using the `epoch_hash`. The `epoch_hash` is used to seed an RNG, which selects a sequence of abstract instructions according to some fixed distribution. The abstract instructions are then concretized into a valid program using the `Register Table` to correctly track the active set of registers.

Instructions are sampled from a defined instruction set by weight. The weight is set according to the output entropy.

Each entry in the instruction set is a vector of at most `NUM_SEQUENCE_INSTRUCTIONS` is returned, each consisting of a tuple with:

-   The instruction as [defined here](../../guides/aleo/04_opcodes.md).
-   The operands, which can be:
    -   `Ephemeral`
    -   `Input`
    -   `Literal`
    -   `Register`
    -   `RegisterOffset`
-   The destinations:
    -   `Ephemeral`
    -   `Register`

#### Destinations
`Ephemeral` destinations are locally available registers that are not added to the register table. They can be used later in the sequence, but are not available afterwards.

`Register` destinations are registers stored in the register table.

#### Operands
`Register` operands indicate that the register to be used must be the most recent element in the register table.

`Ephemeral` operands are registers locally available to the sequence. They must be an ephemeral destination from a previous instruction in the sequence.

`Input` operands reference the original inputs to the program.

`Literal` operands specify constants to be used as operands.

`Register offsets` indicate that the register to be used must be from the `RegisterTable`, offset by an index. That is, the 0-th index is the most recent element in the register table, the 1-st index is the second most recent and so on.

### Register Table

The register table initializes and stores active registers while constructing the epoch program.
The table contains a 2-deep stack of registers for each `LiteralType`.
The table is initialized according to the preamble below.

**Preamble**

```aleo
input r0 as boolean.public;
input r1 as boolean.public;
input r2 as i8.public;
input r3 as i8.public;
input r4 as i16.public;
input r5 as i16.public;
input r6 as i32.public;
input r7 as i32.public;
input r8 as i64.public;
input r9 as i64.public;
input r10 as i128.public;
input r11 as i128.public;
input r12 as field.public;
input r13 as field.public;

is.eq r1 r0 into r14;
is.eq r3 r2 into r15;
is.eq r5 r4 into r16;
is.eq r7 r6 into r17;
is.eq r9 r8 into r18;
is.eq r11 r10 into r19;

hash.psd2 r12 into r20 as u8;
hash.psd2 r13 into r21 as u8;
hash.psd2 r12 into r22 as u16;
hash.psd2 r13 into r23 as u16;
hash.psd2 r12 into r24 as u32;
hash.psd2 r13 into r25 as u32;
hash.psd2 r12 into r26 as u64;
hash.psd2 r13 into r27 as u64;
hash.psd2 r12 into r28 as u128;
hash.psd2 r13 into r29 as u128;

mul.w r3 r2 into r30;
mul.w r5 r4 into r31;
mul.w r7 r6 into r32;
mul.w r9 r8 into r33;
mul.w r11 r10 into r34;

ternary r15 r30 r2 into r35;
ternary r16 r31 r4 into r36;
ternary r17 r32 r6 into r37;
ternary r18 r33 r8 into r38;
ternary r19 r34 r10 into r39;
```

#### Instruction Variants

Below are the all instruction variants in the puzzle and whether or not they are sampled.

-   `Abs`: No
-   `AbsWrapped`: Yes
-   `Add`: Yes
-   `AddWrapped`: Yes
-   `And`: Yes
-   `AssertEq`: No
-   `AssertNeq`: No
-   `BranchEq`: No
-   `BranchNeq`: No
-   `Cast`: No
-   `CastLossy`: Yes
-   `CommitBhp256`: No
-   `CommitBhp512`: No
-   `CommitBhp768`: No
-   `CommitBhp1024`: No
-   `CommitPed64`: No
-   `CommitPed128`: No
-   `Div`: Yes
-   `DivWrapped`: Yes
-   `Double`: No
-   `Gt`: Yes
-   `Gte`: Yes
-   `HashBhp256`: Yes
-   `HashBhp512`: No
-   `HashBhp768`: No
-   `HashBhp1024`: No
-   `HashKeccak256`: No
-   `HashKeccak384`: No
-   `HashKeccak512`: No
-   `HashPed64`: Yes
-   `HashPed128`: No
-   `HashPsd2`: No
-   `HashPsd4`: No
-   `HashPsd8`: No
-   `HashSha3256`: No
-   `HashSha3384`: No
-   `HashSha3512`: No
-   `Inv`: Yes
-   `IsEq`: Yes
-   `IsNeq`: Yes
-   `Lt`: Yes
-   `Lte`: Yes
-   `Mod`: Yes
-   `Mul`: Yes
-   `MulWrapped`: Yes
-   `Nand`: Yes
-   `Neg`: Yes
-   `Nor`: Yes
-   `Not`: Yes
-   `Or`: Yes
-   `Pow`: Yes
-   `PowWrapped`: Yes
-   `Rem`: No
-   `RemWrapped`: Yes
-   `Shl`: No
-   `ShlWrapped`: Yes
-   `Shr`: No
-   `ShrWrapped`: Yes
-   `Sqrt`: No
-   `Square`: Yes
-   `Sub`: No
-   `SubWrapped`: Yes
-   `Ternary`: Yes
-   `Xor`: Yes

:::info
For more detailed information of the puzzle, please refer to the [specification](https://github.com/ProvableHQ/snarkVM/blob/staging/ledger/puzzle/epoch/docs/spec.md).
:::

### Epochs

An epoch is a period of 360 blocks. At the start of each epoch, a new puzzle program is generated using a hash of the previous block. This program is the same for all provers during the epoch and changes every epoch to prevent precomputation and ensure fairness.

Key points:
- The `epoch_hash` is deterministically generated from the previous `block_hash` at the epoch start.
- The `epoch_hash` seeds a random number generator to sample instructions for the new `EpochProgram`.
- All `Solution`s in an epoch must use the current `epoch_hash` and `EpochProgram`.
- The `EpochProgram` is cached and used for the entire epoch.
- Targets update are completely independent of epochs and happen on every single block based on the `cumulative_proof_target` from `Solution`s.

## Puzzle rewards

Aleo issues new ALEO tokens as coinbase rewards whenever valid puzzle solutions are submitted. The coinbase reward is distributed between provers and validators according to a fixed ratio, with the total reward calculated based on network parameters and proof targets.

The total coinbase reward is split as follows:
- **2/3 to provers**: Paid to the puzzle solvers who submitted valid solutions
- **1/3 to validators**: Included in the block reward and distributed to active stakers

This distribution is implemented in the `puzzle_reward()` function:

```rust
pub const fn puzzle_reward(coinbase_reward: u64) -> u64 {
    coinbase_reward.saturating_mul(2).saturating_div(3)
}
```

### Coinbase Reward

The coinbase reward is calculated using the formula:

```
R_coinbase = R_anchor * min(P, C_R) / C
```

Where:
- **R_anchor**: Anchor block reward (maximum possible coinbase reward for a given block before any adjustments are made based on the actual proof targets submitted)
- **P**: Combined proof target from all solutions in the current epoch
- **C_R**: Remaining coinbase target (coinbase target minus cumulative proof target)
- **C**: Current coinbase target

:::note
The remaining proof target is the minimum of:
- Combined proof target from current solutions
- Remaining coinbase target (coinbase target minus cumulative proof target from the same epoch)

This ensures that rewards cannot exceed the available coinbase target for the epoch.
:::

### Anchor Block Reward

The anchor block reward serves as the maximum possible coinbase reward for a given block. It is calculated using timestamps to combat block time volatility and better align with human timescales:

```
R_anchor = max(floor((2 * S * T_A * T_R) / (T_Y10 * (T_Y10 + 1))), R_Y9)
```

Where:
- **S**: Starting supply (1.5 billion ALEO)
- **T_A**: Anchor time (25 seconds)
- **T_R**: Remaining seconds until year 10
- **T_Y10**: Number of seconds elapsed in 10 years
- **R_Y9**: Minimum reward at year 9

The anchor reward decreases over time until year 9, after which it remains fixed at the year 9 baseline.

### Coinbase Target

The coinbase target is calculated using the [ASERT](https://reference.cash/protocol/blockchain/proof-of-work/difficulty-adjustment-algorithm) retarget algorithm:

```
T_{i+1} = T_i * 2^(INV * (D - A) / TAU)
```

Where:
- **T_i**: Current target
- **D**: Drift (actual time elapsed)
- **A**: Anchor time (expected time elapsed)
- **TAU**: Half-life in seconds
- **INV**: Inverse flag (-1 for increasing difficulty, 1 for decreasing)

The algorithm adjusts the target based on how quickly the current epoch advances compared to the expected half-epoch time.

### Target Updates

The coinbase target and proof target are both updated on every block to ensure the puzzle remains fair and adapts to network conditions.

- **Coinbase Target:**  
  The coinbase target is recalculated every block using the ASERT algorithm, which takes into account the previous coinbase target, timestamps, anchor time, and the number of blocks. The formula is:  
```
next_coinbase_target = ASERT(last_coinbase_target, last_timestamp, current_timestamp, anchor_time, blocks_per_epoch)
```

- **Proof Target:**  
  After updating the coinbase target, the proof target is set based on the new coinbase target, which is 1/4 of the coinbase target:  
```
proof_target = (coinbase_target >> 2) + 1
```

When the cumulative proof target reaches at least half of the coinbase target (`cumulative_proof_target >= coinbase_target / 2`), the following steps occur:
1. The cumulative proof target is reset to zero.
2. The coinbase target is updated with new `last_coinbase_target` and new `last_timestamp`.
3. The proof target is recalculated based on the new coinbase target.

### Individual Prover Rewards

Each prover receives a portion of the puzzle reward proportional to their contribution:

```
Individual Reward = Puzzle Reward * (Individual Proof Target / Combined Proof Target)
```

This approach avoids a winner-takes-all outcome by distributing rewards more equitably among provers, based on the proportion of their individual contributions.

## ARC-46 Staking for Puzzle Solution Submissions
As the Aleo Network grows, ensuring long-term security, stability, and fair participation is critical to the success of the ecosystem. The ARC-46 is [voted and accepted](https://vote.aleo.org/p/46) by the Aleo community. The goal of this ARC is to align prover incentives with the overall network’s health, and gradually adjust up economic requirements for provers as the network matures.

This ARC proposes a mechanism requiring provers on the Aleo Network to stake a specific amount of Aleo credits to be eligible to submit a specific number of solutions per epoch. This feature is programmatic, with a stepwise increase in the required amount of stake over a two-year period following the activation of this ARC.

Before ARC-46, provers are able to participate in Proof of Succinct Work and earn puzzle rewards without any entry or exit requirements. This ARC contemplates introducing entry requirements for provers, and while exit requirements are desirable, they are out of scope for this ARC at this time.

To participate as a prover on the Aleo network, this ARC proposes requiring the prover to stake a minimum number of Aleo Credits (X) to submit 1 solution per epoch. As such, if the prover wishes to submit 2 solutions per epoch, they must stake 2*X Aleo credits on the Aleo network. This approach ensures that pools do not gain any advantage over individual provers, ensuring fairness for all parties submitting solutions. As expected, once the prover submits their allotment of solutions per epoch, all subsequent solutions submitted by the prover will be rejected.

There is no requirement that the prover must stake to any specific validator. Rather, in consensus, the protocol will enforce that the prover submitting solutions has an adequate amount of stake that is bonded to a validator on the Aleo Network.

### Key Objectives
- **Sybil Resistance** - Aligning stake with number of solutions per epoch ensures that provers cannot bypass this new cryptoeconomic mechanism by creating new identities on-chain. In addition, this new cryptoeconomic mechanism makes it economically costly for malicious actors to create numerous identities (Sybil attacks) to flood the network with malformed solutions.
- **BFT Security** - The proposed timetable ensures that provers gradually increase their stake participation to achieve at least the availability threshold of the Aleo Network within 2 years. This ensures that provers contribute to the underlying security of the Aleo Network.
- **Economic Growth** - A transparent schedule increase in the staking requirement allows the network to adapt to its growing value and security needs without introducing sudden economic impacts or shocks. By ensuring provers contribute to staking, this ensures that their earned rewards are then directly utilized by the Aleo Network itself.

### Specification
The staking requirement will increase in a stepwise function over 2 years on a quarterly basis. Namely, each quarter, the amount of stake required to submit 1 solution per epoch will increase for provers.

The following outlines the timetable for introducing the stepwise staking requirements for provers to continue participating on the Aleo Network:

| Effective Date         | Quarter | Stake Required Per Solution Per Epoch |
|-----------------------|---------|---------------------------------------|
| Activation (Month 0)  | Q0      | 100,000                               |
| Month 3               | Q1      | 250,000                               |
| Month 6               | Q2      | 500,000                               |
| Month 9               | Q3      | 750,000                               |
| Month 12              | Q4      | 1,000,000                             |
| Month 15              | Q5      | 1,250,000                             |
| Month 18              | Q6      | 1,500,000                             |
| Month 21              | Q7      | 2,000,000                             |
| Month 24              | Q8      | 2,500,000                             |

### Benefits

This ARC benefits three main parties: **validators**, **provers**, and **long-term holders** of Aleo Credits.

**Validators** are likely to receive increased delegations from provers as the staking requirements are rolled out over the next two years, enhancing their participation and rewards. **Provers** benefit by earning additional staking yield on their token rewards through the staking process, further aligning their incentives with the network’s security and long-term growth. **Long-term token holders** gain increased confidence that Aleo Credits are being actively used to secure the network and are delegated appropriately, supporting the network’s health.

## Future Plans
### ARC-43: Extending the Puzzle to a Full SNARK

ARC-43 proposes extending the current synthesis-focused puzzle to a full Succinct Non-interactive Argument of Knowledge (SNARK). This extension aims to address current bottlenecks and leverage recent hardware advancements.

**Key Changes:**
- **Increased Instruction Count**: Expand the puzzle by orders of magnitude beyond current consensus verification limits
- **Expanded Instruction Set**: Include richer opcodes with larger operands for greater complexity
- **zkSNARK Verification**: Implement succinct puzzle proof verification to improve block verification times

**Benefits:**
- Incentivizes dedicated hardware development for full SNARK acceleration
- Significantly improves block verification performance
- Enhances puzzle complexity and security through larger instruction sets
- Leverages recent GPU and FPGA acceleration advancements

**Technical Approach:**
- Built on existing proof system and elliptic curve to minimize technical risk
- Extends to SNARK (not zkSNARK) to maintain non-malleability and prevent grindability
- Phased implementation to allow gradual hardware upgrades
