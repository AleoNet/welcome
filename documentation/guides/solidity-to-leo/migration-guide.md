---
id: migration-guide
title: Migration Guide
description: Guide to migrate from Solidity to Leo
sidebar_label: Migration Guide
---
This guide provides a comprehensive comparison between Solidity (Ethereum's smart contract language) and Leo (Aleo's programming language for zero-knowledge applications). The document covers fundamental differences between these languages and offers practical examples to assist developers transitioning from Ethereum development to Aleo.

## Execution Models

Leo and Solidity differ fundamentally in their execution approaches:

- **Ethereum/Solidity**: On-chain execution where all computation occurs on the blockchain
- **Aleo/Leo**: Off-chain execution with zero-knowledge proofs, where computation occurs privately and only the proof is verified on-chain

This difference influences many language design decisions that can be seen below.

## Basic Structure

### Headers

Programs begin differently in each language:

**Solidity Contract:**
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MyToken {
    // Contract implementation
}
```

**Leo Program:**
```leo
// No license identifier required
// No pragma needed

program my_token.aleo {
    // Program implementation
}
```

**Key Differences:**
- Leo does not require license identifiers or pragma statements
- Import statements in Leo use program IDs rather than file paths
- Leo programs must have a `.aleo` suffix in their name
- To define a contract in Solidity, `contract` is used as the keyword. In Leo, programs (equivalent to smart contracts in Solidity) are defined with the `program` keyword, followed by curly brackets `{}`

### Constructor
Constructor in Solidity is optional. Leo does not have a constructor currently, but [ARC-0006: Program Upgradability](https://github.com/ProvableHQ/ARCs/discussions/94) will introduce a must-have constructor in new programs in Leo. While constructor in Solidity only runs once, constructor in Leo is immutable and will run as part of a deployment or upgrade, thus is used to define the program upgradability logic.

### Comments

Both languages support identical comment syntax:

```leo
// Single line comment in both languages

/*
 * Multi-line comments
 * work identically too
 */
```

### Imports

**Solidity's Import System:**
```solidity
// Import entire file
import "./MyContract.sol";

// Import specific symbols
import {Symbol1, Symbol2} from "./MyContract.sol";

// Import with alias
import * as MyAlias from "./MyContract.sol";

// Import from node_modules
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
```

**Leo's Import System:**
```leo
import credits.aleo;

