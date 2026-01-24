---
id: function_key_provider
title: Function Key Provider
sidebar_label: Function Key Provider
---

## Overview

This module provides classes and interfaces for managing Aleo program proving and verifying keys.

**Kind**: global module

* AleoKeyProviderParams
    * _constructor_
        * [new AleoKeyProviderParams(params)](#new_AleoKeyProviderParams_new)

* FunctionKeyProvider (Interface)
    * _interface methods_
        * [.bondPublicKeys()](#bondpublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.bondValidatorKeys()](#bondvalidatorkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.cacheKeys(keyId, keys)](#cachekeys)
        * [.claimUnbondPublicKeys()](#claimunbondpublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.functionKeys(params)](#functionkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.feePrivateKeys()](#feeprivatekeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.feePublicKeys()](#feepublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.inclusionKeys()](#inclusionkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.joinKeys()](#joinkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.splitKeys()](#splitkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.transferKeys(visibility)](#transferkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.unBondPublicKeys()](#unbondpublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>

* AleoKeyProvider
    * _constructor_
        * [new AleoKeyProvider()](#new_AleoKeyProvider_new)
    * _instance_
        * [.useCache(useCache)](#usecache)
        * [.clearCache()](#clearcache)
        * [.cacheKeys(keyId, keys)](#cachekeys)
        * [.containsKeys(keyId)](#containskeys) ⇒ <code>boolean</code>
        * [.deleteKeys(keyId)](#deletekeys) ⇒ <code>boolean</code>
        * [.getKeys(keyId)](#getkeys) ⇒ <code>FunctionKeyPair</code>
        * [.functionKeys(params)](#functionkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.fetchRemoteKeys(proverUrl, verifierUrl, cacheKey)](#fetchremotekeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.fetchProvingKey(proverUrl, cacheKey)](#fetchprovingkey) ⇒ <code>Promise.&lt;ProvingKey&gt;</code>
        * [.bondPublicKeys()](#bondpublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.bondValidatorKeys()](#bondvalidatorkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.claimUnbondPublicKeys()](#claimunbondpublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.transferKeys(visibility)](#transferkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.transferPublicKeys()](#transferpublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.inclusionKeys()](#inclusionkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.joinKeys()](#joinkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.splitKeys()](#splitkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.feePrivateKeys()](#feeprivatekeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.feePublicKeys()](#feepublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.getVerifyingKey(verifierUri)](#getverifyingkey) ⇒ <code>Promise.&lt;VerifyingKey&gt;</code>
        * [.unBondPublicKeys()](#unbondpublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>

---

## Class `AleoKeyProviderParams`

AleoKeyProviderParams search parameter for the AleoKeyProvider. It allows for the specification of a proverUri and
verifierUri to fetch keys via HTTP from a remote resource as well as a unique cacheKey to store the keys in memory.

<a name="new_AleoKeyProviderParams_new"></a>

### Constructor

<p>Create a new AleoKeyProviderParams object which implements the KeySearchParams interface. Users can optionally
specify a url for the proverUri &amp; verifierUri to fetch keys via HTTP from a remote resource as well as a unique
cacheKey to store the keys in memory for future use. If no proverUri or verifierUri is specified, a cacheKey must
be provided.</p>

```javascript
new AleoKeyProviderParams(params)
```

| Param | Type | Description |
| --- | --- | --- |
| params | <code>AleoKeyProviderInitParams</code> | Optional search parameters |

#### Interface

```typescript
interface AleoKeyProviderInitParams {
    proverUri?: string;
    verifierUri?: string;
    cacheKey?: string;
}
```

| Property | Type | Description |
| --- | --- | --- |
| proverUri | <code>string</code> | Optional URL to fetch the proving key |
| verifierUri | <code>string</code> | Optional URL to fetch the verifying key |
| cacheKey | <code>string</code> | Optional key to store the keys in the cache |

**Example**  
```js
import { AleoKeyProviderParams } from "@provablehq/sdk/mainnet.js";

// Create search params with remote URLs
const remoteParams = new AleoKeyProviderParams({
    proverUri: "https://example.com/myprogram.prover",
    verifierUri: "https://example.com/myprogram.verifier",
    cacheKey: "myprogram.aleo/myfunction"
});

// Create search params with only a cache key
const cacheParams = new AleoKeyProviderParams({
    cacheKey: "myprogram.aleo/myfunction"
});
```

---

## Class `AleoKeyProvider`

AleoKeyProvider class. Implements the KeyProvider interface. Enables the retrieval of Aleo program proving and
verifying keys for the credits.aleo program over http from official Aleo sources and storing and retrieving function
keys from a local memory cache.

<a name="new_AleoKeyProvider_new"></a>

### Constructor

<p>Create a new AleoKeyProvider instance for managing proving and verifying keys.</p>

```javascript
new AleoKeyProvider()
```

**Example**  
```js
import { AleoKeyProvider } from "@provablehq/sdk/mainnet.js";

// Create a new AleoKeyProvider
const keyProvider = new AleoKeyProvider();

// Enable caching for better performance
keyProvider.useCache(true);
```

---

## Methods

### useCache



Use local memory to store keys

```javascript
useCache(useCache)
```

Parameters | Type | Description
--- | --- | ---
__useCache__ | `boolean` | *whether to store keys in local memory*

---

### clearCache

Clear the key cache

```javascript
clearCache()
```

---

### cacheKeys

Cache a set of keys. This will overwrite any existing keys with the same keyId. The user can check if a keyId
exists in the cache using the containsKeys method prior to calling this method if overwriting is not desired.

```javascript
cacheKeys(keyId, keys)
```

Parameters | Type | Description
--- | --- | ---
__keyId__ | `string` | *access key for the cache*
__keys__ | `FunctionKeyPair` | *keys to cache*

---

### containsKeys

Determine if a keyId exists in the cache

```javascript
containsKeys(keyId)
```

Parameters | Type | Description
--- | --- | ---
__keyId__ | `string` | *keyId of a proving and verifying key pair*
__*return*__ | `boolean` | *true if the keyId exists in the cache, false otherwise*

---

### deleteKeys

Delete a set of keys from the cache

```javascript
deleteKeys(keyId)
```

Parameters | Type | Description
--- | --- | ---
__keyId__ | `string` | *keyId of a proving and verifying key pair to delete from memory*
__*return*__ | `boolean` | *true if the keyId exists in the cache and was deleted, false if the key did not exist*

---

### getKeys

Get a set of keys from the cache

```javascript
getKeys(keyId)
```

Parameters | Type | Description
--- | --- | ---
__keyId__ | `string` | *keyId of a proving and verifying key pair*
__*return*__ | `FunctionKeyPair` | *Proving and verifying keys for the specified program*

---

### functionKeys

Get arbitrary function keys from a provider

```javascript
functionKeys(params)
```

Parameters | Type | Description
--- | --- | ---
__params__ | `KeySearchParams` | *parameters for the key search in form of: \{proverUri: string, verifierUri: string, cacheKey: string\}*
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the specified program*

#### Examples

```javascript
// Create a new object which implements the KeyProvider interface
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);

// Initialize a program manager with the key provider to automatically fetch keys for value transfers
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
programManager.transfer(1, "aleo166q6ww6688cug7qxwe7nhctjpymydwzy2h7rscfmatqmfwnjvggqcad0at", "public", 0.5);

// Keys can also be fetched manually using the key provider
const keySearchParams = { "cacheKey": "myProgram:myFunction" };
const [transferPrivateProvingKey, transferPrivateVerifyingKey] = await keyProvider.functionKeys(keySearchParams);
```

---

### fetchRemoteKeys

Returns the proving and verifying keys for a specified program from a specified url.

```javascript
fetchRemoteKeys(proverUrl, verifierUrl, cacheKey)
```

Parameters | Type | Description
--- | --- | ---
__proverUrl__ | `string` | *Url of the proving key*
__verifierUrl__ | `string` | *Url of the verifying key*
__cacheKey__ | `string` | *Key to store the keys in the cache*
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the specified program*

#### Examples

```javascript
// Create a new AleoKeyProvider object
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);

// Initialize a program manager with the key provider to automatically fetch keys for value transfers
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
programManager.transfer(1, "aleo166q6ww6688cug7qxwe7nhctjpymydwzy2h7rscfmatqmfwnjvggqcad0at", "public", 0.5);

// Keys can also be fetched manually
const [transferPrivateProvingKey, transferPrivateVerifyingKey] = await keyProvider.fetchRemoteKeys(
    CREDITS_PROGRAM_KEYS.transfer_private.prover,
    CREDITS_PROGRAM_KEYS.transfer_private.verifier,
);
```

---

### fetchProvingKey

Fetches the proving key from a remote source.

```javascript
fetchProvingKey(proverUrl, cacheKey)
```

Parameters | Type | Description
--- | --- | ---
__proverUrl__ | `string` | *Url of the proving key*
__cacheKey__ | `string` | *Optional key to store the key in the cache*
__*return*__ | `Promise.<ProvingKey>` | *Proving key for the specified program*

---

### bondPublicKeys

Returns the proving and verifying keys for the bond_public function in the credits.aleo program

```javascript
bondPublicKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the bond_public function*

---

### bondValidatorKeys

Returns the proving and verifying keys for the bond_validator function in the credits.aleo program

```javascript
bondValidatorKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the bond_validator function*

---

### claimUnbondPublicKeys

Returns the proving and verifying keys for the claim_unbond_public function in the credits.aleo program

```javascript
claimUnbondPublicKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the claim_unbond_public function*

---

### transferKeys

Returns the proving and verifying keys for the transfer functions in the credits.aleo program

```javascript
transferKeys(visibility)
```

Parameters | Type | Description
--- | --- | ---
__visibility__ | `string` | *Visibility of the transfer function*
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the transfer functions*

#### Examples

```javascript
// Create a new AleoKeyProvider
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);

// Initialize a program manager with the key provider to automatically fetch keys for value transfers
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
programManager.transfer(1, "aleo166q6ww6688cug7qxwe7nhctjpymydwzy2h7rscfmatqmfwnjvggqcad0at", "public", 0.5);

// Keys can also be fetched manually
const [transferPublicProvingKey, transferPublicVerifyingKey] = await keyProvider.transferKeys("public");
```

---

### joinKeys

Returns the proving and verifying keys for the join function in the credits.aleo program

```javascript
joinKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the join function*

---

### splitKeys

Returns the proving and verifying keys for the split function in the credits.aleo program

```javascript
splitKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the split function*

---

### transferPublicKeys

Returns the proving and verifying keys for the transfer_public function in the credits.aleo program

```javascript
transferPublicKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the transfer_public function*

---

### inclusionKeys

Returns the proving and verifying keys for the inclusion proof.

```javascript
inclusionKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the inclusion proof*

---

### feePrivateKeys

Returns the proving and verifying keys for the fee_private function in the credits.aleo program

```javascript
feePrivateKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the fee function*

---

### feePublicKeys

Returns the proving and verifying keys for the fee_public function in the credits.aleo program

```javascript
feePublicKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the fee function*

---

### getVerifyingKey

Gets a verifying key. If the verifying key is for a credits.aleo function, get it from the wasm cache otherwise
attempt to fetch it from the network.

```javascript
getVerifyingKey(verifierUri)
```

Parameters | Type | Description
--- | --- | ---
__verifierUri__ | `string` | *The URI of the verifying key to fetch*
__*return*__ | `Promise.<VerifyingKey>` | *Verifying key for the function*

---

### unBondPublicKeys

Returns the proving and verifying keys for the unbond_public function in the credits.aleo program

```javascript
unBondPublicKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the unbond_public function*
