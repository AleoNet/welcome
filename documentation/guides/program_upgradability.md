---
id: program_upgradability
title: Program Upgrades on Aleo
sidebar_label: Program Upgrades
---

:::info
Please note that this change is not yet live. It is expected to go live on Testnet at block 9,800,000 (expeceted 8/8/2025) and on Mainnet at block 10,272,000 (expeceted 8/19/2025).
:::

Traditionally, blockchain development has been defined by immutable, "deploy-once" contracts. This provides security but makes it hard to fix bugs or add features. To solve this, Aleo introduces a framework for program upgradability that is timely, cost-effective, and doesn't disrupt your application's state.

This framework moves Aleo development from a static model to a dynamic one, allowing applications to evolve. 
It lets you modify program logic after deployment, so you can patch vulnerabilities, improve features, and adapt to user needs without a complex and costly state migration. 
Developers are required to design upgradability at the start and reason about the lifecycle of their programs.

This guide covers how this feature works, its security implications, and the rules you need to follow.

## Constructor

The `constructor` is a special block of code that acts as the sole gateway for enabling and managing upgrades. Including a `constructor` in your program's code at its initial deployment is the only way to make it upgradable. 
Programs deployed after program upgradability is supported must all have **non-empty** constructors. 
Developers have the freedom to implement the `constructor` logic as they see fit, allowing for flexibility in how upgrades are handled. 

Its behavior is strictly defined:

*   **Execution Context:** The `constructor` logic runs on-chain by the Aleo Virtual Machine (AVM) only during a deployment event (the initial deployment and every subsequent upgrade). It never runs during a standard function call.
*   **Immutability:** The logic inside a `constructor` is permanent. Once a program is deployed, its `constructor` can't be modified or removed in an upgrade. This ensures the rules for upgrading your program are stable and can't be bypassed.
*   **Transaction Finality:** The `constructor` is a final check for any deployment or upgrade. If its logic halts (for example, due to a failed `assert` statement), the entire deployment or upgrade transaction fails. This makes the `constructor` a powerful tool for enforcing conditions on upgrades.

:::note
Mutability is a feature you must explicitly design into your program from the start.
:::

## Program Metadata Operands

Alongside the `constructor`, the AVM also provides three new metadata operands. These give you on-chain, verifiable information about the program's state, allowing you to write secure upgrade rules.

**`<PROGRAM_ID>/edition` | `edition` **
  *   **Description:** An unsigned 16-bit integer (`u16`) that acts as the program's version number.
  *   **Rules:** The `edition` must be `0u16` for the initial deployment. For every valid upgrade, it must increment by exactly 1.
  *   **Scope:** This operand is exclusively available within the `finalize` scope.

**`<PROGRAM_ID>/checksum` | `edition`**
  *   **Description:** A 32-byte array (`[u8; 32u32]`) representing the SHA3-256 hash of the program string. It's a unique fingerprint of the program's code.
  *   **Rules:** The `checksum` is required in any deployment of an upgradable program and is used to verify that the deployed code is what was expected.
  *   **Scope:** This operand is exclusively available within the `finalize` scope.

**`<PROGRAM_ID>/program_owner` | `program_owner`**
  *   **Description:** The `address` of the account that submitted the deployment transaction.
  *   **Rules:** The `program_owner` is required in any deployment of an upgradable program.
  *   **Scope:** This operand is exclusively available within the `finalize` scope.

:::info
The `finalize`-only scope for all three operands is a critical security feature. It forces any logic that authorizes an upgrade—based on ownership, version, or content—to be executed and verified on-chain as part of a public state transition. This prevents these sensitive checks from being spoofed or manipulated in an off-chain proof context.
:::

## Cost of Upgradability

Executing a `constructor` consumes network resources and has a cost. The cost model is the same as for standard `finalize` blocks but with a significant multiplier applied (currently 100x).

This higher cost serves two purposes. First, it reflects the importance of the deployment transaction. Second, it acts as an economic incentive to keep your `constructor` logic simple and efficient, which reduces the risk of bugs in this critical, immutable code.

