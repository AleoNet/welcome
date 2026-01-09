---
id: program_manager
title: Program Manager
sidebar_label: Program Manager
---

## Overview

The ProgramManager class is used to execute and deploy programs on the Aleo network and create value transfers.

**Kind**: global class

* ProgramManager
  * [new ProgramManager(host, keyProvider, recordProvider)](#programmanager)
  * [.setAccount(account)](#setaccount)
  * [.setKeyProvider(keyProvider)](#setkeyprovider)
  * [.setHost(host)](#sethost)
  * [.setRecordProvider(recordProvider)](#setrecordprovider)
  * [.setHeader(headerName, value)](#setheader)
  * [.setInclusionProver(provingKey)](#setinclusionprover)
  * [.removeHeader(headerName)](#removeheader)
  * [.checkFee(address, feeAmount)](#checkfee)
  * [.verifyProgram(program)](#verifyprogram)
  * [.createProgramFromSource(program)](#createprogramfromsource)
  * [.creditsProgram()](#creditsprogram)
  * [.synthesizeKeys(program, function_id, inputs, privateKey)](#synthesizekeys)
  * [.verifyExecution(executionResponse, blockHeight, imports, importedVerifyingKeys)](#verifyexecution)
  * [.run(program, function_name, inputs, proveExecution, imports, keySearchParams, provingKey, verifyingKey, privateKey, offlineQuery)](#run)
  * [.buildDeploymentTransaction(program, priorityFee, privateFee, recordSearchParams, feeRecord, privateKey)](#builddeploymenttransaction)
  * [.buildUpgradeTransaction(options)](#buildupgradetransaction)
  * [.deploy(program, priorityFee, privateFee, recordSearchParams, feeRecord, privateKey)](#deploy)
  * [.buildExecutionTransaction(options)](#buildexecutiontransaction)
  * [.buildTransactionFromAuthorization(options)](#buildtransactionfromauthorization)
  * [.execute(options)](#execute)
  * [.buildAuthorization(options)](#buildauthorization)
  * [.buildAuthorizationUnchecked(options)](#buildauthorizationunchecked)
  * [.buildFeeAuthorization(options)](#buildfeeauthorization)
  * [.provingRequest(options)](#provingrequest)
  * [.estimateFeeForAuthorization(options)](#estimatefeeforauthorization)
  * [.estimateExecutionFee(options)](#estimateexecutionfee)
  * [.join(recordOne, recordTwo, priorityFee, privateFee, recordSearchParams, feeRecord, privateKey, offlineQuery)](#join)
  * [.split(splitAmount, amountRecord, privateKey, offlineQuery)](#split)
  * [.buildTransferTransaction(amount, recipient, transferType, priorityFee, privateFee, recordSearchParams, amountRecord, feeRecord, privateKey, offlineQuery)](#buildtransfertransaction)
  * [.buildTransferPublicTransaction(amount, recipient, priorityFee, privateKey, offlineQuery)](#buildtransferpublictransaction)
  * [.buildTransferPublicAsSignerTransaction(amount, recipient, priorityFee, privateKey, offlineQuery)](#buildtransferpublicassignertransaction)
  * [.transfer(amount, recipient, transferType, priorityFee, privateFee, recordSearchParams, amountRecord, feeRecord, privateKey, offlineQuery)](#transfer)
  * [.buildBondPublicTransaction(validator_address, withdrawal_address, amount, options)](#buildbondpublictransaction)
  * [.bondPublic(validator_address, withdrawal_address, amount, options)](#bondpublic)
  * [.buildBondValidatorTransaction(validator_address, withdrawal_address, amount, commission, options)](#buildbondvalidatortransaction)
  * [.bondValidator(validator_address, withdrawal_address, amount, commission, options)](#bondvalidator)
  * [.buildUnbondPublicTransaction(staker_address, amount, options)](#buildunbondpublictransaction)
  * [.unbondPublic(staker_address, amount, options)](#unbondpublic)
  * [.buildClaimUnbondPublicTransaction(staker_address, options)](#buildclaimunbondpublictransaction)
  * [.claimUnbondPublic(staker_address, options)](#claimunbondpublic)
  * [.buildSetValidatorStateTransaction(validator_state, options)](#buildsetvalidatorstatetransaction)
  * [.setValidatorState(validator_state, options)](#setvalidatorstate)
  * [.buildDevnodeExecutionTransaction(options)](#builddevnodeexecutiontransaction)
  * [.buildDevnodeDeploymentTransaction(options)](#builddevnodedeploymenttransaction)
  * [.buildDevnodeUpgradeTransaction(options)](#builddevnodeupgradetransaction)

## Constructor

### ProgramManager

Create a new instance of the ProgramManager

```javascript
ProgramManager(host, keyProvider, recordProvider)
```

Parameters | Type | Description
--- | --- | ---
host | `string` | *A host uri running the official Aleo API*
keyProvider | `FunctionKeyProvider` | *A key provider that implements FunctionKeyProvider interface*
recordProvider | `RecordProvider` | *A record provider that implements RecordProvider interface*

## Options

Many ProgramManager methods accept options objects as parameters. This section describes the available options interfaces.

### DeployOptions

Options for deploying and upgrading programs on the Aleo network.

Property | Type | Description
--- | --- | ---
__program__ | `string` | *The program source code to be deployed.*
__priorityFee__ | `number` | *The priority fee to be paid for the transaction.*
__privateFee__ | `boolean` | *If true, uses a private record to pay the fee; otherwise, uses the account's public credit balance.*
__recordSearchParams?__ | `RecordSearchParams` | *Optional parameters for searching for a record to pay the execution transaction fee.*
__feeRecord?__ | `string \| RecordPlaintext` | *Optional fee record to use for the transaction.*
__privateKey?__ | `PrivateKey` | *Optional private key to use for the transaction.*

---

### ExecuteOptions

Options for executing a transaction on the Aleo network.

Property | Type | Description
--- | --- | ---
__programName__ | `string` | *The name of the program containing the function to be executed.*
__functionName__ | `string` | *The name of the function to execute within the program.*
__priorityFee__ | `number` | *The priority fee to be paid for the transaction.*
__privateFee__ | `boolean` | *If true, uses a private record to pay the fee; otherwise, uses the account's public credit balance.*
__inputs__ | `string[]` | *The inputs to the function being executed.*
__recordSearchParams?__ | `RecordSearchParams` | *Optional parameters for searching for a record to pay the execution transaction fee.*
__keySearchParams?__ | `KeySearchParams` | *Optional parameters for finding the matching proving and verifying keys for the function.*
__feeRecord?__ | `string \| RecordPlaintext` | *Optional fee record to use for the transaction.*
__provingKey?__ | `ProvingKey` | *Optional proving key to use for the transaction.*
__verifyingKey?__ | `VerifyingKey` | *Optional verifying key to use for the transaction.*
__privateKey?__ | `PrivateKey` | *Optional private key to use for the transaction.*
__offlineQuery?__ | `OfflineQuery` | *Optional offline query if creating transactions in an offline environment.*
__program?__ | `string \| Program` | *Optional program source code to use for the transaction.*
__imports?__ | `ProgramImports` | *Optional programs that the program being executed imports.*
__edition?__ | `number` | *Optional edition of the program.*

---

### AuthorizationOptions

Options for building an Authorization for a function.

Property | Type | Description
--- | --- | ---
__programName__ | `string` | *Name of the program containing the function to build the authorization for.*
__functionName__ | `string` | *Name of the function to build the authorization for.*
__inputs__ | `string[]` | *The inputs to the function.*
__programSource?__ | `string \| Program` | *Optional source code for the program to build an execution for.*
__privateKey?__ | `PrivateKey` | *Optional private key to use to build the authorization.*
__programImports?__ | `ProgramImports` | *Optional programs the program imports.*
__edition?__ | `number` | *Optional edition of the program.*

---

### FeeAuthorizationOptions

Options for building a fee authorization.

Property | Type | Description
--- | --- | ---
__deploymentOrExecutionId__ | `string` | *The id of a previously built Execution or Authorization.*
__baseFeeCredits__ | `number` | *The number of Aleo Credits to pay for the base fee.*
__priorityFeeCredits?__ | `number` | *Optional number of Aleo Credits to pay for the priority fee.*
__privateKey?__ | `PrivateKey` | *Optional private key to specify for the authorization.*
__feeRecord?__ | `RecordPlaintext` | *A record to specify to pay the private fee. If specified, a fee_private authorization will be built.*

---

### ExecuteAuthorizationOptions

Options for executing a transaction from an authorization.

Property | Type | Description
--- | --- | ---
__programName__ | `string` | *The name of the program containing the function to be executed.*
__authorization__ | `Authorization` | *The authorization to execute.*
__feeAuthorization?__ | `Authorization` | *Optional fee authorization.*
__keySearchParams?__ | `KeySearchParams` | *Optional parameters for finding the matching proving and verifying keys for the function.*
__provingKey?__ | `ProvingKey` | *Optional proving key to use for the transaction.*
__verifyingKey?__ | `VerifyingKey` | *Optional verifying key to use for the transaction.*
__offlineQuery?__ | `OfflineQuery` | *Optional offline query if creating transactions in an offline environment.*
__program?__ | `string \| Program` | *Optional program source code to use for the transaction.*
__imports?__ | `ProgramImports` | *Optional programs that the program being executed imports.*

---

### ProvingRequestOptions

Options for building a proving request.

Property | Type | Description
--- | --- | ---
__programName__ | `string` | *The name of the program containing the function to be executed.*
__functionName__ | `string` | *The name of the function to execute within the program.*
__priorityFee__ | `number` | *The priority fee to be paid for the transaction.*
__privateFee__ | `boolean` | *If true, uses a private record to pay the fee; otherwise, uses the account's public credit balance.*
__inputs__ | `string[]` | *The inputs to the function being executed.*
__baseFee?__ | `number` | *Optional base fee to be paid for the transaction.*
__recordSearchParams?__ | `RecordSearchParams` | *Optional parameters for searching for a record to pay the execution transaction fee.*
__feeRecord?__ | `string \| RecordPlaintext` | *Optional fee record to use for the transaction.*
__privateKey?__ | `PrivateKey` | *Optional private key to use for the transaction.*
__programSource?__ | `string \| Program` | *Optional program source code to use for the transaction.*
__programImports?__ | `ProgramImports` | *Optional programs that the program being executed imports.*
__broadcast?__ | `boolean` | *Whether to broadcast the Transaction generated by the remote prover to the Aleo network.*
__unchecked?__ | `boolean` | *Whether to skip input validation.*
__edition?__ | `number` | *Optional edition of the program.*

---

### FeeEstimateOptions

Options for estimating execution fees.

Property | Type | Description
--- | --- | ---
__programName__ | `string` | *The name of the program containing the function to estimate the fee for.*
__functionName?__ | `string` | *Optional name of the function to execute within the program to estimate the fee for.*
__program?__ | `string \| Program` | *Optional program source code to use for the fee estimate.*
__imports?__ | `ProgramImports` | *Optional programs that the program imports.*
__edition?__ | `number` | *Optional edition of the program to estimate the fee for.*
__authorization?__ | `Authorization` | *Optional authorization to estimate the fee for.*

## Methods

### checkFee

Check if the fee is sufficient to pay for the transaction

```javascript
programManager.checkFee(address, feeAmount)
```

Parameters | Type | Description
--- | --- | ---
__address__ | `string` | *The address of the account paying the fee*
__feeAmount__ | `bigint` | *The fee amount in microcredits*

---

### setAccount



Set the account to use for transaction submission to the Aleo network

```javascript
programManager.setAccount(account)
```

Parameters | Type | Description
--- | --- | ---
__account__ | Account | *Account to use for transaction submission*

---

### setKeyProvider



Set the key provider that provides the proving and verifying keys for programs

```javascript
setKeyProvider(keyProvider)
```

Parameters | Type | Description
--- | --- | ---
__keyProvider__ | `FunctionKeyProvider` | *The key provider to use for the program manager*

---

### setHost



Set the host peer to use for transaction submission to the Aleo network

```javascript
setHost(host)
```

Parameters | Type | Description
--- | --- | ---
__host__ | `string` | *Peer url to use for transaction submission*

---

### setRecordProvider



Set the record provider that provides records for transactions

```javascript
setRecordProvider(recordProvider)
```

Parameters | Type | Description
--- | --- | ---
__recordProvider__ | `RecordProvider` | *The record provider to use for the program manager*

---

### setHeader



Set a header in the AleoNetworkClient header map

```javascript
setHeader(headerName, value)
```

Parameters | Type | Description
--- | --- | ---
__headerName__ | `string` | *The name of the header to set*
__value__ | `string` | *The header value*

#### Examples

```javascript
import { ProgramManager } from "@provablehq/sdk/mainnet.js";

// Create a ProgramManager
const programManager = new ProgramManager("https://api.explorer.provable.com/v1");

// Set the value of the `Accept-Language` header to `en-US`
programManager.setHeader('Accept-Language', 'en-US');
```

---

### setInclusionProver



Set the inclusion prover into the wasm memory. This should be done prior to any execution of a function with a private record.

```javascript
setInclusionProver(provingKey)
```

Parameters | Type | Description
--- | --- | ---
__provingKey__ | `ProvingKey` | *Optional proving key to use for inclusion proofs*

#### Examples

```javascript
import { ProgramManager, AleoKeyProvider } from "@provablehq/sdk/mainnet.js";

const keyProvider = new AleoKeyProvider();
keyProvider.useCache(true);

// Create a ProgramManager
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider);

// Set the inclusion keys using keys from keyProvider.
programManager.setInclusionProver();
```

---

### removeHeader



Remove a header from the AleoNetworkClient header map

```javascript
removeHeader(headerName)
```

Parameters | Type | Description
--- | --- | ---
__headerName__ | `string` | *The name of the header to be removed*

#### Examples

```javascript
import { ProgramManager } from "@provablehq/sdk/mainnet.js";

// Create a ProgramManager
const programManager = new ProgramManager("https://api.explorer.provable.com/v1");

// Remove the default `X-Aleo-SDK-Version` header
programManager.removeHeader('X-Aleo-SDK-Version');
```

---

### buildDeploymentTransaction



Builds a deployment transaction for submission to the Aleo network.

```javascript
buildDeploymentTransaction(program, priorityFee, privateFee, recordSearchParams, feeRecord, privateKey) ► string
```

Parameters | Type | Description
--- | --- | ---
__program__ | `string` | *Program source code*
__priorityFee__ | `number` | *The optional priority fee to be paid for that transaction.*
__privateFee__ | `boolean` | *Use a private record to pay the fee. If false this will use the account public credit balance*
__recordSearchParams__ | `RecordSearchParams` | *Optional parameters for searching for a record to use pay the deployment fee*
__feeRecord__ | `string` | *Optional Fee record to use for the transaction*
__privateKey__ | `PrivateKey` | *Optional private key to use for the transaction*
__*return*__ | `string` | *The transaction id of the deployed program or a failure message from the network*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a program manager with the key provider to automatically fetch keys for deployments
const program = "program hello_hello.aleo;\n\nfunction hello:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n";
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
programManager.setAccount(Account);

// Define a fee in credits
const priorityFee = 0.0;

// Create the deployment transaction.
const tx = await programManager.buildDeploymentTransaction(program, fee, false);
await programManager.networkClient.submitTransaction(tx);

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx.id());
 assert(transaction.id() === tx.id());
}, 20000);
```

---

### buildUpgradeTransaction



Builds an upgrade transaction for an existing program on the Aleo network.

```javascript
buildUpgradeTransaction(options) ► Promise.<Transaction>
```

Parameters | Type | Description
--- | --- | ---
__options__ | [`DeployOptions`](#deployoptions) | *The options for the upgrade transaction.*
__*return*__ | `Promise.<Transaction>` | *The transaction object*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a program manager with the key provider to automatically fetch keys for upgrades
const program = "program hello_hello.aleo;\n\nfunction hello:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n";
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
programManager.setAccount(Account);

// Define a fee in credits
const priorityFee = 0.0;

// Create the upgrade transaction.
const tx = await programManager.buildUpgradeTransaction({program: program, priorityFee: priorityFee, privateFee: false});
await programManager.networkClient.submitTransaction(tx);

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx.id());
 assert(transaction.id() === tx.id());
}, 20000);
```

---

### deploy



Deploy an Aleo program to the Aleo network

```javascript
deploy(program, priorityFee, privateFee, recordSearchParams, feeRecord, privateKey) ► string
```

Parameters | Type | Description
--- | --- | ---
__program__ | `string` | *Program source code*
__priorityFee__ | `number` | *The optional fee to be paid for the transaction*
__privateFee__ | `boolean` | *Use a private record to pay the fee. If false this will use the account public credit balance*
__recordSearchParams__ | `RecordSearchParams` | *Optional parameters for searching for a record to used pay the deployment fee*
__feeRecord__ | `string` | *Optional Fee record to use for the transaction*
__privateKey__ | `PrivateKey` | *Optional private key to use for the transaction*
__*return*__ | `string` | *The transaction id of the deployed program or a failure message from the network*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider.
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a program manager with the key provider to automatically fetch keys for deployments
const program = "program hello_hello.aleo;\n\nfunction hello:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n";
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);

// Define a fee in credits
const priorityFee = 0.0;

// Deploy the program
const tx_id = await programManager.deploy(program, fee, false);

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx_id);
 assert(transaction.id() === tx_id);
}, 20000);
```

---

### buildExecutionTransaction



Builds an execution transaction for submission to the Aleo network.

```javascript
buildExecutionTransaction(options) ► Promise.<Transaction>
```

Parameters | Type | Description
--- | --- | ---
__options__ | [`ExecuteOptions`](#executeoptions) | *The options for the execution transaction.*
__*return*__ | `Promise.<Transaction>` | *- A promise that resolves to the transaction or an error.*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider.
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a program manager with the key provider to automatically fetch keys for executions
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);

// Build and execute the transaction
const tx = await programManager.buildExecutionTransaction({
  programName: "hello_hello.aleo",
  functionName: "hello_hello",
  priorityFee: 0.0,
  privateFee: false,
  inputs: ["5u32", "5u32"],
  keySearchParams: { "cacheKey": "hello_hello:hello" }
});

// Submit the transaction to the network
await programManager.networkClient.submitTransaction(tx.toString());

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx.id());
 assert(transaction.id() === tx.id());
}, 10000);
```

---

### buildTransactionFromAuthorization



Builds a transaction from an existing authorization for submission to the Aleo network.

```javascript
buildTransactionFromAuthorization(options) ► Promise.<Transaction>
```

Parameters | Type | Description
--- | --- | ---
__options__ | [`ExecuteAuthorizationOptions`](#executeauthorizationoptions) | *The options for building the transaction from an authorization.*
__*return*__ | `Promise.<Transaction>` | *A promise that resolves to the transaction or an error.*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider.
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a ProgramManager with the key and record providers.
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);

// First build an authorization
const authorization = await programManager.buildAuthorization({
  programName: "credits.aleo",
  functionName: "transfer_public",
  inputs: [
    "aleo1vwls2ete8dk8uu2kmkmzumd7q38fvshrht8hlc0a5362uq8ftgyqnm3w08",
    "10000000u64",
  ],
});

// Build a fee authorization
const feeAuthorization = await programManager.buildFeeAuthorization({
  deploymentOrExecutionId: authorization.id(),
  baseFeeCredits: 0.1,
});

// Build the transaction from the authorization
const tx = await programManager.buildTransactionFromAuthorization({
  programName: "credits.aleo",
  authorization: authorization,
  feeAuthorization: feeAuthorization,
});

await programManager.networkClient.submitTransaction(tx.toString());
```

---

### buildAuthorization



Builds a SnarkVM Authorization for a specific function.

```javascript
buildAuthorization(options) ► Promise.<Authorization>
```

Parameters | Type | Description
--- | --- | ---
__options__ | [`AuthorizationOptions`](#authorizationoptions) | *The options for building the Authorization*
__*return*__ | `Promise.<Authorization>` | *A promise that resolves to an Authorization or throws an Error.*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider.
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a ProgramManager with the key and record providers.
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);

// Build the `Authorization`.
const authorization = await programManager.buildAuthorization({
  programName: "credits.aleo",
  functionName: "transfer_public",
  inputs: [
    "aleo1vwls2ete8dk8uu2kmkmzumd7q38fvshrht8hlc0a5362uq8ftgyqnm3w08",
    "10000000u64",
  ],
});
```

---

### buildAuthorizationUnchecked



Builds a SnarkVM Authorization for a specific function without building a circuit first. This should be used when fast authorization generation is needed and the invoker is confident inputs are coorect.

```javascript
buildAuthorizationUnchecked(options) ► Promise.<Authorization>
```

Parameters | Type | Description
--- | --- | ---
__options__ | [`AuthorizationOptions`](#authorizationoptions) | *The options for building the Authorization*
__*return*__ | `Promise.<Authorization>` | *- A promise that resolves to an Authorization or throws an Error.*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider.
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a ProgramManager with the key and record providers.
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);

// Build the unchecked `Authorization`.
const authorization = await programManager.buildAuthorizationUnchecked({
  programName: "credits.aleo",
  functionName: "transfer_public",
  inputs: [
    "aleo1vwls2ete8dk8uu2kmkmzumd7q38fvshrht8hlc0a5362uq8ftgyqnm3w08",
    "10000000u64",
  ],
});
```

---

### provingRequest



Builds a ProvingRequest for submission to a prover for execution.

```javascript
provingRequest(options) ► Promise.<ProvingRequest>
```

Parameters | Type | Description
--- | --- | ---
__options__ | [`ProvingRequestOptions`](#provingrequestoptions) | *The options for building the proving request*
__*return*__ | `Promise.<ProvingRequest>` | *- A promise that resolves to the transaction or an error.*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider.
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a ProgramManager with the key and record providers.
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);

// Build the proving request.
const provingRequest = await programManager.provingRequest({
  programName: "credits.aleo",
  functionName: "transfer_public",
  baseFee: 100000,
  priorityFee: 0,
  privateFee: false,
  inputs: [
    "aleo1vwls2ete8dk8uu2kmkmzumd7q38fvshrht8hlc0a5362uq8ftgyqnm3w08",
    "10000000u64",
  ],
  broadcast: false,
});
```

---

### buildFeeAuthorization



Builds a SnarkVM fee Authorization for credits.aleo/fee_private or credits.aleo/fee_public. If a record is provided fee_private will be executed, otherwise fee_public will be executed.

```javascript
buildFeeAuthorization(options) ► Promise.<Authorization>
```

Parameters | Type | Description
--- | --- | ---
__options__ | [`FeeAuthorizationOptions`](#feeauthorizationoptions) | *The options for building the Authorization.*
__*return*__ | `Promise.<Authorization>` | *A promise that resolves to an Authorization or throws an Error.*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider.
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a ProgramManager with the key and record providers.
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);

// Build a credits.aleo/fee_public `Authorization`.
const feePublicAuthorization = await programManager.buildFeeAuthorization({
  deploymentOrExecutionId: "2423957656946557501636078245035919227529640894159332581642187482178647335171field",
  baseFeeCredits: 0.1,
});

// Build a credits.aleo/fee_private `Authorization`.
const record = "{ owner: aleo1j7qxyunfldj2lp8hsvy7mw5k8zaqgjfyr72x2gh3x4ewgae8v5gscf5jh3.private, microcredits: 1500000000000000u64.private, _nonce: 3077450429259593211617823051143573281856129402760267155982965992208217472983group.public }";
const feePrivateAuthorization = await programManager.buildFeeAuthorization({
  deploymentOrExecutionId: "2423957656946557501636078245035919227529640894159332581642187482178647335171field",
  baseFeeCredits: 0.1,
  feeRecord: record,
});
```

---

### estimateFeeForAuthorization



Estimate the fee for an authorization.

```javascript
estimateFeeForAuthorization(options) ► Promise.<bigint>
```

Parameters | Type | Description
--- | --- | ---
__options__ | [`FeeEstimateOptions`](#feeestimateoptions) | *Options for the fee estimate.*
__*return*__ | `Promise.<bigint>` | *Execution fee in microcredits for the authorization.*

#### Examples

```javascript
import { AleoKeyProvider, ProgramManager } from "@provablehq/sdk/mainnet.js";

// Initialize a program manager with the key provider to automatically fetch keys for executions.
const keyProvider = new AleoKeyProvider();
keyProvider.useCache(true);
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider);

// Build an authorization first
const authorization = await programManager.buildAuthorization({
  programName: "credits.aleo",
  functionName: "transfer_public",
  inputs: [
    "aleo1vwls2ete8dk8uu2kmkmzumd7q38fvshrht8hlc0a5362uq8ftgyqnm3w08",
    "10000000u64",
  ],
});

// Estimate the fee for the authorization.
const baseFeeMicrocredits = await programManager.estimateFeeForAuthorization({
  programName: "credits.aleo",
  authorization: authorization,
});
const baseFeeCredits = Number(baseFeeMicrocredits) / 1000000;
```

---

### estimateExecutionFee



Estimate the execution fee for an Aleo function.

```javascript
estimateExecutionFee(options) ► Promise.<bigint>
```

Parameters | Type | Description
--- | --- | ---
__options__ | [`FeeEstimateOptions`](#feeestimateoptions) | *Options for the fee estimate.*
__*return*__ | `Promise.<bigint>` | *Execution fee in microcredits for the function.*

#### Examples

```javascript
import { AleoKeyProvider, ProgramManager } from "@provablehq/sdk/mainnet.js";

// Initialize a program manager with the key provider to automatically fetch keys for executions.
const keyProvider = new AleoKeyProvider();
keyProvider.useCache(true);
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider);

// Get the base fee in microcredits.
const baseFeeMicrocredits = await programManager.estimateExecutionFee({
  programName: "credits.aleo",
  functionName: "transfer_public",
});
const baseFeeCredits = Number(baseFeeMicrocredits) / 1000000;
```

---

### execute



Builds an execution transaction for submission to the Aleo network.

```javascript
execute(options) ► Promise.<string>
```

Parameters | Type | Description
--- | --- | ---
__options__ | [`ExecuteOptions`](#executeoptions) | *The options for the execution transaction.*
__*return*__ | `Promise.<string>` | *- The transaction id*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider using official Aleo record, key, and network providers
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a program manager with the key provider to automatically fetch keys for executions
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);

// Build and execute the transaction
const tx_id = await programManager.execute({
  programName: "hello_hello.aleo",
  functionName: "hello_hello",
  priorityFee: 0.0,
  privateFee: false,
  inputs: ["5u32", "5u32"],
  keySearchParams: { "cacheKey": "hello_hello:hello" }
});

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx_id);
 assert(transaction.id() === tx_id);
}, 10000);
```

---

### run



Run an Aleo program in offline mode

```javascript
run(program, function_name, inputs, proveExecution, imports, keySearchParams, provingKey, verifyingKey, privateKey, offlineQuery) ► Promise.<ExecutionResponse>
```

Parameters | Type | Description
--- | --- | ---
__program__ | `string` | *Program source code containing the function to be executed*
__function_name__ | `string` | *Function name to execute*
__inputs__ | `Array.<string>` | *Inputs to the function*
__proveExecution__ | `number` | *Whether to prove the execution of the function and return an execution transcript that contains the proof.*
__imports__ | `Array.<string>` | *Optional imports to the program*
__keySearchParams__ | `KeySearchParams` | *Optional parameters for finding the matching proving &amp; verifying keys for the function*
__provingKey__ | `ProvingKey` | *Optional proving key to use for the transaction*
__verifyingKey__ | `VerifyingKey` | *Optional verifying key to use for the transaction*
__privateKey__ | `PrivateKey` | *Optional private key to use for the transaction*
__offlineQuery__ | `OfflineQuery` | *Optional offline query if creating transactions in an offline environment*
__*return*__ | `Promise.<ExecutionResponse>` | *The execution response containing the outputs of the function and the proof if the program is proved.*

#### Examples

```javascript
/// Import the mainnet version of the sdk used to build executions.
import { Account, ProgramManager } from "@provablehq/sdk/mainnet.js";

/// Create the source for the "helloworld" program
const program = "program helloworld.aleo;\n\nfunction hello:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n";
const programManager = new ProgramManager(undefined, undefined, undefined);

/// Create a temporary account for the execution of the program
const account = new Account();
programManager.setAccount(account);

/// Get the response and ensure that the program executed correctly
const executionResponse = await programManager.run(program, "hello", ["5u32", "5u32"]);
const result = executionResponse.getOutputs();
assert(result === ["10u32"]);
```

---

### join



Join two credits records into a single credits record

```javascript
join(recordOne, recordTwo, priorityFee, privateFee, recordSearchParams, feeRecord, privateKey, offlineQuery) ► Promise.<string>
```

Parameters | Type | Description
--- | --- | ---
__recordOne__ | `RecordPlaintext` | *First credits record to join*
__recordTwo__ | `RecordPlaintext` | *Second credits record to join*
__priorityFee__ | `number` | *The optional priority fee to be paid for the transaction*
__privateFee__ | `boolean` | *Use a private record to pay the fee. If false this will use the account public credit balance*
__recordSearchParams__ | `RecordSearchParams` | *Optional parameters for finding the fee record to use to pay the fee for the join transaction*
__feeRecord__ | `RecordPlaintext` | *Fee record to use for the join transaction*
__privateKey__ | `PrivateKey` | *Private key to use for the join transaction*
__offlineQuery__ | `OfflineQuery` | *Optional offline query if creating transactions in an offline environment*
__*return*__ | `Promise.<string>` | *The transaction id*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a program manager with the key provider to automatically fetch keys for executions
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
const record_1 = "{  owner: aleo184vuwr5u7u0ha5f5k44067dd2uaqewxx6pe5ltha5pv99wvhfqxqv339h4.private,  microcredits: 45000000u64.private,  _nonce: 4106205762862305308495708971985748592380064201230396559307556388725936304984group.public}"
const record_2 = "{  owner: aleo184vuwr5u7u0ha5f5k44067dd2uaqewxx6pe5ltha5pv99wvhfqxqv339h4.private,  microcredits: 45000000u64.private,  _nonce: 1540945439182663264862696551825005342995406165131907382295858612069623286213group.public}"
const tx_id = await programManager.join(record_1, record_2, 0.05, false);

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx_id);
 assert(transaction.id() === tx_id);
}, 10000);
```

---

### split



Split credits into two new credits records

```javascript
split(splitAmount, amountRecord, privateKey, offlineQuery) ► Promise.<string>
```

Parameters | Type | Description
--- | --- | ---
__splitAmount__ | `number` | *Amount in microcredits to split from the original credits record*
__amountRecord__ | `RecordPlaintext` | *Amount record to use for the split transaction*
__privateKey__ | `PrivateKey` | *Optional private key to use for the split transaction*
__offlineQuery__ | `OfflineQuery` | *Optional offline query if creating transactions in an offline environment*
__*return*__ | `Promise.<string>` | *The transaction id*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a program manager with the key provider to automatically fetch keys for executions
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
const record = "{  owner: aleo184vuwr5u7u0ha5f5k44067dd2uaqewxx6pe5ltha5pv99wvhfqxqv339h4.private,  microcredits: 45000000u64.private,  _nonce: 4106205762862305308495708971985748592380064201230396559307556388725936304984group.public}"
const tx_id = await programManager.split(25000000, record);

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx_id);
 assert(transaction.id() === tx_id);
}, 10000);
```

---

### synthesizeKeys



Pre-synthesize proving and verifying keys for a program

```javascript
synthesizeKeys(program, function_id, inputs, privateKey) ► Promise.<FunctionKeyPair>
```

Parameters | Type | Description
--- | --- | ---
__program__ | `string` | *The program source code to synthesize keys for*
__function_id__ | `string` | *The function id to synthesize keys for*
__inputs__ | `Array.<string>` | *Sample inputs to the function*
__privateKey__ | `PrivateKey` | *Optional private key to use for the key synthesis*
__*return*__ | `Promise.<FunctionKeyPair>` | *The synthesized function proving and verifying keys*

---

### buildTransferTransaction



Build a transaction to transfer credits to another account for later submission to the Aleo network

```javascript
buildTransferTransaction(amount, recipient, transferType, priorityFee, privateFee, recordSearchParams, amountRecord, feeRecord, privateKey, offlineQuery) ► Promise.<Transaction>
```

Parameters | Type | Description
--- | --- | ---
__amount__ | `number` | *The amount of credits to transfer*
__recipient__ | `string` | *The recipient of the transfer*
__transferType__ | `string` | *The type of transfer to perform - options: &#x27;private&#x27;, &#x27;privateToPublic&#x27;, &#x27;public&#x27;, &#x27;publicToPrivate&#x27;*
__priorityFee__ | `number` | *The optional priority fee to be paid for the transaction*
__privateFee__ | `boolean` | *Use a private record to pay the fee. If false this will use the account public credit balance*
__recordSearchParams__ | `RecordSearchParams` | *Optional parameters for finding the amount and fee records for the transfer transaction*
__amountRecord__ | `RecordPlaintext` | *Optional amount record to use for the transfer*
__feeRecord__ | `RecordPlaintext` | *Optional fee record to use for the transfer*
__privateKey__ | `PrivateKey` | *Optional private key to use for the transfer transaction*
__offlineQuery__ | `OfflineQuery` | *Optional offline query if creating transactions in an offline environment*
__*return*__ | `Promise.<Transaction>` | *The transaction object*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a program manager with the key provider to automatically fetch keys for executions
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
const tx = await programManager.buildTransferTransaction(1, "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px", "public", 0.2, false);
await programManager.networkClient.submitTransaction(tx.toString());

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx.id());
 assert(transaction.id() === tx.id());
}, 10000);
```

---

### buildTransferPublicTransaction



Build a transfer_public transaction to transfer credits to another account for later submission to the Aleo network

```javascript
buildTransferPublicTransaction(amount, recipient, priorityFee, privateKey, offlineQuery) ► Promise.<Transaction>
```

Parameters | Type | Description
--- | --- | ---
__amount__ | `number` | *The amount of credits to transfer*
__recipient__ | `string` | *The recipient of the transfer*
__priorityFee__ | `number` | *The optional priority fee to be paid for the transfer*
__privateKey__ | `PrivateKey` | *Optional private key to use for the transfer transaction*
__offlineQuery__ | `OfflineQuery` | *Optional offline query if creating transactions in an offline environment*
__*return*__ | `Promise.<Transaction>` | *The transaction object*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a program manager with the key provider to automatically fetch keys for executions
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
const tx = await programManager.buildTransferPublicTransaction(1, "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px", 0.2);
await programManager.networkClient.submitTransaction(tx.toString());

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx.id());
 assert(transaction.id() === tx.id());
}, 10000);
```

---

### buildTransferPublicAsSignerTransaction



Build a transfer_public_as_signer transaction to transfer credits to another account for later submission to the Aleo network

```javascript
buildTransferPublicAsSignerTransaction(amount, recipient, priorityFee, privateKey, offlineQuery) ► Promise.<Transaction>
```

Parameters | Type | Description
--- | --- | ---
__amount__ | `number` | *The amount of credits to transfer*
__recipient__ | `string` | *The recipient of the transfer*
__priorityFee__ | `number` | *The optional priority fee to be paid for the transfer*
__privateKey__ | `PrivateKey` | *Optional private key to use for the transfer transaction*
__offlineQuery__ | `OfflineQuery` | *Optional offline query if creating transactions in an offline environment*
__*return*__ | `Promise.<Transaction>` | *The transaction object*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a program manager with the key provider to automatically fetch keys for executions
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
const tx = await programManager.buildTransferPublicAsSignerTransaction(1, "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px", 0.2);
await programManager.networkClient.submitTransaction(tx.toString());

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx.id());
 assert(transaction.id() === tx.id());
}, 10000);
```

---

### transfer



Transfer credits to another account

```javascript
transfer(amount, recipient, transferType, priorityFee, privateFee, recordSearchParams, amountRecord, feeRecord, privateKey, offlineQuery) ► Promise.<string>
```

Parameters | Type | Description
--- | --- | ---
__amount__ | `number` | *The amount of credits to transfer*
__recipient__ | `string` | *The recipient of the transfer*
__transferType__ | `string` | *The type of transfer to perform - options: &#x27;private&#x27;, &#x27;privateToPublic&#x27;, &#x27;public&#x27;, &#x27;publicToPrivate&#x27;*
__priorityFee__ | `number` | *The optional priority fee to be paid for the transfer*
__privateFee__ | `boolean` | *Use a private record to pay the fee. If false this will use the account public credit balance*
__recordSearchParams__ | `RecordSearchParams` | *Optional parameters for finding the amount and fee records for the transfer transaction*
__amountRecord__ | `RecordPlaintext` | *Optional amount record to use for the transfer*
__feeRecord__ | `RecordPlaintext` | *Optional fee record to use for the transfer*
__privateKey__ | `PrivateKey` | *Optional private key to use for the transfer transaction*
__offlineQuery__ | `OfflineQuery` | *Optional offline query if creating transactions in an offline environment*
__*return*__ | `Promise.<string>` | *The transaction id*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkClient, KeyProvider, and RecordProvider
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);
keyProvider.useCache(true);

// Initialize a program manager with the key provider to automatically fetch keys for executions
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
const tx_id = await programManager.transfer(1, "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px", "public", 0.2, false);

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx_id);
 assert(transaction.id() === tx_id);
}, 10000);
```

---

### buildBondPublicTransaction



Build transaction to bond credits to a validator for later submission to the Aleo Network

```javascript
buildBondPublicTransaction(validator_address, withdrawal_address, amount, options) ► Promise.<Transaction>
```

Parameters | Type | Description
--- | --- | ---
__validator_address__ | `string` | *Address of the validator to bond to, if this address is the same as the staker (i.e. the executor of this function), it will attempt to bond the credits as a validator. Bonding as a validator currently requires a minimum of 10,000,000 credits to bond (subject to change). If the address is specified is an existing validator and is different from the address of the executor of this function, it will bond the credits to that validator staking committee as a delegator. A minimum of 10 credits is required to bond as a delegator.*
__withdrawal_address__ | `string` | *Address to withdraw the staked credits to when unbond_public is called.*
__amount__ | `number` | *The amount of credits to bond*
__options__ | `Partial.<ExecuteOptions>` | *Override default execution options.*
__*return*__ | `Promise.<Transaction>` | *The transaction object*

#### Examples

```javascript
// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager } from "@provablehq/sdk/mainnet.js";

// Create a keyProvider to handle key management
const keyProvider = new AleoKeyProvider();
keyProvider.useCache(true);

// Create a new ProgramManager with the key that will be used to bond credits
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, undefined);
programManager.setAccount(new Account("YourPrivateKey"));

// Create the bonding transaction object for later submission
const tx = await programManager.buildBondPublicTransaction("aleo1jx8s4dvjepculny4wfrzwyhs3tlyv65r58ns3g6q2gm2esh7ps8sqy9s5j", "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px", "aleo1feya8sjy9k2zflvl2dx39pdsq5tju28elnp2ektnn588uu9ghv8s84msv9", 2000000);

// The transaction can be later submitted to the network using the network client.
await programManager.networkClient.submitTransaction(tx.toString());

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx.id());
 assert(transaction.id() === tx.id());
}, 10000);
```

---

### bondPublic



Bond credits to validator.

```javascript
bondPublic(validator_address, withdrawal_address, amount, options) ► Promise.<string>
```

Parameters | Type | Description
--- | --- | ---
__validator_address__ | `string` | *Address of the validator to bond to, if this address is the same as the signer (i.e. the executor of this function), it will attempt to bond the credits as a validator. Bonding as a validator currently requires a minimum of 1,000,000 credits to bond (subject to change). If the address is specified is an existing validator and is different from the address of the executor of this function, it will bond the credits to that validator staking committee as a delegator. A minimum of 10 credits is required to bond as a delegator.*
__withdrawal_address__ | `string` | *Address to withdraw the staked credits to when unbond_public is called.*
__amount__ | `number` | *The amount of credits to bond*
__options__ | `Options` | *Options for the execution*
__*return*__ | `Promise.<string>` | *The transaction id*

#### Examples

```javascript
// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager } from "@provablehq/sdk/mainnet.js";

// Create a keyProvider to handle key management
const keyProvider = new AleoKeyProvider();
keyProvider.useCache(true);

// Create a new ProgramManager with the key that will be used to bond credits
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, undefined);

// Create the bonding transaction
tx_id = await programManager.bondPublic("aleo1jx8s4dvjepculny4wfrzwyhs3tlyv65r58ns3g6q2gm2esh7ps8sqy9s5j", "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px", "aleo1feya8sjy9k2zflvl2dx39pdsq5tju28elnp2ektnn588uu9ghv8s84msv9", 2000000);

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx_id);
 assert(transaction.id() === tx_id);
}, 10000);
```

---

### buildBondValidatorTransaction



Build a bond_validator transaction for later submission to the Aleo Network.

```javascript
buildBondValidatorTransaction(validator_address, withdrawal_address, amount, commission, options) ► Promise.<Transaction>
```

Parameters | Type | Description
--- | --- | ---
__validator_address__ | `string` | *Address of the validator to bond to, if this address is the same as the staker (i.e. the executor of this function), it will attempt to bond the credits as a validator. If the address is specified is an existing validator and is different from the address of the executor of this function, it will bond the credits to that validator staking committee as a delegator.*
__withdrawal_address__ | `string` | *Address to withdraw the staked credits to when unbond_public is called.*
__amount__ | `number` | *The amount of credits to bond. A minimum of 10000 credits is required to bond as a delegator.*
__commission__ | `number` | *The commission rate for the validator (must be between 0 and 100 - an error will be thrown if it is not)*
__options__ | `Partial.<ExecuteOptions>` | *Override default execution options.*
__*return*__ | `Promise.<Transaction>` | *The transaction object*

#### Examples

```javascript
// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager } from "@provablehq/sdk/mainnet.js";

// Create a keyProvider to handle key management
const keyProvider = new AleoKeyProvider();
keyProvider.useCache(true);

// Create a new ProgramManager with the key that will be used to bond credits
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, undefined);
programManager.setAccount(new Account("YourPrivateKey"));

// Create the bond validator transaction object for later use.
const tx = await programManager.buildBondValidatorTransaction("aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px", "aleo1feya8sjy9k2zflvl2dx39pdsq5tju28elnp2ektnn588uu9ghv8s84msv9", 2000000);

// The transaction can later be submitted to the network using the network client.
const tx_id = await programManager.networkClient.submitTransaction(tx.toString());

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx_id);
 assert(transaction.id() === tx_id);
}, 10000);
```

---

### bondValidator



Build transaction to bond a validator.

```javascript
bondValidator(validator_address, withdrawal_address, amount, commission, options) ► Promise.<string>
```

Parameters | Type | Description
--- | --- | ---
__validator_address__ | `string` | *Address of the validator to bond to, if this address is the same as the staker (i.e. the executor of this function), it will attempt to bond the credits as a validator. Bonding as a validator currently requires a minimum of 10,000,000 credits to bond (subject to change). If the address is specified is an existing validator and is different from the address of the executor of this function, it will bond the credits to that validator staking committee as a delegator. A minimum of 10 credits is required to bond as a delegator.*
__withdrawal_address__ | `string` | *Address to withdraw the staked credits to when unbond_public is called.*
__amount__ | `number` | *The amount of credits to bond*
__commission__ | `number` | *The commission rate for the validator (must be between 0 and 100 - an error will be thrown if it is not)*
__options__ | `Partial.<ExecuteOptions>` | *Override default execution options.*
__*return*__ | `Promise.<string>` | *The transaction id*

#### Examples

```javascript
// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager } from "@provablehq/sdk/mainnet.js";

// Create a keyProvider to handle key management
const keyProvider = new AleoKeyProvider();
keyProvider.useCache(true);

// Create a new ProgramManager with the key that will be used to bond credits
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, undefined);
programManager.setAccount(new Account("YourPrivateKey"));

// Create the bonding transaction
const tx_id = await programManager.bondValidator("aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px", "aleo1feya8sjy9k2zflvl2dx39pdsq5tju28elnp2ektnn588uu9ghv8s84msv9", 2000000);

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx_id);
 assert(transaction.id() === tx_id);
}, 10000);
```

---

### buildUnbondPublicTransaction



Build an unbond_public execution transaction to unbond credits from a validator in the Aleo network.

```javascript
buildUnbondPublicTransaction(staker_address, amount, options) ► Promise.<Transaction>
```

Parameters | Type | Description
--- | --- | ---
__staker_address__ | `string` | *The address of the staker who is unbonding the credits.*
__amount__ | `number` | *The amount of credits to unbond (scaled by 1,000,000).*
__options__ | `Partial.<ExecuteOptions>` | *Override default execution options.*
__*return*__ | `Promise.<Transaction>` | *- A promise that resolves to the transaction or an error message.*

#### Examples

```javascript
// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager } from "@provablehq/sdk/mainnet.js";

// Create a keyProvider to handle key management.
const keyProvider = new AleoKeyProvider();
keyProvider.useCache(true);

// Create a new ProgramManager with the key that will be used to unbond credits.
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, undefined);
const tx = await programManager.buildUnbondPublicTransaction("aleo1jx8s4dvjepculny4wfrzwyhs3tlyv65r58ns3g6q2gm2esh7ps8sqy9s5j", 2000000);

// The transaction can be submitted later to the network using the network client.
programManager.networkClient.submitTransaction(tx.toString());

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx.id());
 assert(transaction.id() === tx.id());
}, 10000);
```

---

### unbondPublic



Unbond a specified amount of staked credits. If the address of the executor of this function is an existing
validator, it will subtract this amount of credits from the validator staked credits. If there are less than
1,000,000 credits staked pool after the unbond, the validator will be removed from the validator set. If the
address of the executor of this function is not a validator and has credits bonded as a delegator, it will
subtract this amount of credits from the delegator staked credits. If there are less than 10 credits bonded
after the unbond operation, the delegator will be removed from the validator staking pool.

```javascript
unbondPublic(staker_address, amount, options) ► Promise.<string>
```

Parameters | Type | Description
--- | --- | ---
__staker_address__ | `string` | *Address of the staker who is unbonding the credits*
__amount__ | `number` | *Amount of credits to unbond.*
__options__ | [`ExecuteOptions`](#executeoptions) | *Options for the execution*
__*return*__ | `Promise.<string>` | *The transaction id*

#### Examples

```javascript
// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager } from "@provablehq/sdk/mainnet.js";

// Create a keyProvider to handle key management
const keyProvider = new AleoKeyProvider();
keyProvider.useCache(true);

// Create a new ProgramManager with the key that will be used to bond credits
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, undefined);
programManager.setAccount(new Account("YourPrivateKey"));

// Create the unbond_public transaction and send it to the network
const tx_id = await programManager.unbondPublic("aleo1jx8s4dvjepculny4wfrzwyhs3tlyv65r58ns3g6q2gm2esh7ps8sqy9s5j", 10);

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx_id);
 assert(transaction.id() === tx_id);
}, 10000);
```

---

### buildClaimUnbondPublicTransaction



Build a transaction to claim unbonded public credits in the Aleo network.

```javascript
buildClaimUnbondPublicTransaction(staker_address, options) ► Promise.<Transaction>
```

Parameters | Type | Description
--- | --- | ---
__staker_address__ | `string` | *The address of the staker who is claiming the credits.*
__options__ | `Partial.<ExecuteOptions>` | *Override default execution options.*
__*return*__ | `Promise.<Transaction>` | *- A promise that resolves to the transaction or an error message.*

#### Examples

```javascript
// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager } from "@provablehq/sdk/mainnet.js";

// Create a keyProvider to handle key management
const keyProvider = new AleoKeyProvider();
keyProvider.useCache(true);

// Create a new ProgramManager with the key that will be used to claim unbonded credits.
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, undefined);

// Create the claim_unbond_public transaction object for later use.
const tx = await programManager.buildClaimUnbondPublicTransaction("aleo1jx8s4dvjepculny4wfrzwyhs3tlyv65r58ns3g6q2gm2esh7ps8sqy9s5j");

// The transaction can be submitted later to the network using the network client.
programManager.networkClient.submitTransaction(tx.toString());

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx.id());
 assert(transaction.id() === tx.id());
}, 10000);
```

---

### claimUnbondPublic



Claim unbonded credits. If credits have been unbonded by the account executing this function, this method will
claim them and add them to the public balance of the account.

```javascript
claimUnbondPublic(staker_address, options) ► Promise.<string>
```

Parameters | Type | Description
--- | --- | ---
__staker_address__ | `string` | *Address of the staker who is claiming the credits*
__options__ | [`ExecuteOptions`](#executeoptions) | *Options for the execution*
__*return*__ | `Promise.<string>` | *The transaction id*

#### Examples

```javascript
// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager } from "@provablehq/sdk/mainnet.js";

// Create a keyProvider to handle key management
const keyProvider = new AleoKeyProvider();
keyProvider.useCache(true);

// Create a new ProgramManager with the key that will be used to bond credits
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, undefined);
programManager.setAccount(new Account("YourPrivateKey"));

// Create the claim_unbond_public transaction
const tx_id = await programManager.claimUnbondPublic("aleo1jx8s4dvjepculny4wfrzwyhs3tlyv65r58ns3g6q2gm2esh7ps8sqy9s5j");

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx_id);
 assert(transaction.id() === tx_id);
}, 10000);
```

---

### buildSetValidatorStateTransaction



Build a set_validator_state transaction for later usage.

This function allows a validator to set their state to be either opened or closed to new stakers.
When the validator is open to new stakers, any staker (including the validator) can bond or unbond from the validator.
When the validator is closed to new stakers, existing stakers can still bond or unbond from the validator, but new stakers cannot bond.

This function serves two primary purposes:
1. Allow a validator to leave the committee, by closing themselves to stakers and then unbonding all of their stakers.
2. Allow a validator to maintain their % of stake, by closing themselves to allowing more stakers to bond to them.

```javascript
buildSetValidatorStateTransaction(validator_state, options) ► Promise.<Transaction>
```

Parameters | Type | Description
--- | --- | ---
__validator_state__ | `boolean` | *Whether to set the validator state to open (true) or closed (false)*
__options__ | `Partial.<ExecuteOptions>` | *Override default execution options*
__*return*__ | `Promise.<Transaction>` | *The transaction object*

#### Examples

```javascript
// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager } from "@provablehq/sdk/mainnet.js";

// Create a keyProvider to handle key management
const keyProvider = new AleoKeyProvider();
keyProvider.useCache(true);

// Create a new ProgramManager with the key that will be used to bond credits
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, undefined);

// Create the set_validator_state transaction
const tx = await programManager.buildSetValidatorStateTransaction(true);

// The transaction can be submitted later to the network using the network client.
programManager.networkClient.submitTransaction(tx.toString());

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx.id());
 assert(transaction.id() === tx.id());
}, 10000);
```

---

### setValidatorState



Submit a set_validator_state transaction to the Aleo Network.

This function allows a validator to set their state to be either opened or closed to new stakers.
When the validator is open to new stakers, any staker (including the validator) can bond or unbond from the validator.
When the validator is closed to new stakers, existing stakers can still bond or unbond from the validator, but new stakers cannot bond.

This function serves two primary purposes:
1. Allow a validator to leave the committee, by closing themselves to stakers and then unbonding all of their stakers.
2. Allow a validator to maintain their % of stake, by closing themselves to allowing more stakers to bond to them.

```javascript
setValidatorState(validator_state, options) ► Promise.<string>
```

Parameters | Type | Description
--- | --- | ---
__validator_state__ | `boolean` | *Whether to set the validator state to open (true) or closed (false)*
__options__ | `Partial.<ExecuteOptions>` | *Override default execution options*
__*return*__ | `Promise.<string>` | *The transaction id*

#### Examples

```javascript
// Import the mainnet version of the sdk.
import { AleoKeyProvider, ProgramManager } from "@provablehq/sdk/mainnet.js";

// Create a keyProvider to handle key management
const keyProvider = new AleoKeyProvider();
keyProvider.useCache(true);

// Create a new ProgramManager with the key that will be used to bond credits
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, undefined);

// Create the set_validator_state transaction
const tx_id = await programManager.setValidatorState(true);

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx_id);
 assert(transaction.id() === tx_id);
}, 10000);
```

---

### verifyExecution



Verify a proof from an offline execution. This is useful when it is desired to do offchain proving and verification.

```javascript
verifyExecution(executionResponse, blockHeight, imports, importedVerifyingKeys) ► boolean
```

Parameters | Type | Description
--- | --- | ---
__executionResponse__ | `executionResponse` | *The response from an offline function execution (via the ;programManager.run; method)*
__blockHeight__ | `blockHeight` | *The ledger height when the execution was generated.*
__imports__ | `ImportedPrograms` | *The imported programs used in the execution. Specified as \{ programName: programSourceCode, ... \}*
__importedVerifyingKeys__ | `ImportedVerifyingKeys` | *The verifying keys in the execution. Specified as \{ programName: [[functionName, verifyingKey], ...], ... \}*
__*return*__ | `boolean` | *True if the proof is valid, false otherwise*

#### Examples

```javascript
/// Import the mainnet version of the sdk used to build executions.
import { Account, ProgramManager } from "@provablehq/sdk/mainnet.js";

/// Create the source for two programs.
const program = "import add_it_up.aleo; \n\n program mul_add.aleo;\n\nfunction mul_and_add:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    mul r0 r1 into r2;\n call add_it_up.aleo/add_it r1 r2 into r3;  output r3 as u32.private;\n";
const program_import = "program add_it_up.aleo;\n\nfunction add_it:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n";
const programManager = new ProgramManager(undefined, undefined, undefined);

/// Create a temporary account for the execution of the program
const account = Account.fromCipherText(process.env.ciphertext, process.env.password);
programManager.setAccount(account);

/// Get the response and ensure that the program executed correctly
const executionResponse = await programManager.run(program, "mul_and_add", ["5u32", "5u32"], true);

/// Construct the imports and verifying keys
const imports = { "add_it_up.aleo": program_import };
const importedVerifyingKeys = { "add_it_up.aleo": [["add_it", "verifyingKey1..."]] };

/// Verify the execution.
const blockHeight = 9000000;
const isValid = programManager.verifyExecution(executionResponse, blockHeight, imports, importedVerifyingKeys);
assert(isValid);
```

---

### createProgramFromSource



Create a program object from a program source code

```javascript
createProgramFromSource(program) ► Program
```

Parameters | Type | Description
--- | --- | ---
__program__ | `string` | *Program source code*
__*return*__ | Program | *The program object*

---

### creditsProgram



Get the credits program object

```javascript
creditsProgram() ► Program
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | Program | *The credits program object*

---

### verifyProgram



Verify a program is valid

```javascript
verifyProgram(program)
```

Parameters | Type | Description
--- | --- | ---
__program__ | `string` | *The program source code*

---

### buildDevnodeExecutionTransaction



Builds an execution transaction with placeholder proofs for use with a local devnode. `getOrInitConsensusVersionTestHeights` must be called with development heights prior to invoking this method for it to work properly.

```javascript
buildDevnodeExecutionTransaction(options) ► Promise.<Transaction>
```

Parameters | Type | Description
--- | --- | ---
__options__ | [`ExecuteOptions`](#executeoptions) | *The options for the execution transaction.*
__*return*__ | `Promise.<Transaction>` | *A promise that resolves to the transaction or an error.*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { ProgramManager, NetworkRecordProvider, getOrInitConsensusVersionTestHeights } from "@provablehq/sdk/mainnet.js";

// Initialize the development consensus heights in order to work with a local devnode.
getOrInitConsensusVersionTestHeights("0,1,2,3,4,5,6,7,8,9,10,11");

// Create a new NetworkClient and RecordProvider
const recordProvider = new NetworkRecordProvider(account, networkClient);

// Initialize a program manager
const programManager = new ProgramManager("http://localhost:3030", undefined, recordProvider);
programManager.setAccount(account);

// Build and execute the transaction
const tx = await programManager.buildDevnodeExecutionTransaction({
  programName: "hello_hello.aleo",
  functionName: "hello_hello",
  priorityFee: 0.0,
  privateFee: false,
  inputs: ["5u32", "5u32"],
});

// Submit the transaction to the network
await programManager.networkClient.submitTransaction(tx.toString());
```

---

### buildDevnodeDeploymentTransaction



Builds a deployment transaction with placeholder certificates and verifying keys for each function in the program. Intended for use with a local devnode. `getOrInitConsensusVersionTestHeights` must be called with development heights prior to invoking this method for it to work properly.

```javascript
buildDevnodeDeploymentTransaction(options) ► Promise.<Transaction>
```

Parameters | Type | Description
--- | --- | ---
__options__ | [`DeployOptions`](#deployoptions) | *The options for the deployment transaction.*
__*return*__ | `Promise.<Transaction>` | *The transaction object*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { ProgramManager, NetworkRecordProvider, getOrInitConsensusVersionTestHeights } from "@provablehq/sdk/mainnet.js";

// Initialize the development consensus heights in order to work with a local devnode.
getOrInitConsensusVersionTestHeights("0,1,2,3,4,5,6,7,8,9,10,11");

// Create a new NetworkClient and RecordProvider
const recordProvider = new NetworkRecordProvider(account, networkClient);

// Initialize a program manager with the record provider
const program = "program hello_hello.aleo;\n\nfunction hello:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n";
const programManager = new ProgramManager("http://localhost:3030", undefined, recordProvider);
programManager.setAccount(Account);

// Define a fee in credits
const priorityFee = 0.0;

// Create the deployment transaction.
const tx = await programManager.buildDevnodeDeploymentTransaction({program: program, priorityFee: priorityFee, privateFee: false});
await programManager.networkClient.submitTransaction(tx);

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx.id());
 assert(transaction.id() === tx.id());
}, 20000);
```

---

### buildDevnodeUpgradeTransaction



Builds an upgrade transaction with placeholder certificates and verifying keys for use with a local devnode. `getOrInitConsensusVersionTestHeights` must be called with development heights prior to invoking this method for it to work properly.

```javascript
buildDevnodeUpgradeTransaction(options) ► Promise.<Transaction>
```

Parameters | Type | Description
--- | --- | ---
__options__ | [`DeployOptions`](#deployoptions) | *The options for the upgrade transaction.*
__*return*__ | `Promise.<Transaction>` | *The transaction object*

#### Examples

```javascript
/// Import the mainnet version of the sdk.
import { ProgramManager, NetworkRecordProvider, getOrInitConsensusVersionTestHeights } from "@provablehq/sdk/mainnet.js";

// Initialize the development consensus heights in order to work with a local devnode.
getOrInitConsensusVersionTestHeights("0,1,2,3,4,5,6,7,8,9,10,11");

// Create a new NetworkClient and RecordProvider
const recordProvider = new NetworkRecordProvider(account, networkClient);

// Initialize a program manager with the record provider
const program = "program hello_hello.aleo;\n\nfunction hello:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n";
const programManager = new ProgramManager("http://localhost:3030", undefined, recordProvider);
programManager.setAccount(Account);

// Define a fee in credits
const priorityFee = 0.0;

// Create the upgrade transaction.
const tx = await programManager.buildDevnodeUpgradeTransaction({program: program, priorityFee: priorityFee, privateFee: false});
await programManager.networkClient.submitTransaction(tx);

// Verify the transaction was successful
setTimeout(async () => {
 const transaction = await programManager.networkClient.getTransaction(tx.id());
 assert(transaction.id() === tx.id());
}, 20000);
```

