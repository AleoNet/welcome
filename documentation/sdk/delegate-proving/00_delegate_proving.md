---
id: delegate_proving
title: Delegated Proving
sidebar_label: Delegated Proving
---

# Introduction
Provable offers a proof delegation service that accelerates the transaction generation time. This code snippet demonstrates how to use the Provable SDK to submit a proving request for a transaction that sends public Aleo credits to another Aleo account.

## Obtain an API Key
(official API documentation: https://docs.explorer.provable.com/docs/api-reference/ppvrqeqo7tis5-register-a-new-user-and-issues-them-an-api-key)
You will need an API key in order to use the delegated proving service.  

Obtain a Provable API key using the following curl request:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"username": "ENTER_USERNAME_HERE"}' https://api.explorer.provable.com/v2/mainnet/auth/register
```

## Using the Delegated Proving Service in the Provable SDK
The following template code will generate a proving request and send it to the delegated proving service.  The transaction in the following example will send public Aleo credits to another Aleo account.  In addition to the API key, you will need to supply an Aleo account private key for the sender along with a recipient's public Aleo address:
```typescript
import { Account, AleoKeyProvider, AleoNetworkClient, CREDITS_PROGRAM_KEYS, initThreadPool, NetworkRecordProvider, ProgramManager } from '@provablehq/sdk/testnet.js';

await initThreadPool();

const apiKey = "YOUR_API_KEY";
const endpoint = "https://api.explorer.provable.com/v2/testnet";


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
    const provingRequest = await programManager.provingRequest({
        programName: "credits.aleo",
        functionName: "transfer_public",
        baseFee: 0.2,
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
        apiKey: apiKey,
    });

    // Optional logging of the response
    console.log("Proving Response:", provingResponse);
}

await delegatedProvingExample();
```