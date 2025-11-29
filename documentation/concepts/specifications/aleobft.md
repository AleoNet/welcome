---
id: aleobft
title: AleoBFT Specifications
sidebar_label: AleoBFT
---

## [AleoBFT](https://developer.aleo.org/specs/aleobft.pdf)

AleoBFT is the consensus algorithm that powers the Aleo blockchain. It is designed to ensure secure and reliable agreement among validators. AleoBFT builds on concepts from Narwhal and Bullshark, optimizing for dynamic validator committees and staking participation. Validators in AleoBFT collect transactions and submit proposals, which are then endorsed by others to form cryptographic certificates. These certificates are structured into a Directed Acyclic Graph (DAG), enabling efficient ordering of transactions and preventing forks, thus ensuring a robust and scalable consensus process.

## [AleoBFT Syncing](https://developer.aleo.org/specs/aleobft_syncing.pdf)

When a validator (re)joins the network it quickly learns what it’s missing by exchanging compact “checkpoint” and “recent” block summaries with peers via periodic pings. By comparing these locators, it detects any gaps in its local copy, then asks a rotating set of peers for the missing blocks in small batches. Each returned block is cross-checked against multiple peers and its embedded sub-DAG data is applied to rebuild the recent certificate graph. Once it has filled in all gaps, the validator is fully synced and can immediately take part in proposing and endorsing new blocks.
