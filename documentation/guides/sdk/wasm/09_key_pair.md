---
id: key_pair
title: KeyPair
sidebar_label: KeyPair
---

## Class `KeyPair`

Key pair object containing both the function proving and verifying keys

### Constructors


### `KeyPair(proving_key, verifying_key)`

Create new key pair from proving and verifying keys

Parameters | Type | Description
--- | --- | ---
__proving_key__ | ProvingKey | *Proving key corresponding to a function in an Aleo program*
__verifying_key__ | VerifyingKey | *Verifying key corresponding to a function in an Aleo program*
__*return*__ | KeyPair | *Key pair object containing both the function proving and verifying keys*

---

### Methods

### `provingKey() ► ProvingKey`


Get the proving key. This method will remove the proving key from the key pair

Parameters | Type | Description
--- | --- | ---
__*return*__ | ProvingKey | **

---

### `verifyingKey() ► VerifyingKey`


Get the verifying key. This method will remove the verifying key from the key pair

Parameters | Type | Description
--- | --- | ---
__*return*__ | VerifyingKey | **

--- 