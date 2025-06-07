---
id: get_latest_height
title: Get Latest Height
sidebar_label: Get Latest Height
---

```bash title=ENDPOINT
GET /{network}/block/height/latest
```
or
```bash title=ENDPOINT
GET /{network}/latest/height
```

Returns the latest block height.

### Arguments

None

### Response

| Parameter | Type |            Description            |
|:---------:|:----:|:---------------------------------:|
| `result`  | u32  | The number of blocks in the chain |
