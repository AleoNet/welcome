---
id: transactions
title: Transactions
sidebar_label: Transactions
---

A **transaction** is a fundamental data structure for publishing a new program or a set of state transitions on the ledger.

## Types of Transactions

### Deploy Transaction
The deployment transaction publishes an Aleo program to the network.

|  Parameter   |  Type  |                                   Description                                    |
|:------------:|:------:|:--------------------------------------------------------------------------------:|
|    `type`    | string |                         The type of transaction (deploy)                         |
|     `id`     | string | The ID of transaction, computed via the Merkle Tree Digest of the transition IDs |
|   `owner`    | object |                         The owner address and signature                          |
| `deployment` | object |                         The deployment transaction info                          |
|    `fee`     | object |                          The deployment transaction fee                          |

#### Deployment Info

|      Parameter      | Type  |                            Description                            |
|:-------------------:|:-----:|:-----------------------------------------------------------------:|
| `global_state_root` |  u16  |             The global state root of the merkle tree              |
|    `transitions`    | array |              The [transitions](./04_transitions.md)               |

### Execute Transaction
The execution transaction represents a call to an Aleo program function.

|    Parameter     |  Type  |                                   Description                                    |
|:----------------:|:------:|:--------------------------------------------------------------------------------:|
|      `type`      | string |                        The type of transaction (execute)                         |
|       `id`       | string | The ID of transaction, computed via the Merkle Tree Digest of the transition IDs |
|   `execution`    | object |                          The execution transaction info                          |
| `fee` (optional) | object |                      The optional execution transaction fee                      |


#### Execution Info

|      Parameter      | Type  |                            Description                            |
|:-------------------:|:-----:|:-----------------------------------------------------------------:|
| `global_state_root` |  u16  |             The global state root of the merkle tree              |
|    `transitions`    | array |              The [transitions](./04_transitions.md)               |

### Fee Transaction
The fee transaction represents a fee paid to the network, used for rejected transactions

| Parameter |  Type  |                                   Description                                    |
|:---------:|:------:|:--------------------------------------------------------------------------------:|
|  `type`   | string |                          The type of transaction (fee)                           |
|   `id`    | string | The ID of transaction, computed via the Merkle Tree Digest of the transition IDs |
|   `fee`   | object |                           The rejected transaction fee                           |





## Transaction Structure

|    Parameter     |  Type  |                Description                |
|:----------------:|:------:|:-----------------------------------------:|
|      `type`      | string |          The type of transaction          |
|       `id`       | string |    The ID of transaction (at1 prefix)     |
|   `deployment`   | object |      The deployment transaction info      |
| `additional_fee` | object |  The additional fee for the transaction   |


