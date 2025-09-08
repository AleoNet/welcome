---
id: get_block_transactions
title: Get Block Transactions
sidebar_label: Get Block Transactions
---

```bash title=ENDPOINT
GET /{network}/block/{height_or_hash}/transactions
```

Returns the transactions for the given block height.

### Arguments

| Parameter | Type | Required | Description                                     |
|:----------|:----:|:--------:|:------------------------------------------------|
| `height` or `hash` | u32 or string |   Yes    | The block height or hash of the requested block |

### Response

| Parameter |                    Type                    |              Description               |
|:---------:|:------------------------------------------:|:--------------------------------------:|
| `result`  | [array](../concepts/fundamentals/03_transactions.md) | The array of transactions in the block |
