---
id: get_latest_state_root
title: Get Latest State Root
sidebar_label: Get Latest State Root
---

```bash title=ENDPOINT
GET /{network}/stateRoot/latest
```

```bash title=ENDPOINT
GET /{network}/latest/stateRoot
```

Returns the latest state root.

### Arguments

None

### Response
| Parameter |                 Type                  |      Description      |
|:---------:|:-------------------------------------:|:---------------------:|
| `result`  | [string](../concepts/fundamentals/05_blocks.md) | The latest state root |

