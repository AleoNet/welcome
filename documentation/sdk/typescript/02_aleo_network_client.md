---
title: Aleo Network Client
sidebar_label: Aleo Network Client
---

<a name="AleoNetworkClient"></a>

## Overview
Client library that encapsulates REST calls to publicly exposed endpoints of Aleo nodes. The methods provided in this allow users to query public information from the Aleo blockchain and submit transactions to the network.

**Kind**: global class  

* AleoNetworkClient
    * [new AleoNetworkClient(host)](#new_AleoNetworkClient_new)
    * [.setHost(host)](#AleoNetworkClient+setHost)
    * [.setAccount(account)](#AleoNetworkClient+setAccount)
    * [.getAccount()](#AleoNetworkClient+getAccount)
    * [.fetchData(url)](#AleoNetworkClient+fetchData)
    * [.fetchRaw(url)](#AleoNetworkClient+fetchRaw)
    * [.findRecords(startHeight, endHeight, unspent, programs, amounts, maxMicrocredits, nonces, privateKey)](#AleoNetworkClient+findRecords)
    * [.findUnspentRecords(startHeight, endHeight, programs, amounts, maxMicrocredits, nonces, privateKey)](#AleoNetworkClient+findUnspentRecords)
    * [.getBlock(height)](#AleoNetworkClient+getBlock)
    * [.getBlockRange(start, end)](#AleoNetworkClient+getBlockRange)
    * [.getProgram(programId)](#AleoNetworkClient+getProgram)
    * [.getProgramObject(inputProgram)](#AleoNetworkClient+getProgramObject)
    * [.getProgramImports(inputProgram)](#AleoNetworkClient+getProgramImports)
    * [.getProgramImportNames(inputProgram)](#AleoNetworkClient+getProgramImportNames)
    * [.getDeploymentTransactionIDForProgram(program)](#AleoNetworkClient+getDeploymentTransactionIDForProgram)
    * [.getDeploymentTransactionForProgram(program)](#AleoNetworkClient+getDeploymentTransactionForProgram)
    * [.getDeploymentTransactionObjectForProgram(program)](#AleoNetworkClient+getDeploymentTransactionObjectForProgram)
    * [.getProgramMappingNames(programId)](#AleoNetworkClient+getProgramMappingNames)
    * [.getProgramMappingValue(programId, mappingName, key)](#AleoNetworkClient+getProgramMappingValue)
    * [.getProgramMappingPlaintext(programId, mappingName, key)](#AleoNetworkClient+getProgramMappingPlaintext)
    * [.getLatestBlock()](#AleoNetworkClient+getLatestBlock)
    * [.getLatestHeight()](#AleoNetworkClient+getLatestHeight)
    * [.getLatestCommittee()](#AleoNetworkClient+getLatestCommittee)
    * [.getStateRoot()](#AleoNetworkClient+getStateRoot)
    * [.getTransaction(id)](#AleoNetworkClient+getTransaction)
    * [.getTransactionObject(transactionId)](#AleoNetworkClient+getTransactionObject)
    * [.getTransactions(height)](#AleoNetworkClient+getTransactions)
    * [.getTransactionsInMempool()](#AleoNetworkClient+getTransactionsInMempool)
    * [.getTransitionId(inputOrOutputID)](#AleoNetworkClient+getTransitionId)
    * [.submitTransaction(transaction)](#AleoNetworkClient+submitTransaction)
    * [.submitSolution(solution)](#AleoNetworkClient+submitSolution)

## Constructor

<a name="new_AleoNetworkClient_new"></a>

### AleoNetworkClient {#new_AleoNetworkClient_new}

```javascript
new AleoNetworkClient(host)
```

| Param | Type |
| --- | --- |
| host | <code>string</code> | 

**Example**  
```js
// Connection to a local node
let local_connection = new AleoNetworkClient("http://localhost:3030");

// Connection to a public beacon node
let public_connection = new AleoNetworkClient("https://api.explorer.provable.com/v1");
```

<a name="AleoNetworkClient+setHost"></a>

## Methods

### setHost {#AleoNetworkClient+setHost}

<p>Set a new host for the networkClient</p>

```javascript
networkClient.setHost(host)
```

| Param | Type |
| --- | --- |
| host | <code>string</code> | 

**Example**  
```js
// New connection to a public beacon node
let public_connection = AleoNetworkClient.setHost("https://api.explorer.provable.com/v1");
```

---

<a name="AleoNetworkClient+setAccount"></a>

---

### setAccount {#AleoNetworkClient+setAccount}

<p>Set an account to use in networkClient calls</p>

```javascript
networkClient.setAccount(account)
```

| Param | Type |
| --- | --- |
| account | <code>Account</code> | 

**Example**  
```js
let account = new Account();
networkClient.setAccount(account);
```

---

<a name="AleoNetworkClient+getAccount"></a>

---

### getAccount {#AleoNetworkClient+getAccount}

<p>Return the Aleo account used in the networkClient</p>

```javascript
networkClient.getAccount() ⇒ Account
```

| Param | Type |
| --- | --- |
| *return* | <code>Account</code> | 

**Example**  
```js
let account = networkClient.getAccount();
```

---

<a name="AleoNetworkClient+fetchData"></a>

---

### fetchData {#AleoNetworkClient+fetchData}

<p>Fetches data from the Aleo network and returns it as a JSON object.</p>

```javascript
networkClient.fetchData(url) ⇒ Promise.<Type>
```

| Param | Type |
| --- | --- |
| url | <code>undefined</code> | 
| *return* | <code>Promise.&lt;Type&gt;</code> | 

<a name="AleoNetworkClient+fetchRaw"></a>

---

### fetchRaw {#AleoNetworkClient+fetchRaw}

<p>Fetches data from the Aleo network and returns it as an unparsed string. This method should be used when it is desired to reconstitute data returned from the network into a WASM object.</p>

```javascript
networkClient.fetchRaw(url) ⇒ Promise.<string>
```

| Param | Type |
| --- | --- |
| url | <code>undefined</code> | 
| *return* | <code>Promise.&lt;string&gt;</code> | 

<a name="AleoNetworkClient+findRecords"></a>

---

### findRecords {#AleoNetworkClient+findRecords}

<p>Attempt to find records in the Aleo blockchain.</p>

```javascript
networkClient.findRecords(startHeight, endHeight, unspent, programs, amounts, maxMicrocredits, nonces, privateKey) ⇒ Promise.<Array.<RecordPlaintext>>
```

| Param | Type | Description |
| --- | --- | --- |
| startHeight | <code>number</code> | The height at which to start searching for unspent records |
| endHeight | <code>number</code> | The height at which to stop searching for unspent records |
| unspent | <code>boolean</code> | Whether to search for unspent records only |
| programs | <code>Array.&lt;string&gt;</code> | The program(s) to search for unspent records in |
| amounts | <code>Array.&lt;number&gt;</code> | The amounts (in microcredits) to search for (eg. [100, 200, 3000]) |
| maxMicrocredits | <code>number</code> | The maximum number of microcredits to search for |
| nonces | <code>Array.&lt;string&gt;</code> | The nonces of already found records to exclude from the search |
| privateKey | <code>string</code> | An optional private key to use to find unspent records. |
| *return* | <code>Promise.&lt;Array.&lt;RecordPlaintext&gt;&gt;</code> | 

**Example**  
```js
// Find specific amounts
const startHeight = 500000;
const amounts = [600000, 1000000];
const records = await networkClient.findRecords(startHeight, undefined, true, ["credits.aleo"], amounts);

// Find specific amounts with a maximum number of cumulative microcredits
const maxMicrocredits = 100000;
const records = await networkClient.findRecords(startHeight, undefined, true, ["credits.aleo"], undefined, maxMicrocredits);
```

<a name="AleoNetworkClient+findUnspentRecords"></a>

---

### findUnspentRecords {#AleoNetworkClient+findUnspentRecords}

<p>Attempts to find unspent records in the Aleo blockchain.</p>

```javascript
networkClient.findUnspentRecords(startHeight, endHeight, programs, amounts, maxMicrocredits, nonces, privateKey) ⇒ Promise.<Array.<RecordPlaintext>>
```

| Param | Type | Description |
| --- | --- | --- |
| startHeight | <code>number</code> | The height at which to start searching for unspent records |
| endHeight | <code>number</code> | The height at which to stop searching for unspent records |
| programs | <code>Array.&lt;string&gt;</code> | The program(s) to search for unspent records in |
| amounts | <code>Array.&lt;number&gt;</code> | The amounts (in microcredits) to search for (eg. [100, 200, 3000]) |
| maxMicrocredits | <code>number</code> | The maximum number of microcredits to search for |
| nonces | <code>Array.&lt;string&gt;</code> | The nonces of already found records to exclude from the search |
| privateKey | <code>string</code> | An optional private key to use to find unspent records. |
| *return* | <code>Promise.&lt;Array.&lt;RecordPlaintext&gt;&gt;</code> | 

**Example**  
```js
// Find specific amounts
const startHeight = 500000;
const endHeight = 550000;
const amounts = [600000, 1000000];
const records = await networkClient.findUnspentRecords(startHeight, endHeight, ["credits.aleo"], amounts);

// Find specific amounts with a maximum number of cumulative microcredits
const maxMicrocredits = 100000;
const records = await networkClient.findUnspentRecords(startHeight, undefined, ["credits.aleo"], undefined, maxMicrocredits);
```

<a name="AleoNetworkClient+getBlock"></a>

---

### getBlock {#AleoNetworkClient+getBlock}

<p>Returns the contents of the block at the specified block height.</p>

```javascript
networkClient.getBlock(height) ⇒ Promise.<BlockJSON>
```

| Param | Type |
| --- | --- |
| height | <code>number</code> | 
| *return* | <code>Promise.&lt;BlockJSON&gt;</code> | 

**Example**  
```js
let block = await networkClient.getBlock(1234);
```

<a name="AleoNetworkClient+getBlockRange"></a>

---

### getBlockRange {#AleoNetworkClient+getBlockRange}

<p>Returns a range of blocks between the specified block heights.</p>

```javascript
networkClient.getBlockRange(start, end) ⇒ Promise.<Array.<BlockJSON>>
```

| Param | Type |
| --- | --- |
| start | <code>number</code> | 
| end | <code>number</code> | 
| *return* | <code>Promise.&lt;Array.&lt;BlockJSON&gt;&gt;</code> | 

**Example**  
```js
let blockRange = await networkClient.getBlockRange(2050, 2100);
```

<a name="AleoNetworkClient+getProgram"></a>

---

### getProgram

<p>Returns the source code of a program given a program ID.</p>

```javascript
networkClient.getProgram(programId) ⇒ Promise.<string>
```

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | The program ID of a program deployed to the Aleo Network |
| *return* | <code>Promise.&lt;string&gt;</code> | 

**Example**  
```js
let program = await networkClient.getProgram("hello_hello.aleo");
const expectedSource = "program hello_hello.aleo;\n\nfunction hello:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n"
assert.equal(program, expectedSource);
```

<a name="AleoNetworkClient+getProgramObject"></a>

---

### getProgramObject

<p>Returns a program object from a program ID or program source code.</p>

```javascript
networkClient.getProgramObject(inputProgram) ⇒ Promise.<Program>
```

| Param | Type | Description |
| --- | --- | --- |
| inputProgram | <code>string</code> | The program ID or program source code of a program deployed to the Aleo Network |
| *return* | <code>Promise.&lt;Program&gt;</code> | 

**Example**  
```js
let program = await networkClient.getProgramObject("hello_hello.aleo");
const programSource = "program hello_hello.aleo;\n\nfunction hello:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n"

// Get program object from program ID or program source code
const programObjectFromID = await networkClient.getProgramObject(programID);
const programObjectFromSource = await networkClient.getProgramObject(programSource);

// Both program objects should be equal
assert.equal(programObjectFromID.to_string(), programObjectFromSource.to_string());
```

<a name="AleoNetworkClient+getProgramImports"></a>

---

### getProgramImports

<p>Returns an object containing the source code of a program and the source code of all programs it imports</p>

```javascript
networkClient.getProgramImports(inputProgram) ⇒ Promise.<ProgramImports>
```

| Param | Type | Description |
| --- | --- | --- |
| inputProgram | <code>Program</code> | The program ID or program source code of a program deployed to the Aleo Network |
| *return* | <code>Promise.&lt;ProgramImports&gt;</code> | 

**Example**  
```js
let program = await networkClient.getProgramImports("double_test.aleo");
const double_test_source = "import multiply_test.aleo;\n\nprogram double_test.aleo;\n\nfunction double_it:\n    input r0 as u32.private;\n    call multiply_test.aleo/multiply 2u32 r0 into r1;\n    output r1 as u32.private;\n"
const double_test = Program.fromString(double_test_source);
const expectedImports = {
    "multiply_test.aleo": "program multiply_test.aleo;\n\nfunction multiply:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    mul r0 r1 into r2;\n    output r2 as u32.private;\n"
}

// Imports can be fetched using the program ID, source code, or program object
let programImports = await networkClient.getProgramImports("double_test.aleo");
assert.deepStrictEqual(programImports, expectedImports);

// Using the program source code
programImports = await networkClient.getProgramImports(double_test_source);
assert.deepStrictEqual(programImports, expectedImports);

// Using the program object
programImports = await networkClient.getProgramImports(double_test);
assert.deepStrictEqual(programImports, expectedImports);
```

<a name="AleoNetworkClient+getProgramImportNames"></a>

---

### getProgramImportNames

<p>Get a list of the program names that a program imports.</p>

```javascript
networkClient.getProgramImportNames(inputProgram) ⇒ Array.<string>
```

| Param | Type | Description |
| --- | --- | --- |
| inputProgram | <code>Program</code> | The program id or program source code to get the imports of |
| *return* | <code>Array.&lt;string&gt;</code> | 

**Example**  
```js
let mappings = networkClient.getProgramImportNames("double_test.aleo");
const expectedImportsNames = ["multiply_test.aleo"];
assert.deepStrictEqual(programImportsNames, expectedImportsNames);
```

<a name="AleoNetworkClient+getDeploymentTransactionIDForProgram"></a>

---

### getDeploymentTransactionIDForProgram

<p>Returns the deployment transaction id associated with the specified program.</p>

```javascript
networkClient.getDeploymentTransactionIDForProgram(program) ⇒ TransactionJSON
```

| Param | Type |
| --- | --- |
| program | <code>Program</code> | 
| *return* | <code>TransactionJSON</code> | 

**Example**  
```js
let program = networkClient.getDeploymentTransactionIDForProgram("foo.aleo");
```

<a name="AleoNetworkClient+getDeploymentTransactionForProgram"></a>

---

### getDeploymentTransactionForProgram

<p>Returns the deployment transaction associated with a specified program.</p>

```javascript
networkClient.getDeploymentTransactionForProgram(program) ⇒ TransactionJSON
```

| Param | Type |
| --- | --- |
| program | <code>Program</code> | 
| *return* | <code>TransactionJSON</code> | 

**Example**  
```js
let program = networkClient.getDeploymentTransactionForProgram("foo.aleo");
```

<a name="AleoNetworkClient+getDeploymentTransactionObjectForProgram"></a>

---

### getDeploymentTransactionObjectForProgram

<p>Returns the deployment transaction associated with a specified program as a wasm object.</p>

```javascript
networkClient.getDeploymentTransactionObjectForProgram(program) ⇒ TransactionJSON
```

| Param | Type |
| --- | --- |
| program | <code>Program</code> | 
| *return* | <code>TransactionJSON</code> | 

<a name="AleoNetworkClient+getProgramMappingNames"></a>

---

### getProgramMappingNames

<p>Returns the names of the mappings of a program.</p>

```javascript
networkClient.getProgramMappingNames(programId) ⇒ Promise.<Array.<string>>
```

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | The program ID to get the mappings of (e.g. "credits.aleo") |
| *return* | <code>Promise.&lt;Array.&lt;string&gt;&gt;</code> | 

**Example**  
```js
let mappings = await networkClient.getProgramMappingNames("credits.aleo");
const expectedMappings = [
  "committee",
  "delegated",
  "metadata",
  "bonded",
  "unbonding",
  "account",
  "withdraw"
];
assert.deepStrictEqual(mappings, expectedMappings);
```

<a name="AleoNetworkClient+getProgramMappingValue"></a>

---

### getProgramMappingValue

<p>Returns the value of a program's mapping for a specific key.</p>

```javascript
networkClient.getProgramMappingValue(programId, mappingName, key) ⇒ Promise.<string>
```

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | The program ID to get the mapping value of (e.g. "credits.aleo") |
| mappingName | <code>string</code> | The name of the mapping to get the value of (e.g. "account") |
| key | <code>string</code> | The key of the mapping to get the value of (e.g. "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px") |
| *return* | <code>Promise.&lt;string&gt;</code> | 

**Example**  
```js
// Get public balance of an account
let mappingValue = await networkClient.getProgramMappingValue("credits.aleo", "account", "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px");
const expectedValue = "0u64";
assert.equal(mappingValue, expectedValue);
```

<a name="AleoNetworkClient+getProgramMappingPlaintext"></a>

---

### getProgramMappingPlaintext

<p>Returns the value of a mapping as a wasm Plaintext object. Returning an object in this format allows it to be converted to a Js type and for its internal members to be inspected if it's a struct or array.</p>

```javascript
networkClient.getProgramMappingPlaintext(programId, mappingName, key) ⇒ Promise.<string>
```

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | The program ID to get the mapping value of (e.g. "credits.aleo") |
| mappingName | <code>string</code> | The name of the mapping to get the value of (e.g. "account") |
| key | <code>string</code> | The key of the mapping to get the value of (e.g. "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px") |
| *return* | <code>Promise.&lt;string&gt;</code> | 

**Example**  
```js
// Get the bond state as an account.
const unbondedState = await networkClient.getProgramMappingPlaintext("credits.aleo", "bonded", "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px");

// Get the two members of the object individually.
const validator = unbondedState.getMember("validator");
const microcredits = unbondedState.getMember("microcredits");

// Ensure the expected values are correct.
assert.equal(validator, "aleo1u6940v5m0fzud859xx2c9tj2gjg6m5qrd28n636e6fdd2akvfcgqs34mfd");
assert.equal(microcredits, BigInt("9007199254740991"));

// Get a JS object representation of the unbonded state.
const unbondedStateObject = unbondedState.toObject();

const expectedState = {
    validator: "aleo1u6940v5m0fzud859xx2c9tj2gjg6m5qrd28n636e6fdd2akvfcgqs34mfd",
    microcredits: BigInt("9007199254740991")
};
assert.equal(unbondedState, expectedState);
```

<a name="AleoNetworkClient+getLatestBlock"></a>

---

### getLatestBlock

<p>Returns the contents of the latest block.</p>

```javascript
networkClient.getLatestBlock() ⇒ Promise.<BlockJSON>
```

| Param | Type |
| --- | --- |
| *return* | <code>Promise.&lt;BlockJSON&gt;</code> | 

**Example**  
```js
let latestHeight = await networkClient.getLatestBlock();
```

<a name="AleoNetworkClient+getLatestHeight"></a>

---

### getLatestHeight

<p>Returns the latest block height.</p>

```javascript
networkClient.getLatestHeight() ⇒ Promise.<number>
```

| Param | Type |
| --- | --- |
| *return* | <code>Promise.&lt;number&gt;</code> | 

**Example**  
```js
let latestHeight = await networkClient.getLatestHeight();
```

<a name="AleoNetworkClient+getLatestCommittee"></a>

---

### getLatestCommittee

<p>Returns the latest committee.</p>

```javascript
networkClient.getLatestCommittee() ⇒ Promise.<object>
```

| Param | Type |
| --- | --- |
| *return* | <code>Promise.&lt;object&gt;</code> | 

**Example**  
```js
let latestCommittee = await networkClient.getLatestCommittee();
```

<a name="AleoNetworkClient+getStateRoot"></a>

---

### getStateRoot

<p>Returns the latest state/merkle root of the Aleo blockchain.</p>

```javascript
networkClient.getStateRoot() ⇒ Promise.<string>
```

| Param | Type |
| --- | --- |
| *return* | <code>Promise.&lt;string&gt;</code> | 

**Example**  
```js
let stateRoot = await networkClient.getStateRoot();
```

<a name="AleoNetworkClient+getTransaction"></a>

---

### getTransaction

<p>Returns a transaction by its unique identifier.</p>

```javascript
networkClient.getTransaction(id) ⇒ Promise.<TransactionJSON>
```

| Param | Type |
| --- | --- |
| id | <code>string</code> | 
| *return* | <code>Promise.&lt;TransactionJSON&gt;</code> | 

**Example**  
```js
let transaction = await networkClient.getTransaction("at1handz9xjrqeynjrr0xay4pcsgtnczdksz3e584vfsgaz0dh0lyxq43a4wj");
```

<a name="AleoNetworkClient+getTransactionObject"></a>

---

### getTransactionObject

<p>Returns a transaction as a wasm object. Getting a transaction of this type will allow the ability for the inputs, outputs, and records to be searched for and displayed.</p>

```javascript
networkClient.getTransactionObject(transactionId) ⇒ Promise.<Transaction>
```

| Param | Type |
| --- | --- |
| transactionId | <code>string</code> | 
| *return* | <code>Promise.&lt;Transaction&gt;</code> | 

**Example**  
```js
const transactionObject = await networkClient.getTransactionObject("at1handz9xjrqeynjrr0xay4pcsgtnczdksz3e584vfsgaz0dh0lyxq43a4wj");
// Get the transaction inputs as a JS array.
const transactionOutputs = transactionObject.inputs(true);

// Get the transaction outputs as a JS object.
const transactionInputs = transactionObject.outputs(true);

// Get any records generated in transitions in the transaction as a JS object.
const records = transactionObject.records();

// Get the transaction type.
const transactionType = transactionObject.transactionType();
assert.equal(transactionType, "Execute");

// Get a JS representation of all inputs, outputs, and transaction metadata.
const transactionSummary = transactionObject.summary();
```

<a name="AleoNetworkClient+getTransactions"></a>

---

### getTransactions

<p>Returns the transactions present at the specified block height.</p>

```javascript
networkClient.getTransactions(height) ⇒ Promise.<Array.<ConfirmedTransactionJSON>>
```

| Param | Type |
| --- | --- |
| height | <code>number</code> | 
| *return* | <code>Promise.&lt;Array.&lt;ConfirmedTransactionJSON&gt;&gt;</code> | 

**Example**  
```js
let transactions = await networkClient.getTransactions(654);
```

<a name="AleoNetworkClient+getTransactionsInMempool"></a>

---

### getTransactionsInMempool

<p>Returns the transactions in the memory pool. This method requires access to a validator's REST API.</p>

```javascript
networkClient.getTransactionsInMempool() ⇒ Promise.<Array.<TransactionJSON>>
```

| Param | Type |
| --- | --- |
| *return* | <code>Promise.&lt;Array.&lt;TransactionJSON&gt;&gt;</code> | 

**Example**  
```js
let transactions = await networkClient.getTransactionsInMempool();
```

<a name="AleoNetworkClient+getTransitionId"></a>

---

### getTransitionId

<p>Returns the transition ID of the transition corresponding to the ID of the input or output.</p>

```javascript
networkClient.getTransitionId(inputOrOutputID) ⇒ Promise.<string>
```

| Param | Type | Description |
| --- | --- | --- |
| inputOrOutputID | <code>string</code> | ID of the input or output. |
| *return* | <code>Promise.&lt;string&gt;</code> | 

**Example**  
```js
let transition = await networkClient.getTransitionId("2429232855236830926144356377868449890830704336664550203176918782554219952323field");
```

<a name="AleoNetworkClient+submitTransaction"></a>

---

### submitTransaction

<p>Submit an execute or deployment transaction to the Aleo network.</p>

```javascript
networkClient.submitTransaction(transaction) ⇒ string
```

| Param | Type | Description |
| --- | --- | --- |
| transaction | <code>Transaction</code> | The transaction to submit to the network |
| *return* | <code>string</code> | 

<a name="AleoNetworkClient+submitSolution"></a>

---

### submitSolution

<p>Submit a solution to the Aleo network.</p>

```javascript
networkClient.submitSolution(solution) ⇒ Promise.<string>
```

| Param | Type | Description |
| --- | --- | --- |
| solution | <code>string</code> | The string representation of the solution desired to be submitted to the network. |
| *return* | <code>Promise.&lt;string&gt;</code> |
