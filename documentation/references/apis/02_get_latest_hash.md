---
id: get_latest_hash
title: Get Latest Hash
sidebar_label: Get Latest Hash
---

```bash title=ENDPOINT
GET /{network}/block/hash/latest
```
or
```bash title=ENDPOINT
GET /{network}/latest/hash
```

Returns the latest block hash.

### Arguments

None

### Response

| Parameter |  Type  |                 Description                  |
|:---------:|:------:|:--------------------------------------------:|
| `result`  | string |   The block hash of the most recent block    |

