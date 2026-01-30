---
title: ExecutionRequest
sidebar_label: ExecutionRequest
---

<a name="ExecutionRequest"></a>

## Overview

<p>Represents an execution request for an Aleo program function. The ExecutionRequest class provides methods for creating signed requests that authorize the execution of a specific function with given inputs.</p>



## Methods

<a name="ExecutionRequest+toString"></a>

### toString

<p>Returns the request as a string</p>

```javascript
toString() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="ExecutionRequest.fromString"></a>

### fromString

<p>Builds a request object from a string representation of a request</p>

```javascript
fromString(request) ► ExecutionRequest
```



| Param | Type | Description |
| --- | --- | --- |
| request | <code>string</code> | String representation of the request |
| *return* | <code>ExecutionRequest</code> | ExecutionRequest object |

---

<a name="ExecutionRequest+toBytesLe"></a>

### toBytesLe

<p>Returns the bytes representation of the request</p>

```javascript
toBytesLe() ► Uint8Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Uint8Array</code> |

---

<a name="ExecutionRequest.fromBytesLe"></a>

### fromBytesLe

<p>Creates a request object from a bytes representation of a request</p>

```javascript
fromBytesLe(bytes) ► ExecutionRequest
```



| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Uint8Array</code> | Byte representation of the request |
| *return* | <code>ExecutionRequest</code> | ExecutionRequest object |

---

<a name="ExecutionRequest+signer"></a>

### signer

<p>Returns the request signer</p>

```javascript
signer() ► Address
```



| Param | Type |
| --- | --- |
| *return* | <code>Address</code> |

---

<a name="ExecutionRequest+network_id"></a>

### network_id

<p>Returns the network ID</p>

```javascript
network_id() ► number
```



| Param | Type |
| --- | --- |
| *return* | <code>number</code> |

---

<a name="ExecutionRequest+program_id"></a>

### program_id

<p>Returns the program ID</p>

```javascript
program_id() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="ExecutionRequest+function_name"></a>

### function_name

<p>Returns the function name</p>

```javascript
function_name() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="ExecutionRequest+input_ids"></a>

### input_ids

<p>Returns the input IDs for the transition</p>

```javascript
input_ids() ► Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Array</code> |

---

<a name="ExecutionRequest+inputs"></a>

### inputs

<p>Returns the function inputs as an array of strings</p>

```javascript
inputs() ► Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Array</code> |

---

<a name="ExecutionRequest+signature"></a>

### signature

<p>Returns the signature for the transition</p>

```javascript
signature() ► Signature
```



| Param | Type |
| --- | --- |
| *return* | <code>Signature</code> |

---

<a name="ExecutionRequest+sk_tag"></a>

### sk_tag

<p>Returns the tag secret key `sk_tag`</p>

```javascript
sk_tag() ► Field
```



| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---

<a name="ExecutionRequest+tvk"></a>

### tvk

<p>Returns the transition view key `tvk`</p>

```javascript
tvk() ► Field
```



| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---

<a name="ExecutionRequest+to_tpk"></a>

### to_tpk

<p>Returns the transition public key `tpk`</p>

```javascript
to_tpk() ► Group
```



| Param | Type |
| --- | --- |
| *return* | <code>Group</code> |

---

<a name="ExecutionRequest+tcm"></a>

### tcm

<p>Returns the transition commitment `tcm`</p>

```javascript
tcm() ► Field
```



| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---

<a name="ExecutionRequest+scm"></a>

### scm

<p>Returns the signer commitment `scm`</p>

```javascript
scm() ► Field
```



| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---

<a name="ExecutionRequest.sign"></a>

### sign

<p>Create a new request by signing over a program ID and set of inputs</p>

```javascript
sign(private_key, program_id, function_name, inputs, input_types, root_tvk, program_checksum, is_root) ► ExecutionRequest
```



| Param | Type | Description |
| --- | --- | --- |
| private_key | <code>PrivateKey</code> | The private key of the signer |
| program_id | <code>string</code> | The id of the program to create the signature for |
| function_name | <code>string</code> | The function name to create the signature for |
| inputs | <code>Array</code> | The inputs to the function |
| input_types | <code>Array</code> | The input types of the function |
| root_tvk | <code>Field</code> | The tvk of the function at the top of the call graph (undefined if this is the top-level call) |
| program_checksum | <code>Field</code> | Optional program checksum |
| is_root | <code>boolean</code> | Flag to indicate if this is the top level function in the call graph |
| *return* | <code>ExecutionRequest</code> | The signed execution request |

---

<a name="ExecutionRequest+verify"></a>

### verify

<p>Verify the input types within a request</p>

```javascript
verify(input_types, is_root, program_checksum) ► boolean
```



| Param | Type | Description |
| --- | --- | --- |
| input_types | <code>Array</code> | The input_types within the request |
| is_root | <code>boolean</code> | Flag to indicate whether this request is the first function in the call graph |
| program_checksum | <code>Field</code> | Optional program checksum |
| *return* | <code>boolean</code> | True if the request is valid |

---