## Rules of Upgradability

The Aleo protocol enforces strict rules on what makes a valid program upgrade. These rules balance the need for new logic with the need to protect a program's public interface and data structures, ensuring dependent programs and users aren't affected by breaking changes.

The AVM has clear rules about what you can add, modify, and what you can't change.

An upgrade **can**:
*   **Modify Logic:** Change the internal implementation of any existing `function` or `finalize` block. This is the main way to fix bugs or improve performance.
*   **Add New Components:** Define new `struct`s, `record`s, `mapping`s, `function`s, and `closure`s to extend functionality.
*   **Add Imports:** Import new external programs.

An upgrade **cannot**:
*   **Change Interfaces:** Modify the `input` or `output` signature of any existing `function`, or the `input` interface of a `finalize` block. This maintains backward compatibility.
*   **Modify Closures:** Change the logic within an existing `closure`. Doing so would invalidate all its proving and verifying keys, breaking existing user assets.
*   **Alter Data Structures:** Modify or remove any existing `struct`, `record`, or `mapping`. This preserves existing program state.
*   **Delete Components:** No program component of any kind can be deleted.

Below is a quick reference table:

| Program Component | Delete | Modify | Add |
| :--- | :---: | :---: | :---: |
| `import` | ❌ | ❌ | ✅ |
| `struct` | ❌ | ❌ | ✅ |
| `record` | ❌ | ❌ | ✅ |
| `mapping` | ❌ | ❌ | ✅ |
| `closure` | ❌ | ❌ | ✅ |
| `function` | ❌ | ✅ (logic) | ✅ |
| `finalize` | ❌ | ✅ (logic) | ✅ |
| `constructor` | ❌ | ❌ | ❌ |

## On-Chain Validation

When a `Deployment` transaction is submitted, the AVM runs a series of checks.

**1. New Program Deployment (`edition` is 0):**
For a new, upgradable program, the AVM verifies [1]:
*   The program contains a `constructor`.
*   The `edition` is `0u16`.
*   The `checksum` is present and matches the hash of the program code.
*   The `program_owner` is present and matches the transaction signer.
*   The program ID does not already exist.

**2. Program Upgrade (`edition` > 0):**
For an upgrade, the validation is more extensive [1]:
*   The program ID must already exist.
*   The new `edition` must be `old_edition + 1`.
*   The upgraded code must follow all modification rules (e.g., no changing function signatures).
*   The existing on-chain program being upgraded **must already have a `constructor`**.

This final check is the lynchpin of the system. It ensures that only programs designed for upgradability can ever be changed.

## Security and Best Practices

Upgradability is powerful, but it introduces risks around mutability. When you make a program upgradable, you take on the responsibility of managing that power securely. A malicious or compromised developer could push an upgrade that introduces vulnerabilities, drains funds, or freezes user assets.

When a user interacts with an upgradable program, they are trusting both the current code and the governance process that can change it.

### Constructor is immutable

The most critical security component of an upgradable program is the `constructor` itself. Its logic is immutable and cannot be changed by a future upgrade.

A bug in the `constructor` is permanent and cannot be patched. If you hardcode the wrong admin address or have a flaw in your voting logic, you could be locked out or have your governance bypassed forever. Treat your `constructor` as mission-critical code and subject it to rigorous audits before deployment.

### Design Patterns 

You can use several patterns in your `constructor` to build safer, more trustworthy programs.

