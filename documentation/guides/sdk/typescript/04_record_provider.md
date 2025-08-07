---
id: record_provider
title: Record Provider
sidebar_label: Record Provider
---

## Overview

A record provider implementation that uses the official Aleo API to find records for usage in program execution and
deployment, wallet functionality, and other use cases.

**Kind**: global class  

* [NetworkRecordProvider](#NetworkRecordProvider)
    * _instance_
        * [.setAccount(account)](#setaccount)
        * [.findCreditsRecords(microcredits, unspent, nonces, searchParameters)](#findcreditsrecords)
        * [.findCreditsRecord(microcredits, unspent, nonces, searchParameters)](#findcreditsrecord)
        * [.findRecord(unspent, nonces, searchParameters)](#findrecord)
        * [.findRecords(unspent, nonces, searchParameters)](#findrecords)

## Constructor

<a name="new_NetworkRecordProvider_new"></a>

### NetworkRecordProvider

```javascript
new NetworkRecordProvider(account, networkClient)
```

| Param | Type | Description |
| --- | --- | --- |
| account | <code>Account</code> | The account to use for searching for records |
| networkClient | <code>AleoNetworkClient</code> | The network client to use for API calls |

**Example**  
```js
// Create a new NetworkRecordProvider
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const account = new Account();
const recordProvider = new NetworkRecordProvider(account, networkClient);
```

## Methods

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

Find a list of credit records with a given number of microcredits by via the official Aleo API

```javascript
findCreditsRecords(microcredits, unspent, nonces, searchParameters)
```

Parameters | Type | Description
--- | --- | ---
__microcredits__ | `Array.<number>` | *The number of microcredits to search for*
__unspent__ | `boolean` | *Whether or not the record is unspent*
__nonces__ | `Array.<string>` | *Nonces of records already found so that they are not found again*
__searchParameters__ | `RecordSearchParams` | *Additional parameters to search for*
__*return*__ | `Promise.<RecordPlaintext>` | *The record if found, otherwise an error*

**Example**
```javascript
// Create a new NetworkRecordProvider
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);

// The record provider can be used to find records with a given number of microcredits
const record = await recordProvider.findCreditsRecord(5000, true, []);

// When a record is found but not yet used, it's nonce should be added to the nonces parameter so that it is not
// found again if a subsequent search is performed
const records = await recordProvider.findCreditsRecords(5000, true, [record.nonce()]);

// When the program manager is initialized with the record provider it will be used to find automatically find
// fee records and amount records for value transfers so that they do not need to be specified manually
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
programManager.transfer(1, "aleo166q6ww6688cug7qxwe7nhctjpymydwzy2h7rscfmatqmfwnjvggqcad0at", "public", 0.5);
```

---

### findCreditsRecord

Find a credit record with a given number of microcredits by via the official Aleo API

```javascript
findCreditsRecord(microcredits, unspent, nonces, searchParameters)
```

Parameters | Type | Description
--- | --- | ---
__microcredits__ | `number` | *The number of microcredits to search for*
__unspent__ | `boolean` | *Whether or not the record is unspent*
__nonces__ | `Array.<string>` | *Nonces of records already found so that they are not found again*
__searchParameters__ | `RecordSearchParams` | *Additional parameters to search for*
__*return*__ | `Promise.<RecordPlaintext>` | *The record if found, otherwise an error*

**Example**
```javascript
// Create a new NetworkRecordProvider
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);

// The record provider can be used to find records with a given number of microcredits
const record = await recordProvider.findCreditsRecord(5000, true, []);

// When a record is found but not yet used, it's nonce should be added to the nonces parameter so that it is not
// found again if a subsequent search is performed
const records = await recordProvider.findCreditsRecords(5000, true, [record.nonce()]);

// When the program manager is initialized with the record provider it will be used to find automatically find
// fee records and amount records for value transfers so that they do not need to be specified manually
const programManager = new ProgramManager("https://api.explorer.provable.com/v1", keyProvider, recordProvider);
programManager.transfer(1, "aleo166q6ww6688cug7qxwe7nhctjpymydwzy2h7rscfmatqmfwnjvggqcad0at", "public", 0.5);
```

---

### findRecord

Find an arbitrary record. WARNING: This function is not implemented yet and will throw an error.

```javascript
findRecord(unspent, nonces, searchParameters)
```

Parameters | Type | Description
--- | --- | ---
__unspent__ | `boolean` | *Whether or not the record is unspent*
__nonces__ | `Array.<string>` | *Nonces of records already found so that they are not found again*
__searchParameters__ | `RecordSearchParams` | *Additional parameters to search for*
__*return*__ | `Promise.<RecordPlaintext>` | *The record if found, otherwise an error*

**Example**
```javascript
// Create a new NetworkRecordProvider
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const recordProvider = new NetworkRecordProvider(account, networkClient);

// Find an arbitrary record (not yet implemented)
try {
    const record = await recordProvider.findRecord(true, [], null);
} catch (error) {
    console.log("findRecord is not yet implemented");
}
```

---

### findRecords

Find multiple records from a specified program.

```javascript
findRecords(unspent, nonces, searchParameters)
```

Parameters | Type | Description
--- | --- | ---
__unspent__ | `boolean` | *Whether or not the records are unspent*
__nonces__ | `Array.<string>` | *Nonces of records already found so that they are not found again*
__searchParameters__ | `RecordSearchParams` | *Additional parameters to search for*
__*return*__ | `Promise.<Array.<RecordPlaintext>>` | *Array of records if found, otherwise an error*

**Example**
```javascript
// Create a new NetworkRecordProvider
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const recordProvider = new NetworkRecordProvider(account, networkClient);

// Find multiple records from a specified program
const records = await recordProvider.findRecords(true, [], null);
```

---

## Class `BlockHeightSearch`

BlockHeightSearch is a RecordSearchParams implementation that allows for searching for records within a given
block height range.

### Examples

```javascript
// Create a new BlockHeightSearch
const params = new BlockHeightSearch(89995, 99995);

// Create a new NetworkRecordProvider
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const keyProvider = new AleoKeyProvider();
const recordProvider = new NetworkRecordProvider(account, networkClient);

// The record provider can be used to find records with a given number of microcredits and the block height search
// can be used to find records within a given block height range
const record = await recordProvider.findCreditsRecord(5000, true, [], params);
```