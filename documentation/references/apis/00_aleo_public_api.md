---
id: public_api
title: Aleo Public API
sidebar_label: Aleo Public API
---
## Overview of Provable's API Offerings

The Provable API is designed to provide users with access to the Aleo blockchain through RESTful endpoints that allow one to query the network for block level information, transactions, transitions, and more. Developers can easily interact directly with Aleo through both retreiving data as well as broadcasting transactions. These provided endpoints are essential for the ecosystem to flourish and grow.

## API Base URLs

| Environment | URL |
|-------------|-----|
| Mainnet API | https://api.explorer.provable.com/v1/mainnet |
| Testnet API | https://api.explorer.provable.com/v1/testnet |
| Mock Server | https://stoplight.io/mocks/provable1/api-reference/33447 |

## Rate Limiting
Rate limiting is setup across all provided endpoints and follows the below limits:

Users are allowed to perform 5 requests per second and up to 100,000 requests per day.
Rate limiting will be enforced and users are subject to blacklisting if they abuse the use of our API. For inquiries into obtaining higher rate limits, please reach out at devservices@provable.com.

## API Endpoints

### Network Data
These endpoints allow one to fetch the most recent data gathered from the most recent block (i.e. tip of chain).

| Endpoint | Description |
|----------|-------------|
| [`/committee/latest`](/references/apis/10_get_committee), [`/latest/committee`](/references/apis/10_get_committee) | Get the latest committee information |
| [`/stateRoot/latest`](/references/apis/03_get_latest_state_root), [`/latest/stateRoot`](/references/apis/03_get_latest_state_root) | Get the latest state root |
| `/latest/totalSupply` | Get the total supply |
| `/latest/circulatingSupply` | Get the circulating supply |

### Block Data
These endpoints provide block level information based on block height or block hash.

| Endpoint | Description |
|----------|-------------|
| [`/latest/block`](/references/apis/03_get_latest_block), [`/block/latest`](/references/apis/03_get_latest_block) | Get the latest block information |
| [`/latest/height`](/references/apis/01_get_latest_height), [`/block/height/latest`](/references/apis/01_get_latest_height) | Get the latest block height |
| [`/latest/hash`](/references/apis/02_get_latest_hash), [`/block/hash/latest`](/references/apis/02_get_latest_hash) | Get the latest block hash |
| [`/find/blockHash/{tx_id}`](/references/apis/14_find_block_hash) | Find block hash by transaction ID |
| [`/block/{height_or_hash}`](/references/apis/04_get_block) | Get block by height or hash |
| [`/blocks?start={start_height}&end={end_height}`](/references/apis/04_get_blocks) | Get blocks by range |

### Program Data
These endpoints provide block level information based on block height or block hash.

| Endpoint | Description |
|----------|-------------|
| [`/program/{id}`](/references/apis/08_get_program) | Get program information by ID |
| [`/program/{id}/mappings`](/references/apis/11_get_mapping_names) | Get program mappings by ID |
| [`/program/{id}/mapping/{name}/{key}`](/references/apis/12_get_mapping_value) | Get specific program mapping by name and key |
| [`/find/transactionID/deployment/{program_id}`](/references/apis/20_find_transaction_id_from_program_id) | Find transaction ID for program deployment |

### Transaction Data
These endpoints provide block level information based on block height or block hash.

| Endpoint | Description |
|----------|-------------|
| [`/transaction/{id}`](/references/apis/06_get_transaction) | Get transaction information by ID |
| [`/transaction/confirmed/{id}`](/references/apis/18_get_confirmation_status) | Get confirmed transaction by ID |
| [`/transaction/broadcast`](/references/apis/23_transaction_broadcast) | Broadcast a new transaction |
| [`/find/transitionID/{input_or_output_id}`](/references/apis/15_find_transition_id) | Find transition ID by input or output ID |
| [`/find/transactionID/{transition_id}`](/references/apis/21_find_transaction_id_from_transition_id) | Find transaction ID by transition ID |
| [`/block/{height}/transactions`](/references/apis/05_get_block_transactions) | Get all transactions in a block by height |
| [`/memoryPool/transactions`](/references/apis/07_get_memory_pool_transactions) | Get all transactions in the memory pool |