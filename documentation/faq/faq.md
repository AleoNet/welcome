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