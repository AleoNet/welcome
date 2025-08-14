---
title: Execution
sidebar_label: Execution
---

<a name="Execution"></a>

## Overview

<p>Execution of an Aleo program. This class represents the execution state and proof of a program run on the Aleo network, providing access to execution details like global state root, proof, and transitions.</p>



## Methods

<a name="Execution+toString"></a>

### toString

<p>Returns the string representation of the execution</p>

```javascript
toString() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> | The string representation of the execution |

---

<a name="Execution.fromString"></a>

### fromString

<p>Creates an execution object from a string representation of an execution</p>

```javascript
fromString(execution) ► Execution
```



| Param | Type |
| --- | --- |
| execution | <code>string</code> |
| *return* | <code>Execution</code> | The wasm representation of an execution object |

---

<a name="Execution+globalStateRoot"></a>

### globalStateRoot

<p>Returns the global state root of the execution</p>

```javascript
globalStateRoot() ► Execution
```



| Param | Type |
| --- | --- |
| *return* | <code>Execution</code> | The global state root used in the execution |

---

<a name="Execution+proof"></a>

### proof

<p>Returns the proof of the execution</p>

```javascript
proof() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> | The execution proof |

---

<a name="Execution+transitions"></a>

### transitions

<p>Returns the transitions present in the execution</p>

```javascript
transitions() ► 
```



| Param | Type |
| --- | --- |
| *return* | <code>undefined</code> | Array&lt;Transition&gt; the array of transitions present in the execution |

---