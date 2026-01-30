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

<a name="bondpublickeyparams"></a>

#### bondPublicKeyParams

Creates pre-configured OfflineSearchParams for the bond_public function of the credits.aleo program.

```javascript
OfflineSearchParams.bondPublicKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the bond_public function*

---

<a name="bondvalidatorkeyparams"></a>

#### bondValidatorKeyParams

Creates pre-configured OfflineSearchParams for the bond_validator function of the credits.aleo program.

```javascript
OfflineSearchParams.bondValidatorKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the bond_validator function*

---

<a name="claimunbondpublickeyparams"></a>

#### claimUnbondPublicKeyParams

Creates pre-configured OfflineSearchParams for the claim_unbond_public function of the credits.aleo program.

```javascript
OfflineSearchParams.claimUnbondPublicKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the claim_unbond_public function*

---

<a name="feeprivatekeyparams"></a>

#### feePrivateKeyParams

Creates pre-configured OfflineSearchParams for the fee_private function of the credits.aleo program.

```javascript
OfflineSearchParams.feePrivateKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the fee_private function*

---

<a name="feepublickeyparams"></a>

#### feePublicKeyParams

Creates pre-configured OfflineSearchParams for the fee_public function of the credits.aleo program.

```javascript
OfflineSearchParams.feePublicKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the fee_public function*

---

<a name="inclusionkeyparams"></a>

#### inclusionKeyParams

Creates pre-configured OfflineSearchParams for the inclusion prover function.

```javascript
OfflineSearchParams.inclusionKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the inclusion prover function*

---

<a name="joinkeyparams"></a>

#### joinKeyParams

Creates pre-configured OfflineSearchParams for the join function of the credits.aleo program.

```javascript
OfflineSearchParams.joinKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the join function*

---

<a name="setvalidatorstatekeyparams"></a>

#### setValidatorStateKeyParams

Creates pre-configured OfflineSearchParams for the set_validator_state function of the credits.aleo program.

```javascript
OfflineSearchParams.setValidatorStateKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the set_validator_state function*

---

<a name="splitkeyparams"></a>

#### splitKeyParams

Creates pre-configured OfflineSearchParams for the split function of the credits.aleo program.

```javascript
OfflineSearchParams.splitKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the split function*

---

<a name="transferprivatekeyparams"></a>

#### transferPrivateKeyParams

Creates pre-configured OfflineSearchParams for the transfer_private function of the credits.aleo program.

```javascript
OfflineSearchParams.transferPrivateKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the transfer_private function*

---

<a name="transferprivatetopublickeyparams"></a>

#### transferPrivateToPublicKeyParams

Creates pre-configured OfflineSearchParams for the transfer_private_to_public function of the credits.aleo program.

```javascript
OfflineSearchParams.transferPrivateToPublicKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the transfer_private_to_public function*

---

<a name="transferpublickeyparams"></a>

#### transferPublicKeyParams

Creates pre-configured OfflineSearchParams for the transfer_public function of the credits.aleo program.

```javascript
OfflineSearchParams.transferPublicKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the transfer_public function*

---

<a name="transferpublicassignerkeyparams"></a>

#### transferPublicAsSignerKeyParams

Creates pre-configured OfflineSearchParams for the transfer_public_as_signer function of the credits.aleo program.

```javascript
OfflineSearchParams.transferPublicAsSignerKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the transfer_public_as_signer function*

---

<a name="transferpublictoprivatekeyparams"></a>

#### transferPublicToPrivateKeyParams

Creates pre-configured OfflineSearchParams for the transfer_public_to_private function of the credits.aleo program.

```javascript
OfflineSearchParams.transferPublicToPrivateKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the transfer_public_to_private function*

---

<a name="unbondpublickeyparams"></a>

#### unbondPublicKeyParams

Creates pre-configured OfflineSearchParams for the unbond_public function of the credits.aleo program.

```javascript
OfflineSearchParams.unbondPublicKeyParams()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `OfflineSearchParams` | *Search params for the unbond_public function*

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
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const txId = await networkClient.submitTransaction(offlineExecuteTx);
```

## Methods

<a name="bondpublickeys"></a>

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

<a name="bondvalidatorkeys"></a>

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

<a name="claimunbondpublickeys"></a>

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

<a name="feeprivatekeys"></a>

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

<a name="feepublickeys"></a>

### feePublicKeys

Get fee_public function keys from the credits.aleo program. The keys must be cached prior to calling this
method for it to work.

