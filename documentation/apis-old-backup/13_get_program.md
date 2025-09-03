---
id: get_program
title: Get Program
sidebar_label: Get Program
---

```bash title=ENDPOINT
# Get program without edition (uses latest edition)
GET /{network}/program/{programID}

# Get program with specific edition
GET /{network}/program/{programID}/{edition}

# Get program with specific edition and include metadata
GET /{network}/program/{programID}/{edition}?metadata=true
```

Returns the program for the given program ID.

### Arguments

| Parameter   |  Type  | Required | Description                             |
|:------------|:------:|:--------:|:----------------------------------------|
| `programID` | string |   Yes    | The program id of the requested program |
| `edition`   | integer|   Yes    | The program edition                     |
| `metadata`  | boolean|    No     | Include program metadata in response    |

### Response

| Parameter |                  Type                   |      Description      |
|:---------:|:---------------------------------------:|:---------------------:|
| `result`  | [object](../concepts/fundamentals/01_programs.md) | The requested program |