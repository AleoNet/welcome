---
id: latest_height
title: Latest Height
sidebar_label: Latest Height
---

```bash title=ENDPOINT
GET /{network}/block/height/latest
```

Returns the latest block height.

### Arguments

None

### Response

| Parameter | Type |            Description            |
|:---------:|:----:|:---------------------------------:|
| `result`  | u32  | The number of blocks in the chain |
