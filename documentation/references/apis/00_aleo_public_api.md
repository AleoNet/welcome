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
| `/latest/committee` | Get the latest committee information |
| `/latest/stateRoot` | Get the latest state root |
| `/latest/totalSupply` | Get the total supply |
| `/latest/circulatingSupply` | Get the circulating supply |

### Block Data
These endpoints provide block level information based on block height or block hash.

| Endpoint | Description |
|----------|-------------|
| `/latest/block` | Get the latest block information |
| `/latest/height` | Get the latest block height |
| `/latest/hash` | Get the latest block hash |
| `/find/blockHash/{tx_id}` | Find block hash by transaction ID |
| `/block/height/latest` | Get the latest block by height |
| `/block/hash/latest` | Get the latest block by hash |
| `/block/latest` | Get the latest block |
| `/block/{height_or_hash}` | Get block by height or hash |

### Program Data
These endpoints provide block level information based on block height or block hash.

| Endpoint | Description |
|----------|-------------|
| `/program/{id}` | Get program information by ID |
| `/program/{id}/mappings` | Get program mappings by ID |
| `/program/{id}/mapping/{name}/{key}` | Get specific program mapping by name and key |
| `/find/transactionID/deployment/{program_id}` | Find transaction ID for program deployment |

### Transaction Data
These endpoints provide block level information based on block height or block hash.

| Endpoint | Description |
|----------|-------------|
| `/transaction/{id}` | Get transaction information by ID |
| `/transaction/confirmed/{id}` | Get confirmed transaction by ID |
| `/transaction/broadcast` | Broadcast a new transaction |
| `/find/transitionID/{input_or_output_id}` | Find transition ID by input or output ID |
| `/find/transactionID/{transition_id}` | Find transaction ID by transition ID |
| `block/{height}/transactions` | Get all transactions in a block by height |