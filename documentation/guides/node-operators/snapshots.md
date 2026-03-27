---
id: snapshots
title: Ledger Snapshots
sidebar_label: Ledger Snapshots
---

Downloading a ledger snapshot lets you bootstrap any node type (client, prover, or validator) without syncing from genesis. Choose the option that best fits your setup.

## Option 1 – Sync only missing or updated files with `gcloud rsync`

Smart sync – only copies changes, optionally deletes outdated files. Requires Google Cloud SDK.

- **Mainnet**
  ```sh
  gcloud storage rsync -r gs://snarkos-mainnet/uncompressed/block_storage_snapshot/ledger-0 {local-ledger-path}
  ```
- **Testnet**
  ```sh
  gcloud storage rsync -r gs://snarkos-testnet/uncompressed/block_storage_snapshot/ledger-1 {local-ledger-path}
  ```
- **Canary**
  ```sh
  gcloud storage rsync -r gs://snarkos-canary/uncompressed/block_storage_snapshot/ledger-2 {local-ledger-path}
  ```

**Useful flags:**

- `--delete-unmatched-destination-objects` → remove local files that don't exist in the source (ensures a clean mirror)

---

## Option 2 – Copy entire folder with `gcloud cp`

Blind copy – copies everything, even if already present. Requires Google Cloud SDK.

- **Mainnet**
  ```sh
  gcloud storage cp -r gs://snarkos-mainnet/uncompressed/block_storage_snapshot/ledger-0 {local-ledger-path}
  ```
- **Testnet**
  ```sh
  gcloud storage cp -r gs://snarkos-testnet/uncompressed/block_storage_snapshot/ledger-1 {local-ledger-path}
  ```
- **Canary**
  ```sh
  gcloud storage cp -r gs://snarkos-canary/uncompressed/block_storage_snapshot/ledger-2 {local-ledger-path}
  ```

---

## Option 3 – Download the entire ledger from scratch with `wget`

The archive filename always ends with `_00-00-01.tar`.

- **Mainnet**
  ```sh
  wget -c https://storage.googleapis.com/snapshots-mainnet/archive/$(date +%Y-%m-%d)_00-00-01.tar -O {local-ledger-path}
  ```
- **Testnet**
  ```sh
  wget -c https://storage.googleapis.com/snapshots-testnet/archive/$(date +%Y-%m-%d)_00-00-01.tar -O {local-ledger-path}
  ```
- **Canary**
  ```sh
  wget -c https://storage.googleapis.com/snapshots-canary/archive/$(date +%Y-%m-%d)_00-00-01.tar -O {local-ledger-path}
  ```

---

## Option 4 – Download with `aria2` (multi-connection, parallel download)

Install first: `sudo apt install -y aria2` on Ubuntu, `brew install aria2` on macOS.

- **Mainnet**
  ```sh
  aria2c -x 16 -s 16 -c https://snapshots.provable.com/mainnet/latest.tar
  ```
- **Testnet**
  ```sh
  aria2c -x 16 -s 16 -c https://snapshots.provable.com/testnet/latest.tar
  ```
- **Canary**
  ```sh
  aria2c -x 16 -s 16 -c https://snapshots.provable.com/canary/latest.tar
  ```