program helloworld.aleo {
    // Program implementation
}
```

**Important: Leo imports must also be declared in `program.json`:**
```json
{
  "program": "my_token.aleo",
  "version": "0.0.0",
  "description": "",
  "license": "MIT",
  "dependencies": [
    {
      "name": "credits.aleo",   
      "location": "network",    // Importing from network
      "network": "testnet"
    },
    {
      "name": "board.aleo",      
      "location": "local",      // Importing from local
      "path": "../board"
    }
  ]
}
```

**Dependency Types:**
- **Network dependencies**: Programs deployed on Aleo networks (mainnet, testnet)
- **Local dependencies**: Programs in local file system directories

**Key Import Difference:**
- **Solidity**: Imports copy code directly into your contract at compile time, combining everything into one file
- **Leo**: Imported programs remain separate entities - they are not merged with the current file, and each keeps its own unique program ID on the blockchain

## Data & State

### State Variables and Storage Models

Solidity and Leo differ significantly in how they handle state variables, storage, and data privacy.

**Solidity's Approach:**
```solidity
contract Storage {
    // State variables with visibility modifiers (access control only)
    uint256 public constant FIXED_VALUE = 100;  // Compile-time constant
    uint256 public immutable RUNTIME_VALUE;     // Set in constructor
    uint256 public permanentData;               // Auto-generates getter function 
    uint256 internal shared;                    // Accessible in derived contracts
    uint256 private local = 42;                 // Inaccessible in derived contracts - still visible on-chain
    
    constructor(uint256 _value) {
        RUNTIME_VALUE = _value;  // Can be set at construction
    }
    
    function processData(uint256 tempData) public {
        uint256 memoryVar = tempData * 2;   // Memory (temporary)
        permanentData = memoryVar;          // Persisted to storage
    }
}
```

**Leo's Approach:**
```leo
program storage.aleo {
    // Compile-time constants only
    const FIXED_VALUE: u64 = 100u64;

    // Permanant public state: accessible to everyone
    mapping balances: address => u64;
    
    // Permanant private state: stored in records (with cryptographic privacy)
    record Token {
        owner: address,
        amount: u64,
    }
    
    // Transition parameters and returns are private by default unless marked public
    async transition process_data(public amount: u64) -> (Token, Future) {
        let amount_loc: u64 = amount * 2u64; // Local variable
        
        let token: Token = Token {
            owner: self.caller,
            amount: amount_loc,
        };
        
        return (token, finalize_process_data(self.caller, amount_loc));
    }
    
    // Async function to handle on-chain state updates
    // Parameters in async functions are automatically public since network nodes execute the computation
    // Async function cannot return values
    async function finalize_process_data(caller: address, amount_loc: u64) {
        let current_balance: u64 = Mapping::get_or_use(balances, caller, 0u64);
        Mapping::set(balances, caller, current_balance + amount_loc);
    }
}
```

**Key Differences:**
- **Solidity Visibility**: `private`, `internal`, `public` control code access but all data is visible on-chain
- **Leo Privacy**: `public` vs `private` determines actual cryptographic privacy - whether data is stored on-chain or off-chain in [records](../../concepts/fundamentals/02_records.md)
- **Constants**: Solidity has both `constant` and `immutable`, Leo only has compile-time `const`
- **Local Variables**: The `let` keyword declares temporary computation variables (similar to Solidity's memory)
- **No Transient Storage**: Leo does not support Solidity's transient storage concept

### Getter Functions
The compiler of Solidity automatically creates getter functions for all `public` state variables. Leo does not have similar features, but instead provides direct API access to query mapping values from the node without requiring getter functions in the program code.

```solidity
// Solidity: automatic getter generated
contract Example {
    uint256 public value;  // Automatically creates value() function as getter
}
```

**Key Difference:**
- **Solidity**: Requires public state variables or explicit getter functions for external access
- **Leo**: Mapping values are accessible via REST API endpoints without any program code:
  - Endpoint: `GET /{network}/program/{programID}/mapping/{mappingName}/{mappingKey}`
  - Example: `GET /testnet3/program/credis.aleo/mapping/account/aleo1abc...`
  - Reference: [Get Mapping Value API](../../references/apis/12_get_mapping_value.md)

### Deleting state variables

**Solidity's Delete Operation:**
```solidity
contract DeleteExample {
    uint256 public value = 100;
    mapping(address => uint256) public balances;
    
    function resetValue() public {
        delete value;  // Resets to initial value (0 for uint256)
    }
    
    function removeBalance(address user) public {
        delete balances[user];  // Removes mapping entry, resets to initial value (0)
    }
}
```

**Leo's Mapping Operations:**
```leo
program delete_example.aleo {
    mapping balances: address => u64;
    
    async transition remove_balance(user: address) -> Future {
        return finalize_remove_balance(user);
    }
    
    async function finalize_remove_balance(user: address) {
        // Check if mapping contains the key before removing
        let exists: bool = Mapping::contains(balances, user);
        if exists {
            // Remove mapping entry
            Mapping::remove(balances, user);
        }
    }
}
```

**Key Differences:**
- **Solidity**: `delete` operator resets variables to their initial values (0 for numbers, false for booleans, empty for arrays)
- **Leo**: Only supports removing entries from mappings using `Mapping::remove()`
- **No Direct Delete**: Leo doesn't have a direct equivalent to Solidity's `delete` operator for other variable types
- **Mapping Focus**: Leo's deletion functionality is focused on mapping entries, which is the primary state storage mechanism
- **Key Existence Check**: Leo provides `Mapping::contains()` to check if a key exists in a mapping before operations

### Data Types

The type systems differ in several ways:

**Common Types (Similar Behavior):**
```solidity
// Solidity
bool flag = true;
uint32 smallNumber = 100;
address userAddr = 0x742d35...;
```

```leo
// Leo
let flag: bool = true;
let small_number: u32 = 100u32;  // Must append type suffix (u32)
let user_addr: address = aleo1abc...;
```

**Type Suffix Requirement:**
In Leo, all literals must explicitly append their type suffix.

**Leo Special Types:**  

Leo introduces several unique cryptographic types that don't exist in Solidity:

```leo
// Leo's unique cryptographic types
let field_element: field = 123field;          // Field elements for arithmetic
let group_element: group = group::GEN;        // Group elements for elliptic curves  
let scalar_value: scalar = 456scalar;         // Scalar values for cryptographic operations
let user_signature: signature = sign1...;     // Built-in signature type
```

**Signature Verification**: Leo's `signature` type uses the Schnorr signature scheme (different from Solidity's ECDSA), where signatures are generated using a nonce, challenge hash, and private key, then verified by reconstructing the challenge against the public key.

**Leo Limitations:**

1. **Integer Limitations:**
```solidity
// Solidity: supports up to 256 bits
uint256 bigNumber = 115792089237316195423570985008687907853269984665640564039457584007913129639935;
```

```leo
// Leo: maximum 128 bits
let big_number: u128 = 340282366920938463463374607431768211455u128;
// uint256 equivalent does not exist
```

2. **Types Not Supported in Leo:**
```solidity
// Solidity types that Leo does not support
string memory text = "Hello World";           // String type not available in Leo
bytes memory data = hex"1234";                // Bytes type not available in Leo
uint256[] memory dynamicArray;                // Dynamic arrays not available in Leo
mapping(string => uint256) stringMap;         // String keys in mappings not available in Leo
enum Status { Active, Inactive }              // Enum type not available in Leo 
```

```leo
// Leo alternatives or workarounds
let text_hash: field = 123456field;           // Convert text into Leo supported types such as Field
let static_array: [u32; 5] = [1u32, 2u32, 3u32, 4u32, 5u32]; // Fixed-size arrays only
mapping hash_map: field => u64;               // Use field for complex key types
const ACTIVE: u8 = 0u8;                       // Use constants instead of enums
const INACTIVE: u8 = 1u8;
```

3. **Static Arrays in Leo:**
```solidity
// Solidity: supports both dynamic and static arrays
uint256[5] public staticArray;

