---
id: delegate_proving
title: Delegated Proving
sidebar_label: Delegated Proving
---

# Introduction
Provable offers a proof delegation service that accelerates the transaction generation time. This code snippet demonstrates how to use the Provable SDK to submit a proving request for a transaction that sends public Aleo credits to another Aleo account.

## Obtain an API Key and JWT Token
You will need an API key and JWT token in order to use the delegated proving service. Follow these steps:

1. **Register a consumer** to get an API key — see the [Auth Register API documentation](https://docs.provable.com/docs/api/services/get-auth-register).
2. **Obtain a JWT** — see the [Issue JWT API documentation](https://docs.provable.com/docs/api/services/issue-jwt).
3. **Call the prover** — see the [Delegated Proving API documentation](https://docs.provable.com/docs/api/services/get-prove).

## Using the Delegated Proving Service in the Provable SDK
The following template code will generate a proving request and send it to the delegated proving service.  The transaction in the following example will send public Aleo credits to another Aleo account.  In addition to the JWT token, you will need to supply an Aleo account private key for the sender along with a recipient's public Aleo address:

:::tip[Estimating Fees]
Before submitting a proving request, you can estimate the required fees using the SDK's fee estimation methods:
- [`estimateExecutionFee`](../api-specification/03_program_manager.md#estimateexecutionfee) - Estimate the execution fee for an Aleo function
- [`estimateFeeForAuthorization`](../api-specification/03_program_manager.md#estimatefeeforauthorization) - Estimate the fee for an authorization

This helps ensure you set the correct `baseFee` value in your proving request.
:::
```typescript
import { Account, AleoKeyProvider, AleoNetworkClient, CREDITS_PROGRAM_KEYS, initThreadPool, NetworkRecordProvider, ProgramManager } from '@provablehq/sdk/testnet.js';

await initThreadPool();

const jwtToken = "YOUR_JWT_TOKEN"; // Obtained from step 2 above
const expiration = 1234; // Obtained from step 2 above
const endpoint = "https://api.provable.com/prove/testnet/prove";


async function delegatedProvingExample() {
    // Create a temporary account for the execution of the program
    const account = new Account({privateKey: "YOUR_PRIVATE_KEY"});

    // Create a key provider in order to re-use the same key for each execution
    const keyProvider = new AleoKeyProvider();
    keyProvider.useCache(true);

    // Create a program manager to handle the proving requests
    const programManager = new ProgramManager("https://api.explorer.provable.com/v1");
    programManager.setKeyProvider(keyProvider);
    programManager.setAccount(account);


    // Build a proving request for the "transfer_public" function of "credits.aleo".
    // Note: Fee is estimated automatically
    const provingRequest = await programManager.provingRequest({
        programName: "credits.aleo",
        functionName: "transfer_public",
        priorityFee: 0,
        privateFee: false,
        inputs: [
            "RECEIVER_ADDRESS",
            "1000000u64",
        ],
        broadcast: true, //Set to true if you would like the delegated service to broadcast the transaction.
    });

    console.log("Submitting proving request...");
    // Submit the proving request to the network client.
    const provingResponse = await programManager.networkClient.submitProvingRequest({
        provingRequest: provingRequest,
        url: endpoint,
        jwtData: {jwt: jwtToken, expiration: exp}, // JWT token will be set as the Authorization header
    });

    // Optional logging of the response
    console.log("Proving Response:", provingResponse);
}

await delegatedProvingExample();
```

## Security

The AleoVM/snarkVM stack has been extensively reviewed by third-party auditors, see [Security Audits](/concepts/audits).

### Threat model and trust assumptions

Delegated proving moves part of transaction generation to a third party. In particular:

- **Privacy**: the prover learns the **signed plaintext** call data you submit (including private function inputs and outputs).
- **Integrity**: the prover is **cryptographically bound** to the signed request (program/function + inputs/outputs) and cannot change your intent without invalidating it.
- **Availability**: the prover can censor by dropping/delaying requests or not broadcasting. This is detectable, and you can retry or switch provers.

Keep **key material local**: never send a private key to a delegated prover (sign client-side).