*   **Multi-Signature Governance:** Require multiple signatures for an upgrade to prevent a single point of failure.
*   **Time-Locked Upgrades:** Enforce a delay between announcing an upgrade and executing it. This gives users time to review the changes and opt out.
*   **Program Ossification:** Include a mechanism to permanently disable future upgrades, for example by setting the constructor only runs when program edition is 0 but not future edition.
*   **Dependency Pinning:** If your program depends on another upgradable program, you can "pin" the dependency to a specific version by asserting its `edition` in a `finalize` block (e.g., `assert.eq child.aleo/edition 0u16;`). This protects you from breaking changes in the dependency but requires you to upgrade your own program to adopt new, legitimate versions of that dependency. [Example below](#managing-dependencies).

## Examples

The `constructor` lets you implement a wide range of governance models. Below are practical, commented examples written in Aleo Instructions (the low-level format executed by the AVM) for common upgrade patterns. 

To learn how to write these patterns in the Leo language, please refer to the [Leo documentation](https://github.com/ProvableHQ/leo-docs-source/blob/6ec29db64ef4620b9bfd86a876818f260202c230/documentation/guides/03_program_upgradability.md).

### Non-upgradable program

A program that can never be upgraded.

```aleo
program noupgrade_example.aleo;

constructor:
    // This assertion checks if the program's edition is 0.
    // It passes on initial deployment. For any upgrade attempt,
    // the edition will be > 0, causing the assertion to fail and
    // halting the upgrade transaction.
    assert.eq edition 0u16;

//... other program logic...
```
The `constructor` ensures the program can only be deployed at `edition 0`, making upgrades impossible.

### Admin-controlled upgrades

Restrict upgrades to a single, hardcoded administrator address.

```aleo
program admin_example.aleo;

constructor:
    // This asserts that the address deploying this version of the program is the predefined ADMIN_ADDRESS.
    // IMPORTANT: This address is hardcoded and cannot be changed after deployment.
    assert.eq program_owner <ADMIN_ADDRESS>;

//... other program logic...
```
This pattern uses `program_owner` operand to check that the deployer is the designated admin. It's simple, but if the admin key is lost, control is lost forever.

### Configurable admin & pre-approved upgrades

Allow a changeable admin to pre-authorize specific upgrades by their `checksum`.

```aleo
program preapproved_example.aleo;

mapping admin:
    key as boolean.public;
    value as address.public;

mapping expected:
    key as boolean.public;
    value as [u8; 32u32].public;

constructor:
    // If this is the first deployment (edition 0), set the initial admin.
    branch.neq edition 0u16 to upgrade_check;
    set <ADMIN_ADDRESS> into admin[true]; // Replace with the initial admin address.
    branch.eq true true to end;

    // For all upgrades, check the checksum against the pre-approved value.
    position upgrade_check;
    get expected[true] into r0;
    assert.eq checksum r0;

    position end;

// This function allows the current admin to set the checksum for the next upgrade.
function set_expected:
    input r0 as [u8; 32u32].public;
    async set_expected self.caller r0 into r1;
    output r1 as foo.aleo/set_expected.future;

finalize set_expected:
    input r0 as address.public; // The caller.
    input r1 as [u8; 32u32].public; // The expected checksum.
    // Get the current admin.
    get admin[true] into r2;
    // Check that the caller is the admin.
    assert.eq r0 r2;
    // Set the checksum for the next expected upgrade.
    set r1 into expected[true];
```
This pattern uses on-chain `mapping`s to store the admin and the `checksum` of the next valid upgrade. A separate function, `set_expected`, allows the admin to authorize the next upgrade. Another function could be added to change the admin, providing more flexibility than a hardcoded address.

### DAO-driven upgrades

Let an external DAO contract governs upgrades.

```aleo
import governor.aleo;

program dao_example.aleo;

constructor:
    // If edition is 0 (first deployment), skip upgrade checks.
    branch.eq edition 0u16 to end;

    // This assumes 'governor.aleo' is a DAO contract that stores the
    // checksum of an approved upgrade in a mapping.
    get governor.aleo/approved_checksum[true] into r0;

    // Assert that the checksum of the program being deployed
    // matches the checksum approved by the DAO.
    assert.eq checksum r0;

    position end;

//... other program logic...
```
This pattern delegates upgrade authority to another program. The `constructor` fetches the valid `checksum` from the DAO contract, decoupling the application's logic from its governance.

### Time-locked upgrade

**Goal:** Only allow upgrades after a specific block height.

```aleo
program timelock_example.aleo;

constructor:
    // Checks if the edition is 0 (first deployment); if so, skips the time-lock check.
    gt edition 0u16 into r0;
    branch.eq r0 false to end_then_0_0;

    // Otherwise, it asserts that the current block height is greater than or equal
    // to the defined height, creating a time-lock for upgrades.
    gte block.height <BLOCK_HEIGHT> into r1;
    assert.eq r1 true;
    
    branch.eq true true to end_otherwise_0_1;
    position end_then_0_0;
    position end_otherwise_0_1;

//... other program logic...
```
*   **Mechanism:** This `constructor` uses `block.height` to enforce a time-based constraint, which can ensure a "cool-down" period before an upgrade is applied.[1]

### Program ossification

Allow an admin to permanently lock a program from future upgrades.

```aleo
program ossification_example.aleo;

mapping is_locked:
    key as boolean.public;
    value as boolean.public;

constructor:
    // This check runs on every upgrade attempt. If the 'is_locked' flag
    // is true, the assertion fails, halting the upgrade.
    contains is_locked[true] into r0;
    assert.eq r0 false;

    //... other upgrade logic (e.g., admin check) can follow...

//... other logic, including a function for an admin to set is_locked[true] to true.
```
*This pattern uses a `mapping` as a one-way flag. Once set to `true`, the `constructor` will block all future upgrade attempts.

### Managing dependencies

Protect a program from unexpected upgrades in its dependencies by pinning to a specific version.

```aleo
import child.aleo;

program parent.aleo;

constructor:
    //... Programs that fix dependencies should have an upgrade mechanism
    // in case the dependency made an upgrade.

function some_function:
    //... logic that calls a function from child.aleo
    call child.aleo/some_child_function...;

finalize some_function:
    //...
    // In the finalize scope, assert that the dependency is on the expected edition.
    // This must be in finalize, as the 'edition' operand is only available here.
    assert.eq child.aleo/edition 0u16;
    //...

//... other program logic...
```
This is a defensive pattern used in a `finalize` block, not the `constructor`. It checks the `edition` of a dependency before interacting with it. This prevents breaking changes but requires an upgrade to `parent.aleo` to adopt a new, valid version of `child.aleo`.

:::warning[important]
If using this pattern, we recommend you make your program upgradable, in case your function is locked due to a dependency upgrade.
:::

## Quick Reference Summary

| Concept | Mechanism                                                           | Critical Takeaway                                                                        |
| :--- |:--------------------------------------------------------------------|:-----------------------------------------------------------------------------------------|
| **Enabling Upgradability** | All new programs must specify how they will handle upgrades.        | Know your upgrade.                                                                       |
| **Legacy Program Status** | Programs deployed before the feature lack a `constructor`.          | Permanently non-upgradable.                                                              |
| **Upgrade Authority** | The immutable logic within the `constructor`.                       | Your `constructor` is your governance. Its logic is permanent.                           |
| **Core Risk** | The `constructor` logic itself is immutable and cannot be patched.  | A bug in the `constructor` is permanent. Audit this code with extreme care.              |
| **Valid Upgrade Changes** | Modify logic in `function`s/`finalize`; add new components.         | Interfaces (function signatures, existing data structures) cannot be changed or removed. |
| **Program Ossification** | Logic in the `constructor` to permanently revoke upgrade authority. | Provide a path to make your program immutable to build long-term user trust.             |

## Pre-Upgradability Programs

All programs deployed to the Aleo network before the upgradability feature was activated are, and will remain, permanently non-upgradable.

The AVM's validation logic requires that an existing program must have a `constructor` to be upgraded. Since legacy programs were created before the `constructor` existed, they don't have one. Any attempt to upgrade a legacy program will automatically fail the AVM's checks.

:::note
1.  A program with a `constructor` is upgradable.
2.  A program without a `constructor` is permanently non-upgradable.
:::

### The No-Migration Policy

Early proposals discussed a "one-time migration" path that would have allowed owners of legacy programs to add a `constructor`.

**This proposed migration path has been officially rescinded and is not supported by the protocol.** There is no way to retroactively add a `constructor` to a program that has already been deployed.

If you maintain a legacy application and need to add new features or fix bugs, you must deploy an entirely new program and create a migration path for your users to move their state and assets.
