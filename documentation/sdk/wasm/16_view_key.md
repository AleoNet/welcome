---
title: ViewKey
sidebar_label: ViewKey
---

<a name="ViewKey"></a>

## Overview

<p>Represents a view key for an Aleo account. The ViewKey class provides methods for creating view keys from private keys, deriving addresses, and decrypting record ciphertexts. View keys allow the holder to view all records associated with an account without being able to spend them.</p>



## Methods

<a name="ViewKey.from_private_key"></a>

### from_private_key

<p>Create a new view key from a private key</p>

```javascript
from_private_key(private_key) ► ViewKey
```



| Param | Type | Description |
| --- | --- | --- |
| private_key | <code>PrivateKey</code> | Private key |
| *return* | <code>ViewKey</code> | View key |

---

<a name="ViewKey.from_string"></a>

### from_string

<p>Create a new view key from a string representation of a view key</p>

```javascript
from_string(view_key) ► ViewKey
```



| Param | Type | Description |
| --- | --- | --- |
| view_key | <code>string</code> | String representation of a view key |
| *return* | <code>ViewKey</code> | View key |

---

<a name="ViewKey+to_string"></a>

### to_string

<p>Get a string representation of a view key</p>

```javascript
to_string() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="ViewKey+to_address"></a>

### to_address

<p>Get the address corresponding to a view key</p>

```javascript
to_address() ► Address
```



| Param | Type |
| --- | --- |
| *return* | <code>Address</code> |

---

<a name="ViewKey+to_scalar"></a>

### to_scalar

<p>Get the underlying scalar of a view key</p>

```javascript
to_scalar() ► Scalar
```



| Param | Type |
| --- | --- |
| *return* | <code>Scalar</code> |

---

<a name="ViewKey+toField"></a>

### toField

<p>Cast the view key to a field</p>

```javascript
toField() ► Field
```



| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---

<a name="ViewKey+decrypt"></a>

### decrypt

<p>Decrypt a record ciphertext with a view key</p>

```javascript
decrypt(ciphertext) ► string
```



| Param | Type | Description |
| --- | --- | --- |
| ciphertext | <code>string</code> | String representation of a record ciphertext |
| *return* | <code>string</code> | String representation of a record plaintext |

---
