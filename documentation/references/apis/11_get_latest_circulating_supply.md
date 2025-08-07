---
id: get_latest_circulating_supply
title: Get Latest Circulating Supply
sidebar_label: Get Latest Circulating Supply
---

```bash title=ENDPOINT
GET /{network}/latest/circulatingSupply
```

Retrieves the latest circulating supply for the Aleo blockchain.

**Note:** This endpoint is only available for mainnet currently.

### Arguments

None

### Response

| Parameter | Type |            Description            |
|:---------:|:----:|:---------------------------------:|
| `result`  | u64  | The circulating supply of Aleo credits | 