```javascript
feePublicKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the fee_public function*

---

<a name="inclusionkeys"></a>

### inclusionKeys

Get the inclusion prover keys. The keys must be cached prior to calling this method for it to work.

```javascript
inclusionKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the inclusion prover*

---

<a name="joinkeys"></a>

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

<a name="splitkeys"></a>

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

<a name="unbondpublickeys"></a>

### unBondPublicKeys

Get unbond_public function keys from the credits.aleo program

```javascript
unBondPublicKeys()
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Promise.<FunctionKeyPair>` | *Proving and verifying keys for the join function*

---

<a name="insertbondpublickeys"></a>

### insertBondPublicKeys

Insert the proving and verifying keys for the bond_public function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for bond_public before inserting them into the cache.

```javascript
insertBondPublicKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `ProvingKey` | *The proving key for the bond_public function*

---

<a name="insertclaimunbondpublickeys"></a>

### insertClaimUnbondPublicKeys

Insert the proving and verifying keys for the claim_unbond_public function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for claim_unbond_public before inserting them into the cache.

```javascript
insertClaimUnbondPublicKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `ProvingKey` | *The proving key for the claim_unbond_public function*

---

<a name="insertfeeprivatekeys"></a>

### insertFeePrivateKeys

Insert the proving and verifying keys for the fee_private function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for fee_private before inserting them into the cache.

```javascript
insertFeePrivateKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `ProvingKey` | *The proving key for the fee_private function*

---

<a name="insertfeepublickeys"></a>

### insertFeePublicKeys

Insert the proving and verifying keys for the fee_public function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for fee_public before inserting them into the cache.

```javascript
insertFeePublicKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `ProvingKey` | *The proving key for the fee_public function*

---

<a name="insertinclusionkeys"></a>

### insertInclusionKeys

Insert the proving and verifying keys for the inclusion prover into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for the inclusion prover.

```javascript
insertInclusionKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `ProvingKey` | *The proving key for the inclusion prover*

---

<a name="insertjoinkeys"></a>

### insertJoinKeys

Insert the proving and verifying keys for the join function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for join before inserting them into the cache.

```javascript
insertJoinKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `ProvingKey` | *The proving key for the join function*

---

<a name="insertsetvalidatorstatekeys"></a>

### insertSetValidatorStateKeys

Insert the proving and verifying keys for the set_validator_state function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for set_validator_state before inserting them into the cache.

```javascript
insertSetValidatorStateKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `ProvingKey` | *The proving key for the set_validator_state function*

---

<a name="insertsplitkeys"></a>

### insertSplitKeys

Insert the proving and verifying keys for the split function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for split before inserting them into the cache.

```javascript
insertSplitKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `ProvingKey` | *The proving key for the split function*

---

<a name="inserttransferprivatekeys"></a>

### insertTransferPrivateKeys

Insert the proving and verifying keys for the transfer_private function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for transfer_private before inserting them into the cache.

```javascript
insertTransferPrivateKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `ProvingKey` | *The proving key for the transfer_private function*

---

<a name="inserttransferprivatetopublickeys"></a>

### insertTransferPrivateToPublicKeys

Insert the proving and verifying keys for the transfer_private_to_public function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for transfer_private_to_public before inserting them into the cache.

```javascript
insertTransferPrivateToPublicKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `ProvingKey` | *The proving key for the transfer_private_to_public function*

---

<a name="inserttransferpublickeys"></a>

### insertTransferPublicKeys

Insert the proving and verifying keys for the transfer_public function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for transfer_public before inserting them into the cache.

```javascript
insertTransferPublicKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `ProvingKey` | *The proving key for the transfer_public function*

---

<a name="inserttransferpublictoprivatekeys"></a>

### insertTransferPublicToPrivateKeys

Insert the proving and verifying keys for the transfer_public_to_private function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for transfer_public_to_private before inserting them into the cache.

```javascript
insertTransferPublicToPrivateKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `ProvingKey` | *The proving key for the transfer_public_to_private function*

---

<a name="insertunbondpublickeys"></a>

### insertUnbondPublicKeys

Insert the proving and verifying keys for the unbond_public function into the cache. Only the proving key needs
to be inserted, the verifying key is automatically inserted by the SDK. This function will automatically check
that the keys match the expected checksum for unbond_public before inserting them into the cache.

```javascript
insertUnbondPublicKeys(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `ProvingKey` | *The proving key for the unbond_public function*
