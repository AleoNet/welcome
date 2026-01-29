---
title: ComputeKey
sidebar_label: ComputeKey
---

<a name="ComputeKey"></a>

## Overview

<p>Represents a compute key for an Aleo account. The ComputeKey class provides methods for creating compute keys from private keys and accessing their components (sk_prf, pk_sig, pr_sig). Compute keys are used in the execution of Aleo programs.</p>



## Methods

<a name="ComputeKey.from_private_key"></a>

### from_private_key

<p>Create a new compute key from a private key</p>

```javascript
from_private_key(private_key) ► ComputeKey
```



| Param | Type | Description |
| --- | --- | --- |
| private_key | <code>PrivateKey</code> | Private key |
| *return* | <code>ComputeKey</code> | Compute key |

---

<a name="ComputeKey+address"></a>

### address

<p>Get the address from the compute key</p>

```javascript
address() ► Address
```



| Param | Type |
| --- | --- |
| *return* | <code>Address</code> |

---

<a name="ComputeKey+sk_prf"></a>

### sk_prf

<p>Get the sk_prf of the compute key</p>

```javascript
sk_prf() ► Scalar
```



| Param | Type |
| --- | --- |
| *return* | <code>Scalar</code> |

---

<a name="ComputeKey+pk_sig"></a>

### pk_sig

<p>Get the pk_sig of the compute key</p>

```javascript
pk_sig() ► Group
```



| Param | Type |
| --- | --- |
| *return* | <code>Group</code> |

---

<a name="ComputeKey+pr_sig"></a>

### pr_sig

<p>Get the pr_sig of the compute key</p>

```javascript
pr_sig() ► Group
```



| Param | Type |
| --- | --- |
| *return* | <code>Group</code> |

---
