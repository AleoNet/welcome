---
title: Metadata
sidebar_label: Metadata
---

<a name="Metadata"></a>

## Overview

<p>Provides metadata for credits.aleo program functions including prover and verifier URLs. The Metadata class contains static methods that return metadata objects for each credits.aleo function, useful for downloading proving keys and verifying keys.</p>

## Properties

Each Metadata object contains the following properties:

| Property | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The function name |
| locator | <code>string</code> | The function locator (program_id/function_name) |
| prover | <code>string</code> | URL to download the proving key |
| verifier | <code>string</code> | The verifier identifier |
| verifyingKey | <code>string</code> | The verifying key identifier |

## Methods

<a name="Metadata.baseUrl"></a>

### baseUrl

<p>Get the base URL for downloading proving keys</p>

```javascript
baseUrl() ► string
```

| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="Metadata.bond_public"></a>

### bond_public

<p>Get metadata for the bond_public function</p>

```javascript
bond_public() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---

<a name="Metadata.bond_validator"></a>

### bond_validator

<p>Get metadata for the bond_validator function</p>

```javascript
bond_validator() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---

<a name="Metadata.claim_unbond_public"></a>

### claim_unbond_public

<p>Get metadata for the claim_unbond_public function</p>

```javascript
claim_unbond_public() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---

<a name="Metadata.fee_private"></a>

### fee_private

<p>Get metadata for the fee_private function</p>

```javascript
fee_private() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---

<a name="Metadata.fee_public"></a>

### fee_public

<p>Get metadata for the fee_public function</p>

```javascript
fee_public() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---

<a name="Metadata.inclusion"></a>

### inclusion

<p>Get metadata for the inclusion proof function</p>

```javascript
inclusion() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---

<a name="Metadata.join"></a>

### join

<p>Get metadata for the join function</p>

```javascript
join() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---

<a name="Metadata.set_validator_state"></a>

### set_validator_state

<p>Get metadata for the set_validator_state function</p>

```javascript
set_validator_state() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---

<a name="Metadata.split"></a>

### split

<p>Get metadata for the split function</p>

```javascript
split() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---

<a name="Metadata.transfer_private"></a>

### transfer_private

<p>Get metadata for the transfer_private function</p>

```javascript
transfer_private() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---

<a name="Metadata.transfer_private_to_public"></a>

### transfer_private_to_public

<p>Get metadata for the transfer_private_to_public function</p>

```javascript
transfer_private_to_public() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---

<a name="Metadata.transfer_public"></a>

### transfer_public

<p>Get metadata for the transfer_public function</p>

```javascript
transfer_public() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---

<a name="Metadata.transfer_public_as_signer"></a>

### transfer_public_as_signer

<p>Get metadata for the transfer_public_as_signer function</p>

```javascript
transfer_public_as_signer() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---

<a name="Metadata.transfer_public_to_private"></a>

### transfer_public_to_private

<p>Get metadata for the transfer_public_to_private function</p>

```javascript
transfer_public_to_private() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---

<a name="Metadata.unbond_public"></a>

### unbond_public

<p>Get metadata for the unbond_public function</p>

```javascript
unbond_public() ► Metadata
```

| Param | Type |
| --- | --- |
| *return* | <code>Metadata</code> |

---
