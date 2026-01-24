---
id: record_scanner
title: Record Scanner
sidebar_label: Record Scanner
---

## Overview

A record provider implementation that uses a record scanning service to find records for usage in program execution and deployment, wallet functionality, and other use cases. This is an alternative to `NetworkRecordProvider` for users who prefer to use a dedicated scanning service.

**Kind**: global class  

* RecordScanner
    * _constructor_
        * [new RecordScanner(options)](#new_RecordScanner_new)
    * _instance_
        * [.setApiKey(apiKey)](#setapikey)
        * [.setUuid(uuidOrViewKey)](#setuuid)
        * [.register(viewKey, startBlock)](#register) ⇒ <code>Promise.&lt;RegistrationResponse&gt;</code>
        * [.encryptedRecords(recordsFilter)](#encryptedrecords) ⇒ <code>Promise.&lt;EncryptedRecord[]&gt;</code>
        * [.checkSerialNumbers(serialNumbers)](#checkserialnumbers) ⇒ <code>Promise.&lt;Record&lt;string, boolean&gt;&gt;</code>
        * [.checkTags(tags)](#checktags) ⇒ <code>Promise.&lt;Record&lt;string, boolean&gt;&gt;</code>
        * [.checkStatus()](#checkstatus) ⇒ <code>Promise.&lt;StatusResponse&gt;</code>
        * [.findRecord(searchParameters)](#findrecord) ⇒ <code>Promise.&lt;OwnedRecord&gt;</code>
        * [.findRecords(filter)](#findrecords) ⇒ <code>Promise.&lt;OwnedRecord[]&gt;</code>
        * [.findCreditsRecord(microcredits, searchParameters)](#findcreditsrecord) ⇒ <code>Promise.&lt;OwnedRecord&gt;</code>
        * [.findCreditsRecords(microcreditAmounts, searchParameters)](#findcreditsrecords) ⇒ <code>Promise.&lt;OwnedRecord[]&gt;</code>
        * [.computeUUID(vk)](#computeuuid) ⇒ <code>Field</code>

## Constructor

<a name="new_RecordScanner_new"></a>

### RecordScanner

<p>Create a new RecordScanner instance that uses a record scanning service to find records.</p>

```javascript
new RecordScanner(options)
```

| Param | Type | Description |
| --- | --- | --- |
| options | <code>RecordScannerOptions</code> | Configuration options for the record scanner |

#### RecordScannerOptions

| Property | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL of the record scanning service |
| apiKey | <code>string \| &#123; header: string, value: string &#125;</code> | Optional API key for authentication |

**Example**  
```js
import { RecordScanner, Account } from "@provablehq/sdk/mainnet.js";

// Create a new RecordScanner with a simple API key
const recordScanner = new RecordScanner({ 
    url: "https://record-scanner.aleo.org",
    apiKey: "your-api-key"
});

// Or with a custom header
const recordScannerCustomHeader = new RecordScanner({ 
    url: "https://record-scanner.aleo.org",
    apiKey: { header: "X-Custom-Header", value: "your-api-key" }
});

// Register an account and start scanning
const account = new Account({ privateKey: 'APrivateKey1...' });
const response = await recordScanner.register(account.viewKey(), 0);

// Find records
const filter = {
    uuid: response.uuid,
    filter: {
        program: "credits.aleo",
        records: ["credits"],
    },
    unspent: true,
};
const records = await recordScanner.findRecords(filter);
```

---

## RecordScanner Methods

<a name="setapikey"></a>

### setApiKey

Set the API key to use for the record scanner.

```javascript
setApiKey(apiKey) ⇒ Promise.<void>
```

| Parameters | Type | Description |
| --- | --- | --- |
| __apiKey__ | `string \| &#123; header: string, value: string &#125;` | *The API key to use for the record scanner* |
| __*return*__ | `Promise.<void>` | *Resolves when the API key is set* |

**Example**
```javascript
// Set API key as a string (uses default header X-Provable-API-Key)
await recordScanner.setApiKey("your-api-key");

// Set API key with a custom header
await recordScanner.setApiKey({ header: "X-Custom-Header", value: "your-api-key" });
```

---

<a name="setuuid"></a>

### setUuid

Set the UUID to use for the record scanner. The UUID identifies the registered account with the scanning service.

```javascript
setUuid(uuidOrViewKey) ⇒ Promise.<void>
```

| Parameters | Type | Description |
| --- | --- | --- |
| __uuidOrViewKey__ | `Field \| ViewKey` | *The UUID or ViewKey to use for the record scanner* |
| __*return*__ | `Promise.<void>` | *Resolves when the UUID is set* |

**Example**
```javascript
// Set UUID directly
await recordScanner.setUuid(uuidField);

// Or compute UUID from ViewKey
await recordScanner.setUuid(account.viewKey());
```

---

<a name="register"></a>

### register

Register the account with the record scanner service. This must be called before finding records.

```javascript
register(viewKey, startBlock) ⇒ Promise.<RegistrationResponse>
```

| Parameters | Type | Description |
| --- | --- | --- |
| __viewKey__ | `ViewKey` | *The view key of the account to register* |
| __startBlock__ | `number` | *The block height to start scanning from* |
| __*return*__ | `Promise.<RegistrationResponse>` | *The response from the record scanner service containing the UUID* |

**Example**
```javascript
import { RecordScanner, Account } from "@provablehq/sdk/mainnet.js";

const account = new Account({ privateKey: 'APrivateKey1...' });
const recordScanner = new RecordScanner({ url: "https://record-scanner.aleo.org" });

// Register the account starting from block 0
const response = await recordScanner.register(account.viewKey(), 0);
console.log("Registration UUID:", response.uuid);
```

---

<a name="encryptedrecords"></a>

### encryptedRecords

Get encrypted records from the record scanner service.

```javascript
encryptedRecords(recordsFilter) ⇒ Promise.<EncryptedRecord[]>
```

| Parameters | Type | Description |
| --- | --- | --- |
| __recordsFilter__ | `RecordsFilter` | *The filter to use to find the records and filter the response* |
| __*return*__ | `Promise.<EncryptedRecord[]>` | *Array of encrypted records matching the filter* |

**Example**
```javascript
const filter = {
    uuid: "your-uuid",
    filter: {
        program: "credits.aleo",
        records: ["credits"],
    },
};
const encryptedRecords = await recordScanner.encryptedRecords(filter);
```

---

<a name="checkserialnumbers"></a>

### checkSerialNumbers

Check if a list of serial numbers exist in the record scanner service. This is used to determine if records have been spent.

```javascript
checkSerialNumbers(serialNumbers) ⇒ Promise.<Record<string, boolean>>
```

| Parameters | Type | Description |
| --- | --- | --- |
| __serialNumbers__ | `string[]` | *The serial numbers to check* |
| __*return*__ | `Promise.<Record<string, boolean>>` | *Map of Aleo Record serial numbers and whether they appeared in any inputs on chain. If boolean corresponding to the Serial Number has a true value, that Record is considered spent by the Aleo Network.* |

**Example**
```javascript
const serialNumbers = ["sn1...", "sn2..."];
const result = await recordScanner.checkSerialNumbers(serialNumbers);
console.log(result); // { "sn1...": true, "sn2...": false }
```

---

<a name="checktags"></a>

### checkTags

Check if a list of tags exist in the record scanner service. This is used to determine if records have been spent.

```javascript
checkTags(tags) ⇒ Promise.<Record<string, boolean>>
```

| Parameters | Type | Description |
| --- | --- | --- |
| __tags__ | `string[]` | *The tags to check* |
| __*return*__ | `Promise.<Record<string, boolean>>` | *Map of Aleo Record tags and whether they appeared in any inputs on chain. If boolean corresponding to the tag has a true value, that Record is considered spent by the Aleo Network.* |

**Example**
```javascript
const tags = ["tag1...", "tag2..."];
const result = await recordScanner.checkTags(tags);
console.log(result); // { "tag1...": false, "tag2...": true }
```

---

<a name="checkstatus"></a>

### checkStatus

Check the status of a record scanner indexing job.

```javascript
checkStatus() ⇒ Promise.<StatusResponse>
```

| Parameters | Type | Description |
| --- | --- | --- |
| __*return*__ | `Promise.<StatusResponse>` | *The status of the indexing job for the registered account* |

**Example**
```javascript
const status = await recordScanner.checkStatus();
console.log("Current block:", status.current_block);
console.log("Indexed up to:", status.indexed_to);
```

---

<a name="findrecord"></a>

### findRecord

Find a single record in the record scanner service.

```javascript
findRecord(searchParameters) ⇒ Promise.<OwnedRecord>
```

| Parameters | Type | Description |
| --- | --- | --- |
| __searchParameters__ | `OwnedFilter` | *The filter to use to find the record* |
| __*return*__ | `Promise.<OwnedRecord>` | *The first record matching the filter* |

**Example**
```javascript
const filter = {
    decrypt: true,
    unspent: true,
    filter: {
        program: "credits.aleo",
        record: "credits",
    },
};
const record = await recordScanner.findRecord(filter);
```

---

<a name="findrecords"></a>

### findRecords

Find multiple records in the record scanner service.

```javascript
findRecords(filter) ⇒ Promise.<OwnedRecord[]>
```

| Parameters | Type | Description |
| --- | --- | --- |
| __filter__ | `OwnedFilter` | *The filter to use to find the records* |
| __*return*__ | `Promise.<OwnedRecord[]>` | *Array of records matching the filter* |

**Example**
```javascript
const filter = {
    decrypt: true,
    unspent: true,
    filter: {
        program: "credits.aleo",
        record: "credits",
    },
    responseFilter: {
        commitment: true,
        owner: true,
        tag: true,
        spent: true,
        record_ciphertext: true,
        block_height: true,
        block_timestamp: true,
    },
};
const records = await recordScanner.findRecords(filter);
console.log(`Found ${records.length} records`);
```

---

<a name="findcreditsrecord"></a>

### findCreditsRecord

Find a credits record with at least the specified number of microcredits.

```javascript
findCreditsRecord(microcredits, searchParameters) ⇒ Promise.<OwnedRecord>
```

| Parameters | Type | Description |
| --- | --- | --- |
| __microcredits__ | `number` | *The minimum amount of microcredits to find* |
| __searchParameters__ | `OwnedFilter` | *The filter to use to find the record* |
| __*return*__ | `Promise.<OwnedRecord>` | *A credits record with at least the specified microcredits* |

**Example**
```javascript
// Find a credits record with at least 1,000,000 microcredits (1 credit)
const record = await recordScanner.findCreditsRecord(1000000, {
    unspent: true,
    filter: { start: 0 },
});
console.log("Found record:", record.record_plaintext);
```

---

<a name="findcreditsrecords"></a>

### findCreditsRecords

Find credits records matching specific microcredit amounts.

```javascript
findCreditsRecords(microcreditAmounts, searchParameters) ⇒ Promise.<OwnedRecord[]>
```

| Parameters | Type | Description |
| --- | --- | --- |
| __microcreditAmounts__ | `number[]` | *The amounts of microcredits to find* |
| __searchParameters__ | `OwnedFilter` | *The filter to use to find the records* |
| __*return*__ | `Promise.<OwnedRecord[]>` | *Array of credits records matching the specified amounts* |

**Example**
```javascript
// Find credits records with specific amounts
const amounts = [1000000, 5000000, 10000000];
const records = await recordScanner.findCreditsRecords(amounts, {
    unspent: true,
    filter: { start: 0 },
});
console.log(`Found ${records.length} matching records`);
```

---

<a name="computeuuid"></a>

### computeUUID

Compute the UUID for a given view key. This is used internally to identify accounts with the scanning service.

```javascript
computeUUID(vk) ⇒ Field
```

| Parameters | Type | Description |
| --- | --- | --- |
| __vk__ | `ViewKey` | *The view key to compute the UUID for* |
| __*return*__ | `Field` | *The computed UUID as a Field element* |

**Example**
```javascript
const uuid = recordScanner.computeUUID(account.viewKey());
console.log("Computed UUID:", uuid.toString());
```

---

## OwnedFilter Interface

The `OwnedFilter` interface defines the search parameters for finding owned records.

| Property | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | Optional. The UUID identifying the registered account |
| decrypt | <code>boolean</code> | Optional. Whether to decrypt the records |
| unspent | <code>boolean</code> | Optional. Whether to filter for unspent records only |
| filter | <code>object</code> | Optional. Filter criteria for the records |
| filter.start | <code>number</code> | Optional. Starting block height |
| filter.program | <code>string</code> | Optional. Program ID to filter by |
| filter.record | <code>string</code> | Optional. Record name to filter by |
| responseFilter | <code>OwnedRecordsResponseFilter</code> | Optional. Fields to include in the response |

## OwnedRecordsResponseFilter Interface

The `OwnedRecordsResponseFilter` interface defines which fields to include in the record response.

| Property | Type | Description |
| --- | --- | --- |
| commitment | <code>boolean</code> | Include the record commitment |
| owner | <code>boolean</code> | Include the record owner |
| tag | <code>boolean</code> | Include the record tag |
| sender | <code>boolean</code> | Include the sender address |
| spent | <code>boolean</code> | Include spent status |
| record_ciphertext | <code>boolean</code> | Include the encrypted record |
| block_height | <code>boolean</code> | Include the block height |
| block_timestamp | <code>boolean</code> | Include the block timestamp |
| output_index | <code>boolean</code> | Include the output index |
| record_name | <code>boolean</code> | Include the record name |
| function_name | <code>boolean</code> | Include the function name |
| program_name | <code>boolean</code> | Include the program name |
| transition_id | <code>boolean</code> | Include the transition ID |
| transaction_id | <code>boolean</code> | Include the transaction ID |
| transaction_index | <code>boolean</code> | Include the transaction index |
| transition_index | <code>boolean</code> | Include the transition index |
