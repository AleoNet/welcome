---
title: OfflineQuery
sidebar_label: OfflineQuery
---

<a name="OfflineQuery"></a>

## Overview

<p>An offline query object used to insert the global state root and state paths needed to create a valid inclusion proof offline. This is useful for creating proofs without requiring a live connection to the network.</p>



## Constructors

### OfflineQuery

<p>Creates a new offline query object. The state root is required to be passed in as a string</p>

```javascript
OfflineQuery(block_height, state_root)
```

| Param | Type | Description |
| --- | --- | --- |
| block_height | <code>u32</code> | The block height |
| state_root | <code>string</code> | The state root of the current network |
| *return* | <code>OfflineQuery</code> | The newly created offline query object |

## Methods

<a name="OfflineQuery+addBlockHeight"></a>

### addBlockHeight

<p>Add a new block height to the offline query object</p>

```javascript
addBlockHeight(block_height) ► void
```



| Param | Type | Description |
| --- | --- | --- |
| block_height | <code>u32</code> | The block height to add |
| *return* | <code>void</code> |

---

<a name="OfflineQuery+addStatePath"></a>

### addStatePath

<p>Add a new state path to the offline query object</p>

```javascript
addStatePath(commitment:, state_path:) ► void
```



| Param | Type | Description |
| --- | --- | --- |
| commitment: | <code>string</code> | The commitment corresponding to a record input |
| state_path: | <code>string</code> | The state path corresponding to the commitment |
| *return* | <code>void</code> |

---

<a name="OfflineQuery+toString"></a>

### toString

<p>Get a json string representation of the offline query object</p>

```javascript
toString() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> | JSON string representation of the offline query object |

---

<a name="OfflineQuery.fromString"></a>

### fromString

<p>Create an offline query object from a json string representation</p>

```javascript
fromString(JSON) ► OfflineQuery
```



| Param | Type | Description |
| --- | --- | --- |
| JSON | <code>string</code> | string representation of the offline query object |
| *return* | <code>OfflineQuery</code> |

---