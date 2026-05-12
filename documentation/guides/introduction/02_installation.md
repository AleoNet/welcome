---
id: installation
title: Installation
sidebar_label: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Install the following tools in order to develop and test programs locally:

## 1. Installing Leo 🦁

### 1.1 Install Git

**[bit.ly/start-git](https://bit.ly/start-git)**

### 1.2 Install Rust

**[bit.ly/start-rust](https://bit.ly/start-rust)**

### 1.3 Install Leo

<Tabs groupId="leo-install">
  <TabItem value="cargo" label="Cargo (Recommended)" default>

```bash
cargo install leo-lang
```

This installs the `leo` executable to `~/.cargo/bin/leo`.

  </TabItem>
  <TabItem value="binary" label="Pre-Built Binary">

Download the latest release from the [Leo GitHub releases page](https://github.com/ProvableHQ/leo/releases), then:

```bash
# Make the binary executable
chmod +x leo

# Move it to your system path
mv leo /usr/local/bin
```

Pre-built binaries are available for macOS Apple Silicon and other platforms. Browse all options on the [releases page](https://github.com/ProvableHQ/leo/releases).

  </TabItem>
  <TabItem value="source" label="Build from Source">

```bash
# Download the source code
git clone https://github.com/ProvableHQ/leo
cd leo

# Install 'leo'
cargo install --path .
```

  </TabItem>
</Tabs>

### 1.4 Verify Installation

To verify your installation, run:

```bash
leo --version
```

### 1.5 Update Leo

You can update Leo to the latest version using the following command:
```bash
leo update
```

The [Leo CLI guide](https://docs.leo-lang.org/cli/overview) provides descriptions for all of the CLI commands.

The [Leo Language guide](https://docs.leo-lang.org/language/overview) provides an overview of the syntax and semantics of the Leo programming language.

### 1.6 Optional: IDE Syntax Highlighting

Aleo maintains syntax highlighting implementations for various popular code editors. This can significantly enhance your development experience by providing visual cues and making your Leo code more readable. Here's a brief overview of the supported editors:

1. Visual Studio Code
2. Sublime Text
3. Intellij

For detailed instructions on how to set up syntax highlighting for these editors, please refer to the [Tooling for Leo](https://docs.leo-lang.org/getting_started/ide#plugins) guide.

## 2. Installing snarkOS

### 2.1 Prerequisites

**Supported operating systems (64-bit only):**
- Ubuntu 22.04 LTS
- macOS Ventura or later
- Windows 11 or later

**Rust:** Install the version specified in the [`rust-toolchain`](https://github.com/ProvableHQ/snarkOS/blob/mainnet/rust-toolchain) file via [rustup](https://www.rust-lang.org/tools/install).

**[For Windows users]** Additional dependencies are required:
1. Install C++ Clang tools for Windows via the Visual Studio Installer
2. Set the `LIBCLANG_PATH` environment variable to the location of the installed `libclang.dll` file, typically found at:
   ```
   Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\VC\Tools\Llvm\x64\bin
   ```

### 2.2 Clone the snarkOS repository

```bash
git clone --branch mainnet --single-branch https://github.com/ProvableHQ/snarkOS.git
cd snarkOS
```

**[For Ubuntu users]** A helper script to install dependencies is available:
```bash
./build_ubuntu.sh
```

### 2.3 Install snarkOS

```bash
cargo install --locked --path .
```

**Optional: GPU support (experimental)**

CUDA support is available but considered unstable:
```bash
cargo install --locked --path . --features cuda
```

### 2.4 Verify Installation

```bash
snarkos --version
```

## 3. Next Steps

:::tip
We recommend starting with the [Quick Start Guide](01_quick_start.md). This guide will walk you through creating your first Aleo application, deploying it to the network, and executing program functions. This hands-on experience will give you a practical understanding of the Aleo platform's core features and workflow.
:::

You now have all of the tools to build and test Leo programs locally.  Before deploying to the Testnet, we recommend testing your program using a local network.  The following [guide](https://docs.leo-lang.org/guides/devnet) explains how to initialize and deploy programs to a local network.

