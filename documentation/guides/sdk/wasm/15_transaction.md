---
id: transaction
title: Transaction
sidebar_label: Transaction
---

## Class `Transaction`

Webassembly Representation of an Aleo transaction

This object is created when generating an on-chain function deployment or execution and is the
object that should be submitted to the Aleo Network in order to deploy or execute a function.

## Methods

### fromString


Create a transaction from a string

```javascript
fromString(transaction) ► Transaction
```

Parameters | Type | Description
--- | --- | ---
__transaction__ | `string` | *String representation of a transaction*
__*return*__ | Transaction | **

---

### fromBytesLe


Create a transaction from a Uint8Array of left endian bytes.

```javascript
fromBytesLe(Uint8Array) ► Transaction
```

Parameters | Type | Description
--- | --- | ---
__Uint8Array__ | `Uint8Array` | *of left endian bytes encoding a Transaction.*
__*return*__ | Transaction | **

---

### toString


Get the transaction as a string. If you want to submit this transaction to the Aleo Network
this function will create the string that should be submitted in the &#x60;POST&#x60; data.

```javascript
toString() ► string
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | *String representation of the transaction*

---

### toBytesLe


Get the transaction as a Uint8Array of left endian bytes.

```javascript
toBytesLe() ► Uint8Array
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Uint8Array` | *Uint8Array representation of the transaction*

---

### constainsSerialNumber


Returns true if the transaction contains the given serial number.

```javascript
constainsSerialNumber(True) ► boolean
```

Parameters | Type | Description
--- | --- | ---
__True__ | `boolean` | *if the transaction contains the given serial number.*
__*return*__ | `boolean` | **

---

### constainsCommitment


Returns true if the transaction contains the given commitment.

```javascript
constainsCommitment(True) ► boolean
```

Parameters | Type | Description
--- | --- | ---
__True__ | `boolean` | *if the transaction contains the given commitment.*
__*return*__ | `boolean` | **

---

### findRecord


Find a record in the transaction by the records commitment.

```javascript
findRecord(commitment) ► RecordCiphertext
```

Parameters | Type | Description
--- | --- | ---
__commitment__ | Field | **
__*return*__ | RecordCiphertext | **

---

### baseFeeAmount


Returns the transaction's base fee.

```javascript
baseFeeAmount() ► BigInt
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `BigInt` | **

---

### feeAmount


Returns the transaction's total fee.

```javascript
feeAmount() ► BigInt
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `BigInt` | **

---

### priorityFeeAmount


Returns the transaction's priority fee.

returns {BigInt} The transaction's priority fee.

```javascript
priorityFeeAmount() ► BigInt
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `BigInt` | **

---

### isDeploy


Returns true if the transaction is a deployment transaction.

```javascript
isDeploy() ► boolean
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `boolean` | *True if the transaction is a deployment transaction*

---

### isExecute


Returns true if the transaction is an execution transaction.

```javascript
isExecute() ► boolean
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `boolean` | *True if the transaction is an execution transaction*

---

### isFee


Returns true if the transaction is a fee transaction.

```javascript
isFee() ► boolean
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `boolean` | *True if the transaction is a fee transaction*

---

### deployedProgram


Returns the program deployed within the transaction if the transaction is a deployment
transaction.

```javascript
deployedProgram() ► Program
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | Program | *The program deployed within the transaction.*

---

### execution


Returns the execution within the transaction (if present).

```javascript
execution() ► Execution
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | Execution | *The execution within the transaction.*

---

### ownedRecords


Get the record plaintext present in a transaction owned by a specific view key.

```javascript
ownedRecords(view_key) ► Array.<RecordPlaintext>
```

Parameters | Type | Description
--- | --- | ---
__view_key__ | `ViewKey` | *View key used to decrypt the ciphertext*
__*return*__ | `Array.<RecordPlaintext>` | *Array of record plaintext objects*

---

### records


Get the records present in a transaction and their commitments.

```javascript
records() ► Array.<{commitment: Field, record: RecordCiphertext}>
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<{commitment: Field, record: RecordCiphertext}>` | *Array of record ciphertext objects*

---

### summary


Get a summary of the transaction within a javascript object.

If the transaction is an execution transaction, this function will return a list of the
transitions and their inputs and outputs.

If the transaction is a deployment transaction, this function will return the program id and
a list of the functions and their verifying keys, constraint, and variable counts.

```javascript
summary(convert_to_js) ► Object
```

Parameters | Type | Description
--- | --- | ---
__convert_to_js__ | `boolean` | *If true the inputs and outputs will be converted to JS objects,
if false the inputs and outputs will be in wasm format.*
__*return*__ | `Object` | *Transaction summary*

---

### id


Get the id of the transaction. This is the merkle root of the transactions inclusion proof.

This value can be used to query the status of the transaction on the Aleo Network to see
if it was successful. If successful, the transaction will be included in a block and this
value can be used to lookup the transaction data on-chain.

```javascript
id() ► string
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | *TransactionId*

---

### transactionType


Get the type of the transaction (will return &quot;deploy&quot; or &quot;execute&quot;)

```javascript
transactionType() ► string
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | *Transaction type*

---

### transitions


Get the transitions in a transaction.

```javascript
transitions() ► Array.<Transition>
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<Transition>` | *Array of transition objects*

---

### verifyingKeys


Get the verifying keys in a transaction.

```javascript
verifyingKeys() ► Array.<Object>
```

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<Object>` | *Array of verifying keys.*

---