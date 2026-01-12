---
id: transaction_fees
title: Transaction Fees
sidebar_label: Transaction Fees
---

# Transaction Fees

A **transaction fee** is a fee that is required in order to process a transaction on the Aleo network. Below, we describe the way in which **Deploy** and **Execute** transactions are priced. At the time of writing, puzzle solutions are free.

## Aleo Credits Denomination Table

|Denomination|Size of Transaction|Value|Example|
|:-:|:-:|:-:|:-:|
|`microcredit`|Byte|1|Smallest denomination|
|`millicredit`|Kilobyte (KB)|1000 microcredits|Most transactions average between 3 and 10 millicredits|
|`credit`|Megabyte (MB)|1000 millicredits|Largest denomination|

## Types of Transaction Fees
### Deployment Base Fee
This is what you pay for deploying a program to the Aleo network. Deployment fees consist of the following parts:

- **Storage Cost**: Determined by the amount of raw bytes of your program. The cost is calculated as `size_in_bytes × DEPLOYMENT_FEE_MULTIPLIER`, where `DEPLOYMENT_FEE_MULTIPLIER` is currently 1 millicredit per byte.
- **Namespace Cost**: The smaller your program name, the more you pay. There is no namespace cost if your program name is 10 characters or longer.
- **Synthesis Cost**: To process your program into a circuit for zero knowledge proofs. The cost is based on the number of variables and constraints: `(num_variables + num_constraints)`.
- **Constructor Cost**: The operations performed in the program's constructor are also accounted for in the deployment fee. The constructor currently has a 100× fee multiplier compared to the finalize cost.

### Execution Base Fee
This is what you pay for executing program functions on the Aleo network.

- **Execution Cost**: Determined by the amount of raw bytes of your execution transaction. For transactions smaller than 5,000 bytes (5 KB), the cost is linear: `size_in_bytes`. For larger transactions, a quadratic penalty applies: `size_in_bytes² / 5000`. This quadratic formula discourages excessively large transactions.
- **Finalize Cost**: Based on the operations performed in your function's finalize scope. Each operation has a specific cost in microcredits, including:
  - Mapping operations (get, set, remove, contains)
  - Hash operations (different costs for different hash functions)
  - Cryptographic operations (ECDSA verification, etc.)
  - Arithmetic and logical operations
  - These per-operation costs vary depending on the consensus fee version.
- **Proof Verification**: There is minimal execution cost for proof verification, as verifying zero knowledge proofs is computationally cheap. The expected proof size is included in the cost calculation.

### Priority Fee
Priority fees are optional fees that allow users to bid for higher transaction priority in the mempool. With the approval of [ARC-0005](https://github.com/ProvableHQ/ARCs/discussions/92), priority fees are now supported and effectively created a fee market for transaction ordering.

The network maintains a priority queue for transactions that include a nonzero priority fee. This priority queue is processed before the standard transaction queue when sending transactions to the BFT consensus layer.

:::note[notes on current design]
1.  Priority fees for transactions already in the mempool cannot be updated. 
2.  There is no protection against starvation: if the priority pool stays full enough, 
transmissions from the standard queue will not be sent to the BFT. 
3.  Batch building is not atomic w.r.t. the memory pool. 
:::

<!-- markdown-link-check-disable -->
### Estimating Fees
The fee determination logic is defined in [a file called cost.rs](https://github.com/ProvableHQ/snarkVM/blob/mainnet/synthesizer/process/src/cost.rs). There are multiple ways to estimate fees for your transactions:

#### Using the SDK
You can use the SDK's ProgramManager to estimate fees programmatically:
- [`estimateExecutionFee`](../../sdk/api-specification/03_program_manager.md#estimateexecutionfee) - Estimate the execution fee for an Aleo function
- [`estimateFeeForAuthorization`](../../sdk/api-specification/03_program_manager.md#estimatefeeforauthorization) - Estimate the fee for an authorization

#### Using Leo CLI
You can also use [`Leo CLI`](https://docs.leo-lang.org/cli/cli_overview) to estimate the fees for your transaction. Example as below:
<!-- markdown-link-check-enable -->

First, generate a example program using `leo example`.
```bash
leo example lottery
cd lottery
```

Then use `leo deploy` to estimate the deployment fees for your transaction.
```bash
leo deploy --network testnet --endpoint https://api.explorer.provable.com/v1
```

Or use `leo execute` to estimate the execution fees for your transaction.
```bash
leo execute main 1u32 2u32 --endpoint https://api.explorer.provable.com/v1 --network testnet 
```

This method works without needing to fund the private key and will look something like below:  
**Deployment**
```bash
📊 Deployment Summary for helloworld.aleo
──────────────────────────────────────────────
  Total Variables:      16,995
  Total Constraints:    12,927
  Max Variables:        2,097,152
  Max Constraints:      2,097,152

💰 Cost Breakdown (credits)
  Transaction Storage:  0.879000
  Program Synthesis:    0.029922
  Namespace:            1.000000
  Constructor:          0.002000
  Priority Fee:         0.000000
  Total Fee:            1.910922
──────────────────────────────────────────────
```
**Execution**
```bash
📊 Execution Summary for helloworld.aleo
──────────────────────────────────────────────
💰 Cost Breakdown (credits)
  Transaction Storage:  0.001321
  On‑chain Execution:   0.000000
  Priority Fee:         0.000000
  Total Fee:            0.001321
──────────────────────────────────────────────
```

### Fees Visibility

On Aleo, each transaction contains a dedicated fee transition. The fee may be provided by the sender or by a sponsor, and it can be paid either publicly or privately. The fee amounts themselves (base and optional priority) are always public, what differs is the on‑ledger visibility of the payer.

#### Public fee payment
Paid from a public `account`. The payer’s address and the total fee (base + priority) are visible on the ledger. The payer publicly signs the fee transition, and the amount is deducted from their public balance during `finalize`.
:::warning[important]
For public fees, the payer’s public `account` must have sufficient balance at verification time.
:::

#### Private fee payment
Paid from a private `credits.record`. The payer’s address is not revealed, a private change record is produced. Only the fee amounts and a public link to the target transaction are disclosed. To keep a private transaction fully private, the fee should be paid privately.

### Fee Sponsorship
A separate party can provide the fee via an independent fee authorization that is combined with the sender’s execution authorization. Sponsors may pay publicly or privately. For maximum sender privacy a private‑sponsored fee is preferred, public sponsorship links the sponsor’s address to the target transaction ID.

:::note
Every fee transition carries a public field binding it to a specific deployment or execution ID, ensuring the fee is verifiably associated with the intended transaction.
:::

:::info[special case]
All transactions require a base fee, except the transaction that contains only a single call to `credits.aleo/split` or `credits.aleo/upgrade` may omit the base fee (a priority fee may still be included). Any multi‑transition transaction requires a fee.
:::
