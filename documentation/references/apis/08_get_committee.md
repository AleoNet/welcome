---
id: get_committee
title: Get Committee
sidebar_label: Get Committee
---

```bash title=ENDPOINT
GET /{network}/committee/latest
```

```bash title=ENDPOINT
GET /{network}/latest/committee
```

Returns the list of current committee members and their stake.

### Arguments

None

### Response

| Parameter |                  Type                  |         Description          |
|:---------:|:--------------------------------------:|:----------------------------:|
| `result`  | [array](../../concepts/fundamentals/00_accounts.md) | The latest committee members |