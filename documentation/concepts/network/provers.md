---
id: provers 
title: Provers
sidebar_label: Provers
---

**Provers** (sometimes called "miners") are network participants who generate SNARK proofs for coinbase puzzles. Their primary role is to improve the efficiency of proof generation, which can lead to faster transaction confirmation times and a better user experience. 

Provers are **NOT** part of the consensus process; instead, they contribute computational resources to help solve cryptographic puzzles, submit solutions to validators, and **earn coinbase rewards** from doing so.

:::info
For more detailed information of the puzzle, please refer to the [Puzzle](../advanced/puzzle.md) section.
:::


The economic incentive for provers is similar to Proof-of-Work in Bitcoin. Unlike Bitcoin, however, Aleo's network doesn't employ a winner-take-all strategy. As long as a submitted solution is valid, it will be accepted by the network. The puzzle rewards for a prover is directly proportional to their computational power relative to the entire network in every epoch. This approach ensures fairer and more stable rewards for provers. The puzzle reward is designed to decrease gradually over 10 years until it reaches a minimum threshold and becomes constant moving forward.



## Staking Requirements for Puzzle Solution Submissions
As of July 2025, [**ARC-0046**](https://vote.aleo.org/p/46) has taken effect.   This ARC requires provers on the Aleo Network to stake a specific amount of Aleo Credits to be eligible to submit puzzle solutions. The goal of this ARC is to align prover incentives with the overall network’s health, and gradually adjust up economic requirements for provers as the network matures.


Prior to this change, provers were able to participate in Proof of Succinct Work and earn puzzle rewards without any entry or exit requirements.  Moving forward, the network consensus protocol will enforce that the prover submitting solutions has an adequate amount of stake that is bonded to a validator on the Aleo network.

In more detail, a prover must stake a minimum number of Aleo Credits (X) to submit 1 solution per epoch. If the prover wishes to submit 2 solutions per epoch, they must stake 2*X Aleo Credits on the Aleo network. Once the prover submits their allotment of solutions per epoch, all subsequent solutions submitted by the prover will be rejected.  This approach ensures that pools do not gain any advantage over individual provers, ensuring fairness for all parties submitting solutions.

### Credit Requirements
The number of required credits will increase over two years on a quarterly basis following the activation of the ARC:

| Quarter | Effective Date | Stake Required Per Solution Per Epoch |
|---------| -------------- | ---------------------------------------|
| Q0      |      7/31/25         | 100,000                               |
| Q1      |     10/31/25         | 250,000                               |
| Q2      |       1/31/26       | 500,000                               |
| Q3      |      4/31/26          | 750,000                               |
| Q4      |      7/31/26          | 1,000,000                             |
| Q5      |       10/31/26         | 1,250,000                             |
| Q6      |      1/31/27          | 1,500,000                             |
| Q7      |      4/31/27          | 2,000,000                             |
| Q8      |      7/31/27          | 2,500,000                             |


### Objectives
- **Sybil Resistance** - Aligning stake with number of solutions per epoch ensures that provers cannot bypass this new cryptoeconomic mechanism by creating new identities on-chain. In addition, this new cryptoeconomic mechanism makes it economically costly for malicious actors to create numerous identities (Sybil attacks) to flood the network with malformed solutions.
- **BFT Security** - The proposed timetable ensures that provers gradually increase their stake participation to achieve at least the availability threshold of the Aleo Network within 2 years. This ensures that provers contribute to the underlying security of the Aleo Network.
- **Economic Growth** - A transparent schedule increase in the staking requirement allows the network to adapt to its growing value and security needs without introducing sudden economic impacts or shocks. By ensuring provers contribute to staking, this ensures that their earned rewards are then directly utilized by the Aleo Network itself.


### Beneficiaries

- **Validators** are likely to receive increased delegations from provers as the staking requirements are rolled out over the next two years, enhancing their participation and rewards.
- **Provers** benefit by earning additional staking yield on their token rewards through the staking process, further aligning their incentives with the network’s security and long-term growth. 
- **Long-term token holders** gain increased confidence that Aleo Credits are being actively used to secure the network and are delegated appropriately, supporting the network’s health.



<!-- 
## Future Plans
### ARC-43: Extending the Puzzle to a Full SNARK

ARC-43 proposes extending the current synthesis-focused puzzle to a full Succinct Non-interactive Argument of Knowledge (SNARK). This extension aims to address current bottlenecks and leverage recent hardware advancements. The full proposal can be found [here](https://github.com/ProvableHQ/ARCs/discussions/77).

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
- Phased implementation to allow gradual hardware upgrades -->