function updateArray() public {
    staticArray[0] = 42;  // Direct element modification
}
```

```leo
// Leo: only supports static array 
transition simple_array() -> [u32; 3] {
    // Create a fixed-size array of 3 elements
    let numbers: [u32; 3] = [1u32, 2u32, 3u32];
    
    // Modify elements using explicit index type (u8)
    numbers[0u8] = 10u32;
    numbers[1u8] = 20u32;
    
    return numbers;
}
```

**Key Static Array Features:**
- **Fixed Size**: Array size must be known at compile time
- **Element Access**: Use explicit index types (e.g., `array[0u8]`)
- **No Dynamic Operations**: No `push()`, `pop()`, or resizing operations

### Type Conversions

**Solidity's Implicit Conversions:**
```solidity
uint8 small = 100;
uint256 big = small;  // Automatic conversion

// Solidity allows truncation
uint16 large = 300;
uint8 truncated = uint8(large);  // Only the rightmost 8 bits are kept
```

**Leo's Explicit Conversions:**
```leo
let small: u8 = 100u8;
let big: u32 = small as u32;  // Explicit casting required

// Leo fails on truncation (checked casting)
let large: u32 = 300u32;
let truncated: u8 = large as u8;  // Program fails - no truncation allowed unless able to fit into smaller size

// Safe conversions to larger types
let safe: u64 = small as u64;    // No truncation
```

**Key Differences:**
- Leo requires explicit casting with the `as` keyword
- **Truncation Behavior**: Solidity allows truncation during casting, Leo fails on potential data loss
- **Type Promotion**: Solidity automatically promotes smaller types in operations, Leo requires explicit casting

**Automatic Type Promotion Examples:**

```solidity
// Solidity: automatic type promotion
uint8 small = 100;
uint16 medium = 200;
uint16 result = small + medium;  // uint8 automatically promoted to uint16
```

```leo
// Leo: explicit casting required
let small: u8 = 100u8;
let medium: u16 = 200u16;
let result: u16 = (small as u16) + medium;  // Must explicitly cast u8 to u16
// let invalid: u16 = small + medium;  // This would fail - type mismatch
```

### Reference vs Value Types

**Solidity** distinguishes between value types and reference types, requiring explicit data location specification:

```solidity
contract TypeSystem {
    uint256[] storageArray;  // Permanently stored
    
    function processData(uint256[] memory memoryArray) public {
        uint256[] storage localRef = storageArray;    // Reference to storage
        uint256[] memory localCopy = storageArray;    // Copy to memory
        
        localRef[0] = 100;   // Modifies storage
        localCopy[0] = 200;  // Modifies memory copy only
    }
    
    function externalCall(uint256[] calldata data) external {
        // Calldata is read-only, cannot be modified
    }
}
```

**Leo** only supports value types - all data is copied when passed around:

```leo
program value_types.aleo {
    transition process_data(input_array: [u32; 5]) -> [u32; 5] {
        // All data is copied by value
        let local_array: [u32; 5] = input_array;  // Creates a copy
        
        // Can modify individual elements directly
        local_array[0u8] = input_array[0u8] + 1u32;
        local_array[1u8] = input_array[1u8] + 2u32;
        
        return local_array;
    }
}
```

**Key Differences:**
- **Leo Limitation**: Only value types, no reference types
- **Memory Management**: Leo handles memory management automatically based on type semantics, eliminating the need for explicit storage location specifications.

## Functions

### Function Types

Leo completely reimagines function architecture. Instead of Solidity's visibility modifiers, Leo uses different function types:

**Solidity's Approach:**
```solidity
contract Example {
    uint256 private data;
    
    // External function - called from outside
    function publicFunction(uint256 input) external returns (uint256) {
        return internalHelper(input);
    }
    
    // Internal helper - accessible in inherited contracts
    function internalHelper(uint256 input) internal view returns (uint256) {
        return input * 2;
    }
    
    // Private function - only accessible within this contract
    function privateFunction() private pure returns (uint256) {
        return 42;
    }
}

