---
title: Authorization
sidebar_label: Authorization
---

<a name="Authorization"></a>

## Overview

<p>Authorization object containing the authorization for a transaction. This class provides methods for creating, manipulating, and querying authorization objects that are used in Aleo transactions to authorize program executions.</p>



## Methods

<a name="Authorization.new"></a>

### new

<p>Create a new authorization from a request object</p>

```javascript
new(request) ► Authorization
```



| Param | Type | Description |
| --- | --- | --- |
| request | <code>ExecutionRequest</code> | The ExecutionRequest to build the authorization from |
| *return* | <code>Authorization</code> |

---

<a name="Authorization+replicate"></a>

### replicate

<p>Returns a new and independent replica of the Authorization</p>

```javascript
replicate() ► Authorization
```



| Param | Type |
| --- | --- |
| *return* | <code>Authorization</code> |

---

<a name="Authorization+toString"></a>

### toString

<p>Returns the string representation of the Authorization</p>

```javascript
toString() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="Authorization.fromString"></a>

### fromString

<p>Reconstructs an Authorization object from its string representation</p>

```javascript
fromString(authorization) ► Authorization
```



| Param | Type | Description |
| --- | --- | --- |
| authorization | <code>String</code> | The string representation of the Authorization |
| *return* | <code>Authorization</code> |

---

<a name="Authorization+toBytesLe"></a>

### toBytesLe

<p>Returns the left-endian byte representation of the Authorization</p>

```javascript
toBytesLe() ► Uint8Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Uint8Array</code> |

---

<a name="Authorization.fromBytesLe"></a>

### fromBytesLe

<p>Creates an authorization object from a left-endian byte representation of an Authorization</p>

```javascript
fromBytesLe(bytes) ► Authorization
```



| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Uint8Array</code> | Left-endian bytes representing the Authorization |
| *return* | <code>Authorization</code> |

---

<a name="Authorization+equals"></a>

### equals

<p>Check if an Authorization object is the same as another</p>

```javascript
equals(other) ► boolean
```



| Param | Type | Description |
| --- | --- | --- |
| other | <code>Authorization</code> | The Authorization object to determine equality with |
| *return* | <code>boolean</code> |

---

<a name="Authorization+len"></a>

### len

<p>Returns the number of Requests in the Authorization</p>

```javascript
len() ► number
```



| Param | Type |
| --- | --- |
| *return* | <code>number</code> |

---

<a name="Authorization+isEmpty"></a>

### isEmpty

<p>Return true if the Authorization is empty</p>

```javascript
isEmpty() ► boolean
```



| Param | Type |
| --- | --- |
| *return* | <code>boolean</code> |

---

<a name="Authorization+isFeePrivate"></a>

### isFeePrivate

<p>Returns true if the Authorization is for credits.aleo/fee_private</p>

```javascript
isFeePrivate() ► boolean
```



| Param | Type |
| --- | --- |
| *return* | <code>boolean</code> |

---

<a name="Authorization+isFeePublic"></a>

### isFeePublic

<p>Returns true if the Authorization is for credits.aleo/fee_public</p>

```javascript
isFeePublic() ► boolean
```



| Param | Type |
| --- | --- |
| *return* | <code>boolean</code> |

---

<a name="Authorization+isSplit"></a>

### isSplit

<p>Returns true if the Authorization is for credits.aleo/split</p>

```javascript
isSplit() ► boolean
```



| Param | Type |
| --- | --- |
| *return* | <code>boolean</code> |

---

<a name="Authorization+insertTransition"></a>

### insertTransition

<p>Insert a transition into the Authorization</p>

```javascript
insertTransition(transition) ► void
```



| Param | Type | Description |
| --- | --- | --- |
| transition | <code>Transition</code> | The transition object to insert into the Authorization |
| *return* | <code>void</code> |

---

<a name="Authorization+transitions"></a>

### transitions

<p>Get the transitions in an Authorization</p>

```javascript
transitions() ► Array.<Transition>
```



| Param | Type |
| --- | --- |
| *return* | <code>Array.&lt;Transition&gt;</code> | Array of transition objects |

---

<a name="Authorization+toExecutionId"></a>

### toExecutionId

<p>Returns the execution ID for the Authorization</p>

```javascript
toExecutionId() ► Field
```



| Param | Type |
| --- | --- |
| *return* | <code>Field</code> | The execution ID for the Authorization, call toString() after this result to get the string representation |

---

<a name="Authorization+functionName"></a>

### functionName

<p>Get the function name</p>

```javascript
functionName() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> | The function name |

---