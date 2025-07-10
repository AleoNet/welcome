---
id: transitions
title: Transitions
sidebar_label: Transitions
---

A **transition** represents a private and optional public state transition, which Aleo validators process to change state (e.g. to transfer private or public tokens to an Aleo address).

## Components of a Transition
An Aleo transition is serialized in the following format:

|    Parameter    |         Type         |                                                                        Description                                                                        |
|:---------------:|:--------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------:|
|      `id`       | finite field element |                         The transition id, which is computed via the Merkle tree digest formed from the `Input` and `Output` IDs                          |
|  `program_id`   |        string        |                          The program ID, which is associated with a verification key on a globally maintained map on the ledger.                          |
| `function_name` |        string        |                                    The function name, which is used to compute a `function_id` using the `program_id`.                                    |
|    `inputs`     |  array of `Input`s   |                                 The transition `Input`s, which can be a `constant`, `public`, `private`, or `inputRecord`                                 |
|    `outputs`    |  array of `Output`s  |                                The transition `Output`s, which can be a `constant`, `public`, `private`, `outputRecord` or [`Future`](https://docs.leo-lang.org/guides/async)                                |
|      `tpk`      |    group element     |                    The transition public key, equivalent to `r * G`                    |
|      `tcm`      | finite field element |                                                                 The transition commitment, hash of transition view key (tvk)                                                                 |
|      `scm`      | finite field element |                                                                 Signer commitment, hash of the owner address and root transition view key (root_tvk)                                                                 |

## Transition Public Key (TPK)

The transition public key (`tpk`) is computed as part of the transition key generation process:

1. **Sample Random Nonce**: A random nonce is generated as a field element
2. **Compute Transition Secret Key (r)**: The transition secret key `r` is computed as:
   ```
   r = HashToScalar(serial_number_domain || sk_sig || nonce)
   ```
   Where `sk_sig` is the signature secret key from the account's private key and `||` denotes concatenation

3. **Compute Transition Public Key**: The `tpk` is computed as:
   ```
   tpk = r * G
   ```
   Where `G` is the generator point

The `tpk` is equivalent to `r * G` and serves as the random nonce used to verify the digital signature provided by the `owner` in a transaction.

## Transition View Key (TVK)

The transition view key (`tvk`) is computed after the transition public key generation:

**Compute Transition View Key**: The `tvk` is computed as:
```
tvk = (signer_address * r).to_x_coordinate()
```
Where the result is converted to its x-coordinate as a field element

The `tvk` is used in the encryption process for private inputs and outputs.

## Transition Commitment (TCM)

The transition commitment (`tcm`) is computed as:
```
tcm = Hash(tvk)
```
Where `tvk` is the transition view key computed in the previous step. This commitment provides a cryptographic binding to the transition view key while maintaining privacy.

## Signer Commitment (SCM)

The signer commitment (`scm`) is computed as:
```
scm = Hash(signer.to_x_coordinate() || root_tvk)
```
Where:
- `signer.to_x_coordinate()` is the x-coordinate of the signer's address
- `root_tvk` is the root transition view key when multiple circuits are involved
- The commitment binds the signer's identity to the root transition view key

The signer commitment serves as a cryptographic proof that links the transition to its creator while preserving privacy properties.

## Record

### Input Record
An `inputRecord` consists of a `record_commitment`, `gamma`, `record_view_key`, `serial_number`, and a `tag`. When a record is used as input to a transition, it is computed to its serial number through the following process:

1. **Record View Key Computation**: The record view key is computed as `(record.nonce * view_key).to_x_coordinate()`. `nonce` is computed from `randomizer * G` where `randomizer = Hash(tvk || index)`.

2. **Record Commitment**: There are currently two versions of record commitment:
   - **Version 0**: Hash of `(program_id || record_name || record)` without the last 8 version bits
   - **Version 1**: Take the Version 0 hash, append with version bits, then:
     - Construct commitment nonce: `Hash(commitment_domain || record_view_key)`
     - Compute the record `commitment` using the above nonce

:::note
Version 0 records from `credits.aleo` are required to upgrade by calling the `upgrade()` function.
:::

3. **Generator H Computation**: A generator `H` is computed as `HashToGroup(serial_number_domain || commitment)` using the Poseidon hash-to-group function with the serial number domain and commitment.

4. **Gamma Calculation**: `gamma` is calculated as `sk_sig * H`, where `sk_sig` is from the owner's private key, and `h_r` is computed as `r * H` for verification purposes.

5. **Serial Number Derivation**: The `serial_number` is computed by calling `Record::serial_number_from_gamma(gamma, commitment)`, which:
   - First calculates `sn_nonce` as `Hash(serial_number_domain || (COFACTOR * gamma).to_x_coordinate())`
   - Then computes `serial_number` as `Commit((serial_number_domain || commitment).to_bits_le(), sn_nonce)`

6. **Tag Calculation**: The `tag` is computed as `Record::tag(sk_tag, commitment)`, where `sk_tag` is derived from the graph key.

The serial number is disclosed on the ledger to publicly announce that the record has been spent, preventing double-spending while maintaining privacy. The tag is used to keep track of records that are spendable by the user.

### Output Record
An `outputRecord` consists of a `record_commitment`, `checksum`, `record_ciphertext`, and `sender_ciphertext`. When a record is produced as output from a transition, it is computed through the following process:

1. **Record Commitment**: There are currently two versions of record commitment:
   - **Version 0**: Hash of `(program_id || record_name || record)` without the last 8 version bits
   - **Version 1**: Take the Version 0 hash, append with version bits, then:
     - Construct commitment nonce: `Hash(commitment_domain || record_view_key)`
     - Compute the record `commitment` using the above nonce

2. **Record Encryption Randomizer**: The encryption randomizer for the record data is computed as `Hash(tvk || index)`, where `tvk` is the transition view key and `index` is the field element representation of the output register locator.

3. **Record View Key Generation**: The record view key is computed as `(owner_address * randomizer).to_x_coordinate()`, where `owner_address` is the record owner's address and `randomizer` is from step 2.

4. **Record Encryption**: The `record_ciphertext` is computed by:
   - Generating multiple randomizers using `Hash(encryption_domain || record_view_key)` based on the number of field elements needed
   - Encrypting each private field element by adding the corresponding randomizer: `encrypted_field[i] = plaintext_field[i] + randomizer[i]`
   - Constant and public entries remain unencrypted

5. **Checksum Calculation**: The `checksum` is computed as a hash of the `record_ciphertext` converted to little-endian bits and is used to verify the integrity of the encrypted record.

6. **Sender Ciphertext**: The `sender_ciphertext` is computed using a **different randomizer** distinct from the record encryption randomizer:
   - **Sender Ciphertext Randomizer**: Computed as `Hash(encryption_domain || record_view_key || 1)`
   - Encrypting the signer's address x-coordinate: `sender_ciphertext = signer_address.to_x_coordinate() + randomizer`

Record checksum and commitment are publicly visible on the ledger, while the record ciphertext contains the encrypted record data that can only be decrypted by the record owner. The sender ciphertext provides an encrypted reference to the transaction signer while maintaining privacy.

:::info
In the latest record version, commitments appear random even for similar records, making it difficult to associate them with specific data. The use of a view key ensures that only the record owner can correlate commitments with the actual data, offering enhanced privacy against traffic analysis and pattern matching.
:::

## Non-Record Ciphertext
Non-record ciphertext are encrypted data that hides private information on Aleo network and used to protect private inputs and outputs. Records can only be decrypted by the owner's view key, while non-record plaintext ciphertext can be decrypted using a plaintext view key derived from the function caller's view key.

### Encryption

#### 1: Create a Plaintext View Key
- The plaintext view key is computed as `Hash(function_id || tvk || index)`
- Where:
    - `function_id` is the unique identifier of the function being executed
    - `tvk` is the transition view key from the request
    - `index` is the field element representation of:
        - For inputs: the input index (cast from u16)
        - For outputs: `(num_inputs + output_index)`
- Each private input and output gets its own unique plaintext view key

#### 2: Generate Randomizers
- Determine the number of randomizers needed based on the plaintext structure
- Generate randomizers using `Hash(encryption_domain || plaintext_view_key)` with `num_randomizers` as number of outputs
- One randomizer is created for each field element in the plaintext

#### 3: Encrypt the Plaintext
- Convert the plaintext to field elements
- Add each randomizer to the corresponding field element:
  - `encrypted_field[i] = plaintext_field[i] + randomizer[i]`
- Create the ciphertext from the encrypted field elements

#### 4: Compute Ciphertext Hash
- Convert the ciphertext to field elements
- Compute the ciphertext hash as `Hash(ciphertext_fields)`
- This hash serves as the output ID for verification

### Decryption

#### 1: Recreate the Plaintext View Key
- Use the same method as encryption
- Compute `plaintext_view_key = (tpk * view_key).to_x_coordinate()`
- Where `tpk` is the transition public key (`r * G`) and `view_key` is the account view key
- This works because the signer address is basically a scalar multiplication of `view_key` on generator `G`

#### 2: Regenerate the Same Randomizers
- Determine the number of randomizers needed (same as encryption)
- Use the same hash function: `Hash(encryption_domain || plaintext_view_key)` with `num_randomizers` as number of outputs

#### 3: Decrypt the Ciphertext
- Subtract each randomizer from the corresponding encrypted field element:
  - `plaintext_field[i] = encrypted_field[i] - randomizer[i]`
- Reconstruct the original plaintext from the decrypted field elements
