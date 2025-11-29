---
id: accounts
title: Accounts
sidebar_label: Accounts
---

An Aleo account is composed of a **private key**, **view key**, and an **address**.

## Private Key

The private key is used to authorize all forms of transactions as well as generate signatures.

Private keys are formatted as Base58 strings comprised of 59 characters with a prefix of `APrivateKey1`:
```
APrivateKey1zkp4X9ApjTb7Rv8EABfZRugXBhbPzCL245GyNtYJP5GYY2k
```

:::warning
**Never disclose your private key to any untrusted parties!**
:::

## View Key

The view key is derived from the private key and enables users to decrypt their [records](02_records.md) from the global ledger.  The most important distinction from private keys is that while view keys can decrypt and view records, they cannot create new transactions or generate signatures.

View keys are formatted as Base58 strings comprised of 53 characters with a prefix of `AViewKey1`:
```
AViewKey1nKB4qr9b5gK8wQvmM5sTPEuBwshtDdkCZB1SPWppAG9Y
```

:::note
As view keys are able to access every record for a given user, they can be used by third-party auditors to view and verify the complete history of an account.
:::

## Address

Th account address, also known as the **public key**, is derived from the view key and enables users to uniquely identify and interact with one another.

Addresses are formatted as a Bech32 strings comprised of 63 characters with a prefix of `aleo1`:
```
aleo1dg722m22fzpz6xjdrvl9tzu5t68zmypj5p74khlqcac0gvednygqxaax0j
```