contract Child is Example {
    function useParent(uint256 input) public returns (uint256) {
        return internalHelper(input);  // Can access internal functions
        // return privateFunction();   // Cannot access private functions
    }
}
```

**Leo's Approach:**
```leo
program example.aleo {
    // Transition: externally callable, off-chain execution
    // All inputs and outputs are private by default, requiring explicit 'public' keyword for on-chain visibility
    transition public_function(input: u32, public pub_input2: u32) -> (public u32, u32) {
        let result: u32 = internal_helper(input);
        let pub_result: u32 = result + pub_input2;
        return (pub_result, result);
    }
    
    // Function: helper for transitions (similar to pure functions)
    // Can only compute - no state access, no external calls
    function internal_helper(input: u32) -> u32 {
        let doubled: u32 = inline_multiplier(input, 2u32);
        return doubled;
    }
    
    // Inline: body inserted at call sites (similar to pure functions)
    // Can only compute - no state access, no external calls
    inline inline_multiplier(a: u32, b: u32) -> u32 {
        return a * b;
    }
}
```

**Key Differences:**
- **Externally Callable Functions**: In Leo, only `transition` and `async transition` functions can be called externally. All other functions (`function` and `inline`) are internal and can only be called from within the program
- **Leo's Computation-Only Functions**: Both `function` and `inline` in Leo are similar to Solidity's `pure` functions - they can only perform computations and cannot access state variables or make external calls
- **Visibility in Leo**: Unlike Solidity's visibility modifiers (public, private, internal), Leo's visibility refers to data privacy - whether data is publicly visible on-chain or kept private off-chain
- **Function Overloading**: Unlike Solidity which supports function overloading (multiple functions with the same name but different parameter types), Leo does not allow function overloading. Each function name must be unique within a program, requiring developers to use distinct names for functions with different parameter types.

### Returns

In Leo, return types are specified using an arrow (`->`) syntax, similar to Rust, which differs from Solidity's `returns` keyword.

**Key Differences:**
- **Return Type Syntax**: Leo only requires the type for returns, not identifiers (e.g., `-> u32` vs Solidity's `returns (uint256 value)`)
- **Return Value Handling**: In Solidity, multiple return values can be selectively ignored using commas (e.g., `(index, , ) = f();`), while Leo requires all return values to be caught with exact types
- **Parameter Handling**: Similarly, Solidity allows unused parameters to be omitted in function declarations, while Leo requires all parameters to be explicitly declared with their types

### Modifiers

**Solidity's Modifiers:**
Modifiers in Solidity are usually used to amend the semantics of functions. Similar to inline in Leo, the body is inlined at each call site.

```solidity
contract ModifierExample {
    address public owner;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;  // Continue with function execution
    }
    
    modifier validAmount(uint256 amount) {
        require(amount > 0, "Amount must be positive");
        _;
    }
    
    function withdraw(uint256 amount) public onlyOwner validAmount(amount) {
        // Function body executes after modifiers
        payable(msg.sender).transfer(amount);
    }
}
```

**Leo's Approach:**
Leo doesn't have modifiers, but similar functionality can be achieved using inline functions:

```leo
program modifier_example.aleo {
    // Inline functions provide similar behavior to modifiers
    inline only_owner(caller: address, owner: address) {
        assert_eq(caller, owner);
    }
    
    inline valid_amount(amount: u64) {
        assert(amount > 0u64);
    }
    
    transition withdraw(amount: u64, owner: address) -> u64 {
        // Inline functions are called explicitly (like modifiers)
        only_owner(self.caller, owner);
        valid_amount(amount);
        
        // Function logic continues
        return amount;
    }
}
```

### Async Functions

Leo introduces async functions for on-chain execution:

```leo
program defi_example.aleo {
    mapping user_balances: address => u64;
    
    // Async transition: can call async functions
    async transition deposit_and_update(public amount: u64) -> Future {
        // Off-chain computation
        let new_record: Token = Token {
            owner: self.caller,
            amount: amount,
        };
        
        // Return future for on-chain execution
        return finish_deposit(self.caller, amount);
    }
    
    // Async function: executes on-chain, can access mappings
    async function finish_deposit(user: address, amount: u64) {
        let current_balance: u64 = user_balances.get_or_use(user, 0u64);
        user_balances.set(user, current_balance + amount);
    }
}
```

**Key Concepts:**
- **Async Pattern**: Leo introduces async transitions and async functions for on-chain execution - transitions that call async functions must be declared as `async transition`
- **Future Objects**: Async functions return `Future` objects that execute on-chain at a later point in time, allowing access to mapping values that regular transitions cannot access

### Call Restrictions

Leo enforces strict rules about function call hierarchy:

**Call Flow:** `transition` → `function` → `inline` | `transition` → `inline` | `transition` → `external_transition`

**Call Flow Rules:**
- A transition can only call a function, inline, or external transition.
- A function can only call an inline.
- An inline can only call another inline.
- Direct/indirect recursive calls are not allowed.

**Recursion:**
While Solidity allows function recursion (functions calling themselves directly or indirectly), Leo prohibits all forms of recursive calls.

```leo
program call_hierarchy.aleo {
    // Transition can call: function, inline, external transitions
    transition main_entry(input: u32) -> u32 {
        let result1: u32 = helper_function(input);      // Valid
        let result2: u32 = inline_helper(input);        // Valid
        let result3: u32 = external_program.aleo/some_transition(input); // Valid
        return result1 + result2 + result3;
    }
    
    // Function can call: inline only
    function helper_function(input: u32) -> u32 {
        let processed: u32 = inline_helper(input);      // Valid
        // let invalid: u32 = another_function(input);  // Invalid
        return processed;
    }
    
    // Inline can call: other inline only
    inline inline_helper(input: u32) -> u32 {
        let doubled: u32 = inline_doubler(input);       // Valid
        return doubled;
    }
    
    inline inline_doubler(input: u32) -> u32 {
        return input * 2u32;
    }
}
```

### Fallback and Receive Functions

**Solidity's Fallback and Receive:**
```solidity
contract FallbackExample {
    // Fallback function - called when no other function matches
    fallback() external {
        // Handle unmatched function calls
    }
    
    // Receive function - called when receiving ETH
    receive() external payable {
        // Handle incoming ETH
    }
    
    // Regular function
    function regularFunction() public {
        // Function implementation
    }
}
```

**Leo's Approach:**
Leo does not have fallback or receive functions:

```leo
program fallback_example.aleo {
    // No fallback function - all calls must match a valid function signature
    transition regular_function() {
        // Function implementation
    }
    
    // To receive Aleo Credits, use credits.aleo program
    async transition receive_credits(public amount: u64) -> Future {
        return credits.aleo/transfer_public(self.caller, self.address, amount);
    }
}
```

**Key Differences:**
- **No Fallback**: Leo requires all function calls to match a valid function signature
- **No Receive**: Programs don't need special functions to receive Aleo Credits
- **Program Addresses**: Each Leo program has a unique address (same as user-controlled addresses)
- **Private Records**: Programs cannot spend private records sent to them (records are effectively "burnt")
- **Credit Transfers**: Use `credits.aleo` program's transfer functions to send/receive credits

## Cryptography & Built-ins

### Hash Functions

While Solidity provides basic hash functions, Leo offers an extensive cryptographic toolkit:

**Solidity's Limited Options:**
```solidity
function hashData(bytes memory data) public pure returns (bytes32) {
    return keccak256(data);           // Most common
    // sha256(data);                  // Also available
    // ripemd160(data);               // Less common
}
```

**Leo's Extensive Options:**
```leo
transition hash_examples(data: u32) -> (field, field, field) {
    // Poseidon hashes (ZK-friendly)
    let poseidon_hash: field = Poseidon4::hash_to_field(data);
    
    // BHP hashes
    let bhp_hash: field = BHP256::hash_to_field(data);
    
    // Traditional hashes
    let keccak_hash: field = Keccak256::hash_to_field(data);
    let sha3_hash: field = SHA3_256::hash_to_field(data);
    
    return (poseidon_hash, bhp_hash, keccak_hash);
}

