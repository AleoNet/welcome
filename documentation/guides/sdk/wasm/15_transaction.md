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

### `fromString(transaction) ► Transaction`
 

Create a transaction from a string

Parameters | Type | Description
--- | --- | ---
__transaction__ | `string` | *String representation of a transaction*
__*return*__ | Transaction | **

---

### `fromBytesLe(Uint8Array) ► Transaction`
 

Create a transaction from a Uint8Array of left endian bytes.

Parameters | Type | Description
--- | --- | ---
__Uint8Array__ | `Uint8Array` | *of left endian bytes encoding a Transaction.*
__*return*__ | Transaction | **

---

### `toString() ► string`


Get the transaction as a string. If you want to submit this transaction to the Aleo Network
this function will create the string that should be submitted in the &#x60;POST&#x60; data.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | *String representation of the transaction*

---

### `toBytesLe() ► Uint8Array`


Get the transaction as a Uint8Array of left endian bytes.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Uint8Array` | *Uint8Array representation of the transaction*

---

### `constainsSerialNumber(True) ► boolean`


Returns true if the transaction contains the given serial number.

Parameters | Type | Description
--- | --- | ---
__True__ | `boolean` | *if the transaction contains the given serial number.*
__*return*__ | `boolean` | **

---

### `constainsCommitment(True) ► boolean`


Returns true if the transaction contains the given commitment.

Parameters | Type | Description
--- | --- | ---
__True__ | `boolean` | *if the transaction contains the given commitment.*
__*return*__ | `boolean` | **

---

### `findRecord(commitment) ► RecordCiphertext`


Find a record in the transaction by the records commitment.

Parameters | Type | Description
--- | --- | ---
__commitment__ | Field | **
__*return*__ | RecordCiphertext | **

---

### `baseFeeAmount() ► BigInt`


Returns the transaction's base fee.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `BigInt` | **

---

### `feeAmount() ► BigInt`


Returns the transaction's total fee.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `BigInt` | **

---

### `priorityFeeAmount() ► BigInt`


Returns the transaction's priority fee.

returns {BigInt} The transaction's priority fee.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `BigInt` | **

---

### `isDeploy() ► boolean`


Returns true if the transaction is a deployment transaction.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `boolean` | *True if the transaction is a deployment transaction*

---

### `isExecute() ► boolean`


Returns true if the transaction is an execution transaction.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `boolean` | *True if the transaction is an execution transaction*

---

### `isFee() ► boolean`


Returns true if the transaction is a fee transaction.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `boolean` | *True if the transaction is a fee transaction*

---

### `deployedProgram() ► Program`


Returns the program deployed within the transaction if the transaction is a deployment
transaction.

Parameters | Type | Description
--- | --- | ---
__*return*__ | Program | *The program deployed within the transaction.*

---

### `execution() ► Execution`


Returns the execution within the transaction (if present).

Parameters | Type | Description
--- | --- | ---
__*return*__ | Execution | *The execution within the transaction.*

---

### `ownedRecords(view_key) ► Array.<RecordPlaintext>`


Get the record plaintext present in a transaction owned by a specific view key.

Parameters | Type | Description
--- | --- | ---
__view_key__ | `ViewKey` | *View key used to decrypt the ciphertext*
__*return*__ | `Array.<RecordPlaintext>` | *Array of record plaintext objects*

---

### `records() ► Array.<{commitment: Field, record: RecordCiphertext}>`


Get the records present in a transaction and their commitments.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<{commitment: Field, record: RecordCiphertext}>` | *Array of record ciphertext objects*

---

### `summary(convert_to_js) ► Object`


Get a summary of the transaction within a javascript object.

If the transaction is an execution transaction, this function will return a list of the
transitions and their inputs and outputs.

If the transaction is a deployment transaction, this function will return the program id and
a list of the functions and their verifying keys, constraint, and variable counts.

Parameters | Type | Description
--- | --- | ---
__convert_to_js__ | `boolean` | *If true the inputs and outputs will be converted to JS objects,
if false the inputs and outputs will be in wasm format.*
__*return*__ | `Object` | *Transaction summary*

---

### `id() ► string`


Get the id of the transaction. This is the merkle root of the transactions inclusion proof.

This value can be used to query the status of the transaction on the Aleo Network to see
if it was successful. If successful, the transaction will be included in a block and this
value can be used to lookup the transaction data on-chain.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | *TransactionId*

---

### `transactionType() ► string`


Get the type of the transaction (will return &quot;deploy&quot; or &quot;execute&quot;)

Parameters | Type | Description
--- | --- | ---
__*return*__ | `string` | *Transaction type*

---

### `transitions() ► Array.<Transition>`


Get the transitions in a transaction.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<Transition>` | *Array of transition objects*

---

### `verifyingKeys() ► Array.<Object>`


Get the verifying keys in a transaction.

Parameters | Type | Description
--- | --- | ---
__*return*__ | `Array.<Object>` | *Array of verifying keys.*

---