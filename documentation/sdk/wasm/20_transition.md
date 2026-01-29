---
title: Transition
sidebar_label: Transition
---

<a name="Transition"></a>

## Overview

<p>Represents a state transition in the Aleo blockchain. The Transition class provides methods for creating, inspecting, and decrypting transitions. Transitions encapsulate the execution of a single function call within a transaction.</p>



## Methods

<a name="Transition+id"></a>

### id

<p>Get the transition ID</p>

```javascript
id() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="Transition.fromString"></a>

### fromString

<p>Create a transition from a string</p>

```javascript
fromString(transition) ► Transition
```



| Param | Type | Description |
| --- | --- | --- |
| transition | <code>string</code> | String representation of a transition |
| *return* | <code>Transition</code> | Transition object |

---

<a name="Transition.fromBytesLe"></a>

### fromBytesLe

<p>Create a transition from a Uint8Array of left endian bytes</p>

```javascript
fromBytesLe(bytes) ► Transition
```



| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Uint8Array</code> | Uint8Array of left endian bytes encoding a Transition |
| *return* | <code>Transition</code> | Transition object |

---

<a name="Transition+toString"></a>

### toString

<p>Get the transition as a string. If you want to submit this transition to the Aleo Network this function will create the string that should be submitted in the POST data.</p>

```javascript
toString() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="Transition+toBytesLe"></a>

### toBytesLe

<p>Get the transition as a Uint8Array of left endian bytes</p>

```javascript
toBytesLe() ► Uint8Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Uint8Array</code> |

---

<a name="Transition+programId"></a>

### programId

<p>Get the program ID of the transition</p>

```javascript
programId() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="Transition+functionName"></a>

### functionName

<p>Get the function name of the transition</p>

```javascript
functionName() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="Transition+containsCommitment"></a>

### containsCommitment

<p>Returns true if the transition contains the given commitment</p>

```javascript
containsCommitment(commitment) ► boolean
```



| Param | Type | Description |
| --- | --- | --- |
| commitment | <code>Field</code> | The commitment to check for |
| *return* | <code>boolean</code> | True if the transition contains the given commitment |

---

<a name="Transition+containsSerialNumber"></a>

### containsSerialNumber

<p>Check if the transition contains a serial number</p>

```javascript
containsSerialNumber(serial_number) ► boolean
```



| Param | Type | Description |
| --- | --- | --- |
| serial_number | <code>Field</code> | The serial number to check for |
| *return* | <code>boolean</code> | True if the transition contains a serial number, false otherwise |

---

<a name="Transition+findRecord"></a>

### findRecord

<p>Find a record in the transition by the record's commitment</p>

```javascript
findRecord(commitment) ► RecordCiphertext | undefined
```



| Param | Type | Description |
| --- | --- | --- |
| commitment | <code>Field</code> | The commitment to find the record for |
| *return* | <code>RecordCiphertext</code> | The record ciphertext if found, undefined otherwise |

---

<a name="Transition+ownedRecords"></a>

### ownedRecords

<p>Get the record plaintext present in a transition owned by a specific view key</p>

```javascript
ownedRecords(view_key) ► Array
```



| Param | Type | Description |
| --- | --- | --- |
| view_key | <code>ViewKey</code> | The view key of the record owner |
| *return* | <code>Array</code> | Array of record plaintext objects |

---

<a name="Transition+records"></a>

### records

<p>Get the records present in a transition and their commitments</p>

```javascript
records() ► Array
```



| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Array</code> | Array of objects with commitment and record properties |

---

<a name="Transition+inputs"></a>

### inputs

<p>Get the inputs of the transition</p>

```javascript
inputs(convert_to_js) ► Array
```



| Param | Type | Description |
| --- | --- | --- |
| convert_to_js | <code>boolean</code> | If true the inputs will be converted to JS objects, if false the inputs will be in wasm format |
| *return* | <code>Array</code> | Array of inputs |

---

<a name="Transition+outputs"></a>

### outputs

<p>Get the outputs of the transition</p>

```javascript
outputs(convert_to_js) ► Array
```



| Param | Type | Description |
| --- | --- | --- |
| convert_to_js | <code>boolean</code> | If true the outputs will be converted to JS objects, if false the outputs will be in wasm format |
| *return* | <code>Array</code> | Array of outputs |

---

<a name="Transition+tpk"></a>

### tpk

<p>Get the transition public key of the transition</p>

```javascript
tpk() ► Group
```



| Param | Type |
| --- | --- |
| *return* | <code>Group</code> |

---

<a name="Transition+tvk"></a>

### tvk

<p>Get the transition view key of the transition</p>

```javascript
tvk(view_key) ► Field
```



| Param | Type | Description |
| --- | --- | --- |
| view_key | <code>ViewKey</code> | The view key of the transition signer |
| *return* | <code>Field</code> | Transition view key |

---

<a name="Transition+tcm"></a>

### tcm

<p>Get the transition commitment of the transition</p>

```javascript
tcm() ► Field
```



| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---

<a name="Transition+scm"></a>

### scm

<p>Get the transition signer commitment of the transition</p>

```javascript
scm() ► Field
```



| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---

<a name="Transition+decryptTransition"></a>

### decryptTransition

<p>Decrypt the transition using the transition view key</p>

```javascript
decryptTransition(tvk) ► Transition
```



| Param | Type | Description |
| --- | --- | --- |
| tvk | <code>Field</code> | The transition view key |
| *return* | <code>Transition</code> | The transition with public values for inputs and outputs |

---