[//]: # ()
[//]: # (#### Deploy Transaction)

[//]: # ()
[//]: # (|    Parameter     |  Type  |              Description               |)

[//]: # (|:----------------:|:------:|:--------------------------------------:|)

[//]: # (|      `type`      | string |        The type of transaction         |)

[//]: # (|       `id`       | string |         The ID of transaction          |)

[//]: # (|   `deployment`   | object |    The deployment transaction info     |)

[//]: # (| `additional_fee` | object | The additional fee for the transaction |)

[//]: # ()
[//]: # (#### Deployment Info)

[//]: # ()
[//]: # (|    Parameter     |  Type   |                             Description                              |)

[//]: # (|:----------------:|:-------:|:--------------------------------------------------------------------:|)

[//]: # (|    `edition`     |   u16   |                             The edition                              |)

[//]: # (|    `program`     | object  |                             The program                              |)

[//]: # (| `verifying_keys` | mapping | The mapping of function names to their verifying key and certificate |)

[//]: # ()
[//]: # (## Advanced Topics)

[//]: # ()
[//]: # (### Creating Transactions)

[//]: # ()
[//]: # (The steps to create a transaction are as follows:)

[//]: # ()
[//]: # (1. Generate the serial numbers of the records being spent)

[//]: # (2. Generate the new records)

[//]: # (3. Generate the program commitment)

[//]: # (4. Generate the local data commitment)

[//]: # (5. Generate the transaction signatures)

[//]: # (6. Generate the ledger digest and [ledger membership witnesses]&#40;06_glossary.md#ledger-membership-witness&#41; for the input record commitments )

[//]: # (7. Generate the inner SNARK proof)

[//]: # (8. Generate the program SNARK proofs)

[//]: # (9. Generate the transaction proof)

[//]: # (10. Compose the transaction with the attributes above)

[//]: # ()
[//]: # ()
[//]: # (### Verifying Transactions)

[//]: # ()
[//]: # (The steps to verify a transaction are as follows:)

[//]: # ()
[//]: # (1. Verify that each serial number in `old_serial_numbers` does not already exist in the ledger.)

[//]: # (2. Verify that each commitment in `new_commitments` does not already exist in the ledger.)

[//]: # (3. Verify that the memo `memorandum` does not already exist in the ledger.)

[//]: # (4. Verify that the transaction proof `transaction_proof` verifies.)

## Determining Transaction Status

Transactions processed by Aleo validators achieve one of the following states:

| Status | Description |
|:------:|:------------|
| `accepted` | The underlying deployment or execution was successful, and the associated fee was consumed. The transaction has a confirmed ID. |
| `rejected` | The deployment or execution logic failed. Validators process the fee as an independent fee transaction. The original transaction has an unconfirmed ID, while the fee transaction has a confirmed ID. |
| `aborted` | Both the deployment/execution logic and fee processing failed. The transaction is aborted. |

:::note
Transactions may not be included in any block when not selected from the mempool by validators during high network load conditions.
:::

### Method 1: Parsing Transactions from Blocks

Transaction status can be determined by processing blocks retrieved via:  

- `GET /<network>/block/{height}` - snarkOS node endpoint
- [Get block by height or hash](https://docs.explorer.provable.com/docs/api-reference/8sqnes7uvwe05-get-block-by-height-or-hash) on the Provable explorer

Transaction status can be determined from a block response as follows:

#### Accepted Transactions
- Get the list of transactions using `echo response | jq .transactions`
- The transaction JSON contains `"status": "accepted"`
- The transaction id is present in `echo transaction | jq .transaction.id`

#### Rejected Transactions
- Get the list of transactions using `echo response | jq .transactions`
- The transaction JSON contains `"status": "rejected"`
- The confirmed transaction id is present in `echo transaction | jq .transaction.id`
- The associated unconfirmed transaction id can be acquired by:
  - Calling `GET /<network>/unconfirmed/{confirmed id}` and calling `echo transaction | jq .transaction.id`
  - You can also hit `https://api.explorer.provable.com/v1/mainnet/transaction/unconfirmed/{ID}`

#### Aborted Transactions
- Get the list of aborted ids using `echo response | jq .aborted_transaction_ids`

#### SDK - getConfirmedTransaction

```javascript
import { AleoNetworkClient } from '@provablehq/sdk/mainnet.js';

const net  = new AleoNetworkClient('https://api.explorer.provable.com/v1');   
const txId = 'at14v8nt94d7xmsp3dq2glpzft6xw3x42ne753mlt8uenn8zw76dsqqc65jnf';                                

const status = await net.getConfirmedTransaction(txId);
console.log(status.status);
```

### Method 2: Directly Querying Transaction Status

An alternative way to get feedback on the status of transactions, is to call the following endpoint.

- `GET /<network>/transaction/confirmed/{transaction id}` on a fully synced snarkOS node REST endpoint
- [Get transaction by ID](https://docs.explorer.provable.com/docs/api-reference/bqly6ukna97b6-get-transaction-by-id) on the Provable explorer

If the transaction was accepted, `echo $transaction | jq .type` will say "execute"  
If the transaction was rejected, `echo $transaction | jq .type` will say "fee"
:::note
Currently no API endpoint is available to quickly check whether a transaction was aborted.
:::

Given a confirmed transaction id, you can find the block it was included in using:

- `GET /<network>/find/blockHash//{transaction id}` on a fully synced snarkOS node REST endpoint
- [Get block hash for transaction ID](https://docs.explorer.provable.com/docs/api-reference/8ka85a1oq8iau-get-block-hash-for-transaction-id) on the Provable explorer

#### SDK - fetchData and getBlockByHash

```javascript
import { AleoNetworkClient } from '@provablehq/sdk/mainnet.js';

const net  = new AleoNetworkClient('https://api.explorer.provable.com/v1');   
const txId = 'at14v8nt94d7xmsp3dq2glpzft6xw3x42ne753mlt8uenn8zw76dsqqc65jnf'; 
// Get block hash using fetchData
const res = await net.fetchData('/find/blockHash/' + txId);   
// Get block by using getBlockByHash 
const block = await net.getBlockByHash(res)
// Get block height by response json
console.log(block.header.metadata.height);
```

### Parsing the Sender Address from transfer_public or transfer_public_as_signer Executions

Note that the sender address might be an externally owned account (EOA), i.e. owned by a user, or it might be the address of an Aleo program.

The sender address of a Transaction is present as the first argument of the first output. The following will return a human readable string containing the public values of the first output.

```bash
echo $transaction | jq '.execution.transitions[0].outputs[0].value'
```

Unfortunately, the current snarkOS and explorer REST endpoints return execution outputs as a string which is not compatible with JSON. You'll still need to extract the first value from it. The sender address can be parsed for example using a regex or by parsing out the 5th line:

```bash
echo $(echo $transaction | jq '.execution.transitions[0].outputs[0].value') | sed -n '5p'
```

### Summarized Block Contents

A block contains confirmed transactions.

A confirmed transaction can either have status "accepted" or "rejected", and type "deploy" or "execute", and it contains a "transaction" and optional "rejected" object.

- A "transaction" can have type "fee", "execute" or "deploy".
- A "rejected" can have type "execution" or "deployment".

```json
{
  …,
  "transactions": [
    "status": "accepted"/"rejected"
    "type": "deploy"/"execute",
    "transaction": {
      …,
      "type": "fee"/"execute"/"deploy"
    }
 "rejected": {
      …,
      "type": "execution"/"deployment"
    } 
  ],
  "unconfirmed_transaction_ids": [...]
}
```
