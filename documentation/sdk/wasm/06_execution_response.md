---
title: ExecutionResponse
sidebar_label: ExecutionResponse
---

<a name="ExecutionResponse"></a>

## Overview

<p>Webassembly Representation of an Aleo function execution response. This object is returned by the execution of an Aleo function off-chain. It provides methods for retrieving the outputs of the function execution, as well as access to execution details, program keys, and proving/verifying keys.</p>



## Methods

<a name="ExecutionResponse+getOutputs"></a>

### getOutputs

<p>Get the outputs of the executed function</p>

```javascript
getOutputs() ► Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Array</code> | Array of strings representing the outputs of the function |

---

<a name="ExecutionResponse+getExecution"></a>

### getExecution

<p>Returns the execution object if present, null if otherwise</p>

```javascript
getExecution() ► Execution
```



| Param | Type |
| --- | --- |
| *return* | <code>Execution</code> | The execution object if present, null if otherwise |

---

<a name="ExecutionResponse+getKeys"></a>

### getKeys

<p>Returns the program keys if present</p>

```javascript
getKeys() ► KeyPair
```



| Param | Type |
| --- | --- |
| *return* | <code>KeyPair</code> |

---

<a name="ExecutionResponse+getProvingKey"></a>

### getProvingKey

<p>Returns the proving_key if the proving key was cached in the Execution response. Note the proving key is removed from the response object after the first call to this function. Subsequent calls will return null.</p>

```javascript
getProvingKey() ► ProvingKey
```



| Param | Type |
| --- | --- |
| *return* | <code>ProvingKey</code> | The proving key |

---

<a name="ExecutionResponse+getVerifyingKey"></a>

### getVerifyingKey

<p>Returns the verifying_key associated with the program</p>

```javascript
getVerifyingKey() ► VerifyingKey
```



| Param | Type |
| --- | --- |
| *return* | <code>VerifyingKey</code> | The verifying key |

---

<a name="ExecutionResponse+getFunctionId"></a>

### getFunctionId

<p>Returns the function identifier</p>

```javascript
getFunctionId() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="ExecutionResponse+getProgram"></a>

### getProgram

<p>Returns the program</p>

```javascript
getProgram() ► Program
```



| Param | Type |
| --- | --- |
| *return* | <code>Program</code> |

---