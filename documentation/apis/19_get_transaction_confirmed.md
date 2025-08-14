---
id: get_transaction_confirmed
title: Get Transaction Confirmation Status
sidebar_label: Get Transaction Confirmation Status
---

```bash title=ENDPOINT
GET /{network}/transaction/confirmed/{ID}
```

Retrieves the confirmation status of a transaction that was submitted to the Aleo blockchain.

### Arguments

| Parameter | Type | Description |
|:---------:|:----:|:-----------:|
| `ID` | string | The transaction ID to check confirmation status for |

### Response

| Parameter | Type |            Description            |
|:---------:|:----:|:---------------------------------:|
| `result`  | boolean  | The confirmation status of the transaction | 