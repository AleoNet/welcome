---
id: get_beacons
title: Get Beacons
sidebar_label: Get Beacons
---

```bash title=ENDPOINT
GET /testnet/beacons
```

Returns the list of current beacon node addresses.

### Arguments

None

### Response

| Parameter |                  Type                  |        Description        |
|:---------:|:--------------------------------------:|:-------------------------:|
| `result`  | [array](../../concepts/beginner/00_accounts.md) | The beacon Aleo addresses |