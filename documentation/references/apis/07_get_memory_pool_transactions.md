---
id: get_memory_pool_transactions
title: Get Memory Pool Transactions
sidebar_label: Get Memory Pool Transactions
---

```bash title=ENDPOINT
GET /{network}/memoryPool/transactions
```

Returns the transactions in the memory pool.

### Arguments

None

### Response

| Parameter |                    Type                    |        Description        |
|:---------:|:------------------------------------------:|:-------------------------:|
| `result`  | [array](../../concepts/fundamentals/03_transactions.md) | The array of transactions |