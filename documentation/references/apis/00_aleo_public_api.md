---
id: public_api
title: Aleo Public API
sidebar_label: Aleo Public API
---
## What is the Aleo Public API endpoint?

The Aleo public API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer).

To query the network, make a request to Aleo public API by Provable.
<!-- markdown-link-check-disable -->

| URL              |
|------------------|
| https://api.explorer.provable.com/v1/{network} |

Simply replace `{network}` in the base URL with either `testnet` or `mainnet` to query the desired network.

For example, you can [retrieve the current block height](https://api.explorer.provable.com/v1/testnet/block/height/latest).