---
id: transactions
title: Transactions
sidebar_label: Transactions
---

A **transaction** is a fundamental data structure for interacting with the Aleo network.  Users send transactions that specify one or more operations to process. A nominal fee is required in order to process a transaction on the Aleo network. 

Transactions processed by Aleo validators achieve one of the following states:

| Status | Description |
|:------:|:------------|
| `accepted` | The underlying deployment or execution was successful, and the associated fee was consumed. The transaction has a confirmed ID. |
| `rejected` | The deployment or execution logic failed. Validators process the fee as an independent fee transaction. The original transaction has an unconfirmed ID, while the fee transaction has a confirmed ID. |
| `aborted` | Both the deployment/execution logic and fee processing failed. The transaction is aborted. |

:::note
Transactions may not be included in any block when not selected from the mempool by validators during high network load conditions.
:::

There are three main types of transactions: [Deploy](#deploy-transactions), [Execute](#execute-transactions), and [Fee](#fee-transactions).

## Deploy Transactions
A deployment transaction publishes a new Aleo program to the network.

#### Deployment Cost

- There is a size cost, determined by the amount of raw bytes of your program.
- There is a synthesize cost to process your program. The more complicated operations which your program has, the more time it takes for the network to convert this to a circuit to create zero knowledge proofs for.
- There is a namespace cost, the smaller your program name the more you pay. There is no namespace cost if your program name is 10 characters or longer.
- There is a constructor fee, for executing the deployment/upgrade logic within the `constructor` function.
- There is an optional priority fee (see [below](#priority-fees)).


```bash
──────────────────────────────────────────────
💰 Cost Breakdown (credits)
  Transaction Storage:  1.930000
  Program Synthesis:    0.164723
  Namespace:            0.000000
  Constructor:          0.002000
  Priority Fee:         0.000000
  Total Fee:            2.096723
──────────────────────────────────────────────
```

## Execute Transactions
An execution transaction represents a call to an Aleo program function.

#### Execution Cost
- There is a size cost, determined by the amount of raw bytes of your program. A quadratic fee kicks in above 5 KB.
- There is a finalize cost, determined by the amount of operations in your function's finalize scope.
- There is an optional priority fee (see [below](#priority-fees)).

```bash
──────────────────────────────────────────────
💰 Cost Breakdown (credits)
  Transaction Storage:  0.001652
  On‑chain Execution:   0.000652
  Priority Fee:         0.000000
  Total Fee:            0.002304
──────────────────────────────────────────────
```



## Fee Transactions
A fee transaction represents the network fee paid for processing. 

In the case of a successful transaction, the fee is recorded as a transition object within the execution or deployment transaction. However, in the case of a rejected transactions, the fee must still be paid to the validators on the networks.  In this scenario, a separate fee transaction is generated with a new transaction ID to ensure the fee is paid.


## Miscellaneous
### Priority Fees
Each of the transaction types also supports a priority fee.  This optionally allows a user to pay extra for higher transaction priority in the mempool. 

The network maintains a priority queue for transactions that include a non-zero priority fee. This priority queue is processed before the standard transaction queue when sending transactions to the BFT consensus layer.

:::note
There is no protection against starvation.  If the priority pool stays full enough, 
transmissions from the standard queue will not be processed.
:::

### Transactions vs. Transitions
- A **Transaction** is the top-level unit that represents a complete operation. A **Transition** is a lower-level component that represents an individual state change within a **Transaction**.
- A **Transaction** may contain multiple **Transitions**, especially in cases involving multiple cross-program calls.
