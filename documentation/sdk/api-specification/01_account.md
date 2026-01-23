---
title: Account
sidebar_label: Account
---

<a name="Account"></a>

## Overview {#Account}
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
    * _constructor_
        * [new Account(params)](#new_Account_new)
    * _instance_
        * [.privateKey()](#Account+privateKey) ⇒ <code>PrivateKey</code>
        * [.viewKey()](#Account+viewKey) ⇒ <code>ViewKey</code>
        * [.computeKey()](#Account+computeKey) ⇒ <code>ComputeKey</code>
        * [.address()](#Account+address) ⇒ <code>Address</code>
        * [.clone()](#Account+clone) ⇒ <code>Account</code>
        * [.toString()](#Account+toString) ⇒ <code>string</code>
        * [.encryptAccount(password)](#Account+encryptAccount) ⇒ <code>PrivateKeyCiphertext</code>
        * [.decryptRecord(ciphertext)](#Account+decryptRecord) ⇒ <code>RecordPlaintext</code>
        * [.decryptRecords(ciphertexts)](#Account+decryptRecords) ⇒ <code>Array.&lt;RecordPlaintext&gt;</code>
        * [.generateRecordViewKey(recordCiphertext)](#Account+generateRecordViewKey) ⇒ <code>Field</code>
        * [.generateTransitionViewKey(tpk)](#Account+generateTransitionViewKey) ⇒ <code>Field</code>
        * [.ownsRecordCiphertext(ciphertext)](#Account+ownsRecordCiphertext) ⇒ <code>boolean</code>
        * [.sign(message)](#Account+sign) ⇒ <code>Signature</code>
        * [.verify(message, signature)](#Account+verify) ⇒ <code>boolean</code>
    * _static_
        * [.fromCiphertext(ciphertext, password)](#Account.fromCiphertext) ⇒ <code>Account</code> \| <code>Error</code>

## Example
```javascript
import { Account } from "@provablehq/sdk/testnet.js";

// Create a new account
const myRandomAccount = new Account();

// Create an account from a randomly generated seed
const seed = new Uint8Array([94, 91, 52, 251, 240, 230, 226, 35, 117, 253, 224, 210, 175, 13, 205, 120, 155, 214, 7, 169, 66, 62, 206, 50, 188, 40, 29, 122, 40, 250, 54, 18]);
const mySeededAccount = new Account({seed: seed});

// Create an account from an existing private key
const myExistingAccount = new Account({privateKey: process.env.privateKey});

// Sign a message
const hello_world = Uint8Array.from([104, 101, 108, 108, 111, 119, 111, 114, 108, 100]);
const signature = myRandomAccount.sign(hello_world);

// Verify a signature
assert(myRandomAccount.verify(hello_world, signature));
```

## Constructor

<a name="new_Account_new"></a>

### Account

<p>Create a new Aleo Account from a random seed, an existing private key, or a provided seed array.</p>

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
import { Account } from "@provablehq/sdk/testnet.js";

// Create a new account with random seed
const myRandomAccount = new Account();

// Create an account from a randomly generated seed
const seed = new Uint8Array([94, 91, 52, 251, 240, 230, 226, 35, 117, 253, 224, 210, 175, 13, 205, 120, 155, 214, 7, 169, 66, 62, 206, 50, 188, 40, 29, 122, 40, 250, 54, 18]);
const mySeededAccount = new Account({seed: seed});

// Create an account from an existing private key
const myExistingAccount = new Account({privateKey: 'APrivateKey1zkp...'});
```

## Methods

<a name="Account+privateKey"></a>

### privateKey {#Account+privateKey}

<p>Returns the PrivateKey associated with the account.</p>

```javascript
account.privateKey() ⇒ PrivateKey
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>PrivateKey</code> | The account's private key object |

**Example**  
```js
import { Account } from "@provablehq/sdk/testnet.js";

const account = new Account();
const privateKey = account.privateKey();
```

---

<a name="Account+viewKey"></a>

### viewKey {#Account+viewKey}

<p>Returns the ViewKey associated with the account.</p>

```javascript
account.viewKey() ⇒ ViewKey
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>ViewKey</code> | The account's view key for decrypting records |

**Example**  
```js
import { Account } from "@provablehq/sdk/testnet.js";

const account = new Account();
const viewKey = account.viewKey();
```

---

<a name="Account+computeKey"></a>

### computeKey {#Account+computeKey}

<p>Returns the ComputeKey associated with the account.</p>

```javascript
account.computeKey() ⇒ ComputeKey
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>ComputeKey</code> | The account's compute key for program execution |

**Example**  
```js
import { Account } from "@provablehq/sdk/testnet.js";

const account = new Account();
const computeKey = account.computeKey();
```

---

<a name="Account+address"></a>

### address {#Account+address}

<p>Returns the Aleo address associated with the account.</p>

```javascript
account.address() ⇒ Address
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Address</code> | The account's public address |

**Example**  
```js
import { Account } from "@provablehq/sdk/testnet.js";

const account = new Account();
const address = account.address();
```

---

<a name="Account+clone"></a>

### clone {#Account+clone}

<p>Deep clones the Account.</p>

```javascript
account.clone() ⇒ Account
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>Account</code> | A deep copy of the account |

**Example**  
```js
import { Account } from "@provablehq/sdk/testnet.js";

const account = new Account();
const clonedAccount = account.clone();
```

---

<a name="Account+toString"></a>

### toString {#Account+toString}

<p>Returns the address of the account in a string representation.</p>

```javascript
account.toString() ⇒ string
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| *return* | <code>string</code> | The account's address as a string |

---

<a name="Account+encryptAccount"></a>

### encryptAccount {#Account+encryptAccount}

<p>Encrypts the account's private key with a password.</p>

```javascript
account.encryptAccount(password) ⇒ PrivateKeyCiphertext
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| password | <code>string</code> | Password to encrypt the private key |
| *return* | <code>PrivateKeyCiphertext</code> | The encrypted private key ciphertext |

**Example**  
```js
import { Account } from "@provablehq/sdk/testnet.js";

const account = new Account();
const ciphertext = account.encryptAccount("password");
process.env.ciphertext = ciphertext.toString();
```

---

<a name="Account+decryptRecord"></a>

### decryptRecord {#Account+decryptRecord}

<p>Decrypts an encrypted record string into a plaintext record object.</p>

```javascript
account.decryptRecord(ciphertext) ⇒ RecordPlaintext
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| ciphertext | <code>string</code> | A string representing the ciphertext of a record |
| *return* | <code>RecordPlaintext</code> | The decrypted record plaintext |

**Example**  
```js
// Import the AleoNetworkClient and Account classes
import { AleoNetworkClient, Account } from "@provablehq/sdk/testnet.js";

// Create a connection to the Aleo network and an account
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const account = Account.fromCiphertext(process.env.ciphertext, process.env.password);

// Get the record ciphertexts from a transaction.
const transaction = await networkClient.getTransactionObject("at1fjy6s9md2v4rgcn3j3q4qndtfaa2zvg58a4uha0rujvrn4cumu9qfazxdd");
const records = transaction.records();

// Decrypt any records the account owns.
const decryptedRecords = [];
for (const record of records) {
   if (account.decryptRecord(record)) {
     decryptedRecords.push(record);
   }
}
```

---

<a name="Account+decryptRecords"></a>

### decryptRecords {#Account+decryptRecords}

<p>Decrypts an array of Record ciphertext strings into an array of record plaintext objects.</p>

```javascript
account.decryptRecords(ciphertexts) ⇒ Array.<RecordPlaintext>
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| ciphertexts | <code>Array.&lt;string&gt;</code> | An array of strings representing the ciphertexts of records |
| *return* | <code>Array.&lt;RecordPlaintext&gt;</code> | An array of decrypted record plaintexts |

**Example**  
```js
// Import the AleoNetworkClient and Account classes
import { AleoNetworkClient, Account } from "@provablehq/sdk/testnet.js";

// Create a connection to the Aleo network and an account
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const account = Account.fromCiphertext(process.env.ciphertext, process.env.password);

// Get the record ciphertexts from a transaction.
const transaction = await networkClient.getTransactionObject("at1fjy6s9md2v4rgcn3j3q4qndtfaa2zvg58a4uha0rujvrn4cumu9qfazxdd");
const records = transaction.records();

// Decrypt any records the account owns. If the account owns no records, the array will be empty.
const decryptedRecords = account.decryptRecords(records);
```

---

<a name="Account+generateRecordViewKey"></a>

### generateRecordViewKey {#Account+generateRecordViewKey}

<p>Generates a record view key from the account owner's view key and the record ciphertext.
This key can be used to decrypt the record without revealing the account's view key.</p>

```javascript
account.generateRecordViewKey(recordCiphertext) ⇒ Field
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| recordCiphertext | <code>RecordCiphertext</code> \| <code>string</code> | The record ciphertext to generate the view key for |
| *return* | <code>Field</code> | The record view key |

**Example**  
```js
// Import the Account class
import { Account, RecordCiphertext } from "@provablehq/sdk/testnet.js";

// Create an account object from a previously encrypted ciphertext and password.
const account = Account.fromCiphertext(process.env.ciphertext, process.env.password);

// Generate a record view key from the account's view key and a record ciphertext
const recordCiphertext = RecordCiphertext.fromString("your_record_ciphertext_here");
const recordViewKey = account.generateRecordViewKey(recordCiphertext);
```

---

<a name="Account+generateTransitionViewKey"></a>

### generateTransitionViewKey {#Account+generateTransitionViewKey}

<p>Generates a transition view key from the account owner's view key and the transition public key.
This key can be used to decrypt the private inputs and outputs of a transition without 
revealing the account's view key.</p>

```javascript
account.generateTransitionViewKey(tpk) ⇒ Field
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| tpk | <code>string</code> \| <code>Group</code> | The transition public key |
| *return* | <code>Field</code> | The transition view key |

**Example**  
```js
// Import the Account class
import { Account, Group } from "@provablehq/sdk/testnet.js";

// Generate a transition view key from the account's view key and a transition public key
const tpk = Group.fromString("your_transition_public_key_here");

const transitionViewKey = account.generateTransitionViewKey(tpk);
```

---

<a name="Account+ownsRecordCiphertext"></a>

### ownsRecordCiphertext {#Account+ownsRecordCiphertext}

<p>Determines whether the account owns a ciphertext record.</p>

```javascript
account.ownsRecordCiphertext(ciphertext) ⇒ boolean
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| ciphertext | <code>RecordCiphertext</code> \| <code>string</code> | The record ciphertext to check ownership of |
| *return* | <code>boolean</code> | True if the account owns the record, false otherwise |

**Example**  
```js
// Import the AleoNetworkClient and Account classes
import { AleoNetworkClient, Account } from "@provablehq/sdk/testnet.js";

// Create a connection to the Aleo network and an account
const networkClient = new AleoNetworkClient("https://api.explorer.provable.com/v1");
const account = Account.fromCiphertext(process.env.ciphertext, process.env.password);

// Get the record ciphertexts from a transaction and check ownership of them.
const transaction = await networkClient.getTransactionObject("at1fjy6s9md2v4rgcn3j3q4qndtfaa2zvg58a4uha0rujvrn4cumu9qfazxdd");
const records = transaction.records();

// Check if the account owns any of the record ciphertexts present in the transaction.
const ownedRecords = [];
for (const record of records) {
   if (account.ownsRecordCiphertext(record)) {
     ownedRecords.push(record);
   }
}
```

---

<a name="Account+sign"></a>

### sign {#Account+sign}

<p>Signs a message with the account's private key.
Returns a Signature.</p>

```javascript
account.sign(message) ⇒ Signature
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>Uint8Array</code> | Message to be signed |
| *return* | <code>Signature</code> | Signature over the message in bytes |

**Example**  
```js
// Import the Account class
import { Account } from "@provablehq/sdk/testnet.js";

// Create an account and a message to sign.
const account = new Account();
const message = Uint8Array.from([104, 101, 108, 108, 111, 119, 111, 114, 108, 100]);
const signature = account.sign(message);

// Verify the signature.
assert(account.verify(message, signature));
```

---

<a name="Account+verify"></a>

### verify {#Account+verify}

<p>Verifies the Signature on a message.</p>

```javascript
account.verify(message, signature) ⇒ boolean
```

**Kind**: instance method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>Uint8Array</code> | Message in bytes to be signed |
| signature | <code>Signature</code> | Signature to be verified |
| *return* | <code>boolean</code> | True if the signature is valid, false otherwise |

**Example**  
```js
// Import the Account class
import { Account } from "@provablehq/sdk/testnet.js";

// Sign a message.
const account = new Account();
const message = Uint8Array.from([104, 101, 108, 108, 111, 119, 111, 114, 108, 100]);
const signature = account.sign(message);

// Verify the signature.
assert(account.verify(message, signature));
```

---

<a name="Account.fromCiphertext"></a>

### fromCiphertext {#Account.fromCiphertext}

<p>Attempts to create an account from a private key ciphertext</p>

```javascript
Account.fromCiphertext(ciphertext, password) ⇒ Account | Error
```

**Kind**: static method of [<code>Account</code>](#Account)  

| Param | Type | Description |
| --- | --- | --- |
| ciphertext | <code>PrivateKeyCiphertext</code> \| <code>string</code> | The encrypted private key ciphertext or its string representation |
| password | <code>string</code> | The password used to decrypt the private key ciphertext |
| *return* | <code>Account</code> \| <code>Error</code> | A new Account instance created from the decrypted private key |

**Example**  
```js
import { Account } from "@provablehq/sdk/testnet.js";

// Create an account object from a previously encrypted ciphertext and password.
const account = Account.fromCiphertext(process.env.ciphertext, process.env.password);
```
