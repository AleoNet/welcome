---
id: overview
title: Overview
sidebar_label: Overview
---

Aleo uses two elliptic curves that work together as a complementary pair: **BLS12-377** and **Edwards BLS12**.

## Field Identity

The two curves are designed so their fields interlock:

```
BLS12-377 scalar field (Fr)  =  Edwards BLS12 base field (Fq)
   8444461749428370424248824938781546531375899335154063827935233455917409239041
```

This identity is the key architectural decision. It means that arithmetic done inside a BLS12-377 proof (which works natively in Fr) can be expressed as native field operations on the Edwards BLS12 curve — no expensive field emulation required. This enables efficient recursive proof composition.

## Comparison

|                        |    Edwards BLS12    |        BLS12-377         |
|:---------------------- |:-------------------:|:------------------------:|
| Curve model            |   Twisted Edwards   |    Short Weierstrass     |
| Pairing-friendly       |         No          |  Yes (embedding degree 12) |
| Scalar field bits      |       251 bits      |         253 bits         |
| Base field bits        |       253 bits      |         377 bits         |
| G1 compressed size*    |      32 bytes       |         48 bytes         |
| G2 compressed size*    |        N/A          |         96 bytes         |
| Primary use            | Addresses, signatures | SNARK proofs, polynomial commitments |

\* rounded to multiples of 8 bytes.

## How They Work Together

The design pattern is:

**Outer layer (BLS12-377):** The SNARK prover works in BLS12-377. It generates proofs about arbitrary computations. The proof is verified using pairings on BLS12-377.

**Inner layer (Edwards BLS12):** User-level operations (key generation, signing, address derivation) use Edwards BLS12. When these operations need to be proven correct inside a SNARK, the Edwards BLS12 arithmetic is expressed as constraint equations over the BLS12-377 scalar field Fr — which is exactly the Edwards BLS12 base field Fq. There is no field mismatch, so the constraints are cheap.

This inner/outer structure is the same pattern used in projects like Zcash (Jubjub + BLS12-381), but Aleo's specific curve choices were made to maximize FFT efficiency in the proof system.

## Keccak

The sponge construction `Sponge[f, pad, r]` takes a variable-length input and produces a fixed-length output (the hash value).

The permutation `f = Keccak-f[b]` where `b := 25 * 2^l`. With `l = 6`, the state is `b = 1600` bits — a 5×5 grid of 64-bit lanes.

The bitrate `r` is the number of bits XORed into the state during each absorb step; the capacity is `c := b - r`.

### Padding

Keccak (original, Ethereum-style) and SHA-3 (FIPS 202) use the same permutation but differ in their domain-separation suffix:

| Variant | Padding suffix | `pad(M)` |
|:------- |:-------------- |:-------- |
| Keccak  | `0x01`         | `M \|\| 0x01 \|\| 0x00…0x00 \|\| 0x80` |
| SHA-3   | `0x06`         | `M \|\| 0x06 \|\| 0x00…0x00 \|\| 0x80` |
| SHAKE   | `0x1F`         | `M \|\| 0x1F \|\| 0x00…0x00 \|\| 0x80` |

Note: SHA-3 and SHAKE are distinct instances. SHA-3 uses `0x06`; SHAKE uses `0x1F`.

### Parameters in snarkVM

| Variant | Bitrate (`r`) | Capacity (`c`) |
|:------- |:------------- |:-------------- |
| Keccak-256 / SHA3-256 | 1088 bits | 512 bits |
| SHA3-512 | 576 bits | 1024 bits |
