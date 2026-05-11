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

* OfflineSearchParams
    * _constructor_
        * [new OfflineSearchParams(cacheKey, verifyCreditsKeys)](#new_OfflineSearchParams_new)
    * _static_
        * [.bondPublicKeyParams()](#bondpublickeyparams) ⇒ <code>OfflineSearchParams</code>
        * [.bondValidatorKeyParams()](#bondvalidatorkeyparams) ⇒ <code>OfflineSearchParams</code>
        * [.claimUnbondPublicKeyParams()](#claimunbondpublickeyparams) ⇒ <code>OfflineSearchParams</code>
        * [.feePrivateKeyParams()](#feeprivatekeyparams) ⇒ <code>OfflineSearchParams</code>
        * [.feePublicKeyParams()](#feepublickeyparams) ⇒ <code>OfflineSearchParams</code>
        * [.inclusionKeyParams()](#inclusionkeyparams) ⇒ <code>OfflineSearchParams</code>
        * [.joinKeyParams()](#joinkeyparams) ⇒ <code>OfflineSearchParams</code>
        * [.setValidatorStateKeyParams()](#setvalidatorstatekeyparams) ⇒ <code>OfflineSearchParams</code>
        * [.splitKeyParams()](#splitkeyparams) ⇒ <code>OfflineSearchParams</code>
        * [.transferPrivateKeyParams()](#transferprivatekeyparams) ⇒ <code>OfflineSearchParams</code>
        * [.transferPrivateToPublicKeyParams()](#transferprivatetopublickeyparams) ⇒ <code>OfflineSearchParams</code>
        * [.transferPublicKeyParams()](#transferpublickeyparams) ⇒ <code>OfflineSearchParams</code>
        * [.transferPublicAsSignerKeyParams()](#transferpublicassignerkeyparams) ⇒ <code>OfflineSearchParams</code>
        * [.transferPublicToPrivateKeyParams()](#transferpublictoprivatekeyparams) ⇒ <code>OfflineSearchParams</code>
        * [.unbondPublicKeyParams()](#unbondpublickeyparams) ⇒ <code>OfflineSearchParams</code>

* OfflineKeyProvider
    * _constructor_
        * [new OfflineKeyProvider()](#new_OfflineKeyProvider_new)
    * _instance_
        * [.bondPublicKeys()](#bondpublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.bondValidatorKeys()](#bondvalidatorkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.cacheKeys(keyId, keys)](#cachekeys)
        * [.claimUnbondPublicKeys()](#claimunbondpublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.functionKeys(params)](#functionkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.verifyCreditsKeys(locator, provingKey, verifyingKey)](#verifycreditskeys) ⇒ <code>boolean</code>
        * [.feePrivateKeys()](#feeprivatekeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.feePublicKeys()](#feepublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.inclusionKeys()](#inclusionkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.joinKeys()](#joinkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.splitKeys()](#splitkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.transferKeys(visibility)](#transferkeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.unBondPublicKeys()](#unbondpublickeys) ⇒ <code>Promise.&lt;FunctionKeyPair&gt;</code>
        * [.insertBondPublicKeys(provingKey)](#insertbondpublickeys)
        * [.insertClaimUnbondPublicKeys(provingKey)](#insertclaimunbondpublickeys)
        * [.insertFeePrivateKeys(provingKey)](#insertfeeprivatekeys)
        * [.insertFeePublicKeys(provingKey)](#insertfeepublickeys)
        * [.insertInclusionKeys(provingKey)](#insertinclusionkeys)
        * [.insertJoinKeys(provingKey)](#insertjoinkeys)
        * [.insertSetValidatorStateKeys(provingKey)](#insertsetvalidatorstatekeys)
        * [.insertSplitKeys(provingKey)](#insertsplitkeys)
        * [.insertTransferPrivateKeys(provingKey)](#inserttransferprivatekeys)
        * [.insertTransferPrivateToPublicKeys(provingKey)](#inserttransferprivatetopublickeys)
        * [.insertTransferPublicKeys(provingKey)](#inserttransferpublickeys)
        * [.insertTransferPublicToPrivateKeys(provingKey)](#inserttransferpublictoprivatekeys)
        * [.insertUnbondPublicKeys(provingKey)](#insertunbondpublickeys)


## Class `OfflineSearchParams`

Search parameters for the offline key provider. This class implements the KeySearchParams interface and includes
a convenience method for creating a new instance of this class for each function of the credits.aleo program.

<a name="new_OfflineSearchParams_new"></a>

### Constructor

<p>Create a new OfflineSearchParams instance for searching keys in the offline key provider cache.</p>

```javascript
new OfflineSearchParams(cacheKey, verifyCreditsKeys)
```

| Param | Type | Description |
| --- | --- | --- |
| cacheKey | <code>string</code> | Key used to store the local function proving & verifying keys. This should be stored under the naming convention "programName/functionName" (i.e. "myprogram.aleo/myfunction") |
| verifyCreditsKeys | <code>boolean</code> | Optional. Whether to verify the keys against the credits.aleo program, defaults to false, but should be set to true if using keys from the credits.aleo program |

**Example**
```javascript
// If storing a key for a custom program function
const offlineSearchParams = new OfflineSearchParams("myprogram.aleo/myfunction");

// If storing a key for a credits.aleo program function
const bondPublicKeyParams = OfflineSearchParams.bondPublicKeyParams();
```

### Static Methods

Each static factory method creates a pre-configured `OfflineSearchParams` instance for a specific `credits.aleo` function. All methods take no parameters and return an `OfflineSearchParams` object ready to use with the offline key provider cache.

| Method | credits.aleo function |
| --- | --- |
| `OfflineSearchParams.bondPublicKeyParams()` | `bond_public` |
| `OfflineSearchParams.bondValidatorKeyParams()` | `bond_validator` |
| `OfflineSearchParams.claimUnbondPublicKeyParams()` | `claim_unbond_public` |
| `OfflineSearchParams.feePrivateKeyParams()` | `fee_private` |
| `OfflineSearchParams.feePublicKeyParams()` | `fee_public` |
| `OfflineSearchParams.inclusionKeyParams()` | inclusion prover |
| `OfflineSearchParams.joinKeyParams()` | `join` |
| `OfflineSearchParams.setValidatorStateKeyParams()` | `set_validator_state` |
| `OfflineSearchParams.splitKeyParams()` | `split` |
| `OfflineSearchParams.transferPrivateKeyParams()` | `transfer_private` |
| `OfflineSearchParams.transferPrivateToPublicKeyParams()` | `transfer_private_to_public` |
| `OfflineSearchParams.transferPublicKeyParams()` | `transfer_public` |
| `OfflineSearchParams.transferPublicAsSignerKeyParams()` | `transfer_public_as_signer` |
| `OfflineSearchParams.transferPublicToPrivateKeyParams()` | `transfer_public_to_private` |
| `OfflineSearchParams.unbondPublicKeyParams()` | `unbond_public` |

---

## Class `OfflineKeyProvider`

<a name="new_OfflineKeyProvider_new"></a>

### Constructor

<p>Create a new OfflineKeyProvider instance for managing keys offline on devices such as hardware wallets.</p>

```javascript
new OfflineKeyProvider()
```

**Example**  
```js
import { OfflineKeyProvider } from "@provablehq/sdk/mainnet.js";

// Create an offline key provider
const offlineKeyProvider = new OfflineKeyProvider();
```

---

## OfflineKeyProvider Example

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

const myFunctionProvingKey = ProvingKey.fromBytes(myFunctionProver);
const myFunctionVerifyingKey = VerifyingKey.fromBytes(myFunctionVerifier);
const feePublicProvingKey = ProvingKey.fromBytes(feePublicProvingKeyBytes);

// Create an offline key provider
console.log("Creating offline key provider");
const offlineKeyProvider = new OfflineKeyProvider();

// Cache the keys
// Cache the proving and verifying keys for the custom hello function
offlineKeyProvider.cacheKeys("hello_hello.aleo/hello", [myFunctionProvingKey, myFunctionVerifyingKey]);

// Cache the proving key for the fee_public function (the verifying key is automatically cached)
offlineKeyProvider.insertFeePublicKeys(feePublicProvingKey);

// Create an offline query using the latest state root in order to create the inclusion proof
const offlineQuery = new OfflineQuery("latestStateRoot");

// Insert the key provider into the program manager
programManager.setKeyProvider(offlineKeyProvider);

// Create the offline search params
const offlineSearchParams = new OfflineSearchParams("hello_hello.aleo/hello");

// Create the offline transaction
const offlineExecuteTx = await programManager.buildExecutionTransaction({
    programName: "hello_hello.aleo",
    functionName: "hello",
    priorityFee: 1,
    privateFee: false,
    inputs: ["5u32", "5u32"],
    keySearchParams: offlineSearchParams,
    offlineQuery: offlineQuery,
    program: program
});

// Broadcast the transaction later on a machine with internet access
const networkClient = new AleoNetworkClient("https://api.provable.com/v2");
const txId = await networkClient.submitTransaction(offlineExecuteTx);
```

## Methods

<a name="cachekeys"></a>

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

### credits.aleo Getter Methods

The following no-argument methods each retrieve the proving and verifying key pair for a specific `credits.aleo` function from the offline key provider cache. Keys must be inserted into the cache (via the corresponding `insert*` method or `cacheKeys`) before calling these methods. All methods return `Promise.<FunctionKeyPair>`.

| Method | credits.aleo function |
| --- | --- |
| `bondPublicKeys()` | `bond_public` |
| `bondValidatorKeys()` | `bond_validator` |
| `claimUnbondPublicKeys()` | `claim_unbond_public` |
| `feePrivateKeys()` | `fee_private` |
| `feePublicKeys()` | `fee_public` |
| `inclusionKeys()` | inclusion prover |
| `joinKeys()` | `join` |
| `splitKeys()` | `split` |
| `unBondPublicKeys()` | `unbond_public` |

---

<a name="functionkeys"></a>

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

<a name="transferkeys"></a>

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

<a name="verifycreditskeys"></a>

### verifyCreditsKeys

Determines if the keys for a given credits function match the expected keys.

```javascript
verifyCreditsKeys(locator, provingKey, verifyingKey) ⇒ boolean
```

Parameters | Type | Description
--- | --- | ---
__locator__ | `string` | *The locator of the credits function (e.g. "credits.aleo/transfer_public")*
__provingKey__ | `ProvingKey` | *The proving key to verify*
__verifyingKey__ | `VerifyingKey` | *The verifying key to verify*
__*return*__ | `boolean` | *Whether the keys match the expected keys*

---

### insert\*Keys Methods

Each of the following methods inserts the proving key for a specific `credits.aleo` function into the offline key provider cache. Only the proving key needs to be supplied — the SDK automatically derives and inserts the corresponding verifying key, and verifies the checksum before caching. All methods accept a single `ProvingKey` parameter.

| Method | credits.aleo function |
| --- | --- |
| `insertBondPublicKeys(provingKey)` | `bond_public` |
| `insertClaimUnbondPublicKeys(provingKey)` | `claim_unbond_public` |
| `insertFeePrivateKeys(provingKey)` | `fee_private` |
| `insertFeePublicKeys(provingKey)` | `fee_public` |
| `insertInclusionKeys(provingKey)` | inclusion prover |
| `insertJoinKeys(provingKey)` | `join` |
| `insertSetValidatorStateKeys(provingKey)` | `set_validator_state` |
| `insertSplitKeys(provingKey)` | `split` |
| `insertTransferPrivateKeys(provingKey)` | `transfer_private` |
| `insertTransferPrivateToPublicKeys(provingKey)` | `transfer_private_to_public` |
| `insertTransferPublicKeys(provingKey)` | `transfer_public` |
| `insertTransferPublicToPrivateKeys(provingKey)` | `transfer_public_to_private` |
| `insertUnbondPublicKeys(provingKey)` | `unbond_public` |
