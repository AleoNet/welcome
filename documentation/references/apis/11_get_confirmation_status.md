---
id: get_confirmation_status
title: Get Confirmation Status
sidebar_label: Get Confirmation Status
---

```bash title=ENDPOINT
GET /{network}/transaction/confirmed/{ID}
```

Retrieves the confirmation status of a transaction.

### Arguments

| Parameter       |  Type  | Required | Description                                         |
|:----------------|:------:|:--------:|:----------------------------------------------------|
| `ID` | string |   Yes    | The transaction id of the requested transaction hex |

### Response

| Parameter |                    Type                     |        Description        |
|:---------:|:-------------------------------------------:|:-------------------------:|
| `result`  | object | The confirmation status |