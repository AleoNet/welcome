---
title: GraphKey
sidebar_label: GraphKey
---

<a name="GraphKey"></a>

## Overview

<p>Represents a graph key for an Aleo account. The GraphKey class provides methods for creating graph keys from view keys. Graph keys are used to determine ownership of records through the sk_tag component.</p>



## Methods

<a name="GraphKey.from_view_key"></a>

### from_view_key

<p>Create a new graph key from a view key</p>

```javascript
from_view_key(view_key) ► GraphKey
```



| Param | Type | Description |
| --- | --- | --- |
| view_key | <code>ViewKey</code> | View key |
| *return* | <code>GraphKey</code> | Graph key |

---

<a name="GraphKey.from_string"></a>

### from_string

<p>Create a new graph key from a string representation of a graph key</p>

```javascript
from_string(graph_key) ► GraphKey
```



| Param | Type | Description |
| --- | --- | --- |
| graph_key | <code>string</code> | String representation of a graph key |
| *return* | <code>GraphKey</code> | Graph key |

---

<a name="GraphKey+to_string"></a>

### to_string

<p>Get a string representation of a graph key</p>

```javascript
to_string() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="GraphKey+sk_tag"></a>

### sk_tag

<p>Get the sk_tag of the graph key. Used to determine ownership of records.</p>

```javascript
sk_tag() ► Field
```



| Param | Type |
| --- | --- |
| *return* | <code>Field</code> |

---
