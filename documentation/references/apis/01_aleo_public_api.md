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
| [`/committee/latest`](./15_get_committee.md), [`/latest/committee`](./15_get_committee.md) | Get the latest committee information |
| [`/stateRoot/latest`](./05_get_latest_state_root.md), [`/latest/stateRoot`](./05_get_latest_state_root.md) | Get the latest state root |
| `/latest/totalSupply` | Get the total supply |
| `/latest/circulatingSupply` | Get the circulating supply |

### Block Data
These endpoints provide block level information based on block height or block hash.

| Endpoint | Description |
|----------|-------------|
| [`/latest/block`](./04_get_latest_block.md), [`/block/latest`](./04_get_latest_block.md) | Get the latest block information |
| [`/latest/height`](./02_get_latest_height.md), [`/block/height/latest`](./02_get_latest_height.md) | Get the latest block height |
| [`/latest/hash`](./03_get_latest_hash.md), [`/block/hash/latest`](./03_get_latest_hash.md) | Get the latest block hash |
| [`/find/blockHash/{tx_id}`](./22_find_block_hash.md) | Find block hash by transaction ID |
| [`/block/{height_or_hash}`](./06_get_block.md) | Get block by height or hash |
| [`/blocks?start={start_height}&end={end_height}`](./07_get_blocks.md) | Get blocks by range |

### Program Data
These endpoints provide block level information based on block height or block hash.

| Endpoint | Description |
|----------|-------------|
| [`/program/{id}`](./13_get_program.md) | Get program information by ID |
| [`/program/{id}/mappings`](./16_get_mapping_names.md) | Get program mappings by ID |
| [`/program/{id}/mapping/{name}/{key}`](./17_get_mapping_value.md) | Get specific program mapping by name and key |
| [`/find/transactionID/deployment/{program_id}`](./24_find_transaction_id_from_program_id.md) | Find transaction ID for program deployment |

### Transaction Data
These endpoints provide block level information based on block height or block hash.

| Endpoint | Description |
|----------|-------------|
| [`/transaction/{id}`](./10_get_transaction.md) | Get transaction information by ID |
| [`/transaction/confirmed/{id}`](./11_get_confirmation_status.md) | Get confirmed transaction by ID |
| [`/transaction/broadcast`](./26_transaction_broadcast.md) | Broadcast a new transaction |
| [`/find/transitionID/{input_or_output_id}`](./23_find_transition_id.md) | Find transition ID by input or output ID |
| [`/find/transactionID/{transition_id}`](./25_find_transaction_id_from_transition_id.md) | Find transaction ID by transition ID |
| [`/block/{height}/transactions`](./08_get_block_transactions.md) | Get all transactions in a block by height |
| [`/memoryPool/transactions`](./12_get_memory_pool_transactions.md) | Get all transactions in the memory pool |