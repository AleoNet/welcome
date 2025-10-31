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
### Estimating fees
The fee determination logic is defined in [a file called cost.rs](https://github.com/ProvableHQ/snarkVM/blob/mainnet/synthesizer/process/src/cost.rs). If you want to quickly estimate fees using a website, [provable.tools](https://www.provable.tools/develop) has some limited support. Or you can also use `leo cli` to estimate the fees for your transaction. Example as below:
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

This method works without needing to fund the private key and it will look something like this:
```bash
Base execution cost for 'lottery_test' is 0.041048 credits.

+---------------------+----------------+
| lottery_test        | Cost (credits) |
+---------------------+----------------+
| Transaction Storage | 0.001338       |
+---------------------+----------------+
| On-chain Execution  | 0.039710       |
+---------------------+----------------+
| Priority Fee        | 0.000000       |
+---------------------+----------------+
| Total               | 0.041048       |
+---------------------+----------------+

Your current public balance is 7.401737 credits.

✅ Successful dry run execution for 'lottery_test.aleo'
```