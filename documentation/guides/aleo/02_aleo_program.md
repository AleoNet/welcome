---
id: aleo_program
title: Aleo Programs
sidebar_label: Aleo Programs
---

An **Aleo program** defines private application logic executed by the Aleo VM. Most developers write programs in **Leo** and compile them for the VM.

## Structure

- **Program ID**: `program <name>.aleo;`
- **Entrypoints**: typed inputs → computation → typed outputs
- **Types**: primitives plus `struct` and `record`

```aleo showLineNumbers
program foo.aleo;

function hello:
    input r0 as u32.public;
    input r1 as u32.private;
    add r0 r1 into r2;
    output r2 as u32.private;
```

## Registers and visibility

Values are stored in **registers** (`r0`, `r1`, ...). Each value has a **type** and a **visibility**:

- **`.public`**: revealed
- **`.private`**: proven, not revealed

## Types

Primitive types include:

```aleo
address
boolean
field
group
i8
i16
i32
i64
i128
u8
u16
u32
u64
u128
scalar
```

## `struct`

```aleo showLineNumbers
struct array3:
    a0 as u32;
    a1 as u32;
    a2 as u32;
```

## `record` (private state)

Records are user-owned state. Transactions typically **consume** records and **create** new records.

```aleo showLineNumbers
record token:
    owner as address.private;
    amount as u64.private;
```

## Example: mint + transfer

```aleo showLineNumbers
program foo.aleo;

record token:
    owner as address.private;
    amount as u64.private;

function mint:
    input r0 as u64.private;
    cast self.signer r0 into r1 as token.record;
    output r1 as token.record;

function transfer_amount:
    input r0 as token.record;
    input r1 as address.private;
    input r2 as u64.private;

    sub r0.amount r2 into r3;
    cast r0.owner r3 into r4 as token.record;
    cast r1 r2 into r5 as token.record;
    output r4 as token.record;
    output r5 as token.record;
```

## Next

