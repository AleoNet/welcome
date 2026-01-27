---
id: installation
title: Installation
sidebar_label: Installation
---

## Overview

There are two common ways to build with Aleo locally:

- Install **Leo CLI** if you want to **write, build, and run Aleo programs** from the command line (recommended for most developers).
- Use **snarkVM** if you want to **integrate Aleo primitives in a Rust project** (as a library, or by building from source).

## Install Leo CLI

Follow the official Leo CLI installation guide:

- [Installation | Welcome to the Leo Docs](https://docs.leo-lang.org/getting_started/installation)

After installation, verify Leo is available:

```bash
leo --version
```

## Install and use snarkVM as a Rust library

### 1. Install prerequisites

#### 1.1 Install Git

**[bit.ly/start-git](https://bit.ly/start-git)**

#### 1.2 Install Rust

We recommend installing Rust using [rustup](https://rustup.rs/):

**macOS or Linux:**

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

**Windows:**

Download the [Windows 64-bit executable](https://win.rustup.rs/x86_64) or [Windows 32-bit executable](https://win.rustup.rs/i686) and follow the on-screen instructions.

#### 1.3 Install additional dependencies (macOS)

If you are building Rust crates from source on macOS, you may need the following packages:

```bash
brew install pkgconf
brew install openssl
```

#### 1.4 Check the prerequisites

```bash
git --version
cargo --version
```

### 2. Add snarkVM to a Rust project

Add snarkVM to your `Cargo.toml`:

```toml
[dependencies]
snarkvm = "<version>"
```

Replace `<version>` with your desired version from [crates.io](https://crates.io/crates/snarkvm).

### 3. (Optional) Build snarkVM from source

Building snarkVM from source is optional, and mainly useful if you are developing or auditing snarkVM.

```bash
# Fetch the repository's staging branch
git clone --branch staging --single-branch https://github.com/ProvableHQ/snarkVM.git
cd snarkVM

# Build in release mode
cargo build --release
```