// Commitment schemes
transition commit_example(value: u32, randomness: field) -> (field, field) {
    let pedersen_commit: field = Pedersen64::commit_to_field(value, randomness);
    let bhp_commit: field = BHP256::commit_to_field(value, randomness);
    return (pedersen_commit, bhp_commit);
}
```

### Random Numbers

Solidity has no built-in randomness and must rely on 3rd party solutions like Chainlink VRF or external oracles.

**Leo's Built-in Solution:**
```leo
async transition secure_random() -> Future {
    return finalize_random();
}

async function finalize_random() {
    // Supports ChaCha random - only available in async functions
    let random_value: u32 = ChaCha::rand_u32();
}
```

### Built-in Properties and Global Variables

**Solidity's Extensive Built-ins:**
```solidity
contract GlobalAccess {
    function getBlockInfo() public view returns (uint256, uint256, address, uint256) {
        return (
            block.number,        // Current block number
            block.timestamp,     // Current block timestamp
            msg.sender,          // Immediate caller
            tx.origin           // Transaction originator
        );
    }
    
    function getNetworkInfo() public view returns (uint256, uint256) {
        return (
            block.chainid,       // Current chain ID
            gasleft()           // Remaining gas
        );
    }
}
```

**Leo's Limited Built-ins:**
```leo
program global_access.aleo {
    async transition get_block_info() -> Future {
        return finalize_get_info();
    }
    
    async function finalize_get_info() {
        // Available within finalize scope only
        let current_height: u32 = block.height;  // Equivalent to block.number
        let network: u32 = network.id;           // Equivalent to block.chainid
    }
    
    transition get_caller_info() {
        let immediate_caller: address = self.caller;  // Equivalent to msg.sender  
        let origin_caller: address = self.signer;     // Equivalent to tx.origin
        let program_address: address = self.address;  // Equivalent to address(this)
    }
}
```

**Key Differences:**
- **Limited Scope**: Leo's block properties only available in async functions (finalize scope)
- **No Timestamp**: Leo doesn't provide block timestamp at the moment until [ARC-0040](https://github.com/ProvableHQ/ARCs/discussions/69) is implemented
- **No Gas Tracking**: Leo doesn't expose gas/fee information to programs
- **Program Context**: Leo provides `self.address` for the current program address

### Currency Denominations

**Solidity's Ether Units:**
```solidity
contract EtherUnits {
    function demonstrateUnits() public pure returns (uint256, uint256, uint256) {
        uint256 oneWei = 1;
        uint256 oneGwei = 1 gwei;       // 1e9 wei
        uint256 oneEther = 1 ether;     // 1e18 wei
        
        return (oneWei, oneGwei, oneEther);
    }
}
```

**Leo's Credit Units:**
```leo
program credit_units.aleo {
    transition demonstrate_units() -> (u64, u64, u64) {
        let one_microcredit: u64 = 1u64;
        let one_millicredit: u64 = 1000u64;     // 1e3 microcredits
        let one_credit: u64 = 1000000u64;       // 1e6 microcredits
        
        return (one_microcredit, one_millicredit, one_credit);
    }
}
```

**Key Differences:**
- **Aleo Credits**: microcredits (base), millicredits (1e3), credits (1e6)
- **Ethereum**: wei (base), gwei (1e9), ether (1e18) 
- **No Built-in Units**: Leo doesn't have built-in unit literals like Solidity

### Address Functionality and Native Token Transfers

**Solidity's Address Members:**
Address in Solidity has members to access its associated states such as:

```solidity
contract AddressExample {
    function demonstrateAddressMembers(address payable target) public view returns (uint256, bytes32) {
        // Access address properties
        uint256 balance = target.balance;           // Balance in Wei
        bytes memory code = target.code;            // Code at address (can be empty) 
        bytes32 codeHash = target.codehash;         // The codehash of the address
        
        return (balance, codeHash);
    }
    
    function transferMethods(address payable target, uint256 amount) public {
        // Different transfer methods
        target.transfer(amount);                    // Reverts on failure, 2300 gas stipend
        bool success = target.send(amount);         // Returns false on failure, 2300 gas stipend
        
        // Low-level calls with adjustable gas
        (bool callSuccess, bytes memory data) = target.call{value: amount}("");
        (bool delegateSuccess, bytes memory delegateData) = target.delegatecall("");
        (bool staticSuccess, bytes memory staticData) = target.staticcall("");
    }
}
```

**Leo's Approach:**
Leo address does not have member functions. Aleo credits are defined as a program (`credits.aleo`) on Aleo, therefore to make transfers and access balances, it uses the same method as querying any programs on Aleo, either publicly with mappings or privately by scanning owned records.

```leo
import credits.aleo;

