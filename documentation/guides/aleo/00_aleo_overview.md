---
id: aleo
title: Aleo instructions and snarkVM
sidebar_label: Overview
---
Welcome to the Aleo instructions guide. Aleo instructions is the intermediate representation of Aleo programs.
All Leo programs compile to Aleo instructions which compile to bytecode.
We recommend learning and using Aleo instructions if your goal is fine-grained circuit design or
if you are implementing a compiler that reads in a high-level language other than Leo and want your programs to run on Aleo.

Aleo programs are files with a `.aleo` extension.
Aleo programs contain Aleo instructions - an assembly-like programming language.
Aleo instructions are compiled into AVM opcodes that can be executed by the Aleo Virtual Machine.

Install snarkVM to compile and execute Aleo instructions.

:::info
snarkVM is currently in active development. Please monitor the repository on [**GitHub**](https://github.com/AleoNet/snarkVM) for possibly breaking changes.
:::

## Installing snarkVM

Proceed to [**Installation**](./01_installation.md) for information on how to install snarkVM.

## Hello Aleo Instructions

Develop your first [**Hello Aleo**](./02_hello.md) Aleo instructions program.

## Aleo Instructions Guide

Learn the core concepts and syntax of [Aleo instructions](./03_language.md).

Read the full list of supported [AVM opcodes](./04_opcodes.md).

## Formal Language Documentation

Check your program or compiler implementation against the [Aleo instructions grammar](./06_grammar.md).

Study the formal [ABNF grammar specification](https://github.com/ProvableHQ/grammars) for the full formal syntax of Aleo instructions.

## Command Line Interface Documentation

The snarkVM CLI provides a suite of commands to make programming in Aleo instructions easy.

* [snarkvm new](./05_commands.md#snarkvm-new)
* [snarkvm build (deprecated)](./05_commands.md#snarkvm-build)
* [snarkvm run](./05_commands.md#snarkvm-run)
* [snarkvm clean](./05_commands.md#snarkvm-clean)
* [snarkvm update](./05_commands.md#snarkvm-update)

[//]: # (5. [aleo node]&#40;./05_commands.md#5-aleo-node&#41;)
[//]: # (6. [aleo deploy]&#40;./05_commands.md#6-aleo-deploy&#41;)

## Additional Material

Install Aleo instructions for your favorite code [**editor**](./07_tooling.md).