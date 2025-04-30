---
id: quick_start
title: Quick Start
sidebar_label: Quick Start
---
Deploy a token program program on the Aleo Testnet.


## 1. Generate a new Aleo account

### 1.1 Using Provable Tools (Provable SDK / Aleo SDK)

* Go to [provable.tools](https://www.provable.tools/), click **Try now** and click the **Generate** button under **Create a New Account**.

### 1.2 Using the Ecosystem Wallets

* [Leo Wallet](https://www.leo.app/)
* [Puzzle Wallet](https://puzzle.online/)
* [Soter Wallet](https://sotertech.io/)

:::note
Save your **Address**, **View Key**, and **Private Key** in a safe place, you'll need them later.
:::

## 2. Seeding your wallet with credits


To seed your wallet, you'll need to request credits from faucet provided by the ecosystem wallets at:
* [Leo Wallet Discord](https://www.leo.app/) (Scroll to bottom of the landing page to find Discord invite)
* [Puzzle Wallet Faucet](https://dev.puzzle.online/faucet)
* [Soter Wallet Faucet](https://faucetbeta.sotertech.io/)

The credits received from faucet will be public credits, which means they are publicly visible on the Aleo network before converting to private credits.

You can check to see if your account received testnet credits using any of the following block explorers:
<!-- markdown-link-check-disable -->
- [Provable Explorer](https://testnet.explorer.provable.com/)
- [Aleoscan](https://testnet.aleoscan.io/)
- [Aleo123](https://testnet.aleo123.io/)
- [Aleo.Info](https://testnet.aleo.info/)
<!-- markdown-link-check-enable -->

:::tip
While waiting for the credits to be sent to your wallet, you can proceed to the next step of creating a Leo application.
:::

## 3. Deploy a token program from the Leo Playground

Navigate to the [Leo Playground](https://play.leo-lang.org/) and select the Token example.

in `src/main.leo`, change the name of the program from `token.aleo` to include a unique identifier.  Be sure to copy and paste the new program name in the first field of the `program.json` file.

:::tip
The length of the application name should be at least 10 characters to optimize deployment costs. Deployment fees increase exponentially (base^10) for each character fewer than 10, so shorter names lead to significantly higher costs. Using a name with 10 or more characters helps keep deployment costs reasonable.
:::

:::info
The reason for using a random application name is that the Aleo network identifies each program with its unique Program ID, and no two programs can have the same ID in the program registry. By generating a random name, we ensure that our application's Program ID will be unique when deployed.
:::

* Update your `.env` with your private key and ensure that the endpoint uses the Provable Explorer endpoint:
```
NETWORK=testnet
PRIVATE_KEY=APrivateKey1...
ENDPOINT=https://api.explorer.provable.com/v1
```

You are now ready to deploy your first Aleo program to the Testnet!

## 4. Deploy your token application

:::tip Make sure that your account is funded with sufficient Testnet credits to deploy to the network.  
:::

* Deploy your Leo application to Aleo Testnet

Using the command line from Leo Playground, run the following command:
```
leo deploy
```

You should have seen a confirmation that your Aleo application was deployed in the form of a transaction ID that looks like the following `at1rkkpqu5k4rt86zzccczw6cxeyvrl7hxydvvv7dhl7zr7p9w40c8s70kwm8`. Copy your transaction ID to view the details of your deployment transaction on the Aleo block explorers:

<!-- markdown-link-check-disable -->
- [Provable Explorer](https://testnet.explorer.provable.com/)
- [Aleoscan](https://testnet.aleoscan.io/)
- [Aleo123](https://testnet.aleo123.io/)
- [Aleo.Info](https://testnet.aleo.info/)
<!-- markdown-link-check-enable -->

## 5. Execute a transaction

You can now use your deployed token program!  

When you call a method from your program, the logic is executed locally and is accompanied with a zero-knowledge proof that attests to the correctness of the program execution and corresponding outputs.  This proof does not reveal any information about the input values.  If the proof is verified by the validators, then the blockchain state is updated.  

* Minting a private token

Minting a private token entails creating a Record.  Records are data structures that are stored on-chain as ciphertexts and can only be decrypted using the View Key, which is derived from the Record owner's Private Key.  This ensures that only the owner of a Record has the ability to decrypt it.  

To mint a private token, replace YOUR_ADDRESS_HERE with your Aleo address and YOUR_PROGRAM_NAME with the name of your token program and then run the following command:

```
leo execute mint_private YOUR_ADDRESS_HERE 10u64 --program YOUR_PROGRAM_NAME.aleo --broadcast
```

You should see a confirmation that your Aleo application was executed, accompanied with a transaction ID. You can copy your transaction ID in one of the Aleo block explorers to view the details of your transaction.

* Mint a public token

Public tokens are stored in mappings.  Unlike Records, which are encrypted on-chain, mappings will always contain public data.  

Running the following command will mint a public token:

```
leo execute mint_public YOUR_ADDRESS_HERE 10u64 --program YOUR_PROGRAM_NAME.aleo --broadcast
```

To view the updated mapping, you can query the state of the program on the Aleo Testnet using the following command:

```
leo query program YOUR_PROGRAM_NAME.aleo
```

:::info
Awesome! You have successfully deployed and executed a Leo application to Testnet 🎉
:::

