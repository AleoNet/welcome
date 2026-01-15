---
id: delegate_proving
title: Delegated Proving
sidebar_label: Delegated Proving
---

# Introduction
Provable offers a proof delegation service that accelerates the transaction generation time. This code snippet demonstrates how to use the Provable SDK to submit a proving request for a transaction that sends public Aleo credits to another Aleo account.

## Obtain an API Key and JWT Token
You will need an API key and JWT token in order to use the delegated proving service. Follow these steps:

### 1. Register consumer to get a key:
POST `api.provable.com/consumers` with the body `{ "username": "<your_username>" }`

See the [Auth Register API documentation](https://docs.provable.com/docs/api/services/get-auth-register) for details.

### 2. Get a JWT:
POST `api.provable.com/jwts/<your_consumer_id>` with your key set as the `X-Provable-API-Key` header. The token will be in the `Authorization` header of the response.

See the [Issue JWT API documentation](https://docs.provable.com/docs/api/services/issue-jwt) for details.

### 3. Call the prover:
POST `api.provable.com/prove/<network>/prove` where `<network>` is either `testnet` or `mainnet`. For all requests you will need to set your JWT as the `Authorization` header of the request.

See the [Delegated Proving API documentation](https://docs.provable.com/docs/api/services/get-prove) for details.

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
    // Note: You can estimate the baseFee using estimateExecutionFee() or estimateFeeForAuthorization()
    const provingRequest = await programManager.provingRequest({
        programName: "credits.aleo",
        functionName: "transfer_public",
        baseFee: 0.2, // Consider using estimateExecutionFee() to determine the correct fee
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
        apiKey: jwtToken, // JWT token will be set as the Authorization header
    });

    // Optional logging of the response
    console.log("Proving Response:", provingResponse);
}

await delegatedProvingExample();
```