---
title: PrivateKeyCiphertext
sidebar_label: PrivateKeyCiphertext
---

<a name="PrivateKeyCiphertext"></a>

## Overview

<p>Represents an encrypted private key. The PrivateKeyCiphertext class provides methods for encrypting and decrypting private keys using a secret string. This allows for secure storage of private keys.</p>



## Methods

<a name="PrivateKeyCiphertext.encryptPrivateKey"></a>

### encryptPrivateKey

<p>Encrypt a private key using a secret string. The secret is sensitive and will be needed to decrypt the private key later, so it should be stored securely.</p>

```javascript
encryptPrivateKey(private_key, secret) ► PrivateKeyCiphertext
```



| Param | Type | Description |
| --- | --- | --- |
| private_key | <code>PrivateKey</code> | Private key to encrypt |
| secret | <code>string</code> | Secret to encrypt the private key with |
| *return* | <code>PrivateKeyCiphertext</code> | Private key ciphertext |

---

<a name="PrivateKeyCiphertext+decryptToPrivateKey"></a>

### decryptToPrivateKey

<p>Decrypts a private ciphertext using a secret string. This must be the same secret used to encrypt the private key.</p>

```javascript
decryptToPrivateKey(secret) ► PrivateKey
```



| Param | Type | Description |
| --- | --- | --- |
| secret | <code>string</code> | Secret used to encrypt the private key |
| *return* | <code>PrivateKey</code> | Private key |

---

<a name="PrivateKeyCiphertext+toString"></a>

### toString

<p>Returns the ciphertext string</p>

```javascript
toString() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="PrivateKeyCiphertext.fromString"></a>

### fromString

<p>Creates a PrivateKeyCiphertext from a string</p>

```javascript
fromString(ciphertext) ► PrivateKeyCiphertext
```



| Param | Type | Description |
| --- | --- | --- |
| ciphertext | <code>string</code> | Ciphertext string |
| *return* | <code>PrivateKeyCiphertext</code> | Private key ciphertext |

---