- [Aleo instruction opcodes](./04_opcodes.md)
- [Leo installation](https://docs.leo-lang.org/getting_started/installation)

<!--
---
id: hello
title: Aleo Programs
sidebar_label: Aleo Programs
---

An **Aleo program** defines private application logic executed by the Aleo VM. Most developers write in **Leo**, which compiles to a program that the VM can prove and verify.

:::note
This guide focuses on **what an Aleo program is**, not a specific CLI workflow.
:::

## Program structure

An Aleo program is typically composed of:

- **A program identifier**: `program <name>.aleo;`
- **Entrypoints** (functions/closures in instruction form): typed inputs → computation → typed outputs
- **Types**: primitives plus custom `struct` and `record` types

Example (minimal function):

```aleo showLineNumbers
program foo.aleo;

function hello:
    input r0 as u32.public;
    input r1 as u32.private;
    add r0 r1 into r2;
    output r2 as u32.private;
```

## Registers and visibility

In Aleo instructions, values live in **registers** (`r0`, `r1`, ...). Every value has:

- **A type** (e.g. `u32`, `field`, `address`)
- **A visibility**: `.public` or `.private`

Visibility is part of the program’s privacy contract:

- **Public**: revealed in inputs/outputs
- **Private**: proven in zero-knowledge; not revealed

## Types

Primitive types include:

```aleo
address
boolean
field
group
i8
i16
i32
i64
i128
u8
u16
u32
u64
u128
scalar
```

Custom types are defined with `struct` and `record`.

## `struct`: user-defined data

`struct` groups fields into a reusable type.

```aleo showLineNumbers
struct array3:
    a0 as u32;
    a1 as u32;
    a2 as u32;
```

Fields are accessed with dot syntax (`r0.a0`). New values are commonly assembled via `cast`.

## `record`: private, user-owned state

Records model assets/state that are **owned by an address** and encrypted to that owner.

```aleo showLineNumbers
record token:
    owner as address.private;
    amount as u64.private;
```

High-level state model:

- Transactions **consume** records and **create** new records.
- Ownership is expressed via the `owner` field (and enforced by the system).

## Example: mint + transfer (record-based)

This illustrates the “consume old, create new” pattern for private balances.

```aleo showLineNumbers
program foo.aleo;

record token:
    owner as address.private;
    amount as u64.private;

function mint:
    input r0 as u64.private;
    cast self.signer r0 into r1 as token.record;
    output r1 as token.record;

function transfer_amount:
    input r0 as token.record;
    input r1 as address.private;
    input r2 as u64.private;

    sub r0.amount r2 into r3;
    cast r0.owner r3 into r4 as token.record;
    cast r1 r2 into r5 as token.record;
    output r4 as token.record;
    output r5 as token.record;
```

## Next steps

- Learn the instruction set: [Aleo instruction opcodes](./04_opcodes.md)
- Keep building in Leo: [Leo installation](https://docs.leo-lang.org/getting_started/installation)

---
id: hello
title: Aleo Program Overview
sidebar_label: Aleo Program Overview
---

This page is a **conceptual overview** of an Aleo program: how it is structured, how data and state are modeled, and how the Aleo VM “thinks” about inputs/outputs. It intentionally avoids a step-by-step CLI flow, since developer tooling and workflows evolve over time.

:::note
Most developers **author programs in Leo**, which compiles down to the lower-level program form executed by the Aleo VM. If you’re just getting started with tooling, see [Leo installation](https://docs.leo-lang.org/getting_started/installation).
:::

## What is an Aleo program?

An **Aleo program** defines the rules of a private application:

- **Entrypoints**: callable logic that consumes typed inputs and produces typed outputs.
- **Data types**: primitives (like `u64`) and custom types (`struct` and `record`).
- **State model**: user-owned **records** (encrypted to their owner) and other program-level state patterns supported by the language/tooling you use.

Even when you write in a high-level language, the core mental model is the same: **well-typed inputs → deterministic constraints/instructions → outputs**, with privacy controlled by **visibility**.

## A minimal “shape” of a program

At minimum, a program declares its identifier and one or more callable blocks. Here’s a tiny example that adds a public and private value and returns a private result:

```aleo showLineNumbers
// The 'foo.aleo' program.
program foo.aleo;

function hello:
    input r0 as u32.public;
    input r1 as u32.private;
    add r0 r1 into r2;
    output r2 as u32.private;
```

### Program identifier

```aleo
program foo.aleo;
```

The identifier is how the network and tooling refer to the program.

### Entrypoints (functions) and registers

In Aleo instructions, inputs/outputs and intermediate values live in **registers** (`r0`, `r1`, …). Each register value is annotated with:

- **type**: e.g. `u32`, `field`, `address`
- **visibility**: `.public` or `.private`

Conceptually:

- **Inputs** are loaded into registers in order (`r0`, `r1`, …).
- **Instructions** operate on registers and write results to new registers (often using `into`).
- **Outputs** declare which registers are returned and with what type/visibility.

If you want to go deeper on the low-level instruction set, see [Aleo instruction opcodes](./04_opcodes.md).

## Types and visibility

Aleo is strongly typed. Common primitive types include:

```aleo
address
boolean
field
group
i8
i16
i32
i64
i128
u8
u16
u32
u64
u128
scalar
```

Two design knobs matter throughout your program:

- **Type safety**: values must match declared types.
- **Visibility**: `.private` values are proven in zero-knowledge; `.public` values are revealed.

## Custom types: `struct`

Use `struct` to define a composite data type (like a struct in other languages). Example:

```aleo showLineNumbers
struct array3:
    a0 as u32;
    a1 as u32;
    a2 as u32;
```

You can access fields with dot syntax (`r0.a0`) and build new instances via `cast`:

```aleo showLineNumbers
function sum_one_to_array3:
    input r0 as array3.private;
    add r0.a0 1u32 into r1;
    add r0.a1 1u32 into r2;
    add r0.a2 1u32 into r3;
    cast r1 r2 r3 into r4 as array3;
    output r4 as array3.private;
```

The important takeaway is the pattern:

- **decompose** a structured input into fields
- **compute** per-field or derived values
- **recompose** into a new structured output

## Custom types: `record` (private, user-owned state)

Records are the fundamental building block for **private assets and private application state**. A record is similar to a struct, but it has an `owner` field that ties it to an Aleo address:

```aleo showLineNumbers
record token:
    owner as address.private;
    amount as u64.private;
```

High level model:

- A user “has state” by **owning records**.
- A transaction typically **consumes** old records and **creates** new records.
- Records are encrypted to the owner, so ownership and contents can remain private.

## Example: a simple private “token” flow (mint + transfer)

Below is a compact example of how records can represent balances and how a transfer can be expressed as “consume one record, produce two records”.

```aleo showLineNumbers
// The 'foo.aleo' program.
program foo.aleo;

record token:
    owner as address.private;
    amount as u64.private;

function mint:
    input r0 as u64.private;
    cast self.signer r0 into r1 as token.record;
    output r1 as token.record;

function transfer_amount:
    input r0 as token.record;       // sender token record
    input r1 as address.private;    // receiver address
    input r2 as u64.private;        // amount to transfer

    sub r0.amount r2 into r3;       // sender final balance
    add 0u64 r2 into r4;            // receiver balance delta

    cast r0.owner r3 into r5 as token.record; // sender new record
    cast r1 r4 into r6 as token.record;       // receiver new record

    output r5 as token.record;
    output r6 as token.record;
```

What to notice:

- **`self.signer`**: represents the transaction signer (the account authorizing the call).
- **Records as state**: balances are not “updated in place”; they’re represented as new records produced by the transaction.
- **Privacy**: amounts and owners here are declared `.private`, so values can be proven without being revealed on-chain.

## Where to go next

- If you want to **build apps**, use **Leo** for authoring and compilation.
- If you want to **understand what runs on the VM**, read the instruction-level docs and opcodes.
- If you want to **reason about privacy**, focus on how visibility (`public` vs `private`) flows through inputs, intermediate registers, and outputs.

<!--
---
id: hello
title: Aleo Program Overview
sidebar_label: Aleo Program Overview
---

This page is a **conceptual overview** of an Aleo program: how it is structured, how data and state are modeled, and how the Aleo VM “thinks” about inputs/outputs. It intentionally avoids a step-by-step CLI flow, since developer tooling and workflows evolve over time.

:::note
Most developers **author programs in Leo**, which compiles down to the lower-level program form executed by the Aleo VM. If you’re just getting started with tooling, see [Leo installation](https://docs.leo-lang.org/getting_started/installation).
:::

## What is an Aleo program?

An **Aleo program** defines the rules of a private application:

- **Entrypoints**: callable logic that consumes typed inputs and produces typed outputs.
- **Data types**: primitives (like `u64`) and custom types (`struct` and `record`).
- **State model**: user-owned **records** (encrypted to their owner) and other program-level state patterns supported by the language/tooling you use.

Even when you write in a high-level language, the core mental model is the same: **well-typed inputs → deterministic constraints/instructions → outputs**, with privacy controlled by **visibility**.

## A minimal “shape” of a program

At minimum, a program declares its identifier and one or more callable blocks. Here’s a tiny example that adds a public and private value and returns a private result:

```aleo showLineNumbers
// The 'foo.aleo' program.
program foo.aleo;

function hello:
    input r0 as u32.public;
    input r1 as u32.private;
    add r0 r1 into r2;
    output r2 as u32.private;
```

### Program identifier

```aleo
program foo.aleo;
```

The identifier is how the network and tooling refer to the program.

### Entrypoints (functions) and registers

In Aleo instructions, inputs/outputs and intermediate values live in **registers** (`r0`, `r1`, …). Each register value is annotated with:

- **type**: e.g. `u32`, `field`, `address`
- **visibility**: `.public` or `.private`

Conceptually:

- **Inputs** are loaded into registers in order (`r0`, `r1`, …).
- **Instructions** operate on registers and write results to new registers (often using `into`).
- **Outputs** declare which registers are returned and with what type/visibility.

If you want to go deeper on the low-level instruction set, see [Aleo instruction opcodes](./04_opcodes.md).

## Types and visibility

Aleo is strongly typed. Common primitive types include:

```aleo
address
boolean
field
group
i8
i16
i32
i64
i128
u8
u16
u32
u64
u128
scalar
```

Two design knobs matter throughout your program:

- **Type safety**: values must match declared types.
- **Visibility**: `.private` values are proven in zero-knowledge; `.public` values are revealed.

## Custom types: `struct`

Use `struct` to define a composite data type (like a struct in other languages). Example:

```aleo showLineNumbers
struct array3:
    a0 as u32;
    a1 as u32;
    a2 as u32;
```

You can access fields with dot syntax (`r0.a0`) and build new instances via `cast`:

```aleo showLineNumbers
function sum_one_to_array3:
    input r0 as array3.private;
    add r0.a0 1u32 into r1;
    add r0.a1 1u32 into r2;
    add r0.a2 1u32 into r3;
    cast r1 r2 r3 into r4 as array3;
    output r4 as array3.private;
```

The important takeaway is the pattern:

- **decompose** a structured input into fields
- **compute** per-field or derived values
- **recompose** into a new structured output

## Custom types: `record` (private, user-owned state)

Records are the fundamental building block for **private assets and private application state**. A record is similar to a struct, but it has an `owner` field that ties it to an Aleo address:

```aleo showLineNumbers
record token:
    owner as address.private;
    amount as u64.private;
```

High level model:

- A user “has state” by **owning records**.
- A transaction typically **consumes** old records and **creates** new records.
- Records are encrypted to the owner, so ownership and contents can remain private.

## Example: a simple private “token” flow (mint + transfer)

Below is a compact example of how records can represent balances and how a transfer can be expressed as “consume one record, produce two records”.

```aleo showLineNumbers
// The 'foo.aleo' program.
program foo.aleo;

record token:
    owner as address.private;
    amount as u64.private;

function mint:
    input r0 as u64.private;
    cast self.signer r0 into r1 as token.record;
    output r1 as token.record;

function transfer_amount:
    input r0 as token.record;       // sender token record
    input r1 as address.private;    // receiver address
    input r2 as u64.private;        // amount to transfer

    sub r0.amount r2 into r3;       // sender final balance
    add 0u64 r2 into r4;            // receiver balance delta

    cast r0.owner r3 into r5 as token.record; // sender new record
    cast r1 r4 into r6 as token.record;       // receiver new record

    output r5 as token.record;
    output r6 as token.record;
```

What to notice:

- **`self.signer`**: represents the transaction signer (the account authorizing the call).
- **Records as state**: balances are not “updated in place”; they’re represented as new records produced by the transaction.
- **Privacy**: amounts and owners here are declared `.private`, so values can be proven without being revealed on-chain.

## Where to go next

- If you want to **build apps**, use **Leo** for authoring and compilation.
- If you want to **understand what runs on the VM**, read the instruction-level docs and opcodes.
- If you want to **reason about privacy**, focus on how visibility (`public` vs `private`) flows through inputs, intermediate registers, and outputs.

---
id: hello
title: Hello Aleo Instructions
sidebar_label: Hello Aleo
---
:::note
This guide introduces **Aleo instructions** (the low-level language executed by the Aleo VM). The `snarkvm` crate is a **Rust library**; for most developers, the recommended toolchain is **Leo**. See [Leo installation](https://docs.leo-lang.org/getting_started/installation).
:::

## 1. Create and build a new project

Create a new project folder:

```bash
mkdir foo
cd foo
```

Then create the basic project files:

- **README.md** having the skeleton of a README with instructions on how to compile.
- **main.aleo** the main file of the source code.
- **program.json** containing the identification of the project in JSON format. Particularly, a dev address and its private key for the program.

The main.aleo file should have contents like this:

```aleo showLineNumbers
// The 'foo.aleo' program.
program foo.aleo;

function hello:
    input r0 as u32.public;
    input r1 as u32.private;
    add r0 r1 into r2;
    output r2 as u32.private;
```

When executed, you will see output like this:

```bash
 • Loaded universal setup (in 1478 ms)

⛓  Constraints

 •  'foo.aleo/hello' - 33 constraints (called 1 time)

➡️  Output

 • 5u32

✅ Finished 'foo.aleo/hello' (in "/Users/collin/code/snarkVM/foo")
```

As you can see, the output has the `5u32` value, representing the sum of the inputs.

## 2. Executing a program

When the execution is finished, you should see the following output (including a transaction object):

```bash
 • Loaded universal setup (in 1478 ms)

⛓  Constraints

 •  'foo.aleo/hello' - 33 constraints (called 1 time)

➡️  Output

 • 5u32
 
  {"type":"execute","id":"at1 ... (transaction object truncated for brevity)

✅ Executed 'foo.aleo/hello' (in "/Users/collin/code/snarkVM/foo")
```

As you can see, the output has the `5u32` value, representing the sum of the inputs.

A "universal setup" is loaded into your environment. You can read more about this in the [Marlin paper](https://eprint.iacr.org/2019/1047.pdf).

Once the universal setup is ready, every function in your `main.aleo` file is built, generating this in the output folder:

- **hello.prover** the prover for the `hello` function.
- **hello.verifier** the verifier for the `hello` function.
- **main.avm** the bytecode of your aleo program to be run by the VM.

As you can already guess, we have only one `.avm` file for the whole program, but a prover and verifier for every function.

## 3. Overview of a program

Let's examine the foo program inside the `main.aleo` file:

```aleo showLineNumbers
// The 'foo.aleo' program.
program foo.aleo;

function hello:
    input r0 as u32.public;
    input r1 as u32.private;
    add r0 r1 into r2;
    output r2 as u32.private;
```

First, we need to declare the program as the following:

```aleo
program foo.aleo;
```

Afterwards, we can start writing its functions (or other Aleo structures such as structs, records, closures, as we will see later).

In the case of functions we have it very easy:

```aleo
function [function_name]:
```

The functions are composed of three main parts:

- **The input section**

  Here we declare its input parameters:
  ```aleo
      input r0 as u32.public;
      input r1 as u32.private;
  ```
  Everything in Aleo instructions are declared/stored inside a register with a type (`i8`,`field`,`bool`, etc.) and a visibility option (`public` or `private`), registers are named as `r0`, `r1`, ..., `rn`.

  In this case we use `r0` and `r1` to store the inputs passed in sequential order to a program as `u32` values, where we can store 32-bit unsigned integers to perform our sum operation.

- **The instructions section**

  The next section consists of the core of our function: here we call the Aleo Instructions we need to make our program do what we want. For example, performing an addition operation:
  ```aleo
      add r0 r1 into r2;
  ```
  Every aleo instruction is followed by its input parameters with its specific types, and the result is stored in the register specified after `into`.

  You can find all the available Aleo instruction opcodes [here](./04_opcodes.md).

- **The output section**

  Similar to the input section, the output section does the same for the output of the program. It's the return of the function.
  ```aleo
      output r2 as u32.private;
  ```

## 4. Types

Aleo uses a strongly-typed syntax. The language supports 16 primitive types, and allows users to define custom types.

The Aleo primitive types include:
```aleo
address
boolean
field
group
i8
i16
i32
i64
i128
u8
u16
u32
u64
u128
scalar
```

Users can define custom types using the `struct` or `record` keywords. We will explore these in the next few sections.

### 4.1 Registers

Registers are the places where you store data to then be able to modify it.

### 4.2 Structs

Structs are user-defined data structures. They are very much like traditional structs in conventional programming languages. You can store structs into registers, like with any other Aleo data types.

For example, let's build a struct representing a fixed-size array of 3 elements. Add this at the bottom of the `main.aleo` file:

```aleo showLineNumbers
struct array3:
    a0 as u32;
    a1 as u32;
    a2 as u32;
```

Now, just for example purposes, let's code a function that adds one to each element of a register with an `array3` data type stored in it.

```aleo showLineNumbers
function sum_one_to_array3:
    input r0 as array3.private;
    add r0.a0 1u32 into r1;
    add r0.a1 1u32 into r2;
    add r0.a2 1u32 into r3;
    cast r1 r2 r3 into r4 as array3;
    output r4 as array3.private;
```

As you can see, we can input a struct into register `r0` and access struct elements with the `.` syntax. We perform the `add` instruction on every element, storing the results in registers `r1`, `r2` and `r3` and, finally, we make use of the cast command to create a new `array3` struct into `r4`.

Now, let's run it. In this case, the only new thing you need to know is that structs are passed as inputs in the following format:

```bash
"{a0: 1u32, a1: 2u32, a2: 3u32}"
```

After updating `main.aleo`, re-run your program using your chosen execution environment/tooling, passing the struct input in the same format.

And we get the new `array3` element as output:

```bash
➡️  Output
 • {
  a0: 1u32,
  a1: 2u32,
  a2: 3u32
}
✅ Executed 'foo.aleo/sum_one_to_array3' (in "[...]/foo")
```

### 4.3 Records

A record is a fundamental data structure for encoding user assets and application state. Records are very similar to structs, but they have one required component:

```aleo showLineNumbers
record token:
    owner as address.private
```

The `owner` refers to the Aleo address that owns the record.

Records are important because they represent the basic Aleo structure to handle state in your application.

When running an Aleo function, only registers that belong to the application address can be passed as input registers. Otherwise, an error is raised and the application doesn't run.

You can find your development application address inside the `.env` file:

```json
{
    NETWORK=testnet
    PRIVATE_KEY=APrivateKey1zkpFsQNXJwdvjKs9bRsM91KcwJW1gW4CDtF3FJbgVBAvPds
}
```

### 4.4 Aleo State

In Aleo, the state of an application is managed through records. An Aleo account can create a transaction to consume a record and produce a new record in its place. Records in Aleo are encrypted to the record owner address, ensuring that all records in Aleo are fully private.


## 5. Your first Aleo Program: Making a transfer


Consider this program:
```aleo showLineNumbers
// The 'foo.aleo' program.
program foo.aleo;

record token:
    owner as address.private;
    amount as u64.private;

function mint:
    input r0 as u64.private;
    cast self.signer r0 into r1 as token.record;
    output r1 as token.record;

function transfer_amount:
    //  sender token record
    input r0 as token.record;
    // receiver address
    input r1 as address.private;
    // amount to transfer
    input r2 as u64.private;
    // final balance of sender
    sub r0.amount r2 into r3;
    // final balance of receiver
    add 0u64 r2 into r4;
    // sender token record after the transfer
    cast r0.owner r3 into r5 as token.record;
    // receiver token record after the transfer
    cast r1 r4 into r6 as token.record;
    // sender new token record
    output r5 as token.record;
    // receiver new token record
    output r6 as token.record;
```
First, we define our own record data type called `token`, that has the required parameter `owner` and a user-defined parameter called `amount`, representing the amount of tokens we have.

This `transfer_amount` function receives 3 input parameters (`sender` record, `receiver` record and `amount`) and stores them in 3 registers (`r0`, `r1` and `r2`). After that, it computes the final balance for both of them and stores it in `r3` and `r4` (using **sub** and **add** instructions to compute the subtraction and addition respectively). With those final amounts, it creates the output records for sender and receiver, storing them in `r5` and `r6`. Finally, both records are sent out of the function with the **output** instruction.

To run this function, the first parameter is the input record of the program. The format of this parameter is the same as for struct types:

```json
{
  owner: aleo1x5nz5u4j50w482t5xtqc3jdwly9s8saaxlgjz0wvmuzmxv2l5q9qmypx09.private,
  amount: 50u64.private
}
```

Where:

- owner: the public address of the program, as found in the `PRIVATE_KEY` of the `.env` file.
- other parameters: depending on the program itself (in this example, we used the parameter _amount_ with the value 50).

Let's run the `transfer_amount` function (if you are following along, remember to use the address found in the program.json for the owner field):

This function takes:

- **Sender record**: a `token.record` value (same object-style format as structs)
- **Receiver address**: an `address`
- **Amount**: a `u64`

We get the following output records:

```bash

⛓  Constraints

 •  'foo.aleo/transfer_amount' - 4,172 constraints (called 1 time)
 
➡️  Outputs
 • {
  owner: aleo1x5nz5u4j50w482t5xtqc3jdwly9s8saaxlgjz0wvmuzmxv2l5q9qmypx09.private,
  amount: 40u64.private
  _nonce: 2293253577170800572742339369209137467208538700597121244293392265726446806023group.public
}
 • {
  owner: aleo1h3gu7fky36y8r7v2x9phc434fgf20g8qd7c7u45v269jfw6vmugqjegcvp.private,
  amount: 10u64.private
  _nonce: 2323253577170856894742339369235137467208538700597121244293392765726742543235group.public
}
✅ Finished 'foo.aleo/transfer_amount' (in "[...]/foo")
```

And that's it. You have transferred your first owner-defined tokens in Aleo!

Note: the `_nonce` is not written in Aleo instructions. The compiler outputs the `_nonce` in record outputs. The user needs to provide it as input when using a record.
-->
