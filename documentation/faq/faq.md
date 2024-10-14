---
id: faq
title: FAQs
sidebar_label: FAQs
---
- Do applications in Aleo function similarly to ZK rollups?  

Differences between Aleo applications and ZK rollups:

| Aspect | ZK Rollup | Aleo Application |
|--------|-----------|-------------------|
| Information visibility | All **information is public** | Can make some inputs private, using the **zero-knowledge** property of **zk**SNARK |
| Proof generation | Rollup coordinator generates the proof and submits it in the rollup-transaction | Users generate the proof themselves and submit it as part of the transaction |
| Batching | Batches multiple transactions | Can batch multiple transitions into the same **transaction** |
| zkSNARK usage | Uses the **succinct** property to prove correct execution of a batch of transactions | Can use rollup-like architecture with added privacy features |

Similar to batching multiple transactions in a zk-rollup, Aleo has a way to batch multiple **transitions** into the same **transaction**.

## Query The Network

The Aleo Testnet API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer).

To query the network, make a request to Aleo Testnet public API by Provable.
<!-- markdown-link-check-disable -->

| URL              |
|------------------|
| [https://api.explorer.provable.com/v1/testnet](https://api.explorer.provable.com/v1/testnet/) |

<!-- markdown-link-check-enable -->
For example, you can [retrieve the current block height](https://api.explorer.provable.com/v1/testnet/latest/height). 

## Talks and Videos
Talks and videos from the Aleo community.
* Coinbase BUIDL - [**Learning LEO | Coding Private Application with ZK Cryptography**](https://youtu.be/LJXjtthDl6I)
* DEVCON - [**Aleo Developer Workshop: Leo Coding & Examples**](https://youtu.be/ABPCr2TwrgE)
* DEVCON - [**What are ZK Proofs Good For? Applications to Anonymous Identity, Sybil Prevention and Moderation**](https://youtu.be/d2n0Al0P2Jc)
* DEVCON - [**Efficient Private Delegation of zkSNARK Provers**](https://youtu.be/mFzwp8gGn-E)
* ICC - [**Web 3.0 for developers in TLV Howard Wu Aleo**](https://youtu.be/-FrrylHITvg)
* ZK8 - [**Demystifying Zero-Knowledge Programming – Howard Wu - Aleo**](https://youtu.be/e-1mPNEINRI)
* ETHCC - [**The Hitchhiker's Guide to ZK: An Aleo Developer Workshop**](https://youtu.be/fjfj5kFcQe4)
* CoinGecko - [**Importance of Zero-knowledge Proofs w/ Alex Pruden**](https://youtu.be/NvYddvVBjXY)
* Thinking Crypto - [**Alex Pruden Interview - Aleo's Privacy Solutions - Zero Knowledge Proofs - a16z - Bitcoin & Crypto**](https://youtu.be/1y4jvyy8Nsk)
* The Interop - [**Zero-Knowledge Smart Contracts with Alex Pruden of Aleo**](https://youtu.be/6BwefrwgN3w)
* Axelar - [**Tech Talks with Aleo**](https://youtu.be/P7G2DKWZbVM)


## More Aleo Resources
If you're interested in learning more about Aleo:

<!-- markdown-link-check-disable -->
[//]: # (disabling markdown checks for twitter links)
🐦 | X (Twitter) ~ @AleoHQ ~ **https://twitter.com/AleoHQ**

🤝 | Community X (Twitter) ~ @aleocommunity ~ **https://twitter.com/aleocommunity**

<!-- markdown-link-check-enable -->

🐙 | GitHub ~ **https://github.com/AleoNet**

📄 | Developer Documentation ~ **https://developer.provable.org/**

🎮 | Leo Playground ~ **https://play.leo-lang.org/**

🔎 | Aleo Block Explorer ~ **https://explorer.aleo.org/**

✍️ | Community Blog ~ **https://medium.com/@aleohq**

### Looking for [**Developer Resources?**](./leo/07_resources.md)