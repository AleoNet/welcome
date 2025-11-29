---
id: mappings
title: Mappings
sidebar_label: Mappings
---

**Mappings** are fundamental data structures that encode **public state**.

Similar to mappings on blockchains such as Ethereum, mappings on Aleo are onchain databases with a key-value access pattern.  They cannot be edited by a user directly; they can only be modified by functions within their program.  Mappings are tied to a specific program, and any user can querying a particular key at any time. 

Unlike mappings on Ethereum, values are not initialized by default.  Querying an uninitialized key within a mapping will result in an error.  Additionally, nested mappings are not currently supported.

```aleo
mapping publicState:
    key as u8.public;
    value as u8.public;
```

As a tangible example, an account's public balance of Aleo Credits is stored in the `account` mapping in the program `credits.aleo`.  See the [Aleo Credits](./05_credits.md) section for more details.







