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

### File Headers

Programs begin differently in each language:

**Solidity Contract:**
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./IERC20.sol";

contract MyToken {
    // Contract implementation
}
```

**Leo Program:**
```leo
// No license identifier required
// No pragma needed

import credits.aleo;

program my_token.aleo {
    // Program implementation
}
```

**Key Differences:**
- Leo does not require license identifiers or pragma statements
- Import statements in Leo use program IDs rather than file paths
- Leo programs must have a `.aleo` suffix in their name

### Comments

Both languages support identical comment syntax:

```leo
// Single line comment in both languages

/*
 * Multi-line comments
 * work identically too
 */
```

## Data & State

### Storage Models

Solidity provides three types of data locations. Leo introduces a different approach:

**Solidity's Storage Model:**
```solidity
contract Storage {
    uint256 public permanentData;        // Contract storage
    
    function processData(uint256 tempData) public {
        uint256 memoryVar = tempData * 2; // Memory (temporary)
        permanentData = memoryVar;         // Persisted to storage
    }
}
```

**Leo's Storage Model:**
```leo
program storage.aleo {
    // Public state: accessible to everyone
    mapping balances: address => u64;
    
    // Private state: stored in records
    record Token {
        owner: address,
        amount: u64,
    }
    
    async transition process_data(public temp_data: u64) -> (Token, Future) {
        let memory_var: u64 = temp_data * 2u64; // Local variable
        
        let token: Token = Token {
            owner: self.caller,
            amount: memory_var,
        };
        
        return (token, finalize_process_data(self.caller, memory_var));
    }
    
    // Async function to handle on-chain state updates
    async function finalize_process_data(caller: address, amount: u64) {
        // Get current balance from public key-value mapping storage
        let current_balance: u64 = Mapping::get_or_use(balances, caller, 0u64);
        
        // Update balance to public key-value mapping storage
        Mapping::set(balances, caller, current_balance + amount);
    }
}
```

**Key Differences:**
- **Public State**: Leo uses `mapping` for public key-value storage (similar to Solidity's storage)
- **Private State**: Leo uses `record` types for private, user-owned data
- **No Transient Storage**: Leo does not support Solidity's transient storage concept
- **Local Variables**: The `let` keyword declares temporary computation variables (similar to Solidity's memory)

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
let small_number: u32 = 100u32;
let user_addr: address = aleo1abc...;
```

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
string memory text = "Hello World";           // No string type
bytes memory data = hex"1234";                // No bytes type
uint256[] memory dynamicArray;                // No dynamic arrays
mapping(string => uint256) stringMap;         // No string keys in mappings
enum Status { Active, Inactive }              // No enum type
```

```leo
// Leo alternatives or workarounds
let text_hash: field = 123456field;           // Convert text into Leo supported types such as Field
let static_array: [u32; 5] = [1u32, 2u32, 3u32, 4u32, 5u32]; // Fixed-size arrays only
mapping hash_map: field => u64;               // Use field for complex key types
const ACTIVE: u8 = 0u8;                       // Use constants instead of enums
const INACTIVE: u8 = 1u8;
```

3. **Array Limitations in Leo:**
```solidity
// Solidity: flexible array operations
uint256[] public dynamicArray;
uint256[5] public staticArray;

function updateArray() public {
    staticArray[0] = 42;  // Direct element modification
    dynamicArray.push(100); // Dynamic operations
}
```

```leo
// Leo: more restrictive
struct ArrayExample {
    static_array: [u32; 5],
}

transition update_array(input: ArrayExample) -> ArrayExample {
    return ArrayExample {
        static_array: [42u32, 0u32, 0u32, 0u32, 0u32],
    };
}
```

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

**Solidity's Type System:**
Solidity distinguishes between value types and reference types, requiring explicit data location specification:

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

**Leo's Simplified Approach:**
Leo only supports value types - all data is copied when passed around:

```leo
program value_types.aleo {
    transition process_data(input_array: [u32; 5]) -> [u32; 5] {
        // All data is copied by value
        let local_array: [u32; 5] = input_array;  // Creates a copy
        
        // Cannot modify individual elements - must create new array
        let modified_array: [u32; 5] = [
            input_array[0] + 1u32,
            input_array[1],
            input_array[2],
            input_array[3],
            input_array[4]
        ];
        
        return modified_array;
    }
}
```

**Key Differences:**
- **Leo Limitation**: Only value types, no reference types
- **Memory Management**: No need to specify data locations in Leo
- **Modification**: Leo requires creating new data structures rather than modifying existing ones

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
    // Transition: externally callable, off-chain execution and default data privacy (unless public visibility specified like the public return below)
    transition public_function(input: u32) -> public u32 {
        let result: u32 = internal_helper(input);
        return result;
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
- **Leo's Computation-Only Functions**: Both `function` and `inline` in Leo are similar to Solidity's `pure` functions - they can only perform computations and cannot access state variables or make external calls
- **No Inheritance in Leo**: Leo does not support inheritance
- **Visibility in Leo**: Unlike Solidity's visibility modifiers (public, private, internal), Leo's visibility refers to data privacy - whether data is publicly visible on-chain or kept private off-chain

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
- **No Timestamp**: Leo doesn't provide block timestamp at the moment
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
- **No Timestamps**: No access to block timestamps at the moment.
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
        sum += items[i];
        // No continue and break statement available
    }
    
    // Ternary operator works identically
    let result: u32 = sum > 100u32 ? 100u32 : sum;
    return result;
}
```

**Important Limitation**: Leo currently executes both branches of conditional statements, using ternary operations to select the correct result. This differs from typical conditional execution where only one branch runs. This behavior can cause unexpected issues, especially with operations that can halt (like division by zero). [ARC-0004](https://github.com/ProvableHQ/ARCs/discussions/89) proposes flagged operations to address this limitation, enabling proper if-then-else semantics. More details can be found in the [Leo limitations documentation](../../guides/leo/02_leo_limitations.md#compiling-conditional-on-chain-code).

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
- **No DELEGATECALL**: Leo doesn't support executing external code in current context
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
- **No CREATE2**: No deterministic address generation
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
- **Separate IR**: Aleo Instructions exist as a separate language, not embeddable in Leo
- **High-level Only**: Must use Leo's high-level constructs exclusively