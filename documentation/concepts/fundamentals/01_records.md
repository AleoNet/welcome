---
id: records
title: Records
sidebar_label: Records
---


**Records** are fundamental data structures that encode a user's **private state**.

Similar to UTXOs on blockchains such as Bitcoin, applications update their state by consuming records containing the old state and producing new records that contain the updated state. Records that have been used will be marked as spent and cannot be used again. 

```aleo
record privateState:
    owner as address.private;
    amount as u8.private;
```

As a tangible example, an account's private balance of Aleo Credits is stored in instances of the `Credits` record from the program `credits.aleo`.  See the [Aleo Credits](./05_credits.md) section for more details.


## Components of a Record

<!-- Each field within a record has a visibility modifier that determines if that data will be encrypted using the owner's private key.  Records are serialized in the following format:

| Parameter |          Type          |                                                      Example                                                       |
|:---------:|:----------------------:|:----------------------------------------------------------------------------------------------------------------------:|
|  `owner`  |        address         |                               The address of the record's owner                              |
|  `data`   | Map\<Identifier, Entry\> | A key-value storage containing arbitrary application-dependent information. Each entry has it's own visibility modifier |
|  `nonce`  |         group          |  `586159291143381969269735819109479494044234898090369670064655group.public`,  |
|  `version`|         u8             |                                     The record's version                                                |


An example record:
```bash
{
  owner: aleo13ssze66adjjkt795z9u5wpq8h6kn0y2657726h4h3e3wfnez4vqsm3008q.private,
  amount: 100u8.private,
  _nonce: 5861592911433819692697358191094794940442348980903696700646555355124091569429group.public,
  version: 1u8.public
}
``` -->

### Owner
The `owner` is required parameter on every record.  It is the address of the account that is authorized to spend the record.

### Data
The record can optionally encode arbitrary application information. In the above example, the data is a single key titled `amount` of type `u8` with a visibility of `private`. This enables users to securely and privately transfer record data and values between one another over a public network. Only the sender and receiver with their respective view keys are able to decrypt the private entries.

### Nonce
Every record will have a particular `nonce`, also known as the record's serial number, associated with it.  This is a unique identifier for each record that generated when a specific instace of a record is produced, and is used to prevent double-spending attacks.

### Version  
Every record will have a `version` field specifiying the version of the program record.  

#### Version 1
Version 1 was the original record format.  It was deprecated as of ConsensusV8, and any records created prior to that must be upgraded to version 2 in order to be spent.  

#### Version 2
Version 2 introduced several new enhancements to the existing record model.  Records now include a sender ciphertext field alongside them, which allows owners to determine the address that sent them the record.  Additionally, records also now have individual record view keys, which allow for more granular disclosure of individual transactions without revealing a user's entire history.
