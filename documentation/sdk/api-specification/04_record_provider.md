---
id: record_provider
title: Record Provider
sidebar_label: Record Provider
---

## Overview

A record provider implementation that uses the official Aleo API to find records for usage in program execution and
deployment, wallet functionality, and other use cases.

**Kind**: global class  

* RecordProvider (Interface)
    * _interface methods_
        * [.encryptedRecords(recordsFilter, responseFilter)](#encryptedrecords) ⇒ <code>Promise.&lt;EncryptedRecord[]&gt;</code>
        * [.checkSerialNumbers(serialNumbers)](#checkserialnumbers) ⇒ <code>Promise.&lt;Record&lt;string, boolean&gt;&gt;</code>
        * [.checkTags(tags)](#checktags) ⇒ <code>Promise.&lt;Record&lt;string, boolean&gt;&gt;</code>
        * [.findCreditsRecord(microcredits, searchParameters)](#findcreditsrecord) ⇒ <code>Promise.&lt;OwnedRecord&gt;</code>
        * [.findCreditsRecords(microcreditAmounts, searchParameters)](#findcreditsrecords) ⇒ <code>Promise.&lt;OwnedRecord[]&gt;</code>
        * [.findRecord(searchParameters)](#findrecord) ⇒ <code>Promise.&lt;OwnedRecord&gt;</code>
        * [.findRecords(searchParameters)](#findrecords) ⇒ <code>Promise.&lt;OwnedRecord[]&gt;</code>

* NetworkRecordProvider
    * _constructor_
        * [new NetworkRecordProvider(account, networkClient)](#new_NetworkRecordProvider_new)
    * _instance_
        * [.setAccount(account)](#setaccount)
        * [.findCreditsRecords(microcredits, searchParameters)](#findcreditsrecords) ⇒ <code>Promise.&lt;OwnedRecord[]&gt;</code>
        * [.findCreditsRecord(microcredits, searchParameters)](#findcreditsrecord) ⇒ <code>Promise.&lt;OwnedRecord&gt;</code>
        * [.findRecord(searchParameters)](#findrecord) ⇒ <code>Promise.&lt;OwnedRecord&gt;</code>
        * [.findRecords(searchParameters)](#findrecords) ⇒ <code>Promise.&lt;OwnedRecord[]&gt;</code>

* BlockHeightSearch
    * _constructor_
        * [new BlockHeightSearch(startHeight, endHeight, unspent)](#new_BlockHeightSearch_new)

## Constructor

<a name="new_NetworkRecordProvider_new"></a>

### NetworkRecordProvider

<p>Create a new NetworkRecordProvider instance to find records for program execution and deployment.</p>

```javascript
new NetworkRecordProvider(account, networkClient)
```

| Param | Type | Description |
| --- | --- | --- |
| account | <code>Account</code> | The account to use for searching for records |
| networkClient | <code>AleoNetworkClient</code> | The network client to use for API calls |

**Example**  
```js
import { AleoNetworkClient, Account, NetworkRecordProvider } from "@provablehq/sdk/mainnet.js";

// Create a new NetworkRecordProvider
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const account = new Account();
const recordProvider = new NetworkRecordProvider(account, networkClient);
```

## RecordProvider Interface

The RecordProvider interface defines the contract for finding records for use in deployment and execution
transactions on the Aleo Network. A default implementation is provided by the NetworkRecordProvider class. However,
a custom implementation can be provided (say if records are synced locally to a database from the network) by
implementing this interface.

### encryptedRecords

Find encrypted records from the chosen provider.

```javascript
encryptedRecords(recordsFilter, responseFilter) ⇒ Promise.<EncryptedRecord[]>
```

Parameters | Type | Description
--- | --- | ---
__recordsFilter__ | `RecordSearchParams` | *The filter used to find the records*
__responseFilter__ | `RecordsResponseFilter` | *Optional filter used to filter the response*
__*return*__ | `Promise.<EncryptedRecord[]>` | *The encrypted records*

---

### checkSerialNumbers

Check if a list of serial numbers exist in the chosen provider.

```javascript
checkSerialNumbers(serialNumbers) ⇒ Promise.<Record<string, boolean>>
```

Parameters | Type | Description
--- | --- | ---
__serialNumbers__ | `string[]` | *The serial numbers to check*
__*return*__ | `Promise.<Record<string, boolean>>` | *Map of Aleo Record serial numbers and whether they appeared in any inputs on chain. If boolean corresponding to the Serial Number has a true value, that Record is considered spent by the Aleo Network.*

---

### checkTags

Check if a list of tags exist in the chosen provider.

```javascript
checkTags(tags) ⇒ Promise.<Record<string, boolean>>
```

Parameters | Type | Description
--- | --- | ---
__tags__ | `string[]` | *The tags to check*
__*return*__ | `Promise.<Record<string, boolean>>` | *Map of Aleo Record tags and whether they appeared in any inputs on chain. If boolean corresponding to the tag has a true value, that Record is considered spent by the Aleo Network.*

---

## NetworkRecordProvider Methods

### setAccount

Set the account used to search for records

```javascript
setAccount(account)
```

Parameters | Type | Description
--- | --- | ---
__account__ | Account | *The account to use for searching for records*

**Example**
```javascript
// Set a new account for the record provider
const newAccount = new Account();
recordProvider.setAccount(newAccount);
```

---

### findCreditsRecords

Find a list of credit records with a given number of microcredits via the official Aleo API

```javascript
findCreditsRecords(microcredits, searchParameters) ⇒ Promise.<OwnedRecord[]>
```

Parameters | Type | Description
--- | --- | ---
__microcredits__ | `number[]` | *The number of microcredits to search for*
__searchParameters__ | `RecordSearchParams` | *Additional parameters to search for (includes unspent and nonces)*
__*return*__ | `Promise.<OwnedRecord[]>` | *The records if found, otherwise an error*

**Example**
```javascript
// Create a new NetworkRecordProvider
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);

// The record provider can be used to find records with a given number of microcredits
const record = await recordProvider.findCreditsRecord(5000, { unspent: true, nonces: [] });

// When a record is found but not yet used, it's nonce should be added to the nonces parameter so that it is not
// found again if a subsequent search is performed
const records = await recordProvider.findCreditsRecords([5000], { unspent: true, nonces: [record.nonce()] });

// When the program manager is initialized with the record provider it will be used to find automatically find
// fee records and amount records for value transfers so that they do not need to be specified manually
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
programManager.transfer(1, "aleo166q6ww6688cug7qxwe7nhctjpymydwzy2h7rscfmatqmfwnjvggqcad0at", "public", 0.5);
```

---

### findCreditsRecord

Find a credit record with a given number of microcredits via the official Aleo API

```javascript
findCreditsRecord(microcredits, searchParameters) ⇒ Promise.<OwnedRecord>
```

Parameters | Type | Description
--- | --- | ---
__microcredits__ | `number` | *The number of microcredits to search for*
__searchParameters__ | `RecordSearchParams` | *Additional parameters to search for (includes unspent and nonces)*
__*return*__ | `Promise.<OwnedRecord>` | *The record if found, otherwise an error*

**Example**
```javascript
// Create a new NetworkRecordProvider
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);

// The record provider can be used to find records with a given number of microcredits
const record = await recordProvider.findCreditsRecord(5000, { unspent: true, nonces: [] });

// When a record is found but not yet used, it's nonce should be added to the nonces parameter so that it is not
// found again if a subsequent search is performed
const records = await recordProvider.findCreditsRecords([5000], { unspent: true, nonces: [record.nonce()] });

// When the program manager is initialized with the record provider it will be used to find automatically find
// fee records and amount records for value transfers so that they do not need to be specified manually
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
programManager.transfer(1, "aleo166q6ww6688cug7qxwe7nhctjpymydwzy2h7rscfmatqmfwnjvggqcad0at", "public", 0.5);
```

---

### findRecord

Find an arbitrary record.

```javascript
findRecord(searchParameters) ⇒ Promise.<OwnedRecord>
```

Parameters | Type | Description
--- | --- | ---
__searchParameters__ | `RecordSearchParams` | *Parameters to search for*
__*return*__ | `Promise.<OwnedRecord>` | *The record if found, otherwise an error*

**Example**
```javascript
// Create a new NetworkRecordProvider
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const recordProvider = new NetworkRecordProvider(account, networkClient);

// Find an arbitrary record
const record = await recordProvider.findRecord({ unspent: true, nonces: [] });
```

---

### findRecords

Find multiple records from a specified program.

```javascript
findRecords(searchParameters) ⇒ Promise.<OwnedRecord[]>
```

Parameters | Type | Description
--- | --- | ---
__searchParameters__ | `RecordSearchParams` | *Parameters to search for*
__*return*__ | `Promise.<OwnedRecord[]>` | *Array of records if found, otherwise an error*

**Example**
```javascript
// Create a new NetworkRecordProvider
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const recordProvider = new NetworkRecordProvider(account, networkClient);

// Find multiple records from a specified program
const records = await recordProvider.findRecords({ unspent: true, nonces: [] });
```

---

## Class `BlockHeightSearch`

BlockHeightSearch is a RecordSearchParams implementation that allows for searching for records within a given
block height range.

<a name="new_BlockHeightSearch_new"></a>

### Constructor

<p>Create a new BlockHeightSearch instance to search for records within a specific block height range.</p>

```javascript
new BlockHeightSearch(startHeight, endHeight, unspent)
```

| Param | Type | Description |
| --- | --- | --- |
| startHeight | <code>number</code> | The starting block height |
| endHeight | <code>number</code> | The ending block height |
| unspent | <code>boolean</code> | Optional. Whether to search for unspent records only |

### Examples

```javascript
// Create a new BlockHeightSearch
const params = new BlockHeightSearch(89995, 99995, true);

// Create a new NetworkRecordProvider
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);

// The record provider can be used to find records with a given number of microcredits and the block height search
// can be used to find records within a given block height range
const record = await recordProvider.findCreditsRecord(5000, { unspent: true, nonces: [], ...params });
```