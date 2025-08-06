---
title: KeyPair
sidebar_label: KeyPair
---

<a name="KeyPair"></a>

## Overview

<p>Key pair object containing both the function proving and verifying keys for Aleo programs. This class provides access to cryptographic keys needed for proving and verifying function executions.</p>



## Constructors

### KeyPair

<p>Create new key pair from proving and verifying keys</p>

```javascript
KeyPair(proving_key, verifying_key)
```

| Param | Type | Description |
| --- | --- | --- |
| proving_key | <code>ProvingKey</code> | Proving key corresponding to a function in an Aleo program |
| verifying_key | <code>VerifyingKey</code> | Verifying key corresponding to a function in an Aleo program |
| *return* | <code>KeyPair</code> | Key pair object containing both the function proving and verifying keys |

## Methods

<a name="KeyPair+provingKey"></a>

### provingKey

<p>Get the proving key. This method will remove the proving key from the key pair</p>

```javascript
provingKey() ► ProvingKey
```



| Param | Type |
| --- | --- |
| *return* | <code>ProvingKey</code> |

---

<a name="KeyPair+verifyingKey"></a>

### verifyingKey

<p>Get the verifying key. This method will remove the verifying key from the key pair</p>

```javascript
verifyingKey() ► VerifyingKey
```



| Param | Type |
| --- | --- |
| *return* | <code>VerifyingKey</code> |

---