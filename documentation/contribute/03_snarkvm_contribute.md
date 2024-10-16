---
id: snarkvm_contribute
title: SnarkVM Contribution
sidebar_label: SnarkVM Contribution
---
This guide details the steps required to update snarkVM and propagate these changes to the Aleo network.

## Branches Overview
[**staging branch**](https://github.com/AleoNet/snarkVM)
- This branch acts as a staging environment for integrating and initially testing changes before they are promoted to the mainnet branch.

[**mainnet branch**](https://github.com/AleoNet/snarkVM/tree/mainnet)
- This is the production branch where only stable and thoroughly tested changes are merged. It directly mirrors the staging branch after changes are validated. It is used to create production releases.

## Implications of a snarkVM Pull Request (PR)
- When a new PR is merged into staging for snarkVM, snarkOS must also be updated to reflect the updated snarkVM dependency. This requires a separate PR for snarkOS, ensuring all checks are passed as specified in the snarkOS contribution guide.
- In some cases, a snarkVM PR may have a corresponding "sister PR" in snarkOS, necessary for the successful compilation of snarkOS. Always check for the term "sister PR" in the PR README.

## Review and Merge Process for snarkVM PRs
**1. Review snarkVM PRs:**
- Carefully review PRs for snarkVM, considering their status and any comments.
**2. Run CI on snarkVM PRs:**
- Execute Continuous Integration (CI) to validate the reviewed PRs.
**3. Checkout and Push snarkVM Branch:**
- Checkout the relevant snarkVM branch and push it to the repository.
**4. Merge snarkVM PRs:**
- Merge the reviewed and approved snarkVM PRs.

## Genesis Block and Parameter Re-generation
- Re-generate Genesis Block and Parameters:
  - To determine if parameters need re-generation and uploading, run the scripts located in snarkVM/parameters/scripts/.
  - After running the scripts, execute git status. If no changes (git diff) are detected, there is no need to upload anything new.
  - First-Time Parameters CDN Use:
    - If this is the first time using the parameters CDN, also upload the .usrs files. These files are fixed and won't show any changes in git diff, but they must be present in the parameters CDN.
  - Resample Genesis Block:
    - You may need to resample the genesis block using the snarkup tool.

## Update snarkOS to Reference the Latest snarkVM Commit
- Create a snarkOS PR:
  - Create a PR for snarkOS that updates the Cargo.toml and Cargo.lock files to point to the latest snarkVM commit hash.
  - Follow the procedures outlined in the snarkOS contribution guide to ensure proper integration.
