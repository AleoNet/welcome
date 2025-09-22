---
id: create_account
title: Create an Aleo Account
sidebar_label: 2. Create an Aleo Account
---

The first step in operating a zero knowledge web application is creating a cryptographic identity for a user. In the
context of Aleo, this process starts by generating a private key. From this private key, several keys that enable a user
to interact with Aleo programs can be derived.

These keys include:
#### Private Key
The key used to represent an identity of an individual user. This key is used to authorize zero
knowledge program execution.
#### View Key
This key is derived from the private key and can be used to identify all records and transaction data that
belongs to an individual user.
#### Compute Key
A key that can be used to trustlessly run applications and generate transactions on a user's behalf.
#### Address
A public address that can be used to trustlessly identify a user in order for that user to receive official
Aleo credits or unique data defined by other zero-knowledge Aleo programs.

All of these keys can be created using the `Account` object:
```typescript
import { Account } from '@provablehq/sdk';

const account = new Account();

// Individual keys can then be accessed through the following methods
const privateKey = account.privateKey();
const viewKey = account.viewKey();
const computeKey = account.computeKey();
const address = account.address();
```

Please note that all keys are considered sensitive information and should be stored securely.
