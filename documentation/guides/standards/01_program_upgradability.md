---
id: program_upgradability
title: Program Upgradability
sidebar_label: Program Upgradability
---

## Overview 

Upgradability is often necessary for blockchain applications, however, the specific requirements can vary widely. 
The AVM (Aleo Virtual Machine) provides a flexible framework for program upgrades, allowing developers to define their own upgrade logic, suited to their needs.

This guide covers a number of topics including new syntax like `edition`, `checksum`, and `program_owner`, and the use of immutable `constructor`s to define upgrade logic. 
It outlines what parts of a program can or cannot change, how upgrades are validated, and provides practical patterns—such as admin-controlled, time-locked, or vote-driven upgrades—to help developers write secure, upgradeable zero-knowledge applications.

**Developers should take great care in defining their own upgrade mechanisms. 
Once a program is deployed, the code defining the upgrade logic is immutable.**
To improve the developer experience, Leo provides an intuitive interface with some sensible defaults. 
To learn more, see [Upgrading Leo Program](TODO).


**To learn about the underlying design, see [ARC-0006](https://github.com/ProvableHQ/ARCs/discussions/94).**

---


## 🔒 Constructors

A **constructor** is an immutable code block executed on deployment or upgrade.

### Constructor Rules
- A constructor **must** be present in all programs after the feature is enabled.
- If constructor **halts**, deployment/upgrade **fails**

#### Minimal Constructor Example:
**Note: This constructor allows the program to be upgraded by anyone.**
```leo
constructor:
  assert.eq true true;
```

---

## 🧩 New Operands

### 🧾 `checksum`

- **Type**: `[u8; 32u32]`
- **Meaning**: SHA3-256 hash of the program string
- **Access**: Available both **on-chain** and **off-chain**

#### Usage Example:
```leo
constructor:
  assert.eq foo.aleo/checksum r0;
  assert.eq checksum r0; // If no program ID is provided, then refer to the current program.
```

---

### 🔢 `edition`

- **Type**: `u16`
- **Meaning**: Logical version of the program
- **Behavior**:
    - Must be `0` on initial deploy
    - Must increment by 1 on each upgrade
- **Access**: Available both **on-chain** and **off-chain**

#### Usage Example:
```leo
constructor:
  assert.eq foo.aleo/edition 0u16;
  assert.eq edition 0u16; // If no program ID is provided, then refer to the current program.
```

---

### 👤 `program_owner`

- **Type**: `address`
- **Meaning**: The address that deployed the program
- **Availability**:
    - Only accessible in **`finalize`** scopes
    - **Not set** for programs deployed before the feature was introduced


#### Usage Example:
```leo
finalize some_function:
  input r0 as address.public;
  get program_owner into r1; // If no program ID is provided, then refer to the current program.
  assert.eq r0 r1; // Ensure caller is the owner
  get foo.aleo/program_owner into r2;
```

---

## 🧱 Upgrade Rules

| Component    | Add | Modify       | Delete |
|--------------|-----|--------------|--------|
| `import`     | ✅  | ❌           | ❌     |
| `struct`     | ✅  | ❌           | ❌     |
| `record`     | ✅  | ❌           | ❌     |
| `mapping`    | ✅  | ❌           | ❌     |
| `closure`    | ✅  | ❌           | ❌     |
| `function`   | ✅  | ✅ (logic)   | ❌     |
| `finalize`   | ✅  | ✅ (logic)   | ❌     |
| `constructor`| ❌  | ❌           | ❌     |

### Interface Constraints

An upgrade **cannot**:
- Change `function` input/output types
- Change `finalize` input types
- Modify existing `struct`, `record`, `mapping`, or `closure` definitions

---

## 🚀 Upgrade Patterns

Use constructors and metadata declarations to customize how your Aleo programs handle upgrades. Below are common patterns.

---

### ❌ Not Upgradable

**Goal:** Prevent all future upgrades.

```leo
program foo.aleo;
// A program without a constructor cannot be upgraded.
```

```leo
constructor:
  assert.eq foo.aleo/edition 0u16; // Reject upgrades: edition will never be zero again
```

---

### 🌐 Anyone Can Upgrade

**Goal:** Allow upgrades by anyone, unconditionally.

```leo
constructor:
  assert.eq true true;
```

---

### 🔗 Fix Dependency

**Goal:** Ensure a dependent program is on a specific version.

> ℹ️ *Tip: Make your own program upgradable in case the dependency changes and locks your functionality.*

```leo
constructor:
  assert.eq bar.aleo/edition 3u16;
```

---

### 🔐 Remove Upgradability

**Goal:** Allow upgrades until a flag is set, then lock forever.

```leo
mapping locked:
    key as boolean;
    value as boolean;

constructor:
    contains locked[true] into r0;
    assert.eq r0 false;
```

---

### 👤 Admin-Driven Upgrades (Static Admin)

**Goal:** Restrict upgrades to a hardcoded admin address.

> ⚠️ *The admin address is immutable, make sure it’s secured!*

```leo
constructor:
  assert.eq owner <ADMIN_ADDRESS>;
```

---

### 📦 Content-Locked Upgrades

**Goal:** Only allow upgrades that match a predetermined checksum.

```leo
mapping expected:
    key as boolean;
    value as u128;

constructor:
    branch.neq foo.aleo/edition 0u16 to end;
    get expected[true] into r0;
    assert.eq foo.aleo/checksum r0;
```

---

### ⚙️ Configurable Admin-Driven Upgrades

**Goal:** Allow upgrades by a changeable admin that sets allowed checksums.

```leo
mapping admin:
    key as boolean.public;
    value as address.public;

mapping expected:
    key as boolean;
    value as [u8; 32u32];

constructor:
    branch.neq foo.aleo/edition 0u16 to rest;
    set aleo1... into admin[true];
    branch.eq true true to end;
    position rest;
    get expected[true] into r0;
    assert.eq foo.aleo/checksum r0;
    position end;

function set_expected:
    input r0 as [u8; 32u32].public;
    async set_expected self.caller r0 into r1;
    output r1 as foo.aleo/set_expected.future;

finalize set_expected:
    input r0 as address.public;
    input r1 as [u8; 32u32].public;
    get admin[true] into r2;
    assert.eq r0 r2;
    set r1 into expected[true];
```

---

### 🗳️ Vote-Driven Upgrades

**Goal:** Require governance approval for upgrades.

```leo
import governor.aleo;

constructor:
    branch.neq foo.aleo/edition 0u16 to end;
    get governor.aleo/accepted[true] into r0;
    assert.eq foo.aleo/checksum r0;
```

---

### ⏳ Time-Locked Upgrades

**Goal:** Enable upgrades only after a specific block height.

```leo
constructor:
    gte block.height 10u32 into r0;
    assert.eq r0 true;
```

---

## 🔍 Deployment Validation Logic

| Condition             | Rule                                                        |
|-----------------------|-------------------------------------------------------------|
| `edition == 0`        | Program must not exist yet                                  |
| `edition > 0`         | Program must exist, be upgradable, and have edition = old + 1 |
| `checksum` (optional) | Must match the hash of program string                       |
| `program_owner`       | Available only for **post-feature** programs in `finalize`  |
