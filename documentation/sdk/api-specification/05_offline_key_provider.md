---
id: offline_key_provider
title: Offline Key Provider
sidebar_label: Offline Key Provider
---

## Overview

A key provider meant for building transactions offline on devices such as hardware wallets. This key provider is not
able to contact the internet for key material and instead relies on the user to insert Aleo function proving &amp;
verifying keys from local storage prior to usage.

**Kind**: global class

* OfflineKeyProvider
    * _instance_
        * [.bondPublicKeys()](#bondpublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.bondValidatorKeys()](#bondvalidatorkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.cacheKeys(keyId, keys)](#cachekeys)
        * [.claimUnbondPublicKeys()](#claimunbondpublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.functionKeys(params)](#functionkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.verifyCreditsKeys()](#verifycreditskeys) ⇒ <code>boolean</code>
        * [.feePrivateKeys()](#feeprivatekeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.feePublicKeys()](#feepublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.joinKeys()](#joinkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.splitKeys()](#splitkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.transferKeys(visibility)](#transferkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.unBondPublicKeys()](#unbondpublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.insertBondPublicKeys(provingKey)](#insertbondpublickeys)
        * [.insertClaimUnbondPublicKeys(provingKey)](#insertclaimunbondpublickeys)
        * [.insertFeePrivateKeys(provingKey)](#insertfeeprivatekeys)
        * [.insertFeePublicKeys(provingKey)](#insertfeepublickeys)
        * [.insertJoinKeys(provingKey)](#insertjoinkeys)
        * [.insertSetValidatorStateKeys(provingKey)](#insertsetvalidatorstatekeys)
        * [.insertSplitKeys(provingKey)](#insertsplitkeys)
        * [.insertTransferPrivateKeys(provingKey)](#inserttransferprivatekeys)
        * [.insertTransferPrivateToPublicKeys(provingKey)](#inserttransferprivatetopublickeys)
        * [.insertTransferPublicKeys(provingKey)](#inserttransferpublickeys)
        * [.insertTransferPublicToPrivateKeys(provingKey)](#inserttransferpublictoprivatekeys)


## Example

```javascript
// Create an offline program manager
const programManager = new ProgramManager();

// Create a temporary account for the execution of the program
const account = new Account();
programManager.setAccount(account);

// Create the proving keys from the key bytes on the offline machine
console.log("Creating proving keys from local key files");
const program = "program hello_hello.aleo; function hello: input r0 as u32.public; input r1 as u32.private; add r0 r1 into r2; output r2 as u32.private;";
const myFunctionProver = await getLocalKey("/path/to/my/function/hello_hello.prover");
const myFunctionVerifier = await getLocalKey("/path/to/my/function/hello_hello.verifier");
const feePublicProvingKeyBytes = await getLocalKey("/path/to/credits.aleo/feePublic.prover");

myFunctionProvingKey = ProvingKey.fromBytes(myFunctionProver);
myFunctionVerifyingKey = VerifyingKey.fromBytes(myFunctionVerifier);
const feePublicProvingKey = ProvingKey.fromBytes(feePublicKeyBytes);

// Create an offline key provider
console.log("Creating offline key provider");
const offlineKeyProvider = new OfflineKeyProvider();

// Cache the keys
// Cache the proving and verifying keys for the custom hello function
OfflineKeyProvider.cacheKeys("hello_hello.aleo/hello", myFunctionProvingKey, myFunctionVerifyingKey);

// Cache the proving key for the fee_public function (the verifying key is automatically cached)
OfflineKeyProvider.insertFeePublicKey(feePublicProvingKey);

// Create an offline query using the latest state root in order to create the inclusion proof
const offlineQuery = new OfflineQuery("latestStateRoot");

// Insert the key provider into the program manager
programManager.setKeyProvider(offlineKeyProvider);

// Create the offline search params
const offlineSearchParams = new OfflineSearchParams("hello_hello.aleo/hello");

// Create the offline transaction
const offlineExecuteTx = <Transaction>await this.buildExecutionTransaction("hello_hello.aleo", "hello", 1, false, ["5u32", "5u32"], undefined, offlineSearchParams, undefined, undefined, undefined, undefined, offlineQuery, program);

// Broadcast the transaction later on a machine with internet access
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const txId = await networkClient.broadcastTransaction(offlineExecuteTx);
```

## Methods

### bondPublicKeys

Get bond_public function keys from the credits.aleo program. The keys must be cached prior to calling this
method for it to work.

```javascript
bondPublicKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the bond_public function*

---

### bondValidatorKeys

Get bond_validator function keys from the credits.aleo program. The keys must be cached prior to calling this
method for it to work.

```javascript
bondValidatorKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the bond_public function*

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

### claimUnbondPublicKeys

Get unbond_public function keys from the credits.aleo program. The keys must be cached prior to calling this
method for it to work.

```javascript
claimUnbondPublicKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the unbond_public function*

---

### functionKeys

Get arbitrary function key from the offline key provider cache.

```javascript
functionKeys(params)
```

Parameters | Type | Description
--- | --- | ---
__params__ | `KeySearchParams` | *Optional search parameters for the key provider*
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the specified program*

#### Examples

```javascript
/// First cache the keys from local offline resources
const offlineKeyProvider = new OfflineKeyProvider();
const myFunctionVerifyingKey = VerifyingKey.fromString("verifier...");
const myFunctionProvingKeyBytes = await readBinaryFile('./resources/myfunction.prover');
const myFunctionProvingKey = ProvingKey.fromBytes(myFunctionProvingKeyBytes);

/// Cache the keys for future use with a memorable locator
offlineKeyProvider.cacheKeys("myprogram.aleo/myfunction", [myFunctionProvingKey, myFunctionVerifyingKey]);

/// When they're needed, retrieve the keys from the cache

/// First create a search parameter object with the same locator used to cache the keys
const keyParams = new OfflineSearchParams("myprogram.aleo/myfunction");

/// Then retrieve the keys
const [myFunctionProver, myFunctionVerifier] = await offlineKeyProvider.functionKeys(keyParams);
```

---

### verifyCreditsKeys

Determines if the keys for a given credits function match the expected keys.

```javascript
verifyCreditsKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `boolean` | *Whether the keys match the expected keys*

---

### feePrivateKeys

Get fee_private function keys from the credits.aleo program. The keys must be cached prior to calling this
method for it to work.

```javascript
feePrivateKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the join function*

---

### feePublicKeys

Get fee_public function keys from the credits.aleo program. The keys must be cached prior to calling this
method for it to work.

```javascript
feePublicKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the join function*

---

### joinKeys

Get join function keys from the credits.aleo program. The keys must be cached prior to calling this
method for it to work.

```javascript
joinKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the join function*

---

### splitKeys

Get split function keys from the credits.aleo program. The keys must be cached prior to calling this
method for it to work.

```javascript
splitKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the join function*

---

### transferKeys

Get keys for a variant of the transfer function from the credits.aleo program.

```javascript
transferKeys(visibility)
```

Parameters | Type | Description
--- | --- | ---
__visibility__ | `string` | *Visibility of the transfer function (private, public, privateToPublic, publicToPrivate)*
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the specified transfer function*

#### Examples

```javascript
// Create a new OfflineKeyProvider
const offlineKeyProvider = new OfflineKeyProvider();

// Cache the keys for future use with the official locator
const transferPublicProvingKeyBytes = await readBinaryFile('./resources/transfer_public.prover.a74565e');
const transferPublicProvingKey = ProvingKey.fromBytes(transferPublicProvingKeyBytes);

// Cache the transfer_public keys for future use with the OfflinKeyProvider's convenience method for
// transfer_public (the verifying key will be cached automatically)
offlineKeyProvider.insertTransferPublicKeys(transferPublicProvingKey);

/// When they're needed, retrieve the keys from the cache
const [transferPublicProvingKey, transferPublicVerifyingKey] = await keyProvider.transferKeys("public");
```

---

### unBondPublicKeys

Get unbond_public function keys from the credits.aleo program

```javascript
unBondPublicKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the join function*

---

### insertBondPublicKeys

Insert the proving and verifying keys for the bond_public function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for bond_public before inserting them into the cache.

```javascript
insertBondPublicKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `undefined` | **

---

### insertClaimUnbondPublicKeys

Insert the proving and verifying keys for the claim_unbond_public function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for claim_unbond_public before inserting them into the cache.

```javascript
insertClaimUnbondPublicKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `undefined` | **

---

### insertFeePrivateKeys

Insert the proving and verifying keys for the fee_private function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for fee_private before inserting them into the cache.

```javascript
insertFeePrivateKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `undefined` | **

---

### insertFeePublicKeys

Insert the proving and verifying keys for the fee_public function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for fee_public before inserting them into the cache.

```javascript
insertFeePublicKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `undefined` | **

---

### insertJoinKeys

Insert the proving and verifying keys for the join function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for join before inserting them into the cache.

```javascript
insertJoinKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `undefined` | **

---

### insertSetValidatorStateKeys

Insert the proving and verifying keys for the set_validator_state function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for set_validator_state before inserting them into the cache.

```javascript
insertSetValidatorStateKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `undefined` | **

---

### insertSplitKeys

Insert the proving and verifying keys for the split function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for split before inserting them into the cache.

```javascript
insertSplitKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `undefined` | **

---

### insertTransferPrivateKeys

Insert the proving and verifying keys for the transfer_private function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for transfer_private before inserting them into the cache.

```javascript
insertTransferPrivateKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `undefined` | **

---

### insertTransferPrivateToPublicKeys

Insert the proving and verifying keys for the transfer_private_to_public function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for transfer_private_to_public before inserting them into the cache.

```javascript
insertTransferPrivateToPublicKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `undefined` | **

---

### insertTransferPublicKeys

Insert the proving and verifying keys for the transfer_public function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for transfer_public before inserting them into the cache.

```javascript
insertTransferPublicKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `undefined` | **

---

### insertTransferPublicToPrivateKeys

Insert the proving and verifying keys for the transfer_public_to_private function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for transfer_public_to_private before inserting them into the cache.

```javascript
insertTransferPublicToPrivateKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `undefined` | **

