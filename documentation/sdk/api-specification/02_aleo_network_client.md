---
title: Aleo Network Client
sidebar_label: Aleo Network Client
---

<a name="AleoNetworkClient"></a>

## Overview
Client library that encapsulates REST calls to publicly exposed endpoints of Aleo nodes. The methods provided in this allow users to query public information from the Aleo blockchain and submit transactions to the network.

**Kind**: global class  

* AleoNetworkClient
    * _constructor_
        * [new AleoNetworkClient(host, options)](#new_AleoNetworkClient_new)
    * _instance_
        * [.setHost(host)](#AleoNetworkClient+setHost)
        * [.setAccount(account)](#AleoNetworkClient+setAccount)
        * [.getAccount()](#AleoNetworkClient+getAccount) ⇒ <code>Account</code> \| <code>undefined</code>
        * [.setVerboseErrors(verboseErrors)](#AleoNetworkClient+setVerboseErrors)
        * [.setHeader(headerName, value)](#AleoNetworkClient+setHeader)
        * [.removeHeader(headerName)](#AleoNetworkClient+removeHeader)
        * [.fetchData(url)](#AleoNetworkClient+fetchData) ⇒ <code>Promise.&lt;T&gt;</code>
        * [.fetchRaw(url)](#AleoNetworkClient+fetchRaw) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.findRecords(startHeight, endHeight, unspent, programs, amounts, maxMicrocredits, nonces, privateKey)](#AleoNetworkClient+findRecords) ⇒ <code>Promise.&lt;Array.&lt;RecordPlaintext&gt;&gt;</code>
        * [.findUnspentRecords(startHeight, endHeight, programs, amounts, maxMicrocredits, nonces, privateKey)](#AleoNetworkClient+findUnspentRecords) ⇒ <code>Promise.&lt;Array.&lt;RecordPlaintext&gt;&gt;</code>
        * [.getBlock(height)](#AleoNetworkClient+getBlock) ⇒ <code>Promise.&lt;BlockJSON&gt;</code>
        * [.getBlockByHash(blockHash)](#AleoNetworkClient+getBlockByHash) ⇒ <code>Promise.&lt;BlockJSON&gt;</code>
        * [.getBlockRange(start, end)](#AleoNetworkClient+getBlockRange) ⇒ <code>Promise.&lt;Array.&lt;BlockJSON&gt;&gt;</code>
        * [.getProgram(programId, edition)](#getprogram) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.getLatestProgramEdition(programId)](#getlatestprogramedition) ⇒ <code>Promise.&lt;number&gt;</code>
        * [.getProgramObject(inputProgram, edition)](#getprogramobject) ⇒ <code>Promise.&lt;Program&gt;</code>
        * [.getProgramImports(inputProgram)](#getprogramimports) ⇒ <code>Promise.&lt;ProgramImports&gt;</code>
        * [.getProgramImportNames(inputProgram)](#getprogramimportnames) ⇒ <code>Array.&lt;string&gt;</code>
        * [.getDeploymentTransactionIDForProgram(program)](#getdeploymenttransactionidforprogram) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.getDeploymentTransactionForProgram(program)](#getdeploymenttransactionforprogram) ⇒ <code>Promise.&lt;TransactionJSON&gt;</code>
        * [.getDeploymentTransactionObjectForProgram(program)](#getdeploymenttransactionobjectforprogram) ⇒ <code>Promise.&lt;Transaction&gt;</code>
        * [.getProgramMappingNames(programId)](#getprogrammappingnames) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
        * [.getProgramMappingValue(programId, mappingName, key)](#getprogrammappingvalue) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.getProgramMappingPlaintext(programId, mappingName, key)](#getprogrammappingplaintext) ⇒ <code>Promise.&lt;Plaintext&gt;</code>
        * [.getPublicBalance(address)](#getpublicbalance) ⇒ <code>Promise.&lt;number&gt;</code>
        * [.getLatestBlock()](#getlatestblock) ⇒ <code>Promise.&lt;BlockJSON&gt;</code>
        * [.getLatestHeight()](#getlatestheight) ⇒ <code>Promise.&lt;number&gt;</code>
        * [.getLatestBlockHash()](#getlatestblockhash) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.getLatestCommittee()](#getlatestcommittee) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getCommitteeByBlockHeight(blockHeight)](#getcommitteebyblockheight) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getStateRoot()](#getstateroot) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.getTransaction(id)](#gettransaction) ⇒ <code>Promise.&lt;TransactionJSON&gt;</code>
        * [.getConfirmedTransaction(transactionId)](#getconfirmedtransaction) ⇒ <code>Promise.&lt;ConfirmedTransactionJSON&gt;</code>
        * [.getTransactionObject(transactionId)](#gettransactionobject) ⇒ <code>Promise.&lt;Transaction&gt;</code>
        * [.getTransactions(height)](#gettransactions) ⇒ <code>Promise.&lt;Array.&lt;ConfirmedTransactionJSON&gt;&gt;</code>
        * [.getTransactionsByBlockHash(blockHash)](#gettransactionsbyblockhash) ⇒ <code>Promise.&lt;Array.&lt;ConfirmedTransactionJSON&gt;&gt;</code>
        * [.getTransactionsInMempool()](#gettransactionsinmempool) ⇒ <code>Promise.&lt;Array.&lt;TransactionJSON&gt;&gt;</code>
        * [.getTransitionId(inputOrOutputID)](#gettransitionid) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.submitTransaction(transaction)](#submittransaction) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.submitSolution(solution)](#submitsolution) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.submitProvingRequest(options)](#submitprovingrequest) ⇒ <code>Promise.&lt;ProvingResponse&gt;</code>
        * [.waitForTransactionConfirmation(transactionId, checkInterval, timeout)](#waitfortransactionconfirmation) ⇒ <code>Promise.&lt;ConfirmedTransactionJSON&gt;</code>

## Constructor

<a name="new_AleoNetworkClient_new"></a>

### AleoNetworkClient

<p>Create a new AleoNetworkClient instance to interact with the Aleo network.</p>

```javascript
new AleoNetworkClient(host, options)
```

| Param | Type | Description |
| --- | --- | --- |
| host | <code>string</code> | The URL of the Aleo node to connect to |
| options | <code>AleoNetworkClientOptions</code> | Optional configuration options |

#### Interface

```typescript
interface AleoNetworkClientOptions {
    headers?: Record<string, string>;
}
```

| Property | Type | Description |
| --- | --- | --- |
| headers | <code>Record&lt;string, string&gt;</code> | Optional headers to include in all requests |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

// Connection to a local node
const localConnection = new AleoNetworkClient("http://localhost:3030");

// Connection to a public beacon node
const publicConnection = new AleoNetworkClient("https://api.explorer.provable.com/v1");

// Connection with custom headers
const customConnection = new AleoNetworkClient("https://api.explorer.provable.com/v1", {
    headers: { "Authorization": "Bearer token" }
});
```

<a name="AleoNetworkClient+setHost"></a>

## Methods

### setHost {#AleoNetworkClient+setHost}

<p>Set a new host for the networkClient</p>

```javascript
networkClient.setHost(host)
```

| Param | Type | Description |
| --- | --- | --- |
| host | <code>string</code> | The URL of the Aleo node to connect to |

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

| Param | Type | Description |
| --- | --- | --- |
| account | <code>Account</code> | The account to use for networkClient calls |

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
networkClient.getAccount() ⇒ Account | undefined
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Account</code> \| <code>undefined</code> | The account if set, otherwise undefined |

**Example**  
```js
let account = networkClient.getAccount();
```

---

<a name="AleoNetworkClient+setVerboseErrors"></a>

### setVerboseErrors {#AleoNetworkClient+setVerboseErrors}

<p>Set verbose errors to true or false for the AleoNetworkClient. When set to true, if submitTransaction fails, the failure responses will report descriptive information as to why the transaction failed.</p>

```javascript
networkClient.setVerboseErrors(verboseErrors)
```

| Param | Type | Description |
| --- | --- | --- |
| verboseErrors | <code>boolean</code> | Set verbose error mode to true or false |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

// Create a networkClient
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");

// Set verbose mode to true
networkClient.setVerboseErrors(true);
```

---

<a name="AleoNetworkClient+setHeader"></a>

### setHeader {#AleoNetworkClient+setHeader}

<p>Set a header in the AleoNetworkClient's header map</p>

```javascript
networkClient.setHeader(headerName, value)
```

| Param | Type | Description |
| --- | --- | --- |
| headerName | <code>string</code> | The name of the header to set |
| value | <code>string</code> | The header value |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

// Create a networkClient
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");

// Set the value of the `Accept-Language` header to `en-US`
networkClient.setHeader('Accept-Language', 'en-US');
```

---

<a name="AleoNetworkClient+removeHeader"></a>

### removeHeader {#AleoNetworkClient+removeHeader}

<p>Remove a header from the AleoNetworkClient's header map</p>

```javascript
networkClient.removeHeader(headerName)
```

| Param | Type | Description |
| --- | --- | --- |
| headerName | <code>string</code> | The name of the header to remove |

---

<a name="AleoNetworkClient+fetchData"></a>

---

### fetchData {#AleoNetworkClient+fetchData}

<p>Fetches data from the Aleo network and returns it as a JSON object.</p>

```javascript
networkClient.fetchData(url) ⇒ Promise.<Type>
```

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to fetch data from |
| *return* | <code>Promise.&lt;Type&gt;</code> | A JSON object parsed from the response |

<a name="AleoNetworkClient+fetchRaw"></a>

---

### fetchRaw {#AleoNetworkClient+fetchRaw}

<p>Fetches data from the Aleo network and returns it as an unparsed string. This method should be used when it is desired to reconstitute data returned from the network into a WASM object.</p>

```javascript
networkClient.fetchRaw(url) ⇒ Promise.<string>
```

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to fetch data from |
| *return* | <code>Promise.&lt;string&gt;</code> | The raw response as an unparsed string |

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
| *return* | <code>Promise.&lt;Array.&lt;RecordPlaintext&gt;&gt;</code> | Array of decrypted record plaintexts |

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
| *return* | <code>Promise.&lt;Array.&lt;RecordPlaintext&gt;&gt;</code> | Array of decrypted unspent record plaintexts |

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

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | The block height to fetch |
| *return* | <code>Promise.&lt;BlockJSON&gt;</code> | A JSON representation of the block |

**Example**  
```js
let block = await networkClient.getBlock(1234);
```

<a name="AleoNetworkClient+getBlockByHash"></a>

---

### getBlockByHash {#AleoNetworkClient+getBlockByHash}

<p>Returns the contents of the block with the specified hash.</p>

```javascript
networkClient.getBlockByHash(blockHash) ⇒ Promise.<BlockJSON>
```

| Param | Type | Description |
| --- | --- | --- |
| blockHash | <code>string</code> | The hash of the block to fetch |
| *return* | <code>Promise.&lt;BlockJSON&gt;</code> | A javascript object representation of the block matching the hash |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const block = await networkClient.getBlockByHash("ab19dklwl9vp63zu3hwg57wyhvmqf92fx5g8x0t6dr72py8r87pxupqfne5t9");
```

<a name="AleoNetworkClient+getBlockRange"></a>

---

### getBlockRange {#AleoNetworkClient+getBlockRange}

<p>Returns a range of blocks between the specified block heights. A maximum of 50 blocks can be fetched at a time.</p>

```javascript
networkClient.getBlockRange(start, end) ⇒ Promise.<Array.<BlockJSON>>
```

| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> | The starting block height |
| end | <code>number</code> | The ending block height |
| *return* | <code>Promise.&lt;Array.&lt;BlockJSON&gt;&gt;</code> | Array of blocks in the specified range |

**Example**  
```js
let blockRange = await networkClient.getBlockRange(2050, 2100);
```

<a name="AleoNetworkClient+getProgram"></a>

---

### getProgram

<p>Returns the source code of a program given a program ID.</p>

```javascript
networkClient.getProgram(programId, edition) ⇒ Promise.<string>
```

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | The program ID of a program deployed to the Aleo Network |
| edition | <code>number</code> \| <code>undefined</code> | Optional edition of the program to fetch. When undefined, fetches the latest version. |
| *return* | <code>Promise.&lt;string&gt;</code> | Source code of the program |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const program = await networkClient.getProgram("hello_hello.aleo");
const expectedSource = "program hello_hello.aleo;\n\nfunction hello:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n"
assert.equal(program, expectedSource);
```

<a name="AleoNetworkClient+getLatestProgramEdition"></a>

---

### getLatestProgramEdition

<p>Returns the current program edition deployed on the Aleo network.</p>

```javascript
networkClient.getLatestProgramEdition(programId) ⇒ Promise.<number>
```

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | The program ID of a program deployed to the Aleo Network |
| *return* | <code>Promise.&lt;number&gt;</code> | The edition of the program |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const programEdition = await networkClient.getLatestProgramEdition("hello_hello.aleo");
assert.equal(programEdition, 1);
```

<a name="AleoNetworkClient+getProgramObject"></a>

---

### getProgramObject

<p>Returns a program object from a program ID or program source code.</p>

```javascript
networkClient.getProgramObject(inputProgram, edition) ⇒ Promise.<Program>
```

| Param | Type | Description |
| --- | --- | --- |
| inputProgram | <code>string</code> | The program ID or program source code of a program deployed to the Aleo Network |
| edition | <code>number</code> \| <code>undefined</code> | Optional edition of the program to fetch. When undefined, fetches the latest version. |
| *return* | <code>Promise.&lt;Program&gt;</code> | Source code of the program |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const programID = "hello_hello.aleo";
const programSource = "program hello_hello.aleo;\n\nfunction hello:\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n"

// Get program object from program ID or program source code
const programObjectFromID = await networkClient.getProgramObject(programID);
const programObjectFromSource = await networkClient.getProgramObject(programSource);

// Both program objects should be equal
assert(programObjectFromID.to_string() === programObjectFromSource.to_string());
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
| *return* | <code>Array.&lt;string&gt;</code> | Array of program names that the input program imports |

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

| Param | Type | Description |
| --- | --- | --- |
| program | <code>Program</code> | The program ID to look up |
| *return* | <code>Promise.&lt;string&gt;</code> | The transaction ID of the deployment |

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

| Param | Type | Description |
| --- | --- | --- |
| program | <code>Program</code> | The program ID to look up |
| *return* | <code>Promise.&lt;TransactionJSON&gt;</code> | The deployment transaction JSON |

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

| Param | Type | Description |
| --- | --- | --- |
| program | <code>Program</code> | The program ID to look up |
| *return* | <code>Promise.&lt;Transaction&gt;</code> | The deployment transaction as a WASM object |

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
| *return* | <code>Promise.&lt;Array.&lt;string&gt;&gt;</code> | Array of mapping names in the program |

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
| *return* | <code>Promise.&lt;string&gt;</code> | The value at the specified key as a string |

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
| *return* | <code>Promise.&lt;Plaintext&gt;</code> | The value as a Plaintext WASM object |

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
assert.deepEqual(unbondedStateObject, expectedState);
```

<a name="AleoNetworkClient+getPublicBalance"></a>

---

### getPublicBalance

<p>Returns the public balance of an address from the account mapping in credits.aleo</p>

```javascript
networkClient.getPublicBalance(address) ⇒ Promise.<number>
```

| Param | Type | Description |
| --- | --- | --- |
| address | <code>Address</code> \| <code>string</code> | A string or wasm object representing an address |
| *return* | <code>Promise.&lt;number&gt;</code> | The public balance of the address in microcredits |

**Example**  
```js
import { AleoNetworkClient, Account } from "@provablehq/sdk/mainnet.js";

// Create a network client.
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");

// Get the balance of an account from either an address object or address string.
const account = Account.fromCiphertext(process.env.ciphertext, process.env.password);
const publicBalance = await networkClient.getPublicBalance(account.address());
const publicBalanceFromString = await networkClient.getPublicBalance(account.address().to_string());
assert(publicBalance === publicBalanceFromString);
```

<a name="AleoNetworkClient+getLatestBlock"></a>

---

### getLatestBlock

<p>Returns the contents of the latest block.</p>

```javascript
networkClient.getLatestBlock() ⇒ Promise.<BlockJSON>
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Promise.&lt;BlockJSON&gt;</code> | The latest block as JSON |

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

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Promise.&lt;number&gt;</code> | The latest block height |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const latestHeight = await networkClient.getLatestHeight();
```

<a name="AleoNetworkClient+getLatestBlockHash"></a>

---

### getLatestBlockHash

<p>Returns the latest block hash.</p>

```javascript
networkClient.getLatestBlockHash() ⇒ Promise.<string>
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Promise.&lt;string&gt;</code> | The latest block hash |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const latestHash = await networkClient.getLatestBlockHash();
```

<a name="AleoNetworkClient+getLatestCommittee"></a>

---

### getLatestCommittee

<p>Returns the latest committee.</p>

```javascript
networkClient.getLatestCommittee() ⇒ Promise.<object>
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Promise.&lt;object&gt;</code> | The current validator committee |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const latestCommittee = await networkClient.getLatestCommittee();
```

<a name="AleoNetworkClient+getCommitteeByBlockHeight"></a>

---

### getCommitteeByBlockHeight

<p>Returns the committee at the specified block height.</p>

```javascript
networkClient.getCommitteeByBlockHeight(blockHeight) ⇒ Promise.<object>
```

| Param | Type | Description |
| --- | --- | --- |
| blockHeight | <code>number</code> | The height of the block to fetch the committee for |
| *return* | <code>Promise.&lt;object&gt;</code> | A javascript object containing the committee |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const committee = await networkClient.getCommitteeByBlockHeight(1234);
```

<a name="AleoNetworkClient+getStateRoot"></a>

---

### getStateRoot

<p>Returns the latest state/merkle root of the Aleo blockchain.</p>

```javascript
networkClient.getStateRoot() ⇒ Promise.<string>
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Promise.&lt;string&gt;</code> | The current state/merkle root |

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

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The transaction ID to look up |
| *return* | <code>Promise.&lt;TransactionJSON&gt;</code> | The transaction as JSON |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const transaction = await networkClient.getTransaction("at1handz9xjrqeynjrr0xay4pcsgtnczdksz3e584vfsgaz0dh0lyxq43a4wj");
```

<a name="AleoNetworkClient+getConfirmedTransaction"></a>

---

### getConfirmedTransaction

<p>Returns a confirmed transaction by its unique identifier.</p>

```javascript
networkClient.getConfirmedTransaction(transactionId) ⇒ Promise.<ConfirmedTransactionJSON>
```

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>string</code> | The transaction ID to fetch |
| *return* | <code>Promise.&lt;ConfirmedTransactionJSON&gt;</code> | A json object containing the confirmed transaction |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const transaction = await networkClient.getConfirmedTransaction("at1handz9xjrqeynjrr0xay4pcsgtnczdksz3e584vfsgaz0dh0lyxq43a4wj");
assert.equal(transaction.status, "accepted");
```

<a name="AleoNetworkClient+getTransactionObject"></a>

---

### getTransactionObject

<p>Returns a transaction as a wasm object. Getting a transaction of this type will allow the ability for the inputs, outputs, and records to be searched for and displayed.</p>

```javascript
networkClient.getTransactionObject(transactionId) ⇒ Promise.<Transaction>
```

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>string</code> | The transaction ID to look up |
| *return* | <code>Promise.&lt;Transaction&gt;</code> | The transaction as a WASM object |

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

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | The block height to fetch transactions for |
| *return* | <code>Promise.&lt;Array.&lt;ConfirmedTransactionJSON&gt;&gt;</code> | Array of confirmed transactions |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const transactions = await networkClient.getTransactions(654);
```

<a name="AleoNetworkClient+getTransactionsByBlockHash"></a>

---

### getTransactionsByBlockHash

<p>Returns the confirmed transactions present in the block with the specified block hash.</p>

```javascript
networkClient.getTransactionsByBlockHash(blockHash) ⇒ Promise.<Array.<ConfirmedTransactionJSON>>
```

| Param | Type | Description |
| --- | --- | --- |
| blockHash | <code>string</code> | The block hash to fetch the confirmed transactions at |
| *return* | <code>Promise.&lt;Array.&lt;ConfirmedTransactionJSON&gt;&gt;</code> | An array of confirmed transactions (in JSON format) for the block hash |

**Example**  
```js
import { AleoNetworkClient } from "@provablehq/sdk/mainnet.js";

const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const transactions = await networkClient.getTransactionsByBlockHash("ab19dklwl9vp63zu3hwg57wyhvmqf92fx5g8x0t6dr72py8r87pxupqfne5t9");
```

<a name="AleoNetworkClient+getTransactionsInMempool"></a>

---

### getTransactionsInMempool

<p>Returns the transactions in the memory pool. This method requires access to a validator's REST API.</p>

```javascript
networkClient.getTransactionsInMempool() ⇒ Promise.<Array.<TransactionJSON>>
```

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Promise.&lt;Array.&lt;TransactionJSON&gt;&gt;</code> | Array of transactions currently in the mempool |

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
| *return* | <code>Promise.&lt;string&gt;</code> | The transition ID containing the input or output |

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
| *return* | <code>Promise.&lt;string&gt;</code> | The transaction ID of the submitted transaction |

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
| *return* | <code>Promise.&lt;string&gt;</code> | The solution id of the submitted solution or the resulting error |

<a name="AleoNetworkClient+submitProvingRequest"></a>

---

### submitProvingRequest

<p>Submit a ProvingRequest to a remote proving service for delegated proving. If the broadcast flag of the ProvingRequest is set to true, the remote service will attempt to broadcast the result Transaction on behalf of the requestor.</p>

```javascript
networkClient.submitProvingRequest(options) ⇒ Promise.<ProvingResponse>
```

| Param | Type | Description |
| --- | --- | --- |
| options | <code>DelegatedProvingParams</code> | The optional parameters required to submit a proving request |
| *return* | <code>Promise.&lt;ProvingResponse&gt;</code> | The ProvingResponse containing the transaction result and the result of the broadcast if the broadcast flag was set to true |

#### DelegatedProvingParams Interface

| Property | Type | Description |
| --- | --- | --- |
| provingRequest | <code>ProvingRequest</code> \| <code>string</code> | The proving request being submitted to the network |
| url | <code>string</code> | Optional URL of the delegated proving service |
| apiKey | <code>string</code> | Optional API key used for generating a JWT |
| consumerId | <code>string</code> | Optional consumer ID associated with the API key |
| jwtData | <code>JWTData</code> | Optional JWT token used for authenticating with the proving service |

<a name="AleoNetworkClient+waitForTransactionConfirmation"></a>

---

### waitForTransactionConfirmation

<p>Await a submitted transaction to be confirmed or rejected on the Aleo network.</p>

```javascript
networkClient.waitForTransactionConfirmation(transactionId, checkInterval, timeout) ⇒ Promise.<ConfirmedTransactionJSON>
```

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>string</code> | The transaction ID to wait for confirmation |
| checkInterval | <code>number</code> | The interval in milliseconds to check for confirmation (default: 2000) |
| timeout | <code>number</code> | The maximum time in milliseconds to wait for confirmation (default: 45000) |
| *return* | <code>Promise.&lt;ConfirmedTransactionJSON&gt;</code> | The confirmed transaction object that returns if the transaction is confirmed |

**Example**  
```js
import { AleoNetworkClient, Account, ProgramManager } from "@provablehq/sdk/mainnet.js";

// Create a network client and program manager.
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const programManager = new ProgramManager("https://api.explorer.provable.com/v1");

// Set the account for the program manager.
programManager.setAccount(Account.fromCiphertext(process.env.ciphertext, process.env.password));

// Build a transfer transaction.
const tx = await programManager.buildTransferPublicTransaction(100, "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px", 0);

// Submit the transaction to the network.
const transactionId = await networkClient.submitTransaction(tx);

// Wait for the transaction to be confirmed.
const transaction = await networkClient.waitForTransactionConfirmation(transactionId);
```
