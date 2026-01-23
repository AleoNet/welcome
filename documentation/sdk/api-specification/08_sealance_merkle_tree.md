---
id: sealance_merkle_tree
title: Sealance Merkle Tree
sidebar_label: Sealance Merkle Tree
---

## Overview

A utility class for constructing Merkle exclusion proofs for compliant stablecoin programs following the Sealance architecture. This class provides methods for building Merkle trees from Aleo addresses and generating proofs that can be used in Aleo transactions.

**Kind**: global class  

* SealanceMerkleTree
    * _constructor_
        * [new SealanceMerkleTree()](#new_SealanceMerkleTree_new)
    * _instance_
        * [.convertAddressToField(address)](#convertaddresstofield) ⇒ <code>bigint</code>
        * [.hashTwoElements(prefix, el1, el2)](#hashtwoelements) ⇒ <code>Field</code>
        * [.buildTree(leaves)](#buildtree) ⇒ <code>bigint[]</code>
        * [.convertTreeToBigInt(tree)](#converttreetobigint) ⇒ <code>bigint[]</code>
        * [.generateLeaves(addresses, maxTreeDepth)](#generateleaves) ⇒ <code>string[]</code>
        * [.getLeafIndices(merkleTree, address)](#getleafindices) ⇒ <code>[number, number]</code>
        * [.getSiblingPath(tree, leafIndex, depth)](#getsiblingpath) ⇒ <code>object</code>
        * [.formatMerkleProof(proof)](#formatmerkleproof) ⇒ <code>string</code>

## Constructor

<a name="new_SealanceMerkleTree_new"></a>

### SealanceMerkleTree

<p>Create a new SealanceMerkleTree instance for constructing Merkle exclusion proofs.</p>

```javascript
new SealanceMerkleTree()
```

**Example**  
```js
import { SealanceMerkleTree } from "@provablehq/sdk/mainnet.js";

// Create a new SealanceMerkleTree instance
const sealance = new SealanceMerkleTree();

// Generate a complete exclusion proof
const blockedAddresses = [
    "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px",
    "aleo1s3ws5tra87fjycnjrwsjcrnw2qxr8jfqqdugnf0xzqqw29q9m5pqem2u4t",
];

// Generate leaves and build tree
const leaves = sealance.generateLeaves(blockedAddresses);
const tree = sealance.buildTree(leaves);

// Generate exclusion proof for an address not in the blocklist
const targetAddress = "aleo1kypwp5m7qtk9mwazgcpg0tq8aal23mnrvwfvug65qgcg9xvsrqgspyjm6n";
const [leftIdx, rightIdx] = sealance.getLeafIndices(tree, targetAddress);
const proofLeft = sealance.getSiblingPath(tree, leftIdx, 15);
const proofRight = sealance.getSiblingPath(tree, rightIdx, 15);
const formattedProof = sealance.formatMerkleProof([proofLeft, proofRight]);
```

---

## SealanceMerkleTree Methods

<a name="convertaddresstofield"></a>

### convertAddressToField

Converts an Aleo blockchain address to a field element. This function decodes a bech32m-encoded Aleo address and converts it to a field element represented as a BigInt.

```javascript
convertAddressToField(address) ⇒ bigint
```

| Parameters | Type | Description |
| --- | --- | --- |
| __address__ | `string` | *The Aleo blockchain address (e.g., "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px")* |
| __*return*__ | `bigint` | *A BigInt representing the field element* |

**Example**
```javascript
const sealance = new SealanceMerkleTree();
const address = "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px";
const fieldValue = sealance.convertAddressToField(address);
console.log(fieldValue); // 123456789...n
```

---

<a name="hashtwoelements"></a>

### hashTwoElements

Hashes two elements using the Poseidon4 hash function.

```javascript
hashTwoElements(prefix, el1, el2) ⇒ Field
```

| Parameters | Type | Description |
| --- | --- | --- |
| __prefix__ | `string` | *Prefix for the hash (e.g., "0field" for nodes, "1field" for leaves)* |
| __el1__ | `string` | *First element to hash* |
| __el2__ | `string` | *Second element to hash* |
| __*return*__ | `Field` | *The hash result as a Field* |

**Example**
```javascript
const sealance = new SealanceMerkleTree();
const hash = sealance.hashTwoElements("1field", "123field", "456field");
console.log(hash.toString());
```

---

<a name="buildtree"></a>

### buildTree

Builds a Merkle tree from given leaves. The tree is built bottom-up, hashing pairs of elements at each level.

```javascript
buildTree(leaves) ⇒ bigint[]
```

| Parameters | Type | Description |
| --- | --- | --- |
| __leaves__ | `string[]` | *Array of leaf elements as field strings (must have even number of elements)* |
| __*return*__ | `bigint[]` | *Array representing the complete Merkle tree as BigInts* |

**Example**
```javascript
const sealance = new SealanceMerkleTree();
const leaves = ["0field", "1field", "2field", "3field"];
const tree = sealance.buildTree(leaves);
const root = tree[tree.length - 1]; // Get the Merkle root
console.log("Merkle root:", root);
```

---

<a name="converttreetobigint"></a>

### convertTreeToBigInt

Converts an array of decimal string representations of U256 numbers to an array of BigInts.

```javascript
convertTreeToBigInt(tree) ⇒ bigint[]
```

| Parameters | Type | Description |
| --- | --- | --- |
| __tree__ | `string[]` | *Array of decimal string representations of U256 numbers* |
| __*return*__ | `bigint[]` | *Array of BigInts* |

**Example**
```javascript
const sealance = new SealanceMerkleTree();
const treeStrings = [
    "0",
    "4328470178059738374782465505490977516512210899136548187530607227309847251692",
    "1741259420362056497457198439964202806733137875365061915996980524089960046336"
];
const treeBigInts = sealance.convertTreeToBigInt(treeStrings);
console.log(treeBigInts);
// [0n, 4328470178059738374782465505490977516512210899136548187530607227309847251692n, ...]
```

---

<a name="generateleaves"></a>

### generateLeaves

Converts Aleo addresses to field elements, sorts them, pads with zero fields, and returns an array ready for Merkle tree construction.

```javascript
generateLeaves(addresses, maxTreeDepth) ⇒ string[]
```

| Parameters | Type | Description |
| --- | --- | --- |
| __addresses__ | `string[]` | *Array of Aleo addresses* |
| __maxTreeDepth__ | `number` | *Optional. Maximum depth of the Merkle tree (default: 15)* |
| __*return*__ | `string[]` | *Array of field elements ready for Merkle tree construction* |

**Example**
```javascript
const sealance = new SealanceMerkleTree();
const addresses = [
    "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px",
    "aleo1s3ws5tra87fjycnjrwsjcrnw2qxr8jfqqdugnf0xzqqw29q9m5pqem2u4t",
];
const leaves = sealance.generateLeaves(addresses, 15);
console.log(leaves);
// ["0field", "1295133970529764960316948294624974168921228814652993007266766481909235735940field", ...]
```

---

<a name="getleafindices"></a>

### getLeafIndices

Finds the leaf indices for a non-inclusion proof of an address. Returns the indices of the two adjacent leaves that surround the target address.

```javascript
getLeafIndices(merkleTree, address) ⇒ [number, number]
```

| Parameters | Type | Description |
| --- | --- | --- |
| __merkleTree__ | `bigint[]` | *The complete Merkle tree as array of BigInts* |
| __address__ | `string` | *The Aleo address for which to find indices* |
| __*return*__ | `[number, number]` | *Tuple of [leftLeafIndex, rightLeafIndex]* |

**Example**
```javascript
const sealance = new SealanceMerkleTree();
const addresses = [
    "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px",
    "aleo1s3ws5tra87fjycnjrwsjcrnw2qxr8jfqqdugnf0xzqqw29q9m5pqem2u4t",
];
const leaves = sealance.generateLeaves(addresses);
const tree = sealance.buildTree(leaves);

// Find indices for an address not in the blocklist
const targetAddress = "aleo1kypwp5m7qtk9mwazgcpg0tq8aal23mnrvwfvug65qgcg9xvsrqgspyjm6n";
const [leftIdx, rightIdx] = sealance.getLeafIndices(tree, targetAddress);
console.log(`Left index: ${leftIdx}, Right index: ${rightIdx}`);
```

---

<a name="getsiblingpath"></a>

### getSiblingPath

Generates the sibling path (Merkle proof) for a given leaf index.

```javascript
getSiblingPath(tree, leafIndex, depth) ⇒ { siblings: bigint[], leaf_index: number }
```

| Parameters | Type | Description |
| --- | --- | --- |
| __tree__ | `bigint[]` | *The complete Merkle tree* |
| __leafIndex__ | `number` | *Index of the leaf for which to generate the proof* |
| __depth__ | `number` | *Maximum depth of the tree* |
| __*return*__ | `object` | *Object containing siblings array and leaf_index* |

**Example**
```javascript
const sealance = new SealanceMerkleTree();
const addresses = [
    "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px",
    "aleo1s3ws5tra87fjycnjrwsjcrnw2qxr8jfqqdugnf0xzqqw29q9m5pqem2u4t",
];
const leaves = sealance.generateLeaves(addresses);
const tree = sealance.buildTree(leaves);
const [leftIdx, rightIdx] = sealance.getLeafIndices(tree, "aleo1...");

const proof = sealance.getSiblingPath(tree, leftIdx, 15);
console.log(proof);
// { siblings: [0n, 1n, ...], leaf_index: 0 }
```

---

<a name="formatmerkleproof"></a>

### formatMerkleProof

Generates a formatted exclusion proof suitable for Aleo transactions.

```javascript
formatMerkleProof(proof) ⇒ string
```

| Parameters | Type | Description |
| --- | --- | --- |
| __proof__ | `{ siblings: bigint[], leaf_index: number }[]` | *An array of two sibling path objects* |
| __*return*__ | `string` | *String representation of the exclusion proof formatted for Aleo* |

**Example**
```javascript
const sealance = new SealanceMerkleTree();
const addresses = [
    "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px",
    "aleo1s3ws5tra87fjycnjrwsjcrnw2qxr8jfqqdugnf0xzqqw29q9m5pqem2u4t",
];
const leaves = sealance.generateLeaves(addresses);
const tree = sealance.buildTree(leaves);

const targetAddress = "aleo1kypwp5m7qtk9mwazgcpg0tq8aal23mnrvwfvug65qgcg9xvsrqgspyjm6n";
const [leftIdx, rightIdx] = sealance.getLeafIndices(tree, targetAddress);
const proofLeft = sealance.getSiblingPath(tree, leftIdx, 15);
const proofRight = sealance.getSiblingPath(tree, rightIdx, 15);

const formattedProof = sealance.formatMerkleProof([proofLeft, proofRight]);
console.log(formattedProof);
// "[{siblings: [0field, 1field, ...], leaf_index: 0u32}, {siblings: [0field, 2field, ...], leaf_index: 1u32}]"
```

---

## Complete Example

Here is a complete example showing how to generate an exclusion proof for a compliant stablecoin transaction:

```javascript
import { SealanceMerkleTree } from "@provablehq/sdk/mainnet.js";

// Initialize the Sealance Merkle Tree
const sealance = new SealanceMerkleTree();

// Define blocked/sanctioned addresses
const blockedAddresses = [
    "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px",
    "aleo1s3ws5tra87fjycnjrwsjcrnw2qxr8jfqqdugnf0xzqqw29q9m5pqem2u4t",
    "aleo1y9mnptjymqaz63l72yp5erer7s82a4q3p0s4kzxw6tqfnp0gfyfsh2n8c8",
];

// Step 1: Generate leaves from blocked addresses
const leaves = sealance.generateLeaves(blockedAddresses, 15);

// Step 2: Build the Merkle tree
const tree = sealance.buildTree(leaves);

// Step 3: Get the Merkle root (for on-chain verification)
const root = tree[tree.length - 1];
console.log("Merkle root:", root.toString() + "field");

// Step 4: Generate exclusion proof for a non-blocked address
const userAddress = "aleo1kypwp5m7qtk9mwazgcpg0tq8aal23mnrvwfvug65qgcg9xvsrqgspyjm6n";
const [leftIdx, rightIdx] = sealance.getLeafIndices(tree, userAddress);

// Step 5: Generate sibling paths for both adjacent leaves
const proofLeft = sealance.getSiblingPath(tree, leftIdx, 15);
const proofRight = sealance.getSiblingPath(tree, rightIdx, 15);

// Step 6: Format the proof for use in Aleo transactions
const exclusionProof = sealance.formatMerkleProof([proofLeft, proofRight]);
console.log("Exclusion proof:", exclusionProof);

// The exclusion proof can now be used as an input to a compliant stablecoin program
// that verifies the sender is not on the blocklist
```
