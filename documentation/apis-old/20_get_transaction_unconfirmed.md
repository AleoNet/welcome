---
id: get_transaction_unconfirmed
title: Get Transaction Unconfirmed
sidebar_label: Get Transaction Unconfirmed
---

```bash title=ENDPOINT
GET /{network}/transaction/unconfirmed/{ID}
```

Retrieves the unconfirmed transaction details for the given transaction ID.

### Arguments

| Parameter |  Type  | Required | Description                                         |
|:----------|:------:|:--------:|:----------------------------------------------------|
| `ID`      | string |   Yes    | The transaction id of the requested transaction hex |

### Response

| Parameter |                    Type                     |        Description        |
|:---------:|:-------------------------------------------:|:-------------------------:|
| `result`  | object | The requested unconfirmed transaction |
