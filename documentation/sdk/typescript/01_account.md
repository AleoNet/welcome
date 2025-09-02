---
title: Account
sidebar_label: Account
---

<a name="Account"></a>

## Overview
<p>Key Management class. Enables the creation of a new Aleo Account, importation of an existing account from
an existing private key or seed, and message signing and verification functionality.</p>
<p>An Aleo Account is generated from a randomly generated seed (number) from which an account private key, view key,
and a public account address are derived. The private key lies at the root of an Aleo account. It is a highly
sensitive secret and should be protected as it allows for creation of Aleo Program executions and arbitrary value
transfers. The View Key allows for decryption of a user's activity on the blockchain. The Address is the public
address to which other users of Aleo can send Aleo credits and other records to. This class should only be used
in environments where the safety of the underlying key material can be assured.</p>

**Kind**: global class  

* Account
    * _instance_
        * [.encryptAccount(ciphertext)](#Account+encryptAccount) ⇒ <code>PrivateKeyCiphertext</code>
        * [.decryptRecord(ciphertext)](#Account+decryptRecord) ⇒ <code>Record</code>
        * [.decryptRecords(ciphertexts)](#Account+decryptRecords) ⇒ <code>Array.&lt;Record&gt;</code>
        * [.ownsRecordCiphertext(ciphertext)](#Account+ownsRecordCiphertext) ⇒ <code>boolean</code>
        * [.sign(message)](#Account+sign) ⇒ <code>Signature</code>
        * [.verify(message, signature)](#Account+verify) ⇒ <code>boolean</code>
    * _static_
        * [.fromCiphertext(ciphertext, password)](#Account.fromCiphertext) ⇒ <code>PrivateKey</code> \| <code>Error</code>

## Example
```javascript
// Create a new account
const myRandomAccount = new Account();

// Create an account from a randomly generated seed
const seed = new Uint8Array([94, 91, 52, 251, 240, 230, 226, 35, 117, 253, 224, 210, 175, 13, 205, 120, 155, 214, 7, 169, 66, 62, 206, 50, 188, 40, 29, 122, 40, 250, 54, 18]);
const mySeededAccount = new Account({seed: seed});

// Create an account from an existing private key
const myExistingAccount = new Account({privateKey: 'myExistingPrivateKey'})

// Sign a message
const hello_world = Uint8Array.from([104, 101, 108, 108, 111 119, 111, 114, 108, 100])
const signature = myRandomAccount.sign(hello_world)

// Verify a signature
myRandomAccount.verify(hello_world, signature)
```

## Constructor

<a name="new_Account_new"></a>

### Account

```javascript
new Account(params)
```

| Param | Type | Description |
| --- | --- | --- |
| params | <code>AccountParam</code> | Optional parameters for account creation |

#### Interface

```typescript
interface AccountParam {
  privateKey?: string;
  seed?: Uint8Array;
}
```

| Property | Type | Description |
| --- | --- | --- |
| privateKey | <code>string</code> | Optional private key string to create account from |
| seed | <code>Uint8Array</code> | Optional seed array to create account from |

**Example**  
```js
// Create a new account with random seed
const myRandomAccount = new Account();

// Create an account from a randomly generated seed
const seed = new Uint8Array([94, 91, 52, 251, 240, 230, 226, 35, 117, 253, 224, 210, 175, 13, 205, 120, 155, 214, 7, 169, 66, 62, 206, 50, 188, 40, 29, 122, 40, 250, 54, 18]);
const mySeededAccount = new Account({seed: seed});

// Create an account from an existing private key
const myExistingAccount = new Account({privateKey: 'APrivateKey1zkp...'});
```

## Methods

<a name="Account+encryptAccount"></a>

### encryptAccount

<p>Encrypt the account's private key with a password</p>

```javascript
account.encryptAccount(ciphertext) ⇒ PrivateKeyCiphertext
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type |
| --- | --- |
| ciphertext | <code>string</code> |
| *return* | <code>PrivateKeyCiphertext</code> | 

**Example**  
```js
let account = new Account();
let ciphertext = account.encryptAccount("password");
```

---

<a name="Account+decryptRecord"></a>

### decryptRecord

<p>Decrypts a Record in ciphertext form into plaintext</p>

```javascript
account.decryptRecord(ciphertext) ⇒ Record
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type |
| --- | --- |
| ciphertext | <code>string</code> |
| *return* | <code>Record</code> | 

**Example**  
```js
let account = new Account();
let record = account.decryptRecord("record1ciphertext");
```

---

<a name="Account+decryptRecords"></a>

### decryptRecords

<p>Decrypts an array of Records in ciphertext form into plaintext</p>

```javascript
account.decryptRecords(ciphertexts) ⇒ Array.<Record>
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type |
| --- | --- |
| ciphertexts | <code>Array.&lt;string&gt;</code> |
| *return* | <code>Array.&lt;Record&gt;</code> | 

**Example**  
```js
let account = new Account();
let record = account.decryptRecords(["record1ciphertext", "record2ciphertext"]);
```

---

<a name="Account+ownsRecordCiphertext"></a>

### ownsRecordCiphertext

<p>Determines whether the account owns a ciphertext record</p>

```javascript
account.ownsRecordCiphertext(ciphertext) ⇒ boolean
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type |
| --- | --- |
| ciphertext | <code>RecordCipherText</code> \| <code>string</code> |
| *return* | <code>boolean</code> | 

**Example**  
```js
// Create a connection to the Aleo network and an account
let connection = new NodeConnection("vm.aleo.org/api");
let account = Account.fromCiphertext("ciphertext", "password");

// Get a record from the network
let record = connection.getBlock(1234);
let recordCipherText = record.transactions[0].execution.transitions[0].id;

// Check if the account owns the record
if account.ownsRecord(recordCipherText) {
    // Then one can do something like:
    // Decrypt the record and check if it's spent
    // Store the record in a local database
    // Etc.
}
```

---

<a name="Account+sign"></a>

### sign

<p>Signs a message with the account's private key.
Returns a Signature.</p>

```javascript
account.sign(message) ⇒ Signature
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type |
| --- | --- |
| message | <code>Uint8Array</code> |
| *return* | <code>Signature</code> | 

**Example**  
```js
let account = new Account();
let message = Uint8Array.from([104, 101, 108, 108, 111 119, 111, 114, 108, 100])
account.sign(message);
```

---

<a name="Account+verify"></a>

### verify

<p>Verifies the Signature on a message.</p>

```javascript
account.verify(message, signature) ⇒ boolean
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type |
| --- | --- |
| message | <code>Uint8Array</code> |
| signature | <code>Signature</code> |
| *return* | <code>boolean</code> | 

**Example**  
```js
let account = new Account();
let message = Uint8Array.from([104, 101, 108, 108, 111 119, 111, 114, 108, 100])
let signature = account.sign(message);
account.verify(message, signature);
```

---

<a name="Account.fromCiphertext"></a>

### fromCiphertext

<p>Attempts to create an account from a private key ciphertext</p>

```javascript
Account.fromCiphertext(ciphertext, password) ⇒ PrivateKey | Error
```

**Kind**: static method of [<code>Account</code>](#Account)  

| Param | Type |
| --- | --- |
| ciphertext | <code>PrivateKeyCiphertext</code> \| <code>string</code> |
| password | <code>string</code> |
| *return* | <code>PrivateKey</code> \| <code>Error</code> | 

**Example**  
```js
let ciphertext = PrivateKey.newEncrypted("password");
let account = Account.fromCiphertext(ciphertext, "password");
```
