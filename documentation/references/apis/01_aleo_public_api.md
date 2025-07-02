---
id: public_api
title: Aleo Public API
sidebar_label: Aleo Public API
---
## Overview of Provable's API Offerings

The Provable API is designed to provide users with access to the Aleo blockchain through RESTful endpoints that allow one to query the network for block level information, transactions, transitions, and more. Developers can easily interact directly with Aleo through both retreiving data as well as broadcasting transactions. These provided endpoints are essential for the ecosystem to flourish and grow.

## API Base URLs

<!-- markdown-link-check-disable -->
| Environment | URL |
|-------------|-----|
| Mainnet API | https://api.explorer.provable.com/v1/mainnet |
| Testnet API | https://api.explorer.provable.com/v1/testnet |
| Mock Server | https://stoplight.io/mocks/provable1/api-reference/33447 |
<!-- markdown-link-check-enable -->

## Rate Limiting
Rate limiting is setup across all provided endpoints and follows the below limits:

Users are allowed to perform 5 requests per second and up to 100,000 requests per day.
Rate limiting will be enforced and users are subject to blacklisting if they abuse the use of our API. For inquiries into obtaining higher rate limits, please reach out at devservices@provable.com.

## API Endpoints

### Block Data
These endpoints provide block level information based on block height or block hash.

| Endpoint | Description |
|----------|-------------|
| [`/latest/block`](./02_get_latest_block.md), [`/block/latest`](./02_get_latest_block.md) | Get the latest block information |
| [`/latest/height`](./03_get_latest_height.md), [`/block/height/latest`](./03_get_latest_height.md) | Get the latest block height |
| [`/latest/hash`](./04_get_latest_hash.md), [`/block/hash/latest`](./04_get_latest_hash.md) | Get the latest block hash |
| [`/find/blockHash/{tx_id}`](./05_find_block_hash.md) | Find block hash by transaction ID |
| [`/block/{height_or_hash}`](./06_get_block.md) | Get block by height or hash |
| [`/{network}/block/{height_hash}/transactions`](./07_get_block_transactions.md) | Get block transactions by height or hash |

### Network Data
These endpoints allow one to fetch the most recent data gathered from the most recent block (i.e. tip of chain) and network information.

| Endpoint | Description |
|----------|-------------|
| [`/committee/latest`](./08_get_committee.md), [`/latest/committee`](./08_get_committee.md) | Get the latest committee information |
| [`/stateRoot/latest`](./09_get_latest_state_root.md), [`/latest/stateRoot`](./09_get_latest_state_root.md) | Get the latest state root |
| [`/latest/totalSupply`](./10_get_latest_total_supply.md) | Get the total supply |
| [`/latest/circulatingSupply`](./11_get_latest_circulating_supply.md) | Get the circulating supply |

### Program Data
These endpoints provide program-related information including deployments and mappings.

| Endpoint | Description |
|----------|-------------|
| [`/find/transactionID/deployment/{program_id}`](./12_find_transaction_id_from_program_id.md) | Find transaction ID for program deployment |
| [`/program/{id}`](./13_get_program.md) | Get program information by ID |
| [`/program/{id}/mappings`](./14_get_mapping_names.md) | Get program mappings by ID |
| [`/program/{id}/mapping/{name}/{key}`](./15_get_mapping_value.md) | Get specific program mapping by name and key |

### Transaction Data
These endpoints provide transaction-related information including confirmations and transitions.

| Endpoint | Description |
|----------|-------------|
| [`/find/transactionID/{transition_id}`](./16_find_transaction_id_from_transition_id.md) | Find transaction ID by transition ID |
| [`/find/transitionID/{input_or_output_id}`](./17_find_transition_id.md) | Find transition ID by input or output ID |
| [`/transaction/{id}`](./18_get_transaction.md) | Get transaction information by ID |
| [`/transaction/confirmed/{id}`](./19_get_transaction_confirmed.md) | Get transaction confirmation status |
| [`/transaction/unconfirmed/{id}`](./20_get_transaction_unconfirmed.md) | Get unconfirmed transaction details by ID |
| [`/transaction/broadcast`](./21_transaction_broadcast.md) | Broadcast a new transaction |