program address_example.aleo {
    // Access balance through credits.aleo program mappings (public balance)
    async transition get_public_balance(user: address) -> Future {
        return finalize_get_balance(user);
    }
    
    async function finalize_get_balance(user: address) {
        // Query public balance from credits.aleo account mapping
        let balance: u64 = credits.aleo/account.get_or_use(user, 0u64);
    }
    
    // Transfer credits using credits.aleo program functions
    async transition transfer_public_credits(
        to: address, 
        amount: u64
    ) -> Future {
        return credits.aleo/transfer_public(self.caller, to, amount);
    }
    
    transition transfer_private_credits(
        input: credits.aleo/credits,
        to: address,
        amount: u64
    ) -> (credits.aleo/credits, credits.aleo/credits) {
        return credits.aleo/transfer_private(input, to, amount);
    }
}
```

**Key Differences:**
- **No Address Members**: Leo addresses don't have `.balance`, `.code`, `.codehash` properties
- **No Built-in Transfer Methods**: No `.transfer()`, `.send()`, `.call()` methods on addresses
- **Program-Based Transfers**: Native token transfers go through the `credits.aleo` program
- **Public vs Private**: Balances can be public (mappings) or private (records)
- **Unified Interface**: All program interactions use the same call syntax, whether for tokens or other functionality

### Mathematical Operations and Overflow Handling

**Solidity's Approach:**
```solidity
contract MathOperations {
    function checkedMath(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;  // Reverts on overflow by default (since 0.8.0)
    }
    
    function uncheckedMath(uint256 a, uint256 b) public pure returns (uint256) {
        unchecked {
            return a + b;  // Wraps on overflow
        }
    }
    
    function modularMath(uint256 a, uint256 b, uint256 n) public pure returns (uint256, uint256) {
        return (addmod(a, b, n), mulmod(a, b, n));
    }
}
```

**Leo's Approach:**
```leo
program math_operations.aleo {
    transition checked_math(a: u64, b: u64) -> u64 {
        return a + b;  // Reverts on overflow by default
    }
    
    transition wrapped_math(a: u64, b: u64) -> u64 {
        return a.add_wrap(b);  // Wraps on overflow using wrapped arithmetic
    }
    
    transition modular_math(a: u64, b: u64, n: u64) -> (u64, u64) {
        let add_result: u64 = (a + b) % n;
        let mul_result: u64 = (a * b) % n;
        return (add_result, mul_result);
    }
}
```

**Key Differences:**
- **Wrapped Operations**: Leo uses `.add_wrap()`, `.sub_wrap()`, `.mul_wrap()` instead of `unchecked` blocks
- **No Built-in Modular Math**: Leo doesn't have `addmod`/`mulmod` built-ins
- **Explicit Operators**: Leo requires explicit use of wrapped operators

### Time and Temporal Operations

**Solidity's Time Support:**
```solidity
contract TimeOperations {
    function timeUnits() public pure returns (uint256, uint256, uint256) {
        return (
            1 seconds,    // 1
            1 minutes,    // 60 seconds
            1 hours       // 3600 seconds
        );
    }
    
    function getCurrentTime() public view returns (uint256) {
        return block.timestamp;
    }
}
```

**Leo's Limitation:**
Leo does not support time units and timestamps (at the moment):

- **No Time Units**: No equivalent to `seconds`, `minutes`, `hours`, etc.
- **No Timestamps**: No access to block timestamps at the moment until [ARC-0040](https://github.com/ProvableHQ/ARCs/discussions/69) is implemented.
- **No Time-based Logic**: Developers must implement time logic externally or rely on block height

## Error Handling

**Solidity's Error Handling:**
```solidity
contract ErrorHandling {
    ExternalContract public externalContract;
    error InsufficientBalance(uint256 requested, uint256 available);
    
    function transfer(uint256 amount) public {
        require(amount > 0, "Amount must be positive");
        
        if (balance < amount) {
            revert InsufficientBalance(amount, balance);
        }
        
        try externalContract.riskyCall() returns (string memory) {
            // Success path
        } catch Error(string memory reason) {
            // Handle with reason
        } catch {
            // Handle without reason
        }
    }
}
```

**Leo's Error Handling:**
```leo
program error_handling.aleo {
    transition transfer(amount: u64, balance: u64) -> u64 {
        // Simple assertions (no custom messages due to lack of string support)
        assert(amount > 0u64);
        assert_neq(amount, 0u64);      // Alternative syntax
        assert(balance >= amount);
        
        // No try/catch - all external calls must succeed
        let result: u64 = external_program.aleo/safe_operation(amount);
        return result;
    }
}
```

## Loops & Conditionals

**Solidity's Control Flow:**
```solidity
function controlFlow(uint256[] memory items) public pure returns (uint256) {
    uint256 sum = 0;
    
    // While loops
    uint256 i = 0;
    while (i < items.length) {
        if (items[i] > 10) {
            continue;  // Skip this item
        }
        
        sum += items[i];
        
        if (sum > 100) {
            break;     // Exit early
        }
        
        i++;
    }
    
    // For loops
    for (uint256 j = 0; j < items.length; j++) {
        // Process items
    }
    
    return sum;
}
```

**Leo's Control Flow:**
```leo
transition control_flow(items: [u32; 5]) -> u32 {
    let sum: u32 = 0u32;
    
    // For loops only (no while, do-while)
    for i: u32 in 0u32..5u32 {
        sum += items[i as u8];
        // No continue and break statement available
    }
    
    // Ternary operator works identically
    let result: u32 = sum > 100u32 ? 100u32 : sum;
    return result;
}
```

**Important Limitation**: Leo currently executes all branches of conditional statements, then select the correct result. This differs from typical conditional execution where only one branch runs. This behavior can cause unexpected issues, especially with operations that can halt (like division by zero). [ARC-0004](https://github.com/ProvableHQ/ARCs/discussions/89) proposes flagged operations to address this limitation, enabling proper if-then-else semantics. More details can be found in the [Leo limitations documentation](../../guides/leo/02_leo_limitations.md#compiling-conditional-on-chain-code).

## Cross-Program Calls

**Solidity's Dynamic Approach:**
```solidity
interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
}

contract DynamicCalls {
    function transferTokens(address tokenAddress, address to, uint256 amount) public {
        // Dynamic contract interaction using interface
        IERC20 token = IERC20(tokenAddress);
        bool success = token.transfer(to, amount);
        require(success, "Transfer failed");
        
        // Low-level calls
        (bool callSuccess, bytes memory data) = tokenAddress.call(
            abi.encodeWithSignature("transfer(address,uint256)", to, amount)
        );
        require(callSuccess, "Call failed");
    }
}
```

**Leo's Static Approach:**
```leo
import credits.aleo;

program static_calls.aleo {
    async transition transfer_credits(
        input: credits.aleo/credits, 
        to: address, 
        amount: u64
    ) -> (credits.aleo/credits, Future) {
        // Static, compile-time known calls only
        let tuple: (credits.aleo/credits, Future) = credits.aleo/transfer_private(
            input,
            to,
            amount
        );
        
        return (tuple.0, f_transfer(tuple.1));
    }

    async function f_transfer(f: Future) {
        f.await();
    }
    
    // Can query public state from other programs within finalize scope
    async transition get_external_balance(user: address) -> Future {
        return f_get_external_balance(user);
    }

    async function f_get_external_balance(user: address) {
        let balance: u64 = credits.aleo/account.get(user);
    }
}
```

## Inheritance

**Solidity's Inheritance System:**
```solidity
abstract contract Animal {
    string public name;
    
    constructor(string memory _name) {
        name = _name;
    }
    
    function speak() public virtual returns (string memory);
}

contract Dog is Animal {
    constructor(string memory _name) Animal(_name) {}
    
    function speak() public pure override returns (string memory) {
        return "Woof!";
    }
    
    function wagTail() public pure returns (string memory) {
        return "Wagging tail";
    }
}

contract Cat is Animal {
    constructor(string memory _name) Animal(_name) {}
    
    function speak() public pure override returns (string memory) {
        return "Meow!";
    }
    
    function purr() public pure returns (string memory) {
        return "Purring";
    }
}
```
**Leo's Composition Approach:**

Leo does not support inheritance like Solidity does. Instead, Leo uses composition and program imports to achieve similar functionality.

```leo
program animal_behaviors.aleo {
    struct AnimalData {
        name: field,
        species: u8, // 1 for dog, 2 for cat
    }
    
    function speak(animal: AnimalData) -> field {
        // Different sounds for different species
        return animal.species == 1u8 ? 100field : 200field; // Dog: "Woof!", Cat: "Meow!"
    }
    
    function species_behavior(animal: AnimalData) -> bool {
        // Dogs wag tail, cats purr
        return animal.species == 1u8 ? true : false; // Dog: wag tail, Cat: purr
    }
}
```

```leo
import animal_behaviors.aleo;

program my_pets.aleo {
    // Struct from imported program must be redefined with exact members
    struct AnimalData {
        name: field,
        species: u8,
    }
    
    record Pet {
        data: AnimalData,
    }
    
    transition create_dog(name: field) -> Pet {
        return Pet {
            data: AnimalData {
                name: name,
                species: 1u8, // Dog
            },
        };
    }
    
    transition create_cat(name: field) -> Pet {
        return Pet {
            data: AnimalData {
                name: name,
                species: 2u8, // Cat
            },
        };
    }
    
    transition make_sound(pet: Pet) -> field {
        // Get sound from animal_behaviors
        return animal_behaviors.aleo/speak(pet.data);
    }
    
    transition check_behavior(pet: Pet) -> bool {
        // Check species-specific behavior
        return animal_behaviors.aleo/species_behavior(pet.data);
    }
}
```

### Abstract Contracts and Interfaces

**Solidity's Abstract Types:**
```solidity
// Abstract contract - some functions not implemented
abstract contract Animal {
    string public name;
    
    constructor(string memory _name) {
        name = _name;
    }
    
    function speak() public virtual returns (string memory);  // Must be implemented
    
    function eat() public pure returns (string memory) {
        return "Eating...";  // Default implementation
    }
}

// Interface - no functions implemented
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    // All functions must be external
}

contract Token is IERC20 {
    function totalSupply() external pure override returns (uint256) {
        return 1000000;
    }
    
    function transfer(address to, uint256 amount) external pure override returns (bool) {
        return true;
    }
}
```

**Leo's Approach:**
Leo does not support abstract contracts or interfaces since it lacks inheritance:

- **No Abstract Contracts**: Cannot define partially implemented contracts
- **No Interfaces**: Cannot define contract interfaces for implementation
- **Alternative**: Use composition and program imports for modularity
- **Future Consideration**: Interfaces may be supported once dynamic dispatch is implemented

### Libraries

**Solidity's Libraries:**
```solidity
library SafeMath {
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");
        return c;
    }
}

contract UsingLibrary {
    using SafeMath for uint256;
    
    function calculate(uint256 a, uint256 b) public pure returns (uint256) {
        return a.add(b);  // Library function attached to type
    }
}
```

**Leo's Alternative:**
Leo doesn't have dedicated libraries but developers can create stateless programs that function similarly:

```leo
// math_library.aleo - Stateless program acting as library
program math_library.aleo {
    transition safe_add(a: u64, b: u64) -> u64 {
        let result: u64 = a + b;
        assert(result >= a);  // Check for overflow
        return result;
    }
}
```

```leo
import math_library.aleo;

program using_library.aleo {
    transition calculate(a: u64, b: u64) -> u64 {
        return math_library.aleo/safe_add(a, b);
    }
}
```

**Key Differences:**
- **No Delegatecall**: Leo doesn't support executing external code in current context
- **No Type Attachment**: Cannot attach functions to types like Solidity's `using` directive
- **Stateless Programs**: Use separate programs instead of libraries

## Events and Logging

**Solidity's Event System:**
```solidity
contract EventExample {
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Debug(string message, uint256 value);
    
    function transfer(address to, uint256 amount) public {
        // Emit events for external monitoring
        emit Transfer(msg.sender, to, amount);
        emit Debug("Transfer executed", amount);
    }
}
```

**Leo's Limitation:**
Leo does not support events or logging:

- **No Events**: Cannot emit events for external monitoring
- **No Logging**: No built-in logging facilities
- **Alternative**: Use program outputs or external state tracking for monitoring
- **Best Practice**: Document important state changes in comments

## ABI Encoding and Decoding

**Solidity's ABI Functions:**
```solidity
contract ABIExample {
    function encodeData(uint256 value, string memory text) public pure returns (bytes memory) {
        return abi.encode(value, text);
    }
    
    function encodePacked(uint256 a, uint256 b) public pure returns (bytes memory) {
        return abi.encodePacked(a, b);
    }
    
    function decodeData(bytes memory data) public pure returns (uint256, string memory) {
        return abi.decode(data, (uint256, string));
    }
}
```

**Leo's Limitation:**
Leo does not have ABI encoding/decoding functionality:

- **No Bytes Type**: Leo doesn't support `bytes` type needed for ABI operations
- **No Dynamic Encoding**: Cannot dynamically encode/decode complex data structures
- **Alternative**: Use fixed-size data structures and manual serialization if needed
- **Static Calls**: All cross-program calls use statically defined interfaces

## Contract Creation and Dynamic Deployment

**Solidity's Contract Creation:**
```solidity
contract Factory {
    function createContract(uint256 initialValue) public returns (address) {
        // Create new contract with constructor parameters
        MyContract newContract = new MyContract(initialValue);
        return address(newContract);
    }
    
    function createWithSalt(uint256 initialValue, bytes32 salt) public returns (address) {
        // Create deterministic address using CREATE2
        MyContract newContract = new MyContract{salt: salt}(initialValue);
        return address(newContract);
    }
}
```

**Leo's Limitation:**
Leo programs cannot create new programs:

- **No Dynamic Creation**: Programs cannot deploy other programs
- **Static Deployment**: All programs must be deployed through external tools
- **No CREATE2**: No deterministic address generation but programs on Aleo already have developer-defined human-readable names.
- **Fixed Architecture**: Program relationships must be established at deployment time

## Scoping Rules

**Solidity and Leo Similarities:**
Both languages follow similar scoping rules:

```solidity
// Solidity
contract ScopeExample {
    uint256 globalVar = 100;
    
    function scopeDemo() public view returns (uint256) {
        uint256 localVar = 200;
        {
            uint256 blockVar = 300;
            return globalVar + localVar + blockVar;  // All accessible
        }
        // blockVar not accessible here
        return globalVar + localVar;
    }
}
```

```leo
// Leo
program scope_example.aleo {
    transition scope_demo() -> u32 {
        let local_var: u32 = 200u32;
        
        {
            let block_var: u32 = 300u32;
            local_var = local_var + block_var;  // Both accessible
        }
        
        // block_var not accessible here
        return local_var;
    }
}
```

**Key Similarity:**
- Variables are visible from declaration until the end of their containing `{}` block

## Inline Assembly

**Solidity's Inline Assembly:**
```solidity
contract AssemblyExample {
    function efficientHash(uint256 a, uint256 b) public pure returns (uint256 result) {
        assembly {
            let hash := keccak256(add(a, b), 0x40)
            result := hash
        }
    }
}
```

**Leo's Limitation:**
Leo does not support inline assembly:

- **No Yul-like Integration**: Cannot insert low-level assembly code
- **Separate IR**: Aleo Instructions exist as a separate language, not embeddable in Leo.
- **Standalone Programs**: Aleo Instructions can be written as standalone programs in `.aleo` files, enabling fine-grained control over program execution and circuit design at a low level. For more details about Aleo Instructions, see the [Aleo Instructions Overview](../../guides/aleo/00_aleo_overview.md).

