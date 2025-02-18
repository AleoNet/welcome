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

- There is a size cost, determined by the amount of raw bytes of your program.
- There is a namespace cost, the smaller your program name the more you pay. There is no namespace cost if your program name is 10 characters or longer.
- There is a synthesize cost to process your program. The more complicated operations which your program has, the more time it takes for the network to convert this to a circuit to create zero knowledge proofs for.

### Execution Base Fee
This is what you pay for executing program functions on the Aleo network.

- There is a size cost, determined by the amount of raw bytes of your program. A quadratic fee kicks in above 5 KB.
- There is a finalize cost, determined by the amount of operations in your function's finalize scope.
- There is no execution cost, because verifying the associated zero knowledge proof is cheap.

### Priority Fee
Priority fees are optional fees which can help speed up the processing of your transaction during high traffic. They are not yet supported, but will soon be.

### Estimating fees
The fee determination logic is defined in [a file called cost.rs](https://github.com/ProvableHQ/snarkVM/blob/mainnet/synthesizer/process/src/cost.rs#L26). If you want to quickly estimate fees using a website, [provable.tools](https://www.provable.tools/develop) has some limited support. Or you can also use `leo cli` to estimate the fees for your transaction. Example as below:

First, generate a example program using `leo example`.
```bash
leo example lottery
cd lottery
```

Then use `leo deploy` to estimate the deployment fees for your transaction.
```bash
leo deploy --network testnet --endpoint "https://api.explorer.provable.com/v1" --path .
```

Or use `leo run` to estimate the execution fees for your transaction.
```bash
leo execute play --program lottery_test.aleo --endpoint https://api.explorer.provable.com/v1 --dry-run --broadcast
```

This method works without needing to fund the private key in `.env` and it will look something like this:
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