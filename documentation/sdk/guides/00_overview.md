---
id: overview
title: Overview
sidebar_label: Overview
---


## Tools for Building Zero Knowledge Web Apps

The Provable SDK is a collection of JavaScript libraries for building zero knowledge web applications in both the browser
and node.js.

## Overview

Aleo provides the ability to run programs in zero knowledge. The Provable SDK provides the tools to use these programs
within the browser and all other levels of the web stack to build privacy preserving applications.

The Provable SDK provides the following functionality (Click to see examples):
1. [Aleo account management](https://provable.tools/account)
2. [Web-based program execution and deployment](https://provable.tools/develop)
3. [Aleo credit transfers](https://provable.tools/transfer)
4. [Management of program state and data](https://provable.tools/record)
5. [Communication with the Aleo network](https://provable.tools/rest)

## Table of Contents

* [Getting Started](./01_getting_started.md)
* [Create An Aleo Account](./02_create_account.md)
* [Execute Aleo Programs](./03_execute_programs.md)
    * [Aleo Programs](./03_execute_programs.md#aleo-programs)
    * [Program Execution Model](./03_execute_programs.md#program-execution-model)
    * [WebAssembly Initialization](./03_execute_programs.md#webassembly-initialization)
    * [Local Program Execution](./03_execute_programs.md#local-program-execution)
    * [Online Program Execution](./03_execute_programs.md#program-execution-on-the-aleo-network)
    * [Program Proving Keys and Records](./03_execute_programs.md#program-proving-keys--program-records)
    * [Deploy Programs](./03_execute_programs.md#deploy-a-new-program-to-the-aleo-network)
    * [React Example](./03_execute_programs.md#react-example)
* [Aleo Credit Transfers](./04_aleo_credit_transfers.md)
    * [Transfer Aleo Credits](./04_aleo_credit_transfers.md#transfer-aleo-credits)
    * [Check Public Balances](./04_aleo_credit_transfers.md#checking-public-balances)
* [Program Data and Private State](./05_managing_state.md)
    * [Private State Data: Records](./05_managing_state.md#private-state-data-records)
    * [Record Usage Example](./05_managing_state.md#record-usage-example-private-value-transfers)
    * [Public State Data: Mappings](./05_managing_state.md#public-state-data-mappings)
    * [Reading Mappings](./05_managing_state.md#reading-mappings)
    * [Initializing and Updating Mappings](./05_managing_state.md#initializing--updating-mappings)
* [Communicating with the Aleo Network](./06_network_communication.md)


## Further Documentation

API documentation for this package, the Leo Language, and Aleo instructions can be found on the [Aleo Developer Hub](../../guides/aleo/00_aleo_overview.md).

To view the API documentation for this package locally, open `docs/index.html`.
To regenerate the documentation, run `npx jsdoc --configure jsdoc.json --verbose`