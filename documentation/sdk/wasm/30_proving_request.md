---
title: ProvingRequest
sidebar_label: ProvingRequest
---

<a name="ProvingRequest"></a>

## Overview

<p>Represents a proving request to a prover service. The ProvingRequest class encapsulates the authorization for a function execution along with an optional fee authorization, and can be used to request proof generation from a remote proving service.</p>



## Methods

<a name="ProvingRequest.constructor"></a>

### constructor

<p>Creates a new ProvingRequest from a function Authorization and an optional fee Authorization</p>

```javascript
new ProvingRequest(authorization, fee_authorization, broadcast) ► ProvingRequest
```



| Param | Type | Description |
| --- | --- | --- |
| authorization | <code>Authorization</code> | An Authorization for a function |
| fee_authorization | <code>Authorization</code> | The authorization for the `credits.aleo/fee_public` or `credits.aleo/fee_private` function that pays the fee for the execution |
| broadcast | <code>boolean</code> | Flag that indicates whether the remote proving service should attempt to submit the transaction on the caller's behalf |
| *return* | <code>ProvingRequest</code> | ProvingRequest object |

---

<a name="ProvingRequest.fromString"></a>

### fromString

<p>Creates a ProvingRequest from a string representation</p>

```javascript
fromString(request) ► ProvingRequest
```



| Param | Type | Description |
| --- | --- | --- |
| request | <code>string</code> | String representation of the ProvingRequest |
| *return* | <code>ProvingRequest</code> | ProvingRequest object |

---

<a name="ProvingRequest+toString"></a>

### toString

<p>Creates a string representation of the ProvingRequest</p>

```javascript
toString() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="ProvingRequest.fromBytesLe"></a>

### fromBytesLe

<p>Creates a ProvingRequest from a left-endian byte representation</p>

```javascript
fromBytesLe(bytes) ► ProvingRequest
```



| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Uint8Array</code> | Left-endian bytes representing the proving request |
| *return* | <code>ProvingRequest</code> | ProvingRequest object |

---

<a name="ProvingRequest+toBytesLe"></a>

### toBytesLe

<p>Creates a left-endian byte representation of the ProvingRequest</p>

```javascript
toBytesLe() ► Uint8Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Uint8Array</code> |

---

<a name="ProvingRequest+authorization"></a>

### authorization

<p>Get the Authorization of the main function in the ProvingRequest</p>

```javascript
authorization() ► Authorization
```



| Param | Type |
| --- | --- |
| *return* | <code>Authorization</code> |

---

<a name="ProvingRequest+feeAuthorization"></a>

### feeAuthorization

<p>Get the fee Authorization in the ProvingRequest</p>

```javascript
feeAuthorization() ► Authorization | undefined
```



| Param | Type |
| --- | --- |
| *return* | <code>Authorization</code> |

---

<a name="ProvingRequest+broadcast"></a>

### broadcast

<p>Get the broadcast flag set in the ProvingRequest</p>

```javascript
broadcast() ► boolean
```



| Param | Type |
| --- | --- |
| *return* | <code>boolean</code> |

---

<a name="ProvingRequest+equals"></a>

### equals

<p>Check if a ProvingRequest is the same as another ProvingRequest</p>

```javascript
equals(other) ► boolean
```



| Param | Type | Description |
| --- | --- | --- |
| other | <code>ProvingRequest</code> | The other ProvingRequest to compare |
| *return* | <code>boolean</code> | True if the ProvingRequests are equal |

